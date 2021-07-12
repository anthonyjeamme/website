import React, { useEffect, useRef } from 'react'
import Container from '~components/Common/Display/Container/Container'
import LayoutHeader from '~components/Layout/LayoutHeader/LayoutHeader'

import './RootPage.scss'

const RootPage: TRootPage = () => {
	return (
		<div className="RootPage">
			<LayoutHeader />

			<ArticleHeader
				backgroundColor="#663399"
				image="/images/gatsby-banner.svg"
			/>

			<Container size="medium">
				<div className="content">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>{' '}
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>{' '}
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						laboriosam libero quibusdam nostrum! Nam, similique impedit fuga
						commodi quasi accusantium itaque ea officiis cupiditate doloremque
						inventore laborum accusamus exercitationem repudiandae?
					</p>
				</div>
			</Container>
		</div>
	)
}

export default RootPage

type TRootPage = React.FC

const ArticleHeader = ({ backgroundColor, image }) => {
	const titleRef = useRef<HTMLDivElement>()
	const bannerRef = useRef<HTMLImageElement>()
	const fixedBarRef = useRef<HTMLDivElement>()
	const ArticleHeaderRef = useRef<HTMLDivElement>()

	const handleScroll = () => {
		const { y } = titleRef.current.getBoundingClientRect()

		if (window.scrollY >= 160) {
			// titleRef.current.style.opacity = '0'
		} else {
			titleRef.current.style.opacity = '1'
		}

		if (window.scrollY >= 160) {
			fixedBarRef.current.style.opacity = '1'
		} else {
			fixedBarRef.current.style.opacity = '0'
		}

		bannerRef.current.style.transform = `translateY(-${window.scrollY / 3}px)`

		// if (y === 0) {
		// 	titleRef.current.classList.add('mini')
		// } else {
		// 	titleRef.current.classList.remove('mini')
		// }
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<header
				className="ArticleHeader"
				style={{
					backgroundColor
				}}
				ref={ArticleHeaderRef}
			>
				<img className="banner" ref={bannerRef} src={image} />

				<div
					className="fixed-bar"
					ref={fixedBarRef}
					style={{
						backgroundColor
					}}
				></div>
			</header>

			<div className="sticky-title" ref={titleRef}>
				<Container size="medium">
					<h1>How to become a Gatsby rockstar</h1>
				</Container>
			</div>
		</>
	)
}
