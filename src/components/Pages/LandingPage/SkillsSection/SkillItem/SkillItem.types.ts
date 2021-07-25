export type TSkillItemComponent = (props: TSkillItemProps) => JSX.Element

type TSkillItemProps = {
	level: number
	star?: boolean
	name: string
	description?: JSX.Element | string
}
