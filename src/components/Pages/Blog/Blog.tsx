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

				<p className="subtitle">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione modi
					mollitia ipsum provident explicabo laboriosam enim ducimus accusantium
					ipsa quibusdam libero inventore.
				</p>

				<hr />

				<div className="articles">
					<ArticleItem title="Créer une librairie - les bases" image="" />
					<ArticleItem
						title="Créer une librairie de composants React"
						image=""
						link="/blog/how-to-become-a-gatsby-rockstar"
					/>
					<ArticleItem
						title="Créer une librairie - les bases"
						image=""
						link="/blog/how-to-become-a-gatsby-rockstar"
					/>
					<ArticleItem title="Créer une librairie - les bases" image="" />
					<ArticleItem
						title="Créer une librairie - les bases"
						image=""
						link="/blog/how-to-become-a-gatsby-rockstar"
					/>
					<ArticleItem
						title="Créer une librairie - les bases"
						image=""
						link="/blog/how-to-become-a-gatsby-rockstar"
					/>
				</div>
			</Container>
		</div>
	)
}

export default Blog

const ArticleItem = ({ image, title, link }) => (
	<Link className="ArticleItem" to={link}>
		<div className="image"></div>
		<h2>{title}</h2>
	</Link>
)
