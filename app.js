// Question #1
// Get the sum of two arrays...actually the sum of all their elements. 
// Each array includes only integer numbers. Output is a number too.
const arr1 = [1,2,3]
const arr2 = [4,5]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
function addArrays(array, array2){
  let total = array.reduce(reducer) 
  let total1 = array2.reduce(reducer)
  return total + total1
}
addArrays(arr1, arr2)






//Question #2
// Write a function that takes three arguments, sums all three and returns the result
let number1 = 1
let number2 = 2
let number3 = 3
function sumThreeNum (num1, num2, num3) {
    return num1 + num2 + num3
 }
 sumThreeNum(number1, number2, number3)






// Question #3
// Write a function that takes a string and returns the uppercase version 
// of that string with an ! at the end.
let string = 'hello'
function upCase(str){
  return str[0].toUpperCase() + str.slice(1) + '!'
}
upCase(string)







// Question #4
// Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.
let num = 5
let otherNum = 28
function isEven(n) {
   return n % 2 == 0;
}
isEven()

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
isOdd()
//alternate method
function even_or_odd(number) {
    if ((number % 2) === 0) {
        return "Even"
    } else {
        return "Odd"
   }
}
even_or_odd(4)







//Question #5
// Your task is to make a function that can take any non-negative integer as a argument and return it with its 
// digits in descending order. Essentially, rearrange the digits to create the highest possible number.
let number = 13245768
function order(num){
  return parseInt(String(num).split("").sort((a, b) => {return b-a}).join(""));
}
order(number)







// Question #6
// Given two integers, write a function that swaps them without using any temporary variables.
let x = 3
let y = 4
function swap(x,y) {
    x = x + y;
    y = x - y;
    x = x - y;
}
swap(x, y)

//alternate
function swap(a,b) {
  b = a.toString() + b.toString()
  a = parseInt(b[1])
  b = parseInt(b[0])
}







// Question #7
// Define a repeatify function on the String object. The function accepts an
//  integer that specifies how many times the string has to be repeated. The 
// function returns the string repeated the number of times specified. 
// For example: console.log('hello'.repeatify(3));
// Should print hellohellohello.
String.prototype.repeatify = String.prototype.repeatify || function(times) {
    let str = '';
 
    for (let i = 0; i < times; i++) {
       str += this;
    }
 
    return str;
 };
 console.log('hello'.repeatify(3));





// Question #8
// What will be the output when the following code is executed? Explain.
// console.log(false == '0')
// console.log(false === '0')
// The code will output:

// true
// false

// In JavaScript, there are two sets of equality operators. The triple-equal operator === behaves like 
// any traditional equality operator would: evaluates to true if the two expressions on 
// either of its sides have the same type and the same value. 
// The double-equal operator, however, tries to coerce the values before comparing them. 
// It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.

// Comparing something to a boolean using equality comparison operator for values that are of a different type.

// false == ‘0’

// In following the JavaScript spec…
// - If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y
// - If Type (y) is Boolean, return the result of the comparison x == ToNumber(y)

// So when evaluating false == ‘0’ using the ‘==‘ comparison operator where x = false and y = ‘0’. 
// The spec dictates that since x is a Boolean we coerce this value to a number.

// This leaves us with ToNumber(false) == ‘0’, which becomes 0 == ‘0’.

// The values are still different types ‘number’ and ‘string’ respectively. Therefore we continue using the 
// guidelines defined in the spec for comparing strings to numbers…
// - If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).
// - If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.

// This leaves us with 0 == ToNumber(‘0’), which becomes 0 == 0.

// Since x and y are now of type ‘number’. A value comparison can be made to determine equality.

// 0 == 0 becomes true.

// For triple equal comparison…

// false === ‘0’

// Triple equals does not allow for coercion and since values of different types can 
// not be strictly equal by definition the expression evaluates to false.










// Question #9
// Write a function that will return the count of distinct case-insensitive alphabetic
// characters and numeric digits that occur more than once in the input string. The input 
// string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

