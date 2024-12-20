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
      title: "Privacy Policy - Yojji",
      description: `
          Welcome to YOJJI LTD YOJJI LTD (“us”, “we”, or “our”) operates
          https://yojji.io/ (hereinafter referred to as “Service”).
          Our Privacy Policy governs your visit to https://yojji.io/, and
          explains how we collect, safeguard and disclose information that
          results from your use of our Service.
        `,
    },
  });
};

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="!max-w-[850px] container m-auto grid grid-cols-12 gap-y-10 pt-32 pb-10">
        <div className="col-span-12">
          <h1 className="yw-h1 mb-9">Privacy Policy</h1>
          <p className="yw-t1">
            Effective date: 08/02/2024
            <br />
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Introduction</b>
              </li>
            </ol>
            Welcome to <b>YOJJI LTD</b>
            <br />
            YOJJI LTD (“us”, “we”, or “our”) operates https://yojji.io/
            (hereinafter referred to as <b>“Service”</b>).
            <br />
            Our Privacy Policy governs your visit to https://yojji.io/, and
            explains how we collect, safeguard and disclose information that
            results from your use of our Service.
            <br />
            We use your data to provide and improve Service. By using Service,
            you agree to the collection and use of information in accordance
            with this policy. Unless otherwise defined in this Privacy Policy,
            the terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions.
            <br />
            Our Terms and Conditions (<b>“Terms”</b>) govern all use of our
            Service and together with the Privacy Policy constitutes your
            agreement with us (<b>“agreement”</b>).
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Definitions</b>
              </li>
            </ol>
            <b>SERVICE</b> means the https://yojji.io/ website operated by YOJJI
            LTD
            <br />
            <b>PERSONAL DATA</b> means data about a living individual who can be
            identified from those data (or from those and other information
            either in our possession or likely to come into our possession).
            <br />
            <b>USAGE DATA</b> is data collected automatically either generated
            by the use of Service or from Service infrastructure itself (for
            example, the duration of a page visit).
            <br />
            <b>COOKIES</b> are small files stored on your device (computer or
            mobile device).
            <br />
            <b>DATA CONTROLLER</b> means a natural or legal person who (either
            alone or jointly or in common with other persons) determines the
            purposes for which and the manner in which any personal data are, or
            are to be, processed. For the purpose of this Privacy Policy, we are
            a Data Controller of your data.
            <br />
            <b>DATA PROCESSORS (OR SERVICE PROVIDERS)</b> means any natural or
            legal person who processes the data on behalf of the Data
            Controller. We may use the services of various Service Providers in
            order to process your data more effectively.
            <br />
            <b>DATA SUBJECT</b> is any living individual who is the subject of
            Personal Data.
            <br />
            <b>THE USER</b> is the individual using our Service. The User
            corresponds to the Data Subject, who is the subject of Personal
            Data.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Information Collection and Use</b>
              </li>
            </ol>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Types of Data Collected</b>
              </li>
            </ol>
            <b>Personal Data</b>
            <br />
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (<b>“Personal Data”</b>). Personally identifiable
            information may include, but is not limited to:
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">Email address</li>
              <li className="mb-4 ml-5 list-decimal">
                First name and last name
              </li>
              <li className="mb-4 ml-5 list-decimal">Cookies and Usage Data</li>
            </ol>
            We may use your Personal Data to contact you with newsletters,
            marketing or promotional materials and other information that may be
            of interest to you. You may opt out of receiving any, or all, of
            these communications from us by following the unsubscribe link or by
            emailing at hello@yojji.io.
            <br />
            <b>Usage Data</b>
            <br />
            We may also collect information that your browser sends whenever you
            visit our Service or when you access Service by or through a mobile
            device (<b>“Usage Data”</b>).
            <br />
            This Usage Data may include information such as your computer's
            Internet Protocol address (e.g. IP address), browser type, browser
            version, the pages of our Service that you visit, the time and date
            of your visit, the time spent on those pages, unique device
            identifiers and other diagnostic data.
            <br />
            When you access Service with a mobile device, this Usage Data may
            include information such as the type of mobile device you use, your
            mobile device unique ID, the IP address of your mobile device, your
            mobile operating system, the type of mobile Internet browser you
            use, unique device identifiers and other diagnostic data.
            <br />
            <b>Tracking Cookies Data</b>
            <br />
            We use cookies and similar tracking technologies to track the
            activity on our Service and we hold certain information.
            <br />
            Cookies are files with a small amount of data which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your device. Other tracking technologies are
            also used such as beacons, tags and scripts to collect and track
            information and to improve and analyze our Service.
            <br />
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our Service.
            <br />
            Examples of Cookies we use:
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b>Session Cookies:</b> We use Session Cookies to operate our
                Service.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                <b>Preference Cookies:</b> We use Preference Cookies to remember
                your preferences and various settings.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                <b>Security Cookies:</b> We use Security Cookies for security
                purposes.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                <b>Advertising Cookies:</b> Advertising Cookies are used to
                serve you with advertisements that may be relevant to you and
                your interests.
              </li>
            </ol>
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Use of Data</b>
              </li>
            </ol>
            YOJJI LTD uses the collected data for various purposes:
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                to provide and maintain our Service;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to notify you about changes to our Service;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to allow you to participate in interactive features of our
                Service when you choose to do so;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to provide customer support;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to gather analysis or valuable information so that we can
                improve our Service;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to monitor the usage of our Service;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to detect, prevent and address technical issues;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to fulfill any other purpose for which you provide it;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to carry out our obligations and enforce our rights arising from
                any contracts entered into between you and us, including for
                billing and collection;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to provide you with notices about your account and/or
                subscription, including expiration and renewal notices,
                email-instructions, etc.;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to provide you with news, special offers and general information
                about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired
                about unless you have opted not to receive such information;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                in any other way we may describe when you provide the
                information;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                for any other purpose with your consent.
              </li>
            </ol>
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Retention of Data</b>
              </li>
            </ol>
            We will retain your Personal Data only for as long as is necessary
            for the purposes set out in this Privacy Policy. We will retain and
            use your Personal Data to the extent necessary to comply with our
            legal obligations (for example, if we are required to retain your
            data to comply with applicable laws), resolve disputes, and enforce
            our legal agreements and policies.
            <br />
            We will also retain Usage Data for internal analysis purposes. Usage
            Data is generally retained for a shorter period, except when this
            data is used to strengthen the security or to improve the
            functionality of our Service, or we are legally obligated to retain
            this data for longer time periods.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Transfer of Data</b>
              </li>
            </ol>
            Your information, including Personal Data, may be transferred to –
            and maintained on – computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ from those of your jurisdiction.
            <br />
            If you are located outside United States and choose to provide
            information to us, please note that we transfer the data, including
            Personal Data, to United States and process it there.
            <br />
            Your consent to this Privacy Policy followed by your submission of
            such information represents your agreement to that transfer.
            <br />
            YOJJI LTD will take all the steps reasonably necessary to ensure
            that your data is treated securely and in accordance with this
            Privacy Policy and no transfer of your Personal Data will take place
            to an organisation or a country unless there are adequate controls
            in place including the security of your data and other personal
            information.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Disclosure of Data</b>
              </li>
            </ol>
            We may disclose personal information that we collect, or you
            provide:
            <br />
            <br />
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b>Disclosure for Law Enforcement.</b>
              </li>
            </ol>
            Under certain circumstances, we may be required to disclose your
            Personal Data if required to do so by law or in response to valid
            requests by public authorities.
            <br />
            <br />
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b>Other cases. We may disclose your information also:</b>
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to our subsidiaries and affiliates;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to contractors, service providers, and other third parties we
                use to support our business;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                to fulfill the purpose for which you provide it;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                for the purpose of including your company’s logo on our website;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                for any other purpose disclosed by us when you provide the
                information;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                with your consent in any other cases;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                if we believe disclosure is necessary or appropriate to protect
                the rights, property, or safety of the Company, our customers,
                or others.
              </li>
            </ol>
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Security of Data</b>
              </li>
            </ol>
            The security of your data is important to us but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">
                  Your Data Protection Rights Under General Data Protection
                  Regulation (GDPR)
                </b>
              </li>
            </ol>
            If you are a resident of the European Union (EU) and European
            Economic Area (EEA), you have certain data protection rights,
            covered by GDPR. – See more at
            https://eur-lex.europa.eu/eli/reg/2016/679/oj We aim to take
            reasonable steps to allow you to correct, amend, delete, or limit
            the use of your Personal Data.
            <br />
            If you wish to be informed what Personal Data we hold about you and
            if you want it to be removed from our systems, please email us at
            hello@yojji.io.
            <br />
            In certain circumstances, you have the following data protection
            rights:
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                the right to access, update or to delete the information we have
                on you;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                the right of rectification. You have the right to have your
                information rectified if that information is inaccurate or
                incomplete;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                the right to object. You have the right to object to our
                processing of your Personal Data;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                the right of restriction. You have the right to request that we
                restrict the processing of your personal information;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                the right to data portability. You have the right to be provided
                with a copy of your Personal Data in a structured,
                machine-readable and commonly used format;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                the right to withdraw consent. You also have the right to
                withdraw your consent at any time where we rely on your consent
                to process your personal information;
              </li>
            </ol>
            Please note that we may ask you to verify your identity before
            responding to such requests. Please note, we may not able to provide
            Service without some necessary data.
            <br />
            You have the right to complain to a Data Protection Authority about
            our collection and use of your Personal Data. For more information,
            please contact your local data protection authority in the European
            Economic Area (EEA).
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">
                  Your Data Protection Rights under the California Privacy
                  Protection Act (CalOPPA)
                </b>
              </li>
            </ol>
            CalOPPA is the first state law in the nation to require commercial
            websites and online services to post a privacy policy. The law’s
            reach stretches well beyond California to require a person or
            company in the United States (and conceivable the world) that
            operates websites collecting personally identifiable information
            from California consumers to post a conspicuous privacy policy on
            its website stating exactly the information being collected and
            those individuals with whom it is being shared, and to comply with
            this policy.
            <br />
            – See more at:
            https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/
            <br />
            According to CalOPPA we agree to the following:
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                users can visit our site anonymously;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                our Privacy Policy link includes the word “Privacy”, and can
                easily be found on the page specified above on the home page of
                our website;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                users will be notified of any privacy policy changes on our
                Privacy Policy Page;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                users are able to change their personal information by emailing
                us at hello@yojji.io.
              </li>
            </ol>
            Our Policy on “Do Not Track” Signals:
            <br />
            We honor Do Not Track signals and do not track, plant cookies, or
            use advertising when a Do Not Track browser mechanism is in place.
            Do Not Track is a preference you can set in your web browser to
            inform websites that you do not want to be tracked.
            <br />
            You can enable or disable Do Not Track by visiting the Preferences
            or Settings page of your web browser.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">
                  Your Data Protection Rights under the California Consumer
                  Privacy Act (CCPA)
                </b>
              </li>
            </ol>
            If you are a California resident, you are entitled to learn what
            data we collect about you, ask to delete your data and not to sell
            (share) it. To exercise your data protection rights, you can make
            certain requests and ask us:
            <br />
            <br />
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b>What personal information we have about you.</b> If you make
                this request, we will return to you:
              </li>
              <li className="mb-4 ml-5 list-decimal">
                The categories of personal information we have collected about
                you.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                The categories of sources from which we collect your personal
                information.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                The business or commercial purpose for collecting or selling
                your personal information.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                The categories of third parties with whom we share personal
                information.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                The specific pieces of personal information we have collected
                about you.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                A list of categories of personal information that we have sold,
                along with the category of any other company we sold it to. If
                we have not sold your personal information, we will inform you
                of that fact.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                A list of categories of personal information that we have
                disclosed for a business purpose, along with the category of any
                other company we shared it with.
              </li>
            </ol>
            Please note, you are entitled to ask us to provide you with this
            information up to two times in a rolling twelve-month period. When
            you make this request, the information provided may be limited to
            the personal information we collected about you in the previous 12
            months.
            <ol>
              <li className="mb-4 ml-5 list-decimal">
                <b>To delete your personal information.</b> If you make this
                request, we will delete the personal information we hold about
                you as of the date of your request from our records and direct
                any service providers to do the same. In some cases, deletion
                may be accomplished through de-identification of the
                information. If you choose to delete your personal information,
                you may not be able to use certain functions that require your
                personal information to operate.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                <b>To stop selling your personal information.</b> We don't sell
                or rent your personal information to any third parties for any
                purpose. You are the only owner of your Personal Data and can
                request disclosure or deletion at any time.
              </li>
            </ol>
            Please note, if you ask us to delete or stop selling your data, it
            may impact your experience with us, and you may not be able to
            participate in certain programs or membership services which require
            the usage of your personal information to function. But in no
            circumstances, we will discriminate against you for exercising your
            rights.
            <br />
            To exercise your California data protection rights described above,
            please send your request(s) by one of the following means:
            <br />
            By email: hello@yojji.io
            <br />
            Your data protection rights, described above, are covered by the
            CCPA, short for the California Consumer Privacy Act. To find out
            more, visit the official California Legislative Information website.
            The CCPA took effect on 01/01/2020.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Service Providers</b>
              </li>
            </ol>
            We may employ third party companies and individuals to facilitate
            our Service (“Service Providers”), provide Service on our behalf,
            perform Service-related services or assist us in analysing how our
            Service is used.
            <br />
            These third parties have access to your Personal Data only to
            perform these tasks on our behalf and are obligated not to disclose
            or use it for any other purpose.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Analytics</b>
              </li>
            </ol>
            We may use third-party Service Providers to monitor and analyze the
            use of our Service.
            <br />
            <b>Google Analytics</b>
            <br />
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualise and personalise the ads of its own advertising
            network.
            <br />
            For more information on the privacy practices of Google, please
            visit the Google Privacy Terms web page:
            https://policies.google.com/privacy?hl=en
            <br />
            We also encourage you to review the Google's policy for safeguarding
            your data: https://support.google.com/analytics/answer/6004245.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">CI/CD tools</b>
              </li>
            </ol>
            We may use third-party Service Providers to automate the development
            process of our Service.
            <br />
            <b>GitHub</b>
            <br />
            GitHub is provided by GitHub, Inc.
            <br />
            GitHub is a development platform to host and review code, manage
            projects, and build software.
            <br />
            For more information on what data GitHub collects for what purpose
            and how the protection of the data is ensured, please visit GitHub
            Privacy Policy page:
            https://help.github.com/en/articles/github-privacy-statement.
            <br />
            <b>GitLab CI/CD</b>
            <br />
            GitLab CI/CD is provided by GitLab, Inc.
            <br />
            GitLab CI (Continuous Integration) service is a part of GitLab that
            build and test the software whenever developer pushes code to
            application.
            <br />
            GitLab CD (Continuous Deployment) is a software service that places
            the changes of every code in the production which results in every
            day deployment of production.
            <br />
            For more information on what data GitLab CI/CD collects for what
            purpose and how the protection of the data is ensured, please visit
            GitLab CI/CD Privacy Policy page: https://about.gitlab.com/privacy/.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Behavioral Remarketing</b>
              </li>
            </ol>
            YOJJI LTD uses remarketing services to advertise on third party
            websites to you after you visited our Service. We and our
            third-party vendors use cookies to inform, optimise and serve ads
            based on your past visits to our Service.
            <br />
            <b>Google Ads (AdWords)</b>
            <br />
            Google Ads (AdWords) remarketing service is provided by Google Inc.
            <br />
            You can opt-out of Google Analytics for Display Advertising and
            customize the Google Display Network ads by visiting the Google Ads
            Settings page: http://www.google.com/settings/ads
            <br />
            Google also recommends installing the Google Analytics Opt-out
            Browser Add-on – https://tools.google.com/dlpage/gaoptout – for your
            web browser. Google Analytics Opt-out Browser Add-on provides
            visitors with the ability to prevent their data from being collected
            and used by Google Analytics.
            <br />
            For more information on the privacy practices of Google, please
            visit the Google Privacy Terms web page:
            https://policies.google.com/privacy?hl=en
            <br />
            <b>Twitter</b>
            <br />
            Twitter remarketing service is provided by Twitter Inc.
            <br />
            You can opt-out from Twitter's interest-based ads by following their
            instructions: https://support.twitter.com/articles/20170405
            <br />
            You can learn more about the privacy practices and policies of
            Twitter by visiting their Privacy Policy page:
            https://twitter.com/privacy
            <br />
            <b>Facebook</b>
            <br />
            Facebook remarketing service is provided by Facebook Inc.
            <br />
            You can learn more about interest-based advertising from Facebook by
            visiting this page: https://www.facebook.com/help/164968693837950
            <br />
            To opt-out from Facebook's interest-based ads, follow these
            instructions from Facebook:
            https://www.facebook.com/help/568137493302217
            <br />
            Facebook adheres to the Self-Regulatory Principles for Online
            Behavioural Advertising established by the Digital Advertising
            Alliance. You can also opt-out from Facebook and other participating
            companies through the Digital Advertising Alliance in the USA
            http://www.aboutads.info/choices/, the Digital Advertising Alliance
            of Canada in Canada http://youradchoices.ca/ or the European
            Interactive Digital Advertising Alliance in Europe
            http://www.youronlinechoices.eu/, or opt-out using your mobile
            device settings.
            <br />
            For more information on the privacy practices of Facebook, please
            visit Facebook's Data Policy:
            https://www.facebook.com/privacy/explanation
            <br />
            <b>Pinterest</b>
            <br />
            Pinterest remarketing service is provided by Pinterest Inc.
            <br />
            You can opt-out from Pinterest's interest-based ads by enabling the
            “Do Not Track” functionality of your web browser or by following
            Pinterest instructions:
            http://help.pinterest.com/en/articles/personalization-and-data
            <br />
            You can learn more about the privacy practices and policies of
            Pinterest by visiting their Privacy Policy page:
            https://about.pinterest.com/en/privacy-policy
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Links to Other Sites</b>
              </li>
            </ol>
            Our Service may contain links to other sites that are not operated
            by us. If you click a third party link, you will be directed to that
            third party's site. We strongly advise you to review the Privacy
            Policy of every site you visit.
            <br />
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Children's Privacy</b>
              </li>
            </ol>
            Our Services are not intended for use by children under the age of
            18 (“Child” or “Children”).
            <br />
            We do not knowingly collect personally identifiable information from
            Children under 18. If you become aware that a Child has provided us
            with Personal Data, please contact us. If we become aware that we
            have collected Personal Data from Children without verification of
            parental consent, we take steps to remove that information from our
            servers.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Changes to This Privacy Policy</b>
              </li>
            </ol>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            <br />
            We will let you know via email and/or a prominent notice on our
            Service, prior to the change becoming effective and update
            “effective date” at the top of this Privacy Policy.
            <br />
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Contact Us</b>
              </li>
            </ol>
            If you have any questions about this Privacy Policy, please contact
            us:
            <br />
            By email: hello@yojji.io.
            <br />
            By visiting this page on our website: https://yojji.io/contacts.
            <br />
            By phone number: +17373203598.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
