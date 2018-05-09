const BANNER_VISIBILITY_THRESHOLD = 0.3;
var debounceWatchingUnderlayVisibility = debounce(watchUnderlayVisibility, 300);

function debounce(fn, delay) {
	var timer = null;
	return function () {
		var context = this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
}

function watchUnderlayVisibility() {
	var underlayFrame = $('#underlay-frame').get(0), underlayFrameWindow = underlayFrame.contentWindow ? underlayFrame.contentWindow : underlayFrame.contentDocument.defaultView;
	var underlayBannerTopOffset = $('.underlay__banner').get(0).getBoundingClientRect().top;
	var viewportHeight = $(window).height();
	if (underlayBannerTopOffset < (BANNER_VISIBILITY_THRESHOLD - 1) * viewportHeight) {
		underlayFrameWindow.postMessage('BANNER_INVISIBLE', '*');
	} else if (underlayBannerTopOffset < BANNER_VISIBILITY_THRESHOLD * viewportHeight) {
		underlayFrameWindow.postMessage('BANNER_VISIBLE', '*');
	}
}

$(window).bind('scroll', function() {

	var noticeAppHeight = $(".notice-app").height();

	if($(window).scrollTop() > noticeAppHeight) {
		$("#site-header").addClass("fixed");
		$(".mobile-menu-wrapper").addClass("fixed");
	} else {
		$("#site-header").removeClass("fixed");
		$(".mobile-menu-wrapper").removeClass("fixed");
	}

	debounceWatchingUnderlayVisibility();
});