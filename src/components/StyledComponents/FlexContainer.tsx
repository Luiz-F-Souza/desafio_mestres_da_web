import styled from "styled-components"

export const StyledFlexContainer = styled.div<{
  $gap?: string
  $justify?: string
  $aligin?: string
  $mb?: string
}>`
  display: flex;
  gap: ${(props) => (props.$gap ? props.$gap : "1rem")};
  justify-content: ${(props) =>
    props.$justify ? props.$justify : "space-between"};

  margin-bottom: ${(props) => (props.$mb ? props.$mb : "0")};

  align-items: ${(props) => (props.$aligin ? props.$aligin : "center")};

  flex-wrap: wrap;
`
