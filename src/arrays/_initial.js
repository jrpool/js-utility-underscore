/*
  Function declaration for _initial and export statement making that
  function the default export from this module.
  Arguments:
    array: array.
    n (optional): element count.
  Preconditions:
    0. array is a nonempty, nonsparse array.
    1. n is a positive integer.
*/
export default function _initial(array, n = 1) {
  // If the arguments are valid:
  if (
    array !== undefined
    && Array.isArray(array)
    && array.length
    && array.length === Object.keys(array).length
    && (
      n === undefined
      || (
        typeof n === 'number'
        && Math.ceil(n) === Math.floor(n)
        && n > 0
      )
    )
  ) {
    // Return the first n elements as an array.
    return array.slice(0, - n)
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    // Return undefined.
    return undefined
  }
}
