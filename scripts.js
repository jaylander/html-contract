// Mobile/Tablet Nav Menu
let navBtn = document.getElementById('nav-btn');
let nav = document.getElementById('nav-right');


navBtn.addEventListener('click', () => {
	console.log(window.getComputedStyle(nav, null).getPropertyValue("top"));
	if (window.getComputedStyle(nav, null).getPropertyValue("top") == '-450px') {
		nav.style.top = "80px";
	} else {
		nav.style.top = "-450px";
	}
});


// Testimonial Swiper
let leftBtn = document.getElementById('left-btn');

const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: "auto",
	slideActiveClass: 'section__testimonial-slide--active',
	centeredSlides: true,
	spaceBetween: 40,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	// Navigation arrows
	navigation: {
		prevEl: '.bi-chevron-left',
		nextEl: '.bi-chevron-right',
		disabledClass: 'section__swiper-btn--disabled',
	},

});
