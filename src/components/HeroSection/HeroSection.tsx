import { useTranslations } from "next-intl";
import Image from "next/image";
import { Socials } from "./Socials";
import { Typography } from "../Typography";

export const HeroSection = () => {
  const t = useTranslations("heroSection");
  return (
    <section>
      <div className="grid sm:grid-cols-5">
        <div className="col-span-3 flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-4">
            <Typography namespacePath="heroSection" variant="title" text="title"/>
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
          className="col-span-2 hidden sm:block rounded-full filter contrast-125"
          src="/image.png"
          width={180}
          height={180}
          alt="good looking bald man"
        />
      </div>
    </section>
  );
};
