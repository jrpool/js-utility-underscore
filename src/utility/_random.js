/*
  Function declaration for _random and export statement making that
  function the default export from this module.
  Arguments:
    value0.
    value1 (optional).
  Preconditions:
    0. The argument count is 1 or 2.
    1. Each argument is an integer.
    2. value1 <= value2.
*/
export default function _random(min, max) {
  // If the argument count is valid:
  if (arguments.length === 1 || arguments.length === 2) {
    // For each argument:
    for (let i = 0; i < arguments.length; i++) {
      // If it is invalid:
      if (
        typeof arguments[i] !== 'number'
        || Math.ceil(arguments[i]) !== Math.floor(arguments[i])
      ) {
        return undefined;
      }
    }
    // Each argument is an integer.
    // If there is only 1 argument and it is negative:
    if (arguments.length === 1 && arguments[0] < 0) {
      return undefined;
    }
    // If there are 2 arguments and min > max:
    if (arguments.length === 2 && arguments[0] > arguments[1]) {
      return undefined;
    }
    // If there is only 1 argument:
    if (arguments.length === 1) {
      // Assign min and max.
      max = min;
      min = 0;
    }
    // Return a random number between min and max, inclusive.
    return min + Math.floor(Math.random() * (max + 1 - min));
  }
  // Otherwise, i.e. if the argument is invalid:
  else {
    // Return undefined.
    return undefined;
  }
}
