//jQuery - is a javascript library
// $ -alias
// jQuery

// const $elementfromDOM = $('.someclass');

// $elementfromDOM.hide()

//let $variableName = targetElement;

//select an item
// let $title = $("#headertitle");
// console.log($title);

// add event handler - on("event to listen for", callback fn)

//$jQueryObject.on("event", callbackfn)

// $("#headertitle").on("click", ()=>{
//     $("#headertitle").hide()
// })

// $("#description").on("click", ()=>{
//     $("#headertitle").show()
// })

// $(".loremipsum").on("mouseover", function(){
//     $(".loremipsum").text("This is a text you can read!");
//     $(".loremipsum").css('font-style', 'italic');
// }).on("mouseout", ()=>{
//     $(".loremipsum").text("The mouse left");
//     $(".loremipsum").css({
//         color: "red",
//         "background-color": "grey"
//     })
// })


// $(".loremipsum").on("mouseover", function(){
//     $(".loremipsum").text("This is a text you can read!");
//     $(".loremipsum").addClass("newClass");
// }).on("mouseout", ()=>{
//     $(".loremipsum").text("The mouse left");
//     $(".loremipsum").removeClass("newClass")
// })

//mouseenter and mouseleave vs mouseout and mouseover
//create a div on mouseenter, change the text content of the div.

//animation effect - fade slide
//fade - fadein("slow") fadeout("fast") fadeToggle(4000)
// $("#fadebtn").on("click", ()=>{
//     // $("#fadecontext").fadeIn(5000);
//     //$("#fadecontext").fadeToggle('fast')
//     //slide()
//      $("#fadecontext").slideToggle('fast')
// })

$("div").siblings().on("click", (event)=>{
    $(event.currentTarget).css("color", "purple");
    console.log($(event.currentTarget))
})

