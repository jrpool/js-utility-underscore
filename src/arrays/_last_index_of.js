/*
  Function declaration for _lastIndexOf and export statement making that
  function the default export from this module.
  Arguments:
    array: array.
    value: value to find last index of in array.
    fromIndex (optional): index to start looking from.
  Preconditions:
    0. array is nonsparse.
    1. array contains no object, array, or function.
    2. fromIndex is a nonnegative integer.
*/
export default function _lastIndexOf(array, value, fromIndex = 0) {
  // Define a function to validate an element.
  const isValidEl = element => !(
    Array.isArray(element) || ['function', 'object'].includes(typeof element)
  )
  // If the arguments are superficially valid:
  if (
    arguments.length > 1
    && arguments.length < 4
    && array !== undefined
    && Array.isArray(array)
    && array.length === Object.keys(array).length
    && (
      fromIndex === undefined
      || (
        typeof fromIndex === 'number'
        && Math.ceil(fromIndex) === Math.floor(fromIndex)
        && fromIndex >= 0
      )
    )
  ) {
    // For each element of array:
    for (let i = 0; i < array.length; i++) {
      // If it is invalid:
      if (! isValidEl(array[i])) {
        return undefined
      }
    }
    // Return the result.
    const lastIndex = array.slice(fromIndex).lastIndexOf(value)
    return lastIndex > -1 ? lastIndex + fromIndex : -1
  }
  // Otherwise, i.e. if the arguments are superficially invalid:
  else {
    // Return undefined.
    return undefined
  }
}
