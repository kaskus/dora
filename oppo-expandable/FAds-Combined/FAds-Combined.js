function initNormal(lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 970,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/a37.jpg", id:"a37"},
		{src:"images/a39.jpg", id:"a39"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/block.png", id:"block"},
		{src:"images/f1p.jpg", id:"f1p"},
		{src:"images/f1s.jpg", id:"f1s"},
		{src:"images/happy.png", id:"happy"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/perfect.png", id:"perfect"},
		{src:"images/pilih.png", id:"pilih"},
		{src:"images/raisa.png", id:"raisa"}
	]
};

(lib.a37 = function() {
	this.initialize(img.a37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.a39 = function() {
	this.initialize(img.a39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.block = function() {
	this.initialize(img.block);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.f1p = function() {
	this.initialize(img.f1p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.f1s = function() {
	this.initialize(img.f1s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.happy = function() {
	this.initialize(img.happy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,51);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,50);


(lib.perfect = function() {
	this.initialize(img.perfect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,42);


(lib.pilih = function() {
	this.initialize(img.pilih);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,28);


(lib.raisa = function() {
	this.initialize(img.raisa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,61);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.perfect();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135,42);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy();
	this.instance.setTransform(-4,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,0,200,51);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f1s();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.a37();
	this.instance.setTransform(19,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19,0,970,50);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f1p();
	this.instance.setTransform(15,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15,0,970,50);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.a39();
	this.instance.setTransform(11,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,0,970,50);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.raisa();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128,61);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block();
	this.instance.setTransform(-4,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,0,970,50);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("EhJugCQMCTdAAAIAAEhMiTdAAAg");
	this.shape.setTransform(472,14.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,945.9,31);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,194,50);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,50);


(lib.Symbol5_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.pilih();
	this.instance_1.setTransform(483,-494.9);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(483,-494.9,179,28);


// stage content:
(lib.FAds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(484.9,25.1,1.027,1.717,0,0,0,472.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(290));

	// Layer 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(489.5,25,1,1,0,0,0,485,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(268).to({_off:false},0).to({alpha:1},6).wait(16));

	// Layer 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(873,25,1,1,0,0,0,97,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},275).wait(15));

	// Layer 6
	this.instance_3 = new lib.Symbol5_1();
	this.instance_3.setTransform(119.5,521,1,1,0,0,0,89.5,14);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({x:144.5,alpha:0.828},3).to({x:149.5,alpha:1},3).wait(39).to({x:166.2},3).to({x:169.5},3).to({_off:true},200).wait(15));

	// Layer 6
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(162.1,25.6,0.816,0.816,0,0,0,100,25.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({scaleX:0.88,scaleY:0.88,x:135.8,alpha:0.828},3).to({regY:25.5,scaleX:0.9,scaleY:0.9,x:130.5,y:25.5,alpha:1},3).to({_off:true},260).wait(15));

	// Layer 11
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(778,25.2,1,1,0,0,0,485,25);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219).to({_off:false},0).to({x:538.9,y:25.3,alpha:0.828},3).to({x:491,y:25.4,alpha:1},3).to({x:507},3).to({x:501},2).to({_off:true},45).wait(15));

	// Layer 10
	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(776,25,1,1,0,0,0,485,25);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169).to({_off:false},0).to({x:525.2,alpha:0.828},3).to({x:475,alpha:1},3).to({x:491},3).to({x:485},2).to({_off:true},44).wait(66));

	// Layer 9
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(778,25,1,1,0,0,0,485,25);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(119).to({_off:false},0).to({x:529.7,alpha:0.828},3).to({x:480,alpha:1},3).to({x:496},3).to({x:490},2).to({_off:true},45).wait(115));

	// Layer 8
	this.instance_8 = new lib.Symbol6();
	this.instance_8.setTransform(776,25,1,1,0,0,0,485,25);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({_off:false},0).to({x:525.2,alpha:0.828},3).to({x:475,alpha:1},3).to({x:489},3).to({x:485},2).to({_off:true},45).wait(165));

	// Layer 7
	this.instance_9 = new lib.Symbol13();
	this.instance_9.setTransform(423.6,25,0.911,0.911,0,0,0,67.5,20.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({scaleX:0.99,scaleY:0.99,x:451.8,alpha:0.828},3).to({regY:21,scaleX:1,scaleY:1,x:457.5,alpha:1},3).to({_off:true},60).wait(215));

	// Layer 5
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(307.5,45.5,0.891,0.891,0,0,0,64,30.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:27.5,alpha:0.898},5).to({y:25.5,alpha:1},5).to({_off:true},65).wait(215));

	// Layer 1
	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(485,25,1,1,0,0,0,485,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},275).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.8,25,970.3,72.7);

}

function initExpand(lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images-expanded/a37.jpg", id:"a37"},
		{src:"images-expanded/a39.jpg", id:"a39"},
		{src:"images-expanded/bg.jpg", id:"bg"},
		{src:"images-expanded/block.png", id:"block"},
		{src:"images-expanded/f1p.jpg", id:"f1p"},
		{src:"images-expanded/f1s.jpg", id:"f1s"},
		{src:"images-expanded/happy.png", id:"happy"},
		{src:"images-expanded/oppo.png", id:"oppo"},
		{src:"images-expanded/perfect.png", id:"perfect"},
		{src:"images-expanded/pilih.png", id:"pilih"},
		{src:"images-expanded/raisa.png", id:"raisa"}
	]
};



// symbols:



(lib.a37 = function() {
	this.initialize(img.a37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.a39 = function() {
	this.initialize(img.a39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.block = function() {
	this.initialize(img.block);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1100,250);


(lib.f1p = function() {
	this.initialize(img.f1p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.f1s = function() {
	this.initialize(img.f1s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.happy = function() {
	this.initialize(img.happy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,177);


(lib.oppo = function() {
	this.initialize(img.oppo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,250);


(lib.perfect = function() {
	this.initialize(img.perfect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,56);


(lib.pilih = function() {
	this.initialize(img.pilih);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,32);


(lib.raisa = function() {
	this.initialize(img.raisa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,246);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.perfect();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,187,56);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pilih();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,205,32);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.happy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,225,177);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f1s();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.a37();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f1p();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.a39();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.raisa();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,331,246);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.block();
	this.instance.setTransform(-65,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65,0,1100,250);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.oppo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220,250);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhTagRyMCm1AAAMAAAAjlMim1AAAg");
	this.shape.setTransform(534,114);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,1069.9,230);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


// stage content:
(lib.FAdsExp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(485.1,124.8,0.908,1.094,0,0,0,533.9,113.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(290));

	// Layer 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(550.4,125.5,1,1,0,0,0,550,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(268).to({_off:false},0).to({alpha:1},6).wait(16));

	// Layer 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(861,125,1,1,0,0,0,110,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},275).wait(15));

	// Layer 6
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(179.9,123.6,0.62,0.62,0,0,0,112.6,88.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:0.73,scaleY:0.73,x:122.7,alpha:0.828},3).to({regX:112.5,scaleX:0.76,scaleY:0.76,x:111.3,alpha:1},3).to({_off:true},260).wait(15));

	// Layer 12
	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(749.1,125,1,1,0,0,0,485,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({x:520.7,alpha:0.828},3).to({x:475,alpha:1},3).to({x:492},3).to({x:485},2).to({_off:true},45).wait(15));

	// Layer 11
	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(752.1,125,1,1,0,0,0,485,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(169).to({_off:false},0).to({x:521.2,alpha:0.828},3).to({x:475,alpha:1},3).to({x:491},3).to({x:485},2).to({_off:true},45).wait(65));

	// Layer 10
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(749.1,125,1,1,0,0,0,485,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).to({x:520.7,alpha:0.828},3).to({x:475,alpha:1},3).to({x:491},3).to({x:485},2).to({_off:true},45).wait(115));

	// Layer 9
	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(747.3,124.6,1,1,0,0,0,485,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({x:520.4,y:125,alpha:0.828},3).to({x:475,alpha:1},3).to({x:489},3).to({x:485},2).to({_off:true},45).wait(165));

	// Layer 7
	this.instance_8 = new lib.Symbol15();
	this.instance_8.setTransform(576.6,108.8,0.819,0.819,0,0,0,93.4,27.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({scaleX:0.97,scaleY:0.97,x:632.4,y:106.1,alpha:0.828},3).to({scaleX:1,scaleY:1,x:643.6,y:105.5,alpha:1},3).to({_off:true},60).wait(215));

	// Layer 8
	this.instance_9 = new lib.Symbol14();
	this.instance_9.setTransform(635,156.8,0.826,0.826,0,0,0,102.5,16);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({x:643.3,alpha:0.828},3).to({x:645,alpha:1},3).to({_off:true},45).wait(215));

	// Layer 5
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(506.5,258,0.538,0.538,0,0,0,290.5,247);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.91,scaleY:0.91,rotation:-0.8,alpha:0.801},3).to({regY:246.9,scaleX:1,scaleY:1,rotation:-1.2,alpha:1},2).to({regX:290.4,rotation:1,x:506.4},2).to({regY:247,rotation:1.8},2).to({regX:290.5,rotation:0,x:506.5},3).to({_off:true},63).wait(215));

	// Layer 1
	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},275).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,124.6,971.1,257.8);

}(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});

//initNormal(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;