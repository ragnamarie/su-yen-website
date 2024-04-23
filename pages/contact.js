import Link from "next/link";
import Contacts from "@/Components/Contacts";
import useSWR from "swr";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ContactPage() {
  const { data, isLoading } = useSWR("/api/contacts");

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
      <Contacts contacts={contacts} />
    </>
  );
}
