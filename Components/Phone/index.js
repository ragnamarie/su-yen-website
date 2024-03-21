import { useState, useEffect } from "react";
import Image from "next/image";

export default function Phone() {
  // This is in order to set window width in order to then determine which image and div size will be rendered
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Set initial window width
    setWindowWidth(window.innerWidth);
    // Event listener to update width on resize
    window.addEventListener("resize", handleResize);
    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth < 700 ? (
        <div style={{ position: "relative", width: 305, height: 183 }}>
          <a
            href="/contact"
            style={{
              position: "absolute",
              clipPath:
                "polygon(227px 22px, 265px 52px, 304px 50px, 269px 90px, 148px 158px, 60px 140px, 17px 85px, 85px 96px)",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
          {/* Add more clickable elements as needed */}
          <Image src="/motorola.png" width={305} height={183} alt="Contact" />
        </div>
      ) : (
        <div style={{ position: "relative", width: 610, height: 366 }}>
          <a
            href="/contact"
            style={{
              position: "absolute",
              clipPath:
                "polygon(40px 164px, 169px 196px, 453px 40px, 531px 104px, 606px 96px, 590px 131px, 535px 181px, 298px 313px, 120px 279px)",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />

          {/* Add more clickable elements as needed */}
          <Image src="/motorola.png" width={610} height={366} alt="Contact" />
        </div>
      )}
    </>
  );
}