let string = 'hello'
function getDuplicates(string) {
  var count = {};
  string.split("").forEach(letter => {
    count[letter] ? count[letter]++ : (count[letter] = 1);
  });
  return count;
}

// const getDuplicates = str => new Set(str)].size
// **********************
const alphaNumReg = new RegExp(/[a-zA-Z0-9]/);

function filterAlphaNumeric(str) {
  return str
    .split("")
    .filter((char) => alphaNumReg.test(char))
    .join("");
}

function countDups(str) {
	let alphaNum = filterAlphaNumeric(str);
	let uniqueChars = new Set(...alphaNum.split(""));
	return alphaNum.length - uniqueChars.size;
}
countDups(string)
// 'A' --> 1
// 'Aa' --> 1
// 'AaB' --> 2
// 'AaB4' --> 3
// 'AaB4?' --> 3









// Question #10
// Take a string and return a string that has all the original letters 
// with the vowels removed.
function disemvowel(string){
    return string.replace(/[aeiou]/gi, '')
}
disemvowel('good evening')

// OR ....  you could do it the long way like I did:

function disemvowel(str) {
  return str.split("").filter(letter=> isVowel(letter)).join("");
}
function isVowel(letter){
  if (letter != "a" && letter != "e" &&letter != "o" && letter != "i" && letter != "u" && letter!="A" && letter!= "E"&& letter!= "I" && letter!= "O" && letter!= "U"){
  return letter
  }
}




// Question #11
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
//  "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
function fizzbuzz(){
    for(var i = 0; i <= 100; i++){
      if (i % 3 === 0) {
        console.log('fizz')
      } else if (i % 5 === 0) {
        console.log('buzz')
      } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      }
    }
  }
  fizzbuzz()
  
  // leveraging closure
  function divisibleBy(num) {
    return (test) => test % num == 0;
  }
  
  let divisibleByThree = divisibleBy(3);
  let divisibleByFive = divisibleBy(5);
  
  function getFizzBuzz(num) {
    result = "";
    result += divisibleByThree(num) ? "fizz" : "";
    result += divisibleByFive(num) ? "buzz" : "";
    return result ||  num;
  }
  
  function createFizzBuzz(arrayLength) {
    return Array.from({length: arrayLength}, (v, i) => getFizzBuzz(i));
  }
  
  createFizzBuzz(100);










// Question #12
// Given a boolean value(true/false), write a function that returns a 'Yes' string for true 
// and a 'No' string for false
let boolean = false // should return no
let boolean1 = true //should return yes
function boolToWord( bool ){
    let result = bool ? "Yes" : "No"; 
    return result;
}
boolToWord(boolean)











// Question #13
// Given an array of numbers (degrees fahrenheit) use .map to find their converted values
// in degrees celsius. Hint: The conversion is: -32 * 5/9
let fahrenheit = [33, 46, 98, 134, 100]
let celsius = fahrenheit.map(function(element) {
  return Math.round((element-32)*5/9)
})
console.log(celsius)


// ES6 Fat Arrow:
let fahrenheit = [33, 46, 98, 134, 100]
let celsius = fahrenheit.map(element => Math.round((element-32) * 5/9))
console.log(celsius)











// Question #14
// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number. 
// Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
// => returns "(123) 456-7890"
function createPhoneNumber(arr) {
    if (!Array.isArray(arr) || arr.length != 10) {
      throw new Error("Invalid input");
    }
  
    let c1 = getChunkString(arr, 0, 3);
    let c2 = getChunkString(arr, 3, 6);
    let c3 = getChunkString(arr, 6);
  
    return `(${c1}) ${c2}-${c3}`;
  }
  
  function getChunkString(arr, start, end) {
    return arr.slice(start, end).join("");
  }

  //alternate method
  function createPhoneNumber(numbers){
    return( 
        `(${numbers[0]}${numbers[1]}${numbers[2]}) 
        ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}
        ${numbers[7]}${numbers[8]}${numbers[9]}`
    );
  }
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);





  
  
  
  
  
  // Question #15
  // Isogram is a word with no repeating letters, disregard case. Return true if the function 
  // is passed an Isogram, false if the word has repeating letters.

  function isIsogram(str){
    str = str.toLowerCase();
    for(let i = 0; i<str.length ; i++){
      for(let j = 0; j<str.length ; j++){
        if(i === j){
          continue;
        }
        else if(str[i] == str[j]){
          return false;
        }
      }
    }
    return true;
  }
