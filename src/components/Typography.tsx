import { useTranslations } from "next-intl";
import { HTMLProps } from "react";

export interface TypographyProps {
  variant: "title" | "subtitle" | "paragraph";
  namespacePath: string;
  text: string;
  className?: HTMLProps<HTMLElement>["className"];
}

export const Typography = ({
  namespacePath,
  text,
  variant,
  className,
}: TypographyProps) => {
  const t = useTranslations(namespacePath);
  if (variant === "subtitle" || variant === "title") {
    return (
      <h1
        className={`${
          variant === "title" ? "text-5xl" : "text-2xl"
        } ${className}`}
      >
        {t(text)}
      </h1>
    );
  }
  return <p className={`${className}`}>{t(text)}</p>;
};
