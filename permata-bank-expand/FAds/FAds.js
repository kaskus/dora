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
p.nominalBounds = new cjs.Rectangle(0,0,296,194);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,120);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,85);


(lib.Bitmap5_1 = function() {
	this.initialize(img.Bitmap5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,437,31);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);// helper functions:

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


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-59.5,-39,0.402,0.402);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-39,119,78);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-59.5,-39,0.402,0.402);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-39,119,78);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5_1();
	this.instance.parent = this;
	this.instance.setTransform(-218.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.5,-15.5,437,31);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5_1();
	this.instance.parent = this;
	this.instance.setTransform(-218.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.5,-15.5,437,31);


(lib.Tween4 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-328,-66,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-66,326,131.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,141,85), null);


// stage content:
(lib.FAds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_10 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_11 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_12 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_13 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_14 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_15 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_16 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_17 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_18 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_19 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_20 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_21 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");
	var mask_graphics_129 = new cjs.Graphics().p("Am0CAIAAj/INpAAIAAD/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_10,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_11,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_12,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_13,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_14,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_15,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_16,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_17,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_18,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_19,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_20,x:429.5,y:18.6}).wait(1).to({graphics:mask_graphics_21,x:429.5,y:18.6}).wait(108).to({graphics:mask_graphics_129,x:429.5,y:18.6}).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(497.5,18.7,0.345,0.345,0,0,0,70.5,42.6);
	this.instance.alpha = 0.801;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:361.5,y:20.5},12).wait(109));

	// Layer 3
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(424.6,24,0.425,0.425,0,0,0,-164.8,4.1);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-164.7,regY:4.3,scaleX:0.27,scaleY:0.27,x:429.6,y:24.7,alpha:1},9).to({startPosition:0},12).to({x:114.1},29).to({startPosition:0},18).to({startPosition:0},61).wait(1));

	// Layer 6
	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(114.5,33);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.5,33,1.202,1,0,0,0,0.1,0);
	this.instance_3.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},44).to({state:[{t:this.instance_3,p:{regX:0.1,scaleX:1.202,x:126.5,alpha:0.801}}]},11).to({state:[{t:this.instance_3,p:{regX:0,scaleX:1.353,x:135.5,alpha:1}}]},74).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({_off:true,regX:0.1,scaleX:1.2,x:126.5,alpha:0.801},11).wait(75));

	// Layer 2
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(286.5,27.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(487.5,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},50).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_5}]},61).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({_off:true,x:487.5,alpha:1},18).wait(62));

	// Layer 1
	this.instance_6 = new lib.Bitmap9();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,19.3,970,55.8);
// library properties:
lib.properties = {
	width: 970,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap5_1.png", id:"Bitmap5_1"},
		{src:"images/Bitmap9.png", id:"Bitmap9"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;