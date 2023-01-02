$(function(){

    "use strick"

    $(".back2top i").on('click',function(){
        $("html,body").animate({
            scrollTop: 0
        },1200)
    })

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop()

        if(scrolling > 20){
            $(".back2top i").fadeIn(500)
        }else{
            $(".back2top i").fadeOut(500)
        }

        if(scrolling > 50){
            $(".menu").addClass("nav_ex")
        }else{
            $(".menu").removeClass("nav_ex")
        }
    })


    	

        // popular slide
        $('.pplr_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<i class="fa-solid fa-angle-right nxtarw"></i>',
            prevArrow: '<i class="fa-solid fa-angle-left prearw"></i>',
          });

        //   video slide
        $('.video_main').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows:false,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                  breakpoint: 991.98,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 767.98,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          });

        //   sale slide
        $('.sale_main').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows:false,
            responsive: [
                {
                  breakpoint: 991.98,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 767.98,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          });

        //   acsesories slide
        $('.acsoris_main').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<i class="fa-solid fa-angle-right nxtacsoris"></i>',
            prevArrow: '<i class="fa-solid fa-angle-left prevacsoris"></i>',
            responsive: [
                {
                  breakpoint: 991.98,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 767.98,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          });


           //   counter part
 $('.counter').counterUp({
    delay: 10,
    time: 2000
});

           // video venobox
        new VenoBox({
            selector: '.my-video-links',
        });

        // sale lightbox
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
          })


        $('#container2').carousel({
            num: 5,
            maxWidth: 258.33,
            maxHeight: 370,
            showTime: 1000,
            scale: 0.9,
        });

       
    
       
})