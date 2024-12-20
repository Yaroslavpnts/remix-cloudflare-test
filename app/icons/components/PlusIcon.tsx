import { FC } from "react";

type TPlusIconProps = {
  color?: string;
}

const PlusIcon: FC<TPlusIconProps> = ({color = "#0057FF"}) => {
  return (
    <svg
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.9258 3V21" stroke={color} strokeWidth="1.5" />
      <path d="M21.9258 12L3.92578 12" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

export default PlusIcon;
