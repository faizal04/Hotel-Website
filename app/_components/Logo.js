import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* eslint-disable-next-line */}
      <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100 hidden md:inline-block">
        The Kashmir Paradise
      </span>
    </Link>
  );
}

export default Logo;
