"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "@/app/_components/SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-1 text-sm">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-2 px-4 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-3 font-semibold text-primary-200 ${
                link.href === pathname ? "bg-primary-800" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span className=" sm:inline">{link.name}</span>{" "}
              {/* Hides the text on mobile */}
            </Link>
          </li>
        ))}

        <li className="sm:mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
