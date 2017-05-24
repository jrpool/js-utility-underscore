export default function _isArguments(obj) {
  return toString.call(obj) === '[object Arguments]'
}
