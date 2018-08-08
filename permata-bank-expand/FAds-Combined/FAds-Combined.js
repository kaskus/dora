function initNormal(lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.appstore = function() {
	this.initialize(img.appstore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,35);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,485,250);


(lib.download = function() {
	this.initialize(img.download);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,19);


(lib.googlePlay = function() {
	this.initialize(img.googlePlay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,35);


(lib.mobileApp = function() {
	this.initialize(img.mobileApp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,387);


(lib.permata = function() {
	this.initialize(img.permata);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,24);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.permata_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.permata();
	this.instance.parent = this;
	this.instance.setTransform(-128,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.permata_1, new cjs.Rectangle(-128,-12,256,24), null);


(lib.mobileapps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mobileApp();
	this.instance.parent = this;
	this.instance.setTransform(-165.5,-193.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mobileapps, new cjs.Rectangle(-165.5,-193.5,331,387), null);


(lib.googleplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.googlePlay();
	this.instance.parent = this;
	this.instance.setTransform(-58,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.googleplay, new cjs.Rectangle(-58,-17.5,116,35), null);


(lib.download_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.download();
	this.instance.parent = this;
	this.instance.setTransform(-85,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.download_1, new cjs.Rectangle(-85,-9.5,170,19), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-242.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-242.5,-125,485,250), null);


(lib.appstore_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.appstore();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.appstore_1, new cjs.Rectangle(-58.5,-17.5,117,35), null);


// stage content:
(lib._970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// mobileApp.png
	this.instance = new lib.mobileapps();
	this.instance.parent = this;
	this.instance.setTransform(705.5,-189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:50.5},6,cjs.Ease.get(-0.9)).to({y:170.5},84,cjs.Ease.get(0.9)).to({x:575.5,y:210.5},6,cjs.Ease.get(-0.9)).wait(49));

	// permata.png
	this.instance_1 = new lib.permata_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1105,90.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).to({x:795},6,cjs.Ease.get(-0.9)).to({x:805},3,cjs.Ease.get(0.9)).wait(46));

	// download.png
	this.instance_2 = new lib.download_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(805,86.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98).to({_off:false},0).to({y:166.5,alpha:1},13,cjs.Ease.get(-0.9)).to({y:156.5},6,cjs.Ease.get(0.9)).wait(28));

	// googlePlay.png
	this.instance_3 = new lib.googleplay();
	this.instance_3.parent = this;
	this.instance_3.setTransform(867.5,275);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).to({y:185},13,cjs.Ease.get(-0.9)).to({y:195},6,cjs.Ease.get(0.9)).wait(2));

	// appstore.png
	this.instance_4 = new lib.appstore_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(744.5,275);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111).to({_off:false},0).to({y:185},13,cjs.Ease.get(-0.9)).to({y:195},6,cjs.Ease.get(0.9)).wait(15));

	// bg.jpg
	this.instance_5 = new lib.bg_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(727.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(970,-258,485,633.5);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxu9i4u3i.png", id:"appstore"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxu9j4c7z.jpg", id:"bg"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxu9mbmbf.png", id:"download"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxu9mzku1.png", id:"googlePlay"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxu9nukut.png", id:"mobileApp"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxu9ofprs.png", id:"permata"}
	],
	preloads: []
};




}
function initMinim(lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.appstore = function() {
	this.initialize(img.appstore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,35);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


(lib.download = function() {
	this.initialize(img.download);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,19);


(lib.googlePlay = function() {
	this.initialize(img.googlePlay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,35);


(lib.hashtag = function() {
	this.initialize(img.hashtag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,15);


(lib.mobileApp = function() {
	this.initialize(img.mobileApp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,387);


(lib.permata = function() {
	this.initialize(img.permata);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,24);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.permata_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.permata();
	this.instance.parent = this;
	this.instance.setTransform(-128,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.permata_1, new cjs.Rectangle(-128,-12,256,24), null);


(lib.mobileapps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mobileApp();
	this.instance.parent = this;
	this.instance.setTransform(-165.5,-172.4,0.946,0.946);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mobileapps, new cjs.Rectangle(-165.5,-172.4,313,366), null);


(lib.hashtag_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hashtag();
	this.instance.parent = this;
	this.instance.setTransform(-106.5,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hashtag_1, new cjs.Rectangle(-106.5,-7.5,213,15), null);


(lib.googleplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.googlePlay();
	this.instance.parent = this;
	this.instance.setTransform(-58,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.googleplay, new cjs.Rectangle(-58,-17.5,116,35), null);


(lib.download_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.download();
	this.instance.parent = this;
	this.instance.setTransform(-85,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.download_1, new cjs.Rectangle(-85,-9.5,170,19), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-242.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-242.5,-125,970,90), null);


(lib.appstore_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.appstore();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.appstore_1, new cjs.Rectangle(-58.5,-17.5,117,35), null);


// stage content:
(lib._970x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// hashtag.png
	this.instance = new lib.hashtag_1();
	this.instance.parent = this;
	this.instance.setTransform(394,99.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({y:59.1},5,cjs.Ease.get(-0.9)).to({y:64.1},3,cjs.Ease.get(0.9)).wait(33));

	// mobileApp.png
	this.instance_1 = new lib.mobileapps();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,-189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:130.5},6,cjs.Ease.get(-0.9)).to({y:162.5},84,cjs.Ease.get(0.9)).to({x:185},6,cjs.Ease.get(-0.9)).wait(49));

	// permata.png
	this.instance_2 = new lib.permata_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1105,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({x:388},6,cjs.Ease.get(-0.9)).to({x:398},3,cjs.Ease.get(0.9)).wait(10).to({y:30},3,cjs.Ease.get(-0.9)).to({y:35},5,cjs.Ease.get(0.9)).wait(28));

	// download.png
	this.instance_3 = new lib.download_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(695,-33.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).to({y:36.5,alpha:1},13,cjs.Ease.get(-0.9)).to({y:26.5},6,cjs.Ease.get(0.9)).wait(28));

	// googlePlay.png
	this.instance_4 = new lib.googleplay();
	this.instance_4.parent = this;
	this.instance_4.setTransform(757.5,115);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).to({y:55},13,cjs.Ease.get(-0.9)).to({y:65},6,cjs.Ease.get(0.9)).wait(2));

	// appstore.png
	this.instance_5 = new lib.appstore_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(634.5,115);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({y:55},13,cjs.Ease.get(-0.9)).to({y:65},6,cjs.Ease.get(0.9)).wait(15));

	// bg.jpg
	this.instance_6 = new lib.bg_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(242.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,-316.9,970,452.5);
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxtiue220.png", id:"appstore"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxtiv8p9y.jpg", id:"bg"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxtiw5qa6.png", id:"download"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxtizdau3.png", id:"googlePlay"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxtj0drq3.png", id:"hashtag"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxtj1323u.png", id:"mobileApp"},
		{src:"https://p.kaskus.id/img/seasonal/august2018/tematik/wp_background_fbytxtj1p1vt.png", id:"permata"}
	],
	preloads: []
};




}
//(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;