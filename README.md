# reactjs-boilerplate
ReactJS initial setup for development

## Instructions

First of all initialize your project with `npm init`. Enter the requested values for your project.
Then run at the command line the following commands

#### React JS and Redux libraries

```
npm i --save react react-dom redux react-redux
```

#### React JS Development libraries

```
npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-react-hmre babel-register cross-env enzyme express mocha expect express node-libs-browser react-addons-test-utils webpack webpack-dev-middleware webpack-hot-middleware
```

After your file `package.json` is complete add the following lines.

### package.json



```javascript
"scripts": {
  "start": "node server.js",
  "test": "cross-env NODE_ENV=test mocha --recursive --compilers js:babel-register",
  "test:watch": "npm test -- --watch"
},
```
