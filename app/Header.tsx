import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="grid items-center justify-center grid-cols-3 p-10">
        <Bars3Icon className="w-12 cursor-pointer" />
        <Link href="/">
          <h1 className="font-serif text-4xl text-center">
            The{" "}
            <span className="underline decoration-6 decoration-orange-500">
              PAPAFAM
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* Dark Mode */}
          <button className="hidden px-4 py-2 text-white rounded-full md:inline bg-slate-900 lg:px-8 lg:py-4 dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* Nav Links */}
      <NavLinks />

      {/* Search Box */}
      <SearchBox />
    </header>
  );
}

export default Header;
