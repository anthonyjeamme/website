import React from 'react'

import './TechnologySection.scss'

const TechnologySection = () => {
	return (
		<section className="TechnologySection">
			<h2>Technologies</h2>

			<p></p>

			<div className="technologies">
				<TechnologyItem>React</TechnologyItem>
				<TechnologyItem>Gatsby</TechnologyItem>
				<TechnologyItem>NextJS</TechnologyItem>
				<TechnologyItem>SCSS</TechnologyItem>
				<TechnologyItem>Styled components</TechnologyItem>
				<TechnologyItem>Développement d'extension VSCode</TechnologyItem>
				<TechnologyItem>NodeJS / Express</TechnologyItem>
				<TechnologyItem>Automatisation</TechnologyItem>
				<TechnologyItem>Services : Sendinblue, Cloudinary</TechnologyItem>
				<TechnologyItem>Netlify</TechnologyItem>
				<TechnologyItem>StoryBook</TechnologyItem>
				<TechnologyItem>Jest</TechnologyItem>
				<TechnologyItem>Git</TechnologyItem>
				<TechnologyItem>React</TechnologyItem>
				<TechnologyItem>
					Configuration : Webpack / eslint / prettier
				</TechnologyItem>
				<TechnologyItem>CI / CD</TechnologyItem>
				<TechnologyItem>Développement de librairies</TechnologyItem>
				<TechnologyItem>Webscrapping (pupeteer)</TechnologyItem>
				<TechnologyItem>GraphQL (apollo)</TechnologyItem>
			</div>
		</section>
	)
}

const TechnologyItem = ({ children }) => (
	<div className="TechnologyItem">{children}</div>
)

export default TechnologySection
