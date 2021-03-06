# react-project

without this template      |  with this template
:-------------------------:|:-------------------------:
![](https://media.giphy.com/media/PgKc6XWRjJ4GgkAevA/giphy.gif)  |  ![](https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif)

My custom config template for react-projects without create-react-app or react-scripts

* with **React and propTypes** - ```jsx``` branch (```git checkout jsx```)
* with **React and TypeScript** - ```tsx``` branch (```git checkout tsx```) - in progress

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
```npm start || yarn start``` - Run webpack-dev-server with hot-reloading
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
```@babel/core, @babel/preset-env, @babel/preset-react, babel-loader```

### ESLint

```eslint, eslint-config-airbnb, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react, eslint-plugin-react-hooks, eslint-webpack-plugin```

```npm i -g eslint```
```npm i --save-dev eslint```
```npx eslint --init``` 

* To check syntax, find problems, and enforce code style 
* JavaScript modules 
* React 
* TypeScript - No 
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
```image-webpack-loader, url-loader```

### Fonts, files
```file-loader```

### Local testing server
```express, chalk, compression, browser-sync```

### Demo
```gh-pages```
