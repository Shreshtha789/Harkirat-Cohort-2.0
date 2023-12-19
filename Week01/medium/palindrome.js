/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.replace(/[^a-z0-9]/gi, '');
  let strFin1 = str.split('').join('').toLowerCase();
  let strFin2 = strFin1.split('').reverse().join('');

  if(strFin1 === strFin2){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isPalindrome;
