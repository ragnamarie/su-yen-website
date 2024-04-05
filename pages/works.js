import { ImageUploader } from "@/Components/ImageUploader";
import { ImageList } from "@/Components/ImageList";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function WorksPage() {
  const { data: session, status } = useSession();
  const { data: images = [], isLoading } = useSWR("/api/images");

  if (isLoading) {
    return "loading...";
  }

  return (
    <>
      <h2>check out my amazing work</h2>
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        {session && <ImageUploader />}
        <ImageList images={images} />
      </div>
    </>
  );
}
