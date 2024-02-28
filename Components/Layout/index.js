import Image from "next/image";
import Navigation from "../Navigation";
import Link from "next/link";

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
          />
        </Link>
        <Navigation></Navigation>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>hennings &copy;</small>
        </p>
      </footer>
    </>
  );
}
