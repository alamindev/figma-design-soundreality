$(function () {
  // start coding for burger menu
  $(document).on("click", "#burger__desktop", function () {
    $(this).toggleClass("burger__active");
    $(this)
      .parent()
      .find(".menu__area")
      .toggleClass("translate-y-20 opacity-0 invisible");
    $(".mobile--menu").toggleClass("translate-y-20 opacity-0 invisible");
    $(".main-overlay").toggleClass("after:opacity-0 after:invisible");
  });

  // for phone select flag and country

  $(document).on("click", ".click-select-phone", function () {
    $(this).toggleClass("group");
    $(this)
      .parents(".phone-select-area")
      .find(".phone-menu")
      .toggleClass("translate-y-10 opacity-0 invisible"); 
  });

  $(document).on("click", ".phone-menu li", function () {
    let flug = $(this).data("flug");
    let code = $(this).data("code");
       $(this)
         .parents(".phone-select-area")
         .find(".click-select-phone")
         .find("#flug")
         .attr("src", flug);
         $(this)
           .parents(".phone-select-area") 
           .find("#telephone")
           .attr("placeholder", code);

    $(this).parent().addClass("translate-y-10 opacity-0 invisible");
      $(this)
        .parents(".phone-select-area")
        .find(".click-select-phone")
        .removeClass("group");
  });
  // start coding for header menu
  $(document).on("click", ".dropdown-menu", function () {
    $(".show-menu").addClass("translate-y-20 opacity-0 invisible");
    $(".dropdown-menu").removeClass("group");
    $(".main-overlay").addClass("after:opacity-0 after:invisible");
    $(this).toggleClass("group");
    $(this)
      .parent()
      .find(".show-menu")
      .toggleClass("translate-y-20 opacity-0 invisible");
    $(".main-overlay").toggleClass("after:opacity-0 after:invisible");
  });

  // start coding for showing sub menu
  $(document).on("click", ".sub__menu", function () {
    $(".mobile--sub").removeClass("translate-x-[100%]");
    $("body").addClass("overflow-hidden");
  });
  $(document).on("click", ".back__button", function () {
    $(".mobile--sub").addClass("translate-x-[100%]");
    $("body").removeClass("overflow-hidden");
  });
  // coding for show search bar mobile
  $(document).on("click", ".search__form", function () {
    $(".search--bar").removeClass("-translate-y-[100%]");
  });

  // start coding for login with email
  $(document).on("click", ".email__login", function () {
    $(this).addClass("hidden");
    $(".with__phone").addClass("hidden");
    $(".phone__login").removeClass("hidden");
    $(".with__email").removeClass("hidden");
  });
  // start coding for login with email
  $(document).on("click", ".phone__login", function () {
    $(this).addClass("hidden");
    $(".email__login").removeClass("hidden");
    $(".with__email").addClass("hidden");
    $(".with__phone").removeClass("hidden");
  });

  // start coding for click outside hide
  $(document).on("click", function (e) {
    if (
      $(e.target).closest("#burger__desktop").length === 0 &&
      $(e.target).closest(".menu__area").length === 0 &&
      $(e.target).closest(".mobile--menu").length === 0 &&
      $(e.target).closest(".mobile--sub").length === 0
    ) {
      $(".menu__area").addClass("translate-y-20 opacity-0 invisible");
      $("#burger__desktop").removeClass("burger__active");
      $(".mobile--menu").addClass("translate-y-20 opacity-0 invisible");
    }
    if (
      $(e.target).closest(".dropdown-menu").length === 0 &&
      $(e.target).closest(".show-menu").length === 0
    ) {
      $(".show-menu").addClass("translate-y-20 opacity-0 invisible");
      $(".dropdown-menu").removeClass("group");
    }
    if (
      $(e.target).closest(".search__form").length === 0 &&
      $(e.target).closest(".search--bar").length === 0
    ) {
      $(".search--bar").addClass("-translate-y-[100%]");
    }
    if (
      $(e.target).closest("#burger__desktop").length === 0 &&
      $(e.target).closest(".menu__area").length === 0 &&
      $(e.target).closest(".mobile--menu").length === 0 &&
      $(e.target).closest(".mobile--sub").length === 0 &&
      $(e.target).closest(".dropdown-menu").length === 0 &&
      $(e.target).closest(".show-menu").length === 0
    ) {
      $(".main-overlay").addClass("after:opacity-0 after:invisible");
    }
  });

  // start coding for slick slider tag
  let slick__tag = $(".slick--tag");

  if (slick__tag.length > 0) {
    $(slick__tag).slick({
      arrows: false,
      speed: 300,
      infinite: false,
      slidesToShow: 11,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  // start coding for slick slider showcase
  let showcase = $(".showcase");

  if (showcase.length > 0) {
    $(showcase).slick({
      arrows: false,
      speed: 300,
      infinite: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
  // start coding for slick product slider
  let product = $(".product-slider");

  if (product.length > 0) {
    $(product).slick({
      arrows: false,
      speed: 300,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: {
        delay: 5000,
      },
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            autoplay: false
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2.2,
          },
        },
      ],
    });
  }
  // start coding for slick product slider
  let productinfo = $(".product-info");

  if (productinfo.length > 0) {
    $(productinfo).slick({
      arrows: false,
      speed: 300,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1.2,
          },
        },
      ],
    });
  }
  // start coding for slick product slider
  let singleproduct = $(".single-product-slider");

  if (singleproduct.length > 0) {
    $(singleproduct).slick({
      arrows: false,
      speed: 300,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    });
  }
  /**
   * start coding for single production select option
   */

  $(".select-input").change(function () {
    if ($(this).is(":checked")) {
      var val = $(this).val();
      $(".option-value").html(val);
      if (val == "100ml" || val == "50ml") {
        $(".empty-stock").show();
        $(".empty-stock-notify").hide();
        $(".select-option-btn").hide();
        $(".tab-select-option").show();
        $(".add-to-cart").show();
      } else if (val == "40ml") {
        $(".empty-stock").hide();
        $(".empty-stock-notify").show();
        $(".select-option-btn").hide();
        $(".add-to-cart").hide();
        $(".tab-select-option").hide();
      }
    }
  });

  // accordion functionality

  function accordion() {
    $(".accordion-item:not(:first-child) .accordion-content").css(
      "display",
      "none"
    );
    $(".accordion-item:first-child .js-accordion-title").addClass("open");

    $(".js-accordion-title").click(function () {
      $(".open").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
    });
  }

  accordion();

  /**start coding for category filter menu */
  $(document).on("click", ".filter", function () {
    $(".category").removeClass("translate-x-[100%]");
    $("body").addClass("overflow-hidden");
  });
  $(document).on("click", ".category-back", function () {
    $(".category").addClass("translate-x-[100%]");
    $("body").removeClass("overflow-hidden");
  });
  /**start coding for sub category filter menu */
  $(document).on("click", ".sub__category_click", function () {
    $(".sub--category").removeClass("translate-x-[100%]");
    $("body").addClass("overflow-hidden");
  });
  $(document).on("click", ".sub-cate-back", function () {
    $(".sub--category").addClass("translate-x-[100%]");
    $("body").removeClass("overflow-hidden");
  });

  // start coding for show hide order summary
  $(document).on("click", ".order-summary", function () {
    $(this).toggleClass("group");
    $(this).parent().find(".order-summary-content").slideToggle();
  });

  /** start coding for checkout page step */
  function step() {
    var child = 1;
    var length = $(".step").length - 1;

    $(".step").not(".step:nth-of-type(1)").hide();
    $(".nav-step:nth-child(1)").addClass("active");

    $(".button__area button").click(function () {
      var id = $(this).attr("data-id"); 
      if (id == "next") {
        if (child <= length) {
          child++;
        }
      } else if (id == "prev") {
        if (child > 1) {
          child--;
        }
      }
      current(child);
    });

    //step nav
    $(".nav-step").click(function () { 
      let type = $(this).data("type"); 
      switch (type) {
        case "information":
          child = 1;
          break;
        case "shipping":
          child = 2;
          break;
        case "payment":
          child = 3;
          break;
        case "thank":
          child = 4;
          break;
      }
       current(child);
     });


    function current(child) {
      var currentSection = $(".step:nth-of-type(" + child + ")");
      var navsection = $(".nav-step:nth-of-type(" + child + ")").addClass(
        "active"
      );
      currentSection.fadeIn();
      $(".step").not(currentSection).hide();
      $(".nav-step").not(navsection).removeClass("active");
    }

  }
  step();

  /** start coding for after login dashboard page account info */
  $(document).on("click", ".account-info", function () {
    $(this).toggleClass("active-menu");
    $(this).find(".account-info-child").slideToggle();
  });
  
  /**start coding for show dashboard menu menu */
  $(document).on("click", ".dashboard--menu", function () {
    $(".dashboard").removeClass("translate-x-[100%]");
    $("body").addClass("overflow-hidden");
  });

  $(document).on("click", ".back-dashboard", function () {
    $(".dashboard").addClass("translate-x-[100%]");
    $("body").removeClass("overflow-hidden");
  });

  // start coding for js button
  $(document).on("click", ".reset", function () {
    $(".filter").trigger("reset");
  });

    // start coding for increment decrement
    $(".increment-btn").click(function (e) {
      e.preventDefault();
      var inc_value = $(this).parent(".increment-decrement").find(".qty-input").val();
      var value = parseInt(inc_value, 10);
      value = isNaN(value) ? "0" : value;
      if (value < 20) {
        value++;
       $(this).parent(".increment-decrement").find(".qty-input").val(value);
      }
    });
    $(".decrement-btn").click(function (e) {
      e.preventDefault();
      var dec_value = $(this).parent(".increment-decrement").find(".qty-input").val();
      var value = parseInt(dec_value, 10);
      value = isNaN(value) ? "0" : value;
      if (value > 1) {
        value--;
       $(this).parent(".increment-decrement").find(".qty-input").val(value);
      }
    });
    $(document).on('click', ".delete-cart-data",function (e) {
      e.stopPropagation(); 
  
        $(this).parents(".cart-item").remove();
        if ($(".cart-items").children().length < 1) {
          $(".cart-main-area")
            .html("<h3 class='py-4 px-3 text-lg text-brand-pink'>Cart is empty!</h3>");
          $(".countbox").remove();
        }
         $(".count").html($(".cart-items").children().length); 
    });
  
  // start coding for love btn active  
   $(document).on("click", ".lovebtn-brown", function (e) {
     e.stopPropagation(); 
     $(this).find("svg").toggleClass("!stroke-brand-brown !fill-brand-brown"); 
   });
   $(document).on("click", ".lovebtn-pink", function (e) {
     e.stopPropagation(); 
     $(this).find("svg").toggleClass("!stroke-brand-pink !fill-brand-pink"); 
   });
  // start coding for help btn active  
   $(document).on("click", ".helpfull-btn", function (e) {
     e.stopPropagation();
     $(this).find("svg").toggleClass("!stroke-brand-pink !fill-brand-pink"); 
     var incrementVal = $(this).find(".increment").text(); 
      var value = parseInt(incrementVal, 10);
      value = isNaN(value) ? "0" : value; 
     if (value < 1) {
          value++; 
     } else if( value > 0){
       value--; 
     }
         $(this).find(".increment").text(value); 
   });
  // start coding for dynamic button click
   $(document).on("click", ".row-price-click", function (e) {
     e.stopPropagation();
     $(".row-price-click").removeClass("active-row");
     $(".price-input").val(1);
     $(this).addClass('active-row');
     $(".price-input").val($(this).attr('data-price'));
   });
  
  // start coding for category menu tab 
     $(document).on("click", ".tabs-nav a", function (e) {
       $(".tabs-nav a").removeClass("sidebar-active");
       $(this).addClass("sidebar-active");

       // Display active tab
       let currentTab = $(this).attr("data-id");
       $(".tabs-content div").hide();
       $('#'+currentTab).show();

       return false;
     }); 
   
  // image gellary

	$(".single-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1, 
    arrows: false,
  });
   
    $(".thumbnail").on("click", function () {
      $(".single-slider").slick("slickGoTo", $(this).data("rel"));
    });
  
  }); 