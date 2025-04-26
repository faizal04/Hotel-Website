import Image from "next/image";
import bgimage from "@/public/bg.png";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <main className="mt-24">
        <Image
          src={bgimage}
          fill
          placeholder="blur"
          quality={70}
          className="object-cover object-center sm:object-top"
          alt="Mountains and forests with two cabins"
          priority
        />

        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl text-primary-50 mb-6 sm:mb-10 tracking-tight font-normal">
            Welcome to paradise.
          </h1>

          <Link
            href="/cabins"
            className="bg-accent-500 px-6 py-3 text-base sm:px-8 sm:py-6 sm:text-lg text-primary-800 font-semibold hover:bg-accent-600 transition-all rounded-md"
          >
            Explore luxury cabins
          </Link>
        </div>
      </main>
    </div>
  );
}
