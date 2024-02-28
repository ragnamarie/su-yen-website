import Image from "next/image";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Image
          src="/syhennings_light.png"
          width={339}
          height={138}
          alt="Logo"
        />
      </header>
      <main>
        {children} <Navigation></Navigation>
      </main>
      <footer>
        <p>
          <small>hennings &copy;</small>
        </p>
      </footer>
    </>
  );
}
