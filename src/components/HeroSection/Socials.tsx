import {
  ArrowDownToLine,
  Github,
  Linkedin,
  LucideIcon,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography, TypographyProps } from "../Typography";
import { Button } from "../ui/button";

interface SocialInterface {
  name: string;
  icon: LucideIcon;
  href: string;
}

export const Socials = () => {
  const typographyProps: Omit<TypographyProps, "text"> = {
    namespacePath: "heroSection.socials",
    variant: "paragraph",
  };

  return (
    <div className="flex gap-4 items-center">
      <Button asChild>
        <a href="/cv.pdf" download >
        <Typography {...typographyProps} text="cv" />
        <ArrowDownToLine />
        </a>
      </Button>
      {socialContacts.map((social) => (
        <Link key={social.name} href={social.href}>
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
              <PopoverContent className="flex justify-center w-fit h-fit rounded-full">
                <Link className="text-xs " href="tel:+36205748584">
                  {"+36/20 - 574 - 8584"}
                </Link>
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent>
            <Typography {...typographyProps} text="whatsappTooltip" />
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
