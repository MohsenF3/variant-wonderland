import { NAVIGATION_LINKS } from "@/lib/placeholder-data";
import NavigationLink from "./NavigationLink";

export default function NavigationLinks() {
  return (
    <nav className="hidden md:block">
      <ul className="items-center gap-2 flex">
        {NAVIGATION_LINKS.map((link) => (
          <NavigationLink key={link.id} {...link} />
        ))}
      </ul>
    </nav>
  );
}
