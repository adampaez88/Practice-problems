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













// Assuming d is an “empty” object in scope, say:
var d = {};

// …what is accomplished using the following code?
[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});

// The snippet of code shown above sets two properties on the object d. Ideally, any lookup performed 
// on a JavaScript object with an unset key evaluates to undefined. But running this code marks 
// those properties as “own properties” of the object.

// This is a useful strategy for ensuring that an object has a given set of properties. 
// Passing this object to Object.keys will return an array with those set keys as well 
// (even if their values are undefined).











// What will the code below output to the console and why?

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// The logged output will be:
"array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"
// arr1 and arr2 are the same (i.e. ['n','h','o','j', ['j','o','n','e','s'] ]) after the above code 
// is executed for the following reasons:

// Calling an array object’s reverse() method doesn’t only return the array in reverse order, 
// it also reverses the order of the array itself (i.e., in this case, arr1).

// The reverse() method returns a reference to the array itself (i.e., in this case, arr1). 
// As a result, arr2 is simply a reference to (rather than a copy of) arr1. Therefore, 
// when anything is done to arr2 (i.e., when we invoke arr2.push(arr3);), arr1 will be affected 
// as well since arr1 and arr2 are simply references to the same object.

// And a couple of side points here that can sometimes trip someone up in answering this question:

// Passing an array to the push() method of another array pushes that entire array as a single 
// element onto the end of the array. As a result, the statement arr2.push(arr3); adds arr3 in its 
// entirety as a single element to the end of arr2 (i.e., it does not concatenate the two arrays, 
// that’s what the concat() method is for).

// Like Python, JavaScript honors negative subscripts in calls to array methods like slice() as a 
// way of referencing elements at the end of the array; e.g., a subscript of -1 indicates the last 
// element in the array, and so on.






// What will the code below output to the console and why ?
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

// The above code will output the following to the console:
// "122"
// "32"
// "02"
// "112"
// "NaN2"
// NaN
// Here’s why…

// The fundamental issue here is that JavaScript (ECMAScript) is a loosely typed language and it 
// performs automatic type conversion on values to accommodate the operation being performed. 
// Let’s see how this plays out with each of the above examples.

// Example 1: 1 + "2" + "2" Outputs: "122" Explanation: The first operation to be performed 
// in 1 + "2". Since one of the operands ("2") is a string, JavaScript assumes it needs to perform 
// string concatenation and therefore converts the type of 1 to "1", 1 + "2" yields "12". Then, 
// "12" + "2" yields "122".

// Example 2: 1 + +"2" + "2" Outputs: "32" Explanation: Based on order of operations, the first 
// operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). 
// Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it 
// (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of 
// course yields 3. But then, we have an operation between a number and a string (i.e., 3 and "2"), 
// so once again JavaScript converts the type of the numeric value to a string and performs string 
// concatenation, yielding "32".

// Example 3: 1 + -"1" + "2" Outputs: "02" Explanation: The explanation here is identical to 
// the prior example, except the unary operator is - rather than +. So "1" becomes 1, which then 
// becomes -1 when the - is applied, which is then added to 1 yielding 0, which is then converted 
// to a string and concatenated with the final "2" operand, yielding "02".

// Example 4: +"1" + "1" + "2" Outputs: "112" Explanation: Although the first "1" operand is typecast 
// to a numeric value based on the unary + operator that precedes it, it is then immediately converted 
// back to a string when it is concatenated with the second "1" operand, which is then concatenated 
// with the final "2" operand, yielding the string "112".

// Example 5: "A" - "B" + "2" Outputs: "NaN2" Explanation: Since the - operator can not be applied 
// to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" 
// yields NaN which is then concatenated with the string "2" to yield “NaN2”.

// Example 6: "A" - "B" + 2 Outputs: NaN Explanation: As exlained in the previous example, 
// "A" - "B" yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN.











// The following recursive code will cause a stack overflow if the array list is too large. How can 
// you fix this and still retain the recursive pattern?
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

// The potential stack overflow can be avoided by modifying the nextListItem function as follows:

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
// The stack overflow is eliminated because the event loop handles the recursion, not the call 
// stack. When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed 
// to the event queue and the function exits, thereby leaving the call stack clear. When the event 
// queue runs its timed-out event, the next item is processed and a timer is set to again invoke 
// nextListItem. Accordingly, the method is processed from start to finish without a direct recursive 
// call, so the call stack remains clear, regardless of the number of iterations.












// What is a “closure” in JavaScript? Provide an example.

// A closure is an inner function that has access to the variables in the outer (enclosing) 
// function’s scope chain. The closure has access to variables in three scopes; specifically: 
// (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.
// Here is an example:

var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
// In the above example, variables from innerFunc, outerFunc, and the global namespace are all 
// in scope in the innerFunc. The above code will therefore produce the following output:

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz










// What will be the output of the following code:
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
// Explain your answer. How could the use of closures help here?

// The code sample shown will not display the values 0, 1, 2, 3, and 4 as might be expected; 
// rather, it will display 5, 5, 5, 5, and 5.

