import { FC } from "react";

type TArrowBlueIconProps = {
  className?: string;
};

const ArrowBlueIcon: FC<TArrowBlueIconProps> = ({ className }) => {
  return (
    <svg
      width="21"
      height="20"
      className={`${className}`}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3901 6.27512L4.52267 17.1426L3.19043 15.8103L14.0579 4.94288L3.19438 4.7406L3.22945 2.85686L17.2157 3.11729L17.4761 17.1036L15.5924 17.1386L15.3901 6.27512Z"
        fill="#0057FF"
      />
    </svg>
  );
};

export default ArrowBlueIcon;
