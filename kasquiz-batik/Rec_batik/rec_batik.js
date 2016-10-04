(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/belajar.png", id:"belajar"},
		{src:"images/BG_logo.png", id:"BG_logo"},
		{src:"images/bg_RB.jpg", id:"bg_RB"},
		{src:"images/logoindonesia.png", id:"logoindonesia"},
		{src:"images/logo_kaskuis.png", id:"logo_kaskuis"},
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


(lib.BG_logo = function() {
	this.initialize(img.BG_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,90);


(lib.bg_RB = function() {
	this.initialize(img.bg_RB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logoindonesia = function() {
	this.initialize(img.logoindonesia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,90);


(lib.logo_kaskuis = function() {
	this.initialize(img.logo_kaskuis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,90);


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


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG_logo();
	this.instance.parent = this;
	this.instance.setTransform(-25,-21,1.467,1.467);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-21,217.1,132);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMBBQgEgFAAgFQAAgHAEgEQAFgEAGgBQAEABAEAEQAFAEAAAHQAAAFgFAFQgEAFgEgBQgGABgFgFgAgLAZQgEgEAAgGIAAgRQAAgEAEgCIALgEQAGgCAEgDQAEgEAAgHQAAgGgFgEQgFgFgEABQgFAAgEACQgEADgEAFIgHAHQgDACgEAAQgFgBgDgDQgDgEAAgGQAAgIAEgFQAEgGAGgEQAHgFAHgCQAIgBAGAAQAKAAALAEQAKAFAGAJQAGAKAAAMQAAAPgIAKQgJAHgPAFIAAAGQAAAGgEAEQgEADgEABQgGgBgEgDg");
	this.shape.setTransform(274.3,51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAuQgLgHgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgIQAKgGANAAQAFgBAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAEAAAJIAABBQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgGQgLANgNAAQgNAAgKgGgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAEQAFAFAFAAQAKAAAFgJQAGgJAAgKQAAgFgDgHQgCgGgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_1.setTransform(264.1,53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBEQgEgEAAgFIACgIIAMgdIgehKIgCgHQAAgFAFgDQAEgDAEAAQAFAAAEACQADADACAEIASA0IATg0QACgEADgDQAEgCAFAAQAEAAAEADQAFADAAAFQAAAEgCADIgsBwQgEALgJAAQgGAAgEgDg");
	this.shape_2.setTransform(253.4,55.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgFAAgEADQgEACgCAEQgCAEAAAGIAAAuQABAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFgBgGIAAhHQABgHADgEQAEgEAGAAQAFAAAEACQADADAAAFQAJgMAQAAQAKAAAJAFQAIAEAGAJQAEAIAAALIAAAzQAAAEgBAEQgCADgEACQgCACgEAAQgHAAgDgEg");
	this.shape_3.setTransform(243.1,53.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBIIgGgHIgfgpIgBAAIAAAhQAAAFgCADQgCAEgCACQgDABgFABQgFAAgEgFQgEgEAAgHIAAhzQAAgGAEgEQAEgFAFAAQAFAAADACQACACACADQACAEAAAEIAAA+IAcgbQAHgGAFAAQAFAAAEAEQADAEAAAFQAAAGgFAFIgZATIAhAlQADAFAAAFQAAAFgDAEQgFAEgFAAQgEAAgDgCg");
	this.shape_4.setTransform(233,51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBDQgDgEAAgHIAAhGQAAgIADgDQAEgFAFAAQAEAAACACQAEACACADQACAEAAAFIAABGQAAAFgCADQgCAEgEACQgCABgEABQgFAAgEgFgAgJgtQgFgEAAgHQAAgGAFgEQAFgFAEABQAEAAADABQAEADACADQACADAAAEQAAAGgFAGQgEAEgGAAQgEAAgFgFg");
	this.shape_5.setTransform(225.2,51.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA+QgFgEAAgHIAAg9IgGAAQgFAAgEgDQgDgEAAgFQABgFADgDQADgEAFAAIAGAAIAAgQQAAgHAFgEQADgEAGAAQACAAADACQAEABABAEQACADAAAFIAAAQIAIAAQAFAAAEADQADADAAAGQAAAGgDADQgEADgFAAIgIAAIAAA9QAAAFgCADQgCAEgDABQgDACgCAAQgGAAgDgEg");
	this.shape_6.setTransform(220.3,52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAuQgLgHgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgIQAKgGANAAQAFgBAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAEAAAJIAABBQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgGQgLANgNAAQgNAAgKgGgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAEQAFAFAFAAQAKAAAFgJQAGgJAAgKQAAgFgDgHQgCgGgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_7.setTransform(211.6,53.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggBDQgHAAgEgEQgFgEAAgGIAAhpQAAgGAFgEQAEgEAGAAIAjAAQAKAAAIAEQAIAEAFAIQAEAIAAAJQAAAUgRAIIAAABQAGABAFACQAFABAEAFQAEAEADAFQACAGAAAGQAAAUgMAKQgMALgUAAgAgTAqIAUAAQAIAAAFgEQAFgFAAgHQAAgHgFgEQgFgEgJAAIgTAAgAgTgMIAPAAQAFAAAEgEQAEgEAAgHQAAgHgEgDQgFgEgEAAIgPAAg");
	this.shape_8.setTransform(201.4,51.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBFQgDgEAAgHIAAhzQAAgHADgEQAEgEAFAAQADAAADACQAEACABADQACAEAAAEIAABzQAAAFgCADQgBAEgEACQgDABgDAAQgFAAgEgEg");
	this.shape_9.setTransform(187.3,51.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAuQgLgHgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgIQAKgGANAAQAFgBAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAEAAAJIAABBQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgGQgLANgNAAQgNAAgKgGgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAEQAFAFAFAAQAKAAAFgJQAGgJAAgKQAAgFgDgHQgCgGgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_10.setTransform(179.4,53.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgFAAgEADQgEACgCAEQgCAEAAAGIAAAuQABAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFgBgGIAAhHQABgHADgEQAEgEAGAAQAFAAAEACQADADAAAFQAJgMAQAAQAKAAAJAFQAIAEAGAJQAEAIAAALIAAAzQAAAEgBAEQgCADgEACQgDACgDAAQgHAAgDgEg");
	this.shape_11.setTransform(168.4,53.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAuQgMgIgGgLQgHgMABgPQgBgIAEgKQAEgKAGgIQAHgHAJgEQAJgFAJABQAKgBAJAFQAJAFAHAGQAGAIAEAJQAEAJAAAIQAAALgNAAIg3AAQABAJAHAFQAHAGAIAAQAGAAAFgCIAKgGQAHgDADAAQADAAADABIAEAEQABADAAADQAAAEgDAFQgEAEgHADQgHADgIACQgIACgIAAQgMAAgMgGgAAVgHQgBgKgFgGQgHgFgIgBQgIAAgFAHQgGAFgBAKIApAAIAAAAg");
	this.shape_12.setTransform(157.2,53.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXBIIgGgHIgfgpIgBAAIAAAhQAAAFgBADQgDAEgDACQgCABgFABQgGAAgEgFQgDgEAAgHIAAhzQAAgGADgEQAEgFAGAAQAFAAACACQADACADADQABAEAAAEIAAA+IAcgbQAGgGAGAAQAGAAADAEQADAEAAAFQAAAGgFAFIgZATIAgAlQAEAFAAAFQAAAFgEAEQgDAEgGAAQgEAAgDgCg");
	this.shape_13.setTransform(147.2,51.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXBIIgGgHIgfgpIgBAAIAAAhQAAAFgBADQgDAEgDACQgCABgFABQgGAAgEgFQgDgEAAgHIAAhzQAAgGADgEQAEgFAGAAQAFAAACACQADACADADQABAEAAAEIAAA+IAcgbQAGgGAGAAQAGAAADAEQADAEAAAFQAAAGgFAFIgZATIAgAlQAEAFAAAFQAAAFgEAEQgDAEgGAAQgEAAgDgCg");
	this.shape_14.setTransform(131.5,51.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAuQgLgHgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgIQAKgGANAAQAFgBAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAEAAAJIAABBQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgGQgLANgNAAQgNAAgKgGgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAEQAFAFAFAAQAKAAAFgJQAGgJAAgKQAAgFgDgHQgCgGgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_15.setTransform(120.5,53.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKA+QgDgEAAgHIAAg9IgHAAQgFAAgEgDQgCgEAAgFQgBgFAEgDQADgEAFAAIAHAAIAAgQQAAgHADgEQAEgEAGAAQACAAADACQADABACAEQACADAAAFIAAAQIAIAAQAFAAAEADQADADAAAGQAAAGgDADQgEADgFAAIgIAAIAAA9QAAAFgCADQgBAEgEABQgDACgCAAQgGAAgEgEg");
	this.shape_16.setTransform(112.5,52.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIBDQgEgEAAgGIAAhHQAAgHAEgFQAEgEAEAAQAEABADABQADACABAEQACADABAFIAABHQgBAEgCAEQgBADgDACQgDABgEAAQgEAAgEgEgAgJgtQgFgFAAgGQAAgFAFgFQAFgFAEAAQADABAEACQAEACACADQACAEAAADQAAAHgFAEQgEAFgGAAQgEAAgFgFg");
	this.shape_17.setTransform(255.2,30.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsBEQgDgEAAgHIAAhvQAAgHADgFQAEgEAGAAQALAAADALQAEgGAHgDQAHgDAGAAQAOAAAKAIQAKAIAFAMQAFAMAAAPQAAANgGAKQgFALgLAIQgKAHgNAAQgFAAgGgDQgHgCgFgEIAAAhQAAAEgCADQgCAEgDACQgDACgEAAQgGAAgEgEgAgKgqQgFAEgDAGQgCAGAAAHQAAAMAFAHQAGAIAJAAQAGAAAFgFQAFgDACgFQADgGAAgHQAAgHgDgGQgCgHgFgEQgFgEgGAAQgGAAgEAEg");
	this.shape_18.setTransform(247.7,34.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgNAAgOQAAgNAGgMQAGgMAKgIQAKgGANgBQAFAAAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABCQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgFQgLANgNgBQgNABgKgIgAgKgWQgFAEgDAHQgCAGAAAFQAAAHACAGQADAHAFAEQAFADAFAAQAKABAFgJQAGgJAAgKQAAgFgDgGQgCgHgFgEQgFgEgGgBQgFABgFAEg");
	this.shape_19.setTransform(236.2,32.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJA+QgFgEAAgHIAAg9IgFAAQgGAAgDgDQgEgEAAgFQAAgFAEgDQADgEAGAAIAFAAIAAgQQAAgHAFgEQADgEAGAAQACAAAEACQADABABAEQACADAAAFIAAAQIAHAAQAHAAADADQAEADAAAGQAAAGgEADQgDADgHAAIgHAAIAAA9QAAAFgCADQgCAEgDABQgDACgCAAQgGAAgDgEg");
	this.shape_20.setTransform(228.2,31.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgNAAgOQAAgNAGgMQAGgMAKgIQAKgGANgBQAFAAAHAEQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABCQAAAJgCAEQgCAFgJAAQgGAAgDgDQgDgDgBgFQgLANgNgBQgNABgKgIgAgKgWQgFAEgDAHQgCAGAAAFQAAAHACAGQADAHAFAEQAFADAFAAQAKABAFgJQAGgJAAgKQAAgFgDgGQgCgHgFgEQgFgEgGgBQgFABgFAEg");
	this.shape_21.setTransform(213.7,32.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIBDQgEgEAAgGIAAhHQAAgHAEgFQADgEAFAAQADABADABQAEACABAEQACADAAAFIAABHQAAAEgCAEQgBADgEACQgDABgDAAQgFAAgDgEgAgJgtQgFgFAAgGQAAgFAFgFQAEgFAFAAQAEABADACQADACADADQACAEAAADQAAAHgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_22.setTransform(205.8,30.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAyQgJgDgGgFQgGgFAAgGQAAgEADgDQAEgFAEAAIAHABIAHAEIAIADIAFABQAGAAACgCQADgBAAgEQAAgFgIgDIgPgHQgKgEgHgEQgFgHgBgKQAAgKAFgHQAFgIAIgDQAJgFAIAAQAIAAAIADQAIACAFAEQAGAFgBAHQAAAEgCAEQgEADgEABIgJgDIgJgEQgDgBgEgBQgCAAgDACQgCACgBAEQABAEAHAEIAQAHQAJAEAHAEQAGAHAAAKQAAAKgFAGQgEAIgKAEQgIAEgLAAQgHAAgJgCg");
	this.shape_23.setTransform(197.8,32.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAtQgMgGgGgNQgHgMABgOQgBgJAEgJQAEgKAGgIQAHgHAJgEQAJgFAJAAQAKAAAJAFQAJAFAHAGQAGAIAEAJQAEAIAAAKQAAAKgNgBIg3AAQABALAHAFQAHAEAIAAQAGAAAFgCIAKgFQAHgDADgBQADABADABIAEAFQABACAAADQAAAEgDAEQgEAFgHADQgHAEgIACQgIABgIAAQgMABgMgIgAAVgIQgBgJgFgGQgHgFgIAAQgIgBgFAHQgGAFgBAJIApAAIAAAAg");
	this.shape_24.setTransform(187.8,32.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgEAAgFADQgEACgBAEQgCAEAAAGIAAAuQAAAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFAAgGIAAhHQAAgHADgEQAEgEAGAAQAFAAADACQAEADAAAFQAJgMAQAAQAKAAAJAFQAJAEAEAJQAFAIABALIAAAzQgBAEgCAEQgBADgDACQgDACgFAAQgFAAgEgEg");
	this.shape_25.setTransform(176.9,32.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAtQgLgHgGgMQgGgMgBgOQAAgJAEgJQADgKAHgIQAHgHAJgEQAJgFAJAAQAKAAAJAFQAJAFAHAGQAGAIAEAKQAEAJgBAJQABAKgEAKQgEAKgGAGQgGAIgKAEQgJAEgKAAQgNABgLgIgAgLgWQgFAEgCAHQgDAGAAAFQAAAHADAGQACAHAFAEQAFADAGAAQAGAAAFgDQAFgEADgHQACgGAAgHQAAgFgCgGQgDgHgFgEQgFgEgGgBQgGABgFAEg");
	this.shape_26.setTransform(165.9,32.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaBDQgKgIgGgMQgFgMAAgMQAAgPAFgKQAFgMAKgIQAKgIAOAAIAHABIAJADIAIAGIAAglQAAgIADgDQAEgFAGAAQAEAAADACQAEACABAEQACADAAAFIAABzQAAAEgCAEQgBADgEACQgDABgEAAQgLAAgCgLQgEAGgHADQgHAEgFAAQgOAAgKgHgAgKgBQgFACgDAHQgCAGAAAHIABAKIAEAJQADAEAEADQAEACAEAAQAGAAAFgFQAFgDACgIQADgGAAgHQAAgLgGgIQgGgGgJAAQgGAAgEAEg");
	this.shape_27.setTransform(154.8,30.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgFAAgEADQgDACgDAEQgCAEAAAGIAAAuQABAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFgBgGIAAhHQABgHADgEQAEgEAGAAQAFAAAEACQADADAAAFQAIgMARAAQAKAAAJAFQAIAEAGAJQAEAIAAALIAAAzQAAAEgBAEQgCADgEACQgDACgDAAQgHAAgDgEg");
	this.shape_28.setTransform(143.8,32.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJBAQgEgEAAgGIAAhqQAAgHAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAHIAABqQAAAHgEAEQgEADgGAAQgFAAgEgEg");
	this.shape_29.setTransform(135,30.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgHQAKgIANAAQAFABAHADQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABDQAAAHgCAFQgCAFgJAAQgGAAgDgDQgDgCgBgHQgLANgNABQgNAAgKgIgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAFQAFADAFAAQAKAAAFgIQAGgIAAgLQAAgFgDgHQgCgGgFgEQgFgFgGABQgFgBgFAFg");
	this.shape_30.setTransform(254.4,11.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKA+QgEgEABgHIAAg9IgHAAQgFAAgEgDQgDgEAAgFQABgFADgDQADgEAFAAIAHAAIAAgQQgBgHAEgEQAEgEAGAAQACAAADACQAEABABAEQACADAAAFIAAAQIAIAAQAFAAAEADQAEADgBAGQABAGgEADQgEADgFAAIgIAAIAAA9QAAAFgCADQgCAEgDABQgDACgCAAQgGAAgEgEg");
	this.shape_31.setTransform(246.3,10.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgFAAgDADQgEACgDAEQgCAEABAGIAAAuQgBAEgBAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFgBgGIAAhHQABgHADgEQAEgEAGAAQAFAAADACQAEADABAFQAHgMARAAQALAAAIAFQAJAEAEAJQAGAIgBALIAAAzQAAAEgBAEQgCADgEACQgCACgFAAQgGAAgDgEg");
	this.shape_32.setTransform(237.6,11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJBEQgDgFAAgHIAAhHQAAgHADgEQAEgDAFAAQAEAAACABQAEACACADQACAEAAAEIAABHQAAAFgCADQgCAEgEACQgCACgEgBQgFAAgEgDgAgJgtQgFgFAAgFQAAgHAFgEQAFgEAEgBQAEAAADACQAEACACAEQACADAAAFQAAAGgFAEQgEAFgGAAQgEAAgFgFg");
	this.shape_33.setTransform(229.7,9.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAtQgMgHgGgMQgGgMAAgOQAAgJAEgJQADgKAHgHQAGgIAJgEQAKgEAIgBQAGAAAIACQAIACAGAEQAGAEAAAGQAAAFgDAEQgDAEgFAAIgKgDQgHgCgFAAQgHAAgDADQgFAFgDAGQgDAGAAAGQAAALAHAIQAGAIAIAAIAHAAIAIgDIAGgDIAGACIAEAEQACADAAAEQAAAGgGAEQgGAEgIADQgIACgGAAQgMAAgLgIg");
	this.shape_34.setTransform(222.1,11.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AggApQgMgLAAgSIAAgwQABgHADgEQAEgEAGAAQAEAAADACQADACACADQABAEABAEIAAAvQAAAIAFAFQAFAFAGAAQAEAAAEgCQAEgCADgEQACgEAAgGIAAgvQAAgHAEgEQADgEAGAAQAFAAADACQADACACADQABAEAAAEIAAAwQAAAMgFAJQgFAJgKAFQgLAFgNAAQgUAAgMgLg");
	this.shape_35.setTransform(206.1,11.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAYBIIgHgHIgggpIAAAAIAAAhQAAAFgCADQgBAEgDACQgEACgDgBQgHAAgDgDQgEgFAAgHIAAhzQAAgGAEgFQADgEAHAAQADAAAEACQADACABAEQACADAAAEIAAA+IAcgbQAHgGAFABQAFgBAEAEQADAEAAAFQAAAFgFAFIgZAUIAhAmQADAEAAAFQAAAGgDADQgEAEgGAAQgDAAgDgCg");
	this.shape_36.setTransform(196,9.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgGgMQgFgMAAgPQAAgNAGgMQAGgMAKgHQAKgIANAAQAFABAHADQAHADAFAGQAAgFAEgDQAEgDAFAAQAJAAACAFQACAFAAAHIAABDQAAAHgCAFQgCAFgJAAQgGAAgDgDQgDgCgBgHQgLANgNABQgNAAgKgIgAgKgWQgFAEgDAGQgCAHAAAFQAAAGACAHQADAGAFAFQAFADAFAAQAKAAAFgIQAGgIAAgLQAAgFgDgHQgCgGgFgEQgFgFgGABQgFgBgFAFg");
	this.shape_37.setTransform(185,11.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUBFQgKgCgIgEQgIgFAAgHQAAgDAEgFQADgEAEAAQAEAAAIADIALAFQAFABAGAAQAFAAAFgCQAGgDADgFQADgFAAgGIAAgHIgBAAQgJANgQAAQgLAAgIgEQgHgFgGgHQgFgIgDgJQgCgIAAgKQAAgKADgKQADgJAGgIQAGgHAIgFQAJgEAKAAIAHACQAFABAEADQAEADADAEQACgLALAAQAEAAADABQAEACABADQACAEAAAEIAABNQAAAQgHALQgGAMgMAGQgMAFgOAAQgGAAgLgDgAgKgpQgFADgDAHQgCAGAAAHQAAAHACAHQADAEAFAEQAEAEAGAAQAJAAAGgIQAGgGAAgLQAAgHgDgHQgCgGgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_38.setTransform(174,13.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgFgFgHAAQgEAAgFADQgEACgBAEQgCAEAAAGIAAAuQAAAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgDgFAAgGIAAhHQAAgHADgEQAEgEAGAAQAFAAADACQAEADAAAFQAJgMAQAAQAKAAAJAFQAJAEAEAJQAFAIABALIAAAzQgBAEgCAEQgBADgDACQgDACgEAAQgGAAgEgEg");
	this.shape_39.setTransform(163,11.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAtQgMgHgGgLQgGgNgBgOQABgJADgJQADgKAIgHQAGgIAJgEQAJgEAJgBQAKABAKAEQAIAEAHAIQAGAHAEAJQADAJAAAJQABAJgMABIg5AAQACAKAHAFQAHAEAIAAQAGAAAEgBIALgGQAHgDADAAQADgBACACIAFAFQABACABADQAAAFgFADQgEAEgGAEQgGADgJADQgIACgHAAQgNAAgMgIgAAVgHQgBgKgGgGQgGgGgIABQgHAAgGAFQgGAGgCAKIAqAAIAAAAg");
	this.shape_40.setTransform(151.7,11.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA1BBQgDgDgBgHIgLhLIgBAAIgWBNQgEALgLAAQgLAAgDgLIgXhNIgLBLQgBAHgEADQgDADgHAAQgGAAgEgDQgEgEAAgGIABgEIARhoQABgFAFgFQAGgEAHAAQAHAAAFAEQAFAEACAGIAVBJIAAAAIAWhJQACgGAFgEQAFgEAHAAQAHAAAFAEQAGAFABAFIARBoIABAEQAAAGgEAEQgEADgGAAQgHAAgEgDg");
	this.shape_41.setTransform(138.6,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390.5,65);


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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sayap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,81);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(66.5,43,1,1,0,0,0,66.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,86);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(74,45,1,1,0,0,0,74,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-21,217.1,132);


// stage content:
(lib.rec_batik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(151.6,134.6,0.145,0.145,0,0,0,191.1,32.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,y:134.5,alpha:1},4).wait(10).to({regX:191.2,regY:32.8,scaleX:0.59,scaleY:0.59,y:134.6},2).to({regX:191.1,regY:32.7,scaleX:0.67,scaleY:0.67,y:134.5},2).to({regX:191.2,regY:32.8,scaleX:0.59,scaleY:0.59,y:134.6},2).wait(13).to({regX:191.1,regY:32.7,scaleX:0.67,scaleY:0.67,y:134.5},0).to({regX:191.2,regY:32.8,scaleX:0.59,scaleY:0.59,y:134.6},2).to({regX:191.1,regY:32.7,scaleX:0.67,scaleY:0.67,y:134.5},2).to({regX:191.2,regY:32.8,scaleX:0.59,scaleY:0.59,y:134.6},2).wait(12).to({regX:191.1,regY:32.7,scaleX:0.67,scaleY:0.67,y:134.5},0).to({regX:191.2,regY:32.8,scaleX:0.59,scaleY:0.59,y:134.6},2).to({regX:191.1,regY:32.7,scaleX:0.67,scaleY:0.67,y:134.5},2).to({regX:191.2,regY:32.8,scaleX:0.59,scaleY:0.59,y:134.6},2).wait(5).to({regX:191.3,scaleX:0.14,scaleY:0.14,alpha:0},4).wait(1));

	// Layer 10
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.8,119.5,0.32,0.32,0,0,0,195.2,22.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).to({scaleX:1.32,scaleY:1.32,x:151.9,alpha:1},5).wait(32).to({regX:195.4,scaleX:0.28,scaleY:0.28,alpha:0},5).to({_off:true},53).wait(16));

	// tangan
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.6,138,1,1,-45,0,0,82,82);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({x:153.5,y:92.8},4).to({x:169.1,y:144.8},2).to({x:203.6,y:109.6},3).to({x:218.8,y:130.4},3).to({x:237.2,y:121},2).to({x:248.4,y:135.8},2).to({x:263.6,y:122.6},3).to({x:274,y:145},2).wait(57).to({x:380.4,y:194},4).to({_off:true},1).wait(113));

	// tulisan belajar
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(156.5,173.1,0.36,0.36,0,0,0,77.5,45);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(37).to({regY:45.1,scaleX:1.91,scaleY:1.91,x:160.1,y:199.6,alpha:0},4).to({_off:true},1).wait(113));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_23 = new cjs.Graphics().p("AqdNvIAAvRIU7AAIAAPRg");
	var mask_graphics_24 = new cjs.Graphics().p("AqiNvIAAvRIVFAAIAAPRg");
	var mask_graphics_25 = new cjs.Graphics().p("AqnNvIAAvRIVPAAIAAPRg");
	var mask_graphics_26 = new cjs.Graphics().p("AqsNvIAAvRIVZAAIAAPRg");
	var mask_graphics_27 = new cjs.Graphics().p("AqxNvIAAvRIVjAAIAAPRg");
	var mask_graphics_28 = new cjs.Graphics().p("Aq1NvIAAvRIVrAAIAAPRg");
	var mask_graphics_29 = new cjs.Graphics().p("Aq6NvIAAvRIV1AAIAAPRg");
	var mask_graphics_30 = new cjs.Graphics().p("Aq/NvIAAvRIV/AAIAAPRg");
	var mask_graphics_31 = new cjs.Graphics().p("Aq4NvIAAvRIWIAAIAAPRg");
	var mask_graphics_32 = new cjs.Graphics().p("AqXNvIAAvRIWSAAIAAPRg");
	var mask_graphics_33 = new cjs.Graphics().p("Ap3NvIAAvRIWcAAIAAPRg");
	var mask_graphics_34 = new cjs.Graphics().p("ApWNvIAAvRIWmAAIAAPRg");
	var mask_graphics_35 = new cjs.Graphics().p("Ao1NvIAAvRIWwAAIAAPRg");
	var mask_graphics_36 = new cjs.Graphics().p("AoUNvIAAvRIW5AAIAAPRg");
	var mask_graphics_37 = new cjs.Graphics().p("AnzNvIAAvRIXDAAIAAPRg");
	var mask_graphics_38 = new cjs.Graphics().p("AnSNvIAAvRIXMAAIAAPRg");
	var mask_graphics_39 = new cjs.Graphics().p("AmxNvIAAvRIXWAAIAAPRg");
	var mask_graphics_40 = new cjs.Graphics().p("AmQNvIAAvRIXfAAIAAPRg");
	var mask_graphics_41 = new cjs.Graphics().p("AmzNvIAAvRIZDAAIAAPRg");
	var mask_graphics_61 = new cjs.Graphics().p("AmzNvIAAvRIZDAAIAAPRg");
	var mask_graphics_98 = new cjs.Graphics().p("AmzNvIAAvRIZDAAIAAPRg");
	var mask_graphics_99 = new cjs.Graphics().p("AsJO1IAAzoMAgLAAAIAATog");
	var mask_graphics_100 = new cjs.Graphics().p("AxfP7IAA3+MAnTAAAIAAX+g");
	var mask_graphics_101 = new cjs.Graphics().p("A21RBIAA8UMAubAAAIAAcUg");
	var mask_graphics_102 = new cjs.Graphics().p("A6xSGMAAAggqMA1jAAAMAAAAgqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_graphics_23,x:9.1,y:88}).wait(1).to({graphics:mask_graphics_24,x:17.1,y:88}).wait(1).to({graphics:mask_graphics_25,x:25.1,y:88}).wait(1).to({graphics:mask_graphics_26,x:33.1,y:88}).wait(1).to({graphics:mask_graphics_27,x:41.2,y:88}).wait(1).to({graphics:mask_graphics_28,x:49.2,y:88}).wait(1).to({graphics:mask_graphics_29,x:57.2,y:88}).wait(1).to({graphics:mask_graphics_30,x:65.2,y:88}).wait(1).to({graphics:mask_graphics_31,x:72.1,y:88}).wait(1).to({graphics:mask_graphics_32,x:76.3,y:88}).wait(1).to({graphics:mask_graphics_33,x:80.6,y:88}).wait(1).to({graphics:mask_graphics_34,x:84.9,y:88}).wait(1).to({graphics:mask_graphics_35,x:89.1,y:88}).wait(1).to({graphics:mask_graphics_36,x:93.4,y:88}).wait(1).to({graphics:mask_graphics_37,x:97.6,y:88}).wait(1).to({graphics:mask_graphics_38,x:101.9,y:88}).wait(1).to({graphics:mask_graphics_39,x:106.1,y:88}).wait(1).to({graphics:mask_graphics_40,x:110.4,y:88}).wait(1).to({graphics:mask_graphics_41,x:116.9,y:88}).wait(20).to({graphics:mask_graphics_61,x:116.9,y:88}).wait(37).to({graphics:mask_graphics_98,x:116.9,y:88}).wait(1).to({graphics:mask_graphics_99,x:128.3,y:95}).wait(1).to({graphics:mask_graphics_100,x:139.7,y:101.9}).wait(1).to({graphics:mask_graphics_101,x:151.1,y:108.9}).wait(1).to({graphics:mask_graphics_102,x:153.5,y:115.8}).wait(114));

	// tulisan batik
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.5,135.6,1.195,1.195,0,0,0,66.5,43);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).wait(35).to({y:121.2},3).wait(37).to({scaleX:2.28,scaleY:2.28,x:148.7,y:100.7,alpha:0},4).to({_off:true},1).wait(113));

	// bg batik
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.2,134.9,0.146,0.146,0,0,0,87.7,44.9);
	this.instance_5.alpha = 0;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:87.6,regY:44.8,scaleX:1,scaleY:1,x:150.1,y:134.8,alpha:1},7).wait(92).to({regX:87.5,scaleX:0.17,scaleY:0.17,y:134.9,alpha:0},5).to({_off:true},11).wait(101));

	// Layer 5
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(244.9,135.5,1.231,1.23,0,135,-45,43.6,47.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({skewX:0,skewY:-180,x:245.1,y:135.7,alpha:1},7,cjs.Ease.get(0.2)).wait(78).to({skewX:120,skewY:-60,x:245.2,y:135.6,alpha:0},4).to({_off:true},18).wait(101));

	// sayap
	this.instance_7 = new lib.Symbol3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(61.6,135.6,1.231,1.23,-135,0,0,47.9,48.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regX:48,rotation:0,x:61.7,y:135.5,alpha:1},7,cjs.Ease.get(0.2)).wait(78).to({x:61.6},0).to({regX:47.9,rotation:-135,y:135.4,alpha:0},4).to({_off:true},16).wait(101));

	// logo
	this.instance_8 = new lib.logoindonesia();
	this.instance_8.parent = this;
	this.instance_8.setTransform(193,9,0.46,0.46);

	this.instance_9 = new lib.logo_kaskuis();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).to({state:[{t:this.instance_9},{t:this.instance_8}]},215).wait(1));

	// bg
	this.instance_10 = new lib.bg_RB();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(216));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;