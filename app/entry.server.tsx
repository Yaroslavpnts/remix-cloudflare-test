/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import type { AppLoadContext, EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToReadableStream } from "react-dom/server";

async function generateJWT(
  privateKey: string,
  clientEmail: string,
  scopes: string[]
) {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: clientEmail, // Service account email
    scope: scopes.join(" "), // Scopes separated by space
    aud: "https://oauth2.googleapis.com/token", // Token URI
    exp: now + 3600, // Expiration time (1 hour from now)
    iat: now, // Issued at time
  };

  // Base64 encode header and payload
  const base64Header = btoa(JSON.stringify(header));
  const base64Payload = btoa(JSON.stringify(payload));

  // Create the data to sign
  const unsignedToken = `${base64Header}.${base64Payload}`;

  // Import private key and sign the data
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    Uint8Array.from(atob(privateKey), (c) => c.charCodeAt(0)),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(unsignedToken)
  );

  const base64Signature = btoa(
    String.fromCharCode(...new Uint8Array(signature))
  );

  // Combine header, payload, and signature into a JWT
  return `${unsignedToken}.${base64Signature}`;
}

async function fetchAccessToken(jwt: string) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch access token: ${response.statusText}`);
  }

  const data = await response.json<{ access_token: string }>();

  return data.access_token;
}

async function writeGoogleCloudLog(accessToken: string, logEntry: any) {
  const response = await fetch(
    "https://logging.googleapis.com/v2/entries:write",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logEntry),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to write log: ${response.statusText}`);
  }

  return response.json();
}

async function createLog(
  request: Request,
  responseStatusCode: number,
  context: AppLoadContext
) {
  const privateKey = context?.env?.GOOGLE_CLOUD_PEM_KEY;

  const clientEmail =
    "yojji-logging@fine-loader-445018-k3.iam.gserviceaccount.com";
  const scopes = ["https://www.googleapis.com/auth/cloud-platform"];
  const logEntry = {
    logName: "projects/fine-loader-445018-k3/logs/remixApp",
    resource: {
      type: "global",
    },
    entries: [
      {
        jsonPayload: {
          message: "yojji-site-log",
          method: request.method,
          url: request.url,
          userAgent: request.headers.get("user-agent"),
          status: responseStatusCode,
        },
      },
    ],
  };

  try {
    const jwt = await generateJWT(privateKey, clientEmail, scopes);

    const accessToken = await fetchAccessToken(jwt);

    await writeGoogleCloudLog(accessToken, logEntry);
  } catch (error: any) {
    console.error("Error during writing log", error.message);
  }
}

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) {
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error: unknown) {
        // Log streaming rendering errors from inside the shell
        console.error(error);
        responseStatusCode = 500;
      },
    }
  );

  if (isbot(request.headers.get("user-agent"))) {
    await body.allReady;
  }

  await createLog(request, responseStatusCode, loadContext);

  responseHeaders.set("Content-Type", "text/html");

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
