import { FC } from "react";

type TMinusIconProps = {
  color?: string;
}

const MinusIcon: FC<TMinusIconProps> = ({color = "#0057FF"}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M21.9258 12.5L3.92578 12.5"
        stroke={color} 
        strokeWidth="1.5" />
    </svg>
  );
};

export default MinusIcon;
