# React Films Demo

## Repo setup

```sh
git init
git add -A
git status
git commit -m 'Initial commit'

git remote add origin http://....
git remote -v
git push origin main
```

Setup in Vercel, import and deploy

## Smoke test

- Do a simple fetch using API in localhost
- Commit and deploy to Vercel to check

## Skip dotenv - safeguard API key

## add eslint and others

```sh
npm install eslint --save-dev
npm init @eslint/config
```

Do React 18 [fix](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

Add [.gitignore](https://www.toptal.com/developers/gitignore/api/windows,osx,node,visualstudiocode)

## Design

### Wireframe + URL + Components

/movies -> See all the trending movies
/favs -> see my favs movies
/??? -> see movie details
