import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { ImageDetailsForm } from "../ImageDetailsForm";
import styled from "styled-components";

const ImageWrapper = styled.div`
  padding-top: 30px;
`;

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    align-items: start;
    gap: 30px; /* Adjust the gap between image and description */
    padding-bottom: 30px;

    img {
      flex: 0 0 auto; /* Prevent the image from growing */
      max-width: 50%; /* Set maximum width for the image */
      height: auto; /* Maintain aspect ratio */
    }

    div {
      flex: 1; /* Allow description to grow and take remaining space */
    }
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
    <div className={`w-64 h-32 relative`}>
      <h2>{image.title}</h2>
      <Wrapper>
        <img
          alt=""
          src={image.src}
          fill={true}
          layout="responsive"
          style={{ width: "100%", height: "auto" }}
          priority={true}
        />

        <div>{image.description}</div>
      </Wrapper>
      {session && (
        <ImageDetailsForm
          onEditDetails={handleEditDetails}
          onDelete={handleDelete}
          image={image}
        />
      )}
    </div>
  );
}
