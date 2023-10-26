"use client";

import BadgeStatus from "@/components/ui/BadgeStatus/BadgeStatus";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      "/movie_trending",
      "/movie_popular",
      "/movie_upcoming",
      "/movie_discover",
    ],
  },
  {
    name: "TV",
    href: "/#",
    status: "dev",
  },
  {
    name: "Link",
    href: "/#",
    // status: "new",
  },
];

export default function TopNavigationBar() {
  const pathname = usePathname();

  const statusComponent = (statusType: string) => {
    switch (statusType) {
      case "dev":
        return (
          <BadgeStatus variantType="destructive" description="In Progress" />
        );

      case "new":
        return <BadgeStatus description="New" addClass="bg-green-500" />;

      case "beta":
        return <BadgeStatus description="Beta" addClass="bg-blue-400" />;

      default:
        return null;
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-neutral-900 bg-opacity-70 p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          className="text-white no-underline  hover:text-white hover:no-underline"
          href="/"
        >
          <span className="text-base pl-2 uppercase">
            {/* <i className="em em-grinning"></i>  */}
            <span className="text-2xl  text-yellow-300">cine</span>
            filmland
          </span>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
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

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center h-10">
          {topLink &&
            topLink.map((link, index) => (
              <li key={index} className="mr-3">
                <Link
                  className={`${
                    pathname === link.href ||
                    (link.compare && link.compare.includes(pathname))
                      ? "font-extrabold text-base"
                      : "font-thin text-xs"
                  } text-white inline-block no-underline hover:text-gray-200 transition-all hover:text-underline py-2 px-4`}
                  href={link.href}
                >
                  {link.name}
                  {link.status && statusComponent(link.status)}
                </Link>
              </li>
            ))}
          {/* <li className="mr-3">
            <Link
              className="inline-block py-2 px-4 text-white no-underline"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="/movie_trending"
            >
              Movie
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              TV
              <Badge variant="destructive" className="mb-[-20px] text-[8px]">
                On Development
              </Badge>
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              link
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
