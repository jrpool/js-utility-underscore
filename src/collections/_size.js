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
    && arguments[0] !== undefined
    && arguments[0] !== null
    && (Array.isArray(arguments[0]) || typeof arguments[0] === 'object')
  ) {
    // Return its size.
    return Object.keys(arguments[0]).length;
  }
  // Otherwise, i.e. if the argument is invalid:
  else {
    // Return undefined.
    return undefined;
  }
}
