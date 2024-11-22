import Link from "next/link";
import { ModeToggle } from "../Theme/ModeToggle";
import { useTranslations } from "next-intl";

interface HeaderItem {
  name: string;
  href: string;
}

export const Header = () => {
  const t = useTranslations("header");
  return (
    <header className="sticky top-0 pt-1 bg-background/80 backdrop-blur-lg">
      <nav className="flex items-center justify-between ">
        <ul className="flex justify-between gap-4">
          {headerItems.map((headerItem) => (
            <li key={headerItem.name}>
              <Link href={headerItem.href}> {t(headerItem.name)} </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
};

const headerItems: HeaderItem[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "projects",
    href: "/projects",
  },
  //Temporarily disabled until finished
  //Too lazy for a feature flag
  // {
  //   name: "about",
  //   href: "/about",
  // },
];
