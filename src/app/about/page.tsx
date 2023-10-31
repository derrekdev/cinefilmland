import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import FullPageBodyLayout from "@/components/layout/element/FullPageBodyLayout";

export default function page() {
  return (
    <main>
      <HeadlineImage imageSrc={""} imageAlt={"about cover"} />
      <HeadlineTitle
        title="CineFileland"
        tagLine="Website that provides information about millions of films and television programs"
        showPoster={false}
      />
      <FullPageBodyLayout addClass="md:px-10">
        <h2 className="text-2xl text-yellow-300 pb-6">About the Site</h2>
        <div className="flex flex-col gap-8">
          {" "}
          <p className=" ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className=" ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </FullPageBodyLayout>
    </main>
  );
}
