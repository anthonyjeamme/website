import React from 'react'

import './Button.scss'

const Button: TButton = ({ children, handleClick, theme = 'normal' }) => {
	return (
		<button
			className={`Button theme-${theme}`}
			onClick={() => {
				handleClick()
			}}
		>
			<span>{children}</span>
		</button>
	)
}

export default Button

type TButton = React.FC<{
	handleClick: () => void
	theme?: string
}>
