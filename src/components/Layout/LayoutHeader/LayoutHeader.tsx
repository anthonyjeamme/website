import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

import './LayoutHeader.scss'

const LayoutHeader: TLayoutHeader = () => {
	const [showNavigation, setShowNavigation] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowNavigation(window.scrollY >= 250)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className="LayoutHeader">
			<div className="brand">
				<Link to="/">
					<img src="/images/LOGO.svg" style={{ height: 40 }} />
				</Link>
			</div>

			<div className={`title${showNavigation ? ' active' : ''}`}>
				Home <i className="mdi mdi-chevron-right" /> Articles{' '}
				<i className="mdi mdi-chevron-right" /> How to become a Gatsby rockstar
			</div>

			<nav className="nav">
				<Link tabIndex={0} to="/formations">
					Formations
				</Link>
				<Link tabIndex={0} to="/contact">
					Besoin d'un dev ?
				</Link>
				<Link tabIndex={0} to="/blog">
					Articles
				</Link>
			</nav>

			<button className="burger">
				<span>
					<i className="mdi mdi-menu" />
				</span>
			</button>
		</div>
	)
}

export default LayoutHeader

type TLayoutHeader = React.FC
