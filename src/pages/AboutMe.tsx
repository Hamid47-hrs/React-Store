import Container from "../components/Container";
import AboutMeImg from "../assets/images.png";
import GradientWaves from "../components/ui/GradientWaves";
function AboutMe() {
  return (
    <Container>
      <GradientWaves />
      <h1 className="font-extrabold text-4xl text-center my-20 drop-shadow-lg">
        About Me
      </h1>
      <div className="flex justify-between items-center mx-10 gap-10">
        <div>
          <h2 className="font-extrabold text-8xl text center mb-15">
            So, Who am I?
          </h2>
          <p className="font-semibold text-xl leading-loose text-justify">
            My name is Hamid, and I’m a dedicated Full-Stack developer with a
            strong focus on React, Node.js, and modern web technologies.
            <br />
            I specialize in building scalable, responsive, and efficient web
            applications from front to back. With hands-on experience in both
            client-side and server-side development, I enjoy solving complex
            problems and turning ideas into clean, functional code.
            <br />
            Over the past few years, I’ve worked on various real-world projects,
            gaining practical experience in JavaScript, TypeScript, RESTful
            APIs, MongoDB, and Express.js. I’m deeply interested in clean code
            principles, performance optimization, and building intuitive user
            experiences that meet real user needs.
            <br />
            In addition to my technical work, I bring five years of leadership
            experience as a school deputy, which has strengthened my
            communication, project coordination, and problem-solving skills.
            This background also fuels my long-term interest in Educational
            Technology (EdTech)—an area where I hope to apply my development
            skills to create impactful tools for learning.
            <br />
            I’m currently focused on expanding my knowledge in Educational
            Technology and Artificial Intelligence practices, while continuing
            to grow as a professional developer.
          </p>
        </div>
        <div>
          <img src={AboutMeImg} alt="about me" className="w-520" />
        </div>
      </div>
    </Container>
  );
}

export default AboutMe;
