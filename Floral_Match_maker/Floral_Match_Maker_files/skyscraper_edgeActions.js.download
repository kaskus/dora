
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_playAgainText}","click",function(sym,e){sym.stop("gameStart");var existingBoard=sym.getVariable("gameBoard");existingBoard.deleteSymbol();var newBoard=sym.createChildSymbol("gameBoard","Stage",1);newBoard.getSymbolElement().css("left",38);newBoard.getSymbolElement().css("top",110);sym.setVariable("gameBoard",newBoard);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var gameBoard=sym.createChildSymbol("gameBoard","Stage",1);gameBoard.getSymbolElement().css("left",38);gameBoard.getSymbolElement().css("top",110);sym.setVariable("gameBoard",gameBoard);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'cascadingFlowers'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var flowerNames=["falling0","falling1","falling2","falling3","falling4","falling5","falling6"];for(var i=0;i<7;i++){var hue='rgb('+(Math.floor((256)*Math.random())+50)+','+(Math.floor((256)*Math.random())+50)+','+(Math.floor((256)*Math.random())+50)+')';sym.getSymbol(flowerNames[i]).getSymbol("flower").getSymbol("simpleFlower").$("background").css("background-color",hue);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.getSymbol("falling1").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.getSymbol("falling6").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.getSymbol("falling4").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.getSymbol("falling2").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.getSymbol("falling0").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.getSymbol("falling5").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3750,function(sym,e){sym.getSymbol("falling3").play("center");});
//Edge binding end
})("cascadingFlowers");
//Edge symbol end:'cascadingFlowers'

//=========================================================

//Edge symbol: 'fallingFlower'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2043,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",943,function(sym,e){sym.play();});
//Edge binding end
})("swingingFlower");
//Edge symbol end:'swingingFlower'

//=========================================================

//Edge symbol: 'flower'
(function(symbolName){})("flower");
//Edge symbol end:'flower'

//=========================================================

//Edge symbol: 'decorateTheOutdoorsText'
(function(symbolName){})("decorateTheOutdoorsText");
//Edge symbol end:'decorateTheOutdoorsText'

//=========================================================

//Edge symbol: 'background'
(function(symbolName){})("background");
//Edge symbol end:'background'

//=========================================================

//Edge symbol: 'simpleFlower'
(function(symbolName){})("simpleFlower");
//Edge symbol end:'simpleFlower'

//Edge symbol: 'gameBoard'
(function(symbolName){var boardArray=["flower0","flower1","flower2","flower3","flower4","flower5","flower6","flower7","flower8","flower9","flower10","flower11","flower13","flower14","flower15","flower16","flower17","flower18","flower19","flower20","flower21","flower22","flower23","flower24"];var colorArray=["#989AE8","#D3A7FF","#B4DBFF","#98E8E6","#F55A76","#A384AD","#FFFFBF","#FFB6FF","#BEF299","#CCCCFF","#FFD7A2","#CCFFF8"];function setUpBoard(currSym){currSym.setVariable("matched",0);var matchArray=new Array();var colorHashObject=new Object();for(var i=0;i<12;i++){colorHashObject[i.toString()]=0;}
while(matchArray.length<24){var randNum=Math.floor(Math.random()*100)%12;if(colorHashObject[randNum.toString()]<2){colorHashObject[randNum.toString()]+=1;matchArray.push(randNum);}
else{continue;}}
return matchArray;}
function colorizeBoard(currSym,randomColors){for(var i=0;i<24;i++){var currColor=randomColors[i];currSym.getSymbol(boardArray[i]).setVariable("color",colorArray[currColor]);currSym.getSymbol(boardArray[i]).$("background").css("background-color",colorArray[currColor]);}}
function newBoard(mySym){var randomColors=setUpBoard(mySym);colorizeBoard(mySym,randomColors);}
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){newBoard(sym);sym.getSymbol("flower12").$("background").css("background-color","#ffffff");sym.setVariable("firstClickObject",null);});
//Edge binding end
})("gameBoard");
//Edge symbol end:'gameBoard'

//=========================================================

//Edge symbol: 'simpleFlower_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_question}","click",function(sym,e){sym.play("reveal");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3111,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",696,function(sym,e){sym.stop();var clicked=sym.getParentSymbol().getVariable("firstClickObject");if(clicked==null){sym.getParentSymbol().setVariable("firstClickObject",sym);}
else{var clickedColor=clicked.getVariable("color");var currColor=sym.getVariable("color");if(clickedColor==currColor){clicked.play("spin");sym.play("spin");var matched=sym.getParentSymbol().getVariable("matched");if(matched>=11){sym.getComposition().getStage().play("gameWin");}
else{matched++;sym.getParentSymbol().setVariable("matched",matched);}}
else{sym.play("flipback");clicked.play("flipback");}
sym.getParentSymbol().setVariable("firstClickObject",null);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1928,function(sym,e){sym.stop();});
//Edge binding end
})("gameFlower");
//Edge symbol end:'gameFlower'
})(jQuery,AdobeEdge,"EDGE-38094116");