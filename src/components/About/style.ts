import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  text-align: justify;
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 1rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    svg{
    width: 30px;
    }
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;


  }


  .subTitle {
    color: white;

    margin: 10px 0 40px;
    width: 50%;


  }

  .aboutContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    .descriptionAbout {
      margin-top: 20px;
      flex: 1.5;
      min-width: 100px;

      a {
        text-decoration: underline;
        color: ${(props) => props.theme.colors.text};
      }
    }

    .descriptionImage {
      margin-top: 4px;
      flex: 1;
      border-radius: 5px;
      min-width: 100px;
      hide-if-missing: true;


    }

`;
