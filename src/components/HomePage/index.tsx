import perfilImg from "../../assets/images/img.json";

import Lottie from "react-lottie";
import Typed from "typed.js";
import { useEffect } from "react";
import { Container } from "./style";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    const options = {
      strings: [
        "&lt;Olá Mundo!/&gt;",
        "&lt;Me chamo Airton Sena/&gt;",
        "Sou desenvolvedor Front-End",
        "Seja bem vindo!",
      ],
      typeSpeed: 71,
      backSpeed: 50,
    };

    new Typed("#title", options);
  }, []);
  return (
    <Container id="home">
      <span className="profileImage">
        <Lottie
          options={{
            loop: true,
            autoplay: true,

            animationData: perfilImg,
          }}
        />
      </span>
      <div className="who" data-aos="fade-up">
        <h1 id="title"></h1>
        <br />
        <p className="paragraph">Desenvolvedor Web</p>
        <br />
        <p className="paragraph">
          Saudações. Está é minha pagina sou amante da tecnologia, estou sempre
          em busca de conhecimento e novas experiências.
        </p>
        <Link href="#contact">
          <li>Entra em contato</li>
        </Link>
      </div>
    </Container>
  );
}
