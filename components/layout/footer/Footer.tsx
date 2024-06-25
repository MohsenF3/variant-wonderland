import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t px-4 md:px-8">
      <div className="flex-align h-20 md:h-24">
        <p className="text-foreground font-medium text-center text-sm leading-loose md:text-left">
          Designed and developed by{" "}
          <Link
            href=""
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Mohsen
          </Link>
          . Check out the repository on&nbsp;
          <Link
            href=""
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
