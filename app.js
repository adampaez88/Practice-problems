// Define a repeatify function on the String object. The function accepts an
//  integer that specifies how many times the string has to be repeated. The 
// function returns the string repeated the number of times specified. 
// For example: console.log('hello'.repeatify(3));
// Should print hellohellohello.

// answer
String.prototype.repeatify = String.prototype.repeatify || function(times) {
    let str = '';
 
    for (let i = 0; i < times; i++) {
       str += this;
    }
 
    return str;
 };
 console.log('hello'.repeatify(3));


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



// Question:
// You're given the string "12345.00", what method can you use to return "12345.0"?

let str = "12345.00";
str = str.slice(0, -1);



// Question:
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





// Question:
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



// Question:
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




// Question:
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






// Question:
// Implement a function which takes two parameters, 
// both of which are arrays, and zip them together.
// ie: The arguments are [1,2,3], and [4,5,6], 
// and after zipping the two arrays, you return [1,4,2,5,3,6].

//answer
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






//question 
// join two arrays
let array1 = [1,2,3]
let array2 = [4,5,6]
function joinArrays(arr1, arr2){
  let array3 = arr1.concat(arr2)
  return array3
}
joinArrays(array1, array2)






// Question:
// Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.

//answer
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





// Question:
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



  