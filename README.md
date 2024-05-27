[![Production 🚀](https://github.com/DreamUnit/minddaily-frontend/actions/workflows/prod.yml/badge.svg)](https://github.com/DreamUnit/minddaily-frontend/actions/workflows/prod.yml)

Select correct node version:

```
nvm use
```

Install all packages:

```
yarn install
```

Create .env file with variables from .env.example file;

Start development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

# development notes:

To generate types from the graphql schema for use within components utilise the following script
Note to ensure the backend server is running as it will call the server and check what the schema looks like:

```bash
npm run codegen
```
