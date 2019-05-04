const q = [];

// offer
q.push(1);
q.push(2);

// peek
console.log(q[0]); // 1

// poll
q.shift(); // 1
q.shift(); // 2

// offer first
q.unshift(1);
q.unshift(2);

// poll last
q.pop(); // 2
q.pop(); // 1

console.log(q.length); // 0
