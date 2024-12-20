import {FC} from "react";

type TArrowProps = {
  className?: string;
}

const Arrow: FC<TArrowProps> = ({className}) => {
  return (
    <svg
      className={`min-w-[8px] min-h-[13px] ${className}`}
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.294922 10.8849L4.87494 6.29492L0.294922 1.70492L1.70492 0.294922L7.70494 6.29492L1.70492 12.2949L0.294922 10.8849Z"
        fill="#45474D"
      />
    </svg>
  );
};

export default Arrow;
