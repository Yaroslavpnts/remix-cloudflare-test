import { FC } from "react";

type SmallArrowProps = {
  className: string;
  fill: string;
};

const SmallArrow: FC<SmallArrowProps> = ({ className, fill }) => {
  return (
    <svg
      className={className}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.65265 7.72974H13.4109V6.41089H2.65265L7.92969 0.933603L6.97993 0.0185613L0.185983 7.07031L6.97993 14.1221L7.92969 13.207L2.65265 7.72974Z"
        fill={fill}
      ></path>
    </svg>
  );
};

export default SmallArrow;
