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
		{src:"images/FlashAICB.png", id:"FlashAICB"},
		{src:"images/FlashAICB_1.png", id:"FlashAICB_1"},
		{src:"images/FlashAICB_2.png", id:"FlashAICB_2"}
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



(lib.FlashAICB = function() {
	this.initialize(img.FlashAICB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,48);


(lib.FlashAICB_1 = function() {
	this.initialize(img.FlashAICB_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,95);


(lib.FlashAICB_2 = function() {
	this.initialize(img.FlashAICB_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.trax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,48);


(lib.kompak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7AA34").s().p("AhXBbIAZg5QAwAgAXAAQAKgBAIgFQAKgGAAgJQAAgNgjgKQgygNgSgnQgGgMAAgNQAAgeAfgQQAYgMAgABQAdAAApAHIgTA3QgdgOgUgBQgIAAgJAFQgIAFAAAIQAAAHAMAJQAIAGAcALQAWAIAKAIQAPAMABAWQACAlgjAcQgPAMgcAAQglABg+gXg");
	this.shape.setTransform(98.3,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AA34").s().p("AgJBqQg1gRgGhUIgGhqIA1gDIgDB6QATAbAJAAQAVAAAAhfIgBg7IAzACQACCQgUAqQgOAfgeAAQgKAAgMgEg");
	this.shape_1.setTransform(81.8,90.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7AA34").s().p("AhRh0IA3ADIgCA/IAAAeIAshbIA3AIIhABnIBLBKIg2AgIg2hYQABAuAKAvIg0AGQgPh1ABh0g");
	this.shape_2.setTransform(66.6,90.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AA34").s().p("AhXBbIAZg5QAwAgAXAAQAKgBAIgFQAKgGAAgJQAAgNgjgKQgygNgSgnQgGgMAAgNQAAgeAfgQQAYgMAgABQAdAAApAHIgTA3QgdgOgUgBQgIAAgJAFQgIAFAAAIQAAAIALAIQAKAHAbAKQAWAJAKAHQAPAMABAWQACAlgjAcQgPAMgdAAQgkABg+gXg");
	this.shape_3.setTransform(49.3,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AA34").s().p("AhWBoIA9jXIAvAAIBBDNIg2AOIgQhGIglAAIgRBKgAgMACIAUgBIgJgsg");
	this.shape_4.setTransform(32.2,89.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AA34").s().p("AhQh0IA2ADIgCA/IABAeIAshbIA2AIIhABnIBLBKIg1AgIg3hYQACAyAJArIg0AGQgPh1ACh0g");
	this.shape_5.setTransform(16.2,90.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E89C0").s().p("Ag8A/IASgnQAgAVAQAAQAGAAAHgEQAGgDAAgHQAAgJgYgGQgigKgMgaQgEgJAAgIQAAgVAVgLQASgIAUAAQATAAAdAFIgMAmQgUgKgOAAQgGAAgGADQgFADAAAGQAAAFAHAGQAIAFARAHQARAHAGADQAKAJABAPQABAZgYAUQgJAIgVAAQgZAAgrgPg");
	this.shape_6.setTransform(101.2,67.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E89C0").s().p("Ag7BIIAriUIAfAAIAtCNIglAJIgLgwIgZAAIgMAzgAgHABIANAAIgGgeg");
	this.shape_7.setTransform(89.3,67.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E89C0").s().p("AgKBLIgChyIgzAHIgCgiICDgMIgBAiIgtACIADB5g");
	this.shape_8.setTransform(77.1,68.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E89C0").s().p("AgSBLQACgrAAggQAAgjgCgpIAmgCIgGCdg");
	this.shape_9.setTransform(68.7,68.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E89C0").s().p("AgSAAIAAAJQABAcAEAhIgiAAQgDg4AAgsIABglIAmAAIAaBDQgDgSAAgiIAAgUIAkABQgCAYAAAdQAAAsAFAuIgjABg");
	this.shape_10.setTransform(60.6,68.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E89C0").s().p("AgFBIQglgKgEg6IgFhKIAlgCIgCBUQANATAGAAQAPAAAAhBIgCgoIAkABQABBigNAdQgLAVgUABQgIAAgGgEg");
	this.shape_11.setTransform(49.9,68.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E89C0").s().p("AAbBHIAAhMIgLAsIggAAIgKgxIgDBOIgjgCIAHiIIApgDIAQA/IARg7IAogBQAHBJABBHg");
	this.shape_12.setTransform(38.1,68.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E89C0").s().p("AAABPQglgCgOgRQgPgTABghQABgfAPgZQASgeAfAAQAfAAAPARQAMAOAGAiQADANAAALQAAAagNARQgSAZgjAAIgBAAgAgTgUQgJAOAAAKQAAAMAIAMQAIAOAMAAQAKAAAKgOQALgOAAgMQAAgNgNgOQgKgKgIAAQgJAAgKAPg");
	this.shape_13.setTransform(25.1,68.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E89C0").s().p("Ag3hQIAmACIgCArIABAVIAdg/IAmAGIgsBHIAzAzIgkAWIglg+QABAjAGAeIgkAEQgKhPABhRg");
	this.shape_14.setTransform(12.7,68);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguBmQgtgVgEhDIgBgOQAAgyAYgeQAbgjAvAAIATACQA6AHAGA7IgyAQQgKghgWAAIgJACQghAIgCA0IgBAHQAAAtAhAOQAJAEAHAAQAWAAALgeIgogFIAKgiIBXAGQgHBjgvAJQgNADgPAAQgeAAgfgOg");
	this.shape_15.setTransform(98.6,42.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAAIAAAOQAAAuAGAvIg1AAQgDhKAAhQIAAg5IA8ABIAoBnQgEgcAAg1IAAgeIA2ACQgDAoAAApQAABDAIBHIg0ACg");
	this.shape_16.setTransform(80,43.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIB3IAFjvICMACIAABAIhagBIAAAhIBNAAIgCAyIhLgCIAAAgIBTAAIgCA/g");
	this.shape_17.setTransform(64.2,42.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAUCAIgzhAIAAA/Ig8gEIADj7IARAAQBMAAAkArQAPARAAATQAAAjgyAqIBWBlgAgfgKQAigSABgSQgBgWgigGg");
	this.shape_18.setTransform(49.4,42.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhbBuIBBjjIAxAAIBEDYIg4APIgShKIglAAIgTBOgAgMACIAUgBIgJgug");
	this.shape_19.setTransform(31.3,42.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRh7QApgHAeAAQAwAAAOAYQAGAMAAANQAAAcgiAhQA3AUACApQACApiZAygAgWA+QAqgPgBgNQgBgNgsAAgAgkhNIACAiQAmgSgCgMQgBgIgMAAQgKABgPADg");
	this.shape_20.setTransform(14.3,42.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhTh2IA4ACIgCBAIABAgIAtheIA4AIIhCBqIBNBMIg3AgIg4haQADA0AIAsIg1AFQgPh5ABh0g");
	this.shape_21.setTransform(100.6,16.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhYBrIA/jcIAvAAIBDDRIg3AOIgRhHIglAAIgSBLgAgMADIAUgBIgJgug");
	this.shape_22.setTransform(83.3,16.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhFBzIAEjhQAZgFAXAAQA+AAAUAvQAGANAAALQgBAshWAZIgEBbgAgOgZQAigOAAgLQAAgLgggIg");
	this.shape_23.setTransform(67.3,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AApBqIAAhzIgSBEIgvAAIgOhLIgGB0Ig0gDIAKjLIA+gCIAYBcIAahYIA6gCQALBrACBsg");
	this.shape_24.setTransform(50.3,18);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBB1Qg3gCgVgaQgWgdACgvQABgwAXglQAbgsAuAAQAuAAAWAZQARATAKA0QAEATAAASQAAAngTAZQgZAkgzAAIgFAAgAgdgfQgNATAAASQAAARALATQANAUARAAQAPAAAQgVQAQgTAAgTQAAgTgTgWQgOgOgNAAQgQAAgNAVg");
	this.shape_25.setTransform(31.1,17.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhSh2IA4ACQgCAdAAAjIAAAgIAtheIA4AIIhBBqIBMBMIg3AgIg3haQABA0AKAsIg1AFQgQh2ACh3g");
	this.shape_26.setTransform(12.7,16.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AhmCGQgTgHgIgSQgIgTAJgSIAZg4IAGgKQgGgHgEgKQgKgXAAgUQAAg6A4gdQAjgRApAAQAgAAAvAIQAUAEAKATQALARgHAUIgSA2IgEAJQAaAZACAlQADA6g1ArQgaAXguAAQgtAAhFgZg");
	this.shape_27.setTransform(98.5,89.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgXCVQhTgagHhzIgHhqQgBgSANgPQAMgOATgBIA1gDQANAAAJAEQAMgJAPAAIA0ACQASABANAMQAMANABATQABCbgYAyQgMAcgXAPQgWAOgcAAQgQAAgUgGg");
	this.shape_28.setTransform(82,90.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AhDCiQgRAAgNgLQgNgLgCgRQgQh3ACh4QAAgTAOgOQAOgNATABIA3ADQALABAKAFQALgGAOACIA3AIQAYADALAWQAKAXgMAUIguBLIAyAvQAPAQgCAWQgDAWgTALIg1AgQgVAMgWgJQgJAHgKABIg0AGg");
	this.shape_29.setTransform(66.8,89.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AhmCGQgTgHgIgSQgIgTAJgSIAZg4IAGgKQgGgHgEgKQgKgXAAgUQAAgdAPgWQAOgWAbgOQAjgRApAAQAhAAAuAIQAUAEAKATQALARgHAUIgSA2IgEAJQAaAZACAlQADA6g1ArQgaAXguAAQgtAAhFgZg");
	this.shape_30.setTransform(49.5,89.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgsCdIgxgHQgUgEgLgRQgLgSAFgTIA9jXQAFgPAMgKQAMgIAPgBIAvAAQAOABANAIQAMAJAEAOIBBDNQAGATgKARQgJARgTAFIg2AOQgTAEgQgKQgGgDgDgGQgNAVgYgBg");
	this.shape_31.setTransform(32.4,89.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AhDCiQgRAAgNgLQgNgLgCgRQgQh3ACh4QAAgUAOgNQANgNAUABIA3ADQAKAAALAGQAKgGAPACIA3AIQAYADALAWQAKAXgMAUIguBLIAyAvQAPAQgCAWQgDAWgTALIg1AgQgVANgWgKQgJAHgKABIg0AGg");
	this.shape_32.setTransform(16.5,89.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AhLBpQgTgGgIgTQgHgRAIgTIARgnIABgCIgDgFQgIgRAAgSQAAgYAMgSQAMgUAWgLQAZgNAhAAQAZAAAgAGQAUAEALASQAKASgHATIgMAkQAQATABAaQACAvgpAiQgXAUgkAAQghAAgygTg");
	this.shape_33.setTransform(101.4,67.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AggB6IgigFQgTgDgMgRQgLgSAFgTIAriUQAEgPAMgJQAMgKAQAAIAfAAQAPAAAMAJQAMAJAEAOIAtCNQAGAUgJAQQgKARgTAFIglAJQgSAFgQgJQgJAJgQAAg");
	this.shape_34.setTransform(89.6,67.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgPB4QgRgCgMgNQgLgMgBgRIgBhAQgTACgQgMQgPgLgBgUIgDgjQAAgTALgNQAMgOASgCICFgLQAVgCAOAOQAPAPgBATIgBAjQgBARgMANQgNAMgSAAIAAAAIABBOQABAVgQAOQgNALgSAAg");
	this.shape_35.setTransform(77.4,68.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgYB4QgSgCgMgOQgLgOABgSQADgpAAgfQAAghgDgoQgBgTAMgOQANgOATgBIAmgDQAUgBAOAOQAOAOAAAUIgFCeQgBAVgPANQgNAKgRAAg");
	this.shape_36.setTransform(68.9,68.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgCByIgLABIgjAAQgSAAgNgMQgNgNgBgSQgDg6AAgsIABgnQAAgTAOgNQANgNATABIApABQAIgGANAAIAkACQATAAAOAPQAMAPgBATQgCAYAAAZQAAAqAFArQADAUgOAPQgMAOgVABIgkACQgKAAgIgFg");
	this.shape_37.setTransform(60.8,68.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgTB0QgagIgSgVQgZgdgDg0IgFhIQgBgTAMgPQANgOATAAIAlgDQAHgBAHADQAIgFAMAAIAjABQATABAMANQANAMAAATQACBtgSAnQgLAWgTANQgTAMgXAAQgNAAgPgFg");
	this.shape_38.setTransform(50.2,68.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AA/B3IgmgCQgQgBgLgMQgNAKgRgBIgjgCQgTgBgMgOQgMgOABgTIAGiHQABgSAMgMQANgNARgBIAqgCQANAAAJAFIAMgCIAngBQASAAANAMQAOALACASQAIBRABBDQABATgPAPQgOAMgSAAg");
	this.shape_39.setTransform(38.3,68.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AgBB8Qg7gDgbghQgZghABgwQACgrAVgkQAggzA4AAQA0AAAcAgQATAVAKAwQADAVAAAMQAAApgVAdQgfArg7AAg");
	this.shape_40.setTransform(25.3,68.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AhMBzQgMgLgDgRQgLhRABhWQABgTAOgNQAOgOATABIAmACQAHABAHACQAIgDALACIAlAFQAZADAKAXQALAWgNAVIgaAqIAbAYQAPAQgCAWQgDAWgTALIglAWQgQAKgTgFQgGAEgHABIgpAEQgRAAgNgLg");
	this.shape_41.setTransform(12.9,67.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AhACPQgegNgTgaQgYgigEg1IAAgRQAAhAAhgsQApg0BFAAQANAAAMABQAtAGAbAcQAbAcAEAtQACANgGALQASAPgCAVQgJCGhQAQQgRADgUAAQgoAAgogSg");
	this.shape_42.setTransform(98.8,42.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AgBCTQgJAFgLAAIg1AAQgSAAgNgMQgNgNgBgSQgEhKAAhRIABg7QAAgTAOgNQAOgOASABIA8ACIAJABQALgKAQABIA2ACQAVABAMAOQANAOgCAUQgDAlAAAoQAABAAIBFQACAUgNAPQgMAOgVABIg2ACQgQAAgKgKg");
	this.shape_43.setTransform(80.2,43.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AhJCkQgTgBgNgNQgOgNABgTIAFjvQABgTANgNQAOgNASABICMACQATAAANANQANANAAATIAAA7IABAFQAAAUgOANIgCA2QAIALAAAPIgCA/QAAASgNANQgOANgSAAg");
	this.shape_44.setTransform(64.4,42.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AAUCuQgQgBgJgJQgOAKgPgCIg8gDQgSgBgMgOQgNgNABgSIADj7QAAgSANgNQAMgNASgBIATgBQBhAAAyA8QAZAfAAAiQAAApghAmIA7BGQAIAKACAOQACANgGALQgFAMgLAIQgMAGgNAAg");
	this.shape_45.setTransform(49.6,42.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AguCjIg0gIQgUgDgLgSQgLgRAGgUIBAjiQAEgPAMgJQAMgKAQAAIAxAAQAPABAMAIQAMAJAEAPIBFDXQAFATgJARQgKARgTAFIg4APQgSAEgRgKQgJgGgCgGQgNAYgaAAg");
	this.shape_46.setTransform(31.6,42.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AhgCpQgSgNgBgXIgLj9QgBgRAKgNQALgNAQgEQAvgJAhAAQBMAAAaAxQALAWAAAXQAAAZgMAYQAhAdADAqQACAug4AkQgqAbhXAcQgGACgIAAQgPAAgLgIg");
	this.shape_47.setTransform(14.5,42.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AhjCaQgMgMgDgRQgQh8ACh4QABgUANgNQAOgNAUABIA4ADQALAAAKAHQALgHAPACIA4AIQAYADALAXQALAWgNAVIgvBNIAzAxQAPAPgCAWQgDAXgTALIg3AhQgUAMgWgKQgKAIgKAAIg7AHQgRAAgNgLg");
	this.shape_48.setTransform(100.8,16.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#231F20").s().p("AgtCgIgygIQgTgDgMgSQgLgRAFgUIA/jcQAEgPANgJQAMgJAPAAIAvAAQAPAAAMAJQAMAIAFAPIBCDRQAGATgJARQgKARgTAFIg3AOQgSAFgQgKQgHgEgEgGQgMAVgaAAg");
	this.shape_49.setTransform(83.5,16.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AgVChIgygBQgSAAgNgOQgNgOAAgSIAFjhQAAgQALgMQAKgMAPgEQAfgGAaAAQA0AAAjAbQAYATANAdQAJAVAAAUQAAAwgGATQgLAkgnAQIgkAsQAAATgOAMQgLANgSAAgAgVgjIABACIACgGIgCgFg");
	this.shape_50.setTransform(67.5,16.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("ABeCbIg4gDQgPgBgLgKQgLgKgCgOQgDAKgJAIQgPANgSgCIg1gDQgSgBgNgOQgMgOABgTIAKjKQABgSAMgMQAMgMASgBIA+gEQASgBAMAMQAKgFALgBIA7gBQARAAANALQANAMACARQAMBuABBtQABAUgPAOQgNAMgSAAg");
	this.shape_51.setTransform(50.5,17.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AgCCiQhNgCgigsQgggpAChAQACg8AdgvQAohBBIAAQBDAAAjAnQAZAdANBAQAEAZAAAUQAAA2gbAlQgoA3hLAAg");
	this.shape_52.setTransform(31.3,17.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("AhjCaQgNgMgCgRQgQh3ACh9QAAgUAOgNQAOgNATABIA5ADQALAAAKAHQALgHAPACIA4AIQAYAEALAWQAKAWgNAVIgvBNIA0AxQAPAQgCAVQgDAXgTALIg3AhQgVAMgWgKQgJAIgLAAIg6AHQgRAAgNgLg");
	this.shape_53.setTransform(13,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.8,106.3);


(lib.SETIAPJUMAT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E89C0").s().p("AgPBGIAAhyIglAAIAAgZIBpAAIAAAZIglAAIAAByg");
	this.shape.setTransform(130,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E89C0").s().p("AAeBGIgIgcIgrAAIgIAcIghAAIAuiLIAhAAIAtCLgAgNASIAcAAIgPgxIAAAAg");
	this.shape_1.setTransform(119,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E89C0").s().p("AAqBGIADhiIgBAAIgiBiIgUAAIgihhIAAAAIADBhIghAAIAAiLIArAAIAfBhIAAAAIAfhhIAsAAIAACLg");
	this.shape_2.setTransform(103.8,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E89C0").s().p("AgpA5QgQgMAAgZIAAhaIAhAAIAABaQAAAOAHAFQAHAHAKAAQALAAAHgHQAHgGAAgNIAAhaIAhAAIAABaQAAAZgRAMQgPAOgaAAQgZAAgQgOg");
	this.shape_3.setTransform(88.3,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E89C0").s().p("AgjA8QgNgLAAgVIABgBIAgAAQAAAKAEAEQAFAFAGAAQAGAAAFgGQAFgFAAgLIAAheIAhAAIAABeQAAAVgOANQgOANgVAAQgWAAgNgLg");
	this.shape_4.setTransform(75.4,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E89C0").s().p("Ag2BGIAAiLIA3AAQAZAAAPAMQAOANAAAVQAAAWgOAKQgPANgZgBIgXAAIAAAxgAgWgCIAXAAQAKAAAGgFQAGgHAAgIQAAgKgGgGQgGgGgKAAIgXAAg");
	this.shape_5.setTransform(60.6,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E89C0").s().p("AAeBGIgIgcIgrAAIgIAcIghAAIAuiLIAhAAIAuCLgAgOASIAcAAIgOgxIAAAAg");
	this.shape_6.setTransform(47.7,10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E89C0").s().p("AgPBGIAAiLIAfAAIAACLg");
	this.shape_7.setTransform(38.2,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E89C0").s().p("AgPBGIAAhyIglAAIAAgZIBpAAIAAAZIglAAIAAByg");
	this.shape_8.setTransform(29.7,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E89C0").s().p("AgwBGIAAiLIBhAAIAAAZIhAAAIAAAfIA2AAIAAAXIg2AAIAAAjIBAAAIAAAZg");
	this.shape_9.setTransform(18.6,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E89C0").s().p("AglA8QgSgMABgXIAAAAIAgAAQAAAMAGAFQAHAGALAAQALAAAEgFQAFgDAAgHQAAgIgEgEQgGgEgMgEQgZgJgNgHQgNgKAAgSQAAgSAQgLQAPgLAWAAQAXAAAPAMQAPAMAAATIgBABIgfAAQAAgIgGgGQgFgFgLAAQgIAAgFAEQgGAEAAAHQAAAGAGAEQAEADAPAGQAXAHANAJQAMAKAAATQAAASgOALQgOAKgZAAQgWAAgRgMg");
	this.shape_10.setTransform(6.3,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,2.7,134.6,14.6);


(lib.kaskuscoid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgZAvQgIgKAAgSIAAgBQAAgSAIgLQAJgMAOAAQAEAAAGADQAFACAEAFIAAgrIARAAIAABwIgPAAIgBgKQgDAFgGADQgHADgEAAQgOABgJgLgAgLAAQgEAFAAANIAAABQAAAMAEAFQAEAHAIAAQAFAAAEgCQADgDAEgEIAAgiQgEgEgDgCQgDgCgGAAQgIAAgEAIg");
	this.shape.setTransform(79.5,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgIA5IAAhOIAQAAIAABOgAgIgoIAAgQIAQAAIAAAQg");
	this.shape_1.setTransform(73.8,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_2.setTransform(69.9,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgZAdQgKgLAAgSIAAAAQAAgRAKgLQAKgMAPAAQAQAAAKAMQAKALAAARIAAAAQAAATgKALQgJALgRAAQgPAAgKgMgAgNgSQgEAIAAAKIAAAAQAAAMAEAHQAEAHAJAAQAJAAAEgHQAFgIAAgLIAAAAQAAgJgFgJQgEgHgJAAQgIAAgFAHg");
	this.shape_3.setTransform(64,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgYAdQgJgLAAgRIAAgBQAAgRAJgLQALgMAOAAQAPAAAJAJQAJAIAAANIgBAAIgQAAQAAgGgEgFQgEgEgIAAQgIAAgDAHQgFAHAAALIAAABQAAALAFAHQADAHAIAAQAIAAADgDQAFgEAAgGIARAAQgBAMgIAIQgKAIgOAAQgOAAgLgMg");
	this.shape_4.setTransform(56.2,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_5.setTransform(50.3,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgWAhQgJgIAAgKIAAgBIARAAQABAHAEADQAFADAEAAQAIAAADgCQAEgDAAgEQAAgEgEgDQgFgDgGgCQgOgDgHgDQgIgGAAgJQAAgKAJgHQAIgIAMAAQAPAAAIAIQAIAGAAALIAAABIgRAAQAAgFgEgEQgDgDgHAAQgFAAgDADQgDADAAAEQAAAEADACQACACAJADQAOADAIADQAHAGAAAKQAAALgJAGQgIAHgPAAQgOAAgIgIg");
	this.shape_6.setTransform(44.6,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgYAgQgIgIAAgSIAAgtIASAAIAAAtQAAALADAFQAEADAHAAQAEAAAEgCQAFgDACgEIAAg3IASAAIAABOIgPAAIgCgMQgEAGgFAEQgGADgGAAQgNAAgGgIg");
	this.shape_7.setTransform(36.8,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAOA5IgWgjIgIAAIAAAjIgSAAIAAhxIASAAIAABAIAHAAIASgdIAWAAIgaAiIAdAsg");
	this.shape_8.setTransform(29.5,7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgXAhQgIgHAAgLIAAgBIAQAAQABAHAFADQAFADAEAAQAIAAADgCQADgCAAgFQAAgEgDgDQgFgEgGgBQgOgDgIgDQgHgGAAgJQAAgKAIgHQAJgIAMAAQAOAAAJAIQAIAGAAALIAAABIgSAAQABgFgEgEQgEgDgGAAQgFAAgDADQgEADAAAEQAAAEAEACQACACAIADQAPADAIADQAHAGAAAKQAAALgJAGQgIAHgPAAQgOAAgJgIg");
	this.shape_9.setTransform(21.4,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgbAiQgGgGAAgLQAAgLAJgGQAJgFAPAAIAOAAIAAgHQgBgHgDgDQgDgEgHAAQgFAAgEADQgDAEAAAEIgRAAIAAgBQgBgJAKgHQAIgIAMAAQAOAAAJAIQAJAHAAANIAAAqIACAJIgSAAIgCgLQgFAFgFAEQgEAEgIAAQgMAAgHgHgAgLAIQgEAEAAAFQAAAFADACQADACAFAAQAGAAAEgDQAGgEACgEIAAgLIgOAAQgHAAgEAEg");
	this.shape_10.setTransform(13.7,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AANA5IgVgjIgIAAIAAAjIgRAAIAAhxIARAAIAABAIAIAAIASgdIAUAAIgaAiIAfAsg");
	this.shape_11.setTransform(6.6,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,1.4,79.9,11.6);


(lib.dengarkan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgKBLQgDgFgBgHIAAhPQABgHADgGQAFgEAFAAQAEAAAEACQADACACAEQACAFAAAEIAABPIgCAJQgDAEgCABQgFADgDAAQgFAAgFgFgAgLgyQgEgFAAgHQAAgHAEgFQAGgFAFAAQAFAAADADQADACADAEQACADABAFQgBAHgFAFQgEAFgHAAQgFAAgGgFg");
	this.shape.setTransform(153.9,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgdBKQgMgIgFgOQgHgNAAgOQAAgPAGgNQAGgOALgHQAKgJAQAAIAJABIAJADIAJAHIAAgqQAAgHAEgFQAFgFAGAAQAGAAACACQADACADAEQACADAAAGIAACAQAAAFgCAEQgDAFgDAAQgEADgEAAQgMAAgDgNQgEAHgIADQgHAEgHAAQgPAAgLgIgAgLgBQgGADgDAHQgCAIAAAGQAAAHABAEIAFALQADAEAEACQAFAEAEAAQAHgBAGgFQAFgEADgHQACgIAAgIQAAgMgGgIQgGgIgLABQgGgBgFAFg");
	this.shape_1.setTransform(145.3,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgjAuQgNgMgBgVIAAg1QAAgGAFgGQAEgFAHAAQAEAAAEADQADACACADQACAEAAAFIAAA0QAAAKAFAFQAHAGAGgBQAFAAAFgCQACgBAFgGQACgDAAgIIAAg0QAAgGAEgGQAFgFAHAAQAFAAACADQAEACABADQACAEAAAFIAAA1QABANgGALQgFAJgMAHQgLAEgQAAQgWABgNgMg");
	this.shape_2.setTransform(127.9,32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AA3A1QgEgFAAgIIAAgzQAAgGgDgFQgCgFgEgCQgDgDgGAAQgJAAgEAHQgFAFAAAJIAAAzQAAAGgCADQgCAFgEABQgDADgEgBQgGAAgDgEQgFgFAAgIIAAgzQAAgHgCgEQgCgFgEgCQgEgDgFAAQgGAAgEADQgFACgBAFQgCAEAAAHIAAAzQAAAGgCADQgDAFgDABQgEADgEgBQgHAAgDgEQgFgFAAgIIAAhPQAAgGAFgGQAEgFAGAAQAHAAADAEQADADACAFQALgNARAAQATABAKAPQAGgHAJgEQAIgFAJAAQANABAJAEQAKAFAFAJQAFAIAAAOIAAA4QAAAGgCADQgCAFgDABQgEADgEgBQgIAAgDgEg");
	this.shape_3.setTransform(113,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgLBFQgEgFAAgHIAAhEIgHAAQgGAAgEgEQgDgDAAgHQAAgGADgDQAFgEAFAAIAHAAIAAgSQAAgHAEgFQAEgFAHAAQACAAAEACQADACACAEQACAEAAAFIAAASIAJAAQAGAAAEADQAEADAAAHQAAAIgEADQgEADgGAAIgJAAIAABEQAAAFgCAEQgCAFgDAAQgEADgCAAQgHAAgEgFg");
	this.shape_4.setTransform(101.1,30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgKBLQgDgEAAgIIAAhPQAAgIADgFQAFgEAFAAQAEAAADACQAEADACADQACADAAAGIAABPQAAAFgCAEQgCAEgEABQgDADgEAAQgGAAgEgFgAgKgyQgFgFgBgHQABgHAFgFQAFgFAFAAQAFAAADADQAEACACAEQADADgBAFQAAAHgEAFQgFAFgHAAQgFAAgFgFg");
	this.shape_5.setTransform(95.5,30.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgcA0QgEgFAAgHIAAhQQAAgIAEgEQAGgEAFAAQAQAAgBAMIABAAQADgGAEgDQAFgDAHAAQAFAAAGAEQAEAEAAAJQAAAEgCACQgCACgFACIgKAEIgNAIQgCAEgBAJIAAAsIgBAJQgDAFgDAAQgEADgEAAQgHAAgEgFg");
	this.shape_6.setTransform(90.3,32.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgbAzQgNgJgGgNQgHgOAAgPQAAgJAEgLQAEgLAHgIQAIgJAJgFQALgEAKAAQALAAAKAEQALAHAHAHQAHAIAEALQAEALAAAJQAAALgEALQgDAKgIAJQgIAIgKAEQgJAFgMAAQgOAAgNgHgAgMgZQgFAEgDAIQgCAIgBAFQABAHACAIQADAHAFAEQAGAFAGAAQAHAAAFgFQAFgEAEgHQACgIAAgHQAAgFgCgIQgDgIgGgEQgFgFgHABQgGgBgGAFg");
	this.shape_7.setTransform(80.2,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgJA2QgDgDgDgHIgfhNQgBgEAAgEQAAgHAEgEQAFgEAHAAQAJAAAEALIASA6IATg6QADgLALAAQAGAAAFAEQAEAEABAHQAAAEgCAEIgfBNQgDAHgDADQgDADgHAAQgFAAgEgDg");
	this.shape_8.setTransform(69.5,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgcAzQgMgIgGgNQgHgOAAgQQAAgOAHgOQAHgOALgHQAMgIAOAAQAHAAAHADQAHADAGAHQABgEADgFQAEgDAGAAQAKAAACAFQADAFAAAKIAABJQAAAKgDAEQgCAGgKAAQgGAAgDgEQgEgDgBgGQgMAOgPAAQgOAAgMgHgAgLgZQgGAFgCAHQgDAHAAAGQAAAIADAHQACAGAGAFQAFAFAGAAQALAAAGgKQAGgJAAgMQAAgHgCgGQgCgHgGgFQgFgFgIABQgGgBgFAFg");
	this.shape_9.setTransform(58.3,32.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgMBNQgEgFAAgIIAAhEIgHAAQgGAAgEgEQgDgCAAgHQAAgGAEgDQAEgEAFgBIAHAAIAAgPQAAgQAJgJQAHgKAOABQAJAAAGACQAGAFAAAGQAAANgNAAQgFAAgCACQgDACAAAHIAAAMIAKAAQAPAAAAAOQAAANgPAAIgKAAIAABEQAAAHgEAGQgEAEgFAAQgHAAgEgEg");
	this.shape_10.setTransform(49.5,29.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgSA3QgJgCgIgGQgGgFAAgHQAAgFADgEQAEgFAGAAQAEAAADACIAQAIIAGABQAHAAADgCQACgDAAgEQAAgEgJgEIgRgIQgLgFgHgFQgHgHAAgMQAAgKAGgIQAFgJAJgEQAKgEAKAAQAHAAAKACQAIADAGAFQAHAFAAAHQAAAFgEAEQgDAEgGAAIgJgDIgKgEQgEgBgEAAQgDAAgDACQgCACAAAEQAAAFAIADIASAJQAJADAIAGQAHAHAAAMQAAALgFAHQgGAIgJAFQgKAEgMAAQgIAAgKgDg");
	this.shape_11.setTransform(198.9,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgcAzQgLgHgHgOQgHgOAAgQQAAgOAHgOQAHgOALgHQANgIANAAQAFAAAJADQAHAEAGAHQABgFADgEQAEgEAGAAQAKAAACAGQADAGAAAIIAABJQAAAIgDAHQgCAFgKAAQgGAAgDgDQgEgDgBgHQgMAOgPAAQgOAAgMgHgAgLgZQgGAFgCAHQgDAHAAAGQAAAIADAHQACAGAGAFQAFAFAGAAQALAAAGgKQAGgJAAgMQAAgHgCgGQgCgHgGgFQgFgEgIAAQgGAAgFAEg");
	this.shape_12.setTransform(188.1,10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgLBFQgEgEAAgIIAAhEIgHAAQgGAAgEgEQgDgDAAgHQAAgFAEgEQAEgEAFAAIAHAAIAAgSQAAgIAEgEQAEgFAHAAQACAAAEACQADACACAFQACADAAAFIAAASIAJAAQAGAAAEADQAEADAAAHQAAAIgEACQgEAEgGAAIgJAAIAABEQAAAFgCAEQgCAEgDABQgEADgCAAQgHAAgEgFg");
	this.shape_13.setTransform(179.3,9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgKBLQgEgEAAgIIAAhPQAAgIAEgFQAFgEAFAAQAEAAAEACQADACACAEQABAEAAAFIAABPQAAAFgBADQgCAFgDABQgFADgDAAQgFAAgFgFgAgLgyQgEgFAAgHQAAgHAEgFQAGgFAFAAQAFAAADADQAEACACAEQADADAAAFQgBAHgFAFQgEAFgHAAQgFAAgGgFg");
	this.shape_14.setTransform(173.7,8.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AAXA1QgEgFAAgHIAAgzQAAgKgGgGQgFgFgIAAQgFAAgFADQgEACgCAFQgDAGAAAFIAAAzQAAAFgBADQgCAFgDABQgFADgDAAQgHAAgFgFQgEgEAAgIIAAhPQAAgIAEgFQAFgEAHAAQAFAAAEADQAEADAAAFQAKgNASAAQALAAAKAFQAKAGAFAJQAFAJAAAMIAAA5QAAAFgBADQgDAFgDABQgEADgEAAQgHAAgEgFg");
	this.shape_15.setTransform(165.5,10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgjAuQgOgMAAgVIAAg1QABgGAEgGQAEgEAGgBQAFAAAEACQADADACADQACAFAAAEIAAA0QAAAKAFAFQAHAGAGgBQAEAAAFgCQAFgCADgFQACgEAAgHIAAg0QAAgGAEgGQAEgEAHgBQAGAAACACQADADACADQACAEABAFIAAA1QgBAOgFAKQgFAJgNAHQgKAEgQAAQgXABgMgMg");
	this.shape_16.setTransform(153.8,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AA3A1QgFgFAAgHIAAgzQAAgHgCgEQgCgFgEgCQgEgDgFAAQgJAAgEAGQgFAFAAAKIAAAzQAAAFgCADQgDAFgDABQgEADgDAAQgFAAgFgFQgEgFAAgHIAAgzQAAgHgCgEQgCgFgEgCQgEgDgFAAQgGAAgFACQgEAEgBAEQgCAEAAAHIAAAzQAAADgCAFQgDAFgDABQgEADgEAAQgGAAgFgFQgEgFAAgHIAAhPQAAgHAEgGQAFgEAGAAQAGAAAEADQADADABAFQANgNAQAAQASAAALAQQAGgHAJgEQAJgFAIAAQALAAALAFQAKAFAFAJQAFAJAAANIAAA5QAAAFgCADQgCAFgEABQgDADgEAAQgIAAgDgFg");
	this.shape_17.setTransform(138.9,10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgbAzQgNgJgGgNQgHgOAAgPQAAgJAEgLQAEgLAHgIQAIgJAKgEQALgFAJAAQAKAAAMAFQAKAEAHAJQAHAJAEAKQAEAJAAALQAAANgEAJQgEALgHAIQgHAIgKAFQgKAEgMAAQgPAAgMgHgAgMgZQgFAEgDAIQgDAIABAFQgBAHADAIQADAHAFAEQAGAFAGAAQAHAAAGgFQAFgEADgHQADgIgBgHQABgHgDgGQgDgIgFgEQgGgEgHAAQgGAAgGAEg");
	this.shape_18.setTransform(124,10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AAbBQQgEgCgEgFIgjguIAAAAIAAAlQgBADgCAGQgCAEgDABQgEADgEAAQgHAAgEgFQgEgFAAgHIAAiAQAAgHAEgFQAEgFAHAAQAFAAADACQADACACAEQACAFABAEIAABFIAegfQAHgGAIAAQAEAAAFAEQADAFAAAEQAAAHgFAGIgbAWIAjAqQAEAFAAAEQAAAGgFAFQgDAEgHAAQgEAAgCgCg");
	this.shape_19.setTransform(113.3,8.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AAYA1QgFgFAAgHIAAgzQAAgLgGgFQgFgFgIAAQgEAAgFADQgEACgDAFQgCAEAAAHIAAAzQAAADgCAFQgCAFgDABQgEADgEAAQgHAAgEgFQgFgFAAgHIAAhPQAAgHAFgGQAEgEAHAAQAFAAAEADQAEADABAFQAJgNASAAQAKAAALAFQALAGAEAJQAGAJgBAMIAAA5QAAAFgCADQgBAFgEABQgDADgEAAQgIAAgDgFg");
	this.shape_20.setTransform(96.1,10.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgcAzQgMgIgGgNQgHgOAAgQQAAgOAHgOQAHgOALgHQANgIANAAQAFAAAJADQAHAEAGAHQABgFADgEQAEgEAGAAQAKAAACAGQADAEAAAKIAABJQAAAKgDAFQgCAFgKAAQgGAAgDgDQgEgDgBgHQgMAOgPAAQgOAAgMgHgAgLgZQgGAFgCAHQgDAHAAAGQAAAIADAHQACAGAGAFQAFAFAGAAQALAAAGgKQAGgJAAgMQAAgHgCgGQgCgHgGgFQgFgEgIAAQgGAAgFAEg");
	this.shape_21.setTransform(83.9,10.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AAbBQIgIgHIgjguIAAAAIAAAlQgBAFgBAEQgDAEgDABQgEADgEAAQgHAAgEgFQgEgEAAgIIAAiAQAAgHAEgFQAEgFAHAAQAFAAADACQADACADAEQABADABAGIAABFIAfgfQAHgGAGAAQAGAAAEAEQAEAEAAAFQgBAHgFAGIgcAWIAkAqQAEAFAAAEQAAAGgEAFQgEAEgGAAQgFAAgCgCg");
	this.shape_22.setTransform(73.2,8.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgcA0QgEgFAAgHIAAhRQAAgHAFgEQAFgEAFAAQAQAAAAAMQADgGAEgDQAGgDAGAAQAGAAAEAEQAFAEAAAJQAAAEgDACQgBACgFACIgJAEIgOAIQgDAFABAHIAAAtQAAADgDAGQgBAEgEABQgEADgEAAQgGAAgFgFg");
	this.shape_23.setTransform(64.7,10.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgcAzQgLgIgHgNQgHgOAAgQQAAgOAHgOQAHgOALgHQAMgIAOAAQAFAAAJADQAHAEAGAHQAAgFAEgEQAEgEAGAAQAKAAACAGQADAGAAAIIAABJQAAAIgDAHQgCAFgKAAQgGAAgDgDQgEgDgBgHQgNAOgOAAQgOAAgMgHgAgLgZQgGAEgDAIQgCAIAAAFQAAAHACAIQADAHAGAEQAFAFAGAAQALAAAGgKQAGgJAAgMQAAgFgCgIQgDgIgFgEQgFgEgIAAQgGAAgFAEg");
	this.shape_24.setTransform(54.2,10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgWBOQgMgDgIgFQgJgFAAgIQAAgDAEgGQAEgEAEAAQAGAAAHADIANAFQAFABAIABQAFAAAGgDQAGgDADgFQAEgHAAgHIAAgGIgBAAQgJAOgUgBQgMAAgIgEQgIgFgHgIQgGgIgDgLQgDgJABgKQAAgMADgLQACgJAIgKQAHgJAJgEQAKgFAKAAIAJACQAGACAEADQAFADADAEQABgNANAAQAFAAADACQAEAEACACQACAEAAAFIAABWQAAATgIALQgHANgNAGQgOAGgPAAQgJAAgKgCgAgMguQgFAFgCAGQgDAHAAAIQAAAJADAGQACAFAFAFQAGAEAGAAQALAAAGgJQAHgIAAgLQgBgIgDgHQgBgHgHgFQgFgFgHAAQgGAAgGAFg");
	this.shape_25.setTransform(42.1,12.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AAXA1QgEgFAAgHIAAgzQAAgKgGgGQgFgFgIAAQgFAAgEADQgFACgCAFQgCAEAAAHIAAAzQAAADgCAFQgCAFgDABQgEADgFAAQgGAAgEgFQgFgEAAgIIAAhPQAAgIAFgFQAEgEAGAAQAGAAAEADQAEADABAFQAJgNASAAQAKAAALAFQALAGAEAJQAGAJgBAMIAAA5QAAAFgCADQgCAFgDABQgEADgEAAQgHAAgEgFg");
	this.shape_26.setTransform(30.4,10.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgaAzQgOgIgGgNQgHgMAAgSQAAgLAEgJQAEgLAHgIQAHgJAKgEQAMgFAJAAQAKAAAMAFQAKAFAHAIQAHAJAEAJQAEAKAAAJQAAAMgOAAIg+AAQACALAIAFQAIAGAIAAQAIAAAEgCIANgGQAGgEAEAAIAGABIAFAFQABADAAAEQABAEgFAFQgFAFgGADQgIAEgJACQgIACgJAAQgPAAgNgHgAgPgZQgHAHAAAKIAtAAQAAgKgHgHQgHgHgJAAQgHAAgIAHg");
	this.shape_27.setTransform(18.8,10.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgtBKIgHgBQgEgCgDgDQgCgEAAgFIAAh1QAAgGAEgFQAFgFAHABIAjAAQAQAAAOAEQAOAHAJAJQAKALAEAOQAFANAAAQQAAARgFAOQgFAMgJAKQgKAKgOAGQgNAEgOAAgAgeAtIAWAAQALABAJgHQAJgGAEgJQAEgKAAgOQAAgLgEgLQgEgKgKgGQgJgHgMABIgUAAg");
	this.shape_28.setTransform(6.3,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.2,38.2);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBBIgHgZIgnAAIgIAZIgeAAIAqiBIAfAAIArCBgAgMAQIAaAAIgOgtIAAAAg");
	this.shape.setTransform(146.5,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBBIAAgvIgrhSIAhAAIAZA5IAAAAIAag5IAhAAIgtBTIAAAug");
	this.shape_1.setTransform(135.5,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBBIguhSIgBABIAABRIgeAAIAAiBIAeAAIAvBSIAAgBIAAhRIAfAAIAACBg");
	this.shape_2.setTransform(122.8,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBBIAAiBIA0AAQAXAAAOAMQAOAMAAATQAAATgOAKQgOAMgXAAIgVAAIAAAtgAgUgBIAVAAQAJAAAGgGQAFgFAAgJQAAgJgFgFQgGgGgJAAIgVAAg");
	this.shape_3.setTransform(109.9,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBBIgIgZIgoAAIgHAZIgfAAIAriBIAfAAIAqCBgAgNAQIAaAAIgNgtIAAAAg");
	this.shape_4.setTransform(97.4,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASBBIgbg0IgOAAIAAA0IgfAAIAAiBIAfAAIAAAzIAKAAIAbgzIAmAAIgpA7IAsBGg");
	this.shape_5.setTransform(85.5,16.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA0QgPgPAAgYIAAgZQAAgYAPgPQAPgPAWAAQAZAAAMALQANAMACAVIAAAAIgdAAQgCgKgFgFQgFgGgLAAQgIAAgHAJQgGAIAAAOIAAAZQAAAOAGAIQAGAJAKAAQAJAAAEgCQAGgBACgCIAAgVIgVAAIAAgSIA0AAIAAAvQgHAIgNAGQgMAGgUAAQgWAAgQgPg");
	this.shape_6.setTransform(72.3,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBBIgvhSIAAABIAABRIgeAAIAAiBIAeAAIAuBSIABgBIAAhRIAfAAIAACBg");
	this.shape_7.setTransform(59.2,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsBBIAAiBIBZAAIAAAXIg7AAIAAAcIAyAAIAAAWIgyAAIAAAhIA7AAIAAAXg");
	this.shape_8.setTransform(47.3,16.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBBIAAiBIAeAAIAABqIA3AAIAAAXg");
	this.shape_9.setTransform(36.6,16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBBIAAiBIBZAAIAAAXIg7AAIAAAcIAyAAIAAAWIgyAAIAAAhIA7AAIAAAXg");
	this.shape_10.setTransform(25.8,16.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjA4QgQgLAAgVIABgBIAdAAQAAAMAGAEQAHAFAKAAQAJAAAFgEQAFgDAAgHQAAgGgFgEQgFgFgLgDQgYgJgLgGQgMgJAAgRQAAgRAOgKQAPgKATAAQAXAAANALQAPAMgBARIAAABIgeAAQAAgIgFgFQgFgFgKAAQgHAAgGAEQgFAEAAAGQAAAGAGADIARAJQAXAHALAHQAMAKAAARQAAASgOAJQgNAKgXAAQgVAAgQgLg");
	this.shape_11.setTransform(13.9,16.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2683C2").s().p("AreCxQggAAgWgXQgXgWAAggIAAkUIYKAAQAgAAAXAWQAWAXAAAgIAADHQAAAggWAWQgXAXggAAg");
	this.shape_12.setTransform(81.3,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#214D99").s().p("AreCxQggAAgWgXQgXgWAAggIAAkUIYKAAQAgAAAXAXQAWAWAAAgIAADHQAAAggWAWQgXAXggAAg");
	this.shape_13.setTransform(83.7,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,38.3);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICB_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.007,1.008);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302,252);


(lib.announcer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICB_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,95);


(lib._1920 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgqA3IAAhtIAnAAQATAAALAHQALAIAAAQQABAIgEAFQgEAGgHAEQAIAAAGAGQAFAIAAAIQAAARgMAIQgLAIgUAAgAgQAjIAQAAQAJAAADgDQAFgEAAgGQgBgIgDgDQgDgEgJAAIgRAAgAgQgIIANAAQAIAAAEgDQAEgDAAgHQAAgHgEgDQgEgEgIAAIgNAAg");
	this.shape.setTransform(177.7,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgLA3IAAhtIAXAAIAABtg");
	this.shape_1.setTransform(170.5,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AASA3IgShCIAAAAIgRBCIgZAAIgZhtIAZAAIAOBGIABAAIAUhGIAPAAIAUBGIABAAIAOhGIAZAAIgZBtg");
	this.shape_2.setTransform(161.5,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BKIgFgQIgEAQIg2AAIgiiTIBAAAIACAKIADgKIAvAAIACAKIACgKIB/AAQAbAAAPALQAVANAAAZQgBAMgEAJIAAABQAIAKAAAOQABAagTAOQgQAMgbAAg");
	this.shape_3.setTransform(168.3,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgrBIQgRgSAAgkIAAgjQAAgkARgSQAQgSAbAAQAcAAAQASQARASAAAkIAAAjQAAAkgRASQgRASgbAAQgbAAgQgSgAgOgxQgGAKABATIAAApQgBAUAGAJQAFAJAJAAQAKAAAFgJQAFgKAAgTIAAgpQAAgTgFgKQgGgJgJAAQgIAAgGAJg");
	this.shape_4.setTransform(140.4,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgrBIQgRgSAAgkIAAgjQAAgkARgSQAQgSAbAAQAbAAASASQAQASAAAkIAAAjQAAAkgQASQgRASgcAAQgaAAgRgSgAgOgxQgFAJAAAUIAAApQAAAVAFAIQAGAJAIAAQAJAAAGgJQAFgIAAgVIAAgpQAAgUgFgJQgFgJgKAAQgIAAgGAJg");
	this.shape_5.setTransform(126.5,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgTARIAAghIAnAAIAAAhg");
	this.shape_6.setTransform(116,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgrBIQgRgSAAgkIAAgjQAAgkAQgSQARgSAbAAQAcAAAQASQARASAAAkIAAAjQAAAkgRASQgQASgcAAQgbAAgQgSgAgOgxQgFAKAAATIAAApQAAAUAFAJQAGAJAIAAQAJAAAGgJQAFgJAAgUIAAgpQAAgTgFgKQgFgJgKAAQgJAAgFAJg");
	this.shape_7.setTransform(105.6,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("Ag7BZIAAgbIA5g7QAJgLAFgJQAFgJAAgIQAAgLgFgGQgFgFgJAAQgJAAgFAHQgGAJAAAMIgoAAIAAgBQAAgYAQgSQARgRAbAAQAbAAARAPQAQAOAAAYQAAARgJANQgKANgWAYIgWAZIABAAIBDAAIAAAgg");
	this.shape_8.setTransform(91.7,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgjAPIAAgdIBHAAIAAAdg");
	this.shape_9.setTransform(73.7,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgrBIQgRgSAAgkIAAgjQAAgkARgSQAQgSAbAAQAcAAAQASQARASAAAkIAAAjQAAAkgRASQgQASgcAAQgbAAgQgSgAgOgxQgFAKAAATIAAApQAAAUAFAJQAGAJAIAAQAJAAAGgJQAFgJAAgUIAAgpQAAgTgFgKQgFgJgKAAQgJAAgFAJg");
	this.shape_10.setTransform(55.8,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgsBIQgQgSAAgkIAAgjQAAgkAQgSQARgSAbAAQAbAAARASQARASAAAkIAAAjQAAAkgRASQgQASgcAAQgbAAgRgSgAgOgxQgFAJAAAUIAAApQAAAVAFAIQAFAJAJAAQAKAAAFgJQAFgIAAgVIAAgpQAAgUgFgJQgGgJgJAAQgJAAgFAJg");
	this.shape_11.setTransform(42,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgTARIAAghIAnAAIAAAhg");
	this.shape_12.setTransform(31.5,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgZBYQgKgBgJgEIAFgdIAQAEIAQABQALAAAIgJQAIgIAAgQIAAgIQgHAIgHADQgGAEgJAAQgXAAgPgRQgNgPAAgbQAAgaARgTQARgSAaAAQAaAAARATQASATAAAiIAAAoQAAAfgUASQgTASgdAAQgJAAgJgCgAgNgwQgGAKAAAMQAAAPAFAIQAEAGAKAAQAFAAAGgCQAEgBAFgEIAAgSQAAgRgGgKQgFgJgJAAQgIAAgFAKg");
	this.shape_13.setTransform(21,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAABYIAAiGIgnAAIAAgcIBOgNIAACvg");
	this.shape_14.setTransform(5.8,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AC5BVQgGgHgEgIQgFAIgGAHQgXAYgkAAQgkAAgXgYIgGgJIAAAfIhNAAIAAgdIgGAHQgXAYgkAAQgiAAgXgXIAAAVIiiAAIAAg2IA+g+IABgCIg8AAIgFgRIAAgCQgCggAXgYQAWgWAkAAQAkAAAVATQAKAIAGAMQAEgIAGgHQAWgYAlAAQAlAAAWAYQAWAXAAAsIgBAzIAwAAIgBgzQAAgsAVgXQAWgYAlAAQAlAAAWAYQAHAIADAHQAFgIAGgHQAWgYAlAAQAkAAAXAYQAVAXAAAsIAAAjQAAAsgVAXQgWAYglAAQglAAgWgYgAi1AlQgBgJAAgKIAAgHIgWAaIAXAAIAAAAg");
	this.shape_15.setTransform(116.1,11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2AiIAAhDIBtAAIAABDg");
	this.shape_16.setTransform(73.9,12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABzBVQgHgHgEgIQgDAIgIAHQgVAYglAAQgjAAgWgYIgHgJIAAAfIhOAAIAAghIgLAMQgZAXglAAQgKAAgNgCQgIgCgOgFIgOgGIAJg8IgFgGQgSgVAAghQAAgiAWgYQAXgYAkAAQAjAAAXAZQAWAZgBApIAAAzIAyAAIAAgQIAAgjQAAgrAUgYQAXgYAjAAQAlAAAVAYQAHAHAEAIQAEgIAHgHQAVgYAlAAQAlAAAXAYQAVAXAAAsIAAAjQAAAsgVAXQgXAYglAAQgjAAgXgYg");
	this.shape_17.setTransform(38.6,11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSBtIAAiGIgoAAIAAhAIB1gTIAADZg");
	this.shape_18.setTransform(5.9,10.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8B4023").s().p("AC7BUQgIgIgEgKQgFAKgHAIQgVAYgkAAQgkAAgWgYIgKgNIAAAiIhJAAIAAggIgJALQgVAYgkAAQgkAAgWgYIgBgCIAAAXIifAAIAAgzIA+g+IADgFIg/AAIgDgLIgCgEIAAgCQgBggAWgWQAWgXAjAAQAjAAAWATQALAKAFANQAFgKAHgIQAWgYAjAAQAlAAAVAYQAVAYAAAqIAAAjIgBASIA0AAIgBgSIAAgjQAAgqAVgYQAVgYAkAAQAlAAAVAYQAHAIAFAKQAEgKAHgIQAWgYAkAAQAkAAAWAYQAVAYAAAqIAAAjQAAArgVAXQgVAYglAAQgkAAgVgYgADxgUIAAApQAAAPADAFIABAAQACgFAAgPIAAgpQAAgRgCgDIgBAAIAAAAQgDAFAAAPgABmgUIAAApQAAARADADIABAAQADgDAAgRIAAgpQAAgRgDgDIAAAAIgBAAQgDAGAAAOgAhpgUIAAApQAAARADADIABAAQADgDAAgRIAAgpQAAgRgDgDIAAAAIgBAAQgDAGAAAOgAizAnQgBgKAAgLIAAgLQgJAMgTAUIAdAAIAAAAgAj3geIAAAHIADgEQADgFAAgDIgBgFIgCAAQgDAEAAAGg");
	this.shape_19.setTransform(118.1,13);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8B4023").s().p("Ag0AhIAAhBIBqAAIAABBg");
	this.shape_20.setTransform(75.9,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8B4023").s().p("AB0BUQgHgIgFgKQgEAKgHAIQgWAYgkAAQgjAAgVgYQgFgFgEgIIAAAiIhMAAIAAgkQgGAJgHAHQgZAXgkAAQgKAAgNgDQgNgCgIgEIgNgFIAJg9IgGgFQgSgWAAggQAAghAWgYQAXgYAiAAQAjAAAWAZQAWAZAAAoIgBA1IA2AAQgBgIAAgKIAAgjQAAgqAVgYQAVgYAjAAQAkAAAWAYQAHAIAEAKQAFgKAHgIQAWgYAkAAQAkAAAVAYQAWAYAAAqIAAAjQAAAqgWAYQgVAYgkAAQgkAAgWgYgACqgUIAAApQAAARADADIABAAQADgFAAgPIAAgpQAAgRgDgDIAAAAIgBAAQgDAGAAAOgAAggUIAAApQAAAPACAFIABAAQADgDAAgRIAAgpQAAgRgDgDIAAAAIgBAAQgCAFAAAPgAiwgaQAAAJADAFIADgBIAAgJQAAgNgDgEQgDAFAAAIg");
	this.shape_21.setTransform(40.6,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8B4023").s().p("AgQBrIAAiGIgoAAIAAg9IBxgSIAADVg");
	this.shape_22.setTransform(7.9,12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B4023").s().p("AgCBIIAAgnIgJAnIguAAIgJggIgJAgIguAAIgiiQIA3AAIAGAcIAIgcIApAAIAHAcIAGgcIB9AAQAZABAQAKQASAMAAAZQAAAMgGAJIACADQAIAKAAAOQAAAYgRANQgPALgZAAgABeAXIAIAAIAAgBIgIAAg");
	this.shape_23.setTransform(170,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.7,23.8);


(lib.setiapjumat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBGIAAhyIglAAIAAgZIBpAAIAAAZIglAAIAAByg");
	this.shape.setTransform(147.8,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeBGIgIgbIgrAAIgIAbIghAAIAuiLIAhAAIAuCLgAgOARIAcAAIgOgwIAAAAg");
	this.shape_1.setTransform(136.8,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBGIADhhIgBAAIgiBhIgUAAIghhgIgBAAIADBgIghAAIAAiLIArAAIAfBgIAAAAIAfhgIAsAAIAACLg");
	this.shape_2.setTransform(121.6,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA6QgQgOAAgYIAAhaIAhAAIAABaQAAANAHAHQAGAGALAAQAMAAAGgGQAHgHAAgNIAAhaIAhAAIAABaQAAAYgQAOQgRANgZAAQgZAAgQgNg");
	this.shape_3.setTransform(106.1,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjA8QgNgLABgWIAAAAIAgAAQAAAKAEAFQAGAEAFAAQAGAAAFgFQAFgHAAgJIAAhfIAhAAIAABfQAAAWgOAMQgOAMgVAAQgWAAgNgLg");
	this.shape_4.setTransform(93.2,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA4AAQAaAAANANQAQANAAAUQAAAWgQAKQgNAMgaAAIgWAAIAAAxgAgVgBIAWAAQALgBAFgGQAFgFABgKQgBgJgFgGQgFgGgLAAIgWAAg");
	this.shape_5.setTransform(78.5,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeBGIgIgbIgrAAIgIAbIghAAIAuiLIAhAAIAuCLgAgNARIAbAAIgOgwIAAAAg");
	this.shape_6.setTransform(65.5,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBGIAAiLIAfAAIAACLg");
	this.shape_7.setTransform(56,26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBGIAAhyIglAAIAAgZIBpAAIAAAZIglAAIAAByg");
	this.shape_8.setTransform(47.5,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBGIAAiLIBgAAIAAAZIhAAAIAAAeIA2AAIAAAXIg2AAIAAAkIBAAAIAAAZg");
	this.shape_9.setTransform(36.4,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA8QgSgMABgWIAAgBIAgAAQAAAMAHAFQAGAGALgBQAKAAAGgDQAFgFAAgGQAAgHgFgFQgGgEgMgFQgZgIgNgIQgNgJAAgTQAAgRAQgLQAPgLAWAAQAXAAAPAMQAQAMgBATIAAABIggAAQAAgJgGgFQgGgGgKABQgIgBgFAFQgGAEAAAHQAAAGAGADQAIAGALAEQAZAIALAHQAMALAAATQAAASgOALQgOAKgZAAQgVAAgSgMg");
	this.shape_10.setTransform(24.1,26.5);

	this.instance = new lib.SETIAPJUMAT_1();
	this.instance.parent = this;
	this.instance.setTransform(87.7,28.4,1,1,0,0,0,68,9.9);
	this.instance.alpha = 0.359;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AtQkLIahBDIhOGnI32Atg");
	this.shape_11.setTransform(84.9,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.9,53.7);


// stage content:
(lib.rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// selengkapnya
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(150.1,102,1,1,0,0,0,82.5,19.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({alpha:1},5).to({alpha:0.648},5).to({alpha:1},5).to({alpha:0.648},5).to({alpha:1},5).to({alpha:0.648},5).to({alpha:1},5).wait(60).to({alpha:0.012},5).to({_off:true},1).wait(5));

	// 1920
	this.instance_1 = new lib._1920();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,124.1,1,1,0,0,0,92.8,11.9);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164).to({_off:false},0).to({alpha:1},11).wait(49).to({alpha:0.012},5).to({_off:true},1).wait(105));

	// setiap jumat
	this.instance_2 = new lib.setiapjumat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,74.1,0.328,0.328,0,0,0,85,26.8);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({regX:84.9,scaleX:1,scaleY:1,x:150,alpha:1},10).wait(60).to({alpha:0.012},5).to({_off:true},1).wait(105));

	// trax 2
	this.instance_3 = new lib.trax();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,126,1,1,0,0,0,68.5,24);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({alpha:1},11).wait(48).to({alpha:0.012},5).to({_off:true},1).wait(180));

	// dengarkan
	this.instance_4 = new lib.dengarkan();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-107.4,76.1,1,1,0,0,0,101.6,19.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85).to({_off:false},0).to({x:150},10).wait(54).to({alpha:0.012},5).to({_off:true},1).wait(180));

	// kompak
	this.instance_5 = new lib.kompak();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,96.9,0.511,0.511,0,0,0,56.9,53.2);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({alpha:1},5).to({regX:57,scaleX:0.67,scaleY:0.67,rotation:15,x:150.1},5).to({regX:57.1,regY:53.4,scaleX:0.76,scaleY:0.76,rotation:-15},4).to({regX:56.9,regY:53.1,scaleX:1,scaleY:1,rotation:0,x:150,y:96.8},6).wait(51).to({alpha:0.012},5).to({_off:true},1).wait(249));

	// announcer
	this.instance_6 = new lib.announcer();
	this.instance_6.parent = this;
	this.instance_6.setTransform(99.5,300.5,1,1,0,0,0,78,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:205.5},9).wait(326));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9A1QgLgHAAgTIAAgIIAfAAQAEAAABAFQABAGAEACQADABAHAAIAxAAIAGgCQAEgDAAgFQAAgIgKgBIhFgBQgVgBgHgNIgCgJIgBgKIABgKQABgLAHgHQAHgIAJgBIAJgBIA9AAQAcAAAKAKQAHAGAAASIAAAEIgfAAQgFAAAAgFQgBgHgQAAIgqAAQgEAAgDADQgDADAAAEIAAACQABAEADABQADADADAAIBFABQAbACADAVIABAKIAAAKQgBAKgIAIQgGAGgKADIhKAAQgaAAgJgGg");
	this.shape.setTransform(99.1,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9A1QgLgHAAgTIAAgIIAfAAQAEAAABAFQABAGADACQADABAIAAIAxAAIAGgCQADgDAAgFQAAgIgJgBIhFgBQgVgBgHgNIgCgJIAAgUQABgLAHgHQAHgIAJgBIAIgBIA+AAQAcAAAKAKQAHAGAAASIAAAEIgfAAQgFAAAAgFQgCgHgPAAIgqAAQgEAAgDADQgDADAAAEIABACQAAAEADABQADADADAAIBFABQAaACAEAVIABAKIAAAKQgCAKgHAIQgHAGgJADIhKAAQgaAAgJgGg");
	this.shape_1.setTransform(52.5,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsA6IgEgBIgDgEIgkgkQgBgEgGABIgMAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABIAAAkQAAAFgFABIgeAAIAAgsIgUAAQgFAAgEgFQgEgDAAgGIAAgMIAhAAIAAgsIAeAAQAFAAAAAEIAAAlQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIALAAQAFgBACgDIAmgmQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAvAAIg5A2QgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIA4A3g");
	this.shape_2.setTransform(19.4,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA6IgFgBIgCgEIgjgkQgDgEgGABIgLAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIAAAkQAAAFgGABIgdAAIAAhyIAeAAQAEAAABAEIAAAlQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIAMAAQAFgBADgDIAkgmQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAIAuAAIg5A2QAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIABAAIA4A3g");
	this.shape_3.setTransform(68.2,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA6QgNAAgKgKQgKgKAAgNIAAhSIAgAAIADABIACAEIAABDQAAAGAEAEQADADAGAAIAtAAQAFAAAEgDQAEgEAAgGIAAhDIACgEQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAgAAIAABSQgBAOgJAJQgKAKgOAAg");
	this.shape_4.setTransform(83.3,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAtA5IgBgCIgJgQQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAIhBAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAIgIAPIgCADIgCAAIgjAAIA5hvQACgDADAAIApAAQADAAABADIA6BvIgiAAIgBABIgDgBgAAXANIgXgsIgUAoIgBAEIAsAAg");
	this.shape_5.setTransform(36.7,17);

	this.instance_7 = new lib.kaskuscoid();
	this.instance_7.parent = this;
	this.instance_7.setTransform(250.6,234,1,1,0,0,0,43,7.2);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1,1,0,0,0,151,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},334).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,349);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;