import { ImageUploader } from "@/Components/ImageUploader";
import { ImageList } from "@/Components/ImageList";
import useSWR from "swr";

export default function WorksPage() {
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
        <ImageUploader />
        <ImageList images={images} />
      </div>
    </>
  );
}
