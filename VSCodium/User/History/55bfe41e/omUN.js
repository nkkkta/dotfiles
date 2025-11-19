



$(document).ready(function(){

    function mobileOwlClass(){
    if (window.innerWidth < 768 && !($('.gallery-container').hasClass('owl-loaded'))){
        $('.gallery-container').addClass("owl-carousel");
            $('owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 1
            });
    }
    else if(window.innerWidth >= 768 && $('.gallery-container').hasClass('owl-loaded')){
        $('.gallery-container').trigger('destroy.owl.carousel').removeClass(
            'owl-carousel');
        )
    }
}

    $(window).resize(mobileOwlClass);


});