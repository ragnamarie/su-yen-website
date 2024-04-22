import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <>
      <h2>the changes have been applied!</h2>
      <h3>
        <Link href={"/works"}>← back to WORKS</Link>
      </h3>
    </>
  );
}
