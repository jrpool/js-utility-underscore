import _isObject from '../../src/objects/_isObject'
import _isArray from '../../src/objects/_isArray'
import _extend from '../../src/objects/_extend'

export default function _clone(obj) {
  if (!_isObject(obj)) {
    return obj
  }
  return _isArray(obj) ? obj.slice() : _extend({}, obj)
}
