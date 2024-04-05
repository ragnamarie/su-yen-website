import Image from "next/image";

export function ImageComponent({ image }) {
  return (
    <div className={`w-64 h-32 relative`}>
      <img
        alt=""
        src={image.src}
        fill={false}
        width={300}
        height={100}
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
      />
    </div>
  );
}
