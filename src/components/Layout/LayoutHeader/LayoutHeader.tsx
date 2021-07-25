import { Link } from 'gatsby'
import React, { useRef, useEffect, useState } from 'react'

import Button from '../../Common/Atoms/Button/Button'

import './LayoutHeader.scss'

const LayoutHeader: TLayoutHeader = () => {
	const [showNavigation, setShowNavigation] = useState(false)
	const rootRef = useRef<HTMLDivElement>()

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
				{/* <i className="mdi mdi-home" style={{ marginRight: 8 }} /> Accueil{' '}
				<i className="mdi mdi-chevron-right chevron" />{' '}
				<i className="mdi mdi-post" style={{ marginRight: 8 }} /> Articles{' '}
				<i className="mdi mdi-chevron-right chevron" /> How to become a Gatsby
				rockstar */}
			</div>

			<nav className="nav">
				{/* <Link tabIndex={0} to="/portfolio">
					<Button
						handleClick={() => {
							//
						}}
					>
						Portfolio
					</Button>
				</Link>

				<Link tabIndex={0} to="/services">
					<Button
						handleClick={() => {
							//
						}}
					>
						Services
					</Button>
				</Link>
				<Link tabIndex={0} to="/blog">
					<Button
						handleClick={() => {
							//
						}}
					>
						Articles
					</Button>
				</Link> */}
			</nav>

			<button
				className="burger"
				onClick={() => {
					setMobileMenuOpen(!mobileMenuOpen)
				}}
			>
				<span>
					<i className="mdi mdi-menu" />
				</span>
			</button>

			<MobileSideBar
				isOpen={mobileMenuOpen}
				handleClose={() => {
					setMobileMenuOpen(false)
				}}
			/>
		</div>
	)
}

export default LayoutHeader

type TLayoutHeader = React.FC

const MobileSideBar = ({ isOpen, handleClose }) => {
	return (
		<div className={`MobileSideBar${isOpen ? ' active' : ''}`}>
			<div
				className="overlay"
				role="button"
				tabIndex={-1}
				onClick={handleClose}
			/>
			<nav>
				<header>
					<button
						className="close"
						onClick={() => {
							handleClose()
						}}
					>
						<i className="mdi mdi-window-close" />
					</button>
				</header>
				<div className="links">
					{/* <Link tabIndex={0} to="/portfolio" onClick={handleClose}>
						<i className="mdi mdi-laptop" /> Portfolio
					</Link>
					<Link tabIndex={0} to="/services" onClick={handleClose}>
						<i className="mdi mdi-account-hard-hat" /> Services
					</Link>
					<Link tabIndex={0} to="/blog" onClick={handleClose}>
						<i className="mdi mdi-newspaper-variant-multiple-outline" />{' '}
						Articles
					</Link> */}
				</div>
				<footer>
					<div className="social-networks">
						<a
							href="https://www.linkedin.com/in/anthonyjeamme/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="mdi mdi-linkedin" />
						</a>
						<a
							href="https://github.com/anthonyjeamme"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="mdi mdi-github" />
						</a>
						<a href="" rel="noopener noreferrer" target="_blank">
							<i className="mdi mdi-email-outline" />
						</a>
					</div>

					<Button theme="orange">Contacter moi</Button>
				</footer>
			</nav>
		</div>
	)
}
