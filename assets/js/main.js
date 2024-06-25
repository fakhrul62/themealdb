$(function(){
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 25) {
            $('.menu').addClass('bg');
        } else {
            $('.menu').removeClass('bg');
        }
    });
});
