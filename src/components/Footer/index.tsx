import { Container, StyledMadeWith } from "./style";
import Image from "next/image";
import logo from "../../assets/images/next.svg";
export function Footer() {
  return (
    <Container>
      <StyledMadeWith>
        <p>Made with</p>
        <a rel="noreferrer" target="_blank" href="https://nextjs.org/">
          <Image src={logo} width={100} height={100} />
        </a>
      </StyledMadeWith>
    </Container>
  );
}
