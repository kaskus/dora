!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var t=this||n;if(e=parseFloat(e),t.ctx||d(),void 0!==e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var o=0;o<t._howls.length;o++)if(!t._howls[o]._webAudio)for(var r=t._howls[o]._getSoundIds(),a=0;a<r.length;a++){var i=t._howls[o]._soundById(r[a]);i&&i._node&&(i._node.volume=i._volume*e)}return t}return t._volume},mute:function(e){var t=this||n;t.ctx||d(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,n.ctx.currentTime);for(var o=0;o<t._howls.length;o++)if(!t._howls[o]._webAudio)for(var r=t._howls[o]._getSoundIds(),a=0;a<r.length;a++){var i=t._howls[o]._soundById(r[a]);i&&i._node&&(i._node.muted=!!e||i._muted)}return t},unload:function(){for(var e=this||n,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,d()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"running":"running",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var t=new Audio;void 0===t.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,t=null;try{t="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!t||"function"!=typeof t.canPlayType)return e;var o=t.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!o&&!t.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!o,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_enableMobileAudio:function(){var e=this||n,t=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator&&e._navigator.userAgent),o=!!("ontouchend"in window||e._navigator&&e._navigator.maxTouchPoints>0||e._navigator&&e._navigator.msMaxTouchPoints>0);if(!e._mobileEnabled&&e.ctx&&(t||o)){e._mobileEnabled=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var r=function(){n._autoResume();var t=e.ctx.createBufferSource();t.buffer=e._scratchBuffer,t.connect(e.ctx.destination),void 0===t.start?t.noteOn(0):t.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),t.onended=function(){t.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchstart",r,!0),document.removeEventListener("touchend",r,!0)}};return document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",r,!0),e}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio)for(var o=0;o<e._howls[t]._sounds.length;o++)if(!e._howls[t]._sounds[o]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,t=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};t.prototype={init:function(e){var t=this;return n.ctx||d(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhrWithCredentials=e.xhrWithCredentials||!1,t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onresume=[],t._webAudio=n.usingWebAudio&&!t._html5,void 0!==n.ctx&&n.ctx&&n.mobileAutoEnable&&n._enableMobileAudio(),n._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t.load(),t},load:function(){var e=this,t=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var i,u;if(e._format&&e._format[r])i=e._format[r];else{if("string"!=typeof(u=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}i=/^data:audio\/([^;,]+);/i.exec(u),i||(i=/\.([^.]+)$/.exec(u.split("?",1)[0])),i&&(i=i[1].toLowerCase())}if(i||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),i&&n.codecs(i)){t=e._src[r];break}}return t?(e._src=t,e._state="loading","https:"===window.location.protocol&&"http:"===t.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new o(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,t){var o=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===o._state&&!o._sprite[e])return null;if(void 0===e){e="__default";for(var a=0,i=0;i<o._sounds.length;i++)o._sounds[i]._paused&&!o._sounds[i]._ended&&(a++,r=o._sounds[i]._id);1===a?e=null:r=null}}var u=r?o._soundById(r):o._inactiveSound();if(!u)return null;if(r&&!e&&(e=u._sprite||"__default"),"loaded"!==o._state){u._sprite=e,u._ended=!1;var s=u._id;return o._queue.push({event:"play",action:function(){o.play(s)}}),s}if(r&&!u._paused)return t||o._loadQueue("play"),u._id;o._webAudio&&n._autoResume();var d=Math.max(0,u._seek>0?u._seek:o._sprite[e][0]/1e3),_=Math.max(0,(o._sprite[e][0]+o._sprite[e][1])/1e3-d),l=1e3*_/Math.abs(u._rate);u._paused=!1,u._ended=!1,u._sprite=e,u._seek=d,u._start=o._sprite[e][0]/1e3,u._stop=(o._sprite[e][0]+o._sprite[e][1])/1e3,u._loop=!(!u._loop&&!o._sprite[e][2]);var c=u._node;if(o._webAudio){var p=function(){o._refreshBuffer(u);var e=u._muted||o._muted?0:u._volume;c.gain.setValueAtTime(e,n.ctx.currentTime),u._playStart=n.ctx.currentTime,void 0===c.bufferSource.start?u._loop?c.bufferSource.noteGrainOn(0,d,86400):c.bufferSource.noteGrainOn(0,d,_):u._loop?c.bufferSource.start(0,d,86400):c.bufferSource.start(0,d,_),l!==1/0&&(o._endTimers[u._id]=setTimeout(o._ended.bind(o,u),l)),t||setTimeout(function(){o._emit("play",u._id)},0)};"running"===n.state?p():(o.once("resume",p),o._clearTimer(u._id))}else{var f=function(){c.currentTime=d,c.muted=u._muted||o._muted||n._muted||c.muted,c.volume=u._volume*n.volume(),c.playbackRate=u._rate;try{var r=c.play();if("undefined"!=typeof Promise&&r instanceof Promise){o._playLock=!0;var a=function(){o._playLock=!1,t||o._emit("play",u._id)};r.then(a,a)}else t||o._emit("play",u._id);if(c.playbackRate=u._rate,c.paused)return void o._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");"__default"!==e||u._loop?o._endTimers[u._id]=setTimeout(o._ended.bind(o,u),l):(o._endTimers[u._id]=function(){o._ended(u),c.removeEventListener("ended",o._endTimers[u._id],!1)},c.addEventListener("ended",o._endTimers[u._id],!1))}catch(e){o._emit("playerror",u._id,e)}},m=window&&window.ejecta||!c.readyState&&n._navigator.isCocoonJS;if(c.readyState>=3||m)f();else{var v=function(){f(),c.removeEventListener(n._canPlayEvent,v,!1)};c.addEventListener(n._canPlayEvent,v,!1),o._clearTimer(u._id)}}return u._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var t=n._getSoundIds(e),o=0;o<t.length;o++){n._clearTimer(t[o]);var r=n._soundById(t[o]);if(r&&!r._paused&&(r._seek=n.seek(t[o]),r._rateSeek=0,r._paused=!0,n._stopFade(t[o]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var t=this;if("loaded"!==t._state)return t._queue.push({event:"stop",action:function(){t.stop(e)}}),t;for(var o=t._getSoundIds(e),r=0;r<o.length;r++){t._clearTimer(o[r]);var a=t._soundById(o[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,t._stopFade(o[r]),a._node&&(t._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),t._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause())),n||t._emit("stop",a._id))}return t},mute:function(e,t){var o=this;if("loaded"!==o._state)return o._queue.push({event:"mute",action:function(){o.mute(e,t)}}),o;if(void 0===t){if("boolean"!=typeof e)return o._muted;o._muted=e}for(var r=o._getSoundIds(t),a=0;a<r.length;a++){var i=o._soundById(r[a]);i&&(i._muted=e,i._interval&&o._stopFade(i._id),o._webAudio&&i._node?i._node.gain.setValueAtTime(e?0:i._volume,n.ctx.currentTime):i._node&&(i._node.muted=!!n._muted||e),o._emit("mute",i._id))}return o},volume:function(){var e=this,t=arguments,o,r;if(0===t.length)return e._volume;if(1===t.length||2===t.length&&void 0===t[1]){e._getSoundIds().indexOf(t[0])>=0?r=parseInt(t[0],10):o=parseFloat(t[0])}else t.length>=2&&(o=parseFloat(t[0]),r=parseInt(t[1],10));var a;if(!(void 0!==o&&o>=0&&o<=1))return a=r?e._soundById(r):e._sounds[0],a?a._volume:0;if("loaded"!==e._state)return e._queue.push({event:"volume",action:function(){e.volume.apply(e,t)}}),e;void 0===r&&(e._volume=o),r=e._getSoundIds(r);for(var i=0;i<r.length;i++)(a=e._soundById(r[i]))&&(a._volume=o,t[2]||e._stopFade(r[i]),e._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(o,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=o*n.volume()),e._emit("volume",a._id));return e},fade:function(e,t,o,r){var a=this;if("loaded"!==a._state)return a._queue.push({event:"fade",action:function(){a.fade(e,t,o,r)}}),a;a.volume(e,r);for(var i=a._getSoundIds(r),u=0;u<i.length;u++){var s=a._soundById(i[u]);if(s){if(r||a._stopFade(i[u]),a._webAudio&&!s._muted){var d=n.ctx.currentTime,_=d+o/1e3;s._volume=e,s._node.gain.setValueAtTime(e,d),s._node.gain.linearRampToValueAtTime(t,_)}a._startFadeInterval(s,e,t,o,i[u],void 0===r)}}return a},_startFadeInterval:function(e,n,t,o,r,a){var i=this,u=n,s=t-n,d=Math.abs(s/.01),_=Math.max(4,d>0?o/d:o),l=Date.now();e._fadeTo=t,e._interval=setInterval(function(){var r=(Date.now()-l)/o;l=Date.now(),u+=s*r,u=Math.max(0,u),u=Math.min(1,u),u=Math.round(100*u)/100,i._webAudio?e._volume=u:i.volume(u,e._id,!0),a&&(i._volume=u),(t<n&&u<=t||t>n&&u>=t)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,i.volume(t,e._id),i._emit("fade",e._id))},_)},_stopFade:function(e){var t=this,o=t._soundById(e);return o&&o._interval&&(t._webAudio&&o._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(o._interval),o._interval=null,t.volume(o._fadeTo,e),o._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e=this,n=arguments,t,o,r;if(0===n.length)return e._loop;if(1===n.length){if("boolean"!=typeof n[0])return!!(r=e._soundById(parseInt(n[0],10)))&&r._loop;t=n[0],e._loop=t}else 2===n.length&&(t=n[0],o=parseInt(n[1],10));for(var a=e._getSoundIds(o),i=0;i<a.length;i++)(r=e._soundById(a[i]))&&(r._loop=t,e._webAudio&&r._node&&r._node.bufferSource&&(r._node.bufferSource.loop=t,t&&(r._node.bufferSource.loopStart=r._start||0,r._node.bufferSource.loopEnd=r._stop)));return e},rate:function(){var e=this,t=arguments,o,r;if(0===t.length)r=e._sounds[0]._id;else if(1===t.length){var a=e._getSoundIds(),i=a.indexOf(t[0]);i>=0?r=parseInt(t[0],10):o=parseFloat(t[0])}else 2===t.length&&(o=parseFloat(t[0]),r=parseInt(t[1],10));var u;if("number"!=typeof o)return u=e._soundById(r),u?u._rate:e._rate;if("loaded"!==e._state)return e._queue.push({event:"rate",action:function(){e.rate.apply(e,t)}}),e;void 0===r&&(e._rate=o),r=e._getSoundIds(r);for(var s=0;s<r.length;s++)if(u=e._soundById(r[s])){u._rateSeek=e.seek(r[s]),u._playStart=e._webAudio?n.ctx.currentTime:u._playStart,u._rate=o,e._webAudio&&u._node&&u._node.bufferSource?u._node.bufferSource.playbackRate.setValueAtTime(o,n.ctx.currentTime):u._node&&(u._node.playbackRate=o);var d=e.seek(r[s]),_=(e._sprite[u._sprite][0]+e._sprite[u._sprite][1])/1e3-d,l=1e3*_/Math.abs(u._rate);!e._endTimers[r[s]]&&u._paused||(e._clearTimer(r[s]),e._endTimers[r[s]]=setTimeout(e._ended.bind(e,u),l)),e._emit("rate",u._id)}return e},seek:function(){var e=this,t=arguments,o,r;if(0===t.length)r=e._sounds[0]._id;else if(1===t.length){var a=e._getSoundIds(),i=a.indexOf(t[0]);i>=0?r=parseInt(t[0],10):e._sounds.length&&(r=e._sounds[0]._id,o=parseFloat(t[0]))}else 2===t.length&&(o=parseFloat(t[0]),r=parseInt(t[1],10));if(void 0===r)return e;if("loaded"!==e._state)return e._queue.push({event:"seek",action:function(){e.seek.apply(e,t)}}),e;var u=e._soundById(r);if(u){if(!("number"==typeof o&&o>=0)){if(e._webAudio){var s=e.playing(r)?n.ctx.currentTime-u._playStart:0,d=u._rateSeek?u._rateSeek-u._seek:0;return u._seek+(d+s*Math.abs(u._rate))}return u._node.currentTime}var _=e.playing(r);if(_&&e.pause(r,!0),u._seek=o,u._ended=!1,e._clearTimer(r),_&&e.play(r,!0),!e._webAudio&&u._node&&(u._node.currentTime=o),_&&!e._webAudio){var l=function(){e._playLock?setTimeout(l,0):e._emit("seek",r)};setTimeout(l,0)}else e._emit("seek",r)}return e},playing:function(e){var n=this;if("number"==typeof e){var t=n._soundById(e);return!!t&&!t._paused}for(var o=0;o<n._sounds.length;o++)if(!n._sounds[o]._paused)return!0;return!1},duration:function(e){var n=this,t=n._duration,o=n._soundById(e);return o&&(t=n._sprite[o._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,o=0;o<t.length;o++){if(t[o]._paused||e.stop(t[o]._id),!e._webAudio){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(t[o]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),t[o]._node.removeEventListener("error",t[o]._errorFn,!1),t[o]._node.removeEventListener(n._canPlayEvent,t[o]._loadFn,!1)}delete t[o]._node,e._clearTimer(t[o]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1)}var i=!0;for(o=0;o<n._howls.length;o++)if(n._howls[o]._src===e._src){i=!1;break}return r&&i&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,t,o){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(o?{id:t,fn:n,once:o}:{id:t,fn:n}),r},off:function(e,n,t){var o=this,r=o["_on"+e],a=0;if("number"==typeof n&&(t=n,n=null),n||t)for(a=0;a<r.length;a++){var i=t===r[a].id;if(n===r[a].fn&&i||!n&&i){r.splice(a,1);break}}else if(e)o["_on"+e]=[];else{var u=Object.keys(o);for(a=0;a<u.length;a++)0===u[a].indexOf("_on")&&Array.isArray(o[u[a]])&&(o[u[a]]=[])}return o},once:function(e,n,t){var o=this;return o.on(e,n,t,1),o},_emit:function(e,n,t){for(var o=this,r=o["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,t)}.bind(o,r[a].fn),0),r[a].once&&o.off(e,r[a].fn,r[a].id));return o._loadQueue(e),o},_loadQueue:function(e){var n=this;if(n._queue.length>0){var t=n._queue[0];t.event===e&&(n._queue.shift(),n._loadQueue()),e||t.action()}return n},_ended:function(e){var t=this,o=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var r=!(!e._loop&&!t._sprite[o][2]);if(t._emit("end",e._id),!t._webAudio&&r&&t.stop(e._id,!0).play(e._id),t._webAudio&&r){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),a)}return t._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),n._autoSuspend()),t._webAudio||r||t.stop(e._id),t},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var t=n._soundById(e);t&&t._node&&t._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,t=0;t<n._sounds.length;t++)if(e===n._sounds[t]._id)return n._sounds[t];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new o(e)},_drain:function(){var e=this,n=e._pool,t=0,o=0;if(!(e._sounds.length<n)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&t++;for(o=e._sounds.length-1;o>=0;o--){if(t<=n)return;e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),t--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var t=[],o=0;o<n._sounds.length;o++)t.push(n._sounds[o]._id);return t}return[e]},_refreshBuffer:function(e){var t=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[t._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),t},_cleanBuffer:function(e){var t=this;if(n._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}}return e.bufferSource=null,t}};var o=function(e){this._parent=e,this.init()};o.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,o=n._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(o,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=new Audio,e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=t._src,e._node.preload="auto",e._node.volume=o*n.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(t._sprite).length&&(t._sprite={__default:[0,1e3*t._duration]}),"loaded"!==t._state&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void s(e);if(/^data:[^;]+;base64,/.test(n)){for(var t=atob(n.split(",")[1]),o=new Uint8Array(t.length),a=0;a<t.length;++a)o[a]=t.charCodeAt(a);u(o.buffer,e)}else{var d=new XMLHttpRequest;d.open("GET",n,!0),d.withCredentials=e._xhrWithCredentials,d.responseType="arraybuffer",d.onload=function(){var n=(d.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+d.status+".");u(d.response,e)},d.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},i(d)}},i=function(e){try{e.send()}catch(n){e.onerror()}},u=function(e,t){n.ctx.decodeAudioData(e,function(e){e&&t._sounds.length>0&&(r[t._src]=e,s(t,e))},function(){t._emit("loaderror",null,"Decoding audio data failed.")})},s=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},d=function(){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),t=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),o=t?parseInt(t[1],10):null;if(e&&o&&o<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:1,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:t}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=t),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=t,window.Sound=o):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=t,global.Sound=o)}(),function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var t=n._howls.length-1;t>=0;t--)n._howls[t].stereo(e);return n},HowlerGlobal.prototype.pos=function(e,n,t){var o=this;return o.ctx&&o.ctx.listener?(n="number"!=typeof n?o._pos[1]:n,t="number"!=typeof t?o._pos[2]:t,"number"!=typeof e?o._pos:(o._pos=[e,n,t],void 0!==o.ctx.listener.positionX?(o.ctx.listener.positionX.setTargetAtTime(o._pos[0],Howler.ctx.currentTime,.1),o.ctx.listener.positionY.setTargetAtTime(o._pos[1],Howler.ctx.currentTime,.1),o.ctx.listener.positionZ.setTargetAtTime(o._pos[2],Howler.ctx.currentTime,.1)):o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]),o)):o},HowlerGlobal.prototype.orientation=function(e,n,t,o,r,a){var i=this;if(!i.ctx||!i.ctx.listener)return i;var u=i._orientation;return n="number"!=typeof n?u[1]:n,t="number"!=typeof t?u[2]:t,o="number"!=typeof o?u[3]:o,r="number"!=typeof r?u[4]:r,a="number"!=typeof a?u[5]:a,"number"!=typeof e?u:(i._orientation=[e,n,t,o,r,a],void 0!==i.ctx.listener.forwardX?(i.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),i.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),i.ctx.listener.forwardZ.setTargetAtTime(t,Howler.ctx.currentTime,.1),i.ctx.listener.upX.setTargetAtTime(e,Howler.ctx.currentTime,.1),i.ctx.listener.upY.setTargetAtTime(n,Howler.ctx.currentTime,.1),i.ctx.listener.upZ.setTargetAtTime(t,Howler.ctx.currentTime,.1)):i.ctx.listener.setOrientation(e,n,t,o,r,a),i)},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._stereo=n.stereo||null,t._pos=n.pos||null,t._pannerAttr={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:0,distanceModel:void 0!==n.distanceModel?n.distanceModel:"inverse",maxDistance:void 0!==n.maxDistance?n.maxDistance:1e4,panningModel:void 0!==n.panningModel?n.panningModel:"HRTF",refDistance:void 0!==n.refDistance?n.refDistance:1,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:1},t._onstereo=n.onstereo?[{fn:n.onstereo}]:[],t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,t){var o=this;if(!o._webAudio)return o;if("loaded"!==o._state)return o._queue.push({event:"stereo",action:function(){o.stereo(n,t)}}),o;var r=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===t){if("number"!=typeof n)return o._stereo;o._stereo=n,o._pos=[n,0,0]}for(var a=o._getSoundIds(t),i=0;i<a.length;i++){var u=o._soundById(a[i]);if(u){if("number"!=typeof n)return u._stereo;u._stereo=n,u._pos=[n,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",u._panner&&u._panner.pan||e(u,r),"spatial"===r?void 0!==u._panner.positionX?(u._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(n,0,0):u._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),o._emit("stereo",u._id)}}return o},Howl.prototype.pos=function(n,t,o,r){var a=this;if(!a._webAudio)return a;if("loaded"!==a._state)return a._queue.push({event:"pos",action:function(){a.pos(n,t,o,r)}}),a;if(t="number"!=typeof t?0:t,o="number"!=typeof o?-.5:o,void 0===r){if("number"!=typeof n)return a._pos;a._pos=[n,t,o]}for(var i=a._getSoundIds(r),u=0;u<i.length;u++){var s=a._soundById(i[u]);if(s){if("number"!=typeof n)return s._pos;s._pos=[n,t,o],s._node&&(s._panner&&!s._panner.pan||e(s,"spatial"),void 0!==s._panner.positionX?(s._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(o,Howler.ctx.currentTime)):s._panner.setOrientation(n,t,o)),a._emit("pos",s._id)}}return a},Howl.prototype.orientation=function(n,t,o,r){var a=this;if(!a._webAudio)return a;if("loaded"!==a._state)return a._queue.push({event:"orientation",action:function(){a.orientation(n,t,o,r)}}),a;if(t="number"!=typeof t?a._orientation[1]:t,o="number"!=typeof o?a._orientation[2]:o,void 0===r){if("number"!=typeof n)return a._orientation;a._orientation=[n,t,o]}for(var i=a._getSoundIds(r),u=0;u<i.length;u++){var s=a._soundById(i[u]);if(s){if("number"!=typeof n)return s._orientation;s._orientation=[n,t,o],s._node&&(s._panner||(s._pos||(s._pos=a._pos||[0,0,-.5]),e(s,"spatial")),s._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),s._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),s._panner.orientationZ.setValueAtTime(o,Howler.ctx.currentTime)),a._emit("orientation",s._id)}}return a},Howl.prototype.pannerAttr=function(){var n=this,t=arguments,o,r,a;if(!n._webAudio)return n;if(0===t.length)return n._pannerAttr;if(1===t.length){if("object"!=typeof t[0])return a=n._soundById(parseInt(t[0],10)),a?a._pannerAttr:n._pannerAttr;o=t[0],void 0===r&&(o.pannerAttr||(o.pannerAttr={coneInnerAngle:o.coneInnerAngle,coneOuterAngle:o.coneOuterAngle,coneOuterGain:o.coneOuterGain,distanceModel:o.distanceModel,maxDistance:o.maxDistance,refDistance:o.refDistance,rolloffFactor:o.rolloffFactor,panningModel:o.panningModel}),n._pannerAttr={coneInnerAngle:void 0!==o.pannerAttr.coneInnerAngle?o.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:void 0!==o.pannerAttr.coneOuterAngle?o.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:void 0!==o.pannerAttr.coneOuterGain?o.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:void 0!==o.pannerAttr.distanceModel?o.pannerAttr.distanceModel:n._distanceModel,maxDistance:void 0!==o.pannerAttr.maxDistance?o.pannerAttr.maxDistance:n._maxDistance,refDistance:void 0!==o.pannerAttr.refDistance?o.pannerAttr.refDistance:n._refDistance,rolloffFactor:void 0!==o.pannerAttr.rolloffFactor?o.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:void 0!==o.pannerAttr.panningModel?o.pannerAttr.panningModel:n._panningModel})}else 2===t.length&&(o=t[0],r=parseInt(t[1],10));for(var i=n._getSoundIds(r),u=0;u<i.length;u++)if(a=n._soundById(i[u])){var s=a._pannerAttr;s={coneInnerAngle:void 0!==o.coneInnerAngle?o.coneInnerAngle:s.coneInnerAngle,coneOuterAngle:void 0!==o.coneOuterAngle?o.coneOuterAngle:s.coneOuterAngle,coneOuterGain:void 0!==o.coneOuterGain?o.coneOuterGain:s.coneOuterGain,distanceModel:void 0!==o.distanceModel?o.distanceModel:s.distanceModel,maxDistance:void 0!==o.maxDistance?o.maxDistance:s.maxDistance,refDistance:void 0!==o.refDistance?o.refDistance:s.refDistance,rolloffFactor:void 0!==o.rolloffFactor?o.rolloffFactor:s.rolloffFactor,panningModel:void 0!==o.panningModel?o.panningModel:s.panningModel};var d=a._panner;d?(d.coneInnerAngle=s.coneInnerAngle,d.coneOuterAngle=s.coneOuterAngle,d.coneOuterGain=s.coneOuterGain,d.distanceModel=s.distanceModel,d.maxDistance=s.maxDistance,d.refDistance=s.refDistance,d.rolloffFactor=s.rolloffFactor,d.panningModel=s.panningModel):(a._pos||(a._pos=n._pos||[0,0,-.5]),e(a,"spatial"))}return n},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this),n._stereo?t.stereo(n._stereo):n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this)}}(Sound.prototype.reset);var e=function(e,n){n=n||"spatial","spatial"===n?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,void 0!==e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),
void 0!==e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}();