import styled from "styled-components"

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  background-color: white;
  color: ${(props) => (props.$hasError ? "red" : "gray")};

  border: ${(props) => (props.$hasError ? "2px solid red" : "none")};
  border-radius: 9999px;

  width: 100%;
  max-width: 25rem;

  height: 75px;

  padding-inline: 1.5rem;

  font-size: 1.5rem;
  font-weight: bold;

  margin-bottom: 1rem;

`
