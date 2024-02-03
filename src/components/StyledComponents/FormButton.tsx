import Link from "next/link"
import styled from "styled-components"

export const StyledFormButton = styled.button<{
  $color?: string
  $mb?: string
  $fontSize?: string
}>`
  color: ${(props) => (props.$color ? props.$color : "white")};

  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1.875rem")};

  margin-bottom: ${(props) => (props.$mb ? props.$mb : "1rem")};

  background-color: #FF0000;
  border-radius: 9999px;
  height: 65px;

  transition: background-color 100ms linear;
  &:hover {
    background-color: #FF000090;
  }

  &:disabled{
    background-color: gray;
  }
`
