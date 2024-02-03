import styled from "styled-components"

export const StyledText = styled.p<{
  $color?: string
  $mb?: string
  $fontSize?: string
  $textAlign?: string
}>`
  color: ${(props) => (props.$color ? props.$color : "#84848D")};

  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1rem")};

  margin-bottom: ${(props) => (props.$mb ? props.$mb : "1rem")};

  text-align: ${(props) => (props.$textAlign ? props.$textAlign : "left")};
`
