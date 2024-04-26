import Link from "next/link";
import useSWR from "swr";
import styled from "styled-components";
import About from "@/Components/About";

export default function AboutPage() {
  const { data, isLoading } = useSWR("/api/infos");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return;
  }
  console.log(data);

  const about = data[0].about;
  console.log(about);

  return <About about={about} />;
}
