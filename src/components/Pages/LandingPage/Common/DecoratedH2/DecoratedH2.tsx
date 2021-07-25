import React from 'react'

import './DecoratedH2.scss'

const DecoratedH2 = ({ children }) => {
	return (
		<h2 className="DecoratedH2">
			<span>{children}</span>
		</h2>
	)
}

export default DecoratedH2
