import React from 'react'

import './Button.scss'

const Button: TButton = ({
	children,
	handleClick = null,
	theme = 'normal'
}) => {
	return (
		<button
			className={`Button theme-${theme}`}
			onClick={() => {
				if (handleClick) handleClick()
			}}
		>
			<span>{children}</span>
		</button>
	)
}

export default Button

type TButton = React.FC<{
	handleClick?: () => void
	theme?: string
}>
