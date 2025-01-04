import "./home.scss";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";
import Welcome from "./home/Welcome";
import Vision from "./home/Vision";
import FeaturedArtist from "./home/FeaturedArtist";
import Invitation from "./home/Invitation";
import Chatbox from "./components/chatbox/Chatbox";
import { fetchData } from "./db/sanity";

export default async function Home() {
  const homeData = await fetchData<any>(`
		*[_type == 'home' && preset == 'active'][0]{
		...
		}
	`);

  console.log(homeData);
  return (
    <main id={"page_home"}>
      <HeroSection hs={homeData.hero_section} />
      <Welcome welcome={homeData.welcome} />
      <Vision vs={homeData.vision} />

      <FeaturedArtist fas={homeData.featured_artist} />
      <FeaturedProjects fps={homeData.featured_projects} />

      {/* Hidden For Now as Per Request, WIll be shown whenever they have content */}
      {homeData.testimonials && !homeData.testimonials.hidden && (
        <Testimonials ts={homeData.testimonials} />
      )}
      {/* <script type="text/javascript"></script> */}
      <Invitation is={homeData.invitation} />
    </main>
  );
}
