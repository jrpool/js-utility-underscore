import _keys from '../../src/objects/_keys'
export default function _values(obj) {
  const keys = _keys(obj)
  const length = keys.length
  const values = Array(length)
  for (let i = 0; i < length; i++) {
    values[i] = obj[keys[i]]
  }
  return values
}
