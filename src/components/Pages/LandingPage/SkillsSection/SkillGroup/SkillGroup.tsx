import React from 'react'

import './SkillGroup.scss'

const SkillGroup = ({ children, title = null }) => {
	return (
		<div className="SkillGroup">
			{title && <h3 className="title">{title}</h3>}
			<div className="items">{children}</div>
		</div>
	)
}

export default SkillGroup
