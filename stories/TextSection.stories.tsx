import type { StoryObj } from "@storybook/react";
import TextSection from "~/components/portfolio/TextSection";

const meta = {
  title: "Profile/TextSection",
  component: TextSection,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    title: "Title Text Section",
    html_: `<div>
    <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center">
      <div style="width: 28px; height: 28px; background: #ECF6FF; border-radius: 999px">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/system" clip-path="url(#clip0_2166_43)">
            <path
              id="Vector"
              d="M11.6664 17.6978L22.3904 6.97266L24.0412 8.62232L11.6664 20.9972L4.2417 13.5725L5.89137 11.9228L11.6664 17.6978Z"
              fill="#0050EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_2166_43">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>
        <b>7 years</b> of experience in software development and IT consulting
      </span>
    </div>
    <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center">
      <div style="width: 28px; height: 28px; background: #ECF6FF; border-radius: 999px">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/system" clip-path="url(#clip0_2166_43)">
            <path
              id="Vector"
              d="M11.6664 17.6978L22.3904 6.97266L24.0412 8.62232L11.6664 20.9972L4.2417 13.5725L5.89137 11.9228L11.6664 17.6978Z"
              fill="#0050EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_2166_43">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>
        <b>200+ successful projects</b> delivered
      </span>
    </div>
    <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center">
      <div style="width: 28px; height: 28px; background: #ECF6FF; border-radius: 999px">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/system" clip-path="url(#clip0_2166_43)">
            <path
              id="Vector"
              d="M11.6664 17.6978L22.3904 6.97266L24.0412 8.62232L11.6664 20.9972L4.2417 13.5725L5.89137 11.9228L11.6664 17.6978Z"
              fill="#0050EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_2166_43">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>
        A team of <b>60+ professionals:</b> ui/ux designers, software developers,
        technical architects, QA specialists, support engineers, project managers
        and business analysts.
      </span>
    </div>
    <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center">
      <div style="width: 28px; height: 28px; background: #ECF6FF; border-radius: 999px">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/system" clip-path="url(#clip0_2166_43)">
            <path
              id="Vector"
              d="M11.6664 17.6978L22.3904 6.97266L24.0412 8.62232L11.6664 20.9972L4.2417 13.5725L5.89137 11.9228L11.6664 17.6978Z"
              fill="#0050EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_2166_43">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>
        Extensive expertise in <b>leading technologies</b> like Javascript,
        Typescript, Nodejs and different domains: Healthcare, Fintech, Edtech,
        Travel, E-legal.
      </span>
    </div>
    <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center">
      <div style="width: 28px; height: 28px; background: #ECF6FF; border-radius: 999px">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/system" clip-path="url(#clip0_2166_43)">
            <path
              id="Vector"
              d="M11.6664 17.6978L22.3904 6.97266L24.0412 8.62232L11.6664 20.9972L4.2417 13.5725L5.89137 11.9228L11.6664 17.6978Z"
              fill="#0050EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_2166_43">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>
        <b>70% revenue</b> comes from clients who have partnered with us for over
        2 years.
      </span>
    </div>
    <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center">
      <div style="width: 28px; height: 28px; background: #ECF6FF; border-radius: 999px">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/system" clip-path="url(#clip0_2166_43)">
            <path
              id="Vector"
              d="M11.6664 17.6978L22.3904 6.97266L24.0412 8.62232L11.6664 20.9972L4.2417 13.5725L5.89137 11.9228L11.6664 17.6978Z"
              fill="#0050EB"
            />
          </g>
          <defs>
            <clipPath id="clip0_2166_43">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>
        <b>Recognized industry leader</b> on
        <a href="#clutch" style="color:#0074D2; text-decoration: none">
          clutch
        </a>
      </span>
    </div>
  </div>`,
  },
};

export const WithText: Story = {
  args: {
    title: "Subscription and Payments",
    html_: `The integration of subscription plans offers flexibility with various features, such as seamless payment processing and hassle-free plan upgrades or downgrades. Users also have the option to purchase additional design generations if they've exhausted their previous ones. To add to this, we've introduced a bonus feature - a promo code system, allowing users to discover and apply relevant discounts.`,
  },
};
