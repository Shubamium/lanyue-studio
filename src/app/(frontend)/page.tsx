import "./home.scss";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";
// import Testimonials from "./Testimonials";
import Welcome from "./home/Welcome";
import Vision from "./home/Vision";
import FeaturedArtist from "./home/FeaturedArtist";
import Invitation from "./home/Invitation";
import { getPayload } from "payload";
import config from "@payload-config";
export default async function Home() {
  // const homeData = await fetchData<any>(`
  // 	*[_type == 'home' && preset == 'active'][0]{
  // 	...
  // 	}
  // `);

  const payload = await getPayload({
    config,
  });

  const homeP = await payload.findGlobal({
    slug: "home",
  });
  console.log(homeP);
  return (
    <main id={"page_home"}>
      <HeroSection hs={homeP.heroSection} />
      <Welcome welcome={homeP.welcome} />
      <Vision vs={homeP.vision} />

      <FeaturedArtist fas={homeP.featuredArtist} />
      <FeaturedProjects fps={homeP.featuredProjects} />

      {/* Hidden For Now as Per Request, WIll be shown whenever they have content */}
      {/* {false && homeData.testimonials && !homeData.testimonials.hidden && (
        <Testimonials ts={homeData.testimonials} />
      )} */}
      {/* <script type="text/javascript"></script> */}
      <Invitation is={homeP.invitation} />
    </main>
  );
}
