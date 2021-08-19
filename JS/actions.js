$('section').fadeOut(100);
$('section').fadeIn(1000);

let menuPhone = document.querySelector(".blockMenu__menuPhone");
let disappierMenu = document.querySelector(".blockMenu__disappierMenu");
let ulFor = document.querySelector(".blockMenu__secondUl");

let loginButton = document.querySelector(".header__buttonLog");
let firstForm = document.querySelector(".header__form");
let submit = document.querySelector(".header__submit");

let tabs = document.querySelector(".features__tabs");
let mainTab = document.querySelector(".features__blockTab");
let tab_1 = document.querySelector(".tab_1");
let tab_2 = document.querySelector(".tab_2");
let tab_3 = document.querySelector(".tab_3");

let textMainTab = document.querySelector(".features__p");
let textTab2 = document.querySelector(".features__textTab2");
let textTab3 = document.querySelector(".features__textTab3");

let arr = [tab_1, tab_2, tab_3];

let differentText = function() {
	for (let i = 0; i < arr.length; i++) {
		arr[i].onclick = function() {
			arr[0].classList.remove("firstTab");
			if (arr[i] === arr[0]) {
				arr[1].classList.remove("features__colorTab");
				arr[2].classList.remove("features__colorTab");

				textMainTab.classList.remove("textNone");
				textTab3.classList.add("textNone");
				textTab2.classList.add("textNone");
			} else if (arr[i] === arr[1]) {
				arr[0].classList.remove("features__colorTab");
				arr[2].classList.remove("features__colorTab");

				textMainTab.classList.add("textNone");
				textTab3.classList.add("textNone");
				textTab2.classList.remove("textNone");
			} else if (arr[i] === arr[2]) {
				arr[0].classList.remove("features__colorTab");
				arr[1].classList.remove("features__colorTab");

				textMainTab.classList.add("textNone");
				textTab2.classList.add("textNone");
				textTab3.classList.remove("textNone");
			} 
			return arr[i].classList.add("features__colorTab");
		}
	}	
}

differentText();

menuPhone.onclick = function() {
	disappierMenu.classList.toggle("blockMenu__disappierMenu");
	disappierMenu.classList.toggle("menuYes");
}

loginButton.onclick = function() {
	firstForm.classList.remove("header__form");
	firstForm.classList.toggle("formYes");
}

submit.onclick = function() {
	firstForm.classList.add("header__form");
	firstForm.classList.toggle("formYes");
}

