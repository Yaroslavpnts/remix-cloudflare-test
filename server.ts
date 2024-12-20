import { createSessionStorage, logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

// export const onRequest = createPagesFunctionHandler({
//   build,
//   getLoadContext: (context) => ({ env: context.env }),
//   mode: build.mode,
// });


export function SessionWrapper(kv) {
  return createSessionStorage({
      // cookie: {
      //     name: "<COOKIE_NAME>",
      //     httpOnly: true,
      //     maxAge: 3600 * 24,
      //     sameSite: "strict",
      //     secure: true,
      //     secrets: ['secretKey']
      // },
      async createData(data, expires) {
          while (true) {
              let prefix = data?.prefix ? `${data.prefix}_` : ''
              let id = prefix + crypto.randomUUID().replace(/-/gi,'').slice(0, 16)

              if (await kv.get(id, "json")) {
                  continue;
              }

              await kv.put(id, JSON.stringify(data), {
                  expiration: expires
                      ? Math.round(expires.getTime() / 1000)
                      : undefined,
              });

              return id;
          }
      },
      async readData(id) {
          let session = await kv.get(id);

          if (!session) {
              return null;
          }

          return JSON.parse(session);
      },
      async updateData(id, data, expires) {
          await kv.put(id, JSON.stringify(data), {
              expiration: expires ? Math.round(expires.getTime() / 1000) : undefined,
          });
      },
      async deleteData(id) {
          await kv.delete(id);
      },
  })
}

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => {
      const {getSession, commitSession, destroySession} = SessionWrapper(context.env.<KV_NAMESPACE>)
      return {
          ...context.env,
          getSession,
          commitSession,
          destroySession,
      }
  },
});