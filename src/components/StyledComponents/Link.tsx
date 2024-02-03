import Link from "next/link"
import styled from "styled-components"

export const StyledLink = styled(Link)<{
  $color?: string
  $mb?: string
  $fontSize?: string
}>`
  color: ${(props) => (props.$color ? props.$color : "#84848D")};

  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1rem")};

  margin-bottom: ${(props) => (props.$mb ? props.$mb : "1rem")};

  border-bottom: 1px solid rgba(255, 0, 0, 1);

  

  transition: color 100ms linear;
  &:hover {
    color: white;
  }
`
