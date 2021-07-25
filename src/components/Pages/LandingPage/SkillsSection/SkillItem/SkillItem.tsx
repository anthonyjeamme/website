import React, { useRef, useState } from 'react'
import CaretIcon from '~components/Common/Icons/CaretIcon'
import StarIcon from '~components/Common/Icons/StarIcon'

import { TSkillItemComponent } from './SkillItem.types'

import './SkillItem.scss'

const SkillItem: TSkillItemComponent = ({
	level,
	star = false,
	name,
	description
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const expandedElementRef = useRef<HTMLDivElement>(null)

	return (
		<div
			className={`SkillItem ${isOpen ? 'active' : ''} ${
				description ? 'expandable' : ''
			}`}
		>
			<header
				role="button"
				tabIndex={0}
				onClick={() => {
					if (!description) return
					setIsOpen(!isOpen)

					if (isOpen) {
						expandedElementRef.current.style.height = '0'
					} else {
						expandedElementRef.current.style.height =
							expandedElementRef.current.scrollHeight + 'px'
					}
				}}
			>
				<span className="name">
					{star && (
						<span className="star">
							<StarIcon />
						</span>
					)}
					{name}
				</span>
				<span className="progress">
					<span
						className="value"
						style={{
							width: level * 10 + '%'
						}}
					/>
				</span>

				<span className="caret">
					<CaretIcon />
				</span>
			</header>

			<div
				className="expanded"
				style={{
					height: 0
				}}
				ref={expandedElementRef}
			>
				<div className="description">{description}</div>
			</div>
		</div>
	)
}

export default SkillItem
