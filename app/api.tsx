import qs from "~/utils/qs";

const getCacheKey = async (url: string) => {
  const msgUint8 = new TextEncoder().encode(url); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("MD5", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const cacheKey = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return cacheKey;
}

export const createApi = (context: any, pageRequest?: any) => {
  const globalOptions: any = {};

  if (pageRequest) {
    const url = new URL(pageRequest.url);
    globalOptions.skipCache = url.searchParams.get("skipCache");
  }

  const cache = context.env.KV_API_CACHE;
  const cacheEnabled = context.env.CACHE_ENABLED;

  const request = async (url: string, options: any) => {
    let combinedUrl = context.env.STRAPI_URL + "/api" + url;

    if (options?.params) {
      const urlParsed = new URL(combinedUrl);
      const urlParams = qs.parse(urlParsed.search);
      const query = qs.stringify({ ...urlParams, ...options.params });
      combinedUrl = `${urlParsed.origin}${urlParsed.pathname}?${query}`;
    }

    const cacheKey = await getCacheKey(combinedUrl);
    if (globalOptions?.skipCache) {
      await cache.delete(cacheKey);
    }

    if (
      !globalOptions?.skipCache &&
      cache &&
      options?.method === "GET" &&
      cacheEnabled
    ) {

      const existInCache = await cache.get(cacheKey, {
        type: "json",
      });
      if (existInCache) {
        if (context.env.DEBUG) {
          console.log("[FROM CACHE]", combinedUrl, cacheKey, existInCache);
        }
        return existInCache;
      }
    }

    if (context.env.DEBUG) {
      console.log("[UPSTREAM API CALL]", combinedUrl);
    }

    const response = await fetch(combinedUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.env.STRAPI_TOKEN}`,
      },
      ...options,
    });

    const result = await response.json();

    if (context.env.DEBUG) {
      console.log("[UPSTREAM API CALL response]", result);
    }

    if (
      cache &&
      options?.method === "GET" &&
      cacheEnabled &&
      response.status === 200
    ) {
      const value = JSON.stringify(result);
      await cache.put(cacheKey, value, {
        expirationTtl: 60 * (context.env.CACHE_MINUTES || 5), // 1 minute
        metadata: { url: combinedUrl.substring(0, 500) },
      });
    }

    return result;
  };

  return {
    get: (url: string, options?: any) =>
      request(url, { method: "GET", ...(options || {}) }),
    put: (url: string, options?: any) =>
      request(url, { method: "PUT", ...(options || {}) }),
  };
};
