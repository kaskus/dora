window.addEventListener('message', function(e) {
  var message = e.data.message;
  switch (message) {
    case 'remove-banner':
      $('#pull-banner').remove();
      $(document.body).css('overflow', 'auto');
      break;
    case 'pull-banner':
      $('#pull-banner').height('100%');
      $(document.body).css('overflow', 'hidden');
      break;
    default:
      break;
  }
});