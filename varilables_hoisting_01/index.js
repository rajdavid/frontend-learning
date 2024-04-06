
// var
console.log(varVariable); // Output: undefined
var varVariable = 'Hello, var!';
console.log(varVariable); // Output: Hello, var!

// let
console.log(letVariable); // Output: ReferenceError: letVariable is not defined
let letVariable = 'Hello, let!';
console.log(letVariable); // Output: Hello, let!

// const
console.log(constVariable); // Output: ReferenceError: constVariable is not defined
const constVariable = 'Hello, const!';
console.log(constVariable); // Output: Hello, const!

// Scope example
function scopeExample() {
    var varVariable = 'Inside function';
    let letVariable = 'Inside function';
    const constVariable = 'Inside function';
    console.log(varVariable); // Output: Inside function
    console.log(letVariable); // Output: Inside function
    console.log(constVariable); // Output: Inside function
}

scopeExample();
console.log(varVariable); // Output: Hello, var!
console.log(letVariable); // Output: Hello, let!
console.log(constVariable); // Output: Hello, const!