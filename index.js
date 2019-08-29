'use strict'

const escapeStringRegexp = require('escape-string-regexp')

function createWordBoundaryRegex (collection, flags = 'ui') {
  if (!collection) throw new TypeError('Need to provide a collection.')
  const patterns = collection.map(pattern => escapeStringRegexp(pattern))
  return new RegExp(`\\b(?:${patterns.join('|')})\\b`, flags)
}

module.exports = createWordBoundaryRegex
