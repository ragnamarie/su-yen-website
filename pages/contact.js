import Contacts from "@/Components/Contacts";
import useSWR from "swr";

export default function ContactPage() {
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

  return <Contacts contacts={contacts} />;
}
