import ContactForm from "@/Components/ContactForm";
import useSWR from "swr";

export default function EditContactPage() {
  const { data, isLoading } = useSWR("/api/contacts");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  console.log(data);

  const contacts = data[0];
  console.log(contacts);

  return (
    <>
      <ContactForm contacts={contacts} />
    </>
  );
}
