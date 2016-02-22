# Dotenv-Mustache

Dotenv-Mustache integrates the lovely [Mustache]() templating language into  [dotenv](http://github.com/motdotla/dotenv).
This would allow for the creation of dynamic environment variables.

[![NPM version](https://img.shields.io/npm/v/dotenv-mustache.svg?style=flat-square)](https://www.npmjs.com/package/dotenv-mustache)

## Install

```bash
npm install dotenv --save
npm install dotenv-mustache --save
```

## Usage

At the entry point of your application, you should require dotenv and dotenv-mustache, and call it into you code
as follows.

```js
var dotenv = require('dotenv')
var dotMustache = require('dotenv-mustache')

var myEnv = dotenv.config()
dotMustache(myEnv)
```

See [test/.env](./test/.env) for examples of mustache expressions in environment variables.
