import { Link } from 'gatsby'
import React, { useRef, useEffect, useState } from 'react'

import Button from '../../Common/Basics/Button/Button'

import './LayoutHeader.scss'

const LayoutHeader: TLayoutHeader = () => {
	const [showNavigation, setShowNavigation] = useState(false)
	const rootRef = useRef<HTMLDivElement>()

	useEffect(() => {
		const handleScroll = () => {
			setShowNavigation(window.scrollY >= 250)

			if (rootRef.current) {
				if (window.scrollY > 20) {
					rootRef.current.classList.add('background')
				} else {
					rootRef.current.classList.remove('background')
				}
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className="LayoutHeader" ref={rootRef}>
			<div className="brand">
				<Link to="/">
					<img src="/images/LOGO.svg" style={{ height: 40 }} />
				</Link>
			</div>

			<div className={`title${showNavigation ? ' active' : ''}`}>
				<i className="mdi mdi-home" style={{ marginRight: 8 }} /> Accueil{' '}
				<i className="mdi mdi-chevron-right chevron" />{' '}
				<i className="mdi mdi-post" style={{ marginRight: 8 }} /> Articles{' '}
				<i className="mdi mdi-chevron-right chevron" /> How to become a Gatsby
				rockstar
			</div>

			<nav className="nav">
				<Link tabIndex={0}>
					<Button handleClick={() => {}}>Portfolio</Button>
				</Link>
				<Link tabIndex={0} to="/formations">
					<Button handleClick={() => {}}>Formations</Button>
				</Link>
				<Link tabIndex={0} to="/contact">
					<Button handleClick={() => {}}>Besoin d'un dev ?</Button>
				</Link>
				<Link tabIndex={0} to="/blog">
					<Button handleClick={() => {}}>Articles</Button>
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
