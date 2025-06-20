


let firstArticle = document.getElementById('article1');

// by class
let paragraph = document.getElementsByClassName('docparagraph');

//get element by tag name

let article = document.getElementsByTagName('article');

let docTag = document.getElementsByClassName('docparagraph');

let Text1 = document.querySelector('.docparagraph'); //selects first element

let Text2 = document.querySelectorAll('p');//selects all elements
  console.log(Text2)

//manipulations:
// selectFirstArticle.innerHTML
// innetHTML
// innerText
// text-Content

//change contents of a class, using array method we can access the item 
for (let i=0; i<paragraph.length; i++) {
  paragraph[i].style.color='blue';
  console.log(paragraph[i]);

}

  for (let i of paragraph) {
  i.innerHTML = `I changed this css`;
}



//EVENTS & 
// eventlistener - functions that happens for a particular event syntax: eleent.addEventListener()

let clickalert = () => {
  alert('You have clicked a button')
}

let firstname = document.getElementById("firstname");
let emailaddress = document.getElementById("emailaddress");
let preferedsection = document.getElementById("preferedsection");
let address = document.getElementById("address");
let submitbtn = document.getElementById("submitbtn");


// add even listener to submit button

submitbtn.addEventListener("click", function(event){
  event.preventDefault();
  let firstnamevalue = firstname.value;
  let emailvalue = emailaddress.value;
  let sectionvalue = preferedsection.value;
  let addressvalue = address.value;


  document.getElementById("ticketname").textContent = firstnamevalue;
  document.getElementById("ticketemail").textContent = emailvalue;
  document.getElementById("ticketsection").textContent = sectionvalue;
  document.getElementById("ticketcity").textContent = addressvalue;

  if (!firstname.value || !emailaddress.value || !address.value) {
    alert("Please fill in all fields");
    return;
  }

});



///classButton.addEventListener("click", clickalert);



   

