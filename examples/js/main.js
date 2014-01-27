/**
 * @fileOverview Demos for Slider
 * @author Juan Andrade <juandavidandrade@gmail.com>
 * @version 1.0
 */
$('.slider-single').slider({
	//auto: true,
	duration: 1000,
	//infinite: false,
	single: true
});

$('.slider-default').slider();

$('.slider-auto').slider({
	auto: true,
	duration: 2000,
	single: true
});

$('.slider-no-inf').slider({
	infinite: false
});