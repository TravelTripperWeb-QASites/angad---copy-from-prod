/*
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  if($('.intro-logo video').length > 0) {
    $('.intro-logo video').trigger('play');
    $("body").css({"height": "100%", "overflow": "hidden"});
    $(".navbar").hide();
    $('.intro-logo video').on('ended',function(){
      $("body").css({"height": "auto", "overflow": "visible"});
      $(".intro-logo").slideUp(500, function(){
        $(".navbar").slideDown(300);
      });

    });
  }
});
