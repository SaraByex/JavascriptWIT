//if its someones birthday say happy birthday, name

// 1. ask for comesones birthday using input method
//  convet input to format i want
// get todays date using the inbuit function
// compute number of days between today and next birthday
// if diff = 0 - its birthday else, memtion theremaining days ** what if this year it already passed?
console.log("ggggsgsgsg")
$(document).ready(function(){

function displayMessage () {

  let birthDate = $("#birthDate").val();
  let todayDate = new Date();
  let firstName = $("#firstName").val();
  let remainDays = function () {
    (birthDate - todayDate)/ (1000 * 60 * 60 * 24);}//coverts to mlliseconds cezoz dates difference in javascript results to milliseconds

  if (birthDate === todayDate) {return `Hello ${firstName}! Its your Birthday!`}
    else
        {return `You have ${remainDays} days left to your birthday!`}
  
}

// const remainingDays = int(birthDate - todayDate)
// if 
//   console.log `Hello ${YOURNAME}, Happy birthday!`
// else 
//   console.log `You have ${remainingDays} days to your birthday
// random quotes//
     const quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay 1987" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll, 1915" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt, 1873" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill, 1950" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt, 1745" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu, 1901" }
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function displayRandomQuote() {
    const quoteObj = getRandomQuote();
    $("#quote").text(`"${quoteObj.quote}"`);
    $("#author").text(`${quoteObj.author}`);
  }z

  $(document).ready(function () {
// Load a quote on page load
    displayRandomQuote();

// Load a new quote on button click
    $("#newQuote").on("click", displayRandomQuote);
});

//submit button actions//

  $(".btn-submit").on("click", function(event){
        event.preventDefault(); // stop actual submission for demo
      $(".btn-submit", "a").attr("href")
  });
});
$("#signUpForm").on("submit", function (e) {
  e.preventDefault();

  const birthDateStr = $("#birthDate").val(); 
  const firstName = $("#firstName").val();
  const daysLeft = getDaysUntilBirthday(birthDateStr);

  let message = "";

  if (daysLeft === 0) {
    message = `Happy Birthday, ${firstName}!`;
    $(displayRandomQuote)
  } else {
    message = `Hello ${firstName}, your birthday is in ${daysLeft} day(s)!`;
  }

  $("#successMessage").removeClass("d-none").text(message);


});

