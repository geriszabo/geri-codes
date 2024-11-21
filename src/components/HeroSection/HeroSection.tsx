import { useTranslations } from "next-intl";
import Image from "next/image";

export const HeroSection = () => {
  const t = useTranslations("HeroSection");
  return (
    <section className="mt-8">
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">{t("title")}</h1>
          <p>
            {t.rich("introduction", {
              br: () => <br></br>,
              strong: (children) => <strong>{children}</strong>,
            })}
          </p>
        </div>
        {/* TODO: resize image */}
        <Image
          className="rounded-full filter contrast-125"
          src="/image.png"
          width={180}
          height={180}
          alt="good looking bald man"
        />
      </div>
    </section>
  );
};
