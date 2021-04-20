$(document).ready(function(){
    $('.carousel__inner').slick({
      adaptiveHeight: true,
      // autoplay: true,
      autoplaySpeed: 2900,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/chevron_left_solid_980.jpg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icon/chevron_right_solid_982.jpg"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            dotsClass: "my-dots"
         }
        }
      ]
    });
  });