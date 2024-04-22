import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { ImageDetailsForm } from "../ImageDetailsForm";

export function ImageComponent({ image }) {
  console.log(image);
  const { data: session, status } = useSession();
  const { imageData, isLoading, mutate } = useSWR(
    `/api/images/${image._id}/${image.originalFilename}`
  );
  const router = useRouter();
  console.log(imageData);

  async function handleDelete(id, filename) {
    const response = await fetch(`/api/images/${id}/${filename}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      return;
    }

    router.push("/");
  }

  async function handleEditDetails(event, id, filename) {
    console.log("iscalled");
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get("title");

    const response = await fetch(`/api/images/${id}/${filename}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...imageData,
        title: title,
      }),
    });

    if (response.ok) {
      mutate();
    }
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
      <ImageDetailsForm onEditDetails={handleEditDetails} image={image} />
    </div>
  );
}

//idea: each uploaded pictures renders a form via which i can merge another property (title, description etc) into the image object
