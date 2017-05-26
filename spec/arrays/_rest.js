import { expect } from 'chai'
import _rest from '../../src/arrays/_rest'

describe('_rest', function() {

  it('is a function', function() {
    expect(_rest).to.be.a('function')
  })

  context('empty array', function() {
    it('_rest() with no n argument returns undefined', function() {
      const emptyArray = []
      expect(_rest(emptyArray)).to.be.undefined
    })
    it('_rest() with a positive n argument returns undefined', function() {
      const emptyArray = []
      expect(_rest(emptyArray, 5)).to.be.undefined
    })
    it('_rest() with a negative n argument returns undefined', function() {
      const emptyArray = []
      expect(_rest(emptyArray, -5)).to.be.undefined
    })
    it('_rest() with a +infinity n argument returns undefined', function() {
      const emptyArray = []
      expect(_rest(emptyArray, Infinity)).to.be.undefined
      expect(_rest(emptyArray, Number.POSITIVE_INFINITY)).to.be.undefined
    })
    it('_rest() with a -infinity n argument returns undefined', function() {
      const emptyArray = []
      expect(_rest(emptyArray, -Infinity)).to.be.undefined
      expect(_rest(emptyArray, Number.NEGATIVE_INFINITY)).to.be.undefined
    })
    it('_rest() with n === 0 returns undefined', function() {
      const emptyArray = []
      expect(_rest(emptyArray, 0)).to.be.undefined
    })
  })

  context('nonempty array', function() {
    it('_rest() with no n returns an array without first element', function() {
      const array0 = [undefined, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_rest(array0))
        .to.deep.equal([
          [3],
          [4, 5], '6', { item: 7, thing: 8 }
        ])
      const array1 = [
        [3],
        [4, 5], '6', { item: 7, thing: 8 },
        undefined
      ]
      expect(_rest(array1))
        .to.deep.equal([
          [4, 5], '6', { item: 7, thing: 8 },
          undefined
        ])
    })
    it(
      '_rest() with 0 ≤ n < length returns array of nth through last element',
      function() {
        const anArray = [2, [3],
          [4, 5], '6', { item: 7, thing: 8 }
        ]
        expect(_rest(anArray, 0))
          .to.deep.equal([2, [3],
            [4, 5], '6', { item: 7, thing: 8 }
          ])
        expect(_rest(anArray, 1))
          .to.deep.equal([
            [3],
            [4, 5], '6', { item: 7, thing: 8 }
          ])
        expect(_rest(anArray, 4)).to.deep.equal([{ item: 7, thing: 8 }])
        expect(_rest(anArray, 5)).to.deep.equal([])
      }
    )
    it(
      '_rest() with n ≥ length returns an empty array',
      function() {
        const anArray = [2, [3],
          [4, 5], '6', { item: 7, thing: 8 }
        ]
        expect(_rest(anArray, 6))
          .to.deep.equal([])
      }
    )
    it('_rest() with a negative n argument returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_rest(anArray, -5)).to.be.undefined
    })
    it('_rest() with a +infinity n returns an empty array', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_rest(anArray, Infinity)).to.deep.equal([])
      expect(_rest(anArray, Number.POSITIVE_INFINITY)).to.deep.equal([])
    })
    it('_rest() with a -infinity n argument returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_rest(anArray, -Infinity)).to.be.undefined
      expect(_rest(anArray, Number.NEGATIVE_INFINITY)).to.be.undefined
    })
    it('_rest() with non-integer n returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_rest(anArray, 1.5)).to.be.undefined
    })
    it('_rest() with non-number n returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_rest(anArray, '2')).to.be.undefined
    })
  })

  context('sparse array', function() {
    it('_rest() with no n returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_rest(anArray)).to.be.undefined
    })
    it('_rest() with positive n returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_rest(anArray, 1)).to.be.undefined
    })
  })

  context('nonarray', function() {
    it('_rest() with number and no n returns undefined', function() {
      const nonArray = 2
      expect(_rest(nonArray)).to.be.undefined
    })
    it('_rest() with object and positive n returns undefined', function() {
      const nonArray = { item: 7, thing: 8 }
      expect(_rest(nonArray, 1)).to.be.undefined
    })
    it('_rest() with string and negative n returns undefined', function() {
      const nonArray = 'aString'
      expect(_rest(nonArray, -2)).to.be.undefined
    })
  })

})
