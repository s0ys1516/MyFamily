var header__img = document.querySelector('#header__img');

header__img.onmouseover = function (event) {
	header__img.setAttribute('src', 'img/content/logo-green.png')
}

header__img.onmouseout = function (event) {
	header__img.setAttribute('src', 'img/content/logo-yellow.png')
}
