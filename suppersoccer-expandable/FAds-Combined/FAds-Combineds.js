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



(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,453,34);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,953,50);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,41);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-485,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485,-25,970,50);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-570,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-301,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-570,-20,722,41);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-476.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476.5,-25,953,50);


// stage content:
(lib.FAds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1544.6,27);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({x:692.5},11,cjs.Ease.get(1)).to({startPosition:0},59).to({x:-158.8},9,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// Layer 3
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(485.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},59).to({x:-487.9},10,cjs.Ease.get(-1)).to({startPosition:0},69).to({x:1452.9},1).to({x:483.5},9,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(485,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},148).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,25,970,50);
// library properties:
lib.properties = {
	width: 970,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap8.png", id:"Bitmap8"}
	],
	preloads: []
};




}

function initExpand(lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,174);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,122);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,38);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,899,27);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,300);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,300);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,300);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,49);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-334.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.5,-61,669,122);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-334.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.5,-61,669,122);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-166.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.5,-150,333,300);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-166.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.5,-150,333,300);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-206.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.5,-150,413,300);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-206.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.5,-150,413,300);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-252,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-19,504,38);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-485,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485,-87,970,174);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-449.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-449.5,-13.5,899,27);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-84.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-24.5,169,49);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-485,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485,-150,970,300);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.5,-150,333,300);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.5,-150,413,300);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween23("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance_1}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:0.98},19).to({_off:true,scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.5,-61,669,122);


// stage content:
(lib.FAdsExp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(485.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},160).wait(1));

	// Layer 4
	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1244,269);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},65).to({x:461.8},9,cjs.Ease.get(1)).to({startPosition:0},70).to({x:-264.4},10,cjs.Ease.get(-1)).to({startPosition:0},6).wait(1));

	// Layer 5
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(486.5,274.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},60).to({x:-460.7},10,cjs.Ease.get(-1)).to({startPosition:0},79).to({x:1435.8},1).to({x:489.5},10,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_3 = new lib.Tween7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(485.5,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},160).wait(1));

	// Layer 1
	this.instance_4 = new lib.Tween9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(485,213);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},160).wait(1));

	// Layer 6
	this.instance_5 = new lib.Tween11("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(96.5,159);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:32},32).to({startPosition:37},128).wait(1));

	// Layer 7
	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(891.5,152);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:32},32).to({startPosition:37},128).wait(1));

	// Layer 8
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(485,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},160).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,150,1606,309);
// library properties:
lib.properties = {
	width: 970,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images-expanded/Bitmap1.png?1501828568415", id:"Bitmap1"},
		{src:"images-expanded/Bitmap2.png?1501828568415", id:"Bitmap2"},
		{src:"images-expanded/Bitmap3.png?1501828568415", id:"Bitmap3"},
		{src:"images-expanded/Bitmap4.png?1501828568415", id:"Bitmap4"},
		{src:"images-expanded/Bitmap6.png?1501828568415", id:"Bitmap6"},
		{src:"images-expanded/Bitmap7.png?1501828568415", id:"Bitmap7"},
		{src:"images-expanded/Bitmap8.jpg?1501828568415", id:"Bitmap8"},
		{src:"images-expanded/Bitmap9.png?1501828568415", id:"Bitmap9"}
	],
	preloads: []
};




};
var lib, images, createjs, ss, AdobeAn;