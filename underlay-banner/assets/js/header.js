$("#mobile-menu-btn").click(function(){
	$(this).toggleClass("active");
	$("#mobile-menu").toggleClass("active");
	$("body").toggleClass("o-hidden");
	return false;
});

$("#site-header .user-photo").click(function(){
	$("#mobile-menu-btn").toggleClass("active");
	$("#mobile-menu").toggleClass("active");
	$("body").toggleClass("o-hidden");
	return false;
});