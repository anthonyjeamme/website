import React, { useState } from 'react'

import DecoratedH2 from '../Common/DecoratedH2/DecoratedH2'
import SkillGroup from './SkillGroup/SkillGroup'
import SkillItem from './SkillItem/SkillItem'

import './SkillsSection.scss'

const SkillsSection = () => {
	const [showDetails, setShowDetails] = useState(false)

	return (
		<div className="SkillsSection">
			<DecoratedH2>Compétences</DecoratedH2>

			<div className="groups">
				<SkillGroup title="Framework">
					<SkillItem level={10} star name="Gatsby" />
					<SkillItem level={8} name="NextJS" />
				</SkillGroup>

				<SkillGroup title="Frontend">
					<SkillItem level={10} star name="HTML" />
					<SkillItem level={10} star name="CSS (SASS)" />
					<SkillItem level={10} star name="ES6" />
					<SkillItem
						level={10}
						star
						name="Typescript"
						description={`Je code de préférence mes applications React / NodeJS en Typescript`}
					/>
					<SkillItem
						level={10}
						star
						name="SEO"
						description={`Bonne connaissance de la SEO technique et connaissances basique de la SEO on-page / off-page`}
					/>
				</SkillGroup>

				<SkillGroup title="Services">
					<SkillItem level={10} star name="Netlify" />
					<SkillItem
						level={9}
						star
						name="GA4"
						description={`Mise en place de Google analytics complexes (multiples tracking code),
						maîtrise des évenements par défaut (e-commerce) + création de custom events / dimensions / metrics`}
					/>
					<SkillItem level={8} name="Sentry" />
					<SkillItem level={8} name="Sendinblue" />
				</SkillGroup>

				<SkillGroup title="Base de données">
					<SkillItem level={9} star name="MongoDB" />
					<SkillItem level={6} name="PostgreSQL" />
				</SkillGroup>

				<SkillGroup title="Testing">
					<SkillItem level={8} name="Jest" />
					<SkillItem level={10} name="StoryBook" />
					<SkillItem level={6} name="Cypress" />
				</SkillGroup>

				<SkillGroup title="Outils">
					<SkillItem
						level={9}
						star
						name="VSCode"
						description={`J'utilise VSCode au quotidien (+ développement d'extensions, snippets, debug)`}
					/>
					<SkillItem
						level={8}
						name="Illustrator"
						description={`J'utilise essentiellement illustrator pour la création de logos, icons.\
						Je m'entraine à l'illustration sur mon temps libre.`}
					/>
					<SkillItem level={8} name="Git" />
					<SkillItem level={8} name="Clickup" />
				</SkillGroup>

				<SkillGroup title="Culture générale">
					<SkillItem
						level={7}
						name="UI/UX"
						description={`Ayant travaillé en étroite collaboration avec des UX/UI designer et\
						me passionant pour le sujet, j'ai les bases me permettant de réaliser des interfaces\
						agréables à voir et utiliser.`}
					/>
					<SkillItem
						level={5}
						name="Micro animations"
						description={`Bien que discrètes, les micro animations peuvent grandement améliorer\
						la qualité d'un produit et son utilisabilité. Je m'améliore sur le sujet quand j'en ai l'occasion`}
					/>
					<SkillItem
						level={3}
						name="Copywriting"
						description={`Connaîssance basiques acquises au travers de la lecture de livres.\
						Sans être capable de pouvoir fournir un travail professionel, je suis à même de\
						comprendre les enjeux et donc de pouvoir facilement communiquer avec des copywriters.`}
					/>
					<SkillItem
						level={3}
						name="Microcontent"
						description={`Conscient de l'importance du micro-content, je me forme sur le sujet.`}
					/>
					<SkillItem
						level={5}
						name="Rédaction"
						description={`Formuler ses idées, transmettre son savoir,\
						inspirer, motiver sont, je pense, des compétences importantes et très intéressantes.\
						Quand j'ai le temps, j'écris et je me forme sur le sujet.
						`}
					/>
				</SkillGroup>

				{/* <SkillGroup>
					<SkillItem
						level={7}
						star
						name="Architecture de projet"
						description={`Conception de l'architecture du projet, bonnes pratiques de nommage / hierarchie des fichiers.`}
					/>

					<SkillItem
						level={7}
						star
						name="Outils de fiabilisation"
						description={`J'utilise habituellement Sentry.io pour suivre les erreurs.`}
					/>

					<SkillItem
						level={5}
						star
						name="Optimisation"
						description={`J'utilise essentiellement Google Lighthouse, React dev tool et le coverage du devtool chrome pour détecter les problèmes de performance.`}
					/>

					<SkillItem
						level={10}
						star
						name="Typescript"
						description={`Je code de préférence mes applications React / NodeJS en Typescript (TSX)`}
					/>
					<SkillItem level={9} name="Netlify" />
				</SkillGroup> */}

				{/* {showDetails ? (
					<>
						<SkillGroup title="Frontend">
							<SkillItem level={10} star name="HTML" />
							<SkillItem level={10} star name="CSS / SCSS" />
							<SkillItem level={6} star name="Styled comp." />
							<SkillItem level={8} name="NextJS" />
						</SkillGroup>

						<SkillGroup title="Tests">
							<SkillItem level={7} name="Jest" />
							<SkillItem level={6} name="StoryBook" />
							<SkillItem level={5} name="Cypress" />
						</SkillGroup>



						<SkillGroup title="Outils">
							<SkillItem
								level={9}
								star
								name="VSCode"
								description={`Raccourcis / Développement d'extensions / Snippets / Debug`}
							/>
						</SkillGroup>


					</>
				) : (
					<div>
						<button
							className="show-details"
							onClick={() => {
								setShowDetails(true)
							}}
						>
							Voir tout
						</button>
					</div>
				)} */}
			</div>
		</div>
	)
}

export default SkillsSection