//   -------
  function isIsogram(str){
    for (var i = 0 ; i < str.length; i++)
      for (var j = i + 1 ; j < str.length; j++)
        if (str[i].toLowerCase() == str[j].toLowerCase())
          return false;
    
    return true;
  }


  




  
  
  //Question #16
  // Write a function that takes 3 lengths and determines if these three lengths combined can make a 
  // triangle. If the three sides can make a triangle, return true. If they cannot, return false.
  // Optional Hint: The sum of the lengths of any two sides of a triangle is greater than the length
  // of the third side. If you take the three sides of a triangle and add them in pairs, 
  // the sum is greater than (not equal to) the third side. If that is not true, then it is not 
  // possible to construct a triangle with the given side lengths.
  
  function isTriangle(a, b, c){
    if(a+b>c && b+c>a && a+c >b){
          return true
      }else{
    return false
      }
    }








// Question #17
// You're given the string "12345.00", what method can you use to return "12345.0"?
let str = "12345.00";
str = str.slice(0, -1);











// Question #18
// Writes a function that takes in an array of years, and returns an array of booleans stating 
// whether or not a person born that year is of legal drinking age 
// (you don't need to worry about being completely accurate in the case of the person turning 21 
// this year, since you're only given years and not exact dates).
var years = [1965, 1979, 2007, 1997];
var results = [];

function getAges(yearsArray) {
  for (var i = 0; i < yearsArray.length; i++) {
    let age = 2018 - yearsArray[i];
    if (age >= 21) {
      results.push(true);
    } else {
      results.push(false);
    }
  }
  return results;
}
console.log(getAges(years));

// Mike Theodorou Solution:
// Function will always get the current year
const canDrink = (years) => {
  const currentYear = (new Date()).getFullYear();
  return years.map(year => currentYear - year >= 21 ? true : false);
}










// Question #19
// Write a function that takes in a string and returns a new string of all letters alphabetized.
function alphabetize(str){
    let sortedString = str.split('').sort().join('')
    return sortedString
  }
  alphabetize('zxywvutsrqponmlkjihgfedbca')









// Question #20
// Implement a function which takes two parameters, 
// both of which are arrays, and zip them together.
// ie: The arguments are [1,2,3], and [4,5,6], 
// and after zipping the two arrays, you return [1,4,2,5,3,6].
let array1 = [1,2,3]
let array2 = [4,5,6]
function zipArrays(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i], array2[i]);
  }
  return newArray
}
zipArrays(array1, array2)

// alternate method
let array1 = [1,2,3]
let array2 = [4,5,6]
function zip(array1, array2){
    var result=[];
    array1.forEach(function(o,i){
       result.push(o);
       result.push(array2[i]);
    });
    return result
}
zip(array1, array2)








//Question #21
// Implement the indexOf method for strings. The indexOf method takes a "haystack"
// string, and a "needle" string to search for. So, indexOf("hello world", "or")
//  would return 7.

function indexOf(haystack,needle) {
    let pos = 0;
    for (let i = 0 ; i <= haystack.length - needle.length ; i++) {
        for(let j = 0; j < needle.length; j++) {
            if(haystack[i+j] !== needle[j]) {
                break;
            }
            if(j === needle.length - 1) {
                return i;
            }
        }
    }
    return -1;
}









// Question #22
// You've spent decades setting high scores on Donkey Kong but now, a challenger approaches. 
// Write a function, scoreSettler, that will definitively show who is the King of Kong. 
// scoreSettler will take a list of unsorted scores plus the highest possible score and return a 
// sorted list of all of the scores, in descending order from high score to low score.
function bubbleSort(array) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  let numbers = [12, 10, 15, 11, 14, 13, 16];
  bubbleSort(numbers);
  console.log(numbers);












