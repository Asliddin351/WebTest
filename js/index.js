
$(function(){

// <карусель>
    $(".fist").click(function(){
        $("#header").toggleClass("bg-carousel_fist");
        
    });
    $(".second").click(function(){
        $("#header").toggleClass("bg-carousel_second");
    });
    $(".three").click(function(){
        $("#header").toggleClass("bg-carousel_three");
    });
// <карусель/>

// <карты>
    $(".c_fist").mouseenter(function(){
        $(".card-img__effect_1").css({"display": "flex"});
    });
    $(".c_fist").mouseleave(function(){
        $(".card-img__effect_1").css({"display": "none"});
    });

    $(".c_second").mouseenter(function(){
        $(".card-img__effect_2").css({"display": "flex"});
    });
    $(".c_second").mouseleave(function(){
        $(".card-img__effect_2").css({"display": "none"});
    })

    $(".c_tree").mouseenter(function(){
        $(".card-img__effect_3").css({"display": "flex"});
    });
    $(".c_tree").mouseleave(function(){
        $(".card-img__effect_3").css({"display": "none"});
    })
// <карты/>


});

