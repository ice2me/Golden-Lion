$(document).ready(function(){                  //слайдер
	$('.header__slider').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		dots: true,
		variableWidth: false,
	});
});
