const l = [];

// Add last
l.push(1); // [1]

// Add first
l.unshift(0); //[0, 1]

// Remove last
const last = l.pop(); // last = 1, l = [0]

// Remove first
const first = l.shift(); // first = 0, l = [];

// Return undefined if element not exist
l.shift() // undefined

// Access by index
l.push(1);
l[0] // 1
l[1] // undefined