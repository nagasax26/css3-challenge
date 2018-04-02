$('document').ready(function () {
    
    var clicked = false;
    
    var pwidth = $('.photo');
    //    alert(pwidth.width());

    var cwidth = $('.rate-star');
    //    alert(cwidth.width());
    var string = (((pwidth.width() / cwidth.width()) / 2) * cwidth.css('font-size').replace('px', '')) + 'px';

    cwidth.css('font-size', string);


    //another one
    $('.rate-star li').mouseover(function () {
        var index = $(this).index() + 1;
        clicked = false;
        $('.rate-star li').css('color', '#000'); //reset
        $('.rate-star li:lt(' + index + ')').css('color', 'orange', 'cursor');
    });

    $('.rate-star li').mouseleave(function () {
            if(!clicked)
                $('.rate-star li').css('color', 'black'); //reset 
    });

    $('.rate-star li').click(function () {
        var index = $(this).index() + 1;
        clicked = true;
        $('.rate-star li:lt(' + index + ')').css('color', 'orange', 'cursor');
    });



});
