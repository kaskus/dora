window.addEventListener('message', function(e) {
  var message = e.data.message;
  switch (message) {
    case 'remove-banner':
      $('#ad-pull').remove();
      $(document.body).css('overflow', 'auto');
      break;
    case 'stretch-banner':
      $('#ad-pull').addClass('stretched');
      $(document.body).css('overflow', 'hidden');
      break;
    case 'shrink-banner':
      $('#ad-pull').removeClass('stretched');
      $(document.body).css('overflow', 'auto');
      break;
    case 'open-url':
      window.location.href = e.data.url;
      break;
    default:
      break;
  }
});
