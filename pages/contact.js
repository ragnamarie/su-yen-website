import { useState } from "react";
import Image from "next/image";
import Contacts from "@/Components/Contacts";

export default function ContactPage() {
  const [isButtonClicked, setButtonClicked] = useState(false);

  function handleButtonClick() {
    // Toggle the value of isButtonClicked
    setButtonClicked((prevValue) => !prevValue);
    console.log("Button clicked");
  }

  return (
    <>
      <div style={{ position: "relative", width: 610, height: 366 }}>
        <div
          onClick={handleButtonClick}
          style={{
            position: "absolute",
            clipPath:
              "polygon(40px 164px, 169px 196px, 453px 40px, 531px 104px, 606px 96px, 590px 131px, 535px 181px, 298px 313px, 120px 279px)",
            width: "100%",
            height: "100%",
            cursor: "pointer", // Optional: Change cursor to indicate clickability
          }}
        />

        {/* Add more clickable elements as needed */}
        <Image src="/motorola.png" width={610} height={366} alt="Contact" />
      </div>
      {isButtonClicked && <Contacts />}
    </>
  );
}
