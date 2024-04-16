import Image from "next/image";

export function ImageComponent({ image }) {
  return (
    <div className={`w-64 h-32 relative`}>
      <img
        alt=""
        src={image.src}
        fill={true}
        layout="responsive"
        style={{ width: "100%", height: "auto" }}
        priority={true}
      />
    </div>
  );
}
