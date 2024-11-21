import { Github, Linkedin, LucideIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

interface SocialInterface {
  name: string;
  icon: LucideIcon;
  href: string;
}

export const Socials = () => {
    const t = useTranslations("HeroSection.socials")
  return (
    <div className="flex gap-4">
      {socialContacts.map((social) => (
        <Link key={social.name} href={social.href}>
          {" "}
          <social.icon strokeWidth={2} />{" "}
        </Link>
      ))}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
      <Popover>
        <PopoverTrigger asChild>
          <Phone className="cursor-pointer " />
        </PopoverTrigger>
        <PopoverContent className="flex justify-center w-fit rounded-full">
          <Link className="font-bold " href="tel:+36205748584">
            {"+36/20 - 574 - 8584"}
          </Link>
        </PopoverContent>
      </Popover>
      </TooltipTrigger>
          <TooltipContent>
            <p>{t("whatsappTooltip")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

const socialContacts: SocialInterface[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gergoszabo87/",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/geriszabo",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:gergoszabodev@gmail.com",
  },
];
