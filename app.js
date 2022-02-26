//Item a observar

const imagen_link1 = document.getElementById('item-hide1');
const imagen_link2 = document.getElementById('item-hide2');
const imagen_link3 = document.getElementById('item-hide3');

//funcion del item-hide

const cargaritem = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if (entrada.isIntersecting ) {
			entrada.target.classList.add('visible')
		} else {
			entrada.target.classList.remove('visible')
		}
	})
};

//observador

const observador = new IntersectionObserver(cargaritem, {
	threshold: 0.5,
});

observador.observe(imagen_link1)
observador.observe(imagen_link2)
observador.observe(imagen_link3)


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
