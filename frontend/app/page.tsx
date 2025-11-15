import LandingLayout from "@/components/landing/LandingPage";
import Homepage from "@/components/landing/HeroSection"; // your hero content

export default function HomePage() {
  return (
    <div className="overflow-hidden">
    <LandingLayout>
      <Homepage />
    </LandingLayout>
    </div>
  );
}
