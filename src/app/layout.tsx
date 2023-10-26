import TopNavigationBar from "@/components/layout/TopNavigationBar/TopNavigationBar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// const addArimoFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Arimo-Regular.tff",
//       weight: "400",
//     },
//     {
//       path: "../../public/fonts/Arimo-Bold.tff",
//       weight: "600",
//     },
//   ],
//   variable: "--font-arimo",
// });

export const metadata: Metadata = {
  title: "CineFilmLand",
  description: "Movies, TV Show, etc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  bg-neutral-900 text-neutral-100 dark`}
      >
        <TopNavigationBar />
        {children}
      </body>
    </html>
  );
}
