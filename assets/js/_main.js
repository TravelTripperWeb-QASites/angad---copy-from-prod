/*
   jQuery plugin settings and other scripts
   ========================================================================== */
// filtering dates in booking widget

 setTimeout(function(){
   while($(".calendar-month__header__name").html().replace(/\n|\s|\u200E|\r/g, "").toLowerCase() != 'november2018') {
     $(".calendar-month__header__control--next").click();
   }
   $("td.calendar-month__grid__date[data-date='2018-11-01']").click();
   $("td.calendar-month__grid__date[data-date='2018-11-02']").click();
 },2000);

$(window).on("load", function(){
  if($(window).width() < 992) {
    $(".stay-colorful-video").append('<video muted loop poster="/assets/images/home/stay-colorful-banner.jpg" ><source src="//cdn.traveltripper.io/site-assets/32_897_15880/media/2018-05-23-050643/stay-colorful.mp4" type="video/mp4">Your browser does not support the video tag.</video><div class="play-overlay"><span class="far fa-play-circle"></span></div>');
  }
});

$(document).ready(function() {
  //hover effects for navigation
  //alert(window.innerWidth);

  $(".nav-item").hover(
    function() {
      var hoveredItemClass = $(this)
        .attr("class")
        .split(" ")[1];
      var hoveredItem = hoveredItemClass.replace("mainnav-", "");

      if (window.location.href.indexOf(hoveredItem) == -1) {
        $(".navbar").addClass("hovered-" + hoveredItem);
      }
    },
    function() {
      $(".navbar").removeClass(function(index, className) {
        return (className.match(/(^|\s)hovered-\S+/g) || []).join(" ");
      });
    }
  );

  if($(".rooms-listing .room-item").length > 0) {
    var openingDate = new Date(Date.parse("2018-11-01")).setHours(0,0,0,0);
    var todayDate = new Date().setHours(0,0,0,0);
    if(openingDate > todayDate) {
      $(".rooms-listing .room-item").each(function() {
        var fullUrl = $(this).find(".book-now-btn").attr("href");
        if(fullUrl.indexOf("#") > -1) {
          var urlArray = fullUrl.split("#");
          fullUrl = urlArray[0]+"&arrival_date=2018-11-01&departure_date=2018-11-02#"+urlArray[1];
        } else {
          fullUrl = fullUrl+"&arrival_date=2018-11-01&departure_date=2018-11-02";
        }
        $(this).find(".book-now-btn").attr("href", fullUrl);
      });
    }
  }

  setTimeout(function() {
    $(".intro-logo img").attr("src", "/assets/images/logo-animation.gif");
  }, 500);
  setTimeout(function() {
    $(".intro-logo").slideUp(300);
  }, 2000);

  $(".overlay-blocks a").hover(
    function() {
      $(this).css({
        width: "80%",
        opacity: "0"
      });
      $(".overlay-blocks .overlay")
        .not(this)
        .css({
          width: "6%"
        });
      var imagefor = $(this).data("imgsrc");
      $("#mainroom-image").css("background-image", "url(" + imagefor + ")");
    },
    function() {
      $(".overlay").css({
        width: "80%",
        opacity: "1"
      });
      $(".overlay-blocks .block-1").css({
        width: "30%"
      });
      $(".overlay-blocks .block-2").css({
        width: "20%"
      });
      $(".overlay-blocks .block-3").css({
        width: "20%"
      });
      $(".overlay-blocks .block-4").css({
        width: "30%"
      });
      $("#mainroom-image").css(
        "background-image",
        "url(/assets/images/home/stay-colorful-bg.jpg)"
      );
    }
  );

  if ($(window).width() > 1025) {
    $(".stay-colorful-video").hover(
      function() {
        $(this)
          .find("video")
          .trigger("play");
      },
      function() {
        $(this)
          .find("video")
          .trigger("pause");
      }
    );
  }

  if ($(window).width() <= 1024) {
    var $currentVideo = null;
    $(
      ".stay-colorful-video video, .home-hero-video video, .inner-hero-banner"
    ).prop({
      loop: false,
      autoplay: false
    });
    $(".stay-colorful-video, .home-hero-video, .inner-hero-banner").click(
      function() {
        $currentVideo = $(this)
          .find("video")
          .get(0);
        $currentOverlay = $(this).find(".play-overlay");
        if ($currentVideo.paused) {
          $currentOverlay.fadeOut(300);
          $currentVideo.play();
        } else {
          $currentOverlay.fadeIn(300);
          $currentVideo.pause();
        }
      }
    );

    $(
      ".stay-colorful-video video, .home-hero-video video, .inner-hero-banner"
    ).on("ended", function() {
      $(this)
        .parent()
        .find(".play-overlay")
        .fadeIn(300);
    });
  }

  $(".top-block, .from-left").paroller({
    factor: -0.2,
    type: "foreground",
    direction: "horizontal"
  });

  $(".top-left-block").paroller({
    factor: -0.15,
    type: "foreground",
    direction: "horizontal"
  });

  $(
    ".bottom-block, .bottom-right-block, .top-right-block, .from-right"
  ).paroller({
    factor: 0.2,
    type: "foreground",
    direction: "horizontal"
  });

  $(".press-listing .list-item:nth-child(2n)")
    .addClass("green")
    .find(".secondary-btn")
    .addClass("blue")
    .removeClass("yellow");
  $(".press-listing .list-item:nth-child(3n)")
    .addClass("blue")
    .find(".secondary-btn")
    .addClass("green")
    .removeClass("yellow");
  $(".press-listing .list-item:nth-child(4n)")
    .addClass("yellow")
    .find(".secondary-btn")
    .addClass("red")
    .removeClass("yellow");
  $(".press-listing .list-item:nth-child(5n)")
    .addClass("green")
    .find(".secondary-btn")
    .addClass("blue")
    .removeClass("yellow");

  $("[data-offergallery]").lightGallery({
    selector: ".item",
    counter: false,
    download: false,
    fullScreen: false
  });

  // Restrict form submission by disabling submit button until all required fields are filled (W.r.t GDPR Guidelines)

  function checkForm() {
    // here, "this" is an input element
    var isValidForm = true;
    $(this.form)
      .find(":input[required]:visible")
      .each(function() {
        if (!this.value.trim()) {
          isValidForm = false;
        }
      });
    $(this.form)
      .find('input[type="checkbox"]:required')
      .each(function() {
        if (!$(this).is(":checked")) {
          isValidForm = false;
        }
      });
    $(this.form)
      .find("select:required")
      .each(function() {
        if (
          !$(this)
            .find("option:selected")
            .val()
            .trim()
        ) {
          isValidForm = false;
        }
      });

    $(this.form)
      .find("#signUpBtn, #rfpBtn") // Button class names should be unique for every form
      .prop("disabled", !isValidForm);
    return isValidForm;
  }

  $("#signUpBtn, #rfpBtn") // Button class names should be unique for every form
    .closest("form")
    // indirectly bind the handler to form
    .submit(function() {
      return checkForm.apply($(this).find(":input")[0]);
    })
    // look for input elements
    .find(":input[required]:visible")
    // bind the handler to input elements
    .on("change keyup", checkForm)
    // immediately fire it to initialize buttons state
    .keyup();
});

//Rooms category filter
$(document).on("click", ".filter li a", function() {
  var filterOption = $(this).attr("data-filter");
  $(".filter li a").removeClass("active");
  $(this).addClass("active");
  if (filterOption == "all-rooms") {
    $(".rooms-listing .room-item").fadeIn(100);
  } else if (filterOption == "ada-filter") {
    $(".rooms-listing .room-item").fadeOut(100);
    $(".rooms-listing .room-item.ada-option").fadeIn(100);
  } else {
    $(".rooms-listing .room-item").fadeOut(100);
    $(".rooms-listing .room-item" + "." + filterOption).fadeIn(100);
  }
});

//for sticky header

$(window).on("load resize scroll", function() {
  if ($(document).scrollTop() > 100) {
    $("nav").addClass("scroll-header");
  } else {
    $("nav").removeClass("scroll-header");
  }

  if($(".blog-container").length) {
    var distance = $('.blog-row').offset().top;
    var endDistance = $(".blog-container").offset().top+$(".blog-container").height()-500;
    $window = $(window);
    console.log($(window).scrollTop());
    console.log(endDistance);
    var parentWidth = $(".blog-container").outerWidth();
    if ( $window.scrollTop() >= distance && $(window).scrollTop() < endDistance) {
      var leftPosition = $(".blog-col").offset().left+$(".blog-col").outerWidth();
      $('.blog-right-block').removeClass("absolute");
      $('.blog-right-block').addClass("fixed");
      var blockWidth = parentWidth*(33.33/100);
      $('.blog-right-block').css({"left": leftPosition+"px", "max-width": blockWidth+"px"});
    } else if($(window).scrollTop() >= endDistance) {
      $('.blog-right-block').addClass("absolute");
      $('.blog-right-block').removeClass("fixed");
    } else {
      $('.blog-right-block').removeClass("fixed");
      $('.blog-right-block').removeClass("absolute");
    }

  }

});


// Make Offer listing cards same height function

function fixItemHeights() {
  var heights = new Array();

  // Loop to get all element heights
  $(".balance_height").each(function() {
    // Need to let sizes be whatever they want so no overflow on resize
    $(this).css("min-height", "0");
    $(this).css("max-height", "none");
    $(this).css("height", "auto");

    // Then add size (no units) to array
    heights.push($(this).height());
  });

  // Find max height of all elements
  var max = Math.max.apply(Math, heights);

  // Set all heights to max height
  $(".balance_height").each(function() {
    $(this).css("height", max + "px");
    // Note: IF box-sizing is border-box, would need to manually add border and padding to height (or tallest element will overflow by amount of vertical border + vertical padding)
  });
}

$(window).on("load resize", function() {
  // Make Offer listing cards same height function trigger
  if ($(window).width() > 767) {
    fixItemHeights();
  }
});

//For more events carousel

$(".more-events-listing").slick({
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
        swipeToSlide: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        swipeToSlide: true
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

function pinterestShare(img, desc) {
  window.open(
    "//www.pinterest.com/pin/create/button/" +
      "?url=" +
      window.location.href +
      "&media=" +
      img +
      "&description=" +
      desc,
    "pinIt",
    "toolbar=no, scrollbars=no, resizable=no, top=0, right=0"
  );
  return false;
}

$(".arrival-datepicker, .departure-datepicker").datepicker({
  dateFormat: "yy-mm-dd",
  altField: ".main-date-1",
  altFormat: "yy-mm-dd",
  minDate: 0,
  onSelect: function(date) {
    var date2 = $(".arrival-datepicker").datepicker("getDate");
    //date2.setDate(date2.getDate() + 1);
    $(".arrival-datepicker").datepicker("setDate", date2);
    //sets minDate to dt1 date + 1
    $(".departure-datepicker").datepicker("option", "minDate", date2);
  }
});
