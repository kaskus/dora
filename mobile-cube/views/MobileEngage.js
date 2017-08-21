function meStandard() {
	this.onResize = onResize;
	this.getBannerContentEl = getBannerContentEl;

	var bannerAd = new Banner();

	initClass();

    function initClass() {
        window.addEventListener('resize', onResize, false);
        onResize();
    };

	function onResize() {
		bannerAd.onResize();
	};

	function getBannerContentEl() {
		return bannerAd.getContentEl();
	};

	// Class object.
	function Banner() {
		this.onResize = onResize;
		this.getContentEl = getContentEl;

		var _wrapperEl = document.getElementById('banner-wrapper');
		var _contentEl = document.getElementById('banner-content');

		function onResize() {
			var newLeft = ((window.innerWidth - _wrapperEl.clientWidth) / 2) / window.innerWidth * 100;
			if(newLeft < 0) {
				newLeft = 0;
			}
			_wrapperEl.style.left = newLeft+'%';

			var newTop = ((window.innerHeight - _wrapperEl.clientHeight) / 2) / window.innerHeight * 100;
			if(newTop < 0) {
				newTop = 0;
			}
			_wrapperEl.style.top = newTop+'%';
		};

		function getContentEl() {
			return _contentEl;
		};
	};
};

function disableDefaultPropagation(e) {
	e.preventDefault();
	e.stopPropagation();
};
function getIntNumber(variable) {
	var intNumber = parseInt(variable);
	if(isNaN(intNumber) === true) {
		intNumber = 0;
	}
	return intNumber;
};