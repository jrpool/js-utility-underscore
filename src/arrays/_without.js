/*
  Function declaration for _without and export statement making that
  function the default export from this module.
  Arguments:
    array: array.
    * (optional)
  Preconditions:
    0. array is a nonsparse array, none of whose elements in an array,
      function, or object.
*/
export default function _without(array) {
  // Define a function to validate an element.
  const isValid = element => !(
    Array.isArray(element) || ['function', 'object'].includes(typeof element)
  )
  // If the arguments are valid:
  if (
    array !== undefined
    && Array.isArray(array)
    && array.length === Object.keys(array).length
    && array.every(isValid)
  ) {
    // Initialize a result.
    let result = []
    // Initialize an array of values to be pruned.
    let prune = []
    // Identify an array of the values to be pruned.
    for (let i = 1; i < arguments.length; i++) {
      prune.push(arguments[i])
    }
    // For each element of the array:
    for (let i = 0; i < array.length; i++) {
      // If it is not to be pruned:
      if (! prune.includes(array[i])) {
        // Append it to the result.
        result.push(array[i])
      }
    }
    return result
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    // Return undefined.
    return undefined
  }
}
