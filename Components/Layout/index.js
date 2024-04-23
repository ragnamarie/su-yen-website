import Image from "next/image";
import Navigation from "../Navigation";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link href="/">
          <h1>su-yen hennings</h1>
        </Link>
        <Navigation></Navigation>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>hennings &copy;</small>
        </p>
        <p>
          <Link href="/login">💱 💱 💱</Link>
        </p>
      </footer>
    </>
  );
}
