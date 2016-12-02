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



(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,37);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,62);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,27);


(lib.Bitmap16copy = function() {
	this.initialize(img.Bitmap16copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,35);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,250);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,194);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,120);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,85);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,27);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,38);// helper functions:

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


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;
	this.instance.setTransform(-148,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-97,296,194);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-42.5,141,85);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-42.5,141,85);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-163,-65.6,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163,-65.6,326,131.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,33,27), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,108,62), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,92,37), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,121,38), null);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(0,0,54,27), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,141,85), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,141,85), null);


// stage content:
(lib.RBExp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(396.1,67,0.367,0.368,0,0,0,-27.1,30.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({regX:-27.2,regY:30.6,scaleX:1.15,scaleY:1.15,alpha:1},9).wait(62));

	// Layer 10
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(383.7,95.7,0.2,0.165,0,0,0,-23.9,57.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,x:383.8,alpha:1},11).wait(64));

	// Layer 7
	this.instance_2 = new lib.Symbol();
	this.instance_2.parent = this;
	this.instance_2.setTransform(398.9,114.2,0.355,0.456,0,0,0,-40.7,26.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,x:399,y:114.1,alpha:1},11).wait(66));

	// Layer 8
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(364.5,138.2,0.347,0.525,0,0,0,-43.6,28.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({regX:-43.7,scaleX:1.15,scaleY:1.15,y:138.3,alpha:1},12).wait(69));

	// Layer 9
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(402.2,168.5,0.335,0.482,0,0,0,-39.8,14);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({regX:-39.9,regY:13.8,scaleX:1.15,scaleY:1.15,y:168.4,alpha:1},9).wait(74));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("A4fm8MAw/gAGIAAOAIgBAAIjdACMgthAADg");
	var mask_graphics_124 = new cjs.Graphics().p("A6wK5IAAvWMA1hAAAIAAPWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:309.9,y:101.3}).wait(113).to({graphics:mask_graphics_124,x:149.7,y:69.7}).wait(1));

	// Layer 3
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.4,101.3,1.085,1.048,0,0,0,70.5,42.7);
	this.instance_5.alpha = 0.801;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(398,90,1.15,1.15,0,0,0,70.5,42.5);
	this.instance_6.alpha = 0.801;
	this.instance_6.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_5}]},16).to({state:[{t:this.instance_6}]},97).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({x:534.3,y:101.5},16).to({_off:true},97).wait(1));

	// Layer 2
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(309.9,119.7,1.15,1.15,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.13,scaleY:1.13,alpha:1},3).to({scaleX:0.96,scaleY:0.96,x:310,y:119.8},8).to({startPosition:0},16).to({x:187,y:119.5},15).to({startPosition:0},82).wait(1));

	// Layer 5
	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(175,141,1.182,1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({alpha:1},15).wait(83));

	// Layer 1
	this.instance_9 = new lib.Bitmap16copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,215);

	this.instance_10 = new lib.Bitmap17();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},124).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,125,600,250);
// library properties:
lib.properties = {
	width: 600,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap12.png", id:"Bitmap12"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap16copy.png", id:"Bitmap16copy"},
		{src:"images/Bitmap17.jpg", id:"Bitmap17"},
		{src:"images/Bitmap18.png", id:"Bitmap18"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/Bitmap9.png", id:"Bitmap9"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;