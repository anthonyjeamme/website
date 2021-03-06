import React from 'react'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import Container from '~Common/Display/Container/Container'

import PresentationSection from './PresentationSection/PresentationSection'

import ProjectsSection from './ProjectsSection/ProjectsSection'
import SkillsSection from './SkillsSection/SkillsSection'
import FunSection from './FunSection/FunSection'

import './LandingPage.scss'

const LandingPage = () => {
	return (
		<>
			<div className="LandingPage">
				<LayoutHeader />

				<PresentationSection />

				<Container size="large">
					<SkillsSection />
					<ProjectsSection />
					<FunSection />
				</Container>
			</div>
		</>
	)
}

export default LandingPage
