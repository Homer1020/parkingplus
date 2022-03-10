/**
 * TOGLE NAVBAR
 ***/

const btnToggleNavbar = document.getElementById('toggle-navbar');
const navbar = document.getElementById('navbar');

const handleToggleNavbar = e => {

	btnToggleNavbar.classList.toggle('active');
	navbar.classList.toggle('show');

}

if(btnToggleNavbar) {
	btnToggleNavbar.addEventListener('click', handleToggleNavbar);
}

/**
 * Site Header Fixed
 */
const siteHeader = document.getElementById('site-header');

const handleScrollFixedHeader = e => {
	if(window.scrollY >= 30) {
		siteHeader.classList.add('site-header--fixed')
	}else {
		siteHeader.classList.remove('site-header--fixed')
	}
}

if(siteHeader) {
	window.addEventListener('scroll', handleScrollFixedHeader);
}

/**
 * SLICK SLIDER
 */
$(document).ready(function(){
  $('.ad-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
  	autoplaySpeed: 2000
	});
});

/**
 * Iniciar AOS
 */
AOS.init({
	easing: 'cubic-bezier(0.4, 0.0, 0.2, 1);'
});

/**
 * Efecto del Banner principal - Comentado (creo que el efecto no es necesario)
 */

// const mainBanner = document.querySelector('.l-main-banner');

// const handleMouseMove = e => {
// 	const view3d = mainBanner.querySelector('.l-main-banner__content');
// 	view3d.style.transform = e.pageX && e.pageY
// 	?
// 	`
// 		rotateX(-${(e.pageY) / 36}deg)
// 		rotateY(${(e.pageX - (window.innerWidth / 4)) / 36}deg)
// 	`
// 	:
// 	'';
// 	view3d.style.transition = e.pageX === 0 && e.pageY === 0 ? 'transform .3s' : 'transform .1s';
// }

// const handleMouseLeave = () => {
// 	const view3d = mainBanner.querySelector('.l-main-banner__content');
// 	view3d.style.transform = 'rotateX(0deg) rotateY(0deg)';
// }

// if(mainBanner && mainBanner.querySelector('.l-main-banner__content')) {
// 	mainBanner.addEventListener('mousemove', handleMouseMove);
// 	mainBanner.addEventListener('mouseleave', handleMouseLeave);
// }

/**
 * Checkbox
 */

const customCheckboxes = document.querySelectorAll('.custom-checkbox');
customCheckboxes.forEach(checkbox => {
	checkbox.parentElement.querySelector('.custom-checkbox__text').addEventListener('click', e => {
		checkbox.querySelector('input').checked = !checkbox.querySelector('input').checked;
	});
});

/**
 * Form Contact
 */

const formContact = document.getElementById('form-contact');
const loginformPassword = document.getElementById('loginform-password');
const loginformUsername = document.getElementById('loginform-username');

const handleFormContactSubmit = e => {
	if(loginformPassword.value === '') {
		loginformPassword.style.borderColor = 'red';
		return;
	}
	if(loginformUsername.value === '') {
		loginformUsername.style.borderColor = 'red';
		return;
	}
}

const handleFormBlur = camp => {
	switch(camp) {
		case 'username':
			if(loginformUsername.value === '') {
				loginformUsername.classList.add('invalid');
				loginformUsername.classList.remove('valid');
				return;
			}
			loginformUsername.classList.add('valid');
			loginformUsername.classList.remove('invalid');
			return;
		case 'password':
			if(loginformPassword.value === '') {
				loginformPassword.classList.add('invalid');
				loginformPassword.classList.remove('valid');
				return;
			}
			loginformPassword.classList.add('valid');
			loginformPassword.classList.remove('invalid');
	}
}

if(formContact) {
	loginformUsername.addEventListener('blur', () => { handleFormBlur('username') });
	loginformPassword.addEventListener('blur', () => { handleFormBlur('password') });
	formContact.addEventListener('submit', handleFormContactSubmit);
}