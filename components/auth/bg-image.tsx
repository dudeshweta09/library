import Image from "next/image";

const BgImage = () => {
  return (
    <Image
      src="https://www.vmtlib.michlibrary.org/library-books.jpg/@@images/image.jpeg"
      alt={"bg-image"}
      fill
      sizes="100vw"
      style={{ objectFit: "cover", zIndex: -3 }}
    ></Image>
  );
};

export default BgImage;
