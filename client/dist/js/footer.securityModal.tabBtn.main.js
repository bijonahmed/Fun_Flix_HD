$(document).ready(function () {
    $(".w_list_btn").click(function () {
        $(".w_list_btn").removeClass('active');
        $(this).addClass('active');
    });

    // tab button 
    $("._tab").click(function () {
        $("._tab").removeClass('active');
        $(this).addClass('active');
    });

    // network switch option select
    $("._net_btn").click(function () {
        $("._net_btn").removeClass('active');
        $(this).addClass('active');
    });

    // footer add class btn_htoken
    $(".footer_list a").click(function () {
        $(".footer_list a").removeClass('active');
        $(this).addClass('active');
    });

    // btn_htoken
    $(".btn_htoken").click(function () {
        $(".btn_htoken").removeClass('active');
        $(this).addClass('active');
    });

    // security modal 
    $(".btn_security").click(function () {
        $(".popup_security").fadeIn();
    });
    // $(".popup_security").click(function(){
    //   $(".popup_security").fadeOut();
    // });
    $(".btn_close").click(function () {
        $(".popup_security").fadeOut();
    });
    $(".loader").fadeOut();
})

