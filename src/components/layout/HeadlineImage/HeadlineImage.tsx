import coverImage from "@/../public/bg-image-cover.jpeg";
import Image from "next/image";

export default function HeadlineImage({
  imageSrc,
  imageAlt,
  showImage = true,
}: {
  imageSrc?: string | null;
  imageAlt?: string;
  showImage?: boolean;
}) {
  return (
    <section className="h-[50vh] max-h-[500px] relative flex flex-col justify-end bg-neutral-800 ">
      {showImage && (
        <Image
          src={
            imageSrc
              ? "https://image.tmdb.org/t/p/original" + imageSrc
              : coverImage
          }
          fill
          alt={imageAlt + " cover"}
          className="h-[50vh] object-cover z-10"
        />
      )}
    </section>
  );
}
