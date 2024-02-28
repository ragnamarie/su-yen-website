import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();

  return (
    <ul>
      <li>
        <Link href="/works">WORKS</Link>
      </li>
      <li>
        <Link href="/about">ABOUT</Link>
      </li>
      <li>
        <Link href="/contact">CONTACT</Link>
      </li>
    </ul>
  );
}
