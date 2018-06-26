!function(t,e){"object"==typeof exports?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t)}(this,function(t){function e(t){this._targetElement=t,this._introItems=[],this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",hidePrev:!1,hideNext:!1,tooltipPosition:"bottom",tooltipClass:"",highlightClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0,keyboardNavigation:!0,showButtons:!0,showBullets:!0,showProgress:!1,scrollToElement:!0,scrollTo:"element",scrollPadding:30,overlayOpacity:.8,positionPrecedence:["bottom","top","right","left"],disableInteraction:!1,hintPosition:"top-middle",hintButtonLabel:"Got it",hintAnimation:!0}}function i(t){var e=[],i=this;if(this._options.steps)for(var o=0,r=this._options.steps.length;o<r;o++){var a=n(this._options.steps[o]);if(a.step=e.length+1,"string"==typeof a.element&&(a.element=document.querySelector(a.element)),void 0===a.element||null==a.element){var h=document.querySelector(".introjsFloatingElement");null==h&&(h=document.createElement("div"),h.className="introjsFloatingElement",document.body.appendChild(h)),a.element=h,a.position="floating"}a.scrollTo=a.scrollTo||this._options.scrollTo,void 0===a.disableInteraction&&(a.disableInteraction=this._options.disableInteraction),null!=a.element&&e.push(a)}else{var d=t.querySelectorAll("*[data-intro]");if(d.length<1)return!1;for(var o=0,u=d.length;o<u;o++){var p=d[o];if("none"!=p.style.display){var m=parseInt(p.getAttribute("data-step"),10),f=this._options.disableInteraction;void 0!==p.getAttribute("data-disable-interaction")&&(f=!!p.getAttribute("data-disable-interaction")),m>0&&(e[m-1]={element:p,intro:p.getAttribute("data-intro"),step:parseInt(p.getAttribute("data-step"),10),tooltipClass:p.getAttribute("data-tooltipClass"),highlightClass:p.getAttribute("data-highlightClass"),position:p.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:p.getAttribute("data-scrollTo")||this._options.scrollTo,disableInteraction:f})}}for(var b=0,o=0,u=d.length;o<u;o++){var p=d[o];if(null==p.getAttribute("data-step")){for(;;){if(void 0===e[b])break;b++}var f=this._options.disableInteraction;void 0!==p.getAttribute("data-disable-interaction")&&(f=!!p.getAttribute("data-disable-interaction")),e[b]={element:p,intro:p.getAttribute("data-intro"),step:b+1,tooltipClass:p.getAttribute("data-tooltipClass"),highlightClass:p.getAttribute("data-highlightClass"),position:p.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:p.getAttribute("data-scrollTo")||this._options.scrollTo,disableInteraction:f}}}}for(var g=[],v=0;v<e.length;v++)e[v]&&g.push(e[v]);if(e=g,e.sort(function(t,e){return t.step-e.step}),i._introItems=e,x.call(i,t)){l.call(i);var y=t.querySelector(".introjs-skipbutton"),_=t.querySelector(".introjs-nextbutton");i._onKeyDown=function(e){if(27===e.keyCode&&1==i._options.exitOnEsc)c.call(i,t);else if(37===e.keyCode)s.call(i);else if(39===e.keyCode)l.call(i);else if(13===e.keyCode){var n=e.target||e.srcElement;n&&n.className.indexOf("introjs-prevbutton")>0?s.call(i):n&&n.className.indexOf("introjs-skipbutton")>0?(i._introItems.length-1==i._currentStep&&"function"==typeof i._introCompleteCallback&&i._introCompleteCallback.call(i),c.call(i,t)):l.call(i),e.preventDefault?e.preventDefault():e.returnValue=!1}},i._onResize=function(t){i.refresh.call(i)},window.addEventListener?(this._options.keyboardNavigation&&window.addEventListener("keydown",i._onKeyDown,!0),window.addEventListener("resize",i._onResize,!0)):document.attachEvent&&(this._options.keyboardNavigation&&document.attachEvent("onkeydown",i._onKeyDown),document.attachEvent("onresize",i._onResize))}return!1}function n(t){if(null==t||"object"!=typeof t||void 0!==t.nodeType)return t;var e={};for(var i in t)"undefined"!=typeof jQuery&&t[i]instanceof jQuery?e[i]=t[i]:e[i]=n(t[i]);return e}function o(t){this._currentStep=t-2,void 0!==this._introItems&&l.call(this)}function r(t){this._currentStepNumber=t,void 0!==this._introItems&&l.call(this)}function l(){if(this._direction="forward",void 0!==this._currentStepNumber)for(var t=0,e=this._introItems.length;t<e;t++){var i=this._introItems[t];i.step===this._currentStepNumber&&(this._currentStep=t-1,this._currentStepNumber=void 0)}if(void 0===this._currentStep?this._currentStep=0:++this._currentStep,this._introItems.length<=this._currentStep)return"function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),void c.call(this,this._targetElement);var n=this._introItems[this._currentStep];void 0!==this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,n.element),v.call(this,n)}function s(){if(this._direction="backward",0===this._currentStep)return!1;var t=this._introItems[--this._currentStep];void 0!==this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,t.element),v.call(this,t)}function a(){if(f.call(this,document.querySelector(".introjs-helperLayer")),f.call(this,document.querySelector(".introjs-tooltipReferenceLayer")),void 0!==this._currentStep&&null!==this._currentStep){var t=document.querySelector(".introjs-helperNumberLayer"),e=document.querySelector(".introjs-arrow"),i=document.querySelector(".introjs-tooltip");h.call(this,this._introItems[this._currentStep].element,i,e,t)}return I.call(this),this}function c(t,e){var i=!0;if(void 0!=this._introBeforeExitCallback&&(i=this._introBeforeExitCallback.call(self)),e||!1!==i){var n=t.querySelectorAll(".introjs-overlay");if(n&&n.length>0)for(var o=n.length-1;o>=0;o--){var r=n[o];r.style.opacity=0,setTimeout(function(){this.parentNode&&this.parentNode.removeChild(this)}.bind(r),500)}var l=t.querySelector(".introjs-helperLayer");l&&l.parentNode.removeChild(l);var s=t.querySelector(".introjs-tooltipReferenceLayer");s&&s.parentNode.removeChild(s);var a=t.querySelector(".introjs-disableInteraction");a&&a.parentNode.removeChild(a);var c=document.querySelector(".introjsFloatingElement");c&&c.parentNode.removeChild(c),_();var h=document.querySelectorAll(".introjs-fixParent");if(h&&h.length>0)for(var o=h.length-1;o>=0;o--)h[o].className=h[o].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");window.removeEventListener?window.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown),void 0!=this._introExitCallback&&this._introExitCallback.call(self),this._currentStep=void 0}}function h(t,e,i,n,o){var r="",l,s,a,c,h;if(o=o||!1,e.style.top=null,e.style.right=null,e.style.bottom=null,e.style.left=null,e.style.marginLeft=null,e.style.marginTop=null,i.style.display="inherit",void 0!==n&&null!=n&&(n.style.top=null,n.style.left=null),this._introItems[this._currentStep])switch(l=this._introItems[this._currentStep],r="string"==typeof l.tooltipClass?l.tooltipClass:this._options.tooltipClass,e.className=("introjs-tooltip "+r).replace(/^\s+|\s+$/g,""),h=this._introItems[this._currentStep].position,"floating"!=h&&(h="auto"===h?p.call(this,t,e):p.call(this,t,e,h)),a=D(t),s=D(e),c=E(),h){case"top":if(i.className="introjs-arrow bottom",o)var m=0;else var m=15;d(a,m,s,c,e),e.style.bottom=a.height+20+"px";break;case"right":e.style.left=a.width+20+"px",a.top+s.height>c.height?(i.className="introjs-arrow left-bottom",e.style.top="-"+(s.height-a.height-20)+"px"):i.className="introjs-arrow left";break;case"left":o||1!=this._options.showStepNumbers||(e.style.top="15px"),a.top+s.height>c.height?(e.style.top="-"+(s.height-a.height-20)+"px",i.className="introjs-arrow right-bottom"):i.className="introjs-arrow right",e.style.right=a.width+20+"px";break;case"floating":i.style.display="none",e.style.left="50%",e.style.top="50%",e.style.marginLeft="-"+s.width/2+"px",e.style.marginTop="-"+s.height/2+"px",void 0!==n&&null!=n&&(n.style.left="-"+(s.width/2+18)+"px",n.style.top="-"+(s.height/2+18)+"px");break;case"bottom-right-aligned":i.className="introjs-arrow top-right";var f=0;u(a,0,s,e),e.style.top=a.height+20+"px";break;case"bottom-middle-aligned":i.className="introjs-arrow top-middle";var b=a.width/2-s.width/2;o&&(b+=5),u(a,b,s,e)&&(e.style.right=null,d(a,b,s,c,e)),e.style.top=a.height+20+"px";break;case"bottom-left-aligned":case"bottom":default:i.className="introjs-arrow top";var m=0;d(a,m,s,c,e),e.style.top=a.height+20+"px";break}}function d(t,e,i,n,o){return t.left+e+i.width>n.width?(o.style.left=n.width-i.width-t.left+"px",!1):(o.style.left=e+"px",!0)}function u(t,e,i,n){return t.left+t.width-e-i.width<0?(n.style.left=-t.left+"px",!1):(n.style.right=e+"px",!0)}function p(t,e,i){var n=this._options.positionPrecedence.slice(),o=E(),r=D(e).height+10,l=D(e).width+20,s=D(t),a="floating";return s.left+l>o.width||s.left+s.width/2-l<0?(m(n,"bottom"),m(n,"top")):(s.height+s.top+r>o.height&&m(n,"bottom"),s.top-r<0&&m(n,"top")),s.width+s.left+l>o.width&&m(n,"right"),s.left-l<0&&m(n,"left"),n.length>0&&(a=n[0]),i&&"auto"!=i&&n.indexOf(i)>-1&&(a=i),a}function m(t,e){t.indexOf(e)>-1&&t.splice(t.indexOf(e),1)}function f(t){if(t){if(!this._introItems[this._currentStep])return;var e=this._introItems[this._currentStep],i=D(e.element),n=10;k(e.element)?t.className+=" introjs-fixedTooltip":t.className=t.className.replace(" introjs-fixedTooltip",""),"floating"==e.position&&(n=0),t.setAttribute("style","width: "+(i.width+n)+"px; height:"+(i.height+n)+"px; top:"+(i.top-5)+"px;left: "+(i.left-5)+"px;")}}function b(){var t=document.querySelector(".introjs-disableInteraction");null===t&&(t=document.createElement("div"),t.className="introjs-disableInteraction",this._targetElement.appendChild(t)),f.call(this,t)}function g(t){t.setAttribute("role","button"),t.tabIndex=0}function v(t){void 0!==this._introChangeCallback&&this._introChangeCallback.call(this,t.element);var e=this,i=document.querySelector(".introjs-helperLayer"),n=document.querySelector(".introjs-tooltipReferenceLayer"),o="introjs-helperLayer",r=D(t.element);if("string"==typeof t.highlightClass&&(o+=" "+t.highlightClass),"string"==typeof this._options.highlightClass&&(o+=" "+this._options.highlightClass),null!=i){var a=n.querySelector(".introjs-helperNumberLayer"),d=n.querySelector(".introjs-tooltiptext"),u=n.querySelector(".introjs-arrow"),p=n.querySelector(".introjs-tooltip"),m=n.querySelector(".introjs-skipbutton"),v=n.querySelector(".introjs-donebutton"),C=n.querySelector(".introjs-prevbutton"),j=n.querySelector(".introjs-nextbutton");if(i.className=o,p.style.opacity=0,p.style.display="none",null!=a){var N=this._introItems[t.step-2>=0?t.step-2:0];(null!=N&&"forward"==this._direction&&"floating"==N.position||"backward"==this._direction&&"floating"==t.position)&&(a.style.opacity=0)}f.call(e,i),f.call(e,n);var k=document.querySelectorAll(".introjs-fixParent");if(k&&k.length>0)for(var E=k.length-1;E>=0;E--)k[E].className=k[E].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");_(),e._lastShowElementTimer&&clearTimeout(e._lastShowElementTimer),e._lastShowElementTimer=setTimeout(function(){null!=a&&(a.innerHTML=t.step),d.innerHTML=t.intro,p.style.display="block",h.call(e,t.element,p,u,a),e._options.showBullets&&(n.querySelector(".introjs-bullets li > a.active").className="",n.querySelector('.introjs-bullets li > a[data-stepnumber="'+t.step+'"]').className="active"),n.querySelector(".introjs-progress .introjs-progressbar").setAttribute("style","width:"+V.call(e)+"%;"),p.style.opacity=1,a&&(a.style.opacity=1),void 0!==m&&null!=m&&/introjs-donebutton/gi.test(m.className)?m.focus():void 0!==j&&null!=j&&j.focus(),y.call(e,t.scrollTo,t,d)},350)}else{var S=document.createElement("div"),x=document.createElement("div"),A=document.createElement("div"),L=document.createElement("div"),I=document.createElement("div"),T=document.createElement("div"),q=document.createElement("div"),P=document.createElement("div");relativeLayer=document.createElement("div"),S.className=o,x.className="introjs-tooltipReferenceLayer",f.call(e,S),f.call(e,x),this._targetElement.appendChild(S),this._targetElement.appendChild(x),A.className="introjs-arrow",I.className="introjs-tooltiptext",I.innerHTML=t.intro,relativeLayer.className="introjs-relativelayer",T.className="introjs-bullets",!1===this._options.showBullets&&(T.style.display="none");for(var H=document.createElement("ul"),E=0,B=this._introItems.length;E<B;E++){var O=document.createElement("li"),M=document.createElement("a");M.onclick=function(){e.goToStep(this.getAttribute("data-stepnumber"))},E===t.step-1&&(M.className="active"),g(M),M.innerHTML="&nbsp;",M.setAttribute("data-stepnumber",this._introItems[E].step),O.appendChild(M),H.appendChild(O)}T.appendChild(H),q.className="introjs-progress",!1===this._options.showProgress&&(q.style.display="none");var R=document.createElement("div");if(R.className="introjs-progressbar",R.setAttribute("style","width:"+V.call(this)+"%;"),q.appendChild(R),P.className="introjs-tooltipbuttons",!1===this._options.showButtons&&(P.style.display="none"),L.className="introjs-tooltip",L.appendChild(relativeLayer),L.appendChild(I),L.appendChild(T),L.appendChild(q),1==this._options.showStepNumbers){var z=document.createElement("span");z.className="introjs-helperNumberLayer",z.innerHTML=t.step,x.appendChild(z)}L.appendChild(A),x.appendChild(L);var j=document.createElement("a");j.onclick=function(){e._introItems.length-1!=e._currentStep&&l.call(e)},g(j),j.innerHTML=this._options.nextLabel;var C=document.createElement("a");C.onclick=function(){0!=e._currentStep&&s.call(e)},g(C),C.innerHTML=this._options.prevLabel;var m=document.createElement("a");m.className="introjs-button introjs-skipbutton",g(m),m.innerHTML=this._options.skipLabel,m.onclick=function(){e._introItems.length-1==e._currentStep&&"function"==typeof e._introCompleteCallback&&e._introCompleteCallback.call(e),c.call(e,e._targetElement)};var v=document.createElement("a");v.className="introjs-button introjs-donebutton",g(v),v.innerHTML=this._options.doneLabel,v.onclick=function(){e._introItems.length-1==e._currentStep&&"function"==typeof e._introCompleteCallback&&e._introCompleteCallback.call(e),c.call(e,e._targetElement)},relativeLayer.appendChild(m),this._introItems.length>1&&(P.appendChild(C),P.appendChild(j),P.appendChild(v)),L.appendChild(P),h.call(e,t.element,L,A,z),y.call(this,t.scrollTo,t,L)}var G=e._targetElement.querySelector(".introjs-disableInteraction");G&&G.parentNode.removeChild(G),t.disableInteraction&&b.call(e),void 0!==j&&null!=j&&j.removeAttribute("tabIndex"),void 0!==C&&null!=C&&C.removeAttribute("tabIndex"),0==this._currentStep&&this._introItems.length>1?(void 0!==m&&null!=m&&(m.className="introjs-button introjs-skipbutton"),void 0!==j&&null!=j&&(j.className="introjs-button introjs-nextbutton"),void 0!==v&&null!=v&&(v.className="introjs-button introjs-donebutton introjs-hidden"),1==this._options.hidePrev?(void 0!==C&&null!=C&&(C.className="introjs-button introjs-prevbutton introjs-hidden"),void 0!==j&&null!=j&&(j.className+=" introjs-fullbutton")):void 0!==C&&null!=C&&(C.className="introjs-button introjs-prevbutton introjs-disabled"),void 0!==C&&null!=C&&(C.tabIndex="-1"),void 0!==m&&null!=m&&(m.innerHTML=this._options.skipLabel)):this._introItems.length-1==this._currentStep||1==this._introItems.length?(void 0!==C&&null!=C&&(C.className="introjs-button introjs-prevbutton"),void 0!==v&&null!=v&&(v.className="introjs-button introjs-donebutton"),1==this._options.hideNext?(void 0!==j&&null!=j&&(j.className="introjs-button introjs-nextbutton introjs-hidden"),void 0!==C&&null!=C&&(C.className+=" introjs-fullbutton")):void 0!==j&&null!=j&&(j.className="introjs-button introjs-nextbutton introjs-disabled"),void 0!==j&&null!=j&&(j.tabIndex="-1")):(void 0!==v&&null!=v&&(v.className="introjs-button introjs-donebutton introjs-hidden wakacaw"),void 0!==m&&null!=m&&(m.className="introjs-button introjs-skipbutton"),void 0!==C&&null!=C&&(C.className="introjs-button introjs-prevbutton"),void 0!==j&&null!=j&&(j.className="introjs-button introjs-nextbutton"),void 0!==m&&null!=m&&(m.innerHTML=this._options.skipLabel)),void 0!==j&&null!=j&&j.focus(),w(t),void 0!==this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,t.element)}function y(t,e,i){if(this._options.scrollToElement){if("tooltip"===t)var n=i.getBoundingClientRect();else var n=e.element.getBoundingClientRect();if(!S(e.element)){var o=E().height,r=n.bottom-(n.bottom-n.top),l=n.bottom-o;r<0||e.element.clientHeight>o?window.scrollBy(0,n.top-(o/2-n.height/2)-this._options.scrollPadding):window.scrollBy(0,n.top-(o/2-n.height/2)+this._options.scrollPadding)}}}function _(){for(var t=document.querySelectorAll(".introjs-showElement"),e=0,i=t.length;e<i;e++){j(t[e],/introjs-[a-zA-Z]+/g)}}function w(t){if(t.element instanceof SVGElement)for(var e=t.element.parentNode;null!=t.element.parentNode&&e.tagName&&"body"!==e.tagName.toLowerCase();)"svg"===e.tagName.toLowerCase()&&C(e,"introjs-showElement introjs-relativePosition"),e=e.parentNode;C(t.element,"introjs-showElement");var i=N(t.element,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&C(t.element,"introjs-relativePosition");for(var e=t.element.parentNode;null!=e&&e.tagName&&"body"!==e.tagName.toLowerCase();){var n=N(e,"z-index"),o=parseFloat(N(e,"opacity")),r=N(e,"transform")||N(e,"-webkit-transform")||N(e,"-moz-transform")||N(e,"-ms-transform")||N(e,"-o-transform");(/[0-9]+/.test(n)||o<1||"none"!==r&&void 0!==r)&&(e.className+=" introjs-fixParent"),e=e.parentNode}}function C(t,e){if(t instanceof SVGElement){var i=t.getAttribute("class")||"";t.setAttribute("class",i+" "+e)}else t.className+=" "+e}function j(t,e){if(t instanceof SVGElement){var i=t.getAttribute("class")||"";t.setAttribute("class",i.replace(e,"").replace(/^\s+|\s+$/g,""))}else t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}function N(t,e){var i="";return t.currentStyle?i=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(i=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),i&&i.toLowerCase?i.toLowerCase():i}function k(t){var e=t.parentNode;return!(!e||"HTML"===e.nodeName)&&("fixed"==N(t,"position")||k(e))}function E(){if(void 0!=window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}function S(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom+80<=window.innerHeight&&e.right<=window.innerWidth}function x(t){var e=document.createElement("div"),i="",n=this;if(e.className="introjs-overlay",t.tagName&&"body"!==t.tagName.toLowerCase()){var o=D(t);o&&(i+="width: "+o.width+"px; height:"+o.height+"px; top:"+o.top+"px;left: "+o.left+"px;",e.setAttribute("style",i))}else i+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",e.setAttribute("style",i);return t.appendChild(e),e.onclick=function(){1==n._options.exitOnOverlayClick&&c.call(n,t)},setTimeout(function(){i+="opacity: "+n._options.overlayOpacity.toString()+";",e.setAttribute("style",i)},10),!0}function A(){var t=this._targetElement.querySelector(".introjs-hintReference");if(t){var e=t.getAttribute("data-step");return t.parentNode.removeChild(t),e}}function L(t){var e=this;if(this._introItems=[],this._options.hints)for(var i=0,o=this._options.hints.length;i<o;i++){var r=n(this._options.hints[i]);"string"==typeof r.element&&(r.element=document.querySelector(r.element)),r.hintPosition=r.hintPosition||this._options.hintPosition,r.hintAnimation=r.hintAnimation||this._options.hintAnimation,null!=r.element&&this._introItems.push(r)}else{var l=t.querySelectorAll("*[data-hint]");if(l.length<1)return!1;for(var i=0,o=l.length;i<o;i++){var s=l[i],a=s.getAttribute("data-hintAnimation");a=a?"true"==a:this._options.hintAnimation,this._introItems.push({element:s,hint:s.getAttribute("data-hint"),hintPosition:s.getAttribute("data-hintPosition")||this._options.hintPosition,hintAnimation:a,tooltipClass:s.getAttribute("data-tooltipClass"),position:s.getAttribute("data-position")||this._options.tooltipPosition})}}M.call(this),document.addEventListener?(document.addEventListener("click",A.bind(this),!1),window.addEventListener("resize",I.bind(this),!0)):document.attachEvent&&(document.attachEvent("onclick",A.bind(this)),document.attachEvent("onresize",I.bind(this)))}function I(){for(var t=0,e=this._introItems.length;t<e;t++){var i=this._introItems[t];void 0!==i.targetElement&&R.call(this,i.hintPosition,i.element,i.targetElement)}}function T(t){A.call(this);var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&(e.className+=" introjs-hidehint"),void 0!==this._hintCloseCallback&&this._hintCloseCallback.call(this,t)}function q(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&t.length>0)for(var e=0;e<t.length;e++)T.call(this,t[e].getAttribute("data-step"))}function P(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&t.length>0)for(var e=0;e<t.length;e++)H.call(this,t[e].getAttribute("data-step"));else L.call(this,this._targetElement)}function H(t){var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&(e.className=e.className.replace(/introjs\-hidehint/g,""))}function B(){var t=this._targetElement.querySelectorAll(".introjs-hint");if(t&&t.length>0)for(var e=0;e<t.length;e++)O.call(this,t[e].getAttribute("data-step"))}function O(t){var e=this._targetElement.querySelector('.introjs-hint[data-step="'+t+'"]');e&&e.parentNode.removeChild(e)}function M(){var t=this,e=document.querySelector(".introjs-hints");if(null!=e)i=e;else{var i=document.createElement("div");i.className="introjs-hints"}for(var n=0,o=this._introItems.length;n<o;n++){var r=this._introItems[n];if(!document.querySelector('.introjs-hint[data-step="'+n+'"]')){var l=document.createElement("a");g(l),function(e,i,n){e.onclick=function(e){var i=e||window.event;i.stopPropagation&&i.stopPropagation(),null!=i.cancelBubble&&(i.cancelBubble=!0),z.call(t,n)}}(l,r,n),l.className="introjs-hint",r.hintAnimation||(l.className+=" introjs-hint-no-anim"),k(r.element)&&(l.className+=" introjs-fixedhint");var s=document.createElement("div");s.className="introjs-hint-dot";var a=document.createElement("div");a.className="introjs-hint-pulse",l.appendChild(s),l.appendChild(a),l.setAttribute("data-step",n),r.targetElement=r.element,r.element=l,R.call(this,r.hintPosition,l,r.targetElement),i.appendChild(l)}}document.body.appendChild(i),void 0!==this._hintsAddedCallback&&this._hintsAddedCallback.call(this)}function R(t,e,i){var n=D.call(this,i),o=20,r=20;switch(t){default:case"top-left":e.style.left=n.left+"px",e.style.top=n.top+"px";break;case"top-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+"px";break;case"bottom-left":e.style.left=n.left+"px",e.style.top=n.top+n.height-20+"px";break;case"bottom-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+n.height-20+"px";break;case"middle-left":e.style.left=n.left+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"middle-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"middle-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"bottom-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+n.height-20+"px";break;case"top-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+"px";break}}function z(t){var e=document.querySelector('.introjs-hint[data-step="'+t+'"]'),i=this._introItems[t];void 0!==this._hintClickCallback&&this._hintClickCallback.call(this,e,i,t);var n=A.call(this);if(parseInt(n,10)!=t){var o=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div");o.className="introjs-tooltip",o.onclick=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},r.className="introjs-tooltiptext";var a=document.createElement("p");a.innerHTML=i.hint;var c=document.createElement("a");c.className="introjs-button",c.innerHTML=this._options.hintButtonLabel,c.onclick=T.bind(this,t),r.appendChild(a),r.appendChild(c),l.className="introjs-arrow",o.appendChild(l),o.appendChild(r),this._currentStep=e.getAttribute("data-step"),s.className="introjs-tooltipReferenceLayer introjs-hintReference",s.setAttribute("data-step",e.getAttribute("data-step")),f.call(this,s),s.appendChild(o),document.body.appendChild(s),h.call(this,e,o,l,null,!0)}}function D(t){var e={},i=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||i.scrollTop,r=window.pageXOffset||n.scrollLeft||i.scrollLeft;if(t instanceof SVGElement){var l=t.getBoundingClientRect();e.top=l.top+o,e.width=l.width,e.height=l.height,e.left=l.left+r}else{e.width=t.offsetWidth,e.height=t.offsetHeight;for(var s=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)s+=t.offsetLeft,a+=t.offsetTop,t=t.offsetParent;e.top=a,e.left=s}return e}function V(){return parseInt(this._currentStep+1,10)/this._introItems.length*100}function G(t,e){var i={};for(var n in t)i[n]=t[n];for(var n in e)i[n]=e[n];return i}var K="2.7.0",W=function(t){if("object"==typeof t)return new e(t);if("string"==typeof t){var i=document.querySelector(t);if(i)return new e(i);throw new Error("There is no element with given selector.")}return new e(document.body)};return W.version="2.7.0",W.fn=e.prototype={clone:function(){return new e(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){return this._options=G(this._options,t),this},start:function(){return i.call(this,this._targetElement),this},goToStep:function(t){return o.call(this,t),this},addStep:function(t){return this._options.steps||(this._options.steps=[]),this._options.steps.push(t),this},addSteps:function(t){if(t.length){for(var e=0;e<t.length;e++)this.addStep(t[e]);return this}},goToStepNumber:function(t){return r.call(this,t),this},nextStep:function(){return l.call(this),this},previousStep:function(){return s.call(this),this},exit:function(t){return c.call(this,this._targetElement,t),this},refresh:function(){return a.call(this),this},onbeforechange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforechange was not a function");return this._introBeforeChangeCallback=t,this},onchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=t,this},onafterchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onafterchange was not a function");return this._introAfterChangeCallback=t,this},oncomplete:function(t){if("function"!=typeof t)throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=t,this},onhintsadded:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintsadded was not a function.");return this._hintsAddedCallback=t,this},onhintclick:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclick was not a function.");return this._hintClickCallback=t,this},onhintclose:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclose was not a function.");return this._hintCloseCallback=t,this},onexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=t,this},onbeforeexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforeexit was not a function.");return this._introBeforeExitCallback=t,this},addHints:function(){return L.call(this,this._targetElement),this},hideHint:function(t){return T.call(this,t),this},hideHints:function(){return q.call(this),this},showHint:function(t){return H.call(this,t),this},showHints:function(){return P.call(this),this},removeHints:function(){return B.call(this),this},removeHint:function(t){return O.call(this,t),this},showHintDialog:function(t){return z.call(this,t),this}},t.introJs=W,W});