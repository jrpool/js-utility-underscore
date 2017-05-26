const _isArray = Array.isArray || (arg => toString.call(arg) === '[object Array]')

export default _isArray
