//1- Fibonacci Series:
// Write a program to print Fibonacci for a given number.
// The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1. 

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
 console.log(fibonacci(4))

 // 2- The sum of Array Elements:
// Write a program that Calculates the sum of elements in an array 

var sum =(array) =>{
if(array.length===0){
return 0;
}
return array[0]+ sum(array.slice(1));


}
// console.log(sum([1,2,3]));


// 3-Write a program that Reverses a string 
function StringReverse(str){
if(str.length <= 1){
    return str;
}

var strSplit = str.split("");
var rev= strSplit.reverse();
var join = rev.join("");
return join;

}
console.log(StringReverse("Ahmad"));

// Reverse a String: Write a program that Reverses a string.

function reverseString(str, strLength) { // strLength -> is the length of the string 

    if (str.length === 0) {
        return "Empty string";
      }
    
      if (strLength == 1) { 
        return str[strLength - 1];
      }
      return str[strLength - 1] + reverseString(str, strLength - 1);

}
console.log(reverseString("Malak",2));



// //  match() method, & prepare some ex. on different patterns.

// // test mehtod
// let text = "The best things in life are free";
// let pattern = /e/;  // will check if 'e' is exist    true
// // let pattern = /^e/; // will check if 'e' is not exist    flase because ^ meant not
// // let pattern = /m/;  // will check if 'm' is exist   false 
// // let pattern = /best/;   // will check if 'best' is exist    ture
// // let pattern = /Best/;   // will check if 'Best' with B is exist, but it's not, because the RegEx is a sensitive case   false
// // let pattern = /Best/i;  // will check if 'Best' with B is exist, it's not, but we use 'i' to make it insenstive case   true 

// // let result = pattern.test(text); // syntax to use 'test' method of the pattern in text

// console.log(result)


// //  match() method, & prepare some ex. on different patterns.

// // Start match() method example

// let str12 = 'Razan Anan Aboushi';
// document.write(`<p> My name is ${str12.match(/Razan/g)} </p>`);


//  let text12 = "Hello Guys, Have A Nice Day Nice";
//  let result = text12.match(/Nice/);
  
//  document.getElementById("demo4").innerHTML = result;



//  function match4String()
//   {
//     let string = "Welcome to coding academy by orange from orange company a";
//     let result = string.match(/ac?/);
//     console.log("The Output is : " + result);
// }
//  match4String();



//  const paragraph = 'The quick brown fox jumps over the lazy dog. It barked. Hello';
//  const regex = /[A-Z]/g; // match in the range
//  const found = paragraph.match(regex);
 
//  console.log(found);

//  // Expected output: Array ["T", "I","H"]



//  function matchString()
//   {
//     let string = "Welcome to coding academy by orange from orange company";
//     let result = string.match(/orang/g); //Here “g” flag indicates that the regular expression should be tested against all possible matches in a string. 
//     console.log("The Output is : " + result);
// }
//  matchString();
//  function match2String()
//   {
//     let string = "Welcome to coding academy by ORange from ORange company";
//     let result = string.match(/orang/i); //Here “i” parameter helps to find the case-insensitive match in the given string. 
//     console.log("The Output is : " + result);
// }
//  match2String();




//  function match3String()
//  {
//    let string = "Welcome to coding academy by orange from ORange company";
//    let result = string.match(/orang/gi);// Here “gi” parameter helps to find the case-insensitive match AND all possible combinations in the given string. 
//    console.log("The Output is : " + result);
// }
// match3String();




// const reg = new RegExp('^\d+$')




// let str = "abcdefghjkl123456789";
// console.log(str.match(/\d/g));



// const str1 = "Hello world";
// const str2 = "a123abc";
// const pattern3 = /^[a-z]/i;

// console.log(str1.match(pattern3));  // output: ["h"]
// console.log(str2.match(pattern3));  // output: null


// // End match() method example



// //  E3:
// const str3 = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str3.search(re));
// console.log(str3.search(reDot)); 







// // -------------------------------------------------------------------

//  try {
//  // code that might throw an error
//  } 
// catch (error) {
//   // handle the error here
//    }




// /* // EX 1
// let errMsg = "This is the error message I caught";

// let variable = "Hello Word";

// try {

//     // console.log(variable);
//      console.log(VariableNotExist);
// } 
// catch (error) {

//     console.log(error, errMsg);
// }
//  */

// /* 
//                     Error Object Properties

// Property	        Description
// name	 -   Sets or returns an error name
// message	 -   Sets or returns an error message (a string) 

// */



// /* 
//                     Error Names

// Error Name	          Description
// RangeError	    - A number "out of range" has occurred	
// ReferenceError  - An illegal reference has occurred	
// SyntaxError	    - A syntax error has occurred	
// TypeError	    - A type error has occurred	
// URIError	    - An error in encodeURI() has occurred

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
// */



// // EX 2
// let pattern5 = /ReferenceErrors/i;

// try {

//      console.log(VariableNotExist);
// } 
// catch (error) {

//     if (pattern5.test(error.name))
//         console.log("The is Reference Error");
//     else    
//         console.log(error.message);
// } 


// // try...catch
// // try...finally
// // try...catch...finally


// finally {

//     // finallyStatements
//   }




// // Ex4:

//   function getRectArea(width, height) {
//   if (isNaN(width) || isNaN(height)) {
//     throw new Error("Parameter is not a number!");
//   } else {
//     console.log(width * height);
//   }
// }

// try {
//   getRectArea(3, 8);
// } catch (e) {
//   console.error(e);
//   // Expected output: Error: Parameter is not a number!
// } finally {
//   console.log("program finished executing");
// }