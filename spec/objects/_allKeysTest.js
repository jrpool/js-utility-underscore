import { expect } from 'chai'
import _allKeys from '../../src/objects/_allKeys'

function Car(name) {
  this.name = name
}
Car.prototype.wheels = 4

describe('_allKeys()', () => {
  it('should be a function', () => {
    expect(_allKeys).to.be.a('function')
  })
  it('retrieve all the names of object own and inherited properties', () => {

    expect(_allKeys(new Car('Corvette'))).to.eql(['name', 'wheels'])
  })
  it('returns all key names when given an object that has key/value pairs', () => {
    expect(_allKeys({ a: 1, b: 2, c: 3 })).to.eql(['a', 'b', 'c'])
  })
  it('returns an empty array if the function is not given any input', () => {
    expect(_allKeys()).to.eql([])
  })
  it('returns an empty array if the function is given a string as input', () => {
    expect(_allKeys('thing')).to.eql([])
  })
  it('returns an empty array if the function is given a number as input', () => {
    expect(_allKeys(2)).to.eql([])
  })
  it('returns an empty array if given an empty object as input', () => {
    expect(_allKeys({})).to.eql([])
  })
})
