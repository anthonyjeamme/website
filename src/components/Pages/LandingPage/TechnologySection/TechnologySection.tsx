import React from 'react'

import Container from '../../../Common/Display/Container/Container'

import './TechnologySection.scss'

const TechnologySection = () => {
	return (
		<section className="TechnologySection">
			<Container size="large">
				<h2>Stack</h2>
				{/* <img src="/images/icons/netlify.png" style={{ height: 100 }} />
				<img src="/images/icons/gatsby.png" style={{ height: 100 }} />
				<img src="/images/icons/git.png" style={{ height: 100 }} />
				<img src="/images/icons/graphql.png" style={{ height: 100 }} />
				<img src="/images/icons/ts.png" style={{ height: 100 }} />
				<img src="/images/icons/nodejs.png" style={{ height: 100 }} />
				<img src="/images/icons/sass.png" style={{ height: 100 }} />
				<img src="/images/icons/vscode.png" style={{ height: 100 }} /> */}
			</Container>

			{/* <div
				style={{
					padding: 40,
					background: 'white',
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<img src="/images/icons/boule.svg" style={{ height: 300 }} />
			</div> */}

			<Container size="large">
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
					<TechnologyItem>ClickUp</TechnologyItem>

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

					<TechnologyItem>Typescript</TechnologyItem>
				</div>
			</Container>
		</section>
	)
}

const TechnologyItem = ({ children }) => (
	<div className="TechnologyItem">{children}</div>
)

export default TechnologySection
