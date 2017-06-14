window.addEventListener('message', function(e) {
  var message = e.data.message;
  switch (message) {
    case 'remove-banner':
      $('#ad-pull').remove();
      $(document.body).css('overflow', 'auto');
      break;
    case 'pull-banner':
      $('#ad-pull').addClass('stretched');
      $(document.body).css('overflow', 'hidden');
      break;
    case 'shrink-banner':
      $('#ad-pull').removeClass('stretched');
      $(document.body).css('overflow', 'auto');
      break;
    default:
      break;
  }
});