
// $(".rating").on("click", () =>{
//     $("#rating-value").addClass(data-value="1")
// })
$(document).ready(function(){
    let selectedRating = 0;
    //selecte the stars - use chaining with space - for parent-child
    // $(".rating span").on("mouseenter", (event) =>{
        //    $(event.target).data('value')
        let value = $(event.target).data('value');
    //     $(".rating span").addClass("hover")

    //     $(".rating span").each(function(index){
    //     $(this).toggleClass("hover", index < value)

    // })

    // })
    //  $(".rating span").on("mouseleave", (event) =>{
    // //    $(event.target).data('value')
    //     $(".rating span").removeClass("hover")

    //  })

    //  when star is clicked change rating vallue

     $(".rating span").on("click", (event) =>{
       })
        $(".rating span").each(function(index){
            $(this).text("innerHTML", index < value)

    })





























})