import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Socials from "@/components/sections/Socials";
import Appointments from "@/components/sections/Appointments";
import Affiliates from "@/components/sections/Affiliates";
import RoomRental from "@/components/sections/RoomRental";
import ContactSection from "@/components/sections/ContactSection";
import Immigration from "@/components/sections/Immigration";
import Study from "@/components/sections/Study";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Socials />
      <Appointments />
      {/* <Affiliates /> */}
      <RoomRental />
      {/* <Immigration /> */}
      {/* <Study /> */}
      <ContactSection />
    </>
  );
}
