import { expect } from 'chai'
import _flatten from '../../src/arrays/_flatten'

describe('_flatten', function() {

  it('is a function', function() {
    expect(_flatten).to.be.a('function')
  })

  context('shallow === true', function() {

    it('_flatten() returns empty array when given an empty array', function() {
      const emptyArray = []
      expect(_flatten(emptyArray, true)).to.deep.equal([])
    })

    it(
      '_flatten() returns a copy of a 1-level array', function() {
        let anArray = [1, 2, 3]
        expect(_flatten(anArray, true)).to.deep.equal([1, 2, 3])
      }
    )
    it(
      '_flatten() converts a simple 2-level array to a 1-level array',
      function() {
        let anArray = [1, [2, 3], 4]
        expect(_flatten(anArray, true)).to.deep.equal([1, 2, 3, 4])
      }
    )
    it(
      '_flatten() converts a complex 2-level array to a 1-level array',
      function() {
        let anArray = [
          1, [2, 3], undefined, [4], [], {key: '5'}, null, 'string', NaN, ''
        ]
        expect(_flatten(anArray, true)).to.deep.equal([
          1, 2, 3, undefined, 4, {key: '5'}, null, 'string', NaN, ''
        ])
      }
    )
    it('_flatten() converts a 3-level array to a 2-level array', function() {
      let anArray = [1, [2, [3]], [4, [5, '6']], [[]]]
      expect(_flatten(anArray, true))
        .to.deep.equal([1, 2, [3], 4, [5, '6'], []])
    })
    it('_flatten() returns undefined when given a sparse array', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_flatten(anArray, true)).to.be.undefined
    })
    it('_flatten() returns undefined when given a number', function() {
      const nonArray = 2
      expect(_flatten(nonArray, true)).to.be.undefined
    })
    it('_flatten() returns undefined when given a string', function() {
      const nonArray = 'stuff'
      expect(_flatten(nonArray, true)).to.be.undefined
    })
    it('_flatten() returns undefined when given a nonarray object', function() {
      const nonArray = {key: 1}
      expect(_flatten(nonArray, true)).to.be.undefined
    })

  })

  context('shallow === false', function() {

    it('_flatten() returns empty array when given an empty array', function() {
      const emptyArray = []
      expect(_flatten(emptyArray, false)).to.deep.equal([])
    })

    it('_flatten() converts a 2-level array to a 1-level array', function() {
      let anArray = [
        1, [2, 3], undefined, [4], [], {key: '5'}, null, 'string', NaN, ''
      ]
      expect(_flatten(anArray, false)).to.deep.equal([
        1, 2, 3, undefined, 4, {key: '5'}, null, 'string', NaN, ''
      ])
    })
    it('_flatten() converts a 3-level array to a 1-level array', function() {
      let anArray = [1, [2, [3]], [4, [5, '6']], [[]]]
      expect(_flatten(anArray, false))
        .to.deep.equal([1, 2, 3, 4, 5, '6'])
    })
    it('_flatten() returns undefined when given a sparse array', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_flatten(anArray, false)).to.be.undefined
    })
    it('_flatten() returns undefined when given a number', function() {
      const nonArray = 2
      expect(_flatten(nonArray, false)).to.be.undefined
    })
    it('_flatten() returns undefined when given a string', function() {
      const nonArray = 'stuff'
      expect(_flatten(nonArray, false)).to.be.undefined
    })
    it('_flatten() returns undefined when given a nonarray object', function() {
      const nonArray = {key: 1}
      expect(_flatten(nonArray, false)).to.be.undefined
    })

  })

  context('shallow unspecified', function() {

    it('_flatten() returns empty array when given an empty array', function() {
      const emptyArray = []
      expect(_flatten(emptyArray)).to.deep.equal([])
    })

    it('_flatten() converts a 2-level array to a 1-level array', function() {
      let anArray = [
        1, [2, 3], undefined, [4], [], {key: '5'}, null, 'string', NaN, ''
      ]
      expect(_flatten(anArray)).to.deep.equal([
        1, 2, 3, undefined, 4, {key: '5'}, null, 'string', NaN, ''
      ])
    })
    it('_flatten() converts a 3-level array to a 1-level array', function() {
      let anArray = [1, [2, [3]], [4, [5, '6']], [[]]]
      expect(_flatten(anArray))
        .to.deep.equal([1, 2, 3, 4, 5, '6'])
    })
    it('_flatten() returns undefined when given a sparse array', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_flatten(anArray)).to.be.undefined
    })
    it('_flatten() returns undefined when given a number', function() {
      const nonArray = 2
      expect(_flatten(nonArray)).to.be.undefined
    })
    it('_flatten() returns undefined when given a string', function() {
      const nonArray = 'stuff'
      expect(_flatten(nonArray)).to.be.undefined
    })
    it('_flatten() returns undefined when given a nonarray object', function() {
      const nonArray = {key: 1}
      expect(_flatten(nonArray)).to.be.undefined
    })

  })

})
