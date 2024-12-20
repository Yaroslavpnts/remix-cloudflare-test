import { type LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import { prepareMeta } from "~/utils/meta";
import Layout from "~/components/Layout";

export const meta = (props: any) => {
  const metaArray = prepareMeta(props);

  return metaArray;
};

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);

  const footerData = await api.get(
    `/footer?populate=columns.items,columns.sub_items`
  );
  const testimonials = await api.get(
    `/testimonials?populate=image&sort=createdAt:desc`
  );

  return json({
    footerData: footerData?.data?.attributes || {},
    testimonials: testimonials?.data,

    env: context.env,
    meta: {
      title: "Cookie Policy - Yojji",
      description: `
          This document informs Users about the technologies that help this
          Application to achieve the purposes described below. Such
          technologies allow the Owner to access and store information (for
          example by using a Cookie) or use resources (for example by running
          a script) on a User’s device as they interact with this Application.
        `,
    },
  });
};

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="!max-w-[850px] container m-auto grid grid-cols-12 gap-y-10 pt-32 pb-10">
        <div className="col-span-12">
          <h1 className="yw-h1 mb-9">Cookie Policy</h1>
          <p className="yw-t1">
            This document informs Users about the technologies that help this
            Application to achieve the purposes described below. Such
            technologies allow the Owner to access and store information (for
            example by using a Cookie) or use resources (for example by running
            a script) on a User’s device as they interact with this Application.
            <br />
            <br />
            For simplicity, all such technologies are defined as "Trackers"
            within this document – unless there is a reason to differentiate.
            For example, while Cookies can be used on both web and mobile
            browsers, it would be inaccurate to talk about Cookies in the
            context of mobile apps as they are a browser-based Tracker. For this
            reason, within this document, the term Cookies is only used where it
            is specifically meant to indicate that particular type of Tracker.
            <br />
            <br />
            Some of the purposes for which Trackers are used may also require
            the User's consent. Whenever consent is given, it can be freely
            withdrawn at any time following the instructions provided in this
            document.
            <br />
            <br />
            This Application uses Trackers managed directly by the Owner
            (so-called “first-party” Trackers) and Trackers that enable services
            provided by a third-party (so-called “third-party” Trackers). Unless
            otherwise specified within this document, third-party providers may
            access the Trackers managed by them. The validity and expiration
            periods of Cookies and other similar Trackers may vary depending on
            the lifetime set by the Owner or the relevant provider. Some of them
            expire upon termination of the User’s browsing session. In addition
            to what’s specified in the descriptions within each of the
            categories below, Users may find more precise and updated
            information regarding lifetime specification as well as any other
            relevant information — such as the presence of other Trackers — in
            the linked privacy policies of the respective third-party providers
            or by contacting the Owner.
          </p>
        </div>
        <div className="col-span-12">
          <h2 className="yw-h3 mb-4">
            Activities strictly necessary for the operation of this Application
            and delivery of the Service
          </h2>
          <p className="yw-t1">
            This Application uses so-called “technical” Cookies and other
            similar Trackers to carry out activities that are strictly necessary
            for the operation or delivery of the Service.
          </p>
        </div>
        <div className="col-span-12">
          <h4 className="yw-h4 mb-4">Third-party Trackers</h4>
        </div>
        <div className="col-span-12">
          <h3 className="yw-h3 mb-4">Tag Management</h3>
          <p className="yw-t1">
            This type of service helps the Owner to manage the tags or scripts
            needed on this Application in a centralized fashion. This results in
            the Users' Data flowing through these services, potentially
            resulting in the retention of this Data.
          </p>
        </div>
        <div className="col-span-12">
          <h4 className="yw-h4 mb-4">Google Tag Manager (Google LLC)</h4>
          <p className="yw-t1">
            Google Tag Manager is a tag management service provided by Google
            LLC.
            <br />
            <br />
            In order to understand Google's use of Data, consult their{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              partner policy
            </a>{" "}
            and their{" "}
            <a
              href="https://business.safety.google/privacy/"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              Business Data page.
            </a>
            <br />
            <br />
            Personal Data processed: Trackers.
            <br />
            <br />
            Place of processing: United States –{" "}
            <a
              href="https://business.safety.google/privacy/"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy.
            </a>
          </p>
        </div>
        <div className="col-span-12">
          <h3 className="yw-h3 mb-4">
            Other activities involving the use of Trackers
          </h3>
        </div>
        <div className="col-span-12">
          <h3 className="yw-h3 mb-4">Experience</h3>
          <p className="yw-t1">
            This Application uses Trackers to improve the quality of the user
            experience and enable interactions with external content, networks
            and platforms.
          </p>
        </div>
        <div className="col-span-12">
          <h4 className="yw-h4 mb-4">
            Displaying content from external platforms
          </h4>
          <p className="yw-t1">
            This type of service allows you to view content hosted on external
            platforms directly from the pages of this Application and interact
            with them. Such services are often referred to as widgets, which are
            small elements placed on a website or app. They provide specific
            information or perform a particular function and often allow for
            user interaction. This type of service might still collect web
            traffic data for the pages where the service is installed, even when
            Users do not use it.
          </p>
        </div>
        <div className="col-span-12">
          <h5 className="yw-h5 mb-4">Google Maps widget (Google LLC)</h5>
          <p className="yw-t1">
            Google Maps is a maps visualization service provided by Google LLC
            that allows this Application to incorporate content of this kind on
            its pages.
            <br />
            <br />
            Personal Data processed: Trackers.
            <br />
            <br />
            Place of processing: United States –{" "}
            <a
              href="https://business.safety.google/privacy/"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy.
            </a>
          </p>
        </div>
        <div className="col-span-12">
          <h3 className="yw-h3 mb-4">Measurement</h3>
          <p className="yw-t1">
            This Application uses Trackers to measure traffic and analyse User
            behaviour to improve the Service.
          </p>
        </div>
        <div className="col-span-12">
          <h4 className="yw-h4 mb-4">Analytics</h4>
          <p className="yw-t1">
            The services contained in this section enable the Owner to monitor
            and analyze web traffic and can be used to keep track of User
            behavior.
          </p>
        </div>
        <div className="col-span-12">
          <h5 className="yw-h5 mb-4">Google Analytics 4 (Google LLC)</h5>
          <p className="yw-t1">
            Google Analytics 4 is a web analysis service provided by Google LLC
            (“Google”). Google utilizes the Data collected to track and examine
            the use of this Application, to prepare reports on its activities
            and share them with other Google services. Google may use the Data
            collected to contextualize and personalize the ads of its own
            advertising network. In Google Analytics 4, IP addresses are used at
            collection time and then discarded before Data is logged in any data
            center or server. Users can learn more by consulting{" "}
            <a
              href="https://support.google.com/analytics/answer/12017362?hl=en&ref_topic=2919631"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              Google’s official documentation.
            </a>
            <br />
            <br />
            In order to understand Google's use of Data, consult their{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              partner policy
            </a>{" "}
            and their{" "}
            <a
              href="https://business.safety.google/privacy/"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              Business Data page.
            </a>
            <br />
            <br />
            Personal Data processed: number of Users, session statistics,
            Trackers and Usage Data.
            <br />
            <br />
            Place of processing: United States –{" "}
            <a
              href="https://business.safety.google/privacy/"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            –{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=en"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              Opt Out.
            </a>
            <br />
            <br />
            Storage duration:
            <br />
            <br />
          </p>
          <ul className="yw-t1">
            <li className="mb-4 ml-5 list-disc">_ga: 2 years</li>
            <li className="mb-4 ml-5 list-disc">_ga_*: 2 years</li>
          </ul>
        </div>
        <div className="col-span-12">
          <h3 className="yw-h3 mb-4">
            How to manage preferences and provide or withdraw consent on this
            Application
          </h3>
          <p className="yw-t1">
            Whenever the use of Trackers is based on consent, users can provide
            or withdraw such consent by setting or updating their preferences
            via the relevant privacy choices panel available on this
            Application.
            <br />
            <br />
            With regard to any third-party Trackers, Users can manage their
            preferences via the related opt-out link (where provided), by using
            the means indicated in the third party's privacy policy, or by
            contacting the third party.
          </p>
        </div>
        <div className="col-span-12">
          <h4 className="yw-h4 mb-4">
            How to control or delete Cookies and similar technologies via your
            device settings
          </h4>
          <p className="yw-t1">
            Users may use their own browser settings to:
            <br />
            <br />
            <ul className="yw-t1">
              <li className="mb-4 ml-5 list-disc">
                See what Cookies or other similar technologies have been set on
                the device; Block Cookies or similar technologies; Clear Cookies
                or similar technologies from the browser.
              </li>
              <li className="mb-4 ml-5 list-disc">
                See what Cookies or other similar technologies have been set on
                the device; Block Cookies or similar technologies; Clear Cookies
                or similar technologies from the browser.
              </li>
              <li className="mb-4 ml-5 list-disc">
                See what Cookies or other similar technologies have been set on
                the device; Block Cookies or similar technologies; Clear Cookies
                or similar technologies from the browser.
              </li>
            </ul>
            The browser settings, however, do not allow granular control of
            consent by category.
            <br />
            <br />
            Users can, for example, find information about how to manage Cookies
            in the most commonly used browsers at the following addresses:
            <br />
            <br />
            <ul className="yw-t1">
              <li className="mb-4 ml-5 list-disc">
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies"
                  className="underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li className="mb-4 ml-5 list-disc">
                <a
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  className="underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li className="mb-4 ml-5 list-disc">
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/"
                  className="underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple Safari
                </a>
              </li>
              <li className="mb-4 ml-5 list-disc">
                <a
                  href="https://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies"
                  className="underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Microsoft Internet Explorer
                </a>
              </li>
              <li className="mb-4 ml-5 list-disc">
                <a
                  href="https://support.microsoft.com/en-us/help/4027947"
                  className="underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
              <li className="mb-4 ml-5 list-disc">
                <a
                  href="https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing"
                  className="underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Brave
                </a>
              </li>
              <li className="mb-4 ml-5 list-disc">
                <a
                  href="https://help.opera.com/en/latest/web-preferences/#cookies"
                  className="underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Opera
                </a>
              </li>
            </ul>
            Users may also manage certain categories of Trackers used on mobile
            apps by opting out through relevant device settings such as the
            device advertising settings for mobile devices, or tracking settings
            in general (Users may open the device settings and look for the
            relevant setting).
            <br />
            <br />
            <h4 className="yw-h4 mb-4">
              Consequences of denying the use of Trackers
            </h4>
            Users are free to decide whether or not to allow the use of
            Trackers. However, please note that Trackers help this Application
            to provide a better experience and advanced functionalities to Users
            (in line with the purposes outlined in this document). Therefore, if
            the User chooses to block the use of Trackers, the Owner may be
            unable to provide related features.
          </p>
        </div>
        <div className="col-span-12">
          <h3 className="yw-h3 mb-4">Owner and Data Controller</h3>
          <p className="yw-t1">
            YOJJI LTD - 30 BRUTON WAY, 2ND FLOOR, ENGLAND, UNITED KINGDOM,
            LONDON, W13 0BY
            <br />
            <br />
            <b>Owner contact email: </b>hello@yojji.io
            <br />
            <br />
            Since the use of third-party Trackers through this Application
            cannot be fully controlled by the Owner, any specific references to
            third-party Trackers are to be considered indicative. In order to
            obtain complete information, Users are kindly requested to consult
            the privacy policies of the respective third-party services listed
            in this document.
            <br />
            <br />
            Given the objective complexity surrounding tracking technologies,
            Users are encouraged to contact the Owner should they wish to
            receive any further information on the use of such technologies by
            this Application.
          </p>
        </div>
        <div className="col-span-12">
          <h3 className="yw-h3 mb-4">Definitions and legal references</h3>
          <h4 className="yw-h4 mb-4">Personal Data (or Data)</h4>
          <p className="yw-t1">
            Any information that directly, indirectly, or in connection with
            other information — including a personal identification number —
            allows for the identification or identifiability of a natural
            person.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">Usage Data</h4>
          <p className="yw-t1">
            Information collected automatically through this Application (or
            third-party services employed in this Application), which can
            include: the IP addresses or domain names of the computers utilized
            by the Users who use this Application, the URI addresses (Uniform
            Resource Identifier), the time of the request, the method utilized
            to submit the request to the server, the size of the file received
            in response, the numerical code indicating the status of the
            server's answer (successful outcome, error, etc.), the country of
            origin, the features of the browser and the operating system
            utilized by the User, the various time details per visit (e.g., the
            time spent on each page within the Application) and the details
            about the path followed within the Application with special
            reference to the sequence of pages visited, and other parameters
            about the device operating system and/or the User's IT environment.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">User</h4>
          <p className="yw-t1">
            The individual using this Application who, unless otherwise
            specified, coincides with the Data Subject.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">Data Subject</h4>
          <p className="yw-t1">
            The natural person to whom the Personal Data refers.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">Data Processor (or Processor)</h4>
          <p className="yw-t1">
            The natural or legal person, public authority, agency or other body
            which processes Personal Data on behalf of the Controller, as
            described in this privacy policy.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">Data Controller (or Owner)</h4>
          <p className="yw-t1">
            The natural or legal person, public authority, agency or other body
            which, alone or jointly with others, determines the purposes and
            means of the processing of Personal Data, including the security
            measures concerning the operation and use of this Application. The
            Data Controller, unless otherwise specified, is the Owner of this
            Application.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">This Application</h4>
          <p className="yw-t1">
            The means by which the Personal Data of the User is collected and
            processed.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">Service</h4>
          <p className="yw-t1">
            The service provided by this Application as described in the
            relative terms (if available) and on this site/application
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">European Union (or EU)</h4>
          <p className="yw-t1">
            Unless otherwise specified, all references made within this document
            to the European Union include all current member states to the
            European Union and the European Economic Area.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">Cookie</h4>
          <p className="yw-t1">
            Cookies are Trackers consisting of small sets of data stored in the
            User's browser.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">Tracker</h4>
          <p className="yw-t1">
            Tracker indicates any technology - e.g Cookies, unique identifiers,
            web beacons, embedded scripts, e-tags and fingerprinting - that
            enables the tracking of Users, for example by accessing or storing
            information on the User’s device.
          </p>
          <br />
          <br />
          <h4 className="yw-h4 mb-4">Legal information</h4>
          <p className="yw-t1">
            This privacy policy relates solely to this Application, if not
            stated otherwise within this document. Latest update: August 02,
            2024
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
