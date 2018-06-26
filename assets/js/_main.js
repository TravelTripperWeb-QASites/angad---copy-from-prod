/*
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document)
  .ready(function () {
    setTimeout(function () {
      $(".intro-logo img")
        .attr("src", "/assets/images/logo-animation.gif");
    }, 500);
    setTimeout(function () {
      $(".intro-logo")
        .slideUp(300);
    }, 2000);

    $(".overlay-blocks a")
      .hover(function () {
        $(this)
          .css({
            "width": "80%",
            "opacity": "0"
          });
        $(".overlay-blocks .overlay")
          .not(this)
          .css({
            "width": "6%"
          });
        var imagefor = $(this)
          .data('imgsrc');
        $("#mainroom-image")
          .css('background-image', 'url(' + imagefor + ')');
      }, function () {
        $('.overlay')
          .css({
            "width": "80%",
            "opacity": "1"
          });
        $(".overlay-blocks .block-1")
          .css({
            "width": "30%"
          });
        $(".overlay-blocks .block-2")
          .css({
            "width": "20%"
          });
        $(".overlay-blocks .block-3")
          .css({
            "width": "20%"
          });
        $(".overlay-blocks .block-4")
          .css({
            "width": "30%"
          });
        $("#mainroom-image")
          .css('background-image', 'url(/assets/images/home/stay-colorful-bg.jpg)');

      });

    if ($(window)
      .width() > 1025) {
      $(".stay-colorful-video")
        .hover(function () {
          $(this)
            .find("video")
            .trigger('play');
        }, function () {
          $(this)
            .find("video")
            .trigger('pause');
        });
    }

    if ($(window)
      .width() <= 1024) {
      var $currentVideo = null;
      $(".stay-colorful-video video, .home-hero-video video, .inner-hero-banner")
        .prop({
          "loop": false,
          "autoplay": false
        });
      $(".stay-colorful-video, .home-hero-video, .inner-hero-banner")
        .click(function () {
          $currentVideo = $(this)
            .find('video')
            .get(0);
          $currentOverlay = $(this)
            .find('.play-overlay');
          if ($currentVideo.paused) {
            $currentOverlay.fadeOut(300);
            $currentVideo.play();
          } else {
            $currentOverlay.fadeIn(300);
            $currentVideo.pause();
          }
        });

      $(".stay-colorful-video video, .home-hero-video video, .inner-hero-banner")
        .on('ended', function () {
          $(this)
            .parent()
            .find(".play-overlay")
            .fadeIn(300);
        });

    }


    $('.top-block, .from-left')
      .paroller({
        factor: -0.2,
        type: 'foreground',
        direction: 'horizontal'
      });

    $('.top-left-block')
      .paroller({
        factor: -0.15,
        type: 'foreground',
        direction: 'horizontal'
      });

    $('.bottom-block, .bottom-right-block, .top-right-block, .from-right')
      .paroller({
        factor: 0.2,
        type: 'foreground',
        direction: 'horizontal'
      });


    $('.press-listing .list-item:nth-child(2n)')
      .addClass("green")
      .find(".secondary-btn")
      .addClass("blue");
    $('.press-listing .list-item:nth-child(3n)')
      .addClass("blue")
      .find(".secondary-btn")
      .addClass("green");
    $('.press-listing .list-item:nth-child(4n)')
      .addClass("yellow")
      .find(".secondary-btn")
      .addClass("red");
    $('.press-listing .list-item:nth-child(5n)')
      .addClass("green")
      .find(".secondary-btn")
      .addClass("blue");


      $(".filter li a").click(function(){
        $(".filter li a").removeClass("active");
        $(this).addClass("active");
      });

  });


//for sticky header

$(window)
  .on("load resize scroll", function () {

    if ($(document)
      .scrollTop() > 100) {
      $("nav")
        .addClass("scroll-header");
    } else {
      $("nav")
        .removeClass("scroll-header");
    }

  });

// Make Offer listing cards same height function

function fixItemHeights() {
  var heights = new Array();

  // Loop to get all element heights
  $('.balance_height')
    .each(function () {
      // Need to let sizes be whatever they want so no overflow on resize
      $(this)
        .css('min-height', '0');
      $(this)
        .css('max-height', 'none');
      $(this)
        .css('height', 'auto');

      // Then add size (no units) to array
      heights.push($(this)
        .height());
    });

  // Find max height of all elements
  var max = Math.max.apply(Math, heights);

  // Set all heights to max height
  $('.balance_height')
    .each(function () {
      $(this)
        .css('height', max + 'px');
      // Note: IF box-sizing is border-box, would need to manually add border and padding to height (or tallest element will overflow by amount of vertical border + vertical padding)
    });
}

$(window)
  .on("load resize", function () {
    // Make Offer listing cards same height function trigger
    if ($(window)
      .width() > 767) {
      fixItemHeights();
    }
  });

//For more events carousel

$('.more-events-listing')
  .slick({
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          swipeToSlide: true,
        }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          swipeToSlide: true,
        }
    },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
