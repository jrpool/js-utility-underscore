import { expect } from 'chai'
import _compact from '../../src/arrays/_compact'

describe('_compact', function() {

  it('is a function', function() {
    expect(_compact).to.be.a('function')
  })

  it('_compact() returns empty array when given an empty array', function() {
    const emptyArray = []
    expect(_compact(emptyArray)).to.deep.equal([])
  })

  it('_compact() returns array without falsy elements', function() {
    let anArray = [
      1, undefined, [2], false, {key: '3'}, null, '4', 0, 5, NaN, 6, ''
    ]
    expect(_compact(anArray)).to.deep.equal([1, [2], {key: '3'}, '4', 5, 6])
  })
  it('_compact() returns undefined when given a sparse array', function() {
    const anArray = []
    anArray[2] = 'third'
    expect(_compact(anArray)).to.be.undefined
  })
  it('_compact() returns undefined when given a number', function() {
    const nonArray = 2
    expect(_compact(nonArray)).to.be.undefined
  })
  it('_compact() returns undefined when given a string', function() {
    const nonArray = 'stuff'
    expect(_compact(nonArray)).to.be.undefined
  })
  it('_compact() returns undefined when given a nonarray object', function() {
    const nonArray = {key: 1}
    expect(_compact(nonArray)).to.be.undefined
  })

})
