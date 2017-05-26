import chai from 'chai'
import { expect } from 'chai'
import _extend from '../../src/objects/_extend'

const testObj = { 'blah': { 'stuff': 'things' } }
const testObjTwo = { 'blah': { 'notStuff': 'garbage' } }
const testObjThree = { 'blah': { 'notStuff': 'trash' } }

describe('_extend()', function() {
  it('should be a function', function() {
    expect(_extend).to.be.a('function')
  })
  it('copies properties of source object over to destination object', function() {
    expect(_extend({ name: 'Keith' }, { age: 36 })).to.eql({ name: 'Keith', age: 36 })
  })
  it('copies nested properties by reference. does not duplicate', function() {
    expect(_extend(testObj, testObjTwo)).to.eql({ 'blah': { 'notStuff': 'garbage' } })
  })
  it('copies properties from numerous source objects to destination', function() {
    expect(_extend(testObj, testObjTwo, testObjThree)).to.eql({ 'blah': { 'notStuff': 'trash' } })
  })
  it('copies elements of source array object to destination array object', function() {
    expect(_extend([1, 2, 3], [4, 5, 6])).to.eql([4, 5, 6])
  })
  it('will handle copy elements of source to destination when arrays are different sizes', function() {
    expect(_extend([1, 2, 3], [4, 5])).to.eql([4, 5, 3])
  })
  it('copies elements from number source array objects to the destination array', function() {
    expect(_extend([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11], [12, 13, 14, 15], [16])).to.eql([16, 13, 14, 15, 11, 6])
  })
  it('returns an empty array if given an empty array as input', function() {
    expect(_extend([])).to.eql([])
  })
  it('returns an empty object if given an empty object as the input', function() {
    expect(_extend({})).to.eql({})
  })
})
