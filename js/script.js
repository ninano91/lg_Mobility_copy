$(function(){

/* 모바일 네비버튼 클릭시 서브메뉴 나오게 */
$("header .h_left button.hambtn").click(function(){
    $(this).hide();
    $("header .mobile_nav, header .h_left button.xbtn").show();
});
/* 엑스버튼 클릭시 서브메뉴 사라지게 */
$("header .h_left button.xbtn").click(function(){
    $(this).hide();
    $("header .mobile_nav").hide();
    $("header .h_left button.hambtn").show();
});


});