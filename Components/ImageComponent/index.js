import Image from "next/image";
import { useRouter } from "next/router";

export function ImageComponent({ image }) {
  console.log(image);
  const router = useRouter();

  async function handleDelete(id, filename) {
    const response = await fetch(`/api/images/${id}/${filename}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      return;
    }

    router.push("/");
  }

  return (
    <div className={`w-64 h-32 relative`}>
      <button onClick={() => handleDelete(image._id, image.originalFilename)}>
        <span role="img">delete this one</span>
      </button>
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
