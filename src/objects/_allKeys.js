import _isObject from '../../src/objects/_isObject'
export default function _allKeys(obj) {
  if (!_isObject(obj)) {
    return []
  }
  let keys = []
  for (let key in obj) {
    keys.push(key)
  }
  return keys
}
