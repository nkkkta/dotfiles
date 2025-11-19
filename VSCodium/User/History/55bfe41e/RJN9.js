$(document).ready(function(){
    $('owl-carousel').owlCarousel({

    })
})

$(document).ready(function(){
    $('owl-carousel').owlCarousel({
        
    })
});

$(document).ready(function(){
    if ($(window).width() < 768){
        $('.gallery-container').addClass("owl-carousel");
    }
    else{
        $('gallery-container').removeClass("owl-carousel");
    }
});