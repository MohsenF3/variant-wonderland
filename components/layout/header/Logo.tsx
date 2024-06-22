import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="cursor-pointer relative hover:border-b left-0 top-[50%] z-10 text-2xl md:text-4xl font-black text-foreground mix-blend-overlay md:absolute-center"
    >
      <span className="text-sm md:text-lg">Variant</span>
      <span className="button-gradient bg-clip-text text-transparent">
        Wonderland.
      </span>
    </Link>
  );
}
