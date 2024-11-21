import { useTranslations } from 'next-intl'
import React from 'react'

interface TechStackInterface {
    name: string,
    logo: string
}

export const TechStack = () => {
    const t = useTranslations("techStack")
  return (
    <section className='mt-8'>
        <h1 className='text-2xl'>{t("title")}</h1>
    </section>
  )
}

const techStackItems: TechStackInterface[] = [
    {
        name: "typescript",
        logo: ""
    }
]