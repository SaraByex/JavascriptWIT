$(document).ready(function(){
    let selectedRating = 0;
    //select the stars
    $(".rating span").on("mouseenter", (event)=>{
           let value = $(event.target).data('value')
            // console.log($(event.target).data('value'))
            //for each rating add a class to change the color to yellow
            $(".rating span").each(function(index){
                $(this).toggleClass("hover", index < value)
            })
    })
// when mouse leave/out - remove class
$(".rating span").on("mouseleave", function(){
    $(".rating span").removeClass("hover")
})

//when a star is clicked - set the selectedRating to the data-value


})