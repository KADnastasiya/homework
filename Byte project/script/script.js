$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(300);
})

$('.proposition > div').on('click', function(){
    $(this).children('.proposition-pretitle').toggleClass('pretitle_change-color');
    $(this).parent('.proposition').toggleClass('proposition_change-color');
    $(this).next('.proposition-text').slideToggle(300);
})