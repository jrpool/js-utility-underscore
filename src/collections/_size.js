/*
  Function declaration for _size and export statement making that
  function the default export from this module.
  Arguments:
    list
  Preconditions:
    0. The argument count is 1.
    1. list is iterable
*/
export default function _size(list) {
  // If the argument is valid:
  if (
    arguments.length === 1
    && list !== undefined
    && list !== null
    && (Array.isArray(list) || typeof list === 'object')
  ) {
    // Return its size.
    return Object.keys(list).length
  }
  // Otherwise, i.e. if the argument is invalid:
  else {
    // Return undefined.
    return undefined
  }
}
