import { MagnifyingGlass } from "@phosphor-icons/react"
import { type ComponentProps, forwardRef } from "react"
import { Container } from "./styles"

type ButtonIconProps = ComponentProps<"button">

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
	({ ...props }, ref) => (
		<Container {...props} ref={ref}>
			<MagnifyingGlass />
		</Container>
	)
)
