function goToSection(e){var o=$(".c-section--"+e);$(".c-section").removeClass("is-current"),$(o).addClass("is-current"),"game"==e&&setTimeout(function(){$(".jsInstructionPath").show()},1e3)}function goToWebsite(){setTimeout(function(){window.location.href="https://markas.kaskus.co.id/home/ticket"},1e3)}$(document).ready(function(){function e(){l=!1,goToSection("win-screen"),$(".jsSucceedSign").addClass("animated swing"),u.stop(),u.play("win"),w.play()}function o(){l&&(l=!1,$("#status").text("cobalagi deh"),r.addClass("is-disabled"),t.addClass("is-off"),$(".jsInstruction").fadeIn(),$(".jsTiban").css("z-index","24"),C[Math.floor(Math.random()*C.length)].play(),c>1?(c--,n(c)):(goToSection("lose-screen"),u.stop(),u.play("lose"),u.rate(1),f.play(),$(".jsFailedSign").addClass("animated swing")))}function a(){l&&(l=!1,r.addClass("is-disabled"),t.addClass("is-off"),$("#status").text("COPOOOOOOOO"))}function n(e){var o=$(".jsCendolList"),a=3-parseInt(e),n=3-parseInt(a);o.empty();for(var s=0;s<a;s++)o.append("<li class='c-cendol__item c-cendol__item--empty'></li>");for(var s=0;s<n;s++)o.append("<li class='c-cendol__item c-cendol__item--filled'></li>")}function s(){var e=864e5,o=new Date,a=new Date(2017,7,26),n=Math.round(Math.abs((a.getTime()-o.getTime())/864e5));$(".jsHMin").text(n)}var t=$("#start"),i=$("#end"),r=$(".path"),l=!1,c=3,u=new Howl({src:["audio/bgm-maze.webm","audio/bgm-maze.mp3"],volume:.35,rate:1,html5:!0,loop:!0,sprite:{introduction:[0,176e3],lose:[607e3,79e4],win:[388e3,607e3]}}),d=new Howl({src:["audio/sfx-clash.wav"]}),m=new Howl({src:["audio/sfx-zap.wav"]}),g=new Howl({src:["audio/sfx-on.wav"]}),f=new Howl({src:["audio/sfx-lose.wav"]}),w=new Howl({src:["audio/sfx-succeed.wav"]}),p=new Howl({src:["audio/sfx-click.wav"]}),j=new Howl({src:["audio/sfx-car-purple.wav"]}),h=new Howl({src:["audio/sfx-nyungsep.wav"]}),v=new Howl({src:["audio/sfx-mundur.wav"]}),b=new Howl({src:["audio/sfx-bell.wav"]}),C=[m,d];u.play("introduction"),$(document).on("mouseenter","#start",function(e){$(".jsInstruction").fadeOut(),setTimeout(function(){g.play(),3==c&&($(".jsInstructionMan").hide(),$(".jsInstructionBubble").hide(),$(".jsInstructionPath").hide(),$(".jsTriggerCarPurple").one("mousemove",function(e){$(".jsObstacleCarPurple").addClass("is-moving"),j.play()}),$(".jsTriggerCarGreen").one("mousemove",function(e){$(".jsObstacleCarGreen").addClass("is-reverse"),v.play()}),$(".jsTriggerGerobak").one("mousemove",function(e){$(".jsObstacleGerobak").addClass("is-nyungsep"),b.play(),setTimeout(function(){h.play()},1500)})),2==c&&u.rate(1.1),1==c&&u.rate(1.2),l=!0,r.removeClass("is-disabled"),$(".route").addClass("is-ready"),$(".jsTiban").css("z-index","50"),t.removeClass("is-off"),$("#status").text("Cemunggudh")},100)});var y="logo-kahitna.jpg",k="logo-90s.jpg",x="logo-barasuara.jpg",T="logo-burgerkill.jpg",I="logo-ek.jpg",O="logo-pmr.jpg",H="logo-rocket.jpg",M="logo-saykoji.jpg",_="logo-sheila.jpg",S=[T,O,H,_],A=[y,k,x,I,M];$(".jsArtisBall1").on("animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration",function(e){var o=S[Math.floor(Math.random()*S.length)];$(this).css("background-image","url(images/"+o)}),$(".jsArtisBall2").on("animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration",function(e){var o=A[Math.floor(Math.random()*A.length)];$(this).css("background-image","url(images/"+o)}),$(document).on("mouseleave",".route",function(e){setTimeout(function(){o()},150)}),$(document).on("click",".jsBtn",function(e){p.play()}),$(document).on("mouseenter","#start__sign",function(e){$(".jsInstruction").fadeOut()}),i.mousemove(function(){1==l?e():l&&r.hasClass("is-disabled")&&a()}),s()});