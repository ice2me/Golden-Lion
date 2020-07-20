let burgerMenu = document.querySelector('.burger')
let buttonBurgerMenu = document.querySelector('.burger__button-touch')
function toggleBurgerMenu() {
	if (burgerMenu.classList.contains('active')) {
		burgerMenu.classList.remove('active')
		buttonBurgerMenu.classList.remove('open')
	}else{
		burgerMenu.classList.add('active')
		buttonBurgerMenu.classList.add('open')
	}
}
buttonBurgerMenu.addEventListener('click', toggleBurgerMenu)


document.querySelector('.screen__two-tabs__items').addEventListener('click',aTabs)
function aTabs(event){
	if(event.target.className == 'screen__two-tabs__item'){
		let dataTab = event.target.getAttribute('data-tab')
		let tabsH = document.getElementsByClassName('screen__two-tabs__item')
			for ( let i = 0; i < tabsH.length; i++){
				tabsH[i].classList.remove('opened')
		}
		event.target.classList.add('opened')
		let tabBody = document.getElementsByClassName('screen__two-tabs__block')
		for (let i = 0; i < tabBody.length; i++)
			{
			if(dataTab == i) {
				tabBody[i].style.display = 'block'
			}
			else
			{
				tabBody[i].style.display = 'none'
			}
		}
	}
}

function getTimeRemaining(endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date())
	let seconds = Math.floor((t / 1000) % 60)
	let minutes = Math.floor((t / 1000 / 60) % 60)
	let hours = Math.floor((t / (1000 * 60 * 60)) % 24)
	let days = Math.floor(t / (1000 * 60 * 60 * 24))
	return {
	'total': t,
	'days': days,
	'hours': hours,
	'minutes': minutes,
	'seconds': seconds
	}
}

function initializeClock(id, endtime) {
	let clock = document.getElementById(id)
	let daysSpan = clock.querySelector('.days')
	let hoursSpan = clock.querySelector('.hours')
	let minutesSpan = clock.querySelector('.minutes')
	let secondsSpan = clock.querySelector('.seconds')

	function updateClock() {
	let t = getTimeRemaining(endtime)
	daysSpan.innerHTML = t.days + '<p>днів</p>'
	hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + '<p>годин'
	minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + '<p>хвилин'
	secondsSpan.innerHTML = ('0' + t.seconds).slice(-2) + '<p>секунд'
	if (t.total <= 0) {
		clearInterval(timeinterval)
	}
}

	updateClock()
	let timeinterval = setInterval(updateClock, 1000)
}
let deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000)
let deadline1 = new Date(Date.parse(new Date()) + 20 * 12 * 60 * 60 * 1000)
let deadline2 = new Date(Date.parse(new Date()) + 7 * 14 * 60 * 60 * 1000)
initializeClock('countdown', deadline)
initializeClock('countdown1', deadline1)
initializeClock('countdown2', deadline2)