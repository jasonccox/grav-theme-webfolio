var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(document).scrollTop();
    if ( zvalue > 75 ) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
}

function parallaxBackground() {
    $('.parallax').css('background-positionY', ($(window).scrollTop() * 0.3) + 'px');
}

jQuery(document).ready(function($){

    scrollHeader();

    // Scroll Events
    if (!isTouch){
        $(document).scroll(function() {
            scrollHeader();
            parallaxBackground();
        });
    };

    // Touch scroll
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });

    // Responsive Menu
    $('#nav-mobile-toggle').click(function () {
        $(this).toggleClass('active');
        $('#nav-mobile-overlay').toggleClass('open');
        $('body').toggleClass('mobile-nav-open');
    });

    $("#nav-mobile-overlay a").click(function(){
        $("#nav-mobile-overlay").removeClass("open"); 
        $("body").removeClass("mobile-nav-open"); 
        $("#nav-mobile-toggle").removeClass("active");
    });
});