// Question #23
// Your code will show the Full name of the person who will pay for the wall and the 
// truncated version(First 2 letters) of the name as an array. If the number of the 
// characters in name is equal or less than two, it will return the name as is. 
// Input: "James" Output: ["James", "Ja"]. If name is 2 chars or less. Input: "BJ" Output: ["BJ"]
function whoIsPaying(name){
    var nameArr = [];
    name.length <= 2 ? nameArr.push(name) : nameArr.push(name, name.slice(0,2));
    return nameArr;
    }
    
    function whoIsPaying(name) {
      if (typeof name != 'string') {
        throw new Error('Input must be string');
      }
      
      return name.length > 2 ? [name, name.slice(0,2)] : [name];
    }










// Question #24
// Given an array of numbers (integers), return a string that provides the range 
// of the numbers in the array, in the format of "min-max". 
// For example, [4, 2, 98, 33, 17] should return "2-98". If passed an empty array,
//  the function should return "undefined".

let nums = [1,2,3,9]
function rangeFinder(array) {
  return array.length === 0 ? "undefined" 
  : `${Math.min(...array)}-${Math.max(...array)}`
}
rangeFinder(nums)






// Question #25
// Write a JavaScript program to get the first n Fibonacci numbers.
// Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two.
let fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    let s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));












// Question #26
// Write a function that returns an array with all of the prime numbers up to 100.
// Hint on exactly what prime numbers are: A prime number is a positive integer that has exactly 
// two positive integer factors, 1 and itself. For example, if we list the factors of 28, 
// we have 1, 2, 4, 7, 14, and 28. That's six factors. If we list the factors of 29, we only 
// have 1 and 29. That's two factors. So we say that 29 is a prime number, but 28 isn't.
function primeNums (n) {
    let primeArray = [];
    let tempArray = [];
    for (let i=2; i<=n; i++) {
         let tempArray = []
   for (let x=2; x<=n; x++) {
     if (x <= i) {
       tempArray.push(i % x)
       if (!tempArray.includes(0) && !primeArray.includes(i) || i === 2) {
       primeArray.push(i)
     }
   } 
 }
 } return primeArray 
}

primeNums(100)


// - Mike Theodorou Solution
const prime = (int) => {
 const nums = [];
 for(let i = 2; i < 101; i++) {
   nums.push(i)
 }
 const isPrime = (num) => (num == 2 || num % 2 == 1) ? num : false;

 return nums.filter(num => num == isPrime(num));
}

// Alex Emrie
function getPrimeNumbers(n) {
 const numArray = Array.from({length: n}, (v, i) => i + 1);
 return numArray.filter(isPrime);
}

function isPrime(n) {
 for (let i = 2; i <= Math.sqrt(n); i++) {
   if (n % i == 0) {
     return false;
   }
 }
 return true;
}










// Question #27
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function
// with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// DNAStrand ("ATTGC") # return "TAACG"
// DNAStrand ("GTAT") # return "CATA"
function DNAStrand(strand) {
    let complementary = [];
  
    for (let i = 0; i < strand.length; i++) {
      let nucleotide = strand.charAt(i);
      let compNucleotide = getComp(nucleotide);
      complementary.push(compNucleotide);
    }
  
    let compStrand = complementary.join("");
    return compStrand;
  }
  
  function getComp(nucleotide) {
    let compMapping = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    }
  
    return compMapping[nucleotide];
  }












// Question #28
// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
string = '1 5 9'
function highAndLow(str){
  let stringInt = str.split(' ')
  return `${Math.min(...stringInt)}, ${Math.max(...stringInt)}`
}
highAndLow(string)












