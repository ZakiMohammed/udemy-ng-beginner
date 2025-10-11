// Scope: Global, Local, Block (ES6 - 2015)
// Variable Scope: var, let, const (ES6)

// Global Scope

var a = 1;

console.log(a);

// Local Scope

function localScope() {
  var b = 2;
  console.log(b);
}

localScope();

// Block Scope [let, const]

if (true) {
  let c = 3;
  const d = 5;
  console.log(c);
  console.log(d);
}

// console.log(c); // ReferenceError: c is not defined
// console.log(d); // ReferenceError: d is not defined

const e = 4;

console.log(e);

// e = 5; // TypeError: Assignment to constant variable.

// const f;  // SyntaxError: Missing initializer in const declaration

// Convention
// const name = ''
// let name = ''