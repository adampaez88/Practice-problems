// What is a potential pitfall with using (typeof bar === 'object') to determine if bar is an object?
// How can this pitfall be avoided?

// Although typeof bar === "object" is a reliable way of checking if bar is an object, the surprising gotcha 
// in JavaScript is that null is also considered an object!
// Therefore, the following code will, to the surprise of most developers, log true (not false) to the console:
var bar = null;
console.log(typeof bar === "object");  // logs true!

// As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:
console.log((bar !== null) && (typeof bar === "object"));  // logs false

// To be entirely thorough in our answer, there are two other things worth noting:
// First, the above solution will return false if bar is a function. In most cases, this is the desired 
// behavior, but in situations where you want to also return true for functions, you could amend the above 
// solution to be:
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));

// Second, the above solution will return true if bar is an array (e.g., if var bar = [];). In most cases, 
// this is the desired behavior, since arrays are indeed objects, but in situations where you want to also 
// false for arrays, you could amend the above solution to be:
console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));

// However, there’s one other alternative that returns false for nulls, arrays, and functions, but true 
// for objects:
console.log((bar !== null) && (bar.constructor === Object));

// Or, if you’re using jQuery:
console.log((bar !== null) && (typeof bar === "object") && (! $.isArray(bar)));

// ES5 makes the array case quite simple, including its own null check:
console.log(Array.isArray(bar));










// What will the code below output to the console and why?
(function(){
    var a = b = 3;
})();
console.log('a defined?' + (typeof a !== 'undefined'))
console.log('b defined?' + (typeof b !== 'undefined'))
// Since both a and b are defined within the enclosing scope of the function, and since the line
// they are on begins with the var keyword, most JavaScript developers would expect typeof a and
// typeof b to both be undefined in the above example.
// However, that is not the case. The issue here is that most developers incorrectly understand the
// statement var a = b = 3; to be shorthand for:

var b = 3;
var a = b;
// But in fact, var a = b = 3; is actually shorthand for:

b = 3;
var a = b;
// As a result (if you are not using strict mode), the output of the code snippet would be:

// a defined? false
// b defined? true
// But how can b be defined outside of the scope of the enclosing function? Well, since the statement 
// var a = b = 3; is shorthand for the statements b = 3; and var a = b;, b ends up being a global 
// variable (since it is not preceded by the var keyword) and is therefore still in scope even outside 
// of the enclosing function.

// Note that, in strict mode (i.e., with use strict), the statement var a = b = 3; will generate a 
// runtime error of ReferenceError: b is not defined, thereby avoiding any headfakes/bugs that might 
// othewise result. (Yet another prime example of why you should use use strict as a matter of course 
// in your code!)















// What will the code below output to the console and why?
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
// The above code will output the following to the console:

// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar

// In the outer function, both this and self refer to myObject and therefore both can properly 
// reference and access foo.
// In the inner function, though, this no longer refers to myObject. As a result, this.foo is 
// undefined in the inner function, whereas the reference to the local variable self remains 
// in scope and is accessible there.










// What is the significance of, and reason for, wrapping the entire content of a JavaScript source
//  file in a function block?

// This is an increasingly common practice, employed by many popular JavaScript libraries
// (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of 
// the file which, perhaps most importantly, creates a private namespace and thereby helps 
// avoid potential name clashes between different JavaScript modules and libraries.

// Another feature of this technique is to allow for an easily referenceable (presumably shorter)
// alias for a global variable. This is often used, for example, in jQuery plugins. jQuery 
// allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). 
// If this has been done, your code can still use $ employing this closure technique, as follows:

(function($) { /* jQuery plugin code referencing $ */ } )(jQuery);











// What is the significance, and what are the benefits, of including 'use strict' 
// at the beginning of a JavaScript source file?

// The short and most important answer here is that use strict is a way to voluntarily enforce stricter 
// parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise 
// have been ignored or would have failed silently will now generate errors or throw exceptions. 
// In general, it is a good practice.

// Some of the key benefits of strict mode include:
// Makes debugging easier: Code errors that would otherwise have been ignored or would have failed 
// silently will now generate errors or throw exceptions, alerting you sooner to problems in your 
// code and directing you more quickly to their source.

// Prevents accidental globals: Without strict mode, assigning a value to an undeclared variable 
// automatically creates a global variable with that name. This is one of the most common errors 
// in JavaScript. In strict mode, attempting to do so throws an error.

// Eliminates this coercion: Without strict mode, a reference to a this value of null or undefined 
// is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind 
// of bugs. In strict mode, referencing a a this value of null or undefined throws an error.

// Disallows duplicate parameter values: Strict mode throws an error when it detects a duplicate named 
// argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost 
// certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
// Note: It used to be (in ECMAScript 5) that strict mode would disallow duplicate property names 
// (e.g. var object = {foo: "bar", foo: "baz"};) but as of ECMAScript 2015 this is no longer the case.

// Makes eval() safer: There are some differences in the way eval() behaves in strict mode and in 
// non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an 
// eval() statement are not created in the containing scope (they are created in the containing scope 
// in non-strict mode, which can also be a common source of problems).

// Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) 
// cannot be used on non-configurable properties of the object. Non-strict code will fail silently when 
// an attempt is made to delete a non-configurable property, whereas strict mode will throw an error 
// in such a case.



















// What is NaN? What is its type? How can you reliably test if a value is equal to NaN?
// The NaN property represents a value that is “not a number”. This special value results from 
// an operation that could not be performed either because one of the operands was non-numeric 
// (e.g., "abc" / 4), or because the result of the operation is non-numeric.

// While this seems straightforward enough, there are a couple of somewhat surprising 
// characteristics of NaN that can result in hair-pulling bugs if one is not aware of them.

// For one thing, although NaN means “not a number”, its type is, believe it or not, Number:

// console.log(typeof NaN === "number");  // logs "true"
// Additionally, NaN compared to anything – even itself! – is false:

// console.log(NaN === NaN);  // logs "false"
// A semi-reliable way to test whether a number is equal to NaN is with the built-in function 
// isNaN(), but even using isNaN() is an imperfect solution.

// A better solution would either be to use value !== value, which would only produce true if the value 
// is equal to NaN. Also, ES6 offers a new Number.isNaN() function, which is a different and more reliable 
// than the old global isNaN() function.












// Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

// This may sound trivial and, in fact, it is trivial with ECMAscript 6 which introduces a new 
// Number.isInteger() function for precisely this purpose. However, prior to ECMAScript 6, this is 
// a bit more complicated, since no equivalent of the Number.isInteger() method is provided.

// The issue is that, in the ECMAScript specification, integers only exist conceptually; i.e., 
// numeric values are always stored as floating point values.

// With that in mind, the simplest and cleanest pre-ECMAScript-6 solution 
// (which is also sufficiently robust to return false even if a non-numeric value such as 
// a string or null is passed to the function) would be the following use of the bitwise XOR operator:
function isInteger(x) { return (x ^ 0) === x; } 

// The following solution would also work, although not as elegant as the one above:
function isInteger(x) { return Math.round(x) === x; }
// Note that Math.ceil() or Math.floor() could be used equally well (instead of Math.round()) 
// in the above implementation.

// Or alternatively:
function isInteger(x) { return (typeof x === 'number') && (x % 1 === 0); }

// One fairly common incorrect solution is the following:
function isInteger(x) { return parseInt(x, 10) === x; }

// While this parseInt-based approach will work well for many values of x, once x becomes quite large, 
// it will fail to work properly. The problem is that parseInt() coerces its first parameter to a 
// string before parsing digits. Therefore, once the number becomes sufficiently large, its string 
// representation will be presented in exponential form (e.g., 1e+21). Accordingly, parseInt() 
// will then try to parse 1e+21, but will stop parsing when it reaches the e character and will 
// therefore return a value of 1. Observe:
// > String(1000000000000000000000)
// '1e+21'
// > parseInt(1000000000000000000000, 10)
// 1
// > parseInt(1000000000000000000000, 10) === 1000000000000000000000
// false








// In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

