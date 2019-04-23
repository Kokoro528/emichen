$(document).ready(function() {
	var $header = $("header");
	var $sticky = $header.before($header.clone().addClass("sticky"));
	
	$(window).on("scroll", function() {
		var scrollFromTop = $(window).scrollTop();
		$("body").toggleClass("scroll", (scrollFromTop > 350));

	});

	$('.grid').masonry({
  		itemSelector: '.grid-item',
  		columnWidth: 120,
  		fitWidth: true,
  		gutter: 0
	});

	// slider starts

	$('.slider').slick({
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		nextArrow: '<button type="button" class="slick-next">Next</button>',
		autoplay: true,
		autoplaySpeed: 1500,
		dots: true,
		centerMode: true,
		slidesToShow: 3,

	});
});