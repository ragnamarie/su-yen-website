import { ImageUploader } from "@/Components/ImageUploader";
import { ImageList } from "@/Components/ImageList";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function WorksPage() {
  const { data: session, status } = useSession();
  const { data: images = [], isLoading, mutate } = useSWR("/api/images");
  const router = useRouter();
  const { id } = router.query;

  console.log(images);

  if (isLoading) {
    return "loading...";
  }

  return (
    <>
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        {session && <ImageUploader />}
        <ImageList images={images} />
      </div>
    </>
  );
}
