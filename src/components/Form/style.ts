import styled from "styled-components";

export const Container = styled.form`
  margin: 50px auto;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: max(30vw, 300px);
  min-width: 300px;

  label {
    margin-top: 8px;
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
      background-color: ${(props) => props.theme.colors.text};
    }
  }
`;
