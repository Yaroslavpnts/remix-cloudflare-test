import {
  json,
  redirect,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "@remix-run/cloudflare";
// import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  // useLocation,
  useRouteError,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import darkFav from "~/icons/favicon-dark.png";
// import lightFav from "~/icons/favicon-light.png";
import stylesheet from "~/tailwind.css";
import NotFoundPage from "./components/404";
import Header from "./components/Header";
import ContactFormFullPage from "./components/sections/ContactFormFullPage/ContactFormFullPage";
import mixpanel from "mixpanel-browser";
import { ContactFormPageProvider } from "./contexts/ContactFormPage.context";
import { EventBannerProvider } from "./contexts/EventBanner.context";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const faviconBaseOnColorSchema = () => {
  // if (typeof window === "undefined") return;

  // TODO fix icon (caused hydration issues)
  // const matcher = window.matchMedia("(prefers-color-scheme: dark)");

  // if (matcher.matches) {
  //   return <link rel="shortcut icon" type="image/png" href={lightFav} />;
  // }

  return <link rel="shortcut icon" type="image/png" href={darkFav} />;
};

declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
  }
}

export async function loader({ context, request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const lastChar = url.pathname[url.pathname.length - 1];

  // if last character is slash, redirect to url without slash
  if (lastChar === "/" && url.pathname.length > 1) {
    return redirect(url.pathname.slice(0, -1), {
      status: 308,
      headers: {
        "Cache-Control": "max-age=0, s-maxage=3600",
      },
    });
  }

  return json({
    env: context.env,
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  const gtmDidInitRef = useRef(false);

  // const location = useLocation();
  useEffect(() => {
    if (data?.env?.MIXPANEL_KEY) {
      mixpanel.init(data?.env?.MIXPANEL_KEY, {
        debug: !!data?.env?.DEBUG,
        track_pageview: true,
      });
    }
  }, []);

  // useEffect(() => {
  //   mixpanel.track_pageview();
  // }, [location.pathname]);

  useEffect(() => {
    if (!data?.env?.GTM_KEY) {
      return;
    }

    if (gtmDidInitRef.current) {
      return;
    }

    function initGTM() {
      // flag to ensure script does not get added to DOM more than once.
      gtmDidInitRef.current = true;

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;

      // ensure PageViews is always tracked (on script load)
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          window.dataLayer.push(arguments);
        }

        window.gtag = gtag;

        gtag("js", new Date());
        gtag("config", `${context?.env?.GTM_KEY}`);
      };

      script.src = `https://www.googletagmanager.com/gtm.js?id=${data?.env?.GTM_KEY}`;

      document.head.appendChild(script);
    }

    initGTM();
  }, []);

  return (
    <Document context={data}>
      <ContactFormPageProvider>
        <EventBannerProvider>
          <Outlet context={data} />
        </EventBannerProvider>
      </ContactFormPageProvider>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error?.status === 404) {
    return (
      <Document>
        <ContactFormPageProvider>
          <EventBannerProvider>
            <NotFoundPage />
          </EventBannerProvider>
        </ContactFormPageProvider>
      </Document>
    );
  }

  console.log(error);

  return (
    <Document>
      <ContactFormPageProvider>
        <EventBannerProvider>
          <Header navigationSections={[]} />
          <section className={"bg-white pb-12 bgg pt-48"}>
            <div className="container grid grid-cols-12 sm:gap-10">
              <div className="col-span-12 sm:col-span-8">
                <h1 className="yw-h3 mb-6">Unknown Error</h1>
              </div>
            </div>
          </section>
        </EventBannerProvider>
        <ContactFormFullPage />
      </ContactFormPageProvider>
    </Document>
  );
}

const Document = ({
  children,
  context,
}: {
  children: React.ReactNode;
  context?: any;
}) => {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {context?.env?.NOINDEX && <meta name="robots" content="noindex" />}
        {faviconBaseOnColorSchema()}
        <Meta />
        <Links />

        <link
          rel="preload"
          href="/fonts/montserrat/Montserrat-Bold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/opensans/OpenSans-Regular.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/opensans/OpenSans-Bold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};
