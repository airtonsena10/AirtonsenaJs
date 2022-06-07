import styled from "styled-components";

export const ProjectsStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 1rem;

  .subTitle {
    color: white;

    margin: 10px 0 40px;
    width: 50%;
  }
  .projectsContainer {
    display: flex;

    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const CardsPainel = styled.div`
  position: relative;
  width: 1200px;
  padding: 5px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Projetos = styled.div`
  margin-top: 0.3rem;
  margin-bottom: 3rem;
  margin-right: 2rem;
  width: 300px;
  overflow: hidden;
  height: 290px;
  background: ${(props) => props.theme.colors.cardBack};
  border-radius: 20px;
`;

export const Content = styled.div`
  border-radius: 20px;
  align-items: center;
position: relative;: ;
  color: #fff;
  text-align: center;
  margin: 20px;
`;

export const Imagestyled = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition-delay: 0.9s;
  opacity: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  :hover {
    transform: scale(1);
    transition: 0.4s;
    top: 20px;
    left: calc(50% - 40px);
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
export const Link = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 10px;

  align-items: center;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.637);
  padding: 6px 4px;

  :hover {
    background: ${(props) => props.theme.colors.background};
  }
`;
