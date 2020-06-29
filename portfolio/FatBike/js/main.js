function toggleMenu() {
	let showMenu = document.querySelector('.burger')
	let button = document.querySelector('.burger__button-touch')
	let over = document.querySelector('.over')
		if (showMenu.classList.contains('active')) {
			showMenu.classList.remove('active')
			button.classList.remove('open')
			over.classList.remove('close')
			if (over.classList.contains('close') === false) {
				let body = document.querySelector('body');
				body.style.overflow = 'visible'
			}
		} else {
			showMenu.classList.add('active')
			button.classList.add('open')
			over.classList.add('close')
			if (over.classList.contains('close') === true) {
				let body = document.querySelector('body');
				body.style.overflow = 'hidden'
			}
		}
	}
document.querySelector('.burger').onclick = toggleMenu
document.querySelector('.over').onclick = toggleMenu

// **********show*fatbike*on*page***************
const block = {
	"f0001" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 26",
		"price" : "9999 ₴",
		"image" : "img/fotoFetBike_1.jpg"
	},
	"f0002" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 26",
		"price" : "4900 ₴",
		"image" : "img/fotoFetBike_2.jpg"
	},
	"f0003" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 28",
		"price" : "6300 ₴",
		"image" : "img/fotoFetBike_3.jpg"
	},
	"f0004" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 24",
		"price" : "5500 ₴",
		"image" : "img/fotoFetBike_4.jpg"
	},
	"f0005" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 26",
		"price" : "4800 ₴",
		"image" : "img/fotoFetBike_1.jpg"
	},
}
const blockOne = {
	"f0006" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 28",
		"price" : "3200 ₴",
		"image" : "img/fotoFetBike_1.jpg"
	},
	"f0007" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 28",
		"price" : "3200 ₴",
		"image" : "img/fotoFetBike_2.jpg"
	},
	"f0008" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 28",
		"price" : "3200 ₴",
		"image" : "img/fotoFetBike_3.jpg"
	},
	"f0009" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 28",
		"price" : "3200 ₴",
		"image" : "img/fotoFetBike_4.jpg"
	},
	"f0010" : {
		"name" : "Telluride",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ab atque ad ex provident reprehenderit a ipsam quaerat labore, impedit soluta perspiciatis numquam sunt est!",
		"frame" : "Alloy 28",
		"price" : "3200 ₴",
		"image" : "img/fotoFetBike_1.jpg"
	},
}

function showBike(){
	let showContentFatbike = document.querySelector('.content')
	outContentFatbike = ''
	for (let key in block) {
		outContentFatbike += '<div class="content__box">'
		outContentFatbike += '<div class="content__box-conteiner">'
		outContentFatbike += `<h2>${block[key]['name']}</h2>`
		outContentFatbike += `<span>${block[key]['description']}</span>`
		outContentFatbike += '<p>'
		outContentFatbike += `<span>${block[key]['frame']}</span>`
		outContentFatbike += `<span class="content__box-price">${block[key]['price']}</span>`
		outContentFatbike += '</p>'
		outContentFatbike += '<button><a href="#"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-10 12c0-5.514 4.486-10 10-10s10 4.486 10 10c0 1.679-.421 3.26-1.155 4.651l-1.377-1.377c-.662-.661-1.002-1.581-.93-2.514.137-1.767-.471-3.58-1.82-4.93-1.226-1.224-2.825-1.83-4.428-1.83-.603 0-1.206.086-1.79.257l3.77 3.771c.41 1.889-2.33 4.66-4.242 4.242l-3.77-3.77c-.172.584-.259 1.188-.259 1.792 0 1.602.606 3.202 1.829 4.426 1.352 1.351 3.164 1.958 4.932 1.821.932-.072 1.852.269 2.514.931l1.377 1.376c-1.391.734-2.972 1.154-4.651 1.154-5.514 0-10-4.486-10-10z"/></svg>Price</a></button>'
		outContentFatbike += '</div>'
		outContentFatbike += `<div class="content__box-image"><img src="./${block[key]['image']}" alt=""></div>`
		outContentFatbike += '</div>'
		outContentFatbike += '</div>'
	}
	showContentFatbike.innerHTML += outContentFatbike
}
showBike()

document.querySelector('.open__all').onclick = () => {
	event.preventDefault()
	let showContentFatbike = document.querySelector('.content__more')
	outContentFatbike = ''
	for (let key in blockOne) {
		outContentFatbike += '<div class="content__box">'
		outContentFatbike += '<div class="content__box-conteiner">'
		outContentFatbike += `<h2>${blockOne[key]['name']}</h2>`
		outContentFatbike += `<span>${blockOne[key]['description']}</span>`
		outContentFatbike += '<p>'
		outContentFatbike += `<span>${blockOne[key]['frame']}</span>`
		outContentFatbike += `<span class="content__box-price">${blockOne[key]['price']}</span>`
		outContentFatbike += '</p>'
		outContentFatbike += '<button><a href="#"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-10 12c0-5.514 4.486-10 10-10s10 4.486 10 10c0 1.679-.421 3.26-1.155 4.651l-1.377-1.377c-.662-.661-1.002-1.581-.93-2.514.137-1.767-.471-3.58-1.82-4.93-1.226-1.224-2.825-1.83-4.428-1.83-.603 0-1.206.086-1.79.257l3.77 3.771c.41 1.889-2.33 4.66-4.242 4.242l-3.77-3.77c-.172.584-.259 1.188-.259 1.792 0 1.602.606 3.202 1.829 4.426 1.352 1.351 3.164 1.958 4.932 1.821.932-.072 1.852.269 2.514.931l1.377 1.376c-1.391.734-2.972 1.154-4.651 1.154-5.514 0-10-4.486-10-10z"/></svg>Price</a></button>'
		outContentFatbike += '</div>'
		outContentFatbike += `<div class="content__box-image"><img src="./${blockOne[key]['image']}" alt=""></div>`
		outContentFatbike += '</div>'
		outContentFatbike += '</div>'
	}
	showContentFatbike.innerHTML += outContentFatbike
	document.querySelector('.open__all').style.display = 'none'
}