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


var mobileEngage;
var browser;
var version = '3.2.0';
var isAdShown = null;

window.addEventListener('load', initStandardCreative, false);

function initStandardCreative() {
	browser = new Browser();
	mobileEngage = new meStandard();
	bindEvents();
    setupCreative();
    postReadyToProxy();
};

function messageHandler(event) {
    var supportedMsg = event.data;
    if (typeof(supportedMsg.owner) === 'undefined' || supportedMsg.owner !== 'Kaskus' || typeof(supportedMsg.adType) === 'undefined') {
        return;
    }

    if (supportedMsg.version != version) {
        console.warn('Proxy and ad version is different! Proxy v' + supportedMsg.version + ' vs Ad v'+version);
    }

    switch (supportedMsg.action) {
        case 'shown':
            if (isAdShown === null || isAdShown === false) {
                isAdShown = true;
                if (typeof(bannerShownAtPhoneScreen) === 'function') {
                    bannerShownAtPhoneScreen();
                }
            }
            break;
        case 'hide':
            if (isAdShown === null || isAdShown === true) {
                isAdShown = false;
                if (typeof(bannerHideFromPhoneScreen) === 'function') {
                    bannerHideFromPhoneScreen();
                }
            }
            break;
    }
};
function postReadyToProxy() {
    parent.postMessage({owner: 'Kaskus', adType: 'kaskus-cube-mobile', action: 'adReady', containerHeight: 250, version: version}, '*');
};
function bindEvents() {
    window.addEventListener('message', messageHandler, false);
};

var isBannerLoad = false;
function setupCreative() {
	if(isBannerLoad === true) {
		return;
	}

	mainContent(mobileEngage.getBannerContentEl());
	isBannerLoad = true;
};

function generateMaterial(elementData, container) {
   var elementType = (typeof(elementData.elType) === 'undefined') ? 'div' : elementData.elType;
   var materialEl = document.createElement(elementType);
   if(typeof(elementData.id) !== 'undefined') {
	   materialEl.setAttribute('id', elementData.id);
   }
   if(typeof(elementData.cssClass) === 'object' && typeof(elementData.cssClass.length) === 'number') {
	   for(var i = 0; i < elementData.cssClass.length; i++) {
		   materialEl.classList.add(elementData.cssClass[i]);
	   }
   }
   if(typeof(elementData.innerHTML) !== 'undefined') {
	   materialEl.innerHTML = elementData.innerHTML;
   }
   if(typeof(elementData.clickFunc) === 'function') {
	   materialEl.addEventListener('click', function(e) {
		   e.stopPropagation();
		   elementData.clickFunc(materialEl);
	   }, false);
   }
   if(typeof(elementData.clickTag) !== 'undefined') {
	   materialEl.addEventListener('click', function(e) {
		   e.stopPropagation();
		   triggerClickTag(elementData.clickTag);
	   }, false);
   }
   if(typeof(elementData.cssStyle) !== 'undefined' && typeof(elementData.cssStyle) === 'object') {
	   for(var cssKey in elementData.cssStyle) {
		   materialEl.style[cssKey] = elementData.cssStyle[cssKey];
	   }
   }
   if(typeof(elementData.attrs) !== 'undefined' && typeof(elementData.attrs) === 'object') {
	   for(var attrName in elementData.attrs) {
		   materialEl.setAttribute(attrName, elementData.attrs[attrName]);
	   }
   }
   if(typeof(elementData.childs) !== 'undefined' && typeof(elementData.childs) === 'object') {
	   for (var i = 0; i < elementData.childs.length; i++) {
		   generateMaterial(elementData.childs[i], materialEl);
	   }
   }
   container.appendChild(materialEl);
};
function mainContent(container) {
	for (var i = 0; i < materials.length; i++) {
		generateMaterial(materials[i], container);
	}

	if(typeof(bannerAnimationStart) === 'function') {
		setTimeout(bannerAnimationStart, 100);
	}
};
