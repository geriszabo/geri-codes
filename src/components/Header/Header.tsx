

import Link from "next/link";
import { ModeToggle } from "../Theme/ModeToggle";
 
interface HeaderItem {
  name: string;
  href: string;
}

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between ">
        <ul className="flex justify-between gap-4">
          {headerItems.map((headerItem) => (
            <li key={headerItem.name}>
              <Link href={headerItem.href}> {headerItem.name} </Link>{" "}
            </li>
          ))}
        </ul>
        <ModeToggle/>
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
    name: "about me",
    href: "/about",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "projects",
    href: "/projects",
  },
];
