import React from 'react'

import './NotFoundErrorPage.scss'

const NotFoundErrorPage: TNotFoundErrorPage = () => {
	return (
		<div className="NotFoundErrorPage">
			<h1>Error 404</h1>
		</div>
	)
}

export default NotFoundErrorPage

type TNotFoundErrorPage = React.FC
