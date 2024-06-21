import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="cursor-pointer relative hover:border-b left-0 top-[50%] z-10 text-2xl md:text-4xl font-black text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]"
    >
      <span className="text-sm md:text-lg">Variant</span> Wonderland.
    </Link>
  );
}
