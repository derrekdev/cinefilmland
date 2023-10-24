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

  console.log("testing", sideMenuMovieuLinks);

  return (
    <div className="w-80 pt-32 fixed">
      <ul className="p-12 ">
        {sideMenuMovieuLinks.length > 0 &&
          sideMenuMovieuLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="text-yellow-300 ">
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
