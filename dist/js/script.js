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
                $('.catalog__listwrap').eq(i).toggleClass('catalog__listwrap_active');
            })
        });
    };
    toggleSlide('.catalog__link');
    toggleSlide('.catalog__back');

    //modal

    $('[data-modal=consult]').on('click', function(){
        $('.overlay, #consult').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consult, #thanks, #buy').fadeOut('slow')
    });
    $('.button_catalog').on('click', function(){
      $('.overlay, #buy').fadeIn('slow');
    });
    $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('#buy .modal__descr').text($('.catalog__title').eq(i).text());
            $('.overlay, #buy').fadeIn('slow');
        })
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                number: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Минимальное число символов 2!")
                },
                number: "Пожалуйста, введите номер телефона",
                email: {
                    required: "Пожалуйста, введите свой email адресс",
                    email: "Неверная форма ввода"
                }
    
            }
        });
    };

    validateForms('#consult-form');
    validateForms('#consult form');
    validateForms('#buy form');

    $('input[name=number]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consult, #buy').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    //smooth scroll
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.pageup').fadeIn();
        }else {
            $('.pageup').fadeOut();
        }
    });

    new WOW().init();
  });