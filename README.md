<p align="center">
    <img alt="Gatsby" src="https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1617360957/shares/anthony-jeamme-gatsby-starter.svg" width="400" />
</p>
<h1 align="center">
  My Gatsby's starter - SASS/Jest/Cypress/Storybook & other cool stuff
</h1>

## Aliases

To add aliases, just add them in jsconfig.js. They will automatically be added in eslint, jest and gatsby configs.

Example :

```json
{
	"compilerOptions": {
		"jsx": "react",
		"baseUrl": ".",
		"paths": {
			"~myAlias": ["path/to/alias/*"]
		}
	}
}
```

## 🧪 Testing

- just run `npm test`
- Cypress is configured, just run `npm run cy:open`
- StoryBook is configured, just run `npm run sb`
