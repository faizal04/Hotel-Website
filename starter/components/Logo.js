import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img
        src="logo.png"
        height="40"
        width="40"
        className="sm:h-16 sm:w-16"
        alt="The Wild Oasis logo"
      />
      <span className="hidden sm:inline-block text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
