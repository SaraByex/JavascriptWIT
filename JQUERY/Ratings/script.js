//Jquery is a javascript library
//document.ready{}
//let $variablename = target

//select and item
let $title = $("#headertitle")
console.log($title)

//add event handler - use .on(("event", callback function))
$("#headertitle").on("click", ()=>{
    $("#headertitle").hide()
})

$("#description").on("click", ()=>{
    $("#headertitle").show()
})

$("#learn").on("mouseenter", () =>{
    $("#learn").text("Yesterday was a good day!")
}).on("mouseleave", () => {
    $("#learn").text("The mouse left");
    $("#learn").css({
        color: "red",
        "background-color": "grey",
        
    });

})

//fade and slide animation effects; fade-in(slow), fade--out(fast), fadetoggle(4000); slideup, slidedown, slidetoggle())
$("#clickme").on("click", ()=> {
   $("#fademe").slideToggle('fast');
   $("#fademe").slideup('slow');
})

$("#clickme").on("click", ()=> {
   $("#fademe").slideToggle('fast');
   $("#fademe").slideup('slow');
})
$("#clickme").on("click", ()=> {
   $("#fademe").slideToggle('fast');
   $("#fademe").slideup('slow');
})
$("#clickme").on("click", ()=> {
   $("#fademe").slideToggle('fast');
   $("#fademe").slideup('slow');
})

//add a new class
$("#learn").on("mouseenter", () =>{
    $("#learn").text("Yesterday was a good day!")
    $("#learn").addClass("newClass")
}).on("mouseleave", () => {
    $("#learn").text("The mouse left");
    $("#learn").removeClass("newClass")

})

//even listeners 

$(".loremipsum").siblings.on("click", (event){
    $(event.currentTarget).css("color", "red");
    console.log($event.currentTarget)


})

// $(".loremipsum").siblings("").css("color", "red")
// $(".loremipsum").children("").css("color", "blue")

