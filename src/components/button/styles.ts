import { styled } from "styled-components"
import { theme } from "../../styles/theme"

type ContainerProps = {
	$variant: "default" | "outline"
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  border-radius: 0.25rem;
  background-color: ${(props) => (props.$variant === "default" ? theme.colors.primary : "transparent")};
  color: ${(props) => (props.$variant === "default" ? theme.colors.black : theme.colors.primary)};
  border: ${(props) => (props.$variant === "default" ? 0 : `1px solid ${theme.colors.primary}`)};
  padding: 0 0.75rem;
  transition: all 100ms;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
  
  &:active {
    opacity: 0.5;
  }
`
