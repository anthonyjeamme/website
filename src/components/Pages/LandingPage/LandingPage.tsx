import React from 'react'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import PresentationSection from './PresentationSection/PresentationSection'
import TechnologySection from './TechnologySection/TechnologySection'

import './LandingPage.scss'

const LandingPage = () => {
	return (
		<div className="LandingPage">
			<LayoutHeader />

			<PresentationSection />

			<TechnologySection />

			<div className="container">
				<section>
					<h2>Pricing</h2>
				</section>
			</div>
		</div>
	)
}

export default LandingPage
