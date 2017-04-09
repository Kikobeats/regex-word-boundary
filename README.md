# create-word-boundary-regex

![Last version](https://img.shields.io/github/tag/Kikobeats/create-word-boundary-regex.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/create-word-boundary-regex/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/create-word-boundary-regex)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/create-word-boundary-regex.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/create-word-boundary-regex)
[![Dependency status](https://img.shields.io/david/Kikobeats/create-word-boundary-regex.svg?style=flat-square)](https://david-dm.org/Kikobeats/create-word-boundary-regex)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/create-word-boundary-regex.svg?style=flat-square)](https://david-dm.org/Kikobeats/create-word-boundary-regex#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/create-word-boundary-regex.svg?style=flat-square)](https://www.npmjs.org/package/create-word-boundary-regex)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Helper for create a word boundary regex based in a collection

## Install

```bash
$ npm install create-word-boundary-regex --save
```

## Usage

```js
const createWordBoundaryRegex = require('create-word-boundary-regex')

const regex = createWordBoundaryRegex([
  'hello',
  'world'
])

console.log(regex)
// => /\bhello\b|\bworld\b/i
```

## API

### createWordBoundaryRegex(collection, [flags])

#### collection

*Required*<br>
Type: `Array`

Collection of String for create the regex.

#### flags
Type:  `String`
Default: `i`

[Regex flags](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp) for create the regex.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
