!function(doc) {
  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, !0);
  }
  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, !0);
  }
}(document);



var $menu = $('#menu'),
  $SecondMenu = $('#SecondPageMenu'),
  $StepTwo = $('#StepTwoAnimation');

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
        console.log(ScrollPosition);
        if(ScrollPosition>150){
          $menu.removeClass('white-navbar-display-none').addClass('white-navbar-display');
          $SecondMenu.removeClass('white-navbar-second-page').addClass('white-navbar-display-fixed');
        } else if (ScrollPosition<150){
          $menu.removeClass('white-navbar-display').addClass('white-navbar-display-none');
          $SecondMenu.removeClass('white-navbar-display-fixed').addClass('white-navbar-second-page');
        }
        if (ScrollPosition >= 900) {
          $StepTwo.addClass('bussines-image-gif')
        }
    });

