import React from 'react'

import Container from '~Common/Display/Container/Container'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import './Services.scss'

const Services = () => {
	return (
		<div className="Services">
			<LayoutHeader />
			<Container size="large">
				<h1>Services</h1>
			</Container>
		</div>
	)
}

export default Services
