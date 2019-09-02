$('.book')
.on('click', '.jsOnboardingButtonNext', nextPage)
.on('click', '.jsOnboardingButtonPrev', prevPage);

function prevPage() {
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');

  var pageIndex = $(".page").index($(".page.active")) + 1;

  if(pageIndex === 1){
      $('.scene').addClass('centered');
  }
}

function nextPage() {
  $('.active')
    .removeClass('active')
    .addClass('flipped')
    .next('.page')
    .addClass('active')
    .siblings();

    var pageIndex = $(".page").index($(".page.active")) + 1;

  if(pageIndex > 1){
      $('.scene').removeClass('centered');
  }
}

function initOnboarding(){
  $('#jsModalOnboarding').addClass('is-open');
  $('#jsModalOnboarding').find('.jsModalDialog').addClass('is-animate');
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
  initOnboarding();
  $( ".jsOnboardingCloseButton, .jsOnboardingModal" ).on( "click", function() {
    setCookieOnBoarding('onboarding_channel', '1', 365);
  });
});
