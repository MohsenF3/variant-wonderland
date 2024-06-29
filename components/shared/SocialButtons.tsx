import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div
      className="flex-align gap-5"
      role="navigation"
      aria-label="Social Links"
    >
      <Link
        href="https://github.com/MohsenF3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="size-5" aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/mohsen-faramarzi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="size-5" aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  );
}
