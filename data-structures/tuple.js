// Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Array desctructuring
function arrayTuple(m, n) {
  return [m, n];
}
let [m, n] = arrayTuple(1, 2);
console.log(m, n);

// Object desctructuring
function objectTuple(m, n) {
  return { m, n };
}

let { k, l } = objectTuple(3, 4);
({ m, n } = objectTuple(1, 2)); // parenthese are required
console.log(m, n);
console.log(k, l);
