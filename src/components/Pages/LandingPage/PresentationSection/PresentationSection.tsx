import React from 'react'
import Button from '../../../Common/Atoms/Button/Button'

import './PresentationSection.scss'

const PresentationSection = () => {
	return (
		<div className="PresentationSection">
			<div className="container">
				<section className="IntroSection">
					<div className="profile">
						<div className="profile-picture">
							<img src="/images/profile-picture.jpg" />
						</div>

						<div className="text">ANTHONY JEAMME</div>
						<div className="socials">
							<a
								href="https://www.linkedin.com/in/anthonyjeamme/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="mdi mdi-linkedin" />
							</a>
							<a
								href="https://github.com/anthonyjeamme"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="mdi mdi-github" />
							</a>
							<a href="mailto:anthony@jeamme.fr">
								<i className="mdi mdi-email-outline" />
							</a>
						</div>
					</div>
					<div>
						<h1>
							Développeur React <span className="separator">/</span> Node
						</h1>
						<p className="subtitle">
							Gatsby • Typescript • SCSS • Netlify • Jest
						</p>

						<p>
							Développeur React indépendant à Lyon depuis plus de quatre ans et
							passionné de frontend depuis toujours, j'apporte une attention
							particulière à développer des applications <u>fiables</u>,{' '}
							<u>scalables</u> et <u>faciles à utiliser</u>.
						</p>

						<p>Je ne suis actuellement pas disponible pour des missions.</p>

						{/* <p>
							Je vous aide à mettre en place et développer votre projet. Je mets
							en place des bonnes pratiques : structure du projet, travail
							d'équipe, choix technologiques adaptés en fonction de vos besoins.
						</p> */}

						<a
							href="https://www.linkedin.com/in/anthonyjeamme/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								handleClick={() => {
									//
								}}
								theme="orange"
							>
								<i className="mdi mdi-chat-processing" /> Me contacter
							</Button>
						</a>
					</div>
				</section>
			</div>
		</div>
	)
}

export default PresentationSection
