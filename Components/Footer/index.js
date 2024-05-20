import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  display: flex;
  align-items: end;
`;

export default function Footer() {
  // This is in order to set window width in order to then determine which image and div size will be rendered
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Set initial window width
    setWindowWidth(window.innerWidth);
    // Event listener to update width on resize
    window.addEventListener("resize", handleResize);
    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth < 700 ? (
        <StyledFooter>
          <p>
            <small>hennings &copy;</small>
          </p>
          <p>
            <Link href="/login">💱 💱 💱</Link>
          </p>
        </StyledFooter>
      ) : (
        <StyledFooter>
          <p>
            <small>hennings &copy;</small>
          </p>
          <Image
            style={{
              marginLeft: "200px",
            }}
            src="/trevor.png"
            width={300}
            height={300}
            alt="Trevor"
          />
          <p>
            <Link href="/login">💱 💱 💱</Link>
          </p>
        </StyledFooter>
      )}
    </>
  );
}
