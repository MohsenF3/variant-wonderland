import SocialButtons from "@/components/shared/SocialButtons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t px-4 md:px-8">
      <div className="flex-between h-20 md:h-24">
        <p className="text-foreground font-medium text-center text-sm leading-loose md:text-left">
          Designed and developed by{" "}
          <Link
            href="https://github.com/MohsenF3"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Mohsen
          </Link>
          . Check out the repository on&nbsp;
          <Link
            href="https://github.com/MohsenF3/variant-wonderland"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>

        <div className="hidden md:block">
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
}
