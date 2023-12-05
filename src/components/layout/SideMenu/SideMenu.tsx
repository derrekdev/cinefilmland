"use client";

import Link from "next/link";
import { useState } from "react";
import {
  PiCaretCircleDoubleLeftFill,
  PiCaretCircleDoubleRightFill,
} from "react-icons/pi";

import styles from "./sideMenu.module.scss";

const movieLinks = [
  {
    name: "Search Movie",
    href: "/movie_search",
  },
  {
    name: "Trending",
    href: "/movie_trending",
  },
  {
    name: "Popular",
    href: "/movie_popular",
  },
  {
    name: "Upcoming",
    href: "/movie_upcoming",
  },
  {
    name: "Discover",
    href: "/movie_discover",
  },
];

const seriesLinks = [
  // {
  //   name: "Search Movie",
  //   href: "/movie_search",
  // },
  {
    name: "Trending",
    href: "/series_trending",
  },
  {
    name: "Popular",
    href: "/#",
  },
  {
    name: "Upcoming",
    href: "/#",
  },
  // {
  //   name: "Discover",
  //   href: "/movie_discover",
  // },
];

type linkTypeProps = "movie" | "series";

interface linkProps {
  name: string;
  href: string;
}

export default function SideMenu({ type = "movie" }: { type?: linkTypeProps }) {
  let sideMenuMovieuLinks: linkProps[] | null = [];

  switch (type) {
    case "movie":
      sideMenuMovieuLinks = movieLinks;
      break;

    case "series":
      sideMenuMovieuLinks = seriesLinks;
      break;

    default:
      sideMenuMovieuLinks = [];
  }

  const [isShowSideMenu, setIsShowSideMenu] = useState(false);

  // const handleSideMenu = () => {
  //   console.log("test");
  //   const btnBlockElement = document.getElementById("button-block")?.classList;
  //   const sideMenuElement =
  //     document.getElementById("side-menu-block")?.classList;
  //   const btnChildElement = document
  //     .getElementById("side-menu-block")
  //     ?.appendChild(document.createElement("p"));

  //   if (btnBlockElement?.contains(styles.buttonInActive)) {
  //     btnBlockElement.remove(styles.buttonInActive);
  //     btnBlockElement.add(styles.buttonActive);
  //   } else if (btnBlockElement?.contains(styles.buttonActive)) {
  //     btnBlockElement.remove(styles.buttonActive);
  //     btnBlockElement.add(styles.buttonInActive);
  //   }

  //   if (sideMenuElement?.contains(styles.sideMenuInActive)) {
  //     sideMenuElement.remove(styles.sideMenuInActive);
  //     sideMenuElement.add(styles.sideMenuActive);
  //   } else if (sideMenuElement?.contains(styles.sideMenuActive)) {
  //     sideMenuElement.remove(styles.sideMenuActive);
  //     sideMenuElement.add(styles.sideMenuInActive);
  //   }
  // };
  // bg-neutral-900
  return (
    <aside className="lg:w-2/12 lg:pt-72 max-lg:relative lg:pl-10 bg-neutral-900 bg-opacity-70 max-lg:w-auto transition-all">
      <div
        id="button-block"
        // ${styles.buttonInActive}
        className={`z-10 max-lg:mt-40 h-10 block fixed lg:hidden transition-all text-right ${
          isShowSideMenu ? styles.buttonActive : styles.buttonInActive
        }`}
      >
        <button
          id=""
          className=" text-4xl z-10 rounded-full "
          onClick={() => {
            setIsShowSideMenu((sideMenu) => !sideMenu);
            // handleSideMenu();
          }}
        >
          {isShowSideMenu ? (
            <PiCaretCircleDoubleLeftFill />
          ) : (
            <PiCaretCircleDoubleRightFill />
          )}
        </button>
      </div>

      <ul
        id="side-menu-block"
        // ${styles.sideMenuInActive}
        className={`max-lg:ml-[-2rem] fixed bg-neutral-900 bg-opacity-90 max-lg:h-full max-lg:pt-56 transition-all  ${
          isShowSideMenu ? styles.sideMenuActive : styles.sideMenuInActive
        }`}
      >
        {sideMenuMovieuLinks.length > 0 &&
          sideMenuMovieuLinks.map((link, index) => (
            <li key={index} className="py-4 hover:pl-2 transition-all">
              <Link href={link.href} className="text-yellow-300 text-xl">
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}
