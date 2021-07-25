import React from 'react'

import { TProjectItemComponent } from './ProjectItem.types'

import './ProjectItem.scss'
const ProjectItem: TProjectItemComponent = ({
	title,
	description,
	image,
	link
}) => {
	return (
		<div className="ProjectItem">
			<div className="image">
				<div style={{ width: 200 }} />
				{image && <img src={image} />}
			</div>

			<div className="content">
				<h3>{title}</h3>
				<p className="description">{description}</p>

				{link && (
					<div className="links">
						<a href={link} target="_blank" rel="noopener noreferrer">
							<i className="mdi mdi-link-variant" /> Visiter
						</a>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProjectItem
