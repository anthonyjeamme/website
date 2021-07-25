import React from 'react'

import './SkillGroup.scss'

const SkillGroup = ({ children, title }) => {
	return (
		<div className="SkillGroup">
			<h3 className="title">{title}</h3>

			{children}
		</div>
	)
}

export default SkillGroup
