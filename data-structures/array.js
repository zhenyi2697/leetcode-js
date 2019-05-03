// Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
// Not supported in IE

// 1d
const l = new Array(5);
console.log(l.length);
console.log(l[0]); // undefined
console.log(l[5]); // undefined

// 1d init to x
const x = 0;
const n = 100;
const m = 200;
const k = 300;
const lx = new Array(n).fill(x);

// 2d init to x
const llx = new Array(m).fill(x).map(_ => new Array(n).fill(x));

// 3d init to x
const lllx = new Array(k)
  .fill(x)
  .map(_ => new Array(m).fill(x).map(_ => new Array(n).fill(x)));
