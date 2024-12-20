import SubscriptionLogo from "~/icons/subscpription.png";
import SubscriptionForm from "./SubscriptionForm";
import { Theme } from "~/types";
import { GtmEvent } from "~/utils/gtmSendEvent";

const Subscription = () => {
  return (
    <section className="font-montserrat py-[72px] sm:py-[104px] bg-yw-gray-100">
      <div className="container">
        <div className="bg-yw-primary-default rounded-3xl flex justify-center lg:justify-between flex-wrap lg:flex-nowrap py-5 px-8 md:py-14 md:px-[88px] gap-7 md:gap-[18px]">
          <SubscriptionForm
            title="Get insights for IT Leaders"
            theme={Theme.dark}
            event={GtmEvent.submit_email_banner}
          />
          <div>
            <img
              src={SubscriptionLogo}
              alt="subscription-form-logo"
              className="max-w-[286px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
