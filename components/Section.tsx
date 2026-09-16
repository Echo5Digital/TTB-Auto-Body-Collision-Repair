import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "alternate" | "primary" | "transparent";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  containerClassName?: string;
  as?: keyof JSX.IntrinsicElements;
}

const backgroundStyles: Record<NonNullable<SectionProps["background"]>, string> = {
  default: "bg-[#08090B]",
  alternate: "bg-[#0E1014]",
  primary: "bg-[#E50914]",
  transparent: "bg-transparent",
};

const spacingStyles: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
};

const maxWidthStyles: Record<NonNullable<SectionProps["maxWidth"]>, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  background = "default",
  spacing = "lg",
  maxWidth = "2xl",
  containerClassName = "",
  as: Tag = "section",
}) => {
  return (
    <Tag
      id={id}
      className={[
        "w-full",
        backgroundStyles[background],
        spacingStyles[spacing],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "mx-auto",
          "w-full",
          "px-4 sm:px-6 lg:px-8",
          maxWidthStyles[maxWidth],
          containerClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </Tag>
  );
};

export default Section;