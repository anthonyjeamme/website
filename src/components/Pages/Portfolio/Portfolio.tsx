import React from 'react'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import Container from '~Common/Display/Container/Container'

import './Portfolio.scss'
import { Link } from 'gatsby'

const Portfolio = () => {
	return (
		<div className="Portfolio">
			<LayoutHeader />

			<Container size="large">
				<h1>Portfolio</h1>

				<div className="items">
					<PortfolioItem
						data={{
							title: 'coq-trotteur',
							link: 'https://coq-trotteur.com/fr/paysaptluberon'
						}}
					/>
					<PortfolioItem
						data={{
							title: 'indika-solutions',
							link: 'https://www.indikasolutions.com/'
						}}
					/>
					<PortfolioItem
						data={{ title: 'tressalia', link: 'https://tressalia.fr/' }}
					/>
					<PortfolioItem
						data={{
							title: 'rocket-useform',
							link: 'https://github.com/anthonyjeamme/rocket-useform'
						}}
					/>
				</div>
			</Container>
		</div>
	)
}

export default Portfolio

const PortfolioItem = ({ data }) => (
	<div className="PortfolioItem">
		<div className="text">
			<span className="title">{data.title}</span>
			<span>
				<a
					href={data.link}
					target="_blank"
					className="visit"
					rel="noopener noreferrer"
				>
					Visiter <i className="mdi mdi-link-variant" />
				</a>
			</span>
		</div>
	</div>
)

//https://tressalia.fr/
