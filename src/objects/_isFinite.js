export default function _isFinite(obj) {
  return isFinite(obj) && !isNaN(parseFloat(obj))
}
