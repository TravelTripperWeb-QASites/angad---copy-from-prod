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

  $(".overlay-blocks a").hover(function(){
    $(this).css({"width": "80%","opacity":"0"});
    $(".overlay-blocks .overlay").not(this).css({"width": "6%"});
    var imagefor = $(this).data('imgsrc');
    $("#mainroom-image").css('background-image', 'url(' + imagefor + ')');
  }, function(){
    $('.overlay').css({"width": "80%","opacity":"1"});
    $(".overlay-blocks .block-1").css({"width": "30%"});
    $(".overlay-blocks .block-2").css({"width": "20%"});
    $(".overlay-blocks .block-3").css({"width": "20%"});
    $(".overlay-blocks .block-4").css({"width": "30%"});
    $("#mainroom-image").css('background-image', 'url(/assets/images/home/stay-colorful-bg.jpg)');

  });

  if($(window).width() > 1025) {
    $(".stay-colorful-video").hover(function(){
      $(this).find("video").trigger('play');
    }, function(){
      $(this).find("video").trigger('pause');
    });
  }

  if($(window).width() <= 1024) {
    var $currentVideo = null;
    $(".stay-colorful-video video, .home-hero-video video, .inner-hero-banner").prop({"loop": false, "autoplay": false});
    $(".stay-colorful-video, .home-hero-video, .inner-hero-banner").click(function(){
      $currentVideo = $(this).find('video').get(0);
      $currentOverlay = $(this).find('.play-overlay');
      if($currentVideo.paused) {
        $currentOverlay.fadeOut(300);
        $currentVideo.play();
      } else {
        $currentOverlay.fadeIn(300);
        $currentVideo.pause();
      }
    });

    $(".stay-colorful-video video, .home-hero-video video, .inner-hero-banner").on('ended',function(){
      $(this).parent().find(".play-overlay").fadeIn(300);
    });

  }


  $('.top-block, .from-left').paroller({
    factor: -0.2,
    type: 'foreground',
    direction: 'horizontal'
  });

  $('.top-left-block').paroller({
    factor: -0.15,
    type: 'foreground',
    direction: 'horizontal'
  });

  $('.bottom-block, .bottom-right-block, .top-right-block, .from-right').paroller({
    factor: 0.2,
    type: 'foreground',
    direction: 'horizontal'
  });


  $('.press-listing .list-item:nth-child(2n)').addClass("green").find(".secondary-btn").addClass("blue");
  $('.press-listing .list-item:nth-child(3n)').addClass("blue").find(".secondary-btn").addClass("green");
  $('.press-listing .list-item:nth-child(4n)').addClass("yellow").find(".secondary-btn").addClass("red");
  $('.press-listing .list-item:nth-child(5n)').addClass("green").find(".secondary-btn").addClass("blue");

});

//for sticky header

$(window).on("load resize", function (e) {

  if($(document).scrollTop() >= 0 && $(document).scrollTop() <= 200) {
    $("nav").removeClass("fixed");
  }

  if($(document).scrollTop() > 200) {
    $("nav").addClass("fixed");
  }

});

$(window).on("scroll", function (e) {
  if($(document).scrollTop() >= 0 && $(document).scrollTop() <= 175) {
    $("nav").removeClass("fixed").css({"top": "0"});
  }

  if($(document).scrollTop() > 175 && $(document).scrollTop() < 300) {
    $("nav").css({"top": "-200px"}).removeClass("fixed");
  }
  if($(document).scrollTop() > 300) {
    $("nav").addClass("fixed").css({"top": "0"});
  }
});
