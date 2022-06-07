import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { SiPuppeteer, SiTypescript, SiJest } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { Container } from "./styles";

export default function HardSkills() {
  return (
    <>
      <Container data-aos="fade-up">
        <h2 className="subTitle">Habilidades</h2>
        <div className="skillsContainer">
          <div data-aos="fade-up">
            <AiFillHtml5 />
          </div>
          <div data-aos="fade-up">
            <DiCss3 />
          </div>
          <div data-aos="fade-up">
            <DiJavascript1 />
          </div>
          <div data-aos="fade-up">
            <SiTypescript />
          </div>
          <div data-aos="fade-up">
            <FaReact />
          </div>
          <div data-aos="fade-up">
            <FaNodeJs />
          </div>
          <div data-aos="fade-up">
            <GrDocker />
          </div>
          <div data-aos="fade-up">
            <SiJest />
          </div>
          <div data-aos="fade-up">
            <SiPuppeteer />
          </div>
          <div data-aos="fade-up">
            <FaSass />
          </div>
        </div>
      </Container>
    </>
  );
}
