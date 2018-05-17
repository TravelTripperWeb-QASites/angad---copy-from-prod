/*
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  setTimeout(function(){
    $(".intro-logo img").attr("src", "/assets/images/logo-animation.gif");
  }, 500);
  setTimeout(function(){
    $(".intro-logo").slideUp(300);
  }, 2000);

  $(".overlay-blocks .overlay").hover(function(){
    $(this).css({"width": "72%"});
    $(".overlay-blocks .overlay").not(this).css({"width": "9%"});
  }, function(){
    $(".overlay-blocks .block-1").css({"width": "30%"});
    $(".overlay-blocks .block-2").css({"width": "20%"});
    $(".overlay-blocks .block-3").css({"width": "20%"});
    $(".overlay-blocks .block-4").css({"width": "30%"});
  });

});
