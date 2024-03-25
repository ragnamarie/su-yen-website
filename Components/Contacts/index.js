import styled from "styled-components";
import Link from "next/link";
import { useSession } from "next-auth/react";

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

const EditButton = styled.span`
  position: relative;
  color: white;
  background-color: black;
  font-size: 12px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  border: none;
  border-radius: 30px;
  padding: 10px;
`;

export default function Contacts({ contacts }) {
  const { data: session, status } = useSession();

  return (
    <>
      <StyledList>
        <StyledListItem>
          <u>💱phone</u> {contacts.phone}
        </StyledListItem>
        <StyledListItem>
          <u>💱mail</u> {contacts.mail}
        </StyledListItem>
        <StyledListItem>
          <u>💱instagram</u> {contacts.instagram}
        </StyledListItem>
        <StyledListItem>
          <u>💱tiktok</u> {contacts.tiktok}
        </StyledListItem>
        {session && (
          <Link href="/editcontact">
            <button>EDIT CONTACT INFO</button>
          </Link>
        )}
      </StyledList>
    </>
  );
}
