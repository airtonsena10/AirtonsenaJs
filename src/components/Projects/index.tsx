import Image from "next/image";
import img1 from "../../../public/1.png";
import img2 from "../../../public/2.png";
import img3 from "../../../public/3.png";

import { BsArrowReturnRight } from "react-icons/bs";
import {
  ProjectsStyle,
  CardsPainel,
  Projetos,
  Content,
  Link,
  Imagestyled,
} from "./style";

export default function Projects() {
  return (
    <>
      <ProjectsStyle id="projetos" data-aos="fade-up">
        <h2 className="subTitle">
          <BsArrowReturnRight />
          Projetos
        </h2>
        <div className="projectsContainer">
          <CardsPainel>
            <Projetos>
              <Imagestyled>
                <Image
                  src={img1}
                  alt="image 2"
                  width={300}
                  height={290}
                ></Image>
              </Imagestyled>
              <Content>
                <h2>Github Explorer</h2>
                <p>
                  Projeto Desenvolvido no bootcamp da Rocketseat,que permite
                  navegar pelos repositórios usando Github API
                </p>
                <Link>veja ao vivo</Link>
              </Content>
            </Projetos>
            <Projetos>
              <Imagestyled>
                <Image
                  src={img2}
                  alt="image 2"
                  width={300}
                  height={290}
                ></Image>
              </Imagestyled>
              <Content>
                <h2>projeto 02</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  velit odio quae exercitationem.
                </p>
                <Link>veja ao vivo</Link>
              </Content>
            </Projetos>

            <Projetos>
              <Imagestyled>
                <Image
                  src={img3}
                  alt="image 2"
                  width={300}
                  height={290}
                ></Image>
              </Imagestyled>
              <Content>
                <h2>Este site aqui </h2>
                <p>
                  site Desenvolvido para mostrar um pouco sobre min,meus
                  projetos, habilidades...
                </p>
                <Link>veja ao vivo</Link>
              </Content>
            </Projetos>
            <Projetos>
              <Imagestyled>
                <Image
                  src={img3}
                  alt="image 2"
                  width={300}
                  height={290}
                ></Image>
              </Imagestyled>
              <Content>
                <h2>Este site aqui </h2>
                <p>
                  site Desenvolvido para mostrar um pouco sobre min,meus
                  projetos, habilidades...
                </p>
                <Link>veja ao vivo</Link>
              </Content>
            </Projetos>

            <Projetos>
              <Imagestyled>
                <Image
                  src={img3}
                  alt="image 2"
                  width={300}
                  height={290}
                ></Image>
              </Imagestyled>
              <Content>
                <h2>Este site aqui </h2>
                <p>
                  site Desenvolvido para mostrar um pouco sobre min,meus
                  projetos, habilidades...
                </p>
                <Link>veja ao vivo</Link>
              </Content>
            </Projetos>

            <Projetos>
              <Imagestyled>
                <Image
                  src={img3}
                  alt="image 2"
                  width={300}
                  height={290}
                ></Image>
              </Imagestyled>
              <Content>
                <h2>Este site aqui </h2>
                <p>
                  site Desenvolvido para mostrar um pouco sobre min,meus
                  projetos, habilidades...
                </p>
                <Link>veja ao vivo</Link>
              </Content>
            </Projetos>
          </CardsPainel>
        </div>
      </ProjectsStyle>
    </>
  );
}
