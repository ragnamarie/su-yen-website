import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSession } from "next-auth/react";

const StyledList = styled.ul`
  gap: 20px;
`;

const StyledListItem = styled.li`
  font-weight: 300;
  font-size: 14px;
  position: relative;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px; /* Adjust this value to control the distance from the text */
    width: 400px;
    height: 1px;
    background-color: black;

    @media screen and (max-width: 700px) {
      width: 200px;
    }
  }
`;

const StyledLabel = styled.label`
  font-style: normal;
  padding-right: 10px;
`;

export default function ContactForm({ contacts }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const id = contacts._id;
  console.log(id);

  const { data, isLoading, mutate } = useSWR(`/api/infos/${id}`);

  console.log(data);

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const contactData = Object.fromEntries(formData);

    const response = await fetch(`/api/infos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (response.ok) {
      mutate();
      router.push("/contact");
    }
    console.log("submitted");
  }

  if (!session) {
    // If session is not available, return null or any other component to indicate that the ContactForm should not be rendered
    return <p>you are not signed in.</p>;
  }
  return (
    <form onSubmit={handleEdit}>
      <StyledList>
        <StyledListItem>
          <StyledLabel htmlFor="phone-input">💱phone</StyledLabel>
          <input
            type="text"
            id="phone-input"
            name="phone"
            defaultValue={contacts.phone}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledLabel htmlFor="mail-input">💱mail</StyledLabel>
          <input
            type="mail"
            id="mail-input"
            name="mail"
            defaultValue={contacts.mail}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledLabel htmlFor="instagram-input">💱instagram</StyledLabel>
          <input
            type="text"
            id="instagram-input"
            name="instagram"
            defaultValue={contacts.instagram}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledLabel htmlFor="tiktok-input">💱tiktok</StyledLabel>
          <input
            type="text"
            id="tiktok-input"
            name="tiktok"
            defaultValue={contacts.tiktok}
          />
        </StyledListItem>
      </StyledList>
      <button
        style={{
          fontWeight: "700",
        }}
        type="submit"
      >
        Save Changes
      </button>
    </form>
  );
}
