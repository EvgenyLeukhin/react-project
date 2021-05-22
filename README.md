# react-project

react-project             |  developer
:-------------------------:|:-------------------------:
![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)  |  ![](https://fyndx.io/images/fyndx-logo.svg)

My custom config template for react-projects without create-react-app or react-scripts

<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/o0vwzuFwCGAFO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/cat-hacker-webs-o0vwzuFwCGAFO">via GIPHY</a></p>

[Repo-link](https://github.com/EvgenyLeukhin/react-project)

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
```eslint someFile.jsx``` - Check some file

```npm run eslint-find``` - Check all files inside src/ directory

```npm run eslint-fix``` - Fix all warnings inside src/ directory

***

## Packages

### Webpack 5

```webpack, webpack-cli, webpack-dev-server@4.0.0-beta.3```

### Webpack plugins
```webpackbar, html-webpack-plugin, compression-webpack-plugin, clean-webpack-plugin```

### Babel
```@babel/core, @babel/preset-env, @babel/preset-react, @babel/preset-typescript, babel-loader```

### TypeScript
```typescript, @typescript-eslint/eslint-plugin, @typescript-eslint/parser, @types/react, @types/react-dom```

### ESLint

```eslint, eslint-config-airbnb, eslint-import-resolver-typescript, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react, eslint-plugin-react-hooks, eslint-webpack-plugin, @typescript-eslint/eslint-plugin, @typescript-eslint/parser```

```npm i -g eslint```
```npm i --save-dev eslint```
```npx eslint --init``` 

* To check syntax, find problems, and enforce code style 
* JavaScript modules 
* React 
* TypeScript - Yes 
* Browser 
* Popular -> Airbnb -> json;

### Prettier
```prettier``` with .prettierrc.js

### Husky and Lint-stages 
```husky, lint-staged```

[how-to-install](https://stackoverflow.com/questions/50048717/lint-staged-not-running-on-precommit)

* npm install -D husky
* npm set-script prepare "husky install" && npm run prepare
* npx husky add .husky/pre-commit "npx lint-staged"
* npm i --save-dev husky
* git commit -m "added husky and lint-stagged"

### React 17
```react, react-dom```

### Redux and API
```...``` later

### Styles
```autoprefixer, css-loader, css-minimizer-webpack-plugin, cssnano, mini-css-extract-plugin, postcss-loader, sass, sass-loader, style-loader```

### Images
```...``` later

### Fonts, files
```file-loader```

### Local testing server
```express, chalk, compression, browser-sync```

### Demo
```gh-pages```