/*
  Function declaration for _union and export statement making that
  function the default export from this module.
  Preconditions:
    0. There is at least 1 argument.
    1. All arguments are nonsparse arrays, none of whose elements in an array,
      function, or object.
*/
export default function _union() {
  // Define a function to validate an element.
  const isValid = (element) => !(
    Array.isArray(element) || ['function', 'object'].includes(typeof element)
  )
  // If the arguments are superficially valid:
  if (arguments.length) {
    // Initialize a result.
    let result = []
    // For each argument:
    for (let i = 0; i < arguments.length; i++) {
      // If it is superficially valid:
      if (
        Array.isArray(arguments[i])
        && Object.keys(arguments[i]).length === arguments[i].length
      ) {
        // For each element:
        for (let j = 0; j < arguments[i].length; j++) {
          // If it is valid:
          if (isValid(arguments[i][j])) {
            // If it is not yet in the result:
            if (! result.includes(arguments[i][j])) {
              // Append it to the result.
              result.push(arguments[i][j])
            }
          }
          // Otherwise, i.e. if it is invalid:
          else {
            return undefined
          }
        }
      }
      // Otherwise, i.e. if it is superficially invalid:
      else {
        return undefined
      }
    }
    return result
  }
  // Otherwise, i.e. if the arguments are superficially invalid:
  else {
    return undefined
  }
}
