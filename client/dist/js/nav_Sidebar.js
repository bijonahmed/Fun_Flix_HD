// $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('._nav').addClass('shadow');
      } else {
        $('._nav').removeClass('shadow');
      }
    });
  
    $(".s_btn").click(function(){
      $(".side_bar").fadeIn();
      $(".side_bar_box").addClass("moble");
      $(".menu_text h6").fadeIn();
      $(".s_btn_close").fadeIn();
    });

    $(".s_btn_close").click(function(){
      $(".side_bar").fadeOut();
      $(".side_bar_box").removeClass("moble");
      $(".menu_text h6").fadeOut();
      $(".s_btn_close").fadeOut();
    })
//   })