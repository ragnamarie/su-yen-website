import Image from "next/image";
import Navigation from "../Navigation";
import Link from "next/link";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link href="/">
          <Image
            src="/syhennings_light.png"
            width={339}
            height={138}
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <Navigation></Navigation>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>hennings &copy;</small>
        </p>
        <small>
          <Link href="/login">admin login</Link>
        </small>
      </footer>
    </>
  );
}
