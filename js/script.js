$(document).ready(function() {
    $("p").click(function() {
        $(this).slideToggle("slow"); /*this points to the the paragraph you click on, not all */
    });
    
    $("button").mouseenter(function () {
        $(this).removeClass("makeRed").addClass("makeBlue");
    });
    
    $("button").mouseleave(function () {
        $(this).removeClass("makeBlue").addClass("makeRed");
    });

    $(".box").on("click", function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
    })
})