// The reason for this is that each function executed within the loop will be executed after the 
// entire loop has completed and all will therefore reference the last value stored in i, which was 5.

// Closures can be used to prevent this problem by creating a unique scope for each iteration, 
// storing each unique value of the variable within its scope, as follows:

for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
// This will produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the console.

// In an ES2015 context, you can simply use let instead of var in the original code:

for (let i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}






// What would the following lines of code output to the console?
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
// Explain your answer.

// The code will output the following four lines:

// 0 || 1 = 1
// 1 || 2 = 1
// 0 && 1 = 0
// 1 && 2 = 2

// In JavaScript, both || and && are logical operators that return the first fully-determined 
// “logical value” when evaluated from left to right.

// The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted 
// as a boolean value. If this boolean value is true, then true (1) is returned and Y is not evaluated, 
// since the “or” condition has already been satisfied. If this boolean value is “false”, though, 
// we still don’t know if X||Y is true or false until we evaluate Y, and interpret it as a 
// boolean value as well.

// Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.

// The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted 
// as a boolean value. If this boolean value is false, then false (0) is returned and Y is not 
// evaluated, since the “and” condition has already failed. If this boolean value is “true”, 
// though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it 
// as a boolean value as well.

// However, the interesting thing with the && operator is that when an expression is evaluated as 
// “true”, then the expression itself is returned. This is fine, since it counts as “true” in 
// logical expressions, but also can be used to return that value when you care to do so. 
// This explains why, somewhat surprisingly, 1 && 2 returns 2 (whereas you might it expect it to 
// return true or 1).












// What will be the output when the following code is executed? Explain.
console.log(false == '0')
console.log(false === '0')
// The code will output:
true
false
// In JavaScript, there are two sets of equality operators. The triple-equal operator === behaves 
// like any traditional equality operator would: evaluates to true if the two expressions on either 
// of its sides have the same type and the same value. The double-equal operator, however, 
// tries to coerce the values before comparing them. It is therefore generally good practice to 
// use the === rather than ==. The same holds true for !== vs !=.











// What is the output out of the following code? Explain your answer.
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a[b]);

// The output of this code will be 456 (not 123).
// The reason for this is as follows: When setting an object property, JavaScript will implicitly 
// stringify the parameter value. In this case, since b and c are both objects, they will both be 
// converted to "[object Object]". As a result, a[b] and a[c] are both equivalent to 
// a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] 
// is precisely the same as setting or referencing a[b].






// create a function that returns an array minus any duplicates
let array1 = [1,2,3,'4',4, '4', 3 , 2]
function unique(arr){
  let uniqueArr = arr.filter((element, index, self) => {
    return index === self.indexOf(element);
  })
  return uniqueArr;
}
unique(array1)











// 20. What does the following code do?
let string = 'doggie'
function dogToCat(str){
  return str.split('dog').join('cat')
}
dogToCat(string)
//Replaces every occurence of the word dog in a string with the word ‘cat’










// 22. Fill in the missing code:
// get the cumulative sum of a list
// e.g cumulative_sum([1,2,3,4,5] => [1,3,6,10,15])
array = [1,2,3,4,5]
function cumulative_sum(arr){
  let output = [];
  for(let i = 0; i < arr.length; i++){
    if (i === 0){
      output.push(arr[i])
    } else {
//

      output.push(arr[i] + output[i -1])

//
    }
  }
  return output;
}
cumulative_sum(array)







// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover 
// tomorrow morning.
// Your fellow coders have bought you several drinks tonight in the form of a string. 
// Return a string suggesting how many glasses of water you should drink to not be hungover.

// Example parties:
// Input 0:
// "1 beer"

// Output 0:
// "1 glass of water"

// Explaination 0:
// You drank one standard drink

// Input 1:
// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

// Output 1:
// "10 glasses of water"

// Explaination 1:
// You drank ten standard drinks

// Note:
// To keep the things simple, we'll considere that any "numbered thing" in the string is a drink. 
// Even "1 bear" => "1 glass of water" or "1 chainsaw and 2 pools" => "3 glasses of water"...

const hydrate = (s, w = [...s].filter(x => !isNaN(x)).reduce((a, b) => a + +b, 0)) => `${w} glass${w === 1 ? '' : 'es'} of water`;


// alternate
function hydrate(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) > 0) {
      answer += +s[i];
    }
  }
  return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
}

// alternate
function hydrate(s) {

  let res =s.match(/[0-9]/g)
  let sum =0;
 
  for (let  i =0; i<res.length; i++) {
      sum +=+res[i];
  }
 
  let answer  = sum >1 ? sum + ' glasses of water' : sum + ' glass of water'
      return answer;
}









// What does names return after the following code runs?
function deleteBlankNames(items){
  for(var i = 0; i < items.length; i++){
    if (items[i].length == 0){
      items.splice(i, 1)
    }
  }
}
var names = ['Rachel', '', 'Meghana', '', '', 'Tim']
deleteBlankNames(names)
// returns ['Rachel', 'Meghana', '', 'Tim']









// what is the value of g after the code runs?

