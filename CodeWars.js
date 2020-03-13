// This file is for codeWars questions 


// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten
// minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press 
// the button it sends you an array of one-letter strings representing directions to walk 
// (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes 
// you one minute to traverse one city block, so create a function that will return true if the walk 
// the app gives you will take you exactly ten minutes (you don't want to be early or late!) and 
// will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction 
// letters ('n', 's', 'e', or 'w' only). It will never give you an empty array 
// (that's not a walk, that's standing still!).

// my solution
function isValidWalk(walk) {
    let vertical = 0
    let horizontal = 0
    walk.forEach(x => {
        if (x == 'n'){
        vertical += 1
        } else if (x == 's'){
        vertical -= 1 
        } else if (x == 'w'){
        horizontal += 1
        } else if (x == 'e'){
        horizontal -= 1
        }
    })
    const count = walk.length
    if (vertical == 0 && horizontal == 0 && count == 10){
        return true 
    }
}

//alternate method
function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }

  //alternate method
  function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    return dt === 10 && dx === 0 && dy === 0
  }

  //alternate method
  function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
  }

  //alternate method
  function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
  }







// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
// My solution
function squareDigits(num){
    //may the code be with you
    let newNumber = num.toString().split('')
    newNumber.forEach(function(element, index, array){
      array[index] = element * element
    })
    return Number(newNumber.join(''))
  }


// alternate method 
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}


// alternate method
function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    return parseInt(array.join(""));
}


// alternate method with for loop
function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};


//alternate method
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }




// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
    return result.slice(0, result.length - 1);
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));


//alternate solution
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
}

// alternate solution
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');


// alternate solution
function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return text.toLowerCase()
        .split('')
        .filter(t => letters.indexOf(t) > -1)
        .map(t => letters.indexOf(t)+1 || '')
        .join(' ');
}









// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an 
// isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// My Solution
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i) {
      for(j = i + 1; j < str.length; ++j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
 }

 // alternate method
 function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}

// alternate method
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}

// alternate method
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
}s