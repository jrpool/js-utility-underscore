/*
  Function declaration for _contains and export statement making that
  function the default export from this module.
  Arguments:
    list
    value
    fromIndex (optional)
  Preconditions:
    0. The argument count is 2 or 3.
    1. list is an array or an object.
    2. fromIndex is a nonnegative integer.
*/
export default function _size(list, value, fromIndex = 0) {
  // If the arguments are valid:
  if (
    arguments.length > 1 && arguments.length < 4
    && list !== undefined
    && list !== null
    && (Array.isArray(list) || typeof list === 'object')
    && ! Array.isArray(value)
    && typeof value !== 'object'
    && (
      arguments.length === 2
      || (
        typeof fromIndex === 'number'
        && Math.ceil(fromIndex) === Math.floor(fromIndex)
        && fromIndex >= 0
      )
    )
  ) {
    // Identify an array of values to be searched.
    const searchList = Array.isArray(list) ? list : Object.keys(list)
    // Return whether list, from fromIndex to the end, contains value.
    return searchList.slice(fromIndex).includes(value)
  }
  // Otherwise, i.e. if the argument is invalid:
  else {
    // Return undefined.
    return undefined
  }
}
