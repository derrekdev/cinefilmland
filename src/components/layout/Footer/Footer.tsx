import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="pt-20 mt-auto">
      {/* <section className="container flex flex-col py-10 px-5 ">Footer</section> */}
      <section className="bg-neutral-600">
        <div className="container flex flex-col md:flex-row max-md:items-center justify-between py-4 px-5 gap-4">
          <span>© 2023 CineFilmland</span>
          <div className="flex flex-row gap-4 text-xl">
            <a href="/#" target="_blank">
              <BsFacebook />
            </a>
            <a href="/#" target="_blank">
              <BsInstagram />
            </a>
            <a href="/#" target="_blank">
              <BsTwitter />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
