import { FC } from "react";

type TCheckmarkProps = {
  bgColor?: string;
  checkmarkColor?: string;
  width?: number;
  height?: number;
}

const Checkmark: FC<TCheckmarkProps> = ({bgColor = "#0050EB", checkmarkColor= "#ECF6FF", width, height}) => {
    return (
      <svg
        width={width || 32}
        height={height || 32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="16" fill={bgColor} />
        <path
          d="M13.6669 19.6978L24.3909 8.97266L26.0417 10.6223L13.6669 22.9972L6.24219 15.5725L7.89185 13.9228L13.6669 19.6978Z"
          fill={checkmarkColor}
        />
      </svg>
    );
  };
  
  export default Checkmark;
  