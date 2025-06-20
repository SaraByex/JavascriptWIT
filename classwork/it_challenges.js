// // Write a JavaScript function getFibonacci(n) that returns the first n numbers in the Fibonacci sequence as an array.

// // The Fibonacci sequence is a series of numbers where:

// // F(0) = 0

// // F(1) = 1

// // F(n) = F(n-1) + F(n-2) for n > 1

// // getFibonacci(1); // [0] 
// // getFibonacci(2); // [0, 1] 0 
// // getFibonacci(5); // [0, 1, 1, 2, 3]
// // getFibonacci(8); // [0, 1, 1, 2, 3, 5, 8, 13]

// function getFibonacci(n) {
//   const result =[];
//   let a = 0, b = 1; //initialise

//   while (result.length < n) {
//       result.push(a);
//       const next = a+b; // to get next number in the series

//       a=b ;
//       b=next;
//   }
//   return result
// }

// console.log(getFibonacci(2))
// console.log(getFibonacci(0))
// console.log(getFibonacci(8))
// console.log(getFibonacci(6))
// console.log(getFibonacci(10))
// function sumOddNumbers(){
//     let result = 0;
//     const arr1 = [45, 31, 89, 9, 3, 2, 7, 6, 10];
//     for (let i=0; i<arr1.length; i++) {
//         if (arr1[i] % 2 !== 0) {
//             result += arr1[i]};
//         }
// console.log(result);
// }

// sumOddNumbers()

// function is_valid_password(pwd) {

//   let errors = [];

//     if (pwd.length < 8) {
//       errors.push("Password should be at least eight characters")};

//     const hasNumber = /[0-9]/.test(pwd);
//     const hasUppercase = /[A-Z]/.test(pwd);
//     const hasLowercase = /[a-z]/.test(pwd);
//     const hasSpecial = /[^A-Za-z0-9]/.test(pwd);

//     if (!hasNumber) {errors.push('password is missing a number')};
//     if (!hasUppercase) {errors.push('password is missing an upper case character')};
//     if (!hasLowercase) {errors.push('password is missing a lower case character')};
//     if (!hasSpecial) {errors.push('password is missing a special character')};

//     if (errors.length === 0) {
//       errors.push("Password is valid");
//     }
// return errors;
// }


// let pwd = "maddrrur76";
// console.log(is_valid_password(pwd));
// pwd = "maddrru";
// console.log(is_valid_password(pwd));
// pwd = "maPddr@rur76";
// console.log(is_valid_password(pwd));

// Write a function countVowels(str) that returns the number of vowels in a given string.


// function countVowels(str) {

//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   let totalVowels = 0;

//   let givenString = str.split("");

//   for (let i = 0; i<vowels.length; i++)
//   for (let j = 0; j<givenString.length; j++)

//     if (vowels[i] === givenString [j]) {
//       totalVowels +=1;

//     };
//     return totalVowels;

// }
// let str = "IdontknowwhhyIcametoCanada"
// console.log(countVowels(str))
// str = "she came to me wondering if I had food"
// console.log(countVowels(str))
// str = "python is hardx5 but i get it"
// console.log(countVowels(str))

// Write a function to extract the domain from an email address. for example getDomain("femi@example.com");  should return  "example.com"

// function getDomain(email) {

//   const extract = email.split('@');
//   const domain = extract[1];
  
//   return domain;
// }

// let email = "sarabyex@outlook.com";
// console.log(getDomain(email));

// You want to filter bad words from user input. Write a function that replaces offensive words with .
// For example, censor("This app is stupid and ugly");  should return "This app is    .* and .  ** 

// function filterBadWords(sentence) {

//   const badWords = ["stupid", "idiot", "dumb", "jerk", "fool", "loser", "shut up"];
//   let newSentence = "";

//   for (let i = 0; i < badWords.length; i++)
//   if (sentence.includes(badWords[i])) {
//       newSentence = sentence.replace(badWords[i], '*')
     
         
//   }
//     return newSentence;
//   }

//   sentence = "He acted like a total fool yesterday jerk.";

//   console.log(filterBadWords(sentence));
// function filterBadWords(sentence) {

//   let badWords = ["stupid", "idiot", "dumb", "jerk", "fool", "loser", "shut up"];
//   let newSentence = sentence.toLowerCase();
  
//   for (let badWord of badWords)
//     if (newSentence.includes(badWord)) {
//       newSentence = newSentence.replace(badWord, '*')
      
      
//        }
//     return newSentence;
//   }

//   sentence = "He acted like a total fool yesterday Jerk.";

//   console.log(filterBadWords(sentence));

