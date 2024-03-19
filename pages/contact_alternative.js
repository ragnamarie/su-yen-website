import Link from "next/link";
import Image from "next/image";

export default function ContactPageAlternative() {
  return (
    <div style={{ position: "relative", width: 610, height: 432 }}>
      <Link href="/link1">
        <div
          style={{
            position: "absolute",
            clipPath:
              "polygon(404px 17px, 505px 84px, 546px 78px, 557px 99px, 557px 99px, 248px 370px, 134px 411px, 34px 305px, 80px 283px, 16px 209px, 142px 225px)",
            width: "100%",
            height: "100%",
            cursor: "pointer", // Optional: Change cursor to indicate clickability
          }}
        />
      </Link>
      {/* Add more clickable elements as needed */}
      <Image src="/motorola2.png" width={610} height={432} alt="Contact" />
    </div>
  );
}
