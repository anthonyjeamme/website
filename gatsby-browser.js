import './src/style/global.scss'

export const onRouteUpdate = ({ location }) => {
	const GPageviewData = {
		page_location: location.href,
		page_path: location.pathname
	}

	window.gtag('event', 'page_view', GPageviewData)
}
