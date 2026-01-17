// console.log("Femi");

// Variable Declaration
//Key words used to declare a variable
// var - used in pre-ES6 version 1995 - 2015
// allow redeclare and reassign

// var firstname = "Sarah";
// var firstname = "Faranak"; //redeclare
// firstname = "Ellie"; //reassign
// console.log(firstname);

// // let - Post ES6 2015 - till date
// // allow reassign do not allow redeclare
// let title = "Dean of student affairs";
// title = "Provost"  //reassign
// console.log(title)

// const - Post ES6 2015 - till date
// does not allow redeclare or reassign
//  const pie = 3.14;
//  const pie = 3.09;
//  pie = 3.00;

//Data type
// Number - 4, 3.14
// String - "4", "MCA", "true"
// Boolean - true, false 
// Symbol - Symbol("id")
// BigInt - 465n
// null - absence of value - null //object
// undefined - variable is declared but not assigned - let x; let x = undefined;
// object - collection of key-value pair {key:value}

//falsy value
// 0, "",'', null, undefined, false, NaN


// assignment operators
// = let course = "html"
// == compare value - 1 == "1" //true
// === compare value - 1 === "1"  //false
// +=  let num += 2; let num = num + 2;
//-=
//*=
// /=
// %=

// let numberone = 3;
// console.log("this is number", numberone)
// console.log(`This is number's ${numberone}`)

//conditional
//syntax
// if(condition){ // true or false
//     //execution statement
// }else if(condition){
//     //execution statement
// }else{
//     //execution statement
// }


// let num = [];

// if (typeof num === "number"){
//     console.log(`${num} is a number`)
// }else if (typeof num === "string"){
//     console.log(`${num} is a string`)
// }else{
//     console.log(`We dont know what it is`)
// }

// //ternary operator
// //conditional ? if true do this : if not true do this;
// let driverlicence = "class 7";

// if (driverlicence == "class 5"){
//     console.log("this person can drive");
// }else{
//     console.log("this person can not drive");
// }

// driverlicence == "class 5" ? console.log("this person can drive") : console.log("this person can not drive");

//can vote - use ternary operators

//increment and decrement operator ++ --

// let a = 3;
// let b = a++; //post-increment - return the original value then add 1
// let c = b;
// console.log(a);
// console.log(b);
// console.log(c);

// let a = 3;
// let b = ++a; //pre-increment - increase the value first, then return
// let c = b;
// console.log(a);
// console.log(b);
// console.log(c);

// // ++y pre y++ post

// let y = 6;
// let x = ++y;

// for (let i = 1; i < 4; ++i){
//     console.log(i)
// }


//arrays - list of ordered stored data -[]
// let students = ["Hyejin", "Anbu", "Kseniia", "Carole"]
// length = students.length - 1;
// console.log(students[length]);

//array methods
// .push()
// students.push("Ngozi");
// students.unshift("Manoshree");
// students.shift();
// students.pop();
// console.log(students);

//splice - add/remove element of an array, mutate the original array
// let students = ["Hyejin", "Anbu", "Kseniia", "Carole"]
// //array.splice(startIndex, noOfitem, elements)
// //students.splice(2,2);
// students.splice(2, 1, "Komal","Basra");
// console.log(students);

// //Slicing - return a new array of what has been selected - start - end(not include)
// let random = [1,2,"Car", [true,5,"Cindy"], [7,"MCA",9, ["Olesia",11,12], 13], 14,15]
// rand = random.slice(-4);
// console.log(rand);


//loops - repeating for multiple time(fix amount of time or when a condition is met, while its true)
//for loop

// for (initialization; stop condition; increment/decrement){
//     execution statement
// }

// for (let i =0; i < 5; ++i){
//     console.log(i);
// }

//break
//continue

// for (let i = 0; i < 5; ++i){
//     if(i === 1){
//         continue;
//     }else if(i === 3){
//         break;
//     }else{
//         console.log(i)
//     }
// }

// for in
// for of

//let students = ["Hyejin", "Anbu", "Kseniia", "Carole"]

// for (let student of students){
//     console.log(student)
// }

// for (let index in students){
//     console.log(students[index])
// }

//while loop

//start condition

// while (stop condition){
//     //execution statement
//     //increment
// }

// let y = 0;
// while (y <= 7){ //evaluate to true
//     console.log(y) //do this
//     ++y
// }


//do while
// let j = 0;

// do{
//     console.log(j)
//     j++
// } while( j <=9)


//Functions

// function nameoffunc(arg1, arg2){  - function declaration/named function/traditional function
//     execution statement
// }

// nameoffunc()

//function expression
// let nameoffunction = function (param1, param2){
//     execution statement
// }

//arrow function  --- ES6
// const nameoffunc = (arg1, param1) =>{
//         execution statement
// }

//IIFE - Immediately Invoked Function Expression

// (function(){
// execution statement
// })()

//High Order function and callback function

// function hof(callback){

//     return callback
// }

// hof(func)

// function greet(name){
//     return "Hello " + name;
// }

// function hof(callback){
//     sname = "Femi";
//     let result = callback(sname)
//     return result
// }


// console.log(hof(greet))

//using an arrow function, create a a simple calculator

// 1. add
// 2. subtract
// 3. divide
// 4. multiple

//calculate func - value and operator

// ["Femi", "Faranak", "Anbu", "Manoshree", "Amrita", "Ellie","Komal", "Elena", "Carole","Kseniia", "Cindy", "Sarah"]

//Block and scope

// 3 type of scope

// 1. global scope
// 2. function scope
// 3. block scope

// var - global, let - block, const - block

let course = "html";

// for (var i = 0; i <= 5; i++){
//     console.log(i)
   
// }

// console.log(i)
let a = 6;
let b= 6
function add(a, b){
    console.log(a,b)
}

function subtract(a,b){
     console.log(a,b)
}

add(1,2)
console.log(a,b)

//function to convert string upper case, lower case, reverse
function convertToUpperCase(word){
    return word.toUpperCase();
}
function convertToLowerCase(word){
    return word.toLowerCase();
}
function reverseWord(word){
    return word.split("").reverse().join("")
}
function tranformWordFunction(transformFunction, transformWord){
    return transformFunction(transformWord)
}
const myWord = "Hello World"
const upperCase = tranformWordFunction(convertToUpperCase, myWord)
const lowerCase = tranformWordFunction(convertToLowerCase, myWord)
const reverse =  tranformWordFunction(reverseWord, myWord)

console.log(`The upper case is ${upperCase}`)
console.log(`The lower case is ${lowerCase}`)
console.log(`The reverse word is ${reverse}`)




// students.map((student)=>{
//     console.log(student)
// })

// students.forEach(()=>{

// })

var favfood = ["QUiche", "Carrots", "Tuna", "Chicken", "Fries", undefined, undefined, "Pie"]

favfood[10] = "Pie"

console.log(favfood[9])

num = 3;

// if (num === 3){
//     console.log("num is 3")
// }else if(num === 4){
//     console.log("num is 4")
// }else{
//     console.log("num is something else")
// }


num === 3 ? console.log("num is 3") : 
num === 4 ? console.log("num is 4") : 
num === 5 ? console.log("num is 5") :
console.log("num is something else"); 