$(document).ready(function(){$("#aslinyalo-modal").show(),$("body #aslinyalo-modal").length?$("body").addClass("o-hidden Pos(f) W(100%) H(100%)"):$("body").removeClass("o-hidden Pos(f) W(100%) H(100%)"),$(".checkboxItem").change(function(o){var d=$("input[type=checkbox]:checked");d.length>=1?($(".jsBtnSubmit").removeClass("disabled"),$(".jsBtnSubmit button").prop("disabled",!1)):($(".jsBtnSubmit").addClass("disabled"),$(".jsBtnSubmit button").prop("disabled",!0)),d.length>=3?(o.preventDefault(),$('input[type="checkbox"]').not(":checked").prop("disabled",!0)):$('input[type="checkbox"]').not(":checked").prop("disabled",!1)}),$(".jsButtonAslinyaLoStart").on("click",function(){$(".jsModalAslinyaLoStep2").show(),$(".jsModalAslinyaLoStep1").hide(),$("body").addClass("o-hidden")}),$(".jsCloseModal").on("click",function(){$("#aslinyalo-modal").hide(),$("body").removeClass("o-hidden Pos(f) W(100%) H(100%)")}),$(".cardItemChannel").on("click",function(){$(".jsModalAslinyaLoFinalStep").show(),$("#aslinyalo-modal").hide(),$(".jsHeader").css("z-index","14"),$("body").addClass("o-hidden")}),$(".jsGotItClose").on("click",function(){$(".jsModalAslinyaLoFinalStep").hide(),$("body").removeClass("o-hidden Pos(f) W(100%) H(100%)")})});