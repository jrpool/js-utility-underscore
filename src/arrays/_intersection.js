/*
  Function declaration for _intersection and export statement making that
  function the default export from this module.
  Preconditions:
    0. There is at least 1 argument.
    1. All arguments are nonsparse arrays, none of whose elements in an array,
      function, or object.
*/
export default function _intersection() {
  // Define a function to superficially validate an argument.
  const isValidArg = function(arg) {
    return (Array.isArray(arg) && Object.keys(arg).length === arg.length)
  }
  // Define a function to validate an element.
  const isValidEl = function(element) {
    return (!(
      Array.isArray(element) || ['function', 'object'].includes(typeof element)
    ))
  }
  // If the arguments are superficially valid:
  if (arguments.length) {
    // For each argument:
    for (let i = 0; i < arguments.length; i++) {
      // If it is superficially valid:
      if (isValidArg(arguments[i])) {
        // For each of its elements:
        for (let j = 0; j < arguments[i].length; j++) {
          // If it is invalid:
          if (! isValidEl(arguments[i][j])) {
            return undefined
          }
        }
      }
      // Otherwise, i.e. if the argument is superficially invalid:
      else {
        return undefined
      }
    }
  }
  // Otherwise, i.e. if the arguments are superficially invalid:
  else {
    return undefined
  }
  // All arguments, and all their elements, are valid.
  // Initialize a result.
  let result = []
  // For each element of argument 0:
  arg0: for (let k = 0; k < arguments[0].length; k++) {
    // If it is already in the result:
    if (result.includes(arguments[0][k])) {
      // Stop checking the element.
      continue
    }
    // For each other argument:
    for (let l = 1; l < arguments.length; l++) {
      // If it fails to include the element of argument 0:
      if (! arguments[l].includes(arguments[0][k])) {
        // Stop checking the element of argument 0.
        continue arg0
      }
    }
    // All other arguments include the element of argument 0.
    // Append that element to the result.
    result.push(arguments[0][k])
  }
  return result
}
