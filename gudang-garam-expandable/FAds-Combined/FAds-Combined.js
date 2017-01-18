function initNormal(lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:

(lib._01kota = function() {
	this.initialize(img._01kota);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._02bulet = function() {
	this.initialize(img._02bulet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._03panah = function() {
	this.initialize(img._03panah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._04panah = function() {
	this.initialize(img._04panah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._05sepeda = function() {
	this.initialize(img._05sepeda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._06ilustrasi = function() {
	this.initialize(img._06ilustrasi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._07tag = function() {
	this.initialize(img._07tag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib.canvas = function() {
	this.initialize(img.canvas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,400);


(lib.logobesar = function() {
	this.initialize(img.logobesar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,120);// helper functions:

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


(lib.tag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07tag();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tag, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.skateboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._06ilustrasi();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skateboard, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.sepeda1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._05sepeda();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sepeda1, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.panah2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._04panah();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panah2, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.panah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03panah();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panah, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.logobig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logobesar();
	this.instance.parent = this;
	this.instance.setTransform(-164,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logobig, new cjs.Rectangle(-164,-60,328,120), null);


(lib.city = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01kota();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.city, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.canvaswhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.canvas();
	this.instance.parent = this;
	this.instance.setTransform(-299,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.canvaswhite, new cjs.Rectangle(-299,-200,598,400), null);


(lib.bulet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._02bulet();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bulet, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.ilustall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tag
	this.instance = new lib.tag();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-37,1.702,1.702,0,0,0,-0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-0.5,y:0,alpha:1},7,cjs.Ease.get(0.9)).wait(131).to({alpha:0},5).wait(3));

	// skate board
	this.instance_1 = new lib.skateboard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,23.1,0.769,0.769);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:-0.5,y:0,alpha:1},10,cjs.Ease.get(-0.9)).wait(143).to({alpha:0},4).wait(4));

	// sepeda1
	this.instance_2 = new lib.sepeda1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.9,38.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:-0.5,y:0,alpha:1},9,cjs.Ease.get(0.9)).wait(149).to({alpha:0},2).wait(6));

	// panah2
	this.instance_3 = new lib.panah2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22.6,3.7,0.416,0.416);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,x:-0.5,y:0,alpha:1},5).wait(158).to({alpha:0},5).wait(3));

	// panah
	this.instance_4 = new lib.panah();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.5,0,0.132,0.132);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).wait(160).to({alpha:0},3).wait(5));

	// bulet
	this.instance_5 = new lib.bulet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.6,0,1.738,1.738,0,0,0,-0.1,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-0.5,alpha:1},6,cjs.Ease.get(-0.9)).wait(163).to({alpha:0},5).wait(3));

	// city
	this.instance_6 = new lib.city();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-133.9,37.1,0.06,0.371);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},6,cjs.Ease.get(0.9)).wait(166).to({alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.4,0,17.1,74.2);


// stage content:
(lib.FAds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ilust all
	this.instance = new lib.ilustall();
	this.instance.parent = this;
	this.instance.setTransform(466.5,115.5,1.054,1.054);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229));

	// logo big
	this.instance_1 = new lib.logobig();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.7,100.2,1.518,1.518,0,0,0,0,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,scaleX:1,scaleY:1,y:100,alpha:1},6,cjs.Ease.get(-0.9)).wait(215).to({scaleX:0.37,scaleY:0.37,alpha:0},5).wait(3));

	// canvas white
	this.instance_2 = new lib.canvaswhite();
	this.instance_2.parent = this;
	this.instance_2.setTransform(300,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCC9C9").s().p("EhL5APmIAA/LMCXzAAAIAAfLg");
	this.shape.setTransform(484,99.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.7,100,1043.1,400);
// library properties:
lib.properties = {
	width: 970,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_01kota.png", id:"_01kota"},
		{src:"images/_02bulet.png", id:"_02bulet"},
		{src:"images/_03panah.png", id:"_03panah"},
		{src:"images/_04panah.png", id:"_04panah"},
		{src:"images/_05sepeda.png", id:"_05sepeda"},
		{src:"images/_06ilustrasi.png", id:"_06ilustrasi"},
		{src:"images/_07tag.png", id:"_07tag"},
		{src:"images/canvas.png", id:"canvas"},
		{src:"images/logobesar.png", id:"logobesar"}
	],
	preloads: []
};




}(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});

