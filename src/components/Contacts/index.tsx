import Lottie from "react-lottie";
import { Container, Emailform } from "./style";

import EmailMessage from "../../../src/assets/images/email.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";

export default function Contacts() {
  return (
    <>
      <Container id="contact" data-aos="fade-up">
        <h2 className="subTitle">
          <BsArrowReturnRight /> Vamos Conversar
        </h2>
        <div className="contactContainer">
          <Emailform>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: EmailMessage,
              }}
            />

            <form action="/" method="POST">
              <input type="hidden" name="_next" value="/" />

              <input
                type="hidden"
                name="_autoresponse"
                value="Recebi sua mensagem, muito obrigado por entrar
            em contato! Responderei o mais rápido possível..."
              ></input>

              <input type="text" name="name" placeholder="Digite seu nome" />

              <input type="text" name="subject" placeholder="Assunto" />

              <textarea name="message" placeholder="Digite uma mensagem..." />

              <button type="submit">Enviar!</button>
            </form>
          </Emailform>
        </div>
        <div className="contactContainer">
          <div>
            <a href="mailto:airtonsena41@gmail.com">
              <AiOutlineMail />
              <strong>
                <h1>E-mail</h1>
              </strong>
              Entre em contato comigo!
              <br />
            </a>
          </div>

          <div>
            <a href="https://github.com/airtonsena10">
              <FaGithub />
              <strong>
                <h1>GitHub</h1>
              </strong>
              Veja meus repositórios no GitHub!
              <br />
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/airtonsena/">
              <FaLinkedin />
              <strong>
                <h1>LinkedIn</h1>
              </strong>
              Acesse meu perfil no LinkedIn
              <br />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
