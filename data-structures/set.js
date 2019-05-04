// Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(1);

s.size; // 3
s.delete(3); // 3
s.has(3); // false

// Iterate over elements in INSERTION order
// s.keys(). s.values(), s.entries() will return the same iterator
for (let item of s) {
  console.log(item);
}

//(key and value are the same here)
for (let [key, value] of s.entries()) {
  console.log(key, value);
}
