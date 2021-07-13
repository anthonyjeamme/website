import React from 'react'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'
import Container from '~Common/Display/Container/Container'

import './Courses.scss'

const Courses = () => {
	return (
		<div className="Courses">
			<LayoutHeader />
			<Container size="large">
				<h1>Formations</h1>
			</Container>
		</div>
	)
}

export default Courses
