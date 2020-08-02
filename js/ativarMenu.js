$(document).ready(() => {
	$(".hamburguer").click(() => {
		$(this).toggleClass("active");
		$(".navbar").toggleClass("active")
	})
})