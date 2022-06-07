import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  max-width: 1100px;
  justify-content: space-between;

  margin: 50px auto;
  padding: 0 1rem;

  label {
    margin-top: 8px;
  }

  .subTitle {
    color: white;

    margin: 10px 0 40px;
    width: 50%;
  }

  input,
  textarea {
    padding: 10px;
    margin-top: 2px;
  }

  button {
    margin-top: 8px;
    width: 50px;
    padding: 10px 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.card};
    }
  }

  .contactContainer {
    margin: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    svg {
      font-size: 50px;
      margin-top: 20px;
    }

    a {
      color: ${(props) => props.theme.colors.text};
    }

    a:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 500px) {
    .contactContainer {
      justify-content: flex-start;
    }
  }
`;
export const Emailform = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;


  h2 {

    margin: 0 auto;
  }

  form {
    margin: 1rem auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    input {
      width: 80%;
      margin: .4rem auto;
      padding: .5rem 1rem;
      text-align: start;

      font-size: 1rem;
      background-color:${(props) => props.theme.colors.inputs};
      color::${(props) => props.theme.colors.text};

      border-radius: 15px;


    }

    textarea {
      width: 80%;
      height: 100px;
      margin: 1rem auto;
      padding: 1rem;
      text-align: start;

      font-size: 1rem;
      background-color:${(props) => props.theme.colors.text};
      border-radius: 10px;


    }

    button {
      width: 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      justify-content: space-evenly;
      padding: .5rem 2.5rem;
      background-color:#333;
      color:  ${(props) => props.theme.colors.text};
      border-radius: 10px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      margin: 1rem auto;
      cursor: pointer;



    }


  }
`;
