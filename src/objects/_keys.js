import _isObject from '../../src/objects/_isObject'
export default function _keys(obj) {

  if (!_isObject(obj)) {
    return []
  }
  let keys = []
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      keys.push(key)
    }
  }
  return keys
}
