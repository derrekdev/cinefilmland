import Link from "next/link";

const movieuLinks = [
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

type linkTypeProps = "movie" | "tv";

interface linkProps {
  name: string;
  href: string;
}

export default function SideMenu({ type = "movie" }: { type?: linkTypeProps }) {
  let sideMenuMovieuLinks: linkProps[] | null = [];

  switch (type) {
    case "movie":
      sideMenuMovieuLinks = movieuLinks;
      break;

    default:
      sideMenuMovieuLinks = [];
  }

  return (
    <aside className="w-2/12 pt-56 pl-10">
      <ul className=" fixed">
        {sideMenuMovieuLinks.length > 0 &&
          sideMenuMovieuLinks.map((link, index) => (
            <li key={index} className="py-4 hover:pl-6 transition-all">
              <Link href={link.href} className="text-yellow-300 text-xl">
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}
