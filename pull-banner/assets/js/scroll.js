$(window).bind('scroll', function() {

	var noticeAppHeight = $(".notice-app").height();

	if($(window).scrollTop() > noticeAppHeight) {
		$("#site-header").addClass("fixed");
		$(".mobile-menu-wrapper").addClass("fixed");
	} else {
		$("#site-header").removeClass("fixed");
		$(".mobile-menu-wrapper").removeClass("fixed");
	}

});