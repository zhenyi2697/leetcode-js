// Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Construct empty map
const m = new Map();

// Construct from array
const m2 = new Map([[1, 'one'], [2, 'two']]);

m.set(1, 'one');
m.set(2, 'two');
m.set(3, 'three');
m.delete(3);
console.log(m.size); // 2
console.log(m.has(3)); // false
console.log(m.get(4)); // undefined

// Iterate over elements in INSERTION order
for (let [key, value] of m.entries()) {
  console.log(`${key} => ${value}`);
}

// Use the Array.from function to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // [[1, 'one'], [2, 'two']]

// A more succinct way to do the same with spread syntax
console.log([...m]); // [[1, 'one'], [2, 'two']]
