$(document).ready(function(){
    let countdecrement = 10; //time left or time we start with
    function startCountDownFunc(){
        if(countdecrement > 0){
             $("#countdown").text(countdecrement);
             countdecrement--;
             setTimeout(startCountDownFunc, 1000)
        }else{
            $("#countdown").text("Time Up!")
        }
    }
    $("#startCountdown").on("click", function(){
        countdecrement = 10;
        startCountDownFunc();
    })
})