// ----------------------------Burger-menu-----------------------------
document.querySelector("#burger").onmouseover = burgerShow;
document.querySelector("#burger").onmouseout = burgerHide;
// создание параметров наведения мыши для открытия меню
function burgerShow() {
	document.querySelector("#burger").style.left = 0
}
function burgerHide() {
	document.querySelector("#burger").style.left = "-270px"
}
// создание параметров клавиатуры для открытия меню
document.onkeydown = function(event){
	// console.log(event);
	if(event.code == 'ArrowRight') burgerShow();
	if(event.code == 'ArrowLeft') burgerHide()
}
// ----------------------------Burger-menu-----------------------------
// ----------------------------Scrolling-----------------------------
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		
		const blockID = anchor.getAttribute('href').substr(1)
		
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
// ----------------------------Scrolling-----------------------------
// ----------------------------Tabs----------------------------------
document.querySelector('.tabs__header').addEventListener('click',fTabs);
function fTabs(event){
	// console.log(event);
	if(event.target.className == 'tabs__name'){
		let dataTab = event.target.getAttribute('data-tab');
		//отключает класс актив
		let tabsH = document.getElementsByClassName('tabs__name');
			for ( let i = 0; i < tabsH.length; i++){
				tabsH[i].classList.remove('active');
		}
		event.target.classList.add('active');//добавить класс в элемент
		let tabBody = document.getElementsByClassName('tabs__text');
		for (let i = 0; i < tabBody.length; i++)
			{
			if(dataTab == i) {
				tabBody[i].style.display = 'block';
			}
			else
			{
				tabBody[i].style.display = 'none';
			}
		}
	}
}
// ----------------------------Tabs----------------------------------

// document.oncontextmenu = function() {
// 	return false;
// }

document.querySelector("#lang__box").onmouseover = langBoxShow;
document.querySelector("#lang__box").onmouseout = langBoxHide;
function langBoxShow() {
	document.querySelector("#lang__box").style.right = 0
}
function langBoxHide() {
	document.querySelector("#lang__box").style.right = "-60px"
}


// ----------------------------Line----------------------------------
document.querySelector('.line__top').addEventListener('click',aTabs);
function aTabs(event){
	// console.log(event);
	if(event.target.className == 'line__question'){
		let dataTab = event.target.getAttribute('data-tab');
		//отключает класс актив
		let tabsH = document.getElementsByClassName('line__question');
			for ( let i = 0; i < tabsH.length; i++){
				tabsH[i].classList.remove('active__line');
		}
		event.target.classList.add('active__line');//добавить класс в элемент
		let tabBody = document.getElementsByClassName('line__content');
		for (let i = 0; i < tabBody.length; i++)
			{
			if(dataTab == i) {
				tabBody[i].style.display = 'block';
			}
			else
			{
				tabBody[i].style.display = 'none';
			}
		}
	}
}

// ----------------------------Line----------------------------------
