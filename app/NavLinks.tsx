"use client";
//use client means you can use hooks

import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { categories } from "../constants";

function NavLinks() {
  const pathname = usePathname();

  //the path typescript will be the category below
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  //the code above splits [mysite.com, news, techonology] website url into 3 parts array
  //and get the last value which is technology and compare to path

  return (
    <nav className="text-center grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          //category is the path: string in const isActive
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
