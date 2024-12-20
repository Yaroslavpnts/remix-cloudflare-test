import { FC } from "react";

type StarProps = {
  filled: "full" | "half" | "none";
};

export const Star: FC<StarProps> = ({ filled }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {filled === "half" && (
        <clipPath id="half-star-clip">
          <rect x="0" y="0" width="9" height="18"></rect>
        </clipPath>
      )}
      <path
        d="M8.04894 2.92705C8.3483 2.00574 9.6517 2.00574 9.95106 2.92705L10.7961 5.52786C10.93 5.93989 11.3139 6.21885 11.7472 6.21885H14.4818C15.4505 6.21885 15.8533 7.45846 15.0696 8.02786L12.8572 9.63525C12.5067 9.8899 12.3601 10.3413 12.494 10.7533L13.339 13.3541C13.6384 14.2754 12.5839 15.0415 11.8002 14.4721L9.58779 12.8647C9.2373 12.6101 8.7627 12.6101 8.41222 12.8647L6.19983 14.4721C5.41612 15.0415 4.36164 14.2754 4.66099 13.3541L5.50604 10.7533C5.63992 10.3413 5.49326 9.8899 5.14277 9.63525L2.93039 8.02787C2.14668 7.45846 2.54945 6.21885 3.51818 6.21885H6.25283C6.68606 6.21885 7.07001 5.93989 7.20389 5.52786L8.04894 2.92705Z"
        fill={filled !== "full" ? "none" : "#e62415"}
        stroke={filled !== "full" ? "#e62415" : ""}
        strokeWidth={filled !== "full" ? "1" : ""}
      ></path>
      {filled === "half" && (
        <path
          d="M8.04894 2.92705C8.3483 2.00574 9.6517 2.00574 9.95106 2.92705L10.7961 5.52786C10.93 5.93989 11.3139 6.21885 11.7472 6.21885H14.4818C15.4505 6.21885 15.8533 7.45846 15.0696 8.02786L12.8572 9.63525C12.5067 9.8899 12.3601 10.3413 12.494 10.7533L13.339 13.3541C13.6384 14.2754 12.5839 15.0415 11.8002 14.4721L9.58779 12.8647C9.2373 12.6101 8.7627 12.6101 8.41222 12.8647L6.19983 14.4721C5.41612 15.0415 4.36164 14.2754 4.66099 13.3541L5.50604 10.7533C5.63992 10.3413 5.49326 9.8899 5.14277 9.63525L2.93039 8.02787C2.14668 7.45846 2.54945 6.21885 3.51818 6.21885H6.25283C6.68606 6.21885 7.07001 5.93989 7.20389 5.52786L8.04894 2.92705Z"
          fill="#e62415"
          clipPath="url(#half-star-clip)"
        ></path>
      )}
    </svg>
  );
};