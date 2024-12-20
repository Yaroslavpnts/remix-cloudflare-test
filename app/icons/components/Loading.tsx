import { FC } from "react";

type LoadingProps = {
  fill: string;
};

const Loading: FC<LoadingProps> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          .spinner {
            animation: spinner 1.2s cubic-bezier(0.52, 0.6, 0.25, 0.99) infinite;
            fill: ${fill};
          }
          .spinner-delay1 {
            animation-delay: 0.4s;
          }
          .spinner-delay2 {
            animation-delay: 0.8s;
          }
          @keyframes spinner {
            0% {
              r: 0;
              opacity: 1;
            }
            100% {
              r: 11px;
              opacity: 0;
            }
          }
        `}
      </style>
      <circle className="spinner" cx="12" cy="12" r="0" />
      <circle className="spinner spinner-delay1" cx="12" cy="12" r="0" />
      <circle className="spinner spinner-delay2" cx="12" cy="12" r="0" />
    </svg>
  );
};

export default Loading;
