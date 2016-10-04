(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/FlashAICB.png", id:"FlashAICB"},
		{src:"images/FlashAICB_1.png", id:"FlashAICB_1"}
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



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,42);


(lib.FlashAICB = function() {
	this.initialize(img.FlashAICB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,96);


(lib.FlashAICB_1 = function() {
	this.initialize(img.FlashAICB_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,89);


(lib.traxlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,42);


(lib.selengkapnya = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA+IgHgYIglAAIgHAYIgdAAIAoh6IAdAAIAoB6gAgMAPIAZAAIgNgrIAAAAg");
	this.shape.setTransform(138,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNA+IAAgtIgphNIAeAAIAYA2IAAAAIAZg2IAeAAIgpBOIAAAsg");
	this.shape_1.setTransform(127.7,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWA+IgrhNIgBAAIAABNIgcAAIAAh6IAcAAIAsBNIAAgBIAAhMIAdAAIAAB6g");
	this.shape_2.setTransform(115.7,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA+IAAh6IAvAAQAXgBAMALQAOALAAATQAAASgOAKQgNALgWAAIgTAAIAAArgAgTgCIATAAQAKAAAFgEQAFgHAAgHQAAgHgFgGQgFgGgKAAIgTAAg");
	this.shape_3.setTransform(103.6,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaA+IgHgYIglAAIgHAYIgdAAIAoh6IAdAAIAoB6gAgLAPIAYAAIgNgrIAAAAg");
	this.shape_4.setTransform(91.8,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARA+IgagzIgNAAIAAAzIgdAAIAAh6IAdAAIAAAwIAKAAIAZgwIAkAAIgnA3IAqBDg");
	this.shape_5.setTransform(80.6,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAxQgPgOAAgWIAAgYQAAgXAPgOQANgOAVAAQAYAAAMALQAMALABATIAAABIgbAAQgBgKgFgFQgHgFgJAAQgHAAgHAIQgGAIAAAMIAAAZQAAANAGAHQAGAIAJAAIAMgBQAGgBACgCIAAgUIgUAAIAAgRIAwAAIAAAtQgFAGgNAHQgKAFgUAAQgVAAgOgOg");
	this.shape_6.setTransform(68.2,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWA+IgrhNIgBAAIAABNIgcAAIAAh6IAcAAIAsBNIAAgBIAAhMIAdAAIAAB6g");
	this.shape_7.setTransform(55.8,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqA+IAAh6IBVAAIAAAVIg4AAIAAAbIAvAAIAAAVIgvAAIAAAeIA3AAIAAAXg");
	this.shape_8.setTransform(44.6,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA+IAAh6IAdAAIAABjIA0AAIAAAXg");
	this.shape_9.setTransform(34.5,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqA+IAAh6IBVAAIAAAVIg4AAIAAAbIAvAAIAAAVIgvAAIAAAeIA4AAIAAAXg");
	this.shape_10.setTransform(24.3,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghA1QgPgLAAgUIABAAIAcAAQAAALAFAEQAGAFAKAAQAJAAAEgEQAFgDAAgGQAAgGgFgEQgDgEgMgEQgWgHgLgHQgLgJAAgPQAAgQANgKQANgJATAAQAVAAANAKQAOALgBARIAAAAIgcAAQAAgHgFgFQgGgFgIAAQgGAAgGAEQgFAEAAAGQAAAFAFAEIARAIQAUAGAMAHQALAJAAARQAAAQgNAJQgNAJgVAAQgTAAgQgKg");
	this.shape_11.setTransform(13.1,15.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2683C2").s().p("AqzCnQgeAAgWgVQgVgWAAgeIAAkEIWxAAQAeAAAWAVQAUAWABAeIAAC7QgBAegUAWQgWAVgeAAg");
	this.shape_12.setTransform(76.6,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#214D99").s().p("AqzCnQgeAAgWgVQgVgWAAgeIAAkEIWxAAQAeAAAWAVQAUAWABAeIAAC7QgBAegUAWQgWAVgeAAg");
	this.shape_13.setTransform(78.9,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.5,36.1);


(lib.kompaklogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7AA34").s().p("Ag5A8IARgmQAfAVAPAAQAHAAAFgEQAGgDAAgHQAAgIgXgGQgggJgLgZQgEgIAAgIQAAgUAUgLQARgIATAAQASAAAcAGIgMAjQgUgJgMAAQgHAAgFADQgFADAAAFQAAAFAHAGQALAGANAFQAOAGAIAEQAKAJAAAOQABAXgXATQgKAJgSAAQgXAAgqgPg");
	this.shape.setTransform(64.7,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AA34").s().p("AgFBGQgkgMgDg3IgEhFIAjgCIgCBPQAMASAGAAQAOAAAAg+IgBgmIAhABQACBdgNAdQgKAUgUAAQgGAAgHgCg");
	this.shape_1.setTransform(53.8,59.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7AA34").s().p("Ag1hMIAkACIgBApIAAAUIAcg8IAlAFIgrBEIAyAwIgkAWIgjg7QACAkAFAaIgiAEQgJhNAAhMg");
	this.shape_2.setTransform(43.8,59.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AA34").s().p("Ag5A8IARgmQAeAVAQAAQAHAAAFgEQAGgEAAgGQAAgIgXgGQgggJgMgZQgEgJAAgHQAAgUAVgLQARgIATAAQASAAAbAGIgLAjQgUgJgNAAQgGAAgFADQgFADAAAFQAAAFAHAGQAIAFAQAGQAPAGAGAEQAKAJABAOQABAYgXASQgKAJgTAAQgXAAgpgPg");
	this.shape_3.setTransform(32.5,59.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AA34").s().p("Ag4BEIApiNIAdAAIArCHIgjAJIgLgvIgXAAIgLAygAgHACIAMgBIgFgdg");
	this.shape_4.setTransform(21.2,59.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AA34").s().p("Ag0hMIAkACQgCAVAAAUIABAUIAcg8IAkAFIgqBEIAxAwIgjAWIgjg7QAAAfAHAfIgiAEQgLhNAChMg");
	this.shape_5.setTransform(10.7,59.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E89C0").s().p("AgnApIAMgaQAUAOALAAQAFAAADgCQAEgDAAgEQAAgGgQgEQgVgGgIgRQgDgGAAgFQAAgOAOgHQALgFANAAQAPAAARADIgIAZQgPgHgHAAIgIACQgDADAAADQAAAEAEAEQAFADAMAEQALAFAEABQAGAHABAJQAAAQgPAOQgHAFgNAAQgPAAgdgKg");
	this.shape_6.setTransform(66.6,44.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E89C0").s().p("AgmAvIAchhIATAAIAeBdIgYAGIgIggIgPAAIgIAigAgFABIAIgBIgDgSg");
	this.shape_7.setTransform(58.8,44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E89C0").s().p("AgGAxIgBhKIgiAFIgBgXIBVgIIAAAXIgeABIACBPg");
	this.shape_8.setTransform(50.8,45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E89C0").s().p("AgMAxIACgxIgCgxIAZgCIgEBng");
	this.shape_9.setTransform(45.2,44.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E89C0").s().p("AgLAAIAAAGQAAATADAVIgXAAIgBhaIAZABIARArQgCgKAAgYIAAgNIAXABQgBARAAASQAAAWADAlIgWAAg");
	this.shape_10.setTransform(39.9,45.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E89C0").s().p("AgDAvQgZgHgCgmIgDgvIAYgBIgBA2QAIAMAEAAQAJAAAAgqIAAgbIAXABQABA/gJAVQgHAOgNAAQgGgBgDgCg");
	this.shape_11.setTransform(32.9,45.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E89C0").s().p("AASAvIAAgyIgIAdIgUAAIgGggIgCAyIgYgBIAFhZIAbgBIAKApIALgnIAagBQAFArABAzg");
	this.shape_12.setTransform(25.1,45.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E89C0").s().p("AAAAzQgYAAgJgMQgKgNABgVQAAgSAKgSQAMgUAUAAQAUAAAKALQAHAIAFAYIACAPQAAARgJALQgLARgXAAIgBgBgAgMgNQgGAJAAAGQAAAJAFAHQAFAJAIAAQAGAAAHgJQAHgJAAgIQAAgIgIgJQgHgHgFAAQgGAAgGAKg");
	this.shape_13.setTransform(16.5,45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E89C0").s().p("Agkg0IAZACIAAAqIASgqIAZAEIgdAuIAiAhIgYAPIgYgoQABAXAEATIgXADQgHg3AAgyg");
	this.shape_14.setTransform(8.3,44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeBDQgdgOgDgrIgBgKQAAggAQgUQASgXAeAAIANABQAmAFAEAnIghAKQgGgWgPAAIgGACQgUAFgDAjIAAADQAAAeAWAJQAFADAFAAQAOAAAHgUIgagDIAGgWIA6AEQgFBAgeAGQgIACgLAAQgTAAgVgJg");
	this.shape_15.setTransform(64.9,28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAAIgBAJQAAAcAFAhIgjAAQgCg5AAgrIAAgmIAnABIAaBDQgDgVAAggIAAgTIAkABQgCAdAAAYQAAAoAFAyIgiABg");
	this.shape_16.setTransform(52.6,28.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgvBOIADicIBbABIABAqIg7gBIAAAXIAyAAIgCAfIgwgBIAAAVIA2AAIgBApg");
	this.shape_17.setTransform(42.3,28.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANBUIghgqIAAApIgngCIACilIALAAQAxAAAYAdQAJALAAAMQAAAYggAaIA4BDgAgUgGQAWgMAAgMQAAgOgWgEg");
	this.shape_18.setTransform(32.5,28.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag7BIIAqiVIAgAAIAtCOIglAKIgLgxIgZAAIgMAzgAgIACIANgBIgFgeg");
	this.shape_19.setTransform(20.6,28.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1hQQAdgGASABQAfAAAJAQQAEAIAAAIQAAATgWAVQAkANACAaQABAdhkAggAgNApQAagKgBgIQAAgJgdAAgAgXgyIABAWQAZgMgCgHQAAgGgHAAQgGABgLACg");
	this.shape_20.setTransform(9.4,28.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2hOIAlACIgBAqIAAAVIAdg9IAlAEIgrBGIAyAyIgkAVIgkg8QABAiAGAdIgjAFQgKhPABhOg");
	this.shape_21.setTransform(66.2,11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag5BGIApiQIAeAAIAtCJIglAJIgLgvIgXAAIgMAygAgHABIAMAAIgFgdg");
	this.shape_22.setTransform(54.8,10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgtBLIADiTQAQgEAPABQAoAAAOAeQADAKAAAGQAAAdg4AQIgCA9gAgIgQQAVgJAAgHQgBgIgTgFg");
	this.shape_23.setTransform(44.3,11.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBFIAAhKIgMAsIgeAAIgKgxIgDBMIgjgCIAHiFIApgCIAPA9IARg5IAmgCQAIBJAABEg");
	this.shape_24.setTransform(33.1,11.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAABMQgkAAgOgSQgOgTAAgfQABgeAPgZQASgdAeAAQAeAAAOAQQALANAHAiQADANAAAKQAAAagNARQgQAYgiAAIgCgBgAgTgUQgIAOAAAJQAAAMAHAMQAIAOALAAQAJAAAMgOQAKgNAAgMQAAgMgMgPQgKgJgIAAQgKAAgJAOg");
	this.shape_25.setTransform(20.5,11.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag2hOIAlACIgBAqIAAAVIAdg9IAlAEIgrBGIAyAyIgkAVIgkg8QACAmAGAZIgjAFQgKhOAAhPg");
	this.shape_26.setTransform(8.3,11);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AhDBYQgMgEgGgNQgFgMAGgMIAQglIAEgGIgGgLQgHgPAAgOQAAgmAlgSQAWgMAcAAQAYAAAbAGQANACAHANQAHAKgEAOIgMAjIgDAGQARARACAXQABAngiAcQgSAPgeABQgcAAgugRg");
	this.shape_27.setTransform(64.9,59.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgOBiQg3gSgFhLIgEhFQgBgMAIgKQAKgKALAAIAjgCQAIAAAHADQAGgGALAAIAhABQAMAAAJAJQAIAJAAAMQACBkgQAiQgRAmgoAAQgJAAgNgEg");
	this.shape_28.setTransform(54,59.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("Ag/BjQgJgHgBgLQgLhQAChNQAAgMAJgKQAIgIAOAAIAkACQAIABAGAEQAGgFAKACIAkAFQAQACAHAPQAHAOgJAOIgeAxIAhAeQALALgDAOQgBAPgNAHIgjAVQgNAJgPgHQgGAEgGABIgmAFQgLAAgIgIg");
	this.shape_29.setTransform(44,59.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AhDBYQgNgFgEgMQgGgMAGgMIAQglQACgDADgDIgHgLQgGgOAAgPQAAgmAkgSQAWgMAcAAQAYAAAbAGQAOADAGAMQAHAKgEAOIgMAjIgDAGQASARABAXQACAngjAcQgTAPgdABQgbAAgvgRg");
	this.shape_30.setTransform(32.6,59.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgcBnIghgEQgMgDgIgLQgHgMADgNIApiNQACgJAIgGQAIgHAKAAIAeAAQAKAAAIAHQAIAFADAJIArCHQAEALgHAMQgGAMgMADIgkAJQgLADgMgHIgGgFQgIANgQgBg");
	this.shape_31.setTransform(21.3,59.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("Ag/BjQgJgHgBgLQgLhOABhPQAAgMAKgKQAIgIAOAAIAkACQAIABAGAEQAGgFAKACIAkAFQAQACAHAPQAGAOgIAOIgeAxIAhAeQAKAKgCAPQgBAPgNAHIgjAVQgNAJgPgHQgGAFgGAAIgmAFQgLAAgIgIg");
	this.shape_32.setTransform(10.9,59.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgxBFQgNgEgEgMQgGgMAGgMIAMgbIgCgCQgGgNAAgLQAAggAfgQQASgIAUAAQAOAAAXAEQANACAHAMQAHAMgEANIgIAXQAKAOABAPQABAfgbAXQgPAMgYAAQgVAAghgMg");
	this.shape_33.setTransform(66.8,44.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgrBNQgOgDgGgLQgIgKAEgOIAchhQACgJAJgHQAIgGAKAAIAUAAQAKAAAHAGQAIAGADAJIAeBcQAEANgHALQgGALgMADIgZAHQgKADgMgGQgHAGgJAAg");
	this.shape_34.setTransform(59,44.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AALBSIgUgDQgMgBgHgJQgIgIAAgLIgBgqQgNABgKgIQgKgGgBgNIgBgXQgBgMAIgJQAIgKAMgBQA0gFAjgCQANgBAJAJQAKAJAAANIgBAXQgBAMgIAIQgIAHgMAAIAAAAIABA0QAAANgKAJQgIAIgMAAg");
	this.shape_35.setTransform(50.9,44.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgQBPQgLgCgIgJQgHgJABgMIABgvQAAgYgBgXQgBgNAIgJQAIgJANgBIAYgCQANgBAKAKQAJAIAAAOIgEBnQgBAOgJAIQgJAHgLAAg");
	this.shape_36.setTransform(45.4,44.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgBBKIgHABIgXAAQgMAAgJgIQgIgIgBgMIgBhCIAAgZQAAgNAJgJQAJgJANABIAbABQAEgEAJAAIAXAAQANACAJAIQAIAKgBANQgBAQAAAQQAAAVADAjQACANgJAJQgIAKgNABIgXABIgBAAQgHAAgFgEg");
	this.shape_37.setTransform(40,45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgMBMQgsgOgEg6IgDgvQAAgMAIgKQAIgJANgBIAYgCIAJABQAFgDAIAAIAXABQAMABAJAIQAIAJAAAMQABBIgMAYQgPAfggABQgIAAgKgEg");
	this.shape_38.setTransform(33,45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AAQBNQgLgBgGgIQgIAHgMgBIgXgBQgMgBgIgJQgIgJAAgMIAFhZQAAgMAIgIQAIgIAMgBIAbgBQAKAAAEADIAIgBIAagBQALAAAJAIQAJAHACAMQAFA5ABAoQAAANgKAJQgIAIgMAAg");
	this.shape_39.setTransform(25.2,45.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AAABRQgmAAgTgXQgQgVABggQABgdAOgWQAVgjAkAAQAiAAASAWQANAPAGAfQADANAAAHQAAAagOAUQgVAcgmAAg");
	this.shape_40.setTransform(16.7,45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AgeBTQgLAAgIgIQgJgHgBgLQgIg1ABg4QAAgNAKgIQAIgJAOAAIAZACIAJACQADgCAIABIAZADQAQADAHAOQAHAPgIANIgRAcIARAPQAKALgBAOQgDAPgMAHIgYAPQgLAGgMgDQgFADgDAAIgXADg");
	this.shape_41.setTransform(8.5,44.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgqBeQgvgVgEg+IAAgLQAAgrAWgcQAagiAuAAIAQABQAeAEARASQASATADAdQABAJgEAIQAMAJgBAOQgGBXg1ALQgNACgLAAQgaAAgagMg");
	this.shape_42.setTransform(65.1,28.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AAABhQgGADgHAAIgjAAQgMAAgJgIQgIgIgBgMQgCgvAAg3IAAgmQAAgNAJgIQAJgKANABIAnABIAGABQAGgGALAAIAkABQANAAAIAKQAJAJgBANQgCAWAAAdQAAArAFAsQABANgIAKQgIAJgOABIgkABQgLAAgFgGg");
	this.shape_43.setTransform(52.8,28.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AgwBsQgMAAgIgJQgJgJAAgMIADidQABgMAIgJQAJgIANAAIBbABQAMAAAJAJQAJAJAAAMIAAArQAAAMgJAJIgBAgIgBADQAGAIAAAJIgBApQAAAMgJAJQgJAIgMAAg");
	this.shape_44.setTransform(42.4,28.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AAMByQgJAAgHgGQgJAGgKgBIgngCQgMgBgIgJQgIgIAAgMIACilQABgMAIgIQAIgJAMAAIAMgBQA/AAAhAoQARATAAAXQAAAbgWAYIAnAuQAMAPgIASQgIARgTAAg");
	this.shape_45.setTransform(32.7,28);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AhABmQgNgDgHgLQgHgLADgNIAriVQACgJAIgHQAIgFAKAAIAgAAQAKAAAHAFQAIAGADAKIAtCNQAEANgGAKQgGAMgNADIglAJQgMAEgLgHQgEgDgDgEQgIAPgRAAg");
	this.shape_46.setTransform(20.8,28.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("Ag/BvQgMgIAAgPIgIinQAAgLAHgIQAGgIALgDQAegGAXgBQAxABARAgQAIAOAAAQQAAARgIAPQAVAUACAaQACAfglAXQgcASg4ASQgFACgFgBQgJAAgIgFg");
	this.shape_47.setTransform(9.6,28.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AhABlQgJgHgBgMQgLhSABhOQAAgNAKgIQAJgJANABIAlACQAIAAAGAEQAGgEAKABIAlAFQAQADAHAOQAHAPgJANIgfAzIAiAgQAKAKgBAPQgDAOgMAIIgkAVQgOAIgOgHQgGAGgGAAIgnAFQgLAAgIgIg");
	this.shape_48.setTransform(66.4,10.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#231F20").s().p("Ag+BkQgOgCgHgMQgHgLAEgNIApiQQADgKAIgGQAIgGAKAAIAeAAQAKAAAIAGQAIAFADAKIAsCJQAEANgHALQgGALgMADIglAJQgMAEgKgHIgHgHQgIAOgQAAg");
	this.shape_49.setTransform(55,10.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AguBqQgMgBgJgJQgIgJAAgMIADiTQAAgLAHgIQAHgIAKgCQAVgFAQAAQAiAAAXASQAQANAIATQAGANAAAPQAAAegEANQgHAXgaAKIgXAeQgBAMgIAIQgHAIgMAAg");
	this.shape_50.setTransform(44.4,11.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AAZBjQgKAAgHgHQgIgGAAgKQgCAGgGAGQgJAJgNgBIgjgCQgMgBgIgJQgIgJAAgNIAHiEQABgMAIgIQAIgIALgBIApgCQANgBAGAIQAHgEAHAAIAngBQALAAAJAIQAIAHACAMQAIBJAABGQABANgKAJQgIAJgMAAg");
	this.shape_51.setTransform(33.3,11.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AgBBqQgygBgXgdQgUgaAAgrQACgnATgfQAagrAvAAQArAAAYAaQARAUAIAqQADAQAAANQAAAjgSAYQgbAlgxAAg");
	this.shape_52.setTransform(20.6,11.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("AhABlQgJgHgBgMQgLhSABhOQAAgNAKgIQAJgJANABIAlACQAIAAAGAEQAGgEAKABIAlAFQAQADAHAOQAHAPgJANIgfAzIAiAgQAKAKgBAPQgDAOgMAIIgkAVQgOAIgOgHQgGAFgGABIgnAFQgLAAgIgIg");
	this.shape_53.setTransform(8.5,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.9,70);


(lib.kaskuslogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYA2QgXAAgJgGQgKgGAAgRIAAgIIAdAAQAEABAAAEQABAFAEACIAJABIAsAAIAGgCQADgCAAgFQABgIgKgBIg+gBQgTAAgHgMIgBgGIgCgMIABgJQAAgKAIgGQAFgHAJgBIAIgBIA4AAQAaAAAIAJQAHAGAAAQIAAAEIgcAAQgEAAgBgFQgBgGgOAAIgnAAQgDAAgDADQgDACAAAEIAAACQABADADACQACACADAAIBAABQAXACAEASIABAJIAAAJQgCALgGAGQgHAHgIABIgIABg");
	this.shape.setTransform(81.3,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA2QgXAAgJgGQgKgGAAgRIAAgIIAdAAQAEABAAAEQABAFAEACIAJABIAsAAIAGgCQADgCAAgFQABgIgKgBIg+gBQgUAAgGgMIgCgIIAAgTQAAgKAIgGQAFgHAJgBIBAgBQAaAAAIAJQAHAGAAAQIAAAEIgcAAQgEAAgBgFQgBgGgOAAIgnAAQgDAAgDADQgDACAAAEIAAACQABADADACIAFACIBAABQAXACAEASIABAJIAAAJQgCALgGAGQgHAHgIABIgIABg");
	this.shape_1.setTransform(38.5,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoA1IgDgBIgkglQgCgDgEAAIgLAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIAAAhQAAAFgFAAIgbAAIAAgpIgSAAQgFAAgEgDQgDgEAAgFIAAgLIAeAAIAAgpIAbAAQAFAAAAAFIAAAiQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAIALAAQAEAAABgDIAkgkIADgCIAqAAIg0AyIgBACIABADIA0Ayg");
	this.shape_2.setTransform(8.2,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZA1IgEgBIgiglQgDgDgFAAIgKAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAhQgBAFgEAAIgbAAIAAhpIAbAAQAEAAABAFIAAAiQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIALAAQAEAAADgDIAhgkIADgCIArAAIg0AyQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAABIA0Ayg");
	this.shape_3.setTransform(52.9,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA2IAAgBQgMAAgJgJQgIgJgBgMIAAhLIAdAAIAEABIABADIAAA+QAAAFAEADQADAEAFAAIApAAQAFAAAEgEQADgDAAgFIAAg+IABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAdAAIAABLQgBANgJAJQgJAIgMABg");
	this.shape_4.setTransform(66.7,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsA1IgCgBIgCgCIgIgOQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIg8AAIgCACIgHAOIgCACIgCABIggAAIA1hmQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAIAlAAQADAAABADIA1BmgAAVAMIgVgoIgUAoIApAAg");
	this.shape_5.setTransform(24,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,10.9);


(lib.SETIAPJUMAT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E89C0").s().p("AgOBAIAAhoIghAAIAAgXIBfAAIAAAXIgiAAIAABog");
	this.shape.setTransform(117.8,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E89C0").s().p("AAbBAIgHgZIgnAAIgHAZIgeAAIAqh/IAeAAIApB/gAANAQIgNgsIAAAAIgMAsIAZAAg");
	this.shape_1.setTransform(107.1,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E89C0").s().p("AAmBAIAAggIADg4IgBgBIgfBZIgSAAIgehYIgBAAIADA4IAAAgIgeAAIAAh/IAnAAIAcBYIAAAAIAchYIAoAAIAAB/g");
	this.shape_2.setTransform(93.5,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E89C0").s().p("AglA1QgOgNAAgVIAAhTIAdAAIAABTQAAALAHAGQAGAGAJgBQALABAGgGQAGgGAAgLIAAhTIAdAAIAABTQAAAVgOANQgPALgXABQgWgBgPgLg");
	this.shape_3.setTransform(79.5,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E89C0").s().p("AgfA3QgMgKAAgVIAAAAIAdAAQAAAKAFAEQAEADAFAAQAGAAAEgEQAFgGAAgJIAAhWIAdAAIAABWQAAAUgNALQgMAMgTAAQgTAAgMgKg");
	this.shape_4.setTransform(67.8,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E89C0").s().p("AgxBAIAAh/IAyAAQAWAAAOAMQANAMAAASQAAAUgNAJQgOAMgWAAIgUAAIAAAsgAgTgBIAUAAQAJAAAFgFQAFgGAAgIQAAgIgFgGQgFgFgJgBIgUAAg");
	this.shape_5.setTransform(54.5,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E89C0").s().p("AAbBAIgHgZIgnAAIgHAZIgeAAIAqh/IAeAAIApB/gAANAQIgNgsIAAAAIgMAsIAZAAg");
	this.shape_6.setTransform(42.8,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E89C0").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_7.setTransform(34.3,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E89C0").s().p("AgOBAIAAhoIghAAIAAgXIBfAAIAAAXIgiAAIAABog");
	this.shape_8.setTransform(26.7,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E89C0").s().p("AgrBAIAAh/IBXAAIAAAXIg5AAIAAAcIAwAAIAAAVIgwAAIAAAfIA5AAIAAAYg");
	this.shape_9.setTransform(16.8,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E89C0").s().p("AghA3QgQgMAAgUIAAgBIAdAAQAAAMAGAEQAGAFAKAAQAKAAAEgEQAFgEAAgFQAAgHgFgEQgEgEgMgDQgWgJgMgGQgLgJAAgRQAAgPANgLQAOgJAUgBQAVABAOAKQANAMAAARIAAABIgdAAQAAgJgFgEQgGgFgJAAQgHAAgFAEQgFAEAAAGQAAAGAFADQAFADANAFQAVAHALAHQALAKAAARQAAARgNAJQgNAKgWAAQgTgBgQgKg");
	this.shape_10.setTransform(5.7,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-5.4,136.5,27.8);


(lib.kaskuscoid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgXAsQgIgLAAgPIAAgCQAAgQAIgKQAIgMANAAQAEAAAFADQAFACADAFIAAgoIARAAIAABoIgOAAIgCgJQgDAFgFADQgFACgFAAQgNABgIgKgAgKAAQgEAEAAAMIAAACQAAAKAEAGQAEAGAGAAQAGAAADgDQAEgCACgEIAAgfQgCgDgEgDQgDgCgFAAQgHAAgEAIg");
	this.shape.setTransform(75.3,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgHA1IAAhIIAPAAIAABIgAgHglIAAgPIAPAAIAAAPg");
	this.shape_1.setTransform(70,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_2.setTransform(66.4,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgYAbQgIgKgBgRIAAAAQABgQAIgKQAKgLAOAAQAPAAAKALQAJAKAAAQIAAAAQAAARgJAKQgKALgPAAQgOAAgKgLgAgLgRQgFAIAAAJIAAAAQAAALAFAHQADAGAIABQAIgBAFgGQAEgHAAgLIAAAAQAAgKgEgHQgFgGgIgBQgHABgEAGg");
	this.shape_3.setTransform(60.9,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgVAbQgJgKAAgRIAAAAQAAgQAJgKQAIgLAPAAQANAAAIAIQAIAIAAALIAAABIgPAAQAAgGgEgEQgEgEgGgBQgIABgEAGQgEAHAAAKIAAAAQAAALAEAHQAEAGAIABQAGgBAEgDQAEgDAAgGIAPAAIAAABQAAAKgIAIQgJAHgMAAQgPAAgIgLg");
	this.shape_4.setTransform(53.6,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgHAHIAAgNIAPAAIAAANg");
	this.shape_5.setTransform(48.1,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgVAfQgIgIAAgJIAAgBIAQAAQAAAHAFADQAEACAEAAQAHABADgDQAEgDAAgEQAAgDgEgDQgDgCgHgCQgNgDgHgEQgHgEAAgKQAAgIAIgHQAIgHALAAQANAAAIAHQAIAHAAAKIAAAAIgQAAQAAgFgEgDQgDgEgGAAQgEAAgDAEQgEACAAAEQAAAEADACQADADAHABQAOADAHADQAHAFAAAJQAAAKgIAHQgJAGgNAAQgMAAgJgHg");
	this.shape_6.setTransform(42.8,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgXAeQgGgIgBgQIAAgqIARAAIAAAqQAAAKADAEQADAEAGAAQAFAAADgCQAEgDADgEIAAgzIARAAIAABIIgPAAIgBgLQgEAGgFADQgGADgEAAQgMAAgHgHg");
	this.shape_7.setTransform(35.5,8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AANA1IgUghIgHAAIAAAhIgRAAIAAhpIARAAIAAA7IAGAAIARgaIAUAAIgZAfIAcApg");
	this.shape_8.setTransform(28.7,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgVAfQgIgIAAgJIAAgBIAQAAQAAAHAFADQAEACAEAAQAHABADgDQAEgDAAgEQAAgDgEgDQgDgCgHgCQgNgDgHgEQgHgEAAgKQAAgIAIgHQAIgHALAAQANAAAIAHQAIAHAAAKIAAAAIgQAAQAAgFgEgDQgDgEgGAAQgEAAgDAEQgEACAAAEQAAAEADACQADADAHABQAOADAHADQAHAFAAAJQAAAKgIAHQgJAGgNAAQgMAAgJgHg");
	this.shape_9.setTransform(21.1,8.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgYAgQgHgGAAgLQAAgKAJgFQAIgFAOAAIANAAIAAgGQAAgHgEgCQgDgEgGAAQgEAAgEADQgDACAAAFIgQAAIAAgBQAAgIAIgHQAIgHALAAQANAAAIAHQAIAGAAANIAAAeIABAJIACAIIgRAAIgBgFIgBgGQgEAGgFADQgEAEgHAAQgLAAgGgGgAgKAHQgEAEAAAEQAAAEADADQADACAFABQAEAAAFgDQAFgEACgDIAAgLIgNAAQgGgBgEAEg");
	this.shape_10.setTransform(13.9,8.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AANA1IgUghIgHAAIAAAhIgRAAIAAhpIARAAIAAA7IAHAAIAQgaIAUAAIgZAfIAcApg");
	this.shape_11.setTransform(7.3,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.6,83.2,22.5);


(lib.dengarkan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgIBDQgEgDAAgIIAAhGQAAgIAEgDQADgFAFAAQACAAAFACQAEADAAADIACAIIAABGIgCAJQAAACgEADQgFACgCAAQgFAAgDgFgAgJgtQgFgFAAgGQAAgGAFgFQAEgEAFAAQAEAAADADQADABADAEQACACAAAFQAAAGgFAGQgEAEgGAAQgFAAgEgFg");
	this.shape.setTransform(181.3,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgaBDQgJgGgHgNQgFgNAAgNQAAgOAFgKQAFgMAKgIQAKgIAOAAIAHABIAJAEIAIAEIAAglQAAgHAEgDQAEgFAGAAQAEAAADACIAFAFQABAEAAAEIAABzQAAAFgBAEIgFAFQgEACgDAAQgLAAgDgMQgEAHgHACQgGAEgGAAQgNAAgLgHgAgKgBQgFADgCAGQgDAFAAAJIACAJQAAAFAEAEQACAEAEADQAFACADAAQAHAAAEgEQAGgEACgHQACgGAAgHQAAgMgGgIQgFgGgKAAQgFAAgFAEg");
	this.shape_1.setTransform(173.5,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AggApQgMgLAAgSIAAgvQAAgIAEgDQAEgFAGAAIAHACQAEADABACQACAEAAAFIAAAuQAAAIAFAGQAFAEAGAAQAEAAAEgCQAEgCADgEQACgEAAgGIAAguQAAgIAEgDQAEgFAGAAQADAAAEACQAEADABACIACAJIAAAvQAAAMgGAJQgFAKgKAEQgKAFgOAAQgVAAgLgLg");
	this.shape_2.setTransform(157.9,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAxAvQgEgDAAgIIAAgtQAAgGgCgEQgBgEgEgCQgEgDgEAAQgIAAgFAFQgDAFAAAJIAAAtIgCAJQgCACgEADQgDACgDAAQgEAAgFgFQgDgDAAgIIAAgtQAAgEgCgGQgDgEgDgCQgDgDgFAAQgGAAgDADQgFADgBADQgCAEAAAGIAAAtQABAFgCAEIgFAFQgEACgDAAQgGAAgEgFQgEgDAAgIIAAhGQAAgHAEgEQAEgFAGAAQAFAAAEADQACACABAFQALgLAPAAQASAAAIAOQAGgGAIgEQAJgEAGAAQAMAAAIAFQAIAEAFAIQAFAIAAAMIAAAyQAAAFgCAEQgCADgDACQgEACgDAAQgGAAgEgFg");
	this.shape_3.setTransform(144.5,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgKA+QgEgEAAgHIAAg9IgGAAQgFAAgDgEQgEgDAAgFQAAgGAEgDQADgDAFAAIAGAAIAAgRQAAgFAEgFQAEgFAGAAQACAAADACQAEACABADQACAEAAAEIAAARIAIAAQAFAAAEADQAEACAAAHQAAAFgEAEQgDADgGAAIgIAAIAAA9QAAAFgCADQgBADgEADIgFABQgGABgEgFg");
	this.shape_4.setTransform(133.7,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgJBDQgDgDAAgIIAAhGQAAgHADgEQAEgFAFAAQACAAAEACIAGAGIABAIIAABGQAAAFgBAEIgGAFQgEACgCAAQgFAAgEgFgAgJgtQgFgFAAgGQAAgFAFgGQAFgEAEAAQADAAAEADQAEABACAEQACAEAAADQAAAGgFAGQgEAEgGAAQgFAAgEgFg");
	this.shape_5.setTransform(128.6,27.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgZAvQgEgDABgIIAAhJQAAgGADgEQAFgDAFAAQAOAAAAALIAAAAQADgHAEgCQAEgCAHAAQAFAAAEADQADAEAAAHQAAAFgCABIgFAEIgIAEQgKAEgDADQgDAEABAHIAAAoQAAAFgCADQgBADgEADQgEABgDAAQgGABgEgFg");
	this.shape_6.setTransform(123.9,29.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgYAuQgMgIgFgMQgHgMAAgOQABgJADgJQADgJAHgJQAGgGAJgFQALgFAIABQAKgBAJAFQAJAFAHAGQAGAIAEAJQADAKABAJQgBALgDAJQgEALgGAGQgGAHgJAFQgLADgJAAQgNAAgLgGgAgLgWQgEAEgDAGQgCAHAAAFQAAAGACAHQADAHAEADQAGAEAFABQAGgBAGgEQAEgDADgHQACgFAAgIQAAgHgCgFQgDgGgEgEQgGgFgGAAQgFAAgGAFg");
	this.shape_7.setTransform(114.9,29.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgIAxQgDgDgCgGIgchFIgBgIQAAgHADgDQAGgDAEAAQAJAAAEAKIAQA0IARg0QAEgKAJAAQAEgBAFAEQAEADABAHIgCAIIgcBFQgCAFgDAEQgDACgGAAQgFAAgDgCg");
	this.shape_8.setTransform(105.2,29.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgZAuQgLgIgFgLQgGgMAAgPQAAgNAGgMQAFgLALgJQALgGAMAAQAGAAAHADQAHADAEAGQABgFADgDQAFgEAEABQAJAAACAEQACAFAAAJIAABBQAAAJgCAFQgCAEgJAAQgFAAgDgCQgDgEgCgFQgLAMgNAAQgNAAgKgGgAgKgWQgFAEgCAGQgDAFAAAHQAAAIADAFQACAHAFADQAFAEAFABQAKAAAFgJQAGgIAAgLQAAgFgCgHQgCgGgGgEQgEgFgHAAQgFAAgFAFg");
	this.shape_9.setTransform(95.1,29.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgLBFQgDgDAAgIIAAg9IgHAAQgFAAgDgEQgEgDAAgFQAAgFAEgEQADgDAFAAIAHAAIAAgOQAAgPAIgIQAGgIAMAAQAIAAAGACQAFADAAAHQAAAMgLgBQgEAAgDACQgCACAAAHIAAALIAJAAQAOAAAAAMQAAAMgOAAIgJAAIAAA9QAAAHgEAEQgDAFgFgBQgGABgEgFg");
	this.shape_10.setTransform(87.2,27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgQAyQgIgDgHgFQgGgFAAgGQAAgEADgEQADgEAGAAIAGABIAHAEQADACAEABIAGABQAFAAADgCQADgCAAgDQAAgFgIgDIgPgHQgKgEgGgEQgHgHAAgKQAAgKAFgHQAFgIAIgDQAJgFAIAAQAJAAAHADQAIACAFAEQAGAFAAAGQAAAFgEADQgDAFgFAAIgRgIIgHgBQgDAAgCACQgCACAAAEQAAAEAHAEIAQAHQAIAEAIAEQAGAIAAAJQAAAKgFAGQgEAIgKAEQgIAEgLAAQgHAAgJgCg");
	this.shape_11.setTransform(179.4,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgZAtQgLgGgFgNQgHgMABgOQgBgNAHgNQAFgMALgHQALgGAMgBQAGAAAHAEQAGACAFAHQAAgEAEgEQAEgDAFgBQAJABACAEQACAGABAHIAABCQgBAIgCAFQgCAFgJAAQgFAAgEgDQgDgCgBgGQgKANgOgBQgMABgLgIgAgKgWQgFAEgDAGQgCAIAAAEQAAAGACAHQADAGAFAFQAEADAGAAQAKAAAFgIQAGgJAAgKQAAgEgDgIQgCgFgEgFQgGgFgGAAQgFAAgFAFg");
	this.shape_12.setTransform(169.7,9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgKA+QgEgEAAgGIAAg+IgGAAQgFAAgEgDQgDgDAAgGQAAgFAEgEQADgDAFAAIAGAAIAAgQQAAgIAEgDQAEgFAGABQACAAADACQADABACAEQACACAAAGIAAAQIAHAAQAGAAAEADQAEADAAAGQAAAGgEADQgEADgGAAIgHAAIAAA+QAAAEgCAEQgCADgDABQgDACgCAAQgFAAgFgEg");
	this.shape_13.setTransform(161.7,8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgIBEQgEgFAAgGIAAhHQAAgHAEgEQAEgFAEAAQAEAAADACQACABADAFQABADAAAFIAABHQAAAEgBAEIgFAFQgEACgDAAQgEAAgEgEgAgJgtQgFgEAAgHQAAgGAFgEQAEgFAFAAQAEAAADACIAGAGQACADAAAEQAAAHgFAEQgFAFgFAAQgEAAgFgFg");
	this.shape_14.setTransform(156.6,7.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AAVAwQgEgEAAgHIAAguQAAgJgFgFQgFgFgHAAQgEAAgEADQgEACgCAEQgCAEAAAGIAAAuQAAAEgCAEQgCADgDACQgDACgEAAQgGAAgEgEQgEgFAAgGIAAhHQAAgHAEgEQAEgFAGAAQAFAAAEADQADADABAEQAHgLARAAQALAAAIAFQAJAEAFAIQAFAJAAALIAAAzQAAAEgCAEQgCAEgDABQgDACgEAAQgGAAgEgEg");
	this.shape_15.setTransform(149.2,9.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AggApQgMgKAAgUIAAguQAAgHAEgFQAEgEAGAAQAFAAACACQADABACAFQACACAAAGIAAAuQAAAJAFAEQAFAFAGAAQAFAAADgCQAEgCADgEQACgFAAgFIAAguQAAgHAEgFQAEgEAGAAQAEAAADACQADABACAFQACACAAAGIAAAuQAAAMgGAKQgFAJgKAFQgLAFgNAAQgTAAgNgLg");
	this.shape_16.setTransform(138.6,9.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AAxAwQgEgFAAgGIAAguQAAgGgCgEQgBgDgEgEQgDgCgGAAQgIAAgDAFQgFAGAAAIIAAAuQAAAEgCAEQgCADgCACQgEACgDAAQgEAAgEgEQgEgFAAgGIAAguQAAgGgCgEQgBgDgFgEQgDgCgFAAQgGAAgDACQgEADgCAEQgBAEAAAGIAAAuQAAAEgCAEQgCAEgDABQgDACgEAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQAEgFAGAAQAFAAADADQAEADABAFQAJgMAQAAQARAAAJAOQAEgFAKgFQAHgEAIAAQALAAAJAEQAIAEAFAJQAFAJAAALIAAAzQAAAEgCAEIgFAFQgCACgFAAQgGAAgEgEg");
	this.shape_17.setTransform(125.2,9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgYAtQgLgGgHgNQgGgMAAgOQAAgKAEgJQADgJAHgIQAGgGAKgFQAJgFAJAAQAKAAAJAFQAJAEAHAHQAHAJADAIQAEAKAAAJQAAAJgEALQgDAKgHAGQgHAJgJADQgJAEgKAAQgNAAgLgHgAgKgWQgFAEgDAGQgCAIAAAEQAAAGACAHQADAGAFAFQAEADAGAAQAHAAAEgDQAGgFACgGQACgHAAgGQAAgEgCgIQgCgGgGgEQgFgFgGAAQgFAAgFAFg");
	this.shape_18.setTransform(111.8,9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AAYBIIgHgGIgfgqIAAAiIgDAIQgBADgDABQgDACgEAAQgGAAgEgEQgEgEAAgGIAAh0QAAgHAEgEQAEgEAGAAQAEAAADACQADACABADIADAIIAAA+IAcgbQAFgGAHAAQAFAAADAEQAEADAAAFQAAAGgGAGIgZATIAhAlQADAFAAAFQAAAFgDAEQgFAEgEAAIgHgCg");
	this.shape_19.setTransform(102.2,7.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AAVAwQgEgFAAgGIAAguQAAgJgEgFQgFgFgIAAQgFAAgDADQgEACgCAEQgCAEAAAGIAAAuIgCAIQgBADgEACQgDACgEAAQgGAAgEgEQgDgEAAgHIAAhHQAAgIADgDQAEgFAGAAQAFAAADADQADACABAFQAJgLAQAAQALAAAJAFQAIAEAFAIQAFAJAAALIAAAzQAAAEgCAEIgFAFQgDACgEAAQgGAAgEgEg");
	this.shape_20.setTransform(86.6,9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgZAtQgKgGgHgNQgFgMgBgOQABgNAFgNQAHgMAKgHQALgGAMgBQAGAAAGAEQAHADAFAGQABgEAEgEQADgDAFgBQAJABACAEQACAGAAAHIAABCQAAAIgCAFQgCAFgJAAQgFAAgDgDQgDgCgCgGQgMANgMgBQgNABgKgIgAgKgWQgFAEgCAGQgDAIAAAEQAAAGADAHQACAGAFAFQAEADAGAAQAKAAAGgIQAFgJAAgKQAAgEgDgIQgCgGgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_21.setTransform(75.7,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AAYBIIgHgGIgfgqIAAAiIgCAIQgCADgEABQgCACgFAAQgFAAgFgEQgDgEAAgGIAAh0QAAgHADgEQAFgEAFAAQAFAAACACQAEACACADIACAIIAAA+IAbgbQAHgGAGAAQAFAAADAEQADADABAFQgBAGgFAGIgYATIAgAlQADAFAAAFQAAAFgEAEQgEAEgFAAIgGgCg");
	this.shape_22.setTransform(66,7.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgZAvQgEgFAAgGIAAhIQAAgHAFgEQADgDAGAAQAOAAAAALIAAAAQACgFAFgEQAFgCAFAAQAFAAAFAEQAEAEAAAGQAAAEgCADIgGADIgJAEQgHADgFAEQgCAEAAAHIAAAoQAAAFgCADQgCAEgDABQgDACgEAAQgGAAgEgEg");
	this.shape_23.setTransform(58.3,9.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgZAtQgKgGgHgNQgFgMAAgOQAAgNAFgNQAHgMAKgHQALgGAMgBQAGAAAGAEQAHADAFAGQABgEADgEQAEgDAFgBQAJABACAEQADAGAAAHIAABCQAAAIgDAFQgCAFgJAAQgGAAgDgDQgDgCgBgGQgLANgNgBQgMABgLgIgAgKgWQgFAEgDAGQgCAIAAAEQAAAGACAHQADAGAFAFQAEADAGAAQAJAAAHgIQAFgJAAgKQAAgEgDgIQgBgFgGgFQgFgFgGAAQgFAAgFAFg");
	this.shape_24.setTransform(48.9,9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgUBGQgLgDgHgEQgIgFAAgGQAAgFAEgDQAEgFADAAQAEAAAIAEIALADQAFACAHAAQAEAAAGgCQAFgDADgFQADgFAAgGIAAgHIgBAAQgJANgQAAQgKAAgJgFQgHgDgGgIQgGgIgCgJQgCgGAAgMQAAgLADgIQADgKAGgIQAGgHAIgFQAJgEAKAAQADAAAEABIAJAEQAFAEACADQADgLAKAAQAFAAADACQADABABAFQACACAAAGIAABMQAAARgGAKQgHAMgMAFQgMAGgOAAQgFAAgMgCgAgKgqQgFAFgDAFQgCAHAAAHQAAAHACAGQADAGAFADQAEADAGABQAJAAAGgIQAGgGAAgLQAAgJgDgFQgCgGgFgFQgFgEgGAAQgFAAgFAEg");
	this.shape_25.setTransform(37.9,11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AAVAwQgEgFAAgGIAAguQAAgJgFgFQgEgFgIAAQgFAAgDADQgFACgBAEQgCAEAAAGIAAAuIgCAIQgCADgDACQgCACgFAAQgGAAgEgEQgDgEgBgHIAAhHQABgIADgDQAEgFAGAAQAFAAAEADQACACABAFQAIgLARAAQALAAAIAFQAJAEAFAIQAFAJgBALIAAAzQABAEgCAEIgFAFQgCACgFAAQgGAAgEgEg");
	this.shape_26.setTransform(27.4,9.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgXAtQgLgGgHgNQgHgNAAgNQAAgIAEgLQAEgKAGgHQAHgHAJgEQAKgFAIAAQAKAAAKAFQAJAFAGAGQAHAJADAIQAEAIAAAKQAAAKgMgBIg5AAQACALAHAFQAIAEAHAAQAGAAAFgCIALgFQAGgDADgBQAEABACABIAEAFQACACAAADQAAADgEAFQgEAFgHADIgPAGIgPABQgNABgMgIgAgNgXQgGAFgBAKIApAAQAAgJgGgGQgGgFgJAAQgIAAgFAFg");
	this.shape_27.setTransform(16.9,9.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgoBDQgEAAgDgBIgGgFQgCgCAAgGIAAhpQAAgGAEgEQAFgEAFAAIAgAAQAPAAALAFQANAEAIAKQAKAJAEANQAEANAAANQAAAPgEAMQgEALgKAKQgHAIgOAGQgMAEgMAAgAgbApIATAAQAMAAAGgFQAIgFAFgKQADgJAAgMQAAgJgDgLQgEgJgJgGQgJgFgKAAIgSAAg");
	this.shape_28.setTransform(5.7,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.3,34.5);


(lib.announcer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,96);


(lib._1920 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgkAwIAAhfIAhAAQAQAAAKAHQAKAGAAAOQAAAHgDAFQgEAGgGACQAIAAAFAGQAEAGAAAHQAAAOgKAIQgJAHgSAAgAgNAfIANAAQAHgBAEgDQADgCAAgGQAAgHgDgDQgDgCgHAAIgOAAgAgNgHIALAAQAGAAADgCQAEgEAAgEQAAgIgEgCQgEgCgGAAIgKAAg");
	this.shape.setTransform(154.5,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgKAwIAAhfIAVAAIAABfg");
	this.shape_1.setTransform(148.3,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAQAwIgQg6IAAAAIgPA6IgVAAIgWhfIAWAAIAMA+IABAAIARg+IANAAIASA+IANg+IAVAAIgWBfg");
	this.shape_2.setTransform(140.5,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BAIgDgNIgEANIgvAAIgeh/IA4AAIACAIIACgIIApAAIACAIIACgIIBuAAQAYAAANAJQASAMAAAWQAAAKgFAIIABAAQAHAJAAAMQAAAXgQAMQgOAKgXAAg");
	this.shape_3.setTransform(146.3,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgmA+QgOgPAAgfIAAgfQAAgfAOgQQAPgPAXgBQAYABAPAPQAOAQAAAfIAAAfQAAAfgOAPQgPAQgYABQgXgBgPgQgAgMgrQgFAJABARIAAAjQgBASAFAIQAEAHAIAAQAIAAAFgHQAFgIAAgSIAAgjQAAgRgFgJQgFgHgIAAQgIAAgEAHg");
	this.shape_4.setTransform(122.1,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AglA+QgPgPAAgfIAAgfQAAgfAOgQQAPgPAXgBQAYABAOAPQAPAQAAAfIAAAfQAAAfgOAPQgPAQgYABQgXgBgOgQgAgMgrQgEAJAAARIAAAjQAAASAEAIQAFAHAHAAQAIAAAFgHQAEgIAAgSIAAgjQAAgRgEgJQgFgHgIAAQgHAAgFAHg");
	this.shape_5.setTransform(110,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgQAOIAAgbIAhAAIAAAbg");
	this.shape_6.setTransform(100.9,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgmA+QgOgPAAgfIAAgfQAAgfAOgQQAPgPAXgBQAYABAPAPQAOAQAAAfIAAAfQAAAfgOAPQgPAQgYABQgXgBgPgQgAgMgrQgFAJAAARIAAAjQAAASAFAIQAGAHAGAAQAJAAAEgHQAFgIgBgSIAAgjQABgRgFgJQgEgHgJAAQgHAAgFAHg");
	this.shape_7.setTransform(91.9,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgyBNIAAgXIAwg0QAHgHAGgKQAEgIAAgGQAAgJgEgGQgFgFgHAAQgIAAgEAHQgGAIAAAJIgiAAIgBAAQAAgWAPgOQAOgPAYAAQAXAAAPAMQAOANgBAVQAAAPgHALQgJAMgTATIgSAWIAAABIA6AAIAAAbg");
	this.shape_8.setTransform(79.7,9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgeANIAAgZIA9AAIAAAZg");
	this.shape_9.setTransform(64.1,10.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AglA+QgPgPAAgfIAAgfQAAgfAPgQQAOgPAXgBQAYABAPAPQAOAQAAAfIAAAfQAAAfgOAPQgPAQgYABQgXgBgOgQgAgMgrQgFAJAAARIAAAjQAAASAFAIQAFAHAHAAQAJAAAEgHQAFgIgBgSIAAgjQABgRgFgJQgFgHgIAAQgHAAgFAHg");
	this.shape_10.setTransform(48.6,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AglA+QgPgPAAgfIAAgfQAAgfAOgQQAPgPAXgBQAYABAOAPQAPAQAAAfIAAAfQAAAfgOAPQgPAQgYABQgXgBgOgQgAgMgrQgEAJAAARIAAAjQAAASAEAIQAFAHAHAAQAIAAAFgHQAEgIAAgSIAAgjQAAgRgEgJQgFgHgIAAQgHAAgFAHg");
	this.shape_11.setTransform(36.5,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgQAOIAAgbIAhAAIAAAbg");
	this.shape_12.setTransform(27.3,15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgWBNQgIgCgIgDIAEgaIAOAEIAPABQAJAAAHgHQAGgJABgMIAAgHQgHAGgGADQgFAEgHgBQgVAAgMgOQgMgOAAgXQAAgWAPgRQAPgPAWgBQAXABAPAQQAPARAAAdIAAAjQAAAbgRAPQgSAQgXABQgJAAgIgCgAgMgqQgEAJAAAKQAAAOAEAHQAEAEAIAAQAFAAAFgCQAFAAADgEIAAgPQgBgPgFgIQgFgIgHAAQgGAAgGAIg");
	this.shape_13.setTransform(18.3,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAABMIAAhzIghAAIAAgZIBDgLIAACXg");
	this.shape_14.setTransform(5,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AChBJQgFgFgEgHIgJAMQgTAWggAAQggAAgUgWIgFgHIAAAaIhDAAIAAgYIgFAFQgUAWgfAAQgfAAgTgUIAAARIiMAAIAAguIA1g2IABgBIg0AAIgFgPIAAgCQAAgdATgTQATgUAfAAQAgAAASAQQAIAIAGAKQAEgHAFgGQATgVAgAAQAgAAATAVQATAVAAAlIgBAsIApAAIAAgsQAAglASgVQAUgVAgAAQAfAAAUAVQAFAGAEAHQAEgHAFgGQATgVAgAAQAgAAAUAVQASAVAAAlIAAAfQAAAmgSATQgUAWggAAQggAAgTgWgAidAgQgBgIAAgIIAAgHIgTAXIAUAAIAAAAg");
	this.shape_15.setTransform(101,9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvAeIAAg7IBfAAIAAA7g");
	this.shape_16.setTransform(64.2,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABkBJQgFgFgEgHIgJAMQgUAWggAAQgeAAgTgWIgFgHIAAAaIhGAAIAAgcIgIAKQgWAVghAAIgTgCQgLgDgIgDIgNgFIAIg1IgEgEQgQgUAAgcQAAgcATgWQAVgVAfAAQAdAAAVAWQATAWAAAjIAAAsIArAAIgBgsQAAglATgVQATgVAeAAQAgAAAUAVQAFAGAEAHQADgHAGgGQATgVAgAAQAgAAATAVQATAVAAAlIAAAfQAAAmgTATQgUAWgfAAQggAAgTgWg");
	this.shape_17.setTransform(33.6,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQBeIAAhzIgiAAIAAg4IBlgQIAAC7g");
	this.shape_18.setTransform(5.2,9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8B4023").s().p("ACiBJQgGgHgEgIQgGALgEAEQgUAVgfAAQgfAAgTgVIgIgMIAAAfIhAAAIAAgdIgHAKQgTAVgfAAQgfAAgUgVIgBgCIAAAVIiJAAIAAgtIA4g6Ig2AAIgEgKIAAgBIgBgCIAAgCQAAgcASgUQATgSAeAAQAfgBATARQAKAIAEAMQAFgKAFgGQATgVAgABQAfgBATAVQASAUAAAmIgBAtIAtAAIgBgtQAAgmASgUQATgVAfABQAfgBAUAVQAEAEAGAMQAEgJAGgHQATgVAfABQAfgBATAVQATAVAAAlIAAAdQAAAlgTAVQgTAVgfAAQgfAAgTgVgADUgjQgDADAAAPIAAAjQAAAPADACIAAABIAAAAIAAgBQADgCAAgPIAAgjQAAgPgDgDIAAAAIAAAAgABbgjQgCADAAAPIAAAjQAAAPACACIAAABIABAAIAAgBQACgEAAgNIAAgjQAAgPgCgDIgBAAgAhZgjQgCADAAAPIAAAjQAAANACAEIAAABIABAAIAAgBQACgEAAgNIAAgjQAAgPgCgDIAAAAIgBAAgAicAhIgBgcIgYAcIAZAAgAjXgaIAAAGIADgDQACgFAAgCIAAgFIgCAAIgBAAQgCAEAAAFg");
	this.shape_19.setTransform(102.7,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8B4023").s().p("AgtAcIAAg3IBbAAIAAA3g");
	this.shape_20.setTransform(66,12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8B4023").s().p("ABkBJQgFgHgFgIQgGALgEAEQgSAVggAAQgeAAgSgVIgJgMIAAAfIhBAAIAAggQgHAJgFAFQgUATghABQgKAAgKgCQgMgDgGgDIgLgFIAIg0IgGgFQgOgTAAgbQgBgfAUgTQATgVAeABQAegBAUAWQASAVABAkIAAAiIgBALIAuAAIAAgtQgBgmATgUQASgVAeABQAfgBATAVQAEAEAGAMQAFgJAFgHQAUgVAfABQAfgBATAVQASAVABAlIAAAdQgBAmgSAUQgTAVgfAAQgfAAgUgVgACXgjQgDADAAAPIAAAjQAAAPADACIAAABIAAAAIAAgBQADgCgBgPIAAgjQABgPgDgDIAAAAIAAAAgAAegjQgDADAAAPIAAAjQAAAPADACIAAABIABAAIAAgBQACgEAAgNIAAgjQAAgPgCgDIgBAAgAiYgWQAAAIABADIAEAAIAAgIQAAgLgDgEQgCAEAAAIg");
	this.shape_21.setTransform(35.3,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8B4023").s().p("AgOBdIAAh0IgjAAIAAg1IBjgQIAAC5g");
	this.shape_22.setTransform(6.9,11.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B4023").s().p("AgBA/IAAgjIgIAjIgoAAIgIgdIgIAdIgoAAIgeh9IAxAAIAFAYIAGgYIAkAAIAGAYIAFgYIBtAAQAWAAANAJQAQALAAAVQAAAKgFAJIACACQAHAIAAAMQAAAVgPAMQgOAKgVAAgABRAUIAHAAIAAgBIgHAAg");
	this.shape_23.setTransform(147.8,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.5,20.7);


(lib.setiapjumat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA/IAAhmIghAAIAAgYIBfAAIAAAYIgiAAIAABmg");
	this.shape.setTransform(134,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbA/IgHgYIgnAAIgHAYIgeAAIAqh+IAeAAIApB+gAANAQIgNgsIAAAAIgMAsIAZAAg");
	this.shape_1.setTransform(123.3,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmA/IAAgfIADg5IgBAAIgfBYIgSAAIgehXIgBAAIADA4IAAAfIgeAAIAAh+IAnAAIAcBYIAAAAIAchYIAoAAIAAB+g");
	this.shape_2.setTransform(109.7,24.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglA0QgOgMAAgWIAAhSIAdAAIAABSQAAAMAHAGQAGAFAJABQALgBAGgFQAGgGAAgMIAAhSIAdAAIAABSQAAAWgOAMQgPANgXAAQgWAAgPgNg");
	this.shape_3.setTransform(95.7,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfA2QgMgJAAgVIAAAAIAdAAQAAAJAFAFQAEADAFABQAGAAAEgGQAFgEAAgJIAAhXIAdAAIAABXQAAASgNAMQgMAMgTAAQgTAAgMgLg");
	this.shape_4.setTransform(84,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxA/IAAh+IAyAAQAWAAAOAMQANAMAAATQAAASgNAKQgOAMgWgBIgUAAIAAAsgAgTgBIAUAAQAJAAAFgGQAFgFAAgIQAAgIgFgGQgFgGgJABIgUAAg");
	this.shape_5.setTransform(70.7,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbA/IgHgYIgnAAIgHAYIgeAAIAqh+IAeAAIApB+gAANAQIgNgsIAAAAIgMAsIAZAAg");
	this.shape_6.setTransform(59,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA/IAAh+IAbAAIAAB+g");
	this.shape_7.setTransform(50.5,24.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOA/IAAhmIghAAIAAgYIBfAAIAAAYIgiAAIAABmg");
	this.shape_8.setTransform(42.9,24.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrA/IAAh+IBXAAIAAAYIg5AAIAAAbIAwAAIAAAUIgwAAIAAAhIA5AAIAAAWg");
	this.shape_9.setTransform(33,24.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA2QgQgKAAgVIAAAAIAdAAQAAALAGAEQAGAFAKAAQAKAAAEgEQAFgDAAgGQAAgHgFgEQgEgDgMgEQgWgIgMgHQgLgJAAgQQAAgQANgLQAOgKAUABQAVgBAOALQANALAAASIAAAAIgdAAQAAgHgFgFQgGgFgJAAQgHAAgFAEQgFAEAAAGQAAAGAFADQAFADANAGQAVAGALAIQALAJAAARQAAAQgNAKQgNAKgWAAQgTAAgQgMg");
	this.shape_10.setTransform(21.9,24.1);

	this.instance = new lib.SETIAPJUMAT_1();
	this.instance.parent = this;
	this.instance.setTransform(84.1,25.3,1,1,0,0,0,66.2,8.4);
	this.instance.alpha = 0.359;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AsCjyIYFA8IhHGBI1qAog");
	this.shape_11.setTransform(77.2,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.3,48.8);


(lib.kaskusurl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kaskuscoid();
	this.instance.parent = this;
	this.instance.setTransform(41.6,11.2,1,1,0,0,0,39.6,6.5);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.2,22.5);


// stage content:
(lib.lead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta
	this.instance = new lib.selengkapnya();
	this.instance.parent = this;
	this.instance.setTransform(529.8,42,1,1,0,0,0,77.7,18.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).wait(50).to({alpha:0.012},5).to({_off:true},1).wait(10));

	// 1920
	this.instance_1 = new lib._1920();
	this.instance_1.parent = this;
	this.instance_1.setTransform(626,41.1,1,1,0,0,0,80.7,10.3);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).to({alpha:1},5).wait(50).to({alpha:0.012},5).to({_off:true},1).wait(100));

	// setiap jumat
	this.instance_2 = new lib.setiapjumat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(459.8,42.9,1,1,0,0,0,77.2,24.4);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).to({alpha:1},5).wait(55).to({alpha:0.012},5).to({_off:true},1).wait(100));

	// trax
	this.instance_3 = new lib.traxlogo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(794,39.9,1,1,0,0,0,61,21);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({x:634},10).wait(50).to({alpha:0.012},5).to({_off:true},1).wait(165));

	// dengarkan
	this.instance_4 = new lib.dengarkan();
	this.instance_4.parent = this;
	this.instance_4.setTransform(470.8,-25.8,1,1,0,0,0,91.6,17.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({y:39.1},10).wait(60).to({alpha:0.012},5).to({_off:true},1).wait(165));

	// kompak
	this.instance_5 = new lib.kompaklogo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(324.6,44.7,0.571,0.571,0,0,0,37.5,35);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({alpha:1},5).to({regX:37.6,regY:35.2,scaleX:0.84,scaleY:0.84,rotation:15,x:324.7},5).to({rotation:-15},5).to({scaleX:1,scaleY:1,rotation:0,x:324.6,y:44.8},10).wait(241));

	// announcer
	this.instance_6 = new lib.announcer();
	this.instance_6.parent = this;
	this.instance_6.setTransform(191.4,137.4,1,1,0,0,0,86,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:48},24).to({y:57},10).wait(266));

	// bg
	this.instance_7 = new lib.kaskusurl();
	this.instance_7.parent = this;
	this.instance_7.setTransform(678.5,73.2,1,1,0,0,0,41.6,11.2);

	this.instance_8 = new lib.kaskuslogo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(54.1,15.1,1,1,0,0,0,44,5.5);

	this.instance_9 = new lib.FlashAICB_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1,-1,1.001,1.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,44,729,186.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;