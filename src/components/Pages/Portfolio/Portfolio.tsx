import React from 'react'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import Container from '~Common/Display/Container/Container'

import './Portfolio.scss'

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
							link: 'https://coq-trotteur.com/fr/paysaptluberon',
							description: 'Plateforme de E-Commerce',
							backgroundColor: '#f4f5fd'
						}}
					/>

					<PortfolioItem
						data={{
							title: 'coq-trotteur - sites',
							description: 'Moteur de création de sites',
							backgroundColor: '#f4f5fd'
						}}
					/>

					<PortfolioItem
						data={{
							title: 'indika-solutions (en cours)',
							link: 'https://www.indikasolutions.com/',
							description: 'Site web • Courtier en assurances',
							image:
								'https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1626281020/site%20perso/portfolio/indika.png',
							textColor: 'white'
						}}
					/>
					<PortfolioItem
						data={{
							textColor: 'white',
							title: 'tressalia',
							link: 'https://tressalia.fr/',
							description: 'Site web • Bar à tresses',
							image:
								'https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1626281377/site%20perso/portfolio/tressalia.png'
						}}
					/>
					<PortfolioItem
						data={{
							image:
								'https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1626280748/site%20perso/portfolio/rocket-useform.svg',
							title: 'rocket-useform',
							description: `Librairie React`,
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
	<div
		className="PortfolioItem"
		style={{
			backgroundColor: data.backgroundColor || '',
			backgroundImage: data.image ? `url(${data.image})` : '',
			color: data.textColor || ''
		}}
	>
		<div className="text">
			<header>
				<span className="title">{data.title}</span>
				<div className="description">{data.description}</div>
			</header>
			<span>
				{data.link && (
					<a
						href={data.link}
						target="_blank"
						className="visit"
						rel="noopener noreferrer"
					>
						Visiter <i className="mdi mdi-link-variant" />
					</a>
				)}
			</span>
		</div>
	</div>
)

//https://tressalia.fr/
