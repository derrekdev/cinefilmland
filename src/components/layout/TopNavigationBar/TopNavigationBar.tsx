"use client";

import BadgeStatus from "@/components/ui/BadgeStatus/BadgeStatus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./topNavigationBar.module.scss";

type topLinkProps = {
  name: string;
  href: string;
  status?: "dev" | "beta" | "new" | null;
  compare?: any;
};

const topLink: topLinkProps[] = [
  {
    name: "Home",
    href: "/",
    // status: "dev",
  },
  {
    name: "Movie",
    href: "/movie_trending",
    // status: "dev",
    compare: [
      // "/movie_search",
      "/movie_trending",
      "/movie_popular",
      "/movie_upcoming",
      "/movie_discover",
    ],
  },
  {
    name: "TV",
    href: "/series_trending",
    status: "dev",
    compare: ["/series_trending", "/series_popular"],
  },
  {
    name: "About",
    href: "/about",
    status: "beta",
  },
];

export default function TopNavigationBar() {
  const pathname = usePathname();

  const statusComponent = (statusType: string) => {
    switch (statusType) {
      case "dev":
        return (
          <BadgeStatus
            variantType="destructive"
            description="In Progress"
            addClass="max-lg:ml-0 max-lg:mt-0 max-lg:relative"
          />
        );

      case "new":
        return (
          <BadgeStatus
            description="New"
            addClass="bg-green-500 max-lg:ml-0 max-lg:mt-0 max-lg:relative"
          />
        );

      case "beta":
        return (
          <BadgeStatus
            description="Beta"
            addClass="bg-blue-400 max-lg:ml-0 max-lg:mt-0 max-lg:relative"
          />
        );

      default:
        return null;
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleTopMenu = () => {
    const topMenuElem = document.getElementById("nav-content");

    if (topMenuElem?.classList.contains(styles.active)) {
      topMenuElem.classList.remove(styles.active);
    } else {
      topMenuElem?.classList.add(styles.active);
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-neutral-900 bg-opacity-70 p-6 md:px-10 fixed w-full z-50 top-0 h-auto">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          className="text-white no-underline hover:text-white hover:no-underline"
          href="/"
        >
          <span className="text-base max-lg:text-[2.5vw] uppercase">
            <span className="text-2xl max-lg:text-[3vw] text-yellow-300">
              cine
            </span>
            filmland
          </span>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={() => {
            setIsNavOpen((nav) => !nav);
            handleTopMenu();
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block  max-lg:pt-0 transition-all ${
          isNavOpen
            ? "max-lg:h-full max-lg:opacity-100"
            : "max-lg:h-0 max-lg:opacity-0"
        } `}
        id="nav-content"
      > */}
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block  max-lg:pt-0 transition-all ${styles.navContent} `}
        id="nav-content"
      >
        {/* <ul
          className={`list-reset max-lg:flex max-lg:flex-col lg:flex justify-end flex-1 items-center max-lg:items-start h-10 max-lg:h-auto transition-all ${
            isNavOpen ? "max-lg:max-h-[400px]" : "max-lg:max-h-0"
          } `}
        > */}
        <ul
          className={`list-reset max-lg:flex max-lg:flex-col lg:flex justify-end flex-1 items-center max-lg:items-start h-10 max-lg:h-auto transition-all`}
        >
          {topLink &&
            topLink.map((link, index) => (
              <li key={index} className="mr-3 max-lg:w-3/4">
                {/* <Link
                  className={`${
                    pathname === link.href ||
                    (link.compare && link.compare.includes(pathname))
                      ? "font-extrabold text-base"
                      : "font-thin text-xs"
                  }
                  ${
                    isNavOpen ? "max-lg:max-h-10" : "max-lg:max-h-0"
                  } text-white flex flex-col max-lg:flex-row no-underline hover:text-gray-200 transition-all hover:text-underline py-2 px-4 w-full`}
                  href={link.href}
                >*/}
                <Link
                  className={`${
                    pathname === link.href ||
                    (link.compare && link.compare.includes(pathname))
                      ? "font-extrabold text-base"
                      : "font-thin text-xs"
                  } text-white flex flex-col max-lg:flex-row no-underline hover:text-gray-200 transition-all hover:text-underline py-2 px-4 w-full`}
                  href={link.href}
                >
                  <span className="max-lg:pr-4 ">{link.name}</span>
                  {link.status && statusComponent(link.status)}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
