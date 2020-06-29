
// ------------------------------Tubs---------------------------------------------
$(document). ready(function(){
	$('.top__currency-name, .top__empty-name, .men__name, .womens__name, .local__name, .look__name').click(function(event){
		if($('.top__currency, .top__empty, .men, .womens, .brand, .local, .look').hasClass('one')){
			$('.top__currency-name, .top__empty-name, .men__name, .womens__name, .local__name, .look__name').not($(this)).removeClass('active');
			$('.top__currency-text, .top__empty-text, .men__text, .womens__text, .local__text, .look__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})
})
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

