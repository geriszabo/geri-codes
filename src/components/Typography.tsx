import { useTranslations } from "next-intl"

interface TypographyProps{
    variant: "title" | "subtitle" | "paragraph",
    namespacePath: string
    text: string
}

export const Typography = ({namespacePath, text, variant}: TypographyProps) => {
    const t = useTranslations(namespacePath)
    if(variant === "subtitle" || variant === "title") {
        return <h1 className={`${variant === "title" ? "text-5xl" : "text-2xl"}`} >{t(text)}</h1>
    }
  return (
    <p>{t(text)}</p>
  )
}
