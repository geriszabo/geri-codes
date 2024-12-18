import { EducationAndWork } from "@/components/EducationAndWork/EducationAndWork";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { TechStack } from "@/components/HeroSection/TechStack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <EducationAndWork/>
    </>
  );
}
