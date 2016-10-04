(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/belajar.png", id:"belajar"},
		{src:"images/bg_LB.jpg", id:"bg_LB"},
		{src:"images/BG_logo.png", id:"BG_logo"},
		{src:"images/logoindonesia.png", id:"logoindonesia"},
		{src:"images/logo_kaskuis.png", id:"logo_kaskuis"},
		{src:"images/sayap.png", id:"sayap"},
		{src:"images/sayap2.png", id:"sayap2"},
		{src:"images/tangan.png", id:"tangan"},
		{src:"images/tulisanbatik.png", id:"tulisanbatik"}
	]
};



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
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
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



(lib.belajar = function() {
	this.initialize(img.belajar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,90);


(lib.bg_LB = function() {
	this.initialize(img.bg_LB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.BG_logo = function() {
	this.initialize(img.BG_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,90);


(lib.logoindonesia = function() {
	this.initialize(img.logoindonesia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,90);


(lib.logo_kaskuis = function() {
	this.initialize(img.logo_kaskuis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,90);


(lib.sayap = function() {
	this.initialize(img.sayap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,74);


(lib.sayap2 = function() {
	this.initialize(img.sayap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,81);


(lib.tangan = function() {
	this.initialize(img.tangan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,90);


(lib.tulisanbatik = function() {
	this.initialize(img.tulisanbatik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,86);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDBF31").s().p("A8JBHQgIgHAAgLQABglARgbQAOgYAYgQQAagUAbgGIAFAAMA2YAAAQAKAAAIAHQAGAHABALQgBAKgGAHQgIAIgKAAMg2VAAAIgKAEQgSAHgLAKQgJAGgIAMQgKASgBAXQABALgIAHQgHAHgLAAQgKAAgHgHg");
	this.shape.setTransform(188.6,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E79A2E").s().p("A74BOQgKAAgHgHQgIgIAAgKQAAgKAIgHQAHgIAKABMA2UAAAIALgFQAQgGANgMQAKgGAHgLQAKgSAAgYQAAgKAIgHQAHgIAKABQALgBAHAIQAHAHAAAKQABAlgSAcQgNAXgYARQgRAMgTAIIgSAFIgFABg");
	this.shape_1.setTransform(196.6,47.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0083C3").s().p("AgLBbQgNgOAAgaIAAhSIgYAAIAAggIAYAAIAAgnIArAAIAAAnIAcAAIAAAgIgcAAIAABSQAAAJAEAEQAEAFAGAAIAMgCIAEAgIgNAEIgOABQgWAAgLgNg");
	this.shape_2.setTransform(356.5,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0083C3").s().p("AgVB2IAAijIArAAIAACjgAgVhUIAAghIArAAIAAAhg");
	this.shape_3.setTransform(347.2,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0083C3").s().p("AAbBTIAAhjQAAgRgGgIQgGgHgNAAQgHAAgIAEQgHAEgGAGIAAB1IgsAAIAAijIApAAIACAZQAIgNAMgIQALgGAOAAQAaAAANAPQAOARAAAiIAABjg");
	this.shape_4.setTransform(334.2,33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0083C3").s().p("AgyA/QgVgXAAgkIAAgEQABglATgXQAVgYAgAAQAiAAARAUQASAVAAAiIAAAVIhgAAIgBABQACARAJAKQAJALAQAAQAQAAAJgDQANgEAKgGIAMAcQgMAIgPAGQgRAFgUAAQgjAAgVgWgAgQgpQgHAKgCAPIAAABIA1AAIAAgEQAAgOgGgIQgGgJgOABQgLgBgHAJg");
	this.shape_5.setTransform(317.4,33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0083C3").s().p("ABHBuIAAiVIgBAAIg3CVIgdAAIg3iWIgBABIAACVIgsAAIAAjbIA7AAIA3ChIAAAAIA4ihIA7AAIAADbg");
	this.shape_6.setTransform(295.6,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0083C3").s().p("AhHBwIAAgdIBFhOQANgPAHgNQAGgNAAgLQAAgNgHgIQgGgIgMAAQgOAAgJAKQgHALAAAQIgsAAIAAgBQgBgeAUgVQAVgUAiAAQAgAAATASQATARAAAdQAAAUgLAQQgKAPgaAdIgjAsIAAABIBZAAIAAAig");
	this.shape_7.setTransform(265.3,30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0083C3").s().p("ABJBTIAAhgQAAgUgGgHQgGgIgMAAQgJAAgIAEQgHAEgEAIIAABzIgqAAIAAhgQAAgSgFgJQgIgIgLAAQgIAAgHAEQgIADgEAGIAAB2IgsAAIAAijIApAAIACAWQAHgLANgHQANgHAPABQAPAAAKAGQAKAIAHAOQAHgNANgIQAMgIAQABQAYAAAOARQAOARABAjIAABgg");
	this.shape_8.setTransform(235.1,33.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0083C3").s().p("Ag7BIQgOgNAAgXQAAgYASgMQATgOAkABIAXAAIAAgNQAAgNgHgGQgGgGgKAAQgKgBgHAGQgGAGAAAIIgqAAIgBAAQAAgWASgOQATgQAeAAQAeAAASAPQASAPAAAcIAABCQAAAMACAKQACANADAHIgsAAIgEgMIgDgNQgGAMgMAIQgJAIgPAAQgaAAgOgNgAgWARQgHAHAAAKQAAAJAFAEQAGAFAJAAQALAAAIgFQAJgGAEgIIAAgXIgXAAQgOAAgIAHg");
	this.shape_9.setTransform(213.2,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0083C3").s().p("AgVB2IAAjrIArAAIAADrg");
	this.shape_10.setTransform(200.6,29.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0083C3").s().p("Ag8BIQgNgNAAgXQAAgYASgMQATgOAkABIAXAAIAAgNQgBgMgFgHQgHgGgKAAQgKgBgHAGQgGAFAAAJIgqAAIgBAAQgBgWAUgOQASgQAdAAQAeAAASAPQATAPAAAcIAABCQAAANACAJQABAIAEAMIgsAAIgEgMQgCgDAAgKQgHAMgLAIQgJAIgQAAQgaAAgPgNgAgWARQgHAHAAAKQAAAIAFAFQAGAFAKAAQAKAAAIgFQAJgHAEgHIAAgXIgXAAQgOAAgIAHg");
	this.shape_11.setTransform(188.1,33.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0083C3").s().p("AhUBuIAAjbIBOAAQAlAAAcAaQAaAZAAApIAAAjQAAAqgaAYQgbAagmAAgAgnBNIAhAAQATgBAOgQQANgRAAgZIAAgjQAAgZgNgRQgOgQgTAAIghAAg");
	this.shape_12.setTransform(169.7,30.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0083C3").s().p("Ag4BCQgOgRAAgmIAAheIAsAAIAABfQAAAVAGAIQAGAIAMAAQAJAAAHgEQAHgCAGgIIAAh2IAsAAIAACjIglAAIgEgYQgHANgNAIQgKAGgPABQgaAAgPgSg");
	this.shape_13.setTransform(142.5,33.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0083C3").s().p("AAbB2IAAhiQAAgTgGgGQgHgIgMAAQgHAAgJADQgHADgFAHIAAB2IgsAAIAAjrIAsAAIAABdQAIgLALgGQAJgHAOAAQAaAAAOARQAPASAAAhIAABig");
	this.shape_14.setTransform(124.9,29.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0083C3").s().p("Ag8BIQgOgNABgXQAAgYASgMQATgOAjABIAYAAIAAgNQAAgMgHgHQgGgGgLAAQgKgBgGAGQgGAGAAAIIgqAAIgBAAQgBgWAUgOQASgQAdAAQAfAAASAPQASAPAAAcIAABCQAAAMACAKQABAJAFALIgtAAIgEgMQgBgDgBgKQgIANgLAHQgJAIgPAAQgaAAgPgNgAgWARQgHAHAAAKQAAAJAFAEQAGAFAJAAQALAAAIgFQAKgHADgHIAAgXIgYAAQgNAAgIAHg");
	this.shape_15.setTransform(107.8,33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0083C3").s().p("AgVBuIAAi5Ig/AAIAAgiICpAAIAAAiIhAAAIAAC5g");
	this.shape_16.setTransform(91.7,30.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0083C3").s().p("AgVB2IAAijIArAAIAACjgAgVhUIAAghIArAAIAAAhg");
	this.shape_17.setTransform(70.8,29.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0083C3").s().p("AgsBTIAAijIApAAIACAZQAFgOAIgGQAJgIAMABIAHAAIAFACIgEAnIgRgBQgKAAgGAFQgHAEgBAHIAABtg");
	this.shape_18.setTransform(62,33.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0083C3").s().p("Ag7BIQgOgNgBgXQAAgYATgMQATgOAjABIAXAAIAAgNQAAgNgGgGQgGgGgLAAQgJgBgHAGQgGAGAAAIIgrAAIAAAAQgBgWATgOQATgQAeAAQAeAAASAPQASAPAAAcIAABCQAAAMABAKQADANAEAHIgtAAIgEgMIgDgNQgGAMgMAIQgJAIgQAAQgZAAgOgNgAgWARQgHAHAAAKQAAAJAGAEQAFAFAJAAQALAAAIgFQAJgGADgIIAAgXIgXAAQgOAAgHAHg");
	this.shape_19.setTransform(47.3,33.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0083C3").s().p("Ag8BYQgZgZAAgqIAAgpQAAgpAYgaQAXgaAmAAQAoAAAXAVQAXATgBAkIAAABIgrAAQAAgVgKgLQgLgKgVAAQgSAAgLAQQgMAQAAAaIAAApQAAAaAMAQQAMAQATABQAUAAAKgLQAKgLAAgVIArAAIAAABQAAAjgWAUQgVAVgoAAQgmAAgYgag");
	this.shape_20.setTransform(29.2,30.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8A531").s().p("A7mEsQg8AAgpgqQgqgqAAg6IAAk7QAAg7AqgpQApgqA8AAMA3OAAAQA7AAApAqQApApAAA7IAAE7QAAA6gpAqQgpAqg7AAg");
	this.shape_21.setTransform(191,30);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D38D29").s().p("A7mErQg8AAgpgpQgqgqAAg6IAAk7QAAg6AqgqQApgpA8AAMA3OAAAQA7AAApApQApAqAAA6IAAE7QAAA6gpAqQgpApg7AAg");
	this.shape_22.setTransform(191,35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,382,65.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBBQgEgEAAgHQAAgGAEgEQAFgFAGABQAEgBAEAFQAFAEAAAGQAAAHgFAEQgEAEgEAAQgGAAgFgEgAgLAZQgEgEAAgGIAAgQQAAgFAEgCIALgDQAGgDAEgDQAEgDAAgIQAAgGgFgEQgFgFgEAAQgFABgEADQgEACgEAFIgHAGQgDACgEABQgFAAgDgEQgDgEAAgGQAAgHAEgGQAEgGAGgEQAHgEAHgCQAIgCAGAAQAKAAALAEQAKAFAGAKQAGAJAAAMQAAAQgIAJQgJAIgPADIAAAHQAAAGgEAEQgEAEgEAAQgGAAgEgEg");
	this.shape.setTransform(295.6,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgNAAgOQAAgNAGgMQAGgMAKgIQAKgGANgBQAFAAAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABCQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgFQgLANgNgBQgNABgKgIgAgKgWQgFAEgDAHQgCAGAAAFQAAAHACAGQADAHAFAEQAFADAFAAQAKABAFgJQAGgJAAgKQAAgFgDgGQgCgHgFgEQgFgEgGgBQgFABgFAEg");
	this.shape_1.setTransform(285.4,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBEQgEgEAAgFIACgIIAMgdIgehKIgCgHQAAgFAFgDQAEgDAEAAQAFAAAEACQADADACAEIASA0IATg0QACgEADgDQAEgCAFAAQAEAAAEADQAFADAAAFQAAAEgCADIgsBwQgEALgJAAQgGAAgEgDg");
	this.shape_2.setTransform(274.7,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgFAAgEADQgDACgDAEQgCAEAAAGIAAAuQABAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFgBgGIAAhHQABgHADgEQAEgEAGAAQAFAAAEACQADADAAAFQAIgMARAAQAKAAAJAFQAIAEAGAJQAEAIAAALIAAAzQAAAEgCAEQgBADgEACQgDACgDAAQgHAAgDgEg");
	this.shape_3.setTransform(264.4,32.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBIIgGgGIgfgqIgBAAIAAAiQAAAEgCAEQgCADgCACQgEABgEAAQgFAAgFgEQgDgEAAgGIAAhzQAAgIADgDQAFgFAFAAQAEAAAEACQACACACAEQACADAAAFIAAA9IAcgbQAHgFAFgBQAGABADADQADAEAAAEQAAAGgFAGIgZATIAhAlQADAEAAAGQAAAFgDAEQgEAEgGAAQgEAAgDgCg");
	this.shape_4.setTransform(254.2,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBDQgDgEAAgGIAAhHQAAgHADgFQAFgEAEAAQAEABACABQAEACACAEQACADAAAFIAABHQAAAEgCAEQgCADgEACQgCABgEAAQgEAAgFgEgAgJgtQgFgFAAgGQAAgFAFgFQAFgFAEAAQADABAEACQADACADADQACAEAAADQAAAHgEAEQgFAFgGAAQgEAAgFgFg");
	this.shape_5.setTransform(246.5,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA+QgFgEAAgHIAAg9IgFAAQgGAAgDgDQgEgEAAgFQABgFADgDQADgEAGAAIAFAAIAAgQQAAgHAFgEQADgEAGAAQACAAAEACQACABACAEQACADAAAFIAAAQIAHAAQAGAAAEADQAEADAAAGQAAAGgEADQgEADgGAAIgHAAIAAA9QAAAFgCADQgCAEgDABQgDACgCAAQgGAAgDgEg");
	this.shape_6.setTransform(241.6,31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgNAAgOQAAgNAGgMQAGgMAKgIQAKgGANgBQAFAAAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABCQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgFQgLANgNgBQgNABgKgIgAgKgWQgFAEgDAHQgCAGAAAFQAAAHACAGQADAHAFAEQAFADAFAAQAKABAFgJQAGgJAAgKQAAgFgDgGQgCgHgFgEQgFgEgGgBQgFABgFAEg");
	this.shape_7.setTransform(232.8,32.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggBDQgHAAgEgEQgFgEAAgGIAAhpQAAgGAFgEQAEgEAGAAIAjAAQAKAAAIAEQAIAEAFAIQAEAIAAAJQAAAUgRAIIAAABQAGABAFACQAFABAEAFQAEAEADAFQACAGAAAGQAAAUgMAKQgMALgUAAgAgTAqIAUAAQAIAAAFgEQAFgFAAgHQAAgHgFgEQgFgEgJAAIgTAAgAgTgMIAPAAQAFAAAEgEQAEgEAAgHQAAgHgEgDQgFgEgEAAIgPAAg");
	this.shape_8.setTransform(222.7,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBFQgDgEAAgHIAAhzQAAgHADgEQAEgEAFAAQADAAADACQAEACABADQACAEAAAEIAABzQAAAFgCADQgBAEgEACQgDABgDAAQgFAAgEgEg");
	this.shape_9.setTransform(208.6,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgNAAgOQAAgNAGgMQAGgMAKgIQAKgGANgBQAFAAAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABCQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgFQgLANgNgBQgNABgKgIgAgKgWQgFAEgDAHQgCAGAAAFQAAAHACAGQADAHAFAEQAFADAFAAQAKABAFgJQAGgJAAgKQAAgFgDgGQgCgHgFgEQgFgEgGgBQgFABgFAEg");
	this.shape_10.setTransform(200.7,32.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgFAAgEADQgDACgDAEQgCAEAAAGIAAAuQABAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFgBgGIAAhHQABgHADgEQAEgEAGAAQAFAAAEACQADADAAAFQAJgMAQAAQAKAAAJAFQAIAEAGAJQAEAIAAALIAAAzQAAAEgCAEQgBADgEACQgDACgDAAQgHAAgDgEg");
	this.shape_11.setTransform(189.7,32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAtQgMgGgGgNQgGgMAAgOQgBgJAEgJQAEgKAGgIQAHgHAJgEQAJgFAJAAQAKAAAJAFQAJAFAHAGQAHAIADAJQAEAIAAAKQAAAKgNgBIg3AAQABALAHAFQAHAEAIAAQAHAAAEgCIAKgFQAHgDADgBQADABADABIAEAFQABACAAADQAAAEgEAEQgDAFgHADQgHAEgIACQgIABgIAAQgNABgLgIgAAVgIQgBgJgFgGQgHgFgIAAQgHgBgGAHQgGAFgBAJIApAAIAAAAg");
	this.shape_12.setTransform(178.4,32.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXBIIgGgGIgfgqIgBAAIAAAiQAAAEgBAEQgCADgEACQgCABgFAAQgFAAgFgEQgDgEAAgGIAAhzQAAgIADgDQAFgFAFAAQAFAAACACQAEACACAEQABADAAAFIAAA9IAcgbQAGgFAHgBQAFABADADQADAEAAAEQAAAGgFAGIgYATIAfAlQAEAEAAAGQAAAFgEAEQgDAEgGAAQgDAAgEgCg");
	this.shape_13.setTransform(168.5,30.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXBIIgGgGIgfgqIgBAAIAAAiQAAAEgBAEQgCADgEACQgCABgFAAQgFAAgFgEQgDgEAAgGIAAhzQAAgIADgDQAFgFAFAAQAFAAACACQAEACACAEQABADAAAFIAAA9IAcgbQAGgFAHgBQAFABADADQADAEAAAEQAAAGgFAGIgYATIAfAlQAEAEAAAGQAAAFgEAEQgDAEgGAAQgDAAgEgCg");
	this.shape_14.setTransform(152.7,30.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgNAAgOQAAgNAGgMQAGgMAKgIQAKgGANgBQAFAAAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABCQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgFQgLANgNgBQgNABgKgIgAgKgWQgFAEgDAHQgCAGAAAFQAAAHACAGQADAHAFAEQAFADAFAAQAKABAFgJQAGgJAAgKQAAgFgDgGQgCgHgFgEQgFgEgGgBQgFABgFAEg");
	this.shape_15.setTransform(141.8,32.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKA+QgDgEAAgHIAAg9IgHAAQgFAAgEgDQgCgEAAgFQAAgFADgDQADgEAFAAIAHAAIAAgQQAAgHADgEQAEgEAGAAQACAAADACQADABACAEQACADAAAFIAAAQIAIAAQAFAAAEADQAEADgBAGQABAGgEADQgEADgFAAIgIAAIAAA9QAAAFgCADQgCAEgDABQgDACgCAAQgGAAgEgEg");
	this.shape_16.setTransform(133.7,31.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIBDQgEgEAAgGIAAhHQAAgHAEgFQAEgEAEAAQAEABADABQADACABAEQACADABAFIAABHQgBAEgCAEQgBADgDACQgDABgEAAQgEAAgEgEgAgJgtQgFgFAAgGQAAgFAFgFQAFgFAEAAQADABAEACQAEACACADQACAEAAADQAAAHgFAEQgEAFgGAAQgEAAgFgFg");
	this.shape_17.setTransform(122.4,30.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsBEQgDgEAAgHIAAhvQAAgHADgFQAEgEAGAAQALAAADALQAEgGAHgDQAHgDAGAAQAOAAAKAIQAKAIAFAMQAFAMAAAPQAAANgGAKQgFALgLAIQgKAHgNAAQgFAAgGgDQgHgCgFgEIAAAhQAAAEgCADQgCAEgDACQgDACgEAAQgGAAgEgEgAgKgqQgFAEgDAGQgCAGAAAHQAAAMAFAHQAGAIAJAAQAGAAAFgFQAFgDACgFQADgGAAgHQAAgHgDgGQgCgHgFgEQgFgEgGAAQgGAAgEAEg");
	this.shape_18.setTransform(114.9,34.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgNAAgOQAAgNAGgMQAGgMAKgIQAKgGANgBQAFAAAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABCQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgFQgLANgNgBQgNABgKgIgAgKgWQgFAEgDAHQgCAGAAAFQAAAHACAGQADAHAFAEQAFADAFAAQAKABAFgJQAGgJAAgKQAAgFgDgGQgCgHgFgEQgFgEgGgBQgFABgFAEg");
	this.shape_19.setTransform(103.5,32.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJBAQgDgEgBgHIAAhdIgUAAQgHAAgDgEQgDgEgBgFQAAgEACgDQACgDADgCQADgCAEAAIBDAAQAEAAADACQADACACADQABADABAEQAAAFgDAEQgEAEgHAAIgUAAIAABdQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_20.setTransform(92.8,30.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgHQAKgIANAAQAFABAHADQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABDQAAAHgCAFQgCAFgJAAQgGAAgDgDQgDgCgBgHQgLANgNABQgNAAgKgIgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAFQAFADAFAAQAKAAAFgIQAGgIAAgLQAAgFgDgHQgCgGgFgEQgFgFgGABQgFgBgFAFg");
	this.shape_21.setTransform(300.6,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIBEQgEgFAAgHIAAhHQAAgHAEgEQADgDAFAAQADAAAEABQADACABADQACAEAAAEIAABHQAAAFgCADQgBAEgDACQgEACgDgBQgFAAgDgDgAgJgtQgFgFAAgFQAAgHAFgEQAEgEAFgBQAEAAADACQADACADAEQACADAAAFQAAAGgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_22.setTransform(292.8,9.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAxQgJgCgGgFQgGgFAAgGQAAgDADgEQADgFAFAAIAHABIAHAEIAIADIAFABQAGAAACgBQADgCAAgFQAAgEgIgDIgPgHQgKgEgHgFQgFgGgBgKQAAgKAFgHQAFgHAIgFQAJgEAJAAQAHABAIACQAHACAGAEQAGAFgBAGQAAAFgDAEQgDAEgFAAIgIgDIgJgEQgDgBgEAAQgCAAgDACQgDACAAADQABAEAHAEIAQAHQAJAEAHAEQAGAGAAALQAAAJgFAIQgFAHgIAEQgJAEgLABQgHAAgJgEg");
	this.shape_23.setTransform(284.7,11.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAtQgMgHgGgLQgGgNAAgOQgBgJAEgJQAEgKAGgHQAHgIAJgEQAJgEAJgBQAKABAJAEQAJAEAHAIQAHAHADAJQAEAJAAAJQAAAJgNABIg3AAQABAKAHAFQAHAEAIAAQAHAAAEgBIAKgGQAHgDADAAQADgBADACIAEAFQABACAAADQAAAFgEADQgDAEgHAEQgHADgIADQgIACgIAAQgNAAgLgIgAAVgHQgBgKgFgGQgHgGgIABQgHAAgGAFQgGAGgBAKIApAAIAAAAg");
	this.shape_24.setTransform(274.7,11.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgEAAgEADQgFACgBAEQgCAEAAAGIAAAuQAAAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgEgFABgGIAAhHQgBgHAEgEQAEgEAGAAQAFAAADACQAEADABAFQAIgMAQAAQAKAAAJAFQAJAEAEAJQAFAIABALIAAAzQAAAEgDAEQgBADgDACQgEACgEAAQgFAAgEgEg");
	this.shape_25.setTransform(263.9,11.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAtQgLgHgHgMQgFgMgBgOQAAgJAEgJQAEgKAGgHQAHgIAJgEQAJgEAJgBQAKABAJAEQAJAEAHAIQAGAHAEAKQAEAJgBAJQABALgEAJQgEAJgGAIQgGAHgKAEQgJAEgKABQgNAAgLgIgAgKgWQgGAEgCAGQgDAHAAAFQAAAGADAHQACAGAGAFQAEADAGAAQAGAAAFgDQAFgFACgGQADgHAAgGQAAgFgDgHQgCgGgFgEQgFgFgGABQgGgBgEAFg");
	this.shape_26.setTransform(252.8,11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaBCQgKgHgGgMQgFgMAAgMQAAgOAFgLQAFgNAKgHQAKgIAOAAIAHACIAJADIAIAFIAAgmQAAgGADgFQAEgEAGAAQAEAAADACQAEACABAEQACADAAAEIAABzQAAAFgCADQgBAEgEACQgDACgEgBQgLABgCgLQgEAFgHAEQgHADgFAAQgOAAgKgIgAgKAAQgFACgDAGQgCAGAAAHIABAKIAEAJQADAEAEACQAEADAEAAQAGAAAFgFQAFgEACgGQADgHAAgHQAAgLgGgIQgGgGgJAAQgGAAgEAFg");
	this.shape_27.setTransform(241.7,9.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgEAAgFADQgDACgCAEQgDAEAAAGIAAAuQAAAEgBAEQgCADgDACQgDACgEAAQgGAAgEgEQgEgFAAgGIAAhHQAAgHAEgEQAEgEAGAAQAFAAAEACQADADAAAFQAIgMARAAQAKAAAJAFQAIAEAGAJQAEAIAAALIAAAzQAAAEgCAEQgBADgDACQgEACgDAAQgHAAgDgEg");
	this.shape_28.setTransform(230.7,11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJBAQgEgEAAgGIAAhqQAAgHAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAHIAABqQAAAHgEAEQgEADgGAAQgFAAgEgEg");
	this.shape_29.setTransform(221.9,9.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgHQAKgIANAAQAFABAHADQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABDQAAAHgCAFQgCAFgJAAQgGAAgDgDQgDgCgBgHQgLANgNABQgNAAgKgIgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAFQAFADAFAAQAKAAAFgIQAGgIAAgLQAAgFgDgHQgCgGgFgEQgFgFgGABQgFgBgFAFg");
	this.shape_30.setTransform(208.1,11.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJA+QgFgEAAgHIAAg9IgGAAQgFAAgEgDQgDgEAAgFQABgFADgDQADgEAFAAIAGAAIAAgQQAAgHAFgEQADgEAGAAQACAAADACQAEABABAEQACADAAAFIAAAQIAIAAQAFAAAEADQADADAAAGQAAAGgDADQgEADgFAAIgIAAIAAA9QAAAFgCADQgCAEgDABQgDACgCAAQgGAAgDgEg");
	this.shape_31.setTransform(200.1,10.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgFAAgEADQgEACgCAEQgCAEAAAGIAAAuQABAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFgBgGIAAhHQABgHADgEQAEgEAGAAQAFAAAEACQADADAAAFQAJgMAQAAQAKAAAJAFQAIAEAGAJQAEAIAAALIAAAzQAAAEgBAEQgCADgEACQgDACgDAAQgHAAgDgEg");
	this.shape_32.setTransform(191.4,11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJBEQgDgFAAgHIAAhHQAAgHADgEQAFgDAEAAQAEAAACABQAEACACADQACAEAAAEIAABHQAAAFgCADQgCAEgEACQgCACgEgBQgEAAgFgDgAgJgtQgFgFAAgFQAAgHAFgEQAFgEAEgBQADAAAEACQADACADAEQACADAAAFQAAAGgEAEQgFAFgGAAQgEAAgFgFg");
	this.shape_33.setTransform(183.5,9.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAtQgMgHgGgMQgGgMAAgOQAAgJAEgJQADgKAHgHQAGgIAJgEQAKgEAIgBQAGAAAIACQAIACAGAEQAGAEAAAGQAAAFgDAEQgDAEgFAAIgKgDQgHgCgFAAQgHAAgDADQgFAFgDAGQgDAGAAAGQAAALAHAIQAGAIAIAAIAHAAIAIgDIAGgDIAGACIAEAEQACADAAAEQAAAGgGAEQgGAEgIADQgIACgGAAQgMAAgLgIg");
	this.shape_34.setTransform(175.9,11.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AggApQgMgLAAgSIAAgwQABgHADgEQAEgEAGAAQAEAAADACQADACACADQACAEgBAEIAAAvQABAIAFAFQAFAFAGAAQAEAAAEgCQAEgCADgEQACgEAAgGIAAgvQAAgHAEgEQADgEAHAAQAEAAADACQADACACADQABAEAAAEIAAAwQAAAMgFAJQgFAJgKAFQgLAFgNAAQgUAAgMgLg");
	this.shape_35.setTransform(159.9,11.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAXBIIgGgHIgfgpIgBAAIAAAhQAAAFgCADQgCAEgCACQgDACgFgBQgFAAgEgDQgEgFAAgHIAAhzQAAgGAEgFQAEgEAFAAQAFAAADACQACACACAEQACADAAAEIAAA+IAcgbQAHgGAFABQAFgBAEAEQADAEAAAFQAAAFgFAFIgZAUIAhAmQADAEAAAFQAAAGgDADQgFAEgFAAQgEAAgDgCg");
	this.shape_36.setTransform(149.7,9.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgHQAKgIANAAQAFABAHADQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABDQAAAHgCAFQgCAFgJAAQgGAAgDgDQgDgCgBgHQgLANgNABQgNAAgKgIgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAFQAFADAFAAQAKAAAFgIQAGgIAAgLQAAgFgDgHQgCgGgFgEQgFgFgGABQgFgBgFAFg");
	this.shape_37.setTransform(138.8,11.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUBFQgKgCgIgEQgIgFAAgHQAAgDAEgFQADgEAEAAQAEAAAIADIALAFQAFABAGAAQAFAAAFgCQAGgDADgFQADgFAAgGIAAgHIgBAAQgJANgQAAQgLAAgIgEQgHgFgGgHQgFgIgDgJQgCgIAAgKQAAgKADgKQADgJAGgIQAGgHAIgFQAJgEAKAAIAHACQAFABAEADQAEADADAEQACgLALAAQAEAAADABQAEACABADQACAEAAAEIAABNQAAAQgHALQgGAMgMAGQgMAFgOAAQgGAAgLgDgAgKgpQgFADgDAHQgCAGAAAHQAAAHACAHQADAEAFAEQAEAEAGAAQAJAAAGgIQAGgGAAgLQAAgHgDgHQgCgGgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_38.setTransform(127.7,13.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgEAAgEADQgFACgBAEQgCAEAAAGIAAAuQAAAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgEgFABgGIAAhHQgBgHAEgEQAEgEAGAAQAFAAADACQAEADABAFQAIgMAQAAQAKAAAJAFQAJAEAEAJQAFAIABALIAAAzQAAAEgDAEQgBADgDACQgEACgEAAQgFAAgEgEg");
	this.shape_39.setTransform(116.7,11.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAtQgMgHgGgLQgGgNgBgOQABgJADgJQADgKAIgHQAGgIAJgEQAJgEAJgBQAKABAKAEQAJAEAGAIQAHAHADAJQADAJAAAJQABAJgMABIg5AAQACAKAHAFQAHAEAIAAQAGAAAEgBIAMgGQAGgDADAAQADgBACACIAFAFQABACABADQAAAFgFADQgEAEgGAEQgHADgIADQgIACgHAAQgNAAgMgIgAAVgHQgBgKgGgGQgGgGgIABQgIAAgFAFQgGAGgCAKIAqAAIAAAAg");
	this.shape_40.setTransform(105.5,11.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA1BBQgDgDgBgHIgLhLIgBAAIgWBNQgEALgLAAQgLAAgDgLIgXhNIgLBLQgBAHgEADQgDADgHAAQgGAAgEgDQgEgEAAgGIABgEIARhoQABgFAFgFQAGgEAHAAQAHAAAFAEQAFAEACAGIAVBJIAAAAIAWhJQACgGAFgEQAFgEAHAAQAHAAAFAEQAGAFABAFIARBoIABAEQAAAGgEAEQgEADgGAAQgHAAgEgDg");
	this.shape_41.setTransform(92.3,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390.5,44);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.belajar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,90);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tulisanbatik();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,86);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tangan();
	this.instance.parent = this;
	this.instance.setTransform(63.7,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.1,164.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sayap();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,74);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sayap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,81);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG_logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,90);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(66.5,43,1,1,0,0,0,66.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,86);


// stage content:
(lib.wap_batik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(159.6,20.6,0.092,0.092,0,0,0,191.2,33);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(163).to({_off:false},0).to({regY:33.2,scaleX:0.3,scaleY:0.3,y:20.7,alpha:1},6).wait(13).to({regX:191.3,scaleX:0.34,scaleY:0.34,x:159.7},0).to({regX:191.2,scaleX:0.3,scaleY:0.3,x:159.6},3).to({regX:191.3,scaleX:0.34,scaleY:0.34,x:159.7},3).to({regX:191.2,scaleX:0.3,scaleY:0.3,x:159.6},3).wait(14).to({regX:191.3,scaleX:0.34,scaleY:0.34,x:159.7},0).to({regX:191.2,scaleX:0.3,scaleY:0.3,x:159.6},3).to({regX:191.3,scaleX:0.34,scaleY:0.34,x:159.7},3).to({regX:191.2,scaleX:0.3,scaleY:0.3,x:159.6},3).wait(14).to({regX:191.3,scaleX:0.34,scaleY:0.34,x:159.7},0).to({regX:191.2,scaleX:0.3,scaleY:0.3,x:159.6},3).to({regX:191.3,scaleX:0.34,scaleY:0.34,x:159.7},3).to({regX:191.2,scaleX:0.3,scaleY:0.3,x:159.6},3).wait(8).to({regX:191.8,regY:33,scaleX:0.08,scaleY:0.08,x:159.7,alpha:0},7).to({_off:true},1).wait(7));

	// Layer 12
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.1,19.9,0.155,0.155,0,0,0,195.7,22.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({regX:195.3,regY:22.1,scaleX:0.58,scaleY:0.58,alpha:1},6).wait(40).to({regY:22.4,scaleX:0.17,scaleY:0.17,alpha:0},7).wait(82).to({_off:true},1).wait(15));

	// tangan
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(174.2,62.3,0.441,0.441,-12,0,0,82.2,82.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regY:82,x:162.9,y:23.4},3).to({regX:82.1,x:169.5,y:34},2).to({regX:82.2,regY:81.9,x:177.7,y:23.2},2).to({regY:82.2,x:184,y:34.5},2).to({regY:82,x:191.7,y:23.9},2).to({regY:82.2,x:196.4,y:37.1},2).to({x:205.8,y:38.2},2).to({_off:true},1).wait(224));

	// tulisan belajar
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.7,43,0.441,0.441,0,0,0,77.5,45.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({y:21.9,alpha:1},4).wait(28).to({regX:78,regY:45.4,scaleX:0.09,scaleY:0.09,x:160.2,y:21.2,alpha:0},5).to({_off:true},1).wait(152));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAWE7IAAp1IenAAIAAJ1gA+8EVIAAo7IWvAAIAAI7g");
	var mask_graphics_23 = new cjs.Graphics().p("AAVE7IAAp1IeoAAIAAJ1gA+8EVIAAo7IWvAAIAAI7g");
	var mask_graphics_24 = new cjs.Graphics().p("AAVE7IAAp1IeoAAIAAJ1gA+8EVIAAo7IWvAAIAAI7g");
	var mask_graphics_25 = new cjs.Graphics().p("AAVE7IAAp1IeoAAIAAJ1gA+8EVIAAo7IWvAAIAAI7g");
	var mask_graphics_26 = new cjs.Graphics().p("AAiE7IAAp1IenAAIAAJ1gA+wEVIAAo7IWvAAIAAI7g");
	var mask_graphics_27 = new cjs.Graphics().p("AA7E7IAAp1IeoAAIAAJ1gA+WEVIAAo7IWvAAIAAI7g");
	var mask_graphics_28 = new cjs.Graphics().p("ABVE7IAAp1IenAAIAAJ1gA98EVIAAo7IWvAAIAAI7g");
	var mask_graphics_29 = new cjs.Graphics().p("ABvE7IAAp1IenAAIAAJ1gA9iEVIAAo7IWuAAIAAI7g");
	var mask_graphics_30 = new cjs.Graphics().p("ACJE7IAAp1IenAAIAAJ1gA9JEVIAAo7IWvAAIAAI7g");
	var mask_graphics_31 = new cjs.Graphics().p("ACiE7IAAp1IeoAAIAAJ1gA8vEVIAAo7IWvAAIAAI7g");
	var mask_graphics_32 = new cjs.Graphics().p("AC8E7IAAp1IenAAIAAJ1gA8VEVIAAo7IWvAAIAAI7g");
	var mask_graphics_33 = new cjs.Graphics().p("ADWE7IAAp1IenAAIAAJ1gA77EVIAAo7IWuAAIAAI7g");
	var mask_graphics_34 = new cjs.Graphics().p("ADwE7IAAp1IenAAIAAJ1gA7iEVIAAo7IWvAAIAAI7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:185.1,y:23.2}).wait(23).to({graphics:mask_graphics_23,x:185.1,y:23.2}).wait(1).to({graphics:mask_graphics_24,x:190.3,y:23.2}).wait(1).to({graphics:mask_graphics_25,x:195.4,y:23.2}).wait(1).to({graphics:mask_graphics_26,x:199.3,y:23.2}).wait(1).to({graphics:mask_graphics_27,x:201.9,y:23.2}).wait(1).to({graphics:mask_graphics_28,x:204.5,y:23.2}).wait(1).to({graphics:mask_graphics_29,x:207.1,y:23.2}).wait(1).to({graphics:mask_graphics_30,x:209.6,y:23.2}).wait(1).to({graphics:mask_graphics_31,x:212.2,y:23.2}).wait(1).to({graphics:mask_graphics_32,x:214.8,y:23.2}).wait(1).to({graphics:mask_graphics_33,x:217.4,y:23.2}).wait(1).to({graphics:mask_graphics_34,x:219.9,y:23.2}).wait(226));

	// tulisan batik
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.3,21.6,0.441,0.441,0,0,0,66.6,43.1);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).wait(41).to({regX:66.5,scaleX:0.09,scaleY:0.09,alpha:0},5).to({_off:true},1).wait(190));

	// bg logo batik
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(159.2,20.8,0.137,0.137,0,0,0,74.1,45.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({regX:74,regY:44.9,scaleX:0.56,scaleY:0.56,y:20.7,alpha:1},5).to({regX:74.1,scaleX:0.44,scaleY:0.44},2).wait(91).to({regX:74.5,regY:45.4,scaleX:0.09,scaleY:0.09,x:159.9,y:21,alpha:0},5).to({_off:true},1).wait(152));

	// sayap 2
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(133.4,21,0.441,0.441,-120,0,0,47.3,45.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({regX:47.6,rotation:0,alpha:1},7).wait(83).to({regX:47.8,regY:46,scaleX:0.09,scaleY:0.09,x:154.9,y:21.1,alpha:0},5).to({_off:true},1).wait(152));

	// sayap
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(189.1,20.8,0.441,0.441,120,0,0,16,45.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({regX:16.1,regY:46.1,rotation:0,x:189.2,alpha:1},7).wait(83).to({regX:16.3,regY:46.6,scaleX:0.09,scaleY:0.09,x:165.7,y:21.1,alpha:0},5).to({_off:true},1).wait(152));

	// logo
	this.instance_8 = new lib.logo_kaskuis();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4,-1,0.441,0.441);

	this.instance_9 = new lib.logoindonesia();
	this.instance_9.parent = this;
	this.instance_9.setTransform(253,0,0.303,0.303);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).to({state:[{t:this.instance_9},{t:this.instance_8}]},259).wait(1));

	// bg
	this.instance_10 = new lib.bg_LB();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-53,-2,0.588,0.588);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(107,23,428,52.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;