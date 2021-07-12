import React from 'react'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import './NotFoundErrorPage.scss'

const NotFoundErrorPage: TNotFoundErrorPage = () => {
	return (
		<>
			<LayoutHeader />
			<div className="NotFoundErrorPage">
				<div>
					<h1>
						Cette page n'existe pas <i className="mdi mdi-heart-broken" />
					</h1>

					<p>
						Vous cherchez un développeur ? <a href="/">Contactez-moi</a> !
					</p>
					<p>Cela pourrait vous intéresser :</p>

					<div className="articles">
						<div className="article" />
						<div className="article" />
						<div className="article" />
					</div>
				</div>
			</div>
		</>
	)
}

export default NotFoundErrorPage

type TNotFoundErrorPage = React.FC
