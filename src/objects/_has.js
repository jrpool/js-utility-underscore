export default function _has(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key)
}
