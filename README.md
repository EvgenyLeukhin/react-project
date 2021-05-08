# react-project
My custom template for react projects withou create-react-app or react-scripts

[Repo-link](https://github.com/EvgenyLeukhin/)

[Demo-link](http://evgenyleukhin.github.io/react-project/)
***
## Install node packages
### With npm 
```npm install || npm i```
### With yarn
```yarn install || yarn```
***
## Start development
Run webpack-dev-server with hot-reloading
```npm start || yarn start```
***
## Build for production
```npm run build || yarn build```
***
## Start local test sever
```npm run serve || yarn serve```
***
## Deploy to github-pages
```npm run deploy || yarn deploy```

## ESLint
```eslint someFile.jsx```
***
## Packages
```browser-sync```

### Webpack 5
```webpack, webpack-cli, webpack-dev-server```

### Webpack plugins
```webpackbar, html-webpack-plugin, compression-webpack-plugin, clean-webpack-plugin```

### React 17
```react, react-dom```

### Redux and API
```...```

### Babel
```@babel/core, @babel/preset-env, @babel/preset-react, @babel/preset-typescript, babel-loader```

### TypeScript
```typescript, @typescript-eslint/eslint-plugin, @typescript-eslint/parser```

### ESLint

```npm i -g eslint```
```npm i --save-dev eslint```
```npx eslint --init``` 
```eslint-loader``` (to show errors in the console) 

* To check syntax, find problems, and enforce code style 
* JavaScript modules 
* React 
* TypeScript - Yes 
* Browser 
* Popular -> Airbnb -> json;

### Prettier
```prettier``` with .prettierrc.js

### Husky and Lint-stages 
```husky, lint-stages```

[how-to-install](https://stackoverflow.com/questions/50048717/lint-staged-not-running-on-precommit)

* npm install -D husky
* npm set-script prepare "husky install" && npm run prepare
* npx husky add .husky/pre-commit "npx lint-staged"
* npm i --save-dev husky
* git commit -m "added husky and lint-stagged"

### Styles
```style-loader, css-loader```

### Images
```...``` later

### Fonts, files
```...``` later

### Local testing server
```express, chalk, compression```

### Demo
```gh-pages```