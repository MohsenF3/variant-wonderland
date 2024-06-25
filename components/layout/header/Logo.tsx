import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="md:absolute-center relative left-0 top-[50%] z-10 cursor-pointer text-2xl font-black text-foreground mix-blend-overlay hover:border-b md:text-4xl"
    >
      <span className="text-sm md:text-lg">Variant</span>
      <span className="button-gradient bg-clip-text text-transparent">
        Wonderland.
      </span>
    </Link>
  );
}
