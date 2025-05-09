import Image from "next/image";
import About from "@/components/sections/About";
import Affiliates from "@/components/sections/Affiliates";
import Appointments from "@/components/sections/Appointments";

export default function HomePage() {
  return (
    <>
      <About />
      <Appointments />
      <Affiliates />
    </>
  );
}
