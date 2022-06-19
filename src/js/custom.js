$(function () {
    
    // start coding for burger menu
    $(document).on('click', '#burger__desktop', function () {
        $(this).toggleClass('burger__active'); 
        $(this).parent().find('.menu__area').toggleClass('translate-y-20 opacity-0 invisible')
        $('.mobile--menu').toggleClass('translate-y-20 opacity-0 invisible') 
    })
    // start coding for header menu
    $(document).on('click', '.dropdown-menu', function () {
        if ($('.dropdown-menu').hasClass('group')) {
            $(".show-menu").addClass('translate-y-20 opacity-0 invisible');
            $('.dropdown-menu').removeClass('group'); 
        } else {
            $(this).toggleClass('group'); 
            $(this).parent().find('.show-menu').toggleClass('translate-y-20 opacity-0 invisible')
        } 
    })
    
    // start coding for showing sub menu
    $(document).on('click', '.sub__menu', function () { 
        $('.mobile--sub').removeClass('translate-x-[100%]'); 
        $('body').addClass('overflow-hidden')
    })
    $(document).on('click', '.back__button', function () { 
        $('.mobile--sub').addClass('translate-x-[100%]'); 
          $('body').removeClass('overflow-hidden')
    })
    // coding for show search bar mobile 
    $(document).on('click', '.search__form', function () { 
        $('.search--bar').removeClass('-translate-y-[100%]'); 
    })

    // start coding for login with email
    $(document).on('click', '.email__login', function () {
          $(this).addClass('hidden'); 
        $(".with__phone").addClass('hidden');
        $(".phone__login").removeClass('hidden');
        $('.with__email').removeClass('hidden');  
    })
    // start coding for login with email
    $(document).on('click', '.phone__login', function () {
          $(this).addClass('hidden');  
        $('.email__login').removeClass('hidden');  
        $('.with__email').addClass('hidden');  
        $('.with__phone').removeClass('hidden');  
    })

    
    // start coding for click outside hide 
    $(document).on('click', function (e) {
        if ($(e.target).closest("#burger__desktop").length === 0 && $(e.target).closest(".menu__area").length === 0 && $(e.target).closest(".mobile--menu").length === 0 && $(e.target).closest(".mobile--sub").length === 0) {
            $(".menu__area").addClass('translate-y-20 opacity-0 invisible');
            $('#burger__desktop').removeClass('burger__active'); 
            $('.mobile--menu').addClass('translate-y-20 opacity-0 invisible') 
        }
        if ($(e.target).closest(".dropdown-menu").length === 0 && $(e.target).closest(".show-menu").length === 0) {
            $(".show-menu").addClass('translate-y-20 opacity-0 invisible');
            $('.dropdown-menu').removeClass('group'); 
        }
        if ($(e.target).closest(".search__form").length === 0 && $(e.target).closest(".search--bar").length === 0) { 
            $('.search--bar').addClass('-translate-y-[100%]'); 
        }
    });

    // start coding for slick slider tag 
    let slick__tag = $('.slick--tag');

    if (slick__tag.length > 0) { 
        $(slick__tag).slick(
            {
                arrows: false,  
                speed: 300,
                infinite: false,
                slidesToShow: 11,   
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 1280,
                        settings: { 
                            slidesToShow: 3
                        }
                    }, 
                    {
                    breakpoint: 400,
                        settings: { 
                            slidesToShow: 1
                        }
                    }, 
                ]
            }
        );
    }  
    // start coding for slick slider showcase
    let showcase = $('.showcase');

    if (showcase.length > 0) { 
        $(showcase).slick(
            {
                arrows: false,  
                speed: 300,
                infinite: false,
                slidesToShow: 8,   
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 1280,
                        settings: { 
                            slidesToShow: 2
                        }
                    }, 
                ]
            }
        );
    }  
    // start coding for slick product slider
    let product = $('.product-slider');

    if (product.length > 0) { 
        $(product).slick(
            {
                arrows: false,  
                speed: 300,
                infinite: false,
                slidesToShow: 4,   
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 1279,
                        settings: { 
                            slidesToShow: 3
                        }
                    }, 
                    {
                    breakpoint: 540,
                        settings: { 
                            slidesToShow: 2.2
                        }
                    },  
                ]
            }
        );
    }  
    // start coding for slick product slider
    let productinfo = $('.product-info');

    if (productinfo.length > 0) { 
        $(productinfo).slick(
            {
                arrows: false,  
                speed: 300,
                infinite: false,
                slidesToShow: 3,   
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 767,
                        settings: { 
                            slidesToShow: 2
                        }
                    }, 
                    {
                    breakpoint: 540,
                        settings: { 
                            slidesToShow: 1.2
                        }
                    },  
                ]
            }
        );
    }  

    
})