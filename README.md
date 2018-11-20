# vue-master-class

This repository contains the source code of [The Vue.js Master Class](https://vueschool.io).

## The Vue.js Master Class

The goal of the Master Class is to teach you Vue.js along with Best Practices, Modern Javascript, and other exciting technologies, by building a Real World application - a forum.

## We cover the fundamentals, like

- Vue cli, router and State management with Vuex
- Modern Javascript (ES6/7/8)
- User permissions & protected routes
- Third party authentication
- Firebase Realtime Database & Cloud functions
- Automatic code review with ESLint
- Deployment
- Application architecture and best practices

## We also dive into harder topics, like:

- Higher Order Functions
- Creating Vue Plugins
- Code Splitting
- Support for older Browsers
- Webpack configuration
- SEO and pre-rendering
- Reactive programming with RxJS

By completing the Vue.js Master Class, you will be able to land any Vue related job or optimize/improve your own projects!

Convinced? [Enroll now](https://vueschool.io/the-vuejs-master-class)


## Build Setup

``` bash
# install dependencies
npm install

# if you've installed yarn instead
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Firebase
Later master classes shou how to move past read-only, to your own writeable
database.

- Create a free account at https://firebase.google.com/
- Install firebase-cli
  - Mac Homebrew: `brew install firebase-cli`
  - (ToDo: community support for other OSes)
- `npm install -g firebase-tools`   # optional
- Log into your Firebase account
- Create a Firebase project, as needed
- Grab the project configuration
  - Click the project, to open its dashboard
  - Click the ( </> ) properties icon
- Edit .env with your settings (in project root folder)
- Edit .firebaserc

`firebase login`
`npm run db:seed`

Follow steps in *Build Setup* to run / build
Your empty page awaits!
