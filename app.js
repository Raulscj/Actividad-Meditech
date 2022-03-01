//nav
window.addEventListener('scroll', function () {
	var nav = document.querySelector('nav');
	nav.classList.toggle('sticky', window.scrollY > 0);
});

const slider = document.querySelector('.slider-h');
let sliderItem = document.querySelectorAll('#item-slide');
let sliderItemUltimo = sliderItem[sliderItem.length - 1];
const btnLeft = document.querySelector('#flecha1');
const btnRigth = document.querySelector('#flecha2');

slider.insertAdjacentElement('afterbegin', sliderItemUltimo);

function moveLeft() {
	let sliderItem = document.querySelectorAll('#item-slide');
	let sliderItemUltimo = sliderItem[sliderItem.length - 1];
	slider.style.marginLeft = '0';
	slider.style.transition = 'all 0.5s';
	setTimeout(function () {
		slider.style.transition = 'none';
		slider.insertAdjacentElement('afterbegin', sliderItemUltimo);
		slider.style.marginLeft = '-100%';
	}, 500);
}

function moveRigth() {
	let sliderPrimero = document.querySelectorAll('#item-slide')[0];
	slider.style.marginLeft = '-200%';
	slider.style.transition = 'all 0.5s';
	setTimeout(function () {
		slider.style.transition = 'none';
		slider.insertAdjacentElement('beforeend', sliderPrimero);
		slider.style.marginLeft = '-100%';
	}, 500);
}

btnRigth.addEventListener('click', function () {
	moveRigth();
});

btnLeft.addEventListener('click', function () {
	moveLeft();
});

//Item a observar
const imagen_info = document.getElementById('imagen-info');
const imagen_link1 = document.getElementById('item-hide1');
const imagen_link2 = document.getElementById('item-hide2');
const imagen_link3 = document.getElementById('item-hide3');
const datos1 = document.getElementById('observar_li1');
const datos2 = document.getElementById('observar_li2');
const datos3 = document.getElementById('observar_li3');
const datos4 = document.getElementById('observar_li4');

//funcion del item-hide

const cargaritem = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if (entrada.isIntersecting) {
			//efectos de entrada
			entrada.target.classList.add('visible');

			//codigo de contadores y animacion
			let contador1 = document.getElementById('contador1');
			let contador2 = document.getElementById('contador2');
			let contador3 = document.getElementById('contador3');
			let contador4 = document.getElementById('contador4');

			let cant1 = 0,
				cant2 = 0,
				cant3 = 0,
				cant4 = 0;

			let tiempo1 = setInterval(() => {
				contador1.textContent = Math.ceil((cant1 += 120));
				if (cant1 === 14227) {
					clearInterval(tiempo1);
				}
				if (cant1 > 14227) {
					contador1.textContent = 14227;
					clearInterval(tiempo1);
				}
			}, 2);

			let tiempo2 = setInterval(() => {
				contador2.textContent = cant2 += 388;
				if (cant2 === 48500) {
					clearInterval(tiempo2);
				}
			}, 1);

			let tiempo3 = setInterval(() => {
				contador3.textContent = cant3 += 1;
				if (cant3 >= 50) {
					clearInterval(tiempo3);
				}
			}, 30);

			let tiempo4 = setInterval(() => {
				contador4.textContent = cant4 += 1;
				if (cant4 >= 100) {
					clearInterval(tiempo4);
				}
			}, 14);
		}
	});
};

//observador

const observador = new IntersectionObserver(cargaritem, {
	threshold: 0.5,
});

observador.observe(imagen_info);
observador.observe(imagen_link1);
observador.observe(imagen_link2);
observador.observe(imagen_link3);
observador.observe(datos1);
observador.observe(datos2);
observador.observe(datos3);
observador.observe(datos4);

//animacion de numeros

$(document).ready(function () {
	//Drop Automatico
	$('.barra1').click(function () {
		$('#li1').slideToggle();
		$('#li2').slideUp();
		$('#li3').slideUp();
		$('#li4').slideUp();
		$('#li5').slideUp();
		$('#li6').slideUp();
		$('#li7').slideUp();
	});
	$('.barra2').click(function () {
		$('#li2').slideToggle();
		$('#li1').slideUp();
		$('#li3').slideUp();
		$('#li4').slideUp();
		$('#li5').slideUp();
		$('#li6').slideUp();
		$('#li7').slideUp();
	});
	$('.barra3').click(function () {
		$('#li3').slideToggle();
		$('#li1').slideUp();
		$('#li2').slideUp();
		$('#li4').slideUp();
		$('#li5').slideUp();
		$('#li6').slideUp();
		$('#li7').slideUp();
	});

	$('.barra4').click(function () {
		$('#li4').slideToggle();
		$('#li1').slideUp();
		$('#li2').slideUp();
		$('#li3').slideUp();
		$('#li5').slideUp();
		$('#li6').slideUp();
		$('#li7').slideUp();
	});
	$('.barra5').click(function () {
		$('#li5').slideToggle();
		$('#li1').slideUp();
		$('#li2').slideUp();
		$('#li3').slideUp();
		$('#li4').slideUp();
		$('#li6').slideUp();
		$('#li7').slideUp();
	});
	$('.barra6').click(function () {
		$('#li6').slideToggle();
		$('#li1').slideUp();
		$('#li2').slideUp();
		$('#li3').slideUp();
		$('#li4').slideUp();
		$('#li5').slideUp();
		$('#li7').slideUp();
	});
	$('.barra7').click(function () {
		$('#li7').slideToggle();
		$('#li1').slideUp();
		$('#li2').slideUp();
		$('#li3').slideUp();
		$('#li4').slideUp();
		$('#li5').slideUp();
		$('#li6').slideUp();
	});
	//Slider Button Top
	$('svg').click(function () {
		var x = document.getElementById('slider');
		x.scrollIntoView({ behavior: 'smooth', block: 'center' });
	});
});
