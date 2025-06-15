// Given a student's score, print the gradde;
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: < 60
// Input: 85
// Output: B

let studentGrade = 85;

if (studentGrade > 90) {console.log('Grade is A')}
  else if (studentGrade > 80) {console.log('Grade is B')}
  else if (studentGrade > 70) {console.log('Grade is C')}
  else if (studentGrade > 60) {console.log('Grade is D')}
  else if (studentGrade > 50) {console.log('Grade is E')}
  else 
  {console.log('Grade is F')};
      


// Write a function that takes two arrays as arguments and returns a new array containing only the unique elements that are present in both arrays. Use Sets to implement this function.

let arr1 = [ 2, 4, 'girl', 'boy', 12, 13]

let arr2 = [ 5, 13, 'girls', 'boy', 5, 12]

let uniqueItems = function(arr1, arr2) {

  let uniques = [];

  for (let j=0; j<arr2.length; j++) {
    for ( let i=0; i<arr1.length; i++) {
      if (arr1[i] === arr2[j] && !uniques.includes(arr1[i])) 
     {
    uniques.push(arr1[i])
  }
    
  }
}
return uniques;
}

console.log(uniqueItems(arr1, arr2));

  

  



// const result = (
// for ( let i=0; i<arr1.length; i++)
// for (let j=0; j<arr2.length; j++)

// if (arr1[i] === aar2[j]) {
//   result.push(arr1[i])}
//   i++;
  
// console.log(result)
// // } 

// // console.log(result)


// using an arrow function, create a a simple calculator

// 1. add
// 2. subtract
// 3. divide
// 4. multiple

// calculate func - value and operator

// Write a function to group names by the first letter, e.g Femi, Faranak
// Anbu, Amrita,
// Ellie, Elena
// Carole, Cindy

// ["Femi", "Faranak", "Anbu", "Manoshree", "Amrita", "Ellie","Komal", "Elena", "Carole","Kseniia", "Cindy", "Sarah"]



//startWithSameLetter = (classNames) => {console.log(classNames.filter())}
  
 
// Write a function to group names by the first letter, e.g Femi, Faranak
// Anbu, Amrita,
// Ellie, Elena
// Carole, Cindy

// ["Femi", "Faranak", "Anbu", "Manoshree", "Amrita", "Ellie","Komal", "Elena", "Carole","Kseniia", "Cindy", "Sarah"]

// let classNames = ["Femi", "Faranak", "Anbu", "Manoshree", "Amrita", "Ellie","Komal", "Elena", "Carole","Kseniia", "Cindy", "Sarah"]

// function groupByFirstLetter(names) {
//   let grouped = [];

//   for (let student of names) {
//     let firstLetter = student[0].toUpperCase()}

//     if(!grouped[firstLettter]) {
//       grouped[firstLetter]= []
//      }

//     grouped[firstLetter].push(student);
//   }

//   // Convert the object to a list of arrays
//   // let result = Object.values(grouped);
//   console.log(result);


// groupByFirstLetter(classNames)











