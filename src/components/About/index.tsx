import { Container } from "./style";
import Image from "next/image";
import Imgabout from "../../assets/images/img.svg";
import cssIcon from "../../assets/images/css-icon.svg";
import htmlIcon from "../../assets/images/html-icon.svg";
import jsIcon from "../../assets/images/js-icon.svg";
import nodeIcon from "../../assets/images/node-icon.svg";
import reactIcon from "../../assets/images/react-icon.svg";
import typescriptIcon from "../../assets/images/typescript-icon.svg";
import { BsArrowReturnRight } from "react-icons/bs";

export default function About() {
  return (
    <>
      <Container id="about" data-aos="fade-up">
        <h2 className="subTitle">
          <BsArrowReturnRight />
          Sobre
        </h2>
        <div className="aboutContainer">
          <div className="descriptionAbout">
            <p className="paragraph" data-aos="fade-right">
              Meu nome Airton Sena varjao dantas, graduando em Sistemas de
              informçâo
            </p>
            <br />
            <p className="paragraph" data-aos="fade-right">
              Atualmente estou como Desenvolvedor trainee na Badico Cloud
              Engineering. Estudando sobre Desenvolvimento Web, com foco em
              front end e futuramente avançar no back-end
            </p>
            <br />
            <p className="paragraph" data-aos="fade-right">
              Tenho como objetivo contribuir o máximo para a equipe e a empresa,
              estou sempre disposto a aprender mais e me adaptar as diversas
              situações as quais somos apresentados diariamente. Busco evoluir
              como profissional e crescer dentro da empresa.
            </p>
            <br />

            <p className="paragraph" data-aos="fade-right">
              <h3>
                Aqui estão algumas tecnologias com as quais tenho trabalhado
                recentemente:
              </h3>
            </p>
            <div className="hard-skills" data-aos="fade-up">
              <div className="hability">
                <Image src={reactIcon} alt="React" width={30} height={30} />
              </div>

              <div className="hability" data-aos="fade-up">
                <Image src={jsIcon} alt="JavaScript" width={30} height={30} />
              </div>

              <div className="hability" data-aos="fade-up">
                <Image src={htmlIcon} alt="Html" width={30} height={30} />
              </div>

              <div className="hability" data-aos="fade-up">
                <Image src={cssIcon} alt="Css" width={30} height={30} />
              </div>
              <div className="hability" data-aos="fade-up">
                <Image src={nodeIcon} alt="Node" width={30} height={30} />
              </div>

              <div className="hability" data-aos="fade-up">
                <Image
                  src={typescriptIcon}
                  alt="Typescript"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          <div className="descriptionImage">
            <Image layout="responsive" src={Imgabout} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
}
