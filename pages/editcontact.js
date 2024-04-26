import ContactForm from "@/Components/ContactForm";
import useSWR from "swr";

export default function EditContactPage() {
  const { data, isLoading } = useSWR("/api/infos");

  if (isLoading) {
    return <p>Loading...</p>;
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