// Question #29
// Given a string of any length, write a function that returns the number of vowels
//  in the string. The only vowels that count are a, e, i, o, and u.
function vowelCounter(str){
    var count = 0;
    var splitUp = str.toLowerCase().split('');
    splitUp.forEach(l => {
      if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u'){
        count += 1;
      }
    })
    return count;
  }

  // alternate method
  function countVowels(str) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      let letter = str.charAt(i);
      count += isVowel(letter) ? 1 : 0;
    }
  
    return count;
  }
  
  let vowelReg = new RegExp(/[a,e,i,o,u]/i);
  
  function isVowel(s) {
    return vowelReg.test(s);
  }










// Question #30
// Write a function that takes a string and returns a boolean indicating whether or not the string 
// is a palindrome (is the same backwards as it is forwards). For example "hello" should return false 
// and "tacocat" should return true.
function isPalindrome(input) {
    return input.split("").reverse().join("") === input;
  }
  
//   *********
  function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
  
    while (start < end) {
      if (str[start++] != str[end--])  return false;
    }
    return true;
  }










// Question #31
// Retrieve all items from an array where ‘i < 30’ where values are stored as a string (i.e. “25%”).
const percentages = (arr) => arr.map(item => `%${Math.floor((item * 100)/30)}`);













// Question #32
// A web developer has an array of state names and an array of state abbreviations. 
// They need an array of objects where each object contains the full state name 
// and its corresponding abbreviation.
// const example = [
// {
// name: "Alaska",
// abbr: "AK"
// }
// ]
// const abbr = [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 
// 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 
// 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 
// 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
// const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado',
// 'Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii',
// 'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
// 'Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
// 'Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
// 'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon',
// 'Pennsylvania','Rhode Island','South Carolina','South Dakota',
// 'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
// 'Wisconsin','Wyoming'
// ];

const makeStatesArray = () => {
    const final = []
    for (let i = 0; i < states.length; i++ ) {
      final.push({ name: states[i], abbr: abbr[i] })
    }
    return final 
  }
  makeStatesArray()










// Question #33
// The Museum of Incredible Dull Things wants to get rid of some exhibitions. Miriam, the interior architect,
// comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the 
// one with the lowest rating. However, just as she finished rating all exhibitions, she's off to an 
// important fair, so she asks you to write a program that tells her the ratings of the items after one 
// removed the lowest one. Fair enough.
// Your Task:
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If 
// there are multiple elements with the same value, remove the one with a lower index. If you get an 
// empty array/list, return an empty array/list.
//   Don't change the order of the elements that are left.
// Examples:
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]
function removeSmallest(ratings) {
    let smallest = Math.min(...ratings);
    return removeFirstOccurrence(ratings, smallest);
  }
  
  function removeFirstOccurrence(arr, val) {
    let removed = false;
    return arr.filter((elem) => {
      if (!removed && val == elem) {
        removed = true;
      } else {
        return elem;
      }
    })
  }
















// Question #34
// Return an array from a variable number of arguments (each an array) that includes only the unique 
// values in the order in which they were presented as arguments.
// EG.
// const arr1 = [ 4 ];
// const arr2 = [ 3, 4, 5 ]
// const arr3 = [ 9, -1, 4 ]
// union( arr1, arr2 ) // [ 4, 3, 5 ]
// union( arr2, arr1 ) // [ 3, 4, 5 ]
// union( arr1 ) // [ 4 ]
// union( [ ] ) // [ ]
// union( arr1, arr2, arr3) // [ 4, 3, 5, 9, -1 ]
// with reduce and long-form
const union = (...args) => Array.from(new Set([...args].reduce((acc, val) => acc.concat(val), [])));

// Using spread operator in all its glory
const union = (...args) => [...new Set([].concat(...args))];

function union(...arrays) {
  let masterArray = [].concat(...arrays);
  let masterSet = new Set(masterArray);
  return [...masterSet];
}













// Question #35
// last(array, [n])
// Returns the last element of an array. Passing n will return the last n elements of the array.
// last( ['ant', 'bison', 'camel', 'duck', 'elephant'], 2) => ['duck', 'elephant']
// last([5, 4, 3, 2, 1]) => [1]
// last([], 2) => "n must be defined and be between 0 and array.length"
// last([1,2,3,4], -4) => "n must be defined and be between 0 and array.length"
const last = (array, n) => {
  const l = array.length;
  if (n > l || n < 0 || n === undefined) {
   return  "n must be defined and be between 0 and array.length"
  }
  return array.slice(l - n)
}
last([1,2,3,4], -4)











