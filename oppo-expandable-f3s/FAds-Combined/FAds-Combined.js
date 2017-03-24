function initNormal(lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 970,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/gruficam.png", id:"gruficam"},
		{src:"images/hp.png", id:"hp"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/onegrufi.png", id:"onegrufi"},
		{src:"images/oneselfi.png", id:"oneselfi"},
		{src:"images/selficam.png", id:"selficam"}
	]
};



// symbols:



(lib.gruficam = function() {
	this.initialize(img.gruficam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.hp = function() {
	this.initialize(img.hp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,471,49);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,50);


(lib.onegrufi = function() {
	this.initialize(img.onegrufi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,100);


(lib.oneselfi = function() {
	this.initialize(img.oneselfi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,83);


(lib.selficam = function() {
	this.initialize(img.selficam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,88);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.onegrufi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129,100);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.oneselfi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,83);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.selficam();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,88,88);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172,50);


(lib.Symbol1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.gruficam();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


// stage content:
(lib.FAds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(884,25,1,1,0,0,0,86,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	// Layer 6
	this.instance_1 = new lib.hp();
	this.instance_1.setTransform(284.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130));

	// Layer 4
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(63.3,31.1,0.34,0.34,0,0,0,64.4,50);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({regY:50.1,scaleX:0.58,scaleY:0.58,x:75.7,y:31.2,alpha:0.941},8).to({regY:50,scaleX:0.6,scaleY:0.6,x:76.6,y:31.1,alpha:1},7).wait(50).to({scaleX:0.36,scaleY:0.36,x:64.2,alpha:0.16},8).to({scaleX:0.34,scaleY:0.34,x:63.3,alpha:0.102},7).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(211.2,30.8,0.598,0.598,0,0,0,57,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({regY:41.6,scaleX:0.47,scaleY:0.47,x:229.9,y:27.1,alpha:0.07},8).to({regY:41.4,scaleX:0.46,scaleY:0.46,x:231.2,y:26.8,alpha:0},7).wait(50).to({regX:57.1,regY:41.5,scaleX:0.59,scaleY:0.59,x:212.5,y:30.6,alpha:0.93},8).to({regX:57,scaleX:0.6,scaleY:0.6,x:211.2,y:30.8,alpha:1},7).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(120.5,26,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({regY:44.1,scaleX:0.56,scaleY:0.56,x:235.9,y:26.1},8).to({regY:44,scaleX:0.53,scaleY:0.53,x:244.1,y:26},7).wait(50).to({scaleX:0.97,scaleY:0.97,x:128.8,y:26.1},8).to({scaleX:1,scaleY:1,x:120.5,y:26},7).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol1_1();
	this.instance_5.setTransform(50.2,26.3,0.532,0.532,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({scaleX:0.97,scaleY:0.97,x:160.6,y:26.5},8).to({scaleX:1,scaleY:1,x:168.5},7).wait(50).to({scaleX:0.56,scaleY:0.56,x:58.1,y:26.3},8).to({scaleX:0.53,scaleY:0.53,x:50.2},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,7,943,88);

}(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});

//initNormal(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;