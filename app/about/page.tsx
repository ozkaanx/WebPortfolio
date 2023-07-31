import Container from "@/components/Ui/Container";
import GithubCard from "@/components/GithubCard";
import SocialWrap from "@/components/Social";

import "./style.scss";

const About = () => {
  return (
    <Container
      maxWidth="700px"
      style={{
        marginTop: "70px",
      }}
    >
      <div className="about-wrapper">
        <div className="about-wrapper__text">
          <h1 className="about-wrapper__text--title">
            Hi, I&apos;m <span>Ozkan</span>
          </h1>
          <p className="about-wrapper__text--subtitle">
            I am a front-end developer at LC Waikiki. I work to enable users to
            interact in the digital world and improve their experience
          </p>
          <p className="about-wrapper__text--subtitle">
            My commitment to technology led me down this path, so I turned this
            addiction into a profession.Front-end development covers an
            important area where users interact with websites and applications.
            Improving the user experience and providing aesthetic and
            user-friendly solutions that meet the needs of users is a big
            priority for me.
          </p>

          <p className="about-wrapper__text--subtitle">
            I continue to learn and develop new things constantly in order to
            provide meaningful and original experiences to users. For me,
            front-end development goes beyond being a hobby and a profession...
          </p>
        </div>
        <div className="about-wrapper__social">
          <GithubCard />
          <SocialWrap />
        </div>
      </div>
    </Container>
  );
};

export default About;
