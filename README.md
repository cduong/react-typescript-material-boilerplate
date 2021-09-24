# React-Typescript-Material-Boilerplate

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg) [![likeadev](https://img.shields.io/twitter/follow/likeadev?style=social)](https://twitter.com/likeadev)

A boilerplate+ built using React, Redux, TypeScript and MUI. It contains basic pre-baked components and utilities to get your project started quickly. Implements guidelines of [Hierarchical Front-end Structure](https://github.com/petejank/hierarchical-front-end-structure).

The package includes:

- sign-in page (any login/password combination will be accepted)
- dashboard page fetching JSON data from external source (courtesy of [JSONPlaceholder](https://jsonplaceholder.typicode.com))
- placeholder of authentication mechanism. Stores token in `localStorage`
- basic tests utilising Jest and [React Testing Library](https://github.com/testing-library/react-testing-library)

## Requirements

- `Node.js >= 10.0.0` (Dockerfile uses v16)
- `Yarn >= 3.0.0`

## Quick Start 

1. `git clone https://github.com/cduong/react-typescript-material-boilerplate.git` - clone the repository
2. `cd react-typescript-material-boilerplate` - enter the cloned directory
3. If Yarn is not installed: `npm install -g yarn`
4. `yarn set version berry` to set project version of Yarn 

# Docker
1. docker-compose build
2. docker-compose up
3. Access http://localhost:9000

# Local (with webpack-dashboard)
1. `yarn install` - install dependencies using Yarn
2. `yarn start` - run the development server
3. Access http://localhost:9000/

## Available Run Scripts

Remember to first install required node dependencies through `yarn install` (preffered) or `npm install`.

To run tasks type `yarn <taskNameHere>` or `npm run <taskNameHere>`. Tasks list:

- `start` - run Webpack development server
- `local` - run Webpack development server with dashboard
- `build` - build the project in development mode
- `build:prod` - build the project in production mode
- `lint` - prettifies and then lints ts* and js* files
- `test` - run tests and terminate. Usable in CI environments
- `test:watch` - run tests in watch mode. Usable for development
- `test:coverage` - run tests and generate test coverage report
- `bundle-analyzer` - runs bundle analyzer of the production build

## VS Code 

A little bit of setup is required for VSCode to recognize our TypeScript type definitions:

Run `yarn dlx @yarnpkg/sdks vscode`

Set your workspace TypeScript version:
1. Press Ctrl/Cmd+Shift+P in a TypeScript file
2. Choose "Select TypeScript Version"
3. Pick "Use Workspace Version"

Source: https://yarnpkg.com/getting-started/editor-sdks

TODO: Add Typescript plugin

## Contribution

Feel free to create an issue or a PR if you have an idea on how to improve this repository.

## License

This work is licensed under [MIT license](LICENSE)
