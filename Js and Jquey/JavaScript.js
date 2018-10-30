$(document).ready(function () {
	$(".suppIn").fadeOut()
	$(".distIn").fadeOut()
	$(".supp").click(function () {
		$(".dist").animate({
			height: 'toggle'
		});
		$(".suppIn").fadeToggle()
	});
	$(".dist").click(function () {
		$(".supp").animate({
			height: 'toggle'
		});
		$(".distIn").fadeToggle()
	});
});