// Question #36
// Write a function called generateSequence that takes in two arguments ( length, startingNumber) and 
// returns a new array where array.length === length and countians a sequence of beginning at startingNumber.
// Eg.
// generateSequence( 1, 10) => [ 10 ]
// generateSequence( 5, 0 ) => [ 0, 1, 2, 3, 4 ]
// generateSequence( 10, -5 ) => [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4 ]

const generateSequence = (length, startingNumber) => Array.from(new Array(length), (value, index) => index + startingNumber)

// -- OR --

const generateSequence = ( l, sN ) => Array.from( new Array( l ), ( v, i ) => i + sN)











// Question #37
// Given the array of the words ['red', 'green', 'blue'], return the number of occurrences of the letter 'e'.

const filter = (target, arr) => arr.join('').split('').filter(char => char === target).length;















//question 
// join two arrays
let array1 = [1,2,3]
let array2 = [4,5,6]
function joinArrays(arr1, arr2){
  let array3 = arr1.concat(arr2)
  return array3
}
joinArrays(array1, array2)








// Given an array of integers, find the pair of adjacent elements that has the largest product and 
// return that product.

function adjacentElementsProduct(inputArray) {
  var c = inputArray[0]*inputArray[1];
  var p = c;
  for(var i=1; i < inputArray.length; i++){
      var c = inputArray[i] * inputArray[i+1];
      if(c > p){
          p=c;
      };
  };
  return p;
};





// given a year return the centruy it is in. The 1st century is 1 - 100 and the 2nd 101 - 200 etc..
function centuryFromYear(year){
  let century = 0;
  while (year > 0){
    year -= 100;
    century += 1;
  }
  return century;
}








// You are given a two-digit integer n. Return the sum of its digits.
function addTwoDigits(n) {
  var string = n.toString()
  var sum = parseInt(string.charAt(0)) + parseInt(string.charAt(1))
  return sum
}






// write a function that wraps presents and adds a bow 
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}





// write a function that writes a thank you card
function writeCards(array, eventName){ 
  newArray = []
    for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
  }
  writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise')








// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained 
// by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. 
// You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function shapeArea(n) {
  return n * n + (n-1) * (n-1);
}









// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue 
// having an non-negative integer size. Since he likes to make things perfect, he wants to arrange 
// them from smallest to largest so that each statue will be bigger than the previous one exactly 
// by 1. He may need some additional statues to be able to accomplish that. Help him figure out the 
// minimum number of additional statues needed.

function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length
}








// Write a function that finds the duplicate in an array
const arr = [1,2,4,5,6,4]
function findDuplicates(data) {
  let result = [];
  data.forEach(function(element, index) {
  // Find if there is a duplicate or not
    if (data.indexOf(element, index + 1) > -1) {
      
      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });
  return Number(result);
}
findDuplicates(arr)



// write a function that finds the index of the duplicate in an array. 
const arr = [1,2,4,5,6,4]
function findDuplicates(data) {
  let result = [];
  data.forEach(function(element, index) {
  // Find if there is a duplicate or not
    if (data.indexOf(element, index + 1) > -1) {
      
      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(index);
      }
    }
  });
  return Number(result);
}
findDuplicates(arr)









// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly 
// increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
// Sequence containing only one element is also considered to be strictly increasing.

function almostIncreasingSequence(sequence) {

  var found = false;
  for (var i=0;i<sequence.length;i++) {
      if(sequence[i] <= sequence[i-1]) {
          if(found) {
            return false;
          } else {
            found = true;
          }
      if(i === 1 || i + 1 === sequence.length) {
        continue;
      }
      else if (sequence[i] > sequence[i-2]) {
        sequence[i-1] = sequence[i-2];
      }
      else if(sequence[i-1] >= sequence[i+1]) {
        return false;
      }
    }
  }
  return true;
}
