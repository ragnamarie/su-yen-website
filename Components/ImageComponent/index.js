import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { ImageDetailsForm } from "../ImageDetailsForm";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px; /* Adjust this value to control the distance  */
    width: 100%;
    height: 1px;
    background-color: black;
  }
`;

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

    router.push("/confirmation");
  }

  async function handleEditDetails(event, id, filename) {
    console.log("iscalled");
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get("title");
    const description = formData.get("description");

    const response = await fetch(`/api/images/${id}/${filename}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...imageData,
        title: title,
        description: description,
      }),
    });

    if (response.ok) {
      mutate();
    }

    router.push("/confirmation");
  }

  return (
    <ImageWrapper className={`w-64 h-32 relative`}>
      <h2>{image.title}</h2>
      <img
        alt=""
        src={image.src}
        fill={true}
        layout="responsive"
        style={{ width: "100%", height: "auto" }}
        priority={true}
      />

      <div>{image.description}</div>
      {session && (
        <ImageDetailsForm onEditDetails={handleEditDetails} image={image} />
      )}
      {session && (
        <button onClick={() => handleDelete(image._id, image.originalFilename)}>
          <span role="img">delete this one</span>
        </button>
      )}
    </ImageWrapper>
  );
}
