import { Variants } from "@/types/variants";
import SidebarLink from "./SidebarLink";

interface SidebarLinksProps {
  filteredVariants: Variants;
}

export default function SidebarLinks(props: SidebarLinksProps) {
  // handle when filteredVariants is empty
  if (props.filteredVariants.length === 0) {
    return <h3 className="text-sm">No matching animations found.</h3>;
  }

  return (
    <>
      {props.filteredVariants.map((item) => (
        <SidebarLink key={item.id} {...item} />
      ))}
    </>
  );
}
