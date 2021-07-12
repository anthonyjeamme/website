import React from 'react'
import { Link } from 'gatsby'
import Container from '~components/Common/Display/Container/Container'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

const index = () => {
	return (
		<div className="index">
			<LayoutHeader />

			<Container size="medium">
				<div
					style={{
						padding: '100px 0'
					}}
				>
					<Link to="/blog/how-to-become-a-gatsby-rockstar">
						How to become a Gatsby rockstar
					</Link>
				</div>
			</Container>
		</div>
	)
}
export default index
