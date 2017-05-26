/*
  Function declaration for _flatten and export statement making that
  function the default export from this module.
  Arguments:
    array: array.
    shallow (optional): whether to limit flattening to top level. Default false.
  Preconditions:
    0. array is a nonsparse array.
    1. shallow is boolean.
*/
export default function _flatten(array, shallow = false) {
  // If the arguments are valid:
  if (
    array !== undefined
    && Array.isArray(array)
    && array.length === Object.keys(array).length
    && (shallow !== undefined || typeof shallow === 'boolean')
  ) {
    // Initialize a result.
    let result = []
    // For each element:
    for (let i = 0; i < array.length; i++) {
      // If it is an array:
      if (Array.isArray(array[i])) {
        /*
          Concatenate it (if shallow) or its flattened array (if not shallow)
          to the result.
        */
        result = result.concat(shallow ? array[i] : _flatten(array[i]))
      }
      // Otherwise, i.e. if it is not an array:
      else {
        // Add it to the end of the result.
        result.push(array[i])
      }
    }
    // Return the result.
    return result
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    // Return undefined.
    return undefined
  }
}
