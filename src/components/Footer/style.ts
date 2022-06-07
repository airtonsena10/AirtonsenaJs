import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

export const StyledMadeWith = styled.div`
  p {
    color: ${(props) => props.theme.colors.text};
    font-family: monospace;
    font-size: 16px;
    line-height: 1;
  }
`;
