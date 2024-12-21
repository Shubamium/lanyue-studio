import "./home.scss";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div id={"page_home"}>
      <HeroSection />
      <section id="welcome">
        <div id="intro-text">
          <h2>
            WELCOME, <span>HONORED PATRONS.</span>
          </h2>
        </div>
        <div id="about">
          <div className="artside art-l">
            <img src="/gfx/placeholder.png" alt="" />
            <div className="clip ctr"></div>
            <div className="clip cbr"></div>
          </div>
          <article className="center">
            <div className="top-art">
              <img src="/gfx/placeholder2.png" alt="" />
              <img src="/gfx/placeholder2.png" alt="" />
            </div>
            <div className="about-text">
              <h3 className="sh">ABOUT LAN'YUE STUDIO</h3>
              <div className="text">
                <div className="left">
                  <p>
                    <strong>Lan'Yue Studio</strong> is inspired by the rare and
                    unique blue moon. Our goal is to curate the{" "}
                    <strong>one-of-a-kind beauty </strong>
                    you deserve for any project you can imagine, from
                    illustrations to Live2D models and graphic design.
                  </p>
                </div>
                <div className="right">
                  <p>
                    Lan’Yue is committed to satisfying every client with the
                    best that the art world has to offer. Our artists are
                    <strong>masters of their craft</strong> and you will be well
                    taken care of from start to finish.
                  </p>
                  <p>
                    We aim to set a <strong>higher quality</strong> and service
                    standard in this industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </article>
          <div className="artside art-r">
            <img src="/gfx/placeholder.png" alt="" />
            <div className="clip ctl"></div>
            <div className="clip cbl"></div>
          </div>
        </div>
      </section>

      <section id="vision">
        <article>
          <div className="left">
            <img src="/gfx/icon-white.png" alt="" className="icon" />
            <h2 className="h">
              LET US MAKE YOUR <strong>DREAMS COME TRUE!</strong>
            </h2>
            <p className="p">
              Our vision is to create <strong>consistency</strong> that clients
              can expect across the board and eliminate any stress that comes
              with the business side of art.
            </p>
            <button className="btn btn-main outline btn-commision">
              BUTTON TEXT HERE
            </button>
          </div>
        </article>
      </section>

      <section id="featured-artist">
        <figure>
          <div className="art-part">
            <div className="left">
              <img src="/gfx/placeholder.png" alt="" className="" />
            </div>
            <div className="right"></div>
          </div>
        </figure>
        <article>
          <div className="r"></div>
          <div className="content">
            <p className="sh">FEATURED ARTIST</p>
            <h2 className="h">SOME TITLE HERE</h2>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </article>
      </section>
      <FeaturedProjects />
      <Testimonials />

      <section id="invitation">
        <div className="confine">
          <article>
            <h2 className="h">
              SECONDARY CALL TO ACTION <span>OF SOME CONTACT TEXT</span>
            </h2>
            <button className="btn btn-main"> CONTACT TEXT</button>
          </article>
          <figure>
            <img src="/gfx/home-glasses.png" alt="" className="home-glasses" />
            <img src="/de/blue-splat1.png" alt="" className="de-splat" />
          </figure>
        </div>
      </section>
    </div>
  );
}
