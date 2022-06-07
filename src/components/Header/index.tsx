import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import { BiMoon } from "react-icons/bi";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuMotion } from "react-icons/cg";

import { Container } from "./style";

interface HeaderProps {
  eventFunction: MouseEventHandler;
}

export function Header({ eventFunction }: HeaderProps) {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  return (
    <Container>
      <div>
        <h2>&lt;Airton Sena/&gt;</h2>
      </div>

      <nav className={active ? "active" : ""}>
        <button className="btnMenu" onClick={handleActive}>
          {!active ? <GiHamburgerMenu /> : <CgMenuMotion />}
        </button>

        <ul>
          <Link href="#home">
            <li>Home</li>
          </Link>
          <Link href="#projetos">
            <li>Portfólio</li>
          </Link>
          <Link href="#about">
            <li>Sobre</li>
          </Link>
          <Link href="#contact">
            <li>Contato</li>
          </Link>
          <li className="theme" onClick={eventFunction}>
            <BiMoon />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
