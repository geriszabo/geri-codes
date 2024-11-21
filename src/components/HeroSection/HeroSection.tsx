import { useTranslations } from "next-intl";
import Image from "next/image";
import { Socials } from "./Socials";

export const HeroSection = () => {
  const t = useTranslations("heroSection");
  return (
    <section className="mt-16">
      <div className="grid sm:grid-cols-2">
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl">{t("title")}</h1>
            <p>
              {t.rich("introduction", {
                br: () => <br></br>,
                strong: (children) => <strong>{children}</strong>,
              })}
            </p>
          </div>
          <Socials />
        </div>
        {/* TODO: resize image */}
        <Image
          className="hidden sm:block rounded-full filter contrast-125"
          src="/image.png"
          width={180}
          height={180}
          alt="good looking bald man"
        />
      </div>
    </section>
  );
};