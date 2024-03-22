import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding-right: 40px;
`;

const StyledListItem = styled.li`
  font-weight: 700;
  font-size: 20px;
`;

export default function ContactForm({ contacts }) {
  const router = useRouter();
  const id = contacts._id;
  console.log(id);

  const { data, isLoading, mutate } = useSWR(`/api/contacts/${id}`);

  console.log(data);

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const contactData = Object.fromEntries(formData);

    const response = await fetch(`/api/contacts/${id}`, {
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
  return (
    <form onSubmit={handleEdit}>
      <StyledList>
        <StyledListItem>
          <label htmlFor="phone-input">
            <u>💱phone</u>
          </label>
          <input
            type="text"
            id="phone-input"
            name="phone"
            defaultValue={contacts.phone}
          />
        </StyledListItem>
        <StyledListItem>
          <label htmlFor="mail-input">💱mail</label>
          <input
            type="mail"
            id="mail-input"
            name="mail"
            defaultValue={contacts.mail}
          />
        </StyledListItem>
        <StyledListItem>
          <label htmlFor="instagram-input">
            <u>💱instagram</u>
          </label>
          <input
            type="text"
            id="instagram-input"
            name="instagram"
            defaultValue={contacts.instagram}
          />
        </StyledListItem>
        <StyledListItem>
          <label htmlFor="tiktok-input">
            <u>💱tiktok</u>
          </label>
          <input
            type="text"
            id="tiktok-input"
            name="tiktok"
            defaultValue={contacts.tiktok}
          />
        </StyledListItem>
        <button type="submit">SUBMIT</button>
      </StyledList>
    </form>
  );
}
