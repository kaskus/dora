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

var searchbtn = '.search-button';
var searchspace = '.search-space';
var other = '.header-search__search--other';
var headeraddsection = '.header-body-add';
var headercategorysection = '.header-body-category';
$(searchbtn).on('click', function(){
  if ($(searchspace).hasClass('active')) {
    $(searchspace).removeClass('active');
    $(headeraddsection).addClass('active');
    $(headercategorysection).addClass('active');
    $(".search-btn-img").attr('src','img/search-abu.png');
  }else{
    $('#my_image').attr('src','second.jpg');
    $(searchspace).addClass('active');
    $(headeraddsection).removeClass('active');
    $(headercategorysection).removeClass('active');
    $(".search-btn-img").attr('src','img/search-orange.png');
  }
});

//top apps recommend script
$(window).bind('scroll', function() {
	var noticeAppHeight = $(".notice-app").height();
  var expandableBannerHeight = $("#banner-frame").height();

	if($(window).scrollTop() > noticeAppHeight + expandableBannerHeight) {
		$("#site-header").addClass("fixed");
	} else {
		$("#site-header").removeClass("fixed");
	}
});

$("#fjb-tab").on('click', function(){
  if ($("#forum-tab").hasClass('active-forum')) {
    $("#forum-tab").removeClass('active-forum');
    $("#fjb-tab").addClass('active-fjb');

    $(".forum-category").removeClass('active');
    $(".fjb-category").addClass('active');
  }
});

$("#forum-tab").on('click', function(){
  if ($("#fjb-tab").hasClass('active-fjb')) {
    $("#fjb-tab").removeClass('active-fjb');
    $("#forum-tab").addClass('active-forum');

    $(".fjb-category").removeClass('active');
    $(".forum-category").addClass('active');
  }
});

$(".pick-category").on('click', function(){
  if ($(".below-add").hasClass('disappear')) {
    $(".below-add").removeClass('disappear');
    $(".pick-category-list").removeClass('appear');
  }else{
    $(".below-add").addClass('disappear');
    $(".pick-category-list").addClass('appear');
  }
});