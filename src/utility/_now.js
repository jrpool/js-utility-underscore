/*
  Function declaration for _now and export statement making that
  function the default export from this module.
*/
export default function _now() {
  // If the argument count is valid:
  if (! arguments.length) {
    return Date.now();
  }
  // Otherwise, i.e. if there are any arguments:
  else {
    return undefined;
  }
}
