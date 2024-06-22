import { NAVIGATION_LINKS } from "@/lib/placeholder-data";
import NavigationLink from "./NavigationLink";

export default function NavigationLinks() {
  return (
    <nav className="hidden md:block">
      <ul className="flex-align gap-2">
        {NAVIGATION_LINKS.map((link) => (
          <NavigationLink key={link.id} {...link} />
        ))}
      </ul>
    </nav>
  );
}
