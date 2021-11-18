import React from 'react'
import DecoratedH2 from '../Common/DecoratedH2/DecoratedH2'

import './FunSection.scss'

const FunSection = () => {
	return (
		<div className="FunSection">
			<DecoratedH2>Mes outils de prédilection</DecoratedH2>

			<div>VSCode, Illustrator, Slack, Clickup</div>

			<DecoratedH2>En vrac !</DecoratedH2>

			<div>
				<i className="mdi mdi-book-open-page-variant" />{' '}
				<a
					href="https://www.goodreads.com/user/show/138530169-anthony-jeamme"
					target="_blank"
					rel="noreferrer noopener"
				>
					Ma bibliothèque
				</a>
			</div>
		</div>
	)
}

export default FunSection
