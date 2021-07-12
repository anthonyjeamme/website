import React from 'react'

import './Button.scss'

const Button: TButton = ({ children, handleClick }) => {
	return (
		<button
			className="Button"
			onClick={() => {
				handleClick()
			}}
		>
			{children}
		</button>
	)
}

export default Button

type TButton = React.FC<{
	handleClick: () => void
}>
