import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Link href="/contact">
        <Image src="/motorola.png" width={800} height={482} alt="Contact" />
      </Link>
    </>
  );
}
