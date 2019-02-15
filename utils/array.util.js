/**
 * Check if elements in two arrays are identical
 * @param {*} a1
 * @param {*} a2
 */
export const isEqualArray = (a1, a2) => {
  if (a1.length !== a2.length) {
    return false;
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }

  return true;
};
