import Image from "next/image";
import Navigation from "../Navigation";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../Footer";

const StyledFooter = styled.footer`
  display: flex;
  align-items: end;
`;

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link href="/">
          <h1>Su-Yen Hennings</h1>
        </Link>
        <Navigation></Navigation>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
