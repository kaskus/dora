var isHobbyOnScroll=1;function initOnboardingAslinyaLo(){loadAllHobbies(),$("#jsModalAslinyaLo").addClass("is-open"),$("#jsModalAslinyaLo").find(".jsModalDialog").addClass("is-animate"),$("body").addClass("Ov(h)")}function setCookieOnBoarding(e,a,o){var s=new Date;s.setTime(s.getTime()+24*o*60*60*1e3);var t="expires="+s.toUTCString(),i="domain="+window.location.host;document.cookie=e+"="+a+"; "+t+"; "+i+"; path=/"}function bindCheckboxItem(){$(".checkboxItem").change(function(e){var a=$("input[type=checkbox]:checked");a.length>=1?($(".jsBtnSubmit").removeClass("disabled"),$(".jsBtnSubmit button").prop("disabled",!1)):($(".jsBtnSubmit").addClass("disabled"),$(".jsBtnSubmit button").prop("disabled",!0)),a.length>=3?(e.preventDefault(),$('input[type="checkbox"]').not(":checked").prop("disabled",!0)):$('input[type="checkbox"]').not(":checked").prop("disabled",!1)}),$(".cardItemChannel").click(function(e){$("#jsModalAslinyaLoFinish").length?$(".jsNavHeader").addClass("z1000"):$(".jsNavHeader").removeClass("z1000")})}function loadAllHobbies(){$.ajax({url:"/misc/get_all_hobbies",success:function(e){var a=$.parseJSON(e).result,o="",s=1;for(key in a)o+='<div class="W(1/5) H(0) Pos(r) Pb(20%)"><div class="W(100%) P(10px)"><div class="Pos(r) Ov(h) Bdrs(5px)"><input id="'+key+'" class="Pos(a) Op(0) Cur(p) checkboxItem" name="'+a[key].name+'" type="checkbox" value="'+key+'"><label class="D(b) W(100%) Pos(r) Start(0) B(0) checkboxAslinyaloChecker Cur(p)" for="'+key+'"><div class="W(100%) Pb(100%) Pos(r)">',o+=s>10?'<div class="Bgr(nr) Bgz(cv) Bgp(c) W(100%) H(100%) Pos(a) mls-img" data-type="1" style="background-image: url('+a[key].preload_image+')" data-src="'+hobby_img_url+a[key].icon+'"></div>':'<div class="Bgr(nr) Bgz(cv) Bgp(c) W(100%) H(100%) Pos(a)" style="background-image: url('+hobby_img_url+a[key].icon+')"></div>',o+='<div class="Bgc(#f8c31c) Bgr(nr) Bgz(cv) Op(.5) Bgp(c) D(n) Pos(a) W(100%) H(100%) Z(3) checkedStatus"></div><i class="fas fa-check-circle D(n) Pos(a) Z(9) C(#ffffff) Fz(30px) Trf(transformCenter) T(50%) Start(50%)"></i><div class="Bgc(#000000) Op(.4) Pos(a) B(0) W(100%) H(100%) Start(0)"></div><div class="C(#ffffff) Fz(15px) Pos(a) B(0) Start(50%) Trf(transformCenter) Z(9) Tsh(textShadow) W(100%) titleHobbies">'+a[key].name+"</div></div></label></div></div></div>",s++;$(o).appendTo("#hobby_wrapper"),bindCheckboxItem(),$(".mls-img").kslzy(300),$(".jsModalAslinyaLoContentWrapper").scroll(function(){1===isHobbyOnScroll&&(isHobbyOnScroll=0,setTimeout(function(){$(window).off("scroll.kslzy resize.kslzy lookup.kslzy click.kslzy"),$(".mls-img").kslzy(300),isHobbyOnScroll=1},300))})}})}function loadHobbiesResult(){var e=[],a=[];$("input[type=checkbox]:checked").each(function(){e.push($(this).val()),a.push($(this).attr("name"))}),dataLayer.push({event:"trackEvent","eventDetails.category":"pop up 1","eventDetails.action":"submit hobby","eventDetails.label":a.toString()}),$.ajax({url:"/misc/get_recommendations_by_hobbies",type:"post",data:{hobbies:e},success:function(e){var a=$.parseJSON(e).result,o="",s=a.hobbies,t=a.channels,i=a.forums;for(key in s){var n=i[s[key].forum_id].channel_id;void 0!==t[n]&&void 0!==i[s[key].forum_id]&&(o+='<div class="W(180px) H(100%) Bdrs(5px) M(10px) Pos(r) Ov(h) Bxsh(boxShadow5) cardItemChannel"><div class="Pos(r) H(180px)"><div class="Bgr(nr) Bgz(cv) Bgp(c) W(100%) Pb(100%) Blur(2px)" style="background-image: url('+hobby_img_url+s[key].icon+')"></div><div class="Bgc(#000000) Op(.4) Pos(a) B(0) W(100%) H(100%) Start(0)"></div><img class="Pos(a) C(#ffffff) Fz(30px) Trf(transformCenter) T(50%) Start(50%) Z(9) W(48px) H(48px) Fil(whiteFilter)" src="'+tag_icon_url+t[n].tag_icon+'"><div class="C(#ffffff) Fz(11px) Pos(a) B(40px) Start(50%) Trf(transformCenterX) Z(9)">channel</div><div class="C(#ffffff) Fz(18px) Pos(a) B(20px) Start(50%) Trf(transformCenterX) Z(9) W(100%)">'+t[n].name+'</div></div><div class="Bgc(#ffffff) Ta(start) Mih(184px) Mah(184px) P(12px) Pos(r)"><div class="Fz(12px) C(#b3b3b3)">Forum</div><div class="Fz(16px)">'+i[s[key].forum_id].name+'</div><div class="Fz(13px) Fw(300) Lh(1.5) Mt(5px) Mah(72px) Ov(h) ellipsisText4">'+s[key].description+'</div><a href="/forum/'+s[key].forum_id+'" class="C(#ffffff) Fz(14px) Bgc(#1998ed) Bdrs(3px) P(5px) Ta(c) Pos(a) B(10px) Start(50%) Trf(transformCenterX) W(90%)" onclick="setCookieOnBoarding(\'onboarding_aslinyalo_2\' ,\''+s[key].forum_id+"', 365);setCookieOnBoarding('onboarding_aslinyalo' ,'1', 365);\">"+s[key].cta+"</a></div></div>")}$(o).appendTo("#forum_wrapper")}})}$(document).ready(function(){$(".jsOnboardingCloseButton").on("click",function(){dataLayer.push({event:"trackEvent","eventDetails.category":hobby_category,"eventDetails.action":"close","eventDetails.label":""}),setCookieOnBoarding("onboarding_aslinyalo","1",365)})}),$(".jsButtonAslinyaLoStart").on("click",function(){$("input[type=checkbox]:checked").length>=1&&(hobby_category="pop up 2",dataLayer.push({event:"trackEvent","eventDetails.category":"pop up 2","eventDetails.action":"view popup","eventDetails.label":""}),loadHobbiesResult(),openModal("jsModalAslinyaLoStep2"))}),$(".jsGotItClose").on("click",function(){dataLayer.push({event:"trackEvent","eventDetails.category":hobby_category,"eventDetails.action":"understand","eventDetails.label":""}),setCookieOnBoarding("onboarding_aslinyalo","1",365),$("#jsModalAslinyaLoFinish").hide(),$("body").removeClass("Ov(h)")}),$(".jsNavHeader").mouseover(function(){$("#jsModalAslinyaLoFinish").hide(),$("body").removeClass("Ov(h)")}),$(".jsAslinyaLoModal").click(function(e){$(e.target).closest(".jsModalContent").length||($(".jsModal").removeClass("is-open is-animate"),$("body").removeClass("Ov(h)"),dataLayer.push({event:"trackEvent","eventDetails.category":hobby_category,"eventDetails.action":"close","eventDetails.label":""}),setCookieOnBoarding("onboarding_aslinyalo","1",365))});