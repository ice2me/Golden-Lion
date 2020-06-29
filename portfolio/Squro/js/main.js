// ----------------------------Burger Menu------------------------------------

function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		if (menu.hasClass('burger-menu_active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');

// -----------------------------Burger Menu----------------------------------


$(document). ready(function(){
	$('.burger__lang-name, .burger__home-name, .top__four-name, .top__two-name' ).click(function(event){
		if($('.burger__lang, .burger__home, .top__four, .top__two').hasClass('one')){
			$('.burger__lang-name, .burger__home-name, .top__four-name, .top__two-name').not($(this)).removeClass('active');
			$('.burger__lang-text, .burger__home-text, .top__four-text, .top__two-text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})
})

$(document).ready(function(){
	$('.slider__box').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		fade: true,
		dots: true,
		variableWidth: false,
	});
});

let rangeOne = document.querySelector('.range__one');
let outOneValue = document.querySelector('.range__one-value');
rangeOne.oninput = function () {
	outOneValue.innerHTML = this.value;
};
let rangeTwo = document.querySelector('.range__two');
let outTwoValue = document.querySelector('.range__two-value');
rangeTwo.oninput = function () {
	outTwoValue.innerHTML = this.value;
};

