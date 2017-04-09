'use strict'

const should = require('should')

const createWordBoundaryRegex = require('..')

describe('create-word-boundary-regex', function () {
  it('serialization is correct', function () {
    const collection = [
      'starboard',
      'severne'
    ]

    const regex = createWordBoundaryRegex(collection)
    should(regex).be.eql(/\bstarboard\b|\bseverne\b/i)

    const test = collection.every(regex.test.bind(regex))
    should(test).be.true()
  })
})
