//DOM - Document Object Model - a tree-like that represent your HTML Documents.
//Javascript use the DOM to access the HTML element and manipulate them.

//Access Methods
//1. select the element - class, id, tag
//2. use the method - getElementById(), 
// getElementsClassName(), getElementsByTagName(), querySelector(), querySelectorAll() 

// //by id
// let firstArticle = document.getElementById("articleone");
// //console.log(firstArticle.innerHTML);

// //by class
// let paragraph = document.getElementsByClassName("docparagraph");
// console.log(paragraph);

// //by tag
// let docTag = document.getElementsByTagName("article");
// //console.log(docTag);

// //by querySelector - select with any selector, but return the first element that matches the selector
// let text = document.querySelector("#articleone");
// //console.log(text);

// //by querySelectorAll - returns a NodeList of all element that matches the selector
// let text2 = document.querySelectorAll("p");
// console.log(text2);

// //DOM Manipulations - create, update, delete, read element
// firstArticle.innerHTML = `<p> This is from the change</p><div>This is from JS</div>`;
// // innerText
// // textContent


// for(let i = 0; i <  docTag.length; i++){
//     if(i == 1){
//     docTag[i].style.backgroundColor = "blue";
//     }else{
//             docTag[i].style.backgroundColor = "green";
//     }

//     console.log(docTag[i]);
// }

// // for (let i of paragraph){
// //     i.innerHTML = `I changed this from css`;
// // }

// // paragraph.forEach((index, element) => {
// //     console.log(element, index)
// // });

// text2.forEach((index, element) => {
//      console.log(element, index)
// })
//EVENTS - something happens, click, hover, keydown, page load, submit

//event listener - functions that happens for a particular event

//syntax
//element.addEventListener("event-type", function);
//element.addEventListener("event-type", ()=>{
//    })


//exercise - get the button and add event listener
// let clickalert = () =>{
//     alert("You have clicked a button")
// }

// let classbutton = document.getElementById("btnclick");

// classbutton.addEventListener("click", clickalert)

/// task
let firstname = document.getElementById("firstname");
let emailaddress = document.getElementById("emailaddress");
let preferedsection = document.getElementById("preferedsection");
let address = document.getElementById("address");
let submitbtn = document.getElementById("submitbtn");

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
})
