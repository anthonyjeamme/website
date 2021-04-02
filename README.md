<p align="center">
    <img alt="Gatsby" src="https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1617360957/shares/anthony-jeamme-gatsby-starter.svg" width="400" />
</p>
<h1 align="center">
  My Gatsby's starter - SASS/Jest/Cypress & other cool stuff
</h1>

## ✨ Husky

Run `npx husky install` to activate pre-commit eslint check

## 🧪 Testing

- Testing with jest : `npm test`
- Run e2e tests : `npm run cy:open`

## 💫 Aliases

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
