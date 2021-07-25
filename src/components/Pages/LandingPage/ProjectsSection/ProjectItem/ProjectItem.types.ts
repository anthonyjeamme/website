export type TProjectItemComponent = (props: TProjectItemProps) => JSX.Element

type TProjectItemProps = {
	title: string
	description: string | JSX.Element
	image?: string
	link?: string
}
