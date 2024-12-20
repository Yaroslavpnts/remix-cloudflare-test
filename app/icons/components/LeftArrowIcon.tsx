import { FC } from "react";

type TLeftArrowIconProps = {
  color?: string;
};

const LeftArrowIcon: FC<TLeftArrowIconProps> = ({ color = "#313339" }) => {
  return (
    <svg
      className="mr-2"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.65265 7.72974H13.4109V6.41089H2.65265L7.92969 0.933603L6.97993 0.0185613L0.185983 7.07031L6.97993 14.1221L7.92969 13.207L2.65265 7.72974Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftArrowIcon;
