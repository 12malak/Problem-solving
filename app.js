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
//  console.log(fibonacci(8))

 // 2- The sum of Array Elements:
// Write a program that Calculates the sum of elements in an array 

var sum =(array) =>{
if(array.length===0){
return 0;
}
return array[0]+ sum(array.slice(1));


}
console.log(sum([1,2,3]));


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
console.log(StringReverse("not"));

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