function gen(start, range){
  let x = start;
  let direction = 1;
  return function(){
    x += direction;
    if (Math.abs(x - start) >= range) direction *= -1;
    return x
  }
}
let f = gen(4, 5)
f();
f();
f();
f();
f();
f();
let g = f();
// returns 8 

















// 1 < 2 < 3 === true, right? but can
// 3 < 2 < 1 === true, too??
// Here's your task: write a function greaterThanLessThan with three arguments (a,b,c) that returns a 
// boolean (true or false), such that

// a = 1
// b = 2
// c = 3
// returns true, as does

// a = 3
// b = 2
// c = 1
// Note: arguments do not necessarily have to be in strict ascending or descending order, as indicated by 
// the example test cases.
// Check out the included test cases - not all arguments are going to return true! It's up to you to 
// figure out which ones do and which ones don't.
// Hint: This challenge is a LOT easier than it might seem at first. Don't focus too much on building 
// functions - just pay attention to precedence.
function greaterThanLessThan (a,b,c) {
  return a < b < c
}









// Grasshopper Order of Operations
// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect 
// to get the answer 32 but instead the function keeps returning 
// 10. Fix the function to make it return 32 without changing 
// the number or the operators.
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

// alternate 
let orderOperations = () => (2+2)*(2+2)*2;








// Basic regex tasks. Write a function that takes in a numeric code of any length. 
// The function should check if the code begins with 1, 2, or 3 and return true if so. 
// Return false otherwise.
// You can assume the input will always be a number.

function validateCode (code) {
  return /^[1-3]/.test(code);
}

// alternate
const validateCode = code => /^[1-3]/g.test(code);










// Task
// Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter. Your 
// function must return the sum of the even values of this sequence.
// Only numbers without decimals like 4 or 4.0 can be even.
// Input
// sequence of numbers: those numbers could be integers and/or floats.
// For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should 
// return 30 (because 4 + 2 + 10 + 6 + 8 = 30).
function sumEvenNumbers(input) {
  return input.filter(function(el) {
    return el % 2 == 0;
  }).reduce(function(a, b) {
    return a + b;
  });
}

// alternate methods
const sumEvenNumbers = a => a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);







// This is a spin off of my first kata. You are given a list of character sequences 
// as a comma separated string. Write a function which returns another string 
// containing all the character sequences except the first and the last ones. 
// If the input string is empty, or the removal of the first and last items would 
// cause the string to be empty, return a null value.

function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}


function array(arr){
  var data = arr.split(',');
  data.pop()
  data.shift();
  return data.length ? data.join(' ') : null;
}


const array = str => {
  var arr = str.split(",");
  return arr.length > 2 ? arr.slice(1,-1).join(" ") : null;
}


function array(arr){
  arr = arr.split(',');
  
  if (arr.length < 3) {
    return null;
  }

  return arr.slice(1, arr.length - 1).join(' ');
}


const array = word => {
  let characters = word.split(',');
  characters.shift();
  characters.pop();
  
  return characters.length ? characters.join(' ') : null;
}


const array = arr => arr.split(',').slice(1,-1).join(' ') || null;










// Complete the function that calculates the area of the red square, when the length of the circular 
// arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A){
  var circum = 4 * A;
  var radius = circum / (2 * Math.PI);
  var area = Math.pow(radius, 2);
  return Math.round(area*100)/100
}


squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);

function squareArea(A){
  return Math.round(Math.pow(A*2/Math.PI,2) * 100) /100
}





// Write a function to convert a name into initials. This kata strictly takes 
// two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}


function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

function abbrevName(name){
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}









// Debug function getSumOfDigits that takes positive 
// integer to calculate sum of it's digits. 
// Assume that argument is an integer.

function getSumOfDigits(integer) {
  return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
}

getSumOfDigits = i => Math.abs(i).toString().split('').reduce((s, e) => s + +e, 0);


const getSumOfDigits = int => [...`${ int }`.replace(/^-/, '')].reduce((s, n) => s + +n, 0);








// The function is not returning the correct values. Can you figure out why?

// original code (this code has the bug)
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
    case 2:
      name = 'Venus'
    case 3:
      name = 'Earth'
    case 4:
      name = 'Mars'
    case 5:
      name = 'Jupiter'
    case 6:
      name = 'Saturn'
    case 7:
      name = 'Uranus'
    case 8:
      name = 'Neptune'
  }
  return name;
}


// solution
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }
  return name;
}






// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five 
// consecutive digits found within the number given. The number will be passed 
// in as a string of only digits. It should return a five digit integer. The 
// number passed may be as large as 1000 digits.

function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}








// Our football team finished the championship. The result of each match look like 
// "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team 
// in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

// alternate solution
function points(games) {
  var sum=0;
  for (var i=0; i<games.length; ++i)
  {
    if (games[i][0]>games[i][2])
      sum+=3;
    if (games[i][0]==games[i][2])
      sum+=1;
  }
  return sum;
}

// alternate
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)








// Add the isUpperCase method to String to see whether the string is 
// ALL CAPS. For example:
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

// alternate solution
String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}

// regex solution
String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};