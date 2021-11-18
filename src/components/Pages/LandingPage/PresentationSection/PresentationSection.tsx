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
						<h1>Développeur React</h1>
						<p className="subtitle">
							Gatsby • NextJS • Typescript • SCSS • NodeJS
						</p>

						<p>
							Spécialisé en React depuis plus de quatre ans, je suis
							actuellement lead-développeur chez{' '}
							<a href="https://coq-trotteur.com">coq-trotteur</a>.
						</p>

						<p>
							Ma ligne directice : bonne architecture de code, choix
							technologiques adaptés, fiabilité de l'application et code claire
							et maintenable.
						</p>

						<p>
							Mes connaissances en UI, UX, copywriting, management me permettent
							de mieux cerner les projets sur lesquels je travaille.
						</p>

						<a
							// href="https://www.linkedin.com/in/anthonyjeamme/"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => {
								// @ts-ignore
								window.gtag('event', 'click_contact', {})
								console.log('ICI')
							}}
						>
							<Button theme="orange">
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
