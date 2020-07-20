//****burger__menu
let closeBurger = document.querySelector('.burger__menu-button')
let openBurger = document.querySelector('#top-menu__button')
let burgerMenu = document.querySelector('.burger__menu')
let wrapper = document.querySelector('.wrapper')
let topMenu = document.querySelector('.top-menu')
let body = document.querySelector('body')

closeBurger.addEventListener('click', closeBurgerMenu)
openBurger.addEventListener('click', openBurgerMenu)

function closeBurgerMenu(e) {
	e.preventDefault()
	burgerMenu.style.marginRight = "-400px"
	wrapper.style.paddingRight = "0"
	topMenu.style.paddingRight = "0"
	body.classList.remove('scroll-disallowed')
}

function openBurgerMenu(e) {
	e.preventDefault()
	burgerMenu.style.marginRight = "0"
	wrapper.style.paddingRight = "400px"
	topMenu.style.paddingRight = "400px"
	body.classList.add('scroll-disallowed')
}

//****pop__up
let popUp = document.querySelector('#pop-up')
let popUpBody = document.querySelector('.popup')
let popUpBtnClose = document.querySelector('.popup__button')

popUp.addEventListener('click', openPopUp)
popUpBtnClose.addEventListener('click', closePopUp)

function openPopUp(e) {
	e.preventDefault()
	popUpBody.style.display = 'flex'
	body.classList.add('scroll-disallowed')
}

function closePopUp(e) {
	e.preventDefault()
	popUpBody.style.display = 'none'
	body.classList.remove('scroll-disallowed')
}

//****scroll
window.onscroll = function () {
	let scrolled = window.pageYOffset
	let logo = document.querySelector('.top-menu__logo')
	if (scrolled >= 150) {
		logo.classList.add('short')
	} else {
		logo.classList.remove('short')
	}
}


//***slider
const imgColection = document.querySelectorAll('.first-screen__center-slider__content')
const buttonBack = document.querySelector('#back')
const buttonNext = document.querySelector('#next')
let out = document.querySelector('.first-screen__center-slider__action')
let k = 0
let text = ''
buttonNext.addEventListener('click', next)
function next() {
	imgColection[k].classList.remove('active')
		k + 1 === imgColection.length ? k = 0 : k++
	imgColection[k].classList.add('active')
	text = imgColection[k].getAttribute('data-text')
	out.innerHTML = text
}

buttonBack.addEventListener('click', back)
function back() {
	imgColection[k].classList.remove('active')
		k - 1 == -1 ? k = 2 : k--
	imgColection[k].classList.add('active')
	text = imgColection[k].getAttribute('data-text')
	out.innerHTML = text
}

setInterval(next, 3000)