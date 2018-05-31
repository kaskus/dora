/*!

   Audio plugin for Flowplayer HTML5

   Copyright (c) 2016-2017, Flowplayer Drive Oy

   Released under the MIT License:
   http://www.opensource.org/licenses/mit-license.php

   Requires Flowplayer HTML5 version 6.x or greater
   v1.0.0-14-gc95d970

*/
!function(){"use strict";var o=function(o){o(function(e,n){var i=o.extend(e.conf,e.conf.clip),s=o.common;if(i.audioOnly||s.hasClass(n,"is-audio-only")){var a=o.bean,f=0===o.version.indexOf("6."),c=s.find(".fp-controls",n)[0],t=s.find(".fp-timeline",n)[0],d="background-color",l=f?["fp-embed","fp-fullscreen","fp-title"]:["fp-pause","fp-play","fp-speed-flash"],u=["is-audio-only-7x","is-audio-only","is-mouseover"];f&&(u=u.slice(1).concat(["fixed-controls","play-button"])),l.concat(["fp-ratio","fp-help","fp-speed","fp-waiting"]).forEach(function(o){s.find("."+o,n).forEach(s.removeNode)}),a.off(n,"mouseenter"),a.off(n,"mouseleave"),o.extend(e.conf,{fullscreen:!1,ratio:!1,tooltip:!1}),u.forEach(function(o){s.addClass(n,o)}),s.removeClass(n,"is-mouseout"),f?s.css(n,"margin-bottom",s.css(c,"height")):(/^(transparent|rgba\(0,\ 0,\ 0,\ 0\))$/.test(s.css(c,d))&&s.css(c,d,"#bbb"),s.css(n,"height",s.height(c)+30+"px"),s.css(n,"margin-top","-30px")),f||(a.on(s.find(".fp-ui",n)[0],"click",function(o){s.hasClass(o.target,"fp-ui")&&o.stopPropagation()}),e.on("load.audioonly",function(){s.css(t,d,"")})),e.on("unload.audioonly",function(){s.find(".fp-elapsed",n)[0].innerHTML="00:00",f||s.css(t,d,s.css(c,d))})}else{var r=s.find(".fp-player",n)[0],p=function(){s.removeClass(n,"is-audio"),s.css(r,"background-image","")};e.on("ready.audio",function(o,e,a){if(a.audio||!a.index&&i.audio){var f=a&&a.coverImage||!a.index&&i.coverImage;s.addClass(n,"is-audio"),f&&s.css(r,"background-image","url("+f+")")}else p()}).on("unload.audio",p)}})};"object"==typeof module&&module.exports?module.exports=o:window.flowplayer&&o(window.flowplayer)}();