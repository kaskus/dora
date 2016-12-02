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



(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,150);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,31);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,31);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,194);


(lib.Bitmap4copy = function() {
	this.initialize(img.Bitmap4copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,120);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,85);// helper functions:

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


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap17();
	this.instance.parent = this;
	this.instance.setTransform(-151.5,-21.4,1.384,1.384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-21.4,303.1,42.9);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(-138.5,-19.6,1.265,1.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,-19.6,277,39.2);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-42.5,141,85);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;
	this.instance.setTransform(-148,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-97,296,194);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4copy();
	this.instance.parent = this;
	this.instance.setTransform(-438,-66,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-438,-66,326,131.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,141,85), null);


// stage content:
(lib.FAdsExp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("Au5HKIAApnMAhjAAAIAAJng");
	var mask_graphics_123 = new cjs.Graphics().p("AXUGWIAAj/INqAAIAAD/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:119.4,y:45.8}).wait(111).to({graphics:mask_graphics_123,x:236.6,y:40.7}).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-41.6,61,0.731,0.724,0,0,0,70.6,42.8);
	this.instance.alpha = 0.801;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({regX:78,regY:43.4,x:301.7,y:61.5},13).wait(98).to({regX:70.5,regY:42.6,scaleX:0.35,scaleY:0.35,x:361.5,y:70.5},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(328.7,73.8,0.75,0.75,0,0,0,0.2,0.4);
	this.instance_1.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.2,scaleX:0.66,scaleY:0.66,x:312.8,y:73.6,alpha:1},12).to({startPosition:0},13).wait(98).to({startPosition:0},0).wait(1));

	// Layer 6
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(155.6,75.1,1.051,0.773,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({alpha:1},13).wait(98).to({startPosition:0},0).wait(1));

	// Layer 7
	this.instance_3 = new lib.Tween13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(621.5,87.7,0.785,0.785,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).to({x:661.5,alpha:1},17).wait(65).to({startPosition:0},0).wait(1));

	// Layer 2
	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(658,55.2,0.802,0.802,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).to({x:698,alpha:1},20).wait(65).to({startPosition:0},0).wait(1));

	// Layer 1
	this.instance_5 = new lib.Bitmap13();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,75,970,150);
// library properties:
lib.properties = {
	width: 970,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap13.jpg", id:"Bitmap13"},
		{src:"images/Bitmap16.png", id:"Bitmap16"},
		{src:"images/Bitmap17.png", id:"Bitmap17"},
		{src:"images/Bitmap18.png", id:"Bitmap18"},
		{src:"images/Bitmap4copy.png", id:"Bitmap4copy"},
		{src:"images/Bitmap5.png", id:"Bitmap5"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;