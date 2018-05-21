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

  $('.top-block').paroller({
    factor: -0.3,
    type: 'foreground',
    direction: 'horizontal'
  });

  $('.top-left-block').paroller({
    factor: -0.3,
    type: 'foreground',
    direction: 'horizontal'
  });

  $('.bottom-block, .bottom-right-block, .top-right-block').paroller({
    factor: 0.3,
    type: 'foreground',
    direction: 'horizontal'
  });

  $('.press-listing .list-item:nth-child(2n)').addClass("green").find(".secondary-btn").addClass("blue");
  $('.press-listing .list-item:nth-child(3n)').addClass("blue").find(".secondary-btn").addClass("green");
  $('.press-listing .list-item:nth-child(4n)').addClass("yellow").find(".secondary-btn").addClass("red");
  $('.press-listing .list-item:nth-child(5n)').addClass("green").find(".secondary-btn").addClass("blue");

});


$(window).on("load resize scroll", function (e) {

  // if($(document).scrollTop() > 100 && $(document).scrollTop() <= 200) {
  //   $("nav").unbind().slideUp(500);
  // }

  if($(document).scrollTop() <= 100) {
    $("nav").removeClass("fixed");
    $("nav").unbind().slideDown(500);
  }

  if($(document).scrollTop() > 200) {
    $("nav").addClass("fixed");
    $("nav").unbind().slideDown(500);
  }

});
