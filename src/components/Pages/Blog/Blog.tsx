import React from 'react'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import Container from '~Common/Display/Container/Container'

import './Blog.scss'
import { Link } from 'gatsby'

const Blog = () => {
	return (
		<div className="Blog">
			<LayoutHeader />

			<Container size="large">
				<h1>Articles</h1>

				<div>
					<Link to="/blog/how-to-become-a-gatsby-rockstar">Article</Link>
				</div>
			</Container>
		</div>
	)
}

export default Blog
