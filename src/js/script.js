$(document).ready(function(){
    $('.carousel__inner').slick({
      adaptiveHeight: true,
      dots: true,
      dotsClass: "my-dots",
      speed: 800,
      fade: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/chevron_left_solid_980.jpg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icon/chevron_right_solid_982.jpg"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false
         }
        }
      ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog__product').eq(i).toggleClass('catalog__product_active');
                $('.catalog__list').eq(i).toggleClass('catalog__list_active');
            })
        });
    };
    toggleSlide('.catalog__link');
    toggleSlide('.catalog__back');
  });