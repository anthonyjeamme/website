import React from 'react'

import './TechnologySection.scss'

const TechnologySection = () => {
	return (
		<section className="TechnologySection">
			<h2>Technologies</h2>

			<p></p>

			<div className="technologies">
				<h3>Frameworks</h3>

				<TechnologyItem>Gatsby</TechnologyItem>
				<TechnologyItem>NextJS</TechnologyItem>

				<h3>Style</h3>

				<TechnologyItem>SCSS</TechnologyItem>
				<TechnologyItem>Styled components</TechnologyItem>

				<h4>Tests</h4>
				<TechnologyItem>StoryBook</TechnologyItem>
				<TechnologyItem>Jest</TechnologyItem>

				<h4>Organisation</h4>

				<TechnologyItem>
					Configuration : Webpack / eslint / prettier
				</TechnologyItem>
				<TechnologyItem>CI / CD</TechnologyItem>
				<TechnologyItem>Git</TechnologyItem>

				<h4>Services</h4>

				<TechnologyItem>Netlify</TechnologyItem>
				<TechnologyItem>Sendinblue</TechnologyItem>
				<TechnologyItem>Cloudinary</TechnologyItem>
				<TechnologyItem>Lambda functions</TechnologyItem>

				<h3>Backend</h3>

				<TechnologyItem>NodeJS</TechnologyItem>
				<TechnologyItem>Express</TechnologyItem>

				<h3>Base de données</h3>

				<TechnologyItem>Mongodb</TechnologyItem>
				<TechnologyItem>Firestore</TechnologyItem>
				<TechnologyItem>GraphQL (apollo)</TechnologyItem>

				<h3>Divers</h3>

				<TechnologyItem>Automatisation</TechnologyItem>
				<TechnologyItem>Développement d'extension VSCode</TechnologyItem>
				<TechnologyItem>Développement de librairies</TechnologyItem>
				<TechnologyItem>Webscrapping (pupeteer)</TechnologyItem>
			</div>
		</section>
	)
}

const TechnologyItem = ({ children }) => (
	<div className="TechnologyItem">{children}</div>
)

export default TechnologySection
