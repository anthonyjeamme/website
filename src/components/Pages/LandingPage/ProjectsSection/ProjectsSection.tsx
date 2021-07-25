import React from 'react'
import DecoratedH2 from '../Common/DecoratedH2/DecoratedH2'
import ProjectItem from './ProjectItem/ProjectItem'

import './ProjectsSection.scss'

const ProjectsSection = () => {
	return (
		<div className="ProjectsSection">
			<DecoratedH2>Projets</DecoratedH2>

			<div className="projects">
				<ProjectItem
					title="coq-trotteur"
					description={
						<span>
							Plateforme de E-Commerce
							<br /> Mon rôle : CTO / concepteur developpeur
						</span>
					}
					link="https://coq-trotteur.com/fr/paysaptluberon"
				/>
				<ProjectItem
					title="Tressalia"
					description="Site web pour un Bar à tresses"
					link="https://tressalia.fr"
				/>
				<ProjectItem
					title="rocket-useform"
					description="Librairie React pour faciliter la création de formulaire complexes"
					link="https://github.com/anthonyjeamme/rocket-useform"
				/>
				<ProjectItem
					title="indika-solution (en cours)"
					description="Site web • Courtier en assurances"
					link="https://www.indikasolutions.com/"
				/>
			</div>
		</div>
	)
}

export default ProjectsSection
