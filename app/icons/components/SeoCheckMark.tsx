import type { FC } from "react";
import type { Theme } from "~/types";

interface IReactLogoProps {
  theme: Theme;
  className?: string;
}
const ReactLogo: FC<IReactLogoProps> = ({theme, className}) => {
  return (
    theme === "dark" ?
    <svg className={className} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.662598" width="32" height="32" rx="16" fill="#EFF6FF" fillOpacity="0.1"/>
      <path d="M14.0007 19.8341L23.1927 10.6411L24.6077 12.0551L14.0007 22.6621L7.63672 16.2981L9.05072 14.8841L14.0007 19.8341Z" fill="#3B82F6"/>
    </svg>
    :
    <svg className={className} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="32" height="32" rx="16" fill="#EFF6FF"/>
      <path d="M14.0007 19.6715L23.1927 10.4785L24.6077 11.8925L14.0007 22.4995L7.63672 16.1355L9.05072 14.7215L14.0007 19.6715Z" fill="#2563EB"/>
    </svg>
  );
};

export default ReactLogo;
