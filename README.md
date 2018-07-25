
## Main application structure
```md
├── config/ 
│   └── index.js 
├── controllers/ 
│   └── index.js  
├── routes  
│   └── index.js  
├── services  
│   ├── index.js  
│   └── templatePath.js  
├── views/  
├── public/  
│   ├── images/  
│   ├── javascript/  
│   ├── styles/  
│   └── json/  
│       └── talk.json  
├── layout/  
│   ├── test-front.psd  
│   └── test-front-320.psd  
├── .bowerrc  
├── .gitignore  
├── app.js  
├── package.json  
└── README.md  
```

### Main application routes
```md
├── views
    ├── home/
        └── chat.html
```
http://localhost:3000/site/home/chat/

## Used technologies:
- ES6
- BabelJs
- React (latest - 15.4.1)
- Flux (Facebook Flux - 3.1.2)
- webpack (2.1.0)
- Handlebars (4.0.6)
- MomentJs (2.17.1)
- Eslint (3.12.0)
- Sass
- PostCss 

## Pre-requisites:

- node: `>=4.3.0 <5.0.0 || >=5.10`
- npm: `>=3`
- yarn: `>=0.18.1` (optional)

## Install dependencies:
First of all we need install all project dependencies:
```sh
npm install
```

## Running

### Server application:
```sh
npm start
```

### Front-end application:
Running in `development` mode with `development` built files:
```sh
npm run build:dev
```
Running in `development` mode with `production` built files:
```sh
npm run build:prod
```

#### To preview open **[http://localhost:3000/site/home/chat/](http://localhost:3000/site/home/chat/)**

## Build application:
Build application for `production` environment:
```sh
npm run build
```

## Testing & stats
```sh
npm run test
```
Lint
```sh
npm run lint
```
Generate Webpack stats. 
```sh
npm run stats
```
Upload `stats.json` file on **[https://webpack.github.io/analyse/](https://webpack.github.io/analyse/)** and see more application's details.

## TODOS
Some things that I didn't have time to do: :'(
- [ ] Code review
- [ ] Some unit tests
- [ ] Automated e2e tests
- [ ] All Components markdown documentation
- [ ] Webpack loaders's flow diagram
- [ ] Webpack Tasks diagram
