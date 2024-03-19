import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  position: relative;

  ${(props) =>
    props.isActive &&
    `
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      bottom: -3px;
      left: 0;
    }
  `}
`;

export default function Navigation() {
  const router = useRouter();
  const isPageActive = (href) => router.pathname.startsWith(href);

  return (
    <ul>
      <li>
        <Link href="/">
          <Image src="/hamburger.jpg" width={90} height={64} alt="Hamburger" />
        </Link>
      </li>
    </ul>
  );
}

// OLD MENU
// return (
//   <ul>
//     <li>
//       <StyledLink isActive={isPageActive("/works")} href="/works">
//         WORKS
//       </StyledLink>
//     </li>
//     <li>
//       <StyledLink isActive={isPageActive("/about")} href="/about">
//         ABOUT
//       </StyledLink>
//     </li>
//     <li>
//       <StyledLink isActive={isPageActive("/contact")} href="/contact">
//         CONTACT
//       </StyledLink>
//     </li>
//   </ul>
// );
