var $menu = $("#menu");

$(window).scroll(function(){
        $('.step-blue-indicator').each(function(){
            if($(this).offset().top>=$(window).scrollTop() && $(this).offset().top<$(window).scrollTop()+400){
                $('active').removeClass('active');
                $(this).addClass('active');
            }
            else{
                $(this).removeClass('active');
            }
        });


        var ScrollPosition = $(this).scrollTop();
        if(ScrollPosition>150){
            $menu.removeClass("white-navbar-display-none").addClass("white-navbar-display");
        } else if (ScrollPosition<150){
            $menu.removeClass("white-navbar-display").addClass("white-navbar-display-none");
        }
    });
