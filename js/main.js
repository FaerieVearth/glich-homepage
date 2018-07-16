window.onresize = function(event) {
    var top = ($(window).height() / 3);
    var left = ($(window).width() / 2) - ($(".ver").width() / 2);
    console.log(top, left);
    $(".ver").css("position","absolute");
    $(".ver").css("top", top + "px");
    $(".ver").css("left", left + "px");
};

window.onload = function(event){
    $(".ver").fadeIn(1500);
    var top = ($(window).height() / 3);
    var left = ($(window).width() / 2) - ($(".ver").width() / 2);
    console.log(top, left);
    $(".ver").css("position","absolute");
    $(".ver").css("top", top + "px");
    $(".ver").css("left", left + "px");
}
var glichFactor = 500;


$(document).mousemove(function(event){
    //console.log(event.pageX + ", " + event.pageY);
    var medianHorizontal = Math.abs(($(".verBtn").offset().left + ($(".verBtn").width() / 2)) - event.pageX);
    var medianVerical = Math.abs(($(".verBtn").offset().top + ($(".verBtn").height() / 2)) - event.pageY);
    //console.log("HORIZONTAL: " + medianHorizontal, " VERTICAL: " + medianVerical);
    
    if (medianHorizontal <= 175 && medianVerical <= 90){
        
        if(medianHorizontal <= 70 && medianVerical <= 30){
            console.log("Reden glichy time :O");
            glichFactor = 100;
        }else{
            console.log("Glitchy time :D");
            glichFactor = 200;
        }
    }else{
        glichFactor = 500;
    }
});


