import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/react";

const StyledAboutText = styled.div`
  white-space: pre-line; /* Preserve line breaks */
  margin-right: 20px;
  padding-bottom: 20px;
  width: 400px;
  display: block;

  @media screen and (max-width: 700px) {
    width: 200px;
  }
`;

export default function About({ about }) {
  const { data: session, status } = useSession();
  return (
    <>
      <StyledAboutText>{about}</StyledAboutText>
      {session && (
        <Link href="/editabout">
          <button
            style={{
              fontWeight: "700",
            }}
          >
            Edit
          </button>
        </Link>
      )}
    </>
  );
}
