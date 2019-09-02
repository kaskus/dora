function initOnboardingAslinyaLo(){
  $('#jsModalAslinyaLo').addClass('is-open');
  $('#jsModalAslinyaLo').find('.jsModalDialog').addClass('is-animate');
  $('body').addClass('Ov(h)');
}

function setCookieOnBoarding(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    var domain = "domain="+window.location.host;
    document.cookie = cname + "=" + cvalue + "; " + expires + "; " + domain + "; path=/";
}

$(document).ready(function() {
  initOnboardingAslinyaLo();
  $( ".jsOnboardingCloseButton, .jsAslinyaLoModal" ).on( "click", function() {
    setCookieOnBoarding('onboarding_channel', '1', 365);
  });

  $('.checkboxItem').change(function(event){
    var checkedCheckbox = $('input[type=checkbox]:checked');
    if (checkedCheckbox.length >= 1) {
      $('.jsBtnSubmit').removeClass('disabled');
      $('.jsBtnSubmit button').prop('disabled', false);
    }
    else {
      $('.jsBtnSubmit').addClass('disabled');
      $('.jsBtnSubmit button').prop('disabled', true);
    }
    if (checkedCheckbox.length >= 3) {
      event.preventDefault();
      $('input[type="checkbox"]').not(':checked').prop('disabled', true);
    }
    else {
      $('input[type="checkbox"]').not(':checked').prop('disabled', false);
    }
  });

  $('.cardItemChannel').click(function(event){
    if ($("#jsModalAslinyaLoFinish").length) {
      $(".jsNavHeader").addClass("z1000");
    }
    else {
      $(".jsNavHeader").removeClass("z1000");
    }
  });
});

$('.jsButtonAslinyaLoStart').on('click', function() {
  openModal('jsModalAslinyaLoStep2');
});

$('.cardItemChannel').on('click', function() {
  openModal('jsModalAslinyaLoFinish');
});

$(".jsGotItClose").on("click", function() {
  $("#jsModalAslinyaLoFinish").hide();
  $("body").removeClass("Ov(h)");
});


$(".jsNavHeader").mouseover(function() {
  $("#jsModalAslinyaLoFinish").hide();
  $("body").removeClass("Ov(h)");
});







