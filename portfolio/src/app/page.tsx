import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Socials from "@/components/sections/Socials";
import Appointments from "@/components/sections/Appointments";
import Affiliates from "@/components/sections/Affiliates";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Socials />
      <Appointments />
      <Affiliates />
      <ContactSection />
    </>
  );
}
