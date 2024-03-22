import useSWR from "swr";
import { useRouter } from "next/router";

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
    }
    console.log("submitted");
  }
  return (
    <form onSubmit={handleEdit}>
      <label htmlFor="phone-input"></label>
      <input
        type="text"
        id="phone-input"
        name="phone"
        defaultValue={contacts.phone}
      />
      <label htmlFor="mail-input"></label>
      <input
        type="mail"
        id="mail-input"
        name="mail"
        defaultValue={contacts.mail}
      />
      <label htmlFor="instagram-input"></label>
      <input
        type="text"
        id="instagram-input"
        name="instagram"
        defaultValue={contacts.instagram}
      />
      <label htmlFor="tiktok-input"></label>
      <input
        type="text"
        id="tiktok-input"
        name="tiktok"
        defaultValue={contacts.tiktok}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
