// $(window).load(function() {      //Do the code in the {}s when the window has loaded 
//     $("#loader").fadeOut("slow");  //Fade out the #loader div
//   });
var loader = (function(window, $loadingScreen) {

    var elapsed = false;
    var loaded = false;

    setTimeout(function() {
        elapsed = true;
        if (loaded)
            hideLoadingScreen();
    }, 5000);

    var hideLoadingScreen = function() {
        $("#loader").fadeOut("slow");
    }

    $(window).on('load', function() {
        if (elapsed) {
            hideLoadingScreen();
        }
    });
})(window, $('#loader'))