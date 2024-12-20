import React from "react";
import cn from "classnames";

export const buttonVariants = {
  primary: {
    mainName: "btn-primary",
  },
  cta: {
    mainName: "btn-cta",
  },
  secondary: {
    mainName: "btn-secondary",
  },
  "secondary:inverted": {
    mainName: "btn-secondary-inverted",
  },
  tetriary: {
    mainName: "btn-tetriary !p-0",
  },
  link: {
    mainName: "btn-link !p-0",
  },
};

const sizes = {
  lg: "py-5 px-10 text-lg leading-none yw-button-large",
  md: "py-4 px-6 text-sm leading-none yw-button-small",
  sm: "py-2 px-4 text-sm leading-none yw-button-small",
};

export type ButtonVariant = keyof typeof buttonVariants;

const Button = ({
  as = "button",
  children,
  className,
  variant = "primary",
  size = "lg",
  spinner,
  ...rest
}: {
  as?: "div" | "button" | "a" | "input" | "label" | "span";
  size?: keyof typeof sizes;
  variant?: keyof typeof buttonVariants;
  children?: any;
  className?: string;
  spinner?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: string | number;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
}) => {
  const Component = as;
  const { mainName } = buttonVariants[variant];
  const sizeClass = sizes[size];

  return (
    <Component
      className={cn(
        "btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat",
        spinner && "cursor-not-allowed",
        className,
        sizeClass,
        mainName
      )}
      data-variant={variant}
      {...rest}
    >
      {spinner ? "please wait..." : children}
    </Component>
  );
};

export default Button;
