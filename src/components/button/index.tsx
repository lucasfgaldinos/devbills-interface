import { type ComponentProps, forwardRef } from "react"
import { Container } from "./styles"

type ButtonProps = ComponentProps<"button"> & {
	variant?: "default" | "outline"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, variant = "default", ...props }, ref) => (
		<Container ref={ref} {...props} $variant={variant}>
			{children}
		</Container>
	)
)
