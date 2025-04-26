import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="z-10 text-xl ml-10">
      <ul className="flex gap-8 sm:gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="text-base sm:text-lg hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-base sm:text-lg hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="text-base sm:text-lg hover:text-accent-400 transition-colors"
          >
            Guest Area
          </Link>
        </li>
        {session?.user && (
          <li>
            <img
              src={session?.user.image}
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full sm:block hidden"
              alt={session?.user.name}
              referrerPolicy="no-referrer"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
