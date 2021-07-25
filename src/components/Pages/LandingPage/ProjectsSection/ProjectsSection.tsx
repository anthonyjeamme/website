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
					image="https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1617360807/sample.jpg"
					title="coq-trotteur"
					description="aze"
					link="https://coq-trotteur.com/fr/paysaptluberon"
				/>
			</div>
		</div>
	)
}

export default ProjectsSection
