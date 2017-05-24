const _isArray = Array.isArray || function(arg) {
  return toString.call(arg) === '[object Array]'
}

export default _isArray
