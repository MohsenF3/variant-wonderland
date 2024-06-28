import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex-align gap-5">
      <Link href="https://github.com/MohsenF3" target="_blank">
        <FaGithub className="size-5" />
      </Link>
      <Link href="https://www.linkedin.com/in/mohsen-faramarzi">
        <FaLinkedin className="size-5" />
      </Link>
    </div>
  );
}
