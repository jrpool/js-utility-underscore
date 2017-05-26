/*
  Function declaration for _compact and export statement making that
  function the default export from this module.
  Arguments:
    array: array.
  Preconditions:
    0. array is a nonsparse array.
*/
export default function _compact(array) {
  // If the arguments are valid:
  if (
    array !== undefined
    && Array.isArray(array)
    && array.length === Object.keys(array).length
  ) {
    const isTruthy = value => !! value
    return array.filter(isTruthy)
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    // Return undefined.
    return undefined
  }
}
