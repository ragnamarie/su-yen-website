import Image from "next/image";

export function ImageComponent({ image }) {
  return (
    <div className={`w-64 h-32 relative`}>
      <Image
        alt=""
        src={image.src}
        fill={false}
        style={{ objectFit: "contain" }}
        priority={true}
        width={50}
        height={25}
        layout="responsive"
      />
    </div>
  );
}
