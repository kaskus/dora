window.addEventListener('message', function(e) {
  var message = e.data.message;
  switch (message) {
    case 'remove-banner':
      $('#my-ad-slot').remove();
      break;
    case 'stretch-banner':
      $('#my-ad-slot').find('iframe').addClass('stretched');
      $('#my-ad-slot > a').hide();
      break;
    case 'shrink-banner':
      $('#my-ad-slot').find('iframe').removeClass('stretched');
      $('#my-ad-slot > a').show();
      break;
    case 'open-url':
      window.open(e.data.url, '_blank');
      break;
    default:
      break;
  }
});
