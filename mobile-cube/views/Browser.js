function Browser() {
	this.getOS = getOS;
	this.getOSVersion = getOSVersion;
	this.getName = getName;
	this.isSupported = isSupported;

	var _os = 'other';
	var _osVersion = '0';
	var _name = 'other';
	var _isSupported = true;

	_detection();
	_unsupportedCondition();

	function _detection() {
		if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
			_os = 'ios';
			var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			_osVersion = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
		}
		else if(navigator.userAgent.toLowerCase().indexOf('android') > -1) {
			_os = 'android';
			var v = navigator.userAgent.match(/Android (\d+(?:\.\d+){1,2})/i);
			if(v !== null) {
				_osVersion = v[v.length - 1];
			}
		}

		var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		if(!!window.chrome && !isOpera && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
			_name = 'chrome';
		}
		if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
			_name = 'firefox';
		}
		if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
			_name = 'safari';
		}
	};

	function _unsupportedCondition() {
		if(_os === 'android') {
			if(_name !== 'chrome' && _name !== 'firefox') {
				// Stock browser that didn't use Chromium.
				if(parseFloat(_osVersion) < 4.1) {
					// Android version less than 4.1.2.
					_isSupported = false;
				}
				else {
					if(/i950/i.test(navigator.userAgent) === true || /m919/i.test(navigator.userAgent) === true
							|| /i337/i.test(navigator.userAgent) === true || /i545/i.test(navigator.userAgent) === true) {
						// Stock browser for Galaxy S4 is not supported.
						_isSupported = false;
					}
				}
			}
		}
	};

	function getOS() {
		return _os;
	};

	function getOSVersion() {
		return _osVersion;
	};

	function getName() {
		return _name;
	};

	function isSupported() {
		return _isSupported;
	};
};