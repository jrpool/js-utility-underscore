import { expect } from 'chai'
import _initial from '../../src/arrays/_initial'

describe('_initial', function() {

  it('is a function', function() {
    expect(_initial).to.be.a('function')
  })

  context('empty array', function() {
    it('_initial() with no n argument returns undefined', function() {
      const emptyArray = []
      expect(_initial(emptyArray)).to.be.undefined
    })
    it('_initial() with a positive n argument returns undefined', function() {
      const emptyArray = []
      expect(_initial(emptyArray, 5)).to.be.undefined
    })
    it('_initial() with a negative n argument returns undefined', function() {
      const emptyArray = []
      expect(_initial(emptyArray, -5)).to.be.undefined
    })
    it('_initial() with a +infinity n argument returns undefined', function() {
      const emptyArray = []
      expect(_initial(emptyArray, Infinity)).to.be.undefined
      expect(_initial(emptyArray, Number.POSITIVE_INFINITY)).to.be.undefined
    })
    it('_initial() with a -infinity n argument returns undefined', function() {
      const emptyArray = []
      expect(_initial(emptyArray, -Infinity)).to.be.undefined
      expect(_initial(emptyArray, Number.NEGATIVE_INFINITY)).to.be.undefined
    })
    it('_initial() with n === 0 returns undefined', function() {
      const emptyArray = []
      expect(_initial(emptyArray, 0)).to.be.undefined
    })
  })

  context('nonempty array', function() {
    it('_initial() with no n returns an array without the last element', function() {
      const array0 = [undefined, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_initial(array0)).to.deep.equal([undefined, [3],
        [4, 5], '6'
      ])
      const array1 = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_initial(array1)).to.deep.equal([2, [3],
        [4, 5], '6'
      ])
    })
    it(
      '_initial() with 1 < n < length returns array of all but last n elements',
      function() {
        const anArray = [2, [3],
          [4, 5], '6', { item: 7, thing: 8 }
        ]
        expect(_initial(anArray, 2)).to.deep.equal([2, [3],
          [4, 5]
        ])
        expect(_initial(anArray, 3)).to.deep.equal([2, [3]])
        expect(_initial(anArray, 4)).to.deep.equal([2])
        expect(_initial(anArray, 5)).to.deep.equal([])
      }
    )
    it(
      '_initial() with n > length returns an empty array',
      function() {
        const anArray = [2, [3],
          [4, 5], '6', { item: 7, thing: 8 }
        ]
        expect(_initial(anArray, 6))
          .to.deep.equal([])
      }
    )
    it('_initial() with a negative n argument returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_initial(anArray, -5)).to.be.undefined
    })
    it('_initial() with a +infinity n returns an empty array', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_initial(anArray, Infinity)).to.deep.equal([])
      expect(_initial(anArray, Number.POSITIVE_INFINITY)).to.deep.equal([])
    })
    it('_initial() with a -infinity n argument returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_initial(anArray, -Infinity)).to.be.undefined
      expect(_initial(anArray, Number.NEGATIVE_INFINITY)).to.be.undefined
    })
    it('_initial() with n === 0 returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_initial(anArray, 0)).to.be.undefined
    })
    it('_initial() with non-integer n returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_initial(anArray, 1.5)).to.be.undefined
    })
    it('_initial() with non-number n returns undefined', function() {
      const anArray = [2, [3],
        [4, 5], '6', { item: 7, thing: 8 }
      ]
      expect(_initial(anArray, '2')).to.be.undefined
    })
  })

  context('sparse array', function() {
    it('_initial() with no n returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_initial(anArray)).to.be.undefined
    })
    it('_initial() with positive n returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_initial(anArray, 1)).to.be.undefined
    })
  })

  context('nonarray', function() {
    it('_initial() with number and no n returns undefined', function() {
      const nonArray = 2
      expect(_initial(nonArray)).to.be.undefined
    })
    it('_initial() with object and positive n returns undefined', function() {
      const nonArray = { item: 7, thing: 8 }
      expect(_initial(nonArray, 1)).to.be.undefined
    })
    it('_initial() with string and negative n returns undefined', function() {
      const nonArray = 'aString'
      expect(_initial(nonArray, -2)).to.be.undefined
    })
  })

})
