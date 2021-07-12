export const camelCaseToKebabCase = (name) =>
	name.replace(/([A-Z])/g, (value) => `-${value.toLowerCase()}`)

export const classNamesFromObject = (object: { [key: string]: string }) =>
	Object.entries(object)
		.map(([key, value]) => `${camelCaseToKebabCase(key)}-${value}`)
		.join(' ')
