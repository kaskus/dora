!function(){function e(){var e,s,u,l,d;for(s=document.querySelectorAll("img.sprite"),l=s.length;l--;){for(e={},e.effects=[],e.img=s[l],e.offset=s[l].offsetWidth/2,u=s[l].getAttribute("data-collision").split(","),d=u.length;d--;){var h=u[d].split(":");e.effects.push({effect:h[0],value:parseInt(h[1])})}e.type=s[l].getAttribute("data-type"),e.frames=s[l].getAttribute("data-frames"),Z.push(e)}ee=Z.length,de=+$("#characters").getAttribute("data-countstart"),he=+$("#characters").getAttribute("data-newsprite"),x.tabIndex=-1,x.focus(),x.addEventListener("keydown",i,!1),x.addEventListener("keyup",a,!1),x.addEventListener("touchstart",n,!1),x.addEventListener("touchend",o,!1),x.addEventListener("click",t,!1),localStorage.html5catcher?le=JSON.parse(localStorage.html5catcher):(le={last:0,high:0},localStorage.html5catcher=JSON.stringify(le)),r()}function t(e){var t=e.target;"gameover"===Q&&"replay"===t.id&&(Ee.play(),r()),"next"===t.className&&instructionsnext(),"endinstructions"===t.className&&instructionsdone(),"instructionbutton"===t.id&&showinstructions(),"pilih-karakter-button"===t.id&&(u(),Ee.play()),"playbutton"===t.id&&(f(),Ee.play()),"isiformbutton"===t.id&&(l(),Ee.play()),"submitbutton"===t.id&&(c(),Ee.play()),"reza-char-label"===t.id&&(R.checked=!0,ze.play(),U="reza",playbutton.disabled=!1),"chelsea-char-label"===t.id&&(W.checked=!0,Be.play(),U="chelsea",playbutton.disabled=!1),e.preventDefault()}function i(e){39===e.keyCode?(ce=!0,d()):37===e.keyCode&&(fe=!0,d())}function a(e){39===e.keyCode?(ce=!1,d()):37===e.keyCode&&(fe=!1,d())}function n(e){"playing"===Q&&e.preventDefault(),e.target===H?ce=!0:e.target===S&&(fe=!0)}function o(e){"playing"===Q&&e.preventDefault(),e.target===H?ce=!1:e.target===S&&(fe=!1)}function s(e){var t=e.clientX-x.offsetLeft;t<ne&&(t=ne),t>oe-ne&&(t=oe-ne),V=t}function r(){k(I),Q="intro",R.checked=!1,W.checked=!1,Se.play(),qe.pause(),Fe.pause(),Fe.currentTime=0,playbutton.disabled=!0;var e=I.querySelectorAll("output");e[0].innerHTML=le.last,e[1].innerHTML=le.high,h()}function u(){k(E),Q="pilih-karakter"}function l(){k(L),document.getElementById("step1").style.display="block",document.getElementById("step2").style.display="none"}function d(){document.getElementById("tutorial").style.display="none"}function h(){document.getElementById("tutorial").style.display="block"}function c(){document.getElementById("step1").style.display="none",document.getElementById("step2").style.display="block"}function f(){for(k(T),Q="playing",document.body.className="playing","chelsea"===U?(M.src="images/chelsea-figure.png",M.height=152,M.width=129,xe=Ae,Ie=Me):"reza"===U&&(M.src="images/reza-figure.png",M.height=164,M.width=120,xe=ke,Ie=Te),oe=T.offsetWidth,se=T.offsetHeight,z.width=oe,z.height=se,ae=se-M.offsetHeight,ne=M.offsetWidth/2,V=oe/2,Y=[],ue=0;ue<de;ue++)Y.push(w(!0));X.energy=P,X.score=0,re=0,K=0,C.innerHTML=P,N.innerHTML=X.score,p(),Se.pause(),Se.currentTime=0,Ne.play(),pe.load(),me.load(),ye.load(),ve.load(),Ie.load(),Le.load(),qe.load()}function p(){for(_.clearRect(0,0,oe,se),j=Y.length,ue=0;ue<j;ue++)Y[ue].render(),Y[ue].update();C.innerHTML=X.energy,N.innerHTML=X.score,X.score>=500&&X.score<1e3?(Ne.pause(),Ne.currentTime=0,Ce.play()):X.score>=1e3&&X.score<1500?(Ce.pause(),Ce.currentTime=0,Fe.play()):X.score>=1500&&(Fe.pause(),Fe.currentTime=0,He.play());var e=X.energy,t=F.childNodes.length,i=e-t,a=document.createElement("LI");if(i>0)for(;i--;)F.appendChild(a);else for(i=Math.abs(i);i--;)"undefined"!=typeof F.childNodes[0]?F.removeChild(F.childNodes[0]):y();X.score/he>re&&(Y.push(w(!1)),re++),ce&&g(),fe&&m(),_.save(),_.translate(V-ne,ae),_.drawImage(M,0,0),_.restore(),X.energy=Math.min(X.energy,3),X.energy>0?requestAnimationFrame(p):y()}function m(){V-=G,V<ne&&(V=ne)}function g(){V+=G,V>oe-ne&&(V=oe-ne)}function y(){document.body.className="gameover",k(B),Q="gameover";var e=X.score;B.querySelector("output").innerHTML=e,le.last=e,e>le.high&&(J.innerHTML=J.getAttribute("data-highscore"),le.high=e),localStorage.html5catcher=JSON.stringify(le),Ne.pause(),Ne.currentTime=0,Ce.pause(),Ce.currentTime=0,Fe.pause(),Fe.currentTime=0,He.pause(),He.currentTime=0,setTimeout(function(){qe.play()},4e3),Le.play(),_gaq.push(["_trackEvent","cendolfactory","levelincrease","level_"+re])}function v(){this.px=0,this.py=0,this.vx=0,this.vy=0,this.goodguy=!1,this.height=0,this.width=0,this.lebarAsli=0,this.effects=[],this.img=null,this.frameIndex=0,this.tickCount=0,this.ticksPerFrame=3,this.frames=null,this.update=function(){if(this.px+=this.vx,this.py+=this.vy,~~(this.py+10)>ae&&V-ne<this.px&&this.px<V+ne)if(this.py=-200,ue=this.effects.length,"good"===this.type)for(;ue--;)X[this.effects[ue].effect]+=this.effects[ue].value,ge[Math.floor(Math.random()*ge.length)].play();else if("donat"===this.type)for(;ue--;)"energy"===this.effects[ue].effect&&(X[this.effects[ue].effect]+=this.effects[ue].value,Ie.play());else for(;ue--;)"energy"===this.effects[ue].effect&&(X[this.effects[ue].effect]+=this.effects[ue].value,xe[Math.floor(Math.random()*xe.length)].play());if(this.tickCount+=1,this.tickCount>this.ticksPerFrame&&(this.tickCount=0,this.frameIndex<this.frames-1?this.frameIndex+=1:this.frameIndex=0),(this.px>oe-this.offset||this.px<this.offset)&&(this.vx=-this.vx),this.py>se+100){if("good"===this.type)for(ue=this.effects.length;ue--;){X.energy--;break}b(this,!1)}},this.render=function(){_.save(),_.translate(this.px,this.py),_.translate(this.width/this.frames*-.5,this.height*-.5),_.drawImage(this.img,this.frameIndex*this.width/this.frames,0,this.width/this.frames,this.height,0,0,this.width/this.frames,this.height),_.restore()}}function w(e){var t=new v;return b(t,e),t}function b(e,t){if(t)var i=ee-1;else var i=~~A(0,ee);return"donat"===Z[i].type&&Math.min(X.energy,3)===maxnyawa?b(e):(e.img=Z[i].img,e.frames=Z[i].frames,e.height=e.img.offsetHeight,e.width=e.img.offsetWidth,e.type=Z[i].type,e.effects=Z[i].effects,e.offset=Z[i].offset,e.py=-100,e.lebarAsli=e.width/e.frames,e.px=A(0+e.lebarAsli,oe-e.lebarAsli),e.vx=A(-1,2),void(e.vy=A(1,5)))}function $(e){return document.querySelector(e)}function A(e,t){return Math.random()*(t-e)+e}function k(e){ie&&(ie.className=""),e.className="current",ie=e}var x=$("#container"),T=$("#playfield"),M=$("#player"),I=$("#intro"),L=$("#isiform"),q=$("#instructions"),E=$("#pilih-karakter"),S=$(".left"),H=$(".right"),N=$("#score output"),C=$("#energy output"),F=$("#energy ul"),z=$("canvas"),B=$("#gameover"),R=$("#reza-char"),W=$("#chelsea-char"),D=$("#playbutton"),J=B.querySelector(".message"),O=document.querySelectorAll("li.introdeck"),_=z.getContext("2d"),P=+C.innerHTML;maxnyawa=3;var X={energy:P,score:0},G=+M.getAttribute("data-increase"),K=0,Q=null,U=null,V=0,Y=[],Z=[],ee=0,te=0,ie=null,ae=0,ne=0,oe=0,se=0,re=0,ue=0,le=null,de=0,he=500,ce=!1,fe=!1,pe=new Audio("audio/cendolsound.mp3"),me=new Audio("audio/cendolsound.mp3"),ge=[pe,me],ye=new Audio("audio/bata-aduh.mp3"),ve=new Audio("audio/bata-ouch.mp3"),we=new Audio("audio/bata-aduh2.mp3"),be=new Audio("audio/bata-aw.mp3"),Ae=[ye,ve],ke=[we,be],xe,Te=new Audio("audio/lifehp-reza.mp3"),Me=new Audio("audio/lifehp-chelsea.mp3"),Ie,Le=new Audio("audio/ending.mp3");Le.volume=.75;var qe=new Audio("audio/bg-sound4.mp3");qe.volume=.75,qe.loop=!0;var Ee=new Audio("audio/beep.mp3"),Se=new Audio("audio/bg-sound.mp3");Se.loop=!0,Se.volume=.75,Se.play();var He=new Audio("audio/bg-sound.mp3");He.loop=!0,He.volume=.75;var Ne=new Audio("audio/bg-sound2.mp3");Ne.loop=!0,Ne.volume=.75;var Ce=new Audio("audio/bg-sound3.mp3");Ce.loop=!0,Ce.volume=.75;var Fe=new Audio("audio/bg-sound4.mp3");Fe.loop=!0,Fe.volume=.75;var ze=new Audio("audio/haireza.mp3"),Be=new Audio("audio/haiakuchelsea.mp3");window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}()),e()}();