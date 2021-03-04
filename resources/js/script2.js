$(function(){
    $(function() {
    var $allMsg = $('.title');
    var $wordList = $('.title').html().split();
    $('.title').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 200);
        newEL.animate({ opacity: 1 }, 5000);
    });
});
	// nav
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });

        /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '10px'
    });
});