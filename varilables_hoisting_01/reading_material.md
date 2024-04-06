https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/

Temporal dead zone ::https://dillionmegida.com/p/temporal-dead-zone-in-javascript/


Q1. How do var, let, and const differ in terms of scope?

A1. var is function-scoped or globally scoped if declared outside a function. let and const are block-scoped, meaning they are accessible only within the nearest set of curly braces.

Q2. Can you explain hoisting and which types of declarations are hoisted?

A2. Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. var declarations are hoisted and initialized with undefined. let and const are also hoisted but are not initialized, creating a temporal dead zone until the line where they are defined is executed.

Q3. What will the following code output and why?

console.log(x);
var x = 5;

A3. The code will output undefined due to the hoisting behavior of var. The declaration of x is hoisted to the top, but its initialization with 5 happens at the original line.

Q4. What does the following code snippet output, and why?

if (true) {
    var a = 5;
}
console.log(a);
A4. The output will be 5 because var is function-scoped or globally scoped when not within a function, hence accessible outside the block.

Q5. How does the following program behave, and why?

{
    let a = 5;
}
console.log(a);

A5. This will throw a ReferenceError since let declarations are block-scoped, and a is not accessible outside its block.

Q6. Does the following code throw an error? Justify your answer.

const b = 2;
b = 3;
A6. Yes, it throws a TypeError because const declares a constant that cannot be reassigned after its initial assignment.



Q7. What does this code output, and what concept does this illustrate?

var c = 1;
{
    var c = 2;
}
console.log(c);
A7. The output is 2, showcasing that var is not block-scoped but function-scoped, so the second assignment overrides the first.

Q8. Predict the output of the following code snippet:

let d = 'outside';
function testD() {
    console.log(d);
    let d = 'inside';
}
testD();
A8. This throws a ReferenceError due to the temporal dead zone. d inside testD() is not accessible before its declaration within the function.

Q9. Will this code result in an error?

const e = { name: 'JavaScript' };
e = { name: 'Python' };
A9. Yes, it results in a TypeError because reassigning a constant variable is not allowed. However, changing properties of an object declared with const is permissible.

Q10. Considering hoisting, what does the following output?

console.log(f);
let f = 10;
A10. This results in a ReferenceError because let declarations are hoisted but not initialized, contrary to var, which is initialized with undefined.

A10. This results in a ReferenceError because let declarations are hoisted but not initialized, contrary to var, which is initialized with undefined.

Q11. What is printed by this code?

for (var i=0; i<3; i++) {
    setTimeout(function() { console.log(i); }, 1);
}
A11. It prints 3 three times, after a delay, due to the function-scoped nature of var causing the last value of i to be captured by each function.

Q12. How does this loop behave differently when using let for the loop variable?

for (let j=0; j<3; j++) {
    setTimeout(function() { console.log(j); }, 1);
}
A12. It prints 0, 1, and 2 due to let being block-scoped, thus each iteration has its own scope capturing the current value of j.

Q13. Explain the outcome of the following:

let g = 10;
{
    var g = 20;
}
console.log(g);
A13. This code will result in a SyntaxError because g is declared within the same scope using both let and var, which is not allowed.

Q14. What will be the outcome of this code?

let h = 1;
function scopeTest() {
  console.log(h);
  let h = 2;
}
scopeTest();
A14. It throws a ReferenceError due to trying to access h before its declaration inside scopeTest, illustrating the temporal dead zone.

Q15. Why will this code fail to execute as expected?

const arrayConst = [1, 2, 3];
arrayConst.push(4);
console.log(arrayConst);
arrayConst = [];
A15. The code will correctly add 4 to arrayConst and log [1, 2, 3, 4], but it will throw a TypeError on attempting to reassign arrayConst with [] since constants cannot be reassigned.

These questions and answers cover fundamental and intricate aspects of var, let, const, scopes, hoisting, and behavior in different scenarios which are essential for understanding JavaScript's execution model and are valuable for interview preparation.