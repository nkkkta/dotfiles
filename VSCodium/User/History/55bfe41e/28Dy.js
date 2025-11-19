function mobileOwlClass(){
    if ($(window).width() < 768){
        $('.gallery-container').addClass("owl-carousel");
    }
    else{
        $('.gallery-container').removeClass("owl-carousel");
    }
}



$(document).ready(function(){
    $(window).resize(mobileOwlClass);

    $('owl-carousel').owlCarousel({
        
    })
});