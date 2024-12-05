// Exercise 1
// In your JavaScript file create a variable called myName with your name
// as the value. Put your name inside string quotes, e.g., "my name". Then
// add a line of code to print the variable name to the console after the
// previous message.
// Save your JavaScript file in your editor. Reload the HTML page in your
// browser. You should see your name printed. If not, investigate and fix it.

// const myName =("dima") // console.log (myName)

// ------------------------------------------------------------------------------------------------------------
// Exercise 2
// Create a variable called age with a number that is your age. Do not use
// string quotes for numbers.
// Add a line to print that variable in the console. Save
// the file and reload the page. You should see your name and your age.

// const myAge = (33) // console.log (myAge)

// ------------------------------------------------------------------------------------------------------------
// Exercise 3
// Create a variable called juliaAge with a value 32. Create another
// variable called ageDiff and set it to an expression that calculates your
// age minus Julias's age. Print the value of ageDiff. Save the file and
// reload the page. You should see your age and the age difference. If you
// are younger than Julia, you should see a negative number.

// const juliaAge =(32)
// const ageDiff =(myAge-juliaAge)
// console.log (ageDiff)

// ------------------------------------------------------------------------------------------------------------
// Exercise 4
// Write a conditional that compares the variable with your age with the
// number 21. It should print either "You are older than 21" or "You are
// not older than 21", appropriately, depending on your age. Save your
// JavaScript file and reload the page. Make sure you see the correct
// message. Try changing your age in the JavaScript file to make sure the
// other message prints when it should.

// if (myAge>21) {console.log ("You are older than 21")} else {console.log ("You are not older than 21")}

// ------------------------------------------------------------------------------------------------------------
// Exercise 5
// Write a conditional that compares your age with Julia's age.
// This conditional will need to test if you are older, younger, or the
// same age, and print, appropriately, either "Julia is older than you",
// "Julia is younger than you", or "You have the same age as Julia". Save
// your changes and reload the file.

// if (myAge>juliaAge) {console.log ("Julia is younger than you")} else if (myAge===juliaAge) {console.log ("You have the same age as Julia")}
// else {console.log ("Julia is older than you")}

// ------------------------------------------------------------------------------------------------------------
// Exercise 6
// Create an array with all the names of your class (including mentors),
// then print the first element of the array in the console.
// On the next line, print the last element of the array in the console.
// On the next line, print all the elements of the array in the console
// (use a "for" loop). Save the file and reload the page. You should see
// the first element of the array, the last element of the array, and a
// list of all the elements in order in the array in the console.

// const classmates = ["Tomas","Hassan","Jonas","Maria", "Diogo"]
// console.log (classmates[0])
// console.log(classmates [4]);
// for (let i = 0; i < classmates.length; i++) {console.log(classmates[i]);}

// ------------------------------------------------------------------------------------------------------------
// Exercise 7
// Create an array with all the ages of the students in your class. Iterate
// the array using a while loop, and then print every age in the console.
// Add a conditional inside the while loop to only print even numbers.
// Write another a loop, but use a "for" loop instead of a "while" loop.
// Save your changes to your JavaScript file. Reload the HTML page in your
// browser. You should see every age printed, then only the even numbers
// printed. If not, investigate and fix it.

// const classmatesAge = [18, 24, 31, 33, 33, 34];
// // while loop
// let i = 0;
// while (i < classmatesAge.length) {
//     console.log(classmatesAge[i]);i++}

// let i = 0;
// while (i < classmatesAge.length) {
//   if (classmatesAge[i] % 2 == 0) {
//     console.log(classmatesAge[i]);
//   }
//   i++;
// }

// for(let i=0; i<classmatesAge.length;i++)
// {if (classmatesAge[i]%2==0) {
//     console.log (classmatesAge[i])}
// }

// ------------------------------------------------------------------------------------------------------------
// Exercise 8
// Use a loop to find the sum of all the elements of the ages array.

// let sum=0;
// for (let i = 0; i < classmatesAge.length; i++) {
// sum += classmatesAge[i];}
//     console.log(sum)

// ( += ) adds a value to a variable.
// ------------------------------------------------------------------------------------------------------------
// Exercise 9
// Use a loop to add the even numbers of an array. For example,
// const array = [1, 2, 8, 3, 2]; would result in the sum of 2 + 8 + 2,
// since they are even numbers. Print the result to the console.

// const numbers = [1, 2, 8, 3, 2];
// let sum=0
// for (let index = 0; index < numbers.length; index++) {if (numbers[index]%2==0)
//     {sum+=numbers[index];}
// } console.log (sum)

// const classmatesAge = [18, 24, 31, 33, 33, 34];
// let sum=0
// for (let index = 0; index < classmatesAge.length; index++) {if (classmatesAge[index]%2==0)
//     {sum+=classmatesAge[index];}
// }  console.log (sum)

// ------------------------------------------------------------------------------------------------------------
// Exercise 10
// Use a loop to add the numbers at even index positions of an array.
// For example, the const array = [1, 2, 8, 3, 2, 3, 4]; would result in
// the sum of 8 + 2 + 4 since they are in even positions in the array (ie,
// index positions 2, 4, and 6). Print the result to the console.

const numbers = [1, 2, 8, 3, 2, 3, 4];
let sum=0
for (let i= 2; i < numbers.length; i+=2) {
    sum+=numbers[i]
} console.log(sum);


// // Exercise 11:
// Write a JavaScript function that returns nothing and has no parameters.
// This function should print the result of the multiplication of two numbers
// (the numbers that you want).

// function foo() {
//   const multiply = 3*5
//   console.log('multiply :>> ', multiply);
// }
// const object = {
//     num1 :20,
//     num2 :90,
//     add: function (){
//         const summe = this.num1 + this.num2;
//         return summe;
//     }
// }
// console.log(object);
// console.log(object.add());
//vielleicht doch eher Expercise 12

// ------------------------------------------------------------------------------------------------------------
// Exercise 12
// Write a JavaScript function with no parameters. This function should return the result
// of the multiplication of two numbers (the numbers that you want), and in your main program,
// you should print the result.
// Tip: if a function returns something, you can assign the function call to a variable.
// In this way, the value of the return will be held by this variable.

// function addieren (a,b) {
//     const summe= a+b;
//     return summe
// }
// const number1 = addieren (3,9)
// const number2 =addieren (98,36)
// console.log(number1);
// console.log(number2);

// ------------------------------------------------------------------------------------------------------------
// Exercise 13
// Write a JavaScript function with two parameters.
// These parameters are the numbers that have to be multiplied. The function should return
// the result of the multiplication of both numbers (the numbers that you want), and in your
// main program, you should print the result. Test the function with 3 examples.

// function multi (a,b) {
//     const sum= a*b;
//     return sum
// }
// const number1 = multi (3,9)
// const number2 =multi (9,6)
// const number3 = multi (4,6)
// console.log(number1);
// console.log(number2);
// console.log(number3);

// ------------------------------------------------------------------------------------------------------------
// Exercise 14
// Write a function that determines the type of a triangle given the length of its three sides:
// Equilateral, Isosceles, or Scalene.


// function triangleType (a,b,c) {
//     if (a===b&&b===c) {return "Equilateral"} else if (a!==b&&b!==c){
//      return"Scalene"} else {return"Isosceles"};
//  }

//  const dreiecknr1 = triangleType (20,30,30)
//  console.log(dreiecknr1)







// const dreieck= {a : 10,b :30,c :30}


// funktioniert AUCH, NUR IF ELSE IF
// if (dreieck.a===dreieck.b&&dreieck.b===dreieck.c) {triangleType = "type1"} else if (dreieck.a===dreieck.b&&dreieck.b!==dreieck.c) {triangleType = "type2"}
//  else if (dreieck.a!==dreieck.b&&dreieck.b===dreieck.c)
//     {triangleType = "type2"} else {triangleType = "type3";
// }
// kürzere Version-funktioniert auch

// if (dreieck.a===dreieck.b&&dreieck.b===dreieck.c) {triangleType = "type1"} else if (dreieck.a!==dreieck.b&&dreieck.b!==dreieck.c){
//     triangleType="type3"} else{triangleType="type2"
//     };
// console.log(triangleType);

// ------------------------------------------------------------------------------------------------------------
// Exercise 15
// Write a function to find and print the lowest number in an array to the console.

// const numbers = [7, 4, 8, 3, 11];

// const object = {
//     sort: function (){
//     const lowestnumber = numbers.sort();
//     return lowestnumber;}
//  }
//  console.log (object.sort());
//  console.log (numbers[0]);

// ------------------------------------------------------------------------------------------------------------
// Exercise 16
// Write a function to find and print the highest number in an array to the console.

// const numbers = [7, 4, 9, 3, 8];

// const object = {
//     sort: function (){
//     const number = numbers.sort();
//     return number;}
//  }
//  console.log (object.sort());
//  console.log (numbers[numbers.length -1]);

//  leider falsch, weil sort nur die erste Zahl berücksichtigt

// ------------------------------------------------------------------------------------------------------------
// Exercise 17

// Write a function that receives two parameters: an array, and an index. The function will
// print the value of the element at the given index position. For example, given the following
// array and index, the function will print '6':

// const arrayAndIndex= printIndexNumber ([3,6,67,7,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100], 0)

// function printIndexNumber (array,index) {
//     const number = (array[index]);
//     return number;
// }
// console.log (arrayAndIndex)

// ------------------------------------------------------------------------------------------------------------
// Exercise 18
// Write a simple JavaScript function to join all elements of the following array into a
// single string:
// const myColor = ["Red", "Green", "White", "Black"];
// You should see the following in your console: "Red Green White Black"

// const myColor = ["Red", "Green", "White", "Black"]
// const myColorString = myColor.join(' ')

// let result = myColorString.toString();
// console.log(result);

// ------------------------------------------------------------------------------------------------------------
// Exercise 19
// Write a JavaScript function that reverses a number. For example, if const x = 32443;,
// then the output should be 34423.

// const x = 32443;
// let result = x.toString().split('').reverse().join('');
// console.log(result);

// ------------------------------------------------------------------------------------------------------------
// Exercise 20
// Write a JavaScript function that returns a string in alphabetical order. For example,
// if const x = 'webmaster';, then the output should be 'abeemrstw'. Punctuation and numbers aren't
// passed in the string.

// const x = 'webmaster'
// const sorted = x.split("").sort().join("");
// console.log(sorted);

// ------------------------------------------------------------------------------------------------------------
// Exercise 21
// Write a JavaScript function that finds the longest word in a phrase. For example,
// if const x = "Web Development Tutorial";,
// then the output should be "Development".

// const x = "Web Development Tutorial Bill cat";
// const xarray = x.split(" ");
// console.log (xarray)



// // funktioniert leider nicht so ganz, wie ich es möchte
// for (let i = 1; i < xarray.length; i++) 
  
//   { if (xarray[0].length >= xarray[i].length ) {
//   console.log (xarray[0])} 
//   else {for (let i = 0; i < xarray.length; i++) 
//     { if (xarray[1].length >= xarray[i].length ) {
//     console.log (xarray[1])}
//     else {console.log("no")}
//     }}
// }


// for (let i = 0; i < xarray.length; i++) 
//   { if (xarray[1].length >= xarray[i].length ) {
//   console.log (xarray[1])}
//   else {console.log("no")}
//   }


// for (let i = 0; i < xarray.length; i++) {
//   console.log(xarray[i]);
 
// }

// console.log(xarray[2].length);

// funktioniert:
// if (xarray[1].length < xarray[0].length) {console.log("yes");} else {console.log("no");}


// if (xarray[1].length < xarray[0].length && xarray[0].length > xarray[2].length) { 
//   console.log (xarray[0])
// } 
  


  

// ------------------------------------------------------------------------------------------------------------
// Exercise 22
// Write a function that receives as a parameter a string and replaces all "a" with "1". e.g.: "JavaScript" 
// will become "J1v1Script".

const x = "JavaScript";
const xArray =x.split("");
console.log(xArray);

for (let index = 0; index < xArray.length; index++) {
 xArray[index] = xArray[index].replaceAll('a','1');
}

console.log(xArray);



// ------------------------------------------------------------------------------------------------------------
// Exercise 23
// Write a JavaScript function that converts the first letter of every word in a string to uppercase. 
// For example, if const x = "prince of persia";
// then the output should be "Prince Of Persia".


// const x = "prince of persia";
// const xArray =x.split(" ");
// console.log(x);

// for (let index = 0; index < xArray.length; index++) {
//   const letter = xArray[index].charAt(0).toUpperCase() + xArray[index].slice(1);
//   console.log(letter)
// }


// folgendes funktioniert auch
// const letter1 = xArray[0].charAt(0).toUpperCase() + xArray[0].slice(1);
// console.log(letter1);

// const letter2 = xArray[1].charAt(0).toUpperCase() + xArray[1].slice(1);
// console.log(letter2);

// const letter3 = xArray[2].charAt(0).toUpperCase() + xArray[2].slice(1);
// console.log(letter3);

// console.log(letter1 +' '+letter2+' '+letter3);



// ------------------------------------------------------------------------------------------------------------
// Exercise 24
// Write a function that by sending a number as parameter, tells you all the even numbers before it. For example, if you send to the
// function the number 9, it should print 2,4,6,8.




// ------------------------------------------------------------------------------------------------------------
// Exercise 25
// Write a function that takes two numbers as parameters, then tells you the odd numbers between them. For instance, if you send
// the numbers 1 and 13 as parameters, it should print 1,3,5,7,9,11,13.



// ------------------------------------------------------------------------------------------------------------
// Exercise 26
// Write a function that receives an array and only prints the values that repeat. For example, given the following array,
// the function will print 6,23,33,100.
// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// Tip: this is considered by many students the most difficult exercise, therefore dedicate max. an hour to finding a
// solution and if you can't leave it for tomorrow. Most of the time we need to take breaks and we will be able to see problems
// from different angles with a fresh mind.

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
