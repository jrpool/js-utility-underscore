import chai from 'chai'
import { expect } from 'chai'
import _extend from '../../src/objects/_extend'

describe.only('_extend()', () => {
  it('should be a function', () => {
    expect(_extend).to.be.a('function')
  })
  it('copies properties of source object over to destination object', () => {
    expect(_extend({ name: 'Keith' }, { age: 36 })).to.eql({ name: 'Keith', age: 36 })
  })
  it('copies nested properties by reference. does not duplicate', () => {
    expect(_extend({ 'blah': { 'stuff': 'things' } }, { 'blah': { 'notStuff': 'garbage' } }))
      .to.eql({ 'blah': { 'notStuff': 'garbage' } })
  })
  it('copies additional nested properties and nesting format stays intact', () => {
    expect(_extend({ 'blah': { 'stuff': 'things' } }, { 'first': 1, 'second': 2, 'third': 3 }))
      .to.eql({ 'blah': { 'stuff': 'things' }, 'first': 1, 'second': 2, 'third': 3 })
  })
  it('copies properties from numerous source objects to destination', () => {
    expect(_extend({ 'blah': { 'stuff': 'things' } }, { 'blah': { 'notStuff': 'garbage' } }, { 'blah': { 'notStuff': 'trash' } }))
      .to.eql({ 'blah': { 'notStuff': 'trash' } })
  })
  it('copies elements of source array object to destination array object', () => {
    expect(_extend([1, 2, 3], [4, 5, 6])).to.eql([4, 5, 6])
  })
  it('will handle copy elements of source to destination when arrays are different sizes', () => {
    expect(_extend([1, 2, 3], [4, 5])).to.eql([4, 5, 3])
  })
  it('copies elements from numerous source array objects to the destination array', () => {
    expect(_extend([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11], [12, 13, 14, 15], [16])).to.eql([16, 13, 14, 15, 11, 6])
  })
  it('returns an empty array if given an empty array as input', () => {
    expect(_extend([])).to.eql([])
  })
  it('returns an empty object if given an empty object as the input', () => {
    expect(_extend({})).to.eql({})
  })
})
