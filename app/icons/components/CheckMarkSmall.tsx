import { FC } from "react";

type CheckMarkSmallProps = {
  fill: string;
};

const CheckMarkSmall: FC<CheckMarkSmallProps> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11664_927)">
        <path
          d="M9.99974 15.1696L19.1917 5.97656L20.6067 7.39056L9.99974 17.9976L3.63574 11.6336L5.04974 10.2196L9.99974 15.1696Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_11664_927">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckMarkSmall;
