import _isArguments from '../../src/objects/_isArguments'
import _isArray from '../../src/objects/_isArray'
import _isString from '../../src/objects/_isString'
import _keys from '../../src/objects/_keys'

const property = function(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key]
  }
}

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
const getTheLength = property('length')

const isLikeArray = (collection) => {
  const length = getTheLength(collection)
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
}

export default function _isEmpty(obj) {
  if (obj == null) {
    return true
  }
  if (isLikeArray(obj) && (_isArray(obj) || _isString(obj) || _isArguments(obj))) {
    return obj.length === 0
  }
  return _keys(obj).length === 0
}
