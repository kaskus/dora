(function (lib, img, cjs, ss, an) {

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
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,211);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,73);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-101.3,-30.4,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.3,-30.4,202.8,60.9);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-101.3,-30.4,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.3,-30.4,202.8,60.9);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-127.2,-89.5,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-89.5,254.5,179);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-127.2,-89.5,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-89.5,254.5,179);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(188.4,208.5,0.005,0.005);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(188.4,208.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},123).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},12).wait(124));

	// Layer 2
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(428.3,160.5);

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(194.3,160.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},135).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:194.3},19).wait(136));

	// Layer 1
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,126,555.5,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap1.jpg", id:"Bitmap1"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;