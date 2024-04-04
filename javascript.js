// What is JavaScript?

// JavaScript is a high-level, 
// interpreted programming language primarily used 
// for adding interactivity and behavior to web pages.
//  It is widely used for client-side scripting in web
//  development, enabling dynamic content, form validation,
//  and interactive features. Additionally, JavaScript can also be 
// used for server-side development (Node.js), 
// desktop application development, and more.



// What are the basic data types in JavaScript?

// Number: represents numeric values.
// String: represents textual data.
// Boolean: represents true or false values.
// Undefined: represents a variable that has been declared but not assigned a value.
// Null: represents the intentional absence of any value.
// Symbol: represents unique identifiers (added in ES6).
// Object: represents collections of key-value pairs, functions, or other data types.



// How do you declare a variable in JavaScript?

// In JavaScript, you can declare a variable using 
// the var, let, or const keywords, followed by 
// the variable name. Here are examples of each:

// Using var (function-scoped)
var x = 10;

// Using let (block-scoped, allows reassignment)
let y = "Hello";

// Using const (block-scoped, immutable value)
const z = true;



// What is the difference between let, const, and var in JavaScript?

// var: Function-scoped, hoisted, and can be redeclared and reassigned.
// let: Block-scoped, hoisted, and can be reassigned but not redeclared.
// const: Block-scoped, hoisted, and cannot be reassigned after declaration,
//  but the properties of objects and elements of arrays can still be modified.



// What are the different ways to include JavaScript in HTML?

/*
Inline script: Use the <script> tag directly in the HTML file.
External script file: Link an external JavaScript file using the <script src="file.js"></script> tag.
Event attributes: Attach JavaScript code directly to HTML elements using event attributes like onclick.
HTML DOM: Access and manipulate HTML elements using JavaScript within <script> tags in the HTML file.

*/


// What is the purpose of the "use strict" directive in JavaScript?

/*
The "use strict" directive in JavaScript enables strict mode,
 which helps catch common coding errors and promotes safer code 
 by enforcing stricter rules. It helps prevent silent errors, 
 such as undeclared variables, and encourages better coding practices.
*/



// How do you print output in JavaScript?

/*
In JavaScript, you can print output to the console 
using the console.log() method:
console.log("Hello, world!");
This will display "Hello, world!" in the console of your browser's 
developer tools or the console of a Node.js environment.
*/


// What are JavaScript operators?

/*
JavaScript operators are symbols that perform operations on values, 
such as arithmetic (+, -, *, /), assignment (=), 
comparison (==, ===, !=, !==, >, <, >=, <=), 
logical (&&, ||, !), bitwise (&, |, ^, ~, <<, >>, >>>),
 unary (++, --, typeof), and ternary (conditional ? :).

*/


// What is the difference between == and === operators in JavaScript?


/*
The == operator in JavaScript checks for equality of values, 
performing type coercion if necessary. For example, 1 == '1' 
evaluates to true.

On the other hand, the === operator, also known as the strict equality operator, 
checks for both value and type equality without any type coercion. 
For example, 1 === '1' evaluates to false because the types are different.
*/




