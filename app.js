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
