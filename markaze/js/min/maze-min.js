function goToSection(o){var a=$(".c-section--"+o);$(".c-section").removeClass("is-current"),$(a).addClass("is-current")}function goToWebsite(){setTimeout(function(){window.location.href="https://markas.kaskus.co.id/home/ticket"},1e3)}$(document).ready(function(){function o(){c=!1,$("#status").text("MANTABZZZ GANNN"),goToSection("win-screen"),$(".jsSucceedSign").addClass("animated swing"),d.stop(),d.play("win"),p.play()}function a(){c&&(c=!1,$("#status").text("cobalagi deh"),l.addClass("is-disabled"),i.addClass("is-off"),$(".jsTiban").css("z-index","24"),h[Math.floor(Math.random()*h.length)].play(),r>1?(r--,t(r)):(goToSection("lose-screen"),d.stop(),d.play("lose"),d.rate(1),f.play(),$(".jsFailedSign").addClass("animated swing")))}function e(){c&&(c=!1,l.addClass("is-disabled"),i.addClass("is-off"),$("#status").text("COPOOOOOOOO"))}function t(o){var a=$(".jsCendolList"),e=3-parseInt(o),t=3-parseInt(e);a.empty();for(var n=0;n<e;n++)a.append("<li class='c-cendol__item c-cendol__item--empty'></li>");for(var n=0;n<t;n++)a.append("<li class='c-cendol__item c-cendol__item--filled'></li>")}function n(){var o=864e5,a=new Date,e=new Date(2017,7,26),t=Math.round(Math.abs((e.getTime()-a.getTime())/864e5));$(".jsHMin").text(t)}var i=$("#start"),s=$("#end"),l=$(".path"),c=!1,r=3,d=new Howl({src:["audio/bgm-maze.webm","audio/bgm-maze.mp3"],volume:.35,rate:1,html5:!0,loop:!0,sprite:{introduction:[0,176e3],lose:[607e3,79e4],win:[388e3,607e3]}}),u=new Howl({src:["audio/sfx-clash.wav"]}),m=new Howl({src:["audio/sfx-zap.wav"]}),g=new Howl({src:["audio/sfx-on.wav"]}),f=new Howl({src:["audio/sfx-lose.wav"]}),p=new Howl({src:["audio/sfx-succeed.wav"]}),w=new Howl({src:["audio/sfx-click.wav"]}),h=[m,u];d.play("introduction"),$(document).on("mouseenter","#start",function(o){setTimeout(function(){g.play(),2==r&&d.rate(1.1),1==r&&d.rate(1.2),c=!0,l.removeClass("is-disabled"),$(".jsTiban").css("z-index","31"),i.removeClass("is-off"),$("#status").text("Cemunggudh")},100)});var v="logo-kahitna.jpg",j="logo-90s.jpg",b="logo-barasuara.jpg",k="logo-burgerkill.jpg",C="logo-ek.jpg",x="logo-pmr.jpg",y="logo-rocket.jpg",M="logo-saykoji.jpg",T="logo-sheila.jpg",A=[k,x,y,T],O=[v,j,b,C,M];$(".jsArtisBall1").on("animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration",function(o){var a=A[Math.floor(Math.random()*A.length)];$(this).css("background-image","url(images/"+a)}),$(".jsArtisBall2").on("animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration",function(o){var a=O[Math.floor(Math.random()*O.length)];$(this).css("background-image","url(images/"+a)}),$(document).on("mouseleave",".route",function(o){setTimeout(function(){a()},150)}),$(document).on("click",".jsBtn",function(o){w.play()}),s.mousemove(function(){1==c?o():c&&l.hasClass("is-disabled")&&e()}),n()});