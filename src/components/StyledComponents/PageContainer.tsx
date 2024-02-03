import styled from "styled-components"

export const StyledPageContainer = styled.main<{ $maxW?: string }>`
  
  display: flex;
  flex-direction: column;
  z-index: 10;

  margin-top: auto;
  margin-bottom: auto;

  
  max-width: ${(props) => (props.$maxW ? props.$maxW : "auto")};

  width: 90%;
  margin-inline: auto;
  @media (min-width: 768px) {
    width: 100%;
    margin-inline: 10rem;
  }
`
