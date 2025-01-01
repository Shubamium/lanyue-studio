import "./home.scss";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";
import Welcome from "./home/Welcome";
import Vision from "./home/Vision";
import FeaturedArtist from "./home/FeaturedArtist";
import Invitation from "./home/Invitation";

export default function Home() {
  return (
    <main id={"page_home"}>
      <HeroSection />
      <Welcome />
      <Vision />

      <FeaturedArtist />
      <FeaturedProjects />

      {/* Hidden For Now as Per Request, WIll be shown whenever they have content */}
      {/* <Testimonials /> */}

      <Invitation />
    </main>
  );
}
