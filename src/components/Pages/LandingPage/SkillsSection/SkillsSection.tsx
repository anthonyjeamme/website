import React from 'react'

import DecoratedH2 from '../Common/DecoratedH2/DecoratedH2'
import SkillGroup from './SkillGroup/SkillGroup'
import SkillItem from './SkillItem/SkillItem'

import './SkillsSection.scss'

const SkillsSection = () => {
	return (
		<div className="SkillsSection">
			<DecoratedH2>Compétences</DecoratedH2>

			<div className="groups">
				<SkillGroup title="Générales">
					<SkillItem level={10} star name="Javascript" description="Bonne maîtrise de Javascript et de son écosystème (webpack, node)" />
					<SkillItem
						level={10}
						star
						name="Typescript"
						description={`Je code de préférence mes applications React / NodeJS en Typescript (TSX)`}
					/>
					<SkillItem level={10} star name="React" />
					<SkillItem level={9} star name="Gatsby" />
					<SkillItem level={5} name="NextJS" />
				</SkillGroup>

				<SkillGroup title="Frontend">
					<SkillItem level={10} star name="HTML" />
					<SkillItem level={10} star name="CSS / SCSS" />
					<SkillItem level={10} star name="Styled comp." />
				</SkillGroup>

				<SkillGroup title="Tests">
					<SkillItem level={7} name="Jest" />
					<SkillItem level={6} name="StoryBook" />
					<SkillItem level={5} name="Cypress" />
				</SkillGroup>

				<SkillGroup title="Backend">
					<SkillItem level={10} name="NodeJS" />
					<SkillItem level={9} name="Express" />
					<SkillItem level={5} name="NestJS" />
				</SkillGroup>

				<SkillGroup title="Base de données / Données">
					<SkillItem level={8} name="MongoDB" />
					<SkillItem level={7} name="Redis" />
					<SkillItem level={9} star name="GraphQL" />
				</SkillGroup>

				<SkillGroup title="Outils">
					<SkillItem
						level={9}
						star
						name="VSCode"
						description={`Raccourcis / Développement d'extensions / Snippets / Debug`}
					/>
				</SkillGroup>
				<SkillGroup title="Services">
					<SkillItem level={10} star name="Netlify" />
					<SkillItem level={8} name="Firebase" />
					<SkillItem level={5} name="AWS" />
					<SkillItem level={5} name="Sendinblue" />
				</SkillGroup>
				<SkillGroup title="Bonnes pratiques">
					<SkillItem
						level={8}
						name="SEO"
						description={`Bonne connaissance de la SEO technique et connaissances basique de la SEO on-page / off-page`}
					/>
					<SkillItem level={8} name="Optimisation" />
				</SkillGroup>
				<SkillGroup title="Compétences annexes">
					<SkillItem level={9} name="Webscraping" />

					<SkillItem level={6} name="Design" />
					<SkillItem level={6} name="UX" />
					<SkillItem level={4} name="Marketing" />
					<SkillItem
						level={5}
						name="Copywriting"
						description={`Connaîssance basiques acquises au travers de la lecture de livres. Sans être capable de pouvoir fournir un
						travail professionel, je suis à même de comprendre les enjeux et donc de pouvoir facilement communiquer avec des copywriters.`}
					/>
				</SkillGroup>

				<SkillGroup title="Organisation">
					<SkillItem level={8} name="GIT" />
					<SkillItem level={8} name="ClickUp" />
				</SkillGroup>
			</div>
		</div>
	)
}

export default SkillsSection
