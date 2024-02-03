import styled from "styled-components"

export const StyledHeading3 = styled.h3<{ $color?: string; $mb?: string }>`
  color: ${(props) => (props.$color ? props.$color : "white")};

  font-size: 1.875rem;

  margin-bottom: ${(props) => (props.$mb ? props.$mb : "1rem")};
`
