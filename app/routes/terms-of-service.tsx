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
      title: "Terms of Service - Yojji",
      description: `
          Welcome to YOJJI LTD (“Company”, “we”, “our”, “us”)! As you
          have just clicked our Terms of Service, please pause, grab a cup of
          coffee and carefully read the following pages. It will take you
          approximately 20 minutes.
          These Terms of Service (“Terms”, “Terms of Service”) govern
          your use of our web pages located at https://yojji.io/ operated by
          YOJJI LTD
        `,
    },
  });
};

const TermsOfService = () => {
  return (
    <Layout>
      <div className="!max-w-[850px] container m-auto grid grid-cols-12 gap-y-10 pt-32 pb-10">
        <div className="col-span-12">
          <h1 className="yw-h1 mb-9">Terms of Service</h1>
          <p className="yw-t1">
            Last updated: 08/02/2024
            <br />
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Introduction</b>
              </li>
            </ol>
            Welcome to <b>YOJJI LTD (“Company”, “we”, “our”, “us”)</b>! As you
            have just clicked our Terms of Service, please pause, grab a cup of
            coffee and carefully read the following pages. It will take you
            approximately 20 minutes.
            <br />
            These Terms of Service <b>(“Terms”, “Terms of Service”)</b> govern
            your use of our web pages located at https://yojji.io/ operated by
            YOJJI LTD
            <br />
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, safeguard and disclose information that results from
            your use of our web pages. Please read it here
            https://yojji.io/privacy. Your agreement with us includes these
            Terms and our Privacy Policy <b>(“Agreements”)</b>. You acknowledge
            that you have read and understood Agreements, and agree to be bound
            of them.
            <br />
            If you do not agree with (or cannot comply with) Agreements, then
            you may not use the Service, but please let us know by emailing at
            hello@yojji.io so we can try to find a solution. These Terms apply
            to all visitors, users and others who wish to access or use Service.
            <br />
            Thank you for being responsible.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Communications</b>
              </li>
            </ol>
            By using our Service, you agree to subscribe to newsletters,
            marketing or promotional materials and other information we may
            send. However, you may opt out of receiving any, or all, of these
            communications from us by following the unsubscribe link or by
            emailing at.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">
                  Contests, Sweepstakes and Promotions
                </b>
              </li>
            </ol>
            Any contests, sweepstakes or other promotions (collectively,{" "}
            <b>“Promotions”</b>) made available through Service may be governed
            by rules that are separate from these Terms of Service. If you
            participate in any Promotions, please review the applicable rules as
            well as our Privacy Policy. If the rules for a Promotion conflict
            with these Terms of Service, Promotion rules will apply.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Refunds</b>
              </li>
            </ol>
            Except when required by law, paid Subscription fees are
            non-refundable.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Content</b>
              </li>
            </ol>
            Our Service allows you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or other
            material <b>(“Content”)</b>. You are responsible for Content that
            you post on or through Service, including its legality, reliability,
            and appropriateness.
            <br />
            By posting Content on or through Service, You represent and warrant
            that: (i) Content is yours (you own it) and/or you have the right to
            use it and the right to grant us the rights and license as provided
            in these Terms, and (ii) that the posting of your Content on or
            through Service does not violate the privacy rights, publicity
            rights, copyrights, contract rights or any other rights of any
            person or entity. We reserve the right to terminate the account of
            anyone found to be infringing on a copyright.
            <br />
            You retain any and all of your rights to any Content you submit,
            post or display on or through Service and you are responsible for
            protecting those rights. We take no responsibility and assume no
            liability for Content you or any third party posts on or through
            Service. However, by posting Content using Service you grant us the
            right and license to use, modify, publicly perform, publicly
            display, reproduce, and distribute such Content on and through
            Service. You agree that this license includes the right for us to
            make your Content available to other users of Service, who may also
            use your Content subject to these Terms.
            <br />
            YOJJI LTD has the right but not the obligation to monitor and edit
            all Content provided by users.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Prohibited Uses</b>
              </li>
            </ol>
            You may use Service only for lawful purposes and in accordance with
            Terms. You agree not to use Service:
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                In any way that violates any applicable national or
                international law or regulation.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                For the purpose of exploiting, harming, or attempting to exploit
                or harm minors in any way by exposing them to inappropriate
                content or otherwise.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                To transmit, or procure the sending of, any advertising or
                promotional material, including any “junk mail”, “chain letter,”
                “spam,” or any other similar solicitation.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                To impersonate or attempt to impersonate Company, a Company
                employee, another user, or any other person or entity.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                In any way that infringes upon the rights of others, or in any
                way is illegal, threatening, fraudulent, or harmful, or in
                connection with any unlawful, illegal, fraudulent, or harmful
                purpose or activity.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                To engage in any other conduct that restricts or inhibits
                anyone’s use or enjoyment of Service, or which, as determined by
                us, may harm or offend Company or users of Service or expose
                them to liability.
              </li>
            </ol>
            Additionally, you agree not to:
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                Use Service in any manner that could disable, overburden,
                damage, or impair Service or interfere with any other party’s
                use of Service, including their ability to engage in real time
                activities through Service.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                Use any robot, spider, or other automatic device, process, or
                means to access Service for any purpose, including monitoring or
                copying any of the material on Service.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                Use any manual process to monitor or copy any of the material on
                Service or for any other unauthorized purpose without our prior
                written consent.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                Use any device, software, or routine that interferes with the
                proper working of Service.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                Introduce any viruses, trojan horses, worms, logic bombs, or
                other material which is malicious or technologically harmful.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                Attempt to gain unauthorized access to, interfere with, damage,
                or disrupt any parts of Service, the server on which Service is
                stored, or any server, computer, or database connected to
                Service.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                Attack Service via a denial-of-service attack or a distributed
                denial-of-service attack.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                Take any action that may damage or falsify Company rating.
              </li>
              <li className="mb-4 ml-5 list-decimal">
                Otherwise attempt to interfere with the proper working of
                Service.
              </li>
            </ol>
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
            <br />
            <b className="underline">Google Analytics</b>
            <br />
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualise and personalise the ads of its own advertising
            network.
            <br />
            For more information on the privacy practices of Google, please
            visit the Google Privacy Terms web page:{" "}
            <a
              href="https://policies.google.com/privacy?hl=en"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              https://policies.google.com/privacy?hl=en
            </a>
            <br />
            We also encourage you to review the Google's policy for safeguarding
            your data:{" "}
            <a
              href="https://support.google.com/analytics/answer/6004245"
              className="underline underline-offset-1"
              target="_blank"
              rel="noreferrer"
            >
              https://support.google.com/analytics/answer/6004245
            </a>
            .
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">No Use By Minors</b>
              </li>
            </ol>
            Service is intended only for access and use by individuals at least
            eighteen (18) years old. By accessing or using any of Company, you
            warrant and represent that you are at least eighteen (18) years of
            age and with the full authority, right, and capacity to enter into
            this agreement and abide by all of the terms and conditions of
            Terms. If you are not at least eighteen (18) years old, you are
            prohibited from both the access and usage of Service.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Accounts</b>
              </li>
            </ol>
            When you create an account with us, you guarantee that you are above
            the age of 18, and that the information you provide us is accurate,
            complete, and current at all times. Inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your
            account on Service.
            <br />
            You are responsible for maintaining the confidentiality of your
            account and password, including but not limited to the restriction
            of access to your computer and/or account. You agree to accept
            responsibility for any and all activities or actions that occur
            under your account and/or password, whether your password is with
            our Service or a third-party service. You must notify us immediately
            upon becoming aware of any breach of security or unauthorized use of
            your account.
            <br />
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you,
            without appropriate authorization. You may not use as a username any
            name that is offensive, vulgar or obscene. We reserve the right to
            refuse service, terminate accounts, remove or edit content, or
            cancel orders in our sole discretion.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Intellectual Property</b>
              </li>
            </ol>
            Service and its original content (excluding Content provided by
            users), features and functionality are and will remain the exclusive
            property of YOJJI LTD and its licensors. Service is protected by
            copyright, trademark, and other laws of the United States and
            foreign countries. Our trademarks and trade dress may not be used in
            connection with any product or service without the prior written
            consent of YOJJI LTD.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Copyright Policy</b>
              </li>
            </ol>
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that Content posted on Service
            infringes on the copyright or other intellectual property rights{" "}
            <b>(“Infringement”)</b> of any person or entity.
            <br />
            If you are a copyright owner, or authorized on behalf of one, and
            you believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement, please submit your claim via
            email to hello@yojji.io, with the subject line: “Copyright
            Infringement” and include in your claim a detailed description of
            the alleged Infringement as detailed below, under “DMCA Notice and
            Procedure for Copyright Infringement Claims”
            <br />
            You may be held accountable for damages (including costs and
            attorneys' fees) for misrepresentation or bad-faith claims on the
            infringement of any Content found on and/or through Service on your
            copyright.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">
                  DMCA Notice and Procedure for Copyright Infringement Claims
                </b>
              </li>
            </ol>
            You may submit a notification pursuant to the Digital Millennium
            Copyright Act (DMCA) by providing our Copyright Agent with the
            following information in writing (see 17 U.S.C 512(c)(3) for further
            detail):
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                an electronic or physical signature of the person authorized to
                act on behalf of the owner of the copyright's interest;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                a description of the copyrighted work that you claim has been
                infringed, including the URL (i.e., web page address) of the
                location where the copyrighted work exists or a copy of the
                copyrighted work;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                identification of the URL or other specific location on Service
                where the material that you claim is infringing is located;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                your address, telephone number, and email address;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                a statement by you that you have a good faith belief that the
                disputed use is not authorized by the copyright owner, its
                agent, or the law;
              </li>
              <li className="mb-4 ml-5 list-decimal">
                a statement by you, made under penalty of perjury, that the
                above information in your notice is accurate and that you are
                the copyright owner or authorized to act on the copyright
                owner's behalf.
              </li>
            </ol>
            You can contact our Copyright Agent via email at hello@yojji.io
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Error Reporting and Feedback</b>
              </li>
            </ol>
            You may provide us directly at hello@yojji.io with information and
            feedback concerning errors, suggestions for improvements, ideas,
            problems, complaints, and other matters related to our Service{" "}
            <b>(“Feedback”)</b>. You acknowledge and agree that: (i) you shall
            not retain, acquire or assert any intellectual property right or
            other right, title or interest in or to the Feedback; (ii) Company
            may have development ideas similar to the Feedback; (iii) Feedback
            does not contain confidential information or proprietary information
            from you or any third party; and (iv) Company is not under any
            obligation of confidentiality with respect to the Feedback. In the
            event the transfer of the ownership to the Feedback is not possible
            due to applicable mandatory laws, you grant Company and its
            affiliates an exclusive, transferable, irrevocable, free-of-charge,
            sub-licensable, unlimited and perpetual right to use (including
            copy, modify, create derivative works, publish, distribute and
            commercialize) Feedback in any manner and for any purpose.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Links To Other Web Sites</b>
              </li>
            </ol>
            Our Service may contain links to third party web sites or services
            that are not owned or controlled by YOJJI LTD
            <br />
            YOJJI LTD has no control over, and assumes no responsibility for the
            content, privacy policies, or practices of any third party web sites
            or services. We do not warrant the offerings of any of these
            entities/individuals or their websites.
            <br />
            YOU ACKNOWLEDGE AND AGREE THAT YOJJI LTD SHALL NOT BE RESPONSIBLE OR
            LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
            ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON
            ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH
            THIRD PARTY WEB SITES OR SERVICES.
            <br />
            WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
            POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Disclaimer Of Warranty</b>
              </li>
            </ol>
            THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS
            AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF
            ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES,
            OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU
            EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND
            ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
            <br />
            NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY
            WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
            SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
            SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE
            ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES,
            THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED,
            THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT
            MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS
            OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
            <br />
            COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
            OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
            ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
            PARTICULAR PURPOSE.
            <br />
            THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
            EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Limitation Of Liability</b>
              </li>
            </ol>
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
            PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT
            ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES
            OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY,
            WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN
            AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR
            ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING
            WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE,
            ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL,
            STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF
            COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON
            THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE
            PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE
            CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE
            EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL
            DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Termination</b>
              </li>
            </ol>
            We may terminate or suspend your account and bar access to Service
            immediately, without prior notice or liability, under our sole
            discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of Terms.
            <br />
            If you wish to terminate your account, you may simply discontinue
            using Service.
            <br />
            All provisions of Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Governing Law</b>
              </li>
            </ol>
            These Terms shall be governed and construed in accordance with the
            laws of ENGLAND, UNITED KINGDOM without regard to its conflict of
            law provisions.
            <br />
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service and supersede and replace any prior agreements we might have
            had between us regarding Service.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Changes To Service</b>
              </li>
            </ol>
            We reserve the right to withdraw or amend our Service, and any
            service or material we provide via Service, in our sole discretion
            without notice. We will not be liable if for any reason all or any
            part of Service is unavailable at any time or for any period. From
            time to time, we may restrict access to some parts of Service, or
            the entire Service, to users, including registered users.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Amendments To Terms</b>
              </li>
            </ol>
            We may amend Terms at any time by posting the amended terms on this
            site. It is your responsibility to review these Terms periodically.
            <br />
            Your continued use of the Platform following the posting of revised
            Terms means that you accept and agree to the changes. You are
            expected to check this page frequently so you are aware of any
            changes, as they are binding on you.
            <br />
            By continuing to access or use our Service after any revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, you are no longer authorized to use
            Service.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Waiver And Severability</b>
              </li>
            </ol>
            No waiver by Company of any term or condition set forth in Terms
            shall be deemed a further or continuing waiver of such term or
            condition or a waiver of any other term or condition, and any
            failure of Company to assert a right or provision under Terms shall
            not constitute a waiver of such right or provision.
            <br />
            If any provision of Terms is held by a court or other tribunal of
            competent jurisdiction to be invalid, illegal or unenforceable for
            any reason, such provision shall be eliminated or limited to the
            minimum extent such that the remaining provisions of Terms will
            continue in full force and effect.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Acknowledgement</b>
              </li>
            </ol>
            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
            THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
            THEM.
            <br />
            <br />
          </p>
          <p className="yw-t1">
            <ol className="yw-t1">
              <li className="mb-4 ml-5 list-decimal">
                <b className="underline">Contact Us</b>
              </li>
            </ol>
            Please send your feedback, comments, requests for technical support:
            <br />
            By email: hello@yojji.io.
            <br />
            By visiting this page on our website: https://yojji.io/contacts.
            <br />
            By phone number: +17373203598.
            <br />
            <br />
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
