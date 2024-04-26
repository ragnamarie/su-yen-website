import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSession } from "next-auth/react";

const StyledTextArea = styled.textarea`
  font-family: Helvetica, sans-serif;
  padding: 5px;
  width: 50%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export default function AboutForm({ infos }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const id = infos._id;

  const { data, isLoading, mutate } = useSWR(`/api/infos/${id}`);

  async function handleEditAbout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const aboutData = formData.get("about"); // Get the value of 'about' input

    const response = await fetch(`/api/infos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ about: aboutData }), // Send 'about' value in the request body
    });

    if (response.ok) {
      mutate();
      router.push("/about");
    }
    console.log("submitted");
  }

  if (!session) {
    return <p>You are not signed in.</p>;
  }
  return (
    <form onSubmit={handleEditAbout}>
      <FormContainer>
        <StyledTextArea
          type="text"
          id="about-input"
          name="about"
          defaultValue={infos.about}
          rows="15"
          cols="50"
        />
        <button
          style={{
            fontWeight: "700",
          }}
          type="submit"
        >
          Save Changes
        </button>
      </FormContainer>
    </form>
  );
}
