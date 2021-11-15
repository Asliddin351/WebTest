let navbar = document.querySelector(".navbar");
let header = document.querySelector("#header").clientHeight;

$(function(){

// <карусель>
    $(".fist").click(function(){
        $("#header").addClass("bg-carousel_fist");
        $("#header").removeClass("bg-carousel_second");
        $("#header").removeClass("bg-carousel_three");
    });
    $(".second").click(function(){
        $("#header").addClass("bg-carousel_second");
        $("#header").removeClass("bg-carousel_fist");
        $("#header").removeClass("bg-carousel_three");
    });
    $(".three").click(function(){
        $("#header").addClass("bg-carousel_three");
        $("#header").removeClass("bg-carousel_fist");
        $("#header").removeClass("bg-carousel_second");
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
    // $("document").scroll(function(){
    //     if(window.scrollY > header) {
    //         openNav.css({"background-color": "#000"});
    //     }else{
    //         openNav.css({"background-color": "transparent"});
    //     }
    // });

});

document.addEventListener('scroll', function() {
    if(window.scrollY > header) {
        navbar.style = 'background-color: rgba(0,0,0,0.9)'
    }else{
        navbar.style = 'background-color: transparent'
    }
})

