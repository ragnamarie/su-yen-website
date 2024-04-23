import styled from "styled-components";
import Link from "next/link";
import { useSession } from "next-auth/react";

const StyledList = styled.ul`
  gap: 20px;
`;

const StyledListItem = styled.li`
  font-weight: 300;
  font-size: 14px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px; /* Adjust this value to control the distance from the text */
    width: 100%;
    height: 1px;
    background-color: black;
  }
`;

export default function Contacts({ contacts }) {
  const { data: session, status } = useSession();

  return (
    <>
      <StyledList>
        <StyledListItem>
          💱phone
          <text
            style={{
              color: "#999696",
              padding: "10px",
            }}
          >
            {contacts.phone}
          </text>
        </StyledListItem>
        <StyledListItem>
          💱mail
          <text
            style={{
              color: "#999696",
              padding: "10px",
            }}
          >
            {contacts.mail}
          </text>
        </StyledListItem>
        <StyledListItem>
          💱instagram
          <text
            style={{
              color: "#999696",
              padding: "10px",
            }}
          >
            {contacts.instagram}
          </text>
        </StyledListItem>
        <StyledListItem>
          💱tiktok
          <text
            style={{
              color: "#999696",
              padding: "10px",
            }}
          >
            {contacts.tiktok}
          </text>
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
