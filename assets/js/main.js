$(document).ready(function(){

	// верхний слайдер
	$('.slider-top__slider').slick({
		
		slidesToShow: 1,
		dots: true,
		prevArrow: ".slider-top__button--prev",
		nextArrow: ".slider-top__button--next",
		dotsClass: 'custom-dots', 
    	customPaging: function (slider, i) {

    
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    	},
	});

	// слайдер партнеры
	$('.partners__slider').slick({
		
		slidesToShow: 5,

		prevArrow: ".partners__button--prev",
		nextArrow: ".partners__button--next",
		responsive: [
		{
	  		breakpoint: 1160,
	  		settings: {
	  			slidesToShow: 4,

	  		}
	  	},
	  	{
	  		breakpoint: 1020,
	  		settings: {
	  			slidesToShow: 3,

	  		}
	  	},
	  	{
	  		breakpoint: 770,
	  		settings: {
	  			slidesToShow: 2,

	  		}
	  	},

	  	{
	  		breakpoint: 600,
	  		settings: {
	  			slidesToShow: 1,

	  		}
	  	},
		]
	});

	// слайдер отзывов
	$('.feedbacks__slider').slick({
		slidesToShow: 1,
		prevArrow: ".feedbacks__button--prev",
		nextArrow: ".feedbacks__button--next",
		dots: true,
		dotsClass: 'custom-dots_feedback', 
    	customPaging: function (slider, i) {

    
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    	},
	});

	$(".headerToggle").click(function() {
		$(".header-mobile").slideToggle("fast");
	});

	$(window).resize( function() {

		if ($(window).width() > 920) {
			$('.header-mobile').hide();
		}
		
	});

	$(function() {
	  $(window).scroll(function() {
	  	if($(this).scrollTop() != 0) {
	  		$('.toTop').fadeIn("fast");
	 	 } else {
	  		$('.toTop').fadeOut("fast");
		 }
	  });
	  
	  $('.toTop').click(function() {
	  	$('body,html').animate({scrollTop:0},700);
	  });
	});


	// "Проверить статус ремонта"
	$(function() {
		$('.nav__status').click(function(event) {
			$('.nav__check').fadeToggle('fast');
		});  

		$('.nav__button').click(function(event) {
			$('.popup__container').removeClass('hidden');
		});  

		$(document).on('click', function(e) {
			if (!$(e.target).closest(".nav__check").length && !$(e.target).closest(".nav__status").length) {
		    	$('.nav__check').fadeOut('fast');
			}

			if (!$(e.target).closest(".popup__ready").length && !$(e.target).closest(".nav__button").length) {
		    	$('.popup__container').addClass('hidden');
			}
		});
	});

});	