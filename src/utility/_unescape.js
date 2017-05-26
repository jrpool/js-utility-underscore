/*
  Function declaration for _escape and export statement making that
  function the default export from this module.
  Arguments:
    string.
  Preconditions:
    0. The argument count is 1.
    1. The argument is a string.
*/
export default function _escape(string) {
  // If the argument is valid:
  if (arguments.length === 1 && typeof arguments[0] === 'string') {
    // Define a table of character entities.
    const escaper = {
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#x60;': '`',
      '&#96;': '`',
      '&#x27;': '\'',
      '&amp;': '&'
    }
    // Identify a copy of the string.
    let unescapedString = string.slice();
    // For each character entity to be unescaped:
    for (let original in escaper) {
      // Replace its tokens in the string copy with the represented character.
      unescapedString
        = unescapedString.replace(RegExp(original, 'g'), escaper[original]);
    }
    return unescapedString;
  }
  // Otherwise, i.e. if the argument is invalid:
  else {
    // Return undefined.
    return undefined;
  }
}
