/*
  Function declaration for _identity and export statement making that
  function the default export from this module.
  Arguments:
    value.
*/
export default function _identity(value) {
  // If the argument is valid:
  if (arguments.length === 1) {
    // Return it.
    return value;
  }
  // Otherwise, i.e. if the argument is invalid:
  else {
    // Return undefined.
    return undefined;
  }
}
