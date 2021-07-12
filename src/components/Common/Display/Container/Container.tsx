import React from 'react'
import { classNamesFromObject } from '~utils/utils'

import './Container.scss'

const Container: TContainer = ({ children, size }) => {
	return (
		<div className={`Container ${classNamesFromObject({ size })}`}>
			{children}
		</div>
	)
}

export default Container

type TContainer = React.FC<{
	size: 'small' | 'medium' | 'large'
}>