// The values will be logged in the following order:

// 1
// 4
// 3
// 2
// Let’s first explain the parts of this that are presumably more obvious:

// 1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay

// 2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second) whereas 
// 3 is being logged after a delay of 0 msecs.

// OK, fine. But if 3 is being logged after a delay of 0 msecs, doesn’t that mean that it is being 
// logged right away? And, if so, shouldn’t it be logged before 4, since 4 is being logged by a later 
// line of code?

// The answer has to do with properly understanding JavaScript events and timing.

// The browser has an event loop which checks the event queue and processes pending events. 
// For example, if an event happens in the background (e.g., a script onload event) while the 
// browser is busy (e.g., processing an onclick), the event gets appended to the queue. When the 
// onclick handler is complete, the queue is checked and the event is then handled 
// (e.g., the onload script is executed).

// Similarly, setTimeout() also puts execution of its referenced function into the event queue if 
// the browser is busy.

// When a value of zero is passed as the second argument to setTimeout(), it attempts to execute the 
// specified function “as soon as possible”. Specifically, execution of the function is placed on 
// the event queue to occur on the next timer tick. Note, though, that this is not immediate; the 
// function is not executed until the next tick. That’s why in the above example, the call to 
// console.log(4) occurs before the call to console.log(3) (since the call to console.log(3) is 
// invoked via setTimeout, so it is slightly delayed).










// Write a simple function (less than 160 characters) that returns a boolean indicating 
// whether or not a string is a palindrome.

// The following one line function will return true if str is a palindrome; otherwise, it returns false.

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

// For example:
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'

//alternate
function isPalindrome(str){
    return str.split('').reverse().join('') === str
  }
  isPalindrome('racecar')
  
  // alternate
  const isPalindrome = (str) => (str.split('').reverse().join('') === str)
  isPalindrome('racecar')










//   Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

// There are (at least) two ways to do this:
// METHOD 1

function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}

// In JavaScript, functions provide access to an arguments object which provides access to the 
// actual arguments passed to a function. This enables us to use the length property to 
// determine at runtime the number of arguments passed to the function.

// If two arguments are passed, we simply add them together and return.

// Otherwise, we assume it was called in the form sum(2)(3), so we return an anonymous 
// function that adds together the argument passed to sum() (in this case 2) and the argument 
// passed to the anonymous function (in this case 3).

// METHOD 2
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}
// When a function is invoked, JavaScript does not require the number of arguments to match the 
// number of arguments in the function definition. If the number of arguments passed exceeds the 
// number of arguments in the function definition, the excess arguments will simply be ignored. 
// On the other hand, if the number of arguments passed is less than the number of arguments in the 
// function definition, the missing arguments will have a value of undefined when referenced within 
// the function. So, in the above example, by simply checking if the 2nd argument is undefined, we 
// can determine which way the function was invoked and proceed accordingly.










// Consider the following code snippet:

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
// (a) What gets logged to the console when the user clicks on “Button 4” and why?

// (b) Provide one or more alternate implementations that will work as expected.

// (a) No matter what button the user clicks the number 5 will always be logged to the console. 
// This is because, at the point that the onclick method is invoked (for any of the buttons), the 
// for loop has already completed and the variable i already has a value of 5. (Bonus points for 
// the interviewee if they know enough to talk about how execution contexts, variable objects, 
// activation objects, and the internal “scope” property contribute to the closure behavior.)

// (b) The key to making this work is to capture the value of i at each pass through the for loop 
// by passing it into a newly created function object. Here are four possible ways to accomplish this:

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
  })(i));
  document.body.appendChild(btn);
}

// Alternatively, you could wrap the entire call to btn.addEventListener in the new anonymous function:
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  (function (i) {
    btn.addEventListener('click', function() { console.log(i); });
  })(i);
  document.body.appendChild(btn);
}

// Or, we could replace the for loop with a call to the array object’s native forEach method:
['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function() { console.log(i); });
  document.body.appendChild(btn);
});

// Lastly, the simplest solution, if you’re in an ES6/ES2015 context, is to use let i instead of var i:
for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}