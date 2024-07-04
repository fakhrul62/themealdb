// $(function(){
//     $(window).scroll(function () {
//         var scrolling = $(this).scrollTop();
//         if (scrolling > 25) {
//             $('.menu').addClass('bg');
//         } else {
//             $('.menu').removeClass('bg');
//         }
//     });
// });


$('.around-slider').slick({
    dots: false,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev text-lg hover:bg-[#12372A] border border-[#12372A] rounded h-7 w-10 leading-[50%] bg-white hover:text-white"><i class="fa-light fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next text-lg hover:bg-[#12372A] border border-[#12372A] rounded h-7 w-10 leading-[50%] bg-white hover:text-white"><i class="fa-light fa-arrow-right"></i></button>',
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
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
    ]
  });