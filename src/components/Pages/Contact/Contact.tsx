import React from 'react'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import Container from '~Common/Display/Container/Container'

import './Contact.scss'

const Contact = () => {
	return (
		<div className="Contact">
			<LayoutHeader />

			<Container size="large">
				<h1>Contact</h1>
			</Container>
		</div>
	)
}

export default Contact