function initExpand(lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib._01kota = function() {
	this.initialize(img._01kota);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._02bulet = function() {
	this.initialize(img._02bulet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._03panah = function() {
	this.initialize(img._03panah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._04panah = function() {
	this.initialize(img._04panah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._05sepeda = function() {
	this.initialize(img._05sepeda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._06ilustrasi = function() {
	this.initialize(img._06ilustrasi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib._07tag = function() {
	this.initialize(img._07tag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,200);


(lib.canvas1 = function() {
	this.initialize(img.canvas1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,315);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,119);// helper functions:

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


(lib.tag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._07tag();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tag, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.skateboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._06ilustrasi();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skateboard, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.sepeda1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._05sepeda();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sepeda1, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.panah2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._04panah();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panah2, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.panah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03panah();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panah, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(-204,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-204,-59.5,408,119), null);


(lib.city = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01kota();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.city, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.canvas1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.canvas1();
	this.instance.parent = this;
	this.instance.setTransform(-204,-157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.canvas1_1, new cjs.Rectangle(-204,-157.5,408,315), null);


(lib.bulet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._02bulet();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bulet, new cjs.Rectangle(-142.5,-100,285,200), null);


(lib.ilustall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tag
	this.instance = new lib.tag();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-37,1.702,1.702,0,0,0,-0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-0.5,y:0,alpha:1},7,cjs.Ease.get(0.9)).wait(131).to({alpha:0},5).wait(3));

	// skate board
	this.instance_1 = new lib.skateboard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,23.1,0.769,0.769);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:-0.5,y:0,alpha:1},10,cjs.Ease.get(-0.9)).wait(143).to({alpha:0},4).wait(4));

	// sepeda1
	this.instance_2 = new lib.sepeda1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.9,38.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:-0.5,y:0,alpha:1},9,cjs.Ease.get(0.9)).wait(149).to({alpha:0},2).wait(6));

	// panah2
	this.instance_3 = new lib.panah2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22.6,3.7,0.416,0.416);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,x:-0.5,y:0,alpha:1},5).wait(158).to({alpha:0},5).wait(3));

	// panah
	this.instance_4 = new lib.panah();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.5,0,0.132,0.132);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).wait(160).to({alpha:0},3).wait(5));

	// bulet
	this.instance_5 = new lib.bulet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.6,0,1.738,1.738,0,0,0,-0.1,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-0.5,alpha:1},6,cjs.Ease.get(-0.9)).wait(163).to({alpha:0},5).wait(3));

	// city
	this.instance_6 = new lib.city();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-133.9,37.1,0.06,0.371);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},6,cjs.Ease.get(0.9)).wait(166).to({alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.4,0,17.1,74.2);


// stage content:
(lib.FAdsExp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ilustall();
	this.instance.parent = this;
	this.instance.setTransform(197,221.2,1.2,1.2,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(204,59.5,0.462,0.462);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(0.9)).wait(152).to({scaleX:0.44,scaleY:0.44,alpha:0},5).wait(3));

	// canvas1
	this.instance_2 = new lib.canvas1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(167));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCC9C9").s().p("EhL5AYnMAAAgxNMCXzAAAMAAAAxNg");
	this.shape.setTransform(485.8,157.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(167));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,157.5,971.6,315);
// library properties:
lib.properties = {
	width: 970,
	height: 315,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images-expanded/_01kota.png", id:"_01kota"},
		{src:"images-expanded/_02bulet.png", id:"_02bulet"},
		{src:"images-expanded/_03panah.png", id:"_03panah"},
		{src:"images-expanded/_04panah.png", id:"_04panah"},
		{src:"images-expanded/_05sepeda.png", id:"_05sepeda"},
		{src:"images-expanded/_06ilustrasi.png", id:"_06ilustrasi"},
		{src:"images-expanded/_07tag.png", id:"_07tag"},
		{src:"images-expanded/canvas1.png", id:"canvas1"},
		{src:"images-expanded/logo2.png", id:"logo2"}
	],
	preloads: []
};




}(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
