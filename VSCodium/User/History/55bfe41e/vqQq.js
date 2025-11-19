



$(document).ready(function(){

    function mobileOwlClass(){
    if (window.innerWidth < 768 && $('.gallery-container').had){
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