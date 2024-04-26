import AboutForm from "@/Components/AboutForm";
import useSWR from "swr";

export default function EditAboutPage() {
  const { data, isLoading } = useSWR("/api/infos");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return;
  }
  console.log(data);

  const infos = data[0];
  console.log(infos);

  return (
    <>
      <AboutForm infos={infos} />
    </>
  );
}
