import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export function ImageComponent({ image }) {
  console.log(image);
  const { data: session, status } = useSession();
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
      {session && (
        <button onClick={() => handleDelete(image._id, image.originalFilename)}>
          <span role="img">delete this one</span>
        </button>
      )}
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

//idea: each uploaded pictures renders a form via which i can merge another property (title, description etc) into the image object
