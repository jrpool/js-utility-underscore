import _allKeys from '../../src/objects/_allKeys'

export default function _extend(obj) {
  const length = arguments.length
  if (length < 2 || obj == null) {
    return obj
  }
  for (let index = 1; index < length; index++) {
    let source = arguments[index]
    let keys = _allKeys(source)
    let l = keys.length
    for (let i = 0; i < l; i++) {
      let key = keys[i]
      obj[key] = source[key]
    }
  }
  return obj
}
