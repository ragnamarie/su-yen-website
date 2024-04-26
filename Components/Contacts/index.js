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

export default function Contacts({ contacts }) {
  const { data: session, status } = useSession();

  return (
    <>
      <StyledList>
        <StyledListItem>
          💱phone
          <small
            style={{
              color: "#999696",
              padding: "10px",
              fontSize: "10px",
            }}
          >
            {contacts.phone}
          </small>
        </StyledListItem>
        <StyledListItem>
          💱mail
          <small
            style={{
              color: "#999696",
              padding: "10px",
              fontSize: "10px",
            }}
          >
            {contacts.mail}
          </small>
        </StyledListItem>
        <StyledListItem>
          💱instagram
          <small
            style={{
              color: "#999696",
              padding: "10px",
              fontSize: "10px",
            }}
          >
            {contacts.instagram}
          </small>
        </StyledListItem>
        <StyledListItem>
          💱tiktok
          <small
            style={{
              color: "#999696",
              padding: "10px",
              fontSize: "10px",
            }}
          >
            {contacts.tiktok}
          </small>
        </StyledListItem>
        {session && (
          <Link href="/editcontact">
            <button
              style={{
                fontWeight: "700",
              }}
            >
              Edit
            </button>
          </Link>
        )}
      </StyledList>
    </>
  );
}
