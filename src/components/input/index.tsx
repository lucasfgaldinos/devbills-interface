import { type ComponentProps, forwardRef } from "react"
import { Container } from "./styles"

type InputProps = ComponentProps<"input"> & {
	label?: string
	variant?: "black" | "dark"
	error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, variant = "black", error, ...props }, ref) => (
		<Container $variant={variant}>
			{label && <label htmlFor="input">{label}</label>}
			<input ref={ref} id="input" {...props} />
			{error && <span>{error}</span>}
		</Container>
	)
)
