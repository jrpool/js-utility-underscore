export default function _isObject(obj) {
  const type = typeof obj
  return type === 'function' || type === 'object'
}
