'use strict'

function createWordBoundaryRegex (collection, flags = 'ui') {
  if (!collection) throw new TypeError('Need to provide a collection.')
  const patterns = collection.map(pattern => `\\b${pattern}\\b`)
  return RegExp(patterns.join('|'), flags)
}

module.exports = createWordBoundaryRegex
