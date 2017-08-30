# regex-word-boundary

![Last version](https://img.shields.io/github/tag/Kikobeats/regex-word-boundary.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/regex-word-boundary/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/regex-word-boundary)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/regex-word-boundary.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/regex-word-boundary)
[![Dependency status](https://img.shields.io/david/Kikobeats/regex-word-boundary.svg?style=flat-square)](https://david-dm.org/Kikobeats/regex-word-boundary)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/regex-word-boundary.svg?style=flat-square)](https://david-dm.org/Kikobeats/regex-word-boundary#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/regex-word-boundary.svg?style=flat-square)](https://www.npmjs.org/package/regex-word-boundary)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Helper for create a [word boundary](http://www.regular-expressions.info/wordboundaries.html) regex based in a collection

## Install

```bash
$ npm install regex-word-boundary --save
```

## Usage

```js
const createWordBoundaryRegex = require('regex-word-boundary')

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

Type:  `String`<br>
Default: `i`

[Regex flags](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp) for create the regex.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
