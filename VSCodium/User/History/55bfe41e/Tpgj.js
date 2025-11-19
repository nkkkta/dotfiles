$(document).ready(function(){
    $('owl-carousel').owlCarousel({

    })
})

$(document).ready(function(){
    $('owl-carousel').owlCarousel({
        
    })
});

function mobileOwlClass(){
    if ($(window).width() < 768){
        $('.gallery-container').addClass(".owl-carousel");
    }
    else{
        $('.gallery-container').removeClass(".owl-carousel");
    }
}

$(window).resize(mobileOwlClass);