'use strict'

function createWordBoundaryRegex (collection, opts = 'i') {
  if (!collection) throw new TypeError('Need to provide a collection.')
  const patterns = collection.map(pattern => `\\b${pattern}\\b`)
  return RegExp(patterns.join('|'), opts)
}

module.exports = createWordBoundaryRegex
