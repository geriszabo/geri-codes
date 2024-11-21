import { useTranslations } from "next-intl";
import { IconType } from "react-icons/lib";
import {
  SiTypescript,
  SiPrisma,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { Badge } from "../ui/badge";

interface TechStackInterface {
  name: string;
  icon: IconType;
}

export const TechStack = () => {
  const t = useTranslations("techStack");
  return (
    <section className="mt-12">
      <h1 className="text-2xl">{t("title")}</h1>
      <ul className="flex flex-wrap gap-5 mt-4 sm:max-w-[60%]">
        {techStackItems.map((tech) => (
          <li key={tech.name}>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-1">
              <span>
                <tech.icon className="text-lg" />
              </span>
              {tech.name}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
};

const techStackItems: TechStackInterface[] = [
  {
    name: "typescript",
    icon: SiTypescript,
  },
  {
    name: "javascript",
    icon: SiJavascript,
  },
  {
    name: "react",
    icon: FaReact,
  },
  {
    name: "next.js",
    icon: SiNextdotjs,
  },
  {
    name: "node.js",
    icon: SiNodedotjs,
  },
  {
    name: "monogdb",
    icon: SiMongodb,
  },
  {
    name: "prisma",
    icon: SiPrisma,
  },
];
