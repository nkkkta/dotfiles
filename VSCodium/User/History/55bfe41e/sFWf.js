



$(document).ready(function(){

    function mobileOwlClass(){
    if (window.innerWidth < 768 && !($('.gallery-container').hasClass('owl-loaded'))){
        $('.gallery-container').addClass("owl-carousel");
    }
    else{
        $('.gallery-container').removeClass("owl-carousel");
    }
}

    $(window).resize(mobileOwlClass);

    $('owl-carousel').owlCarousel({
        
    })
});