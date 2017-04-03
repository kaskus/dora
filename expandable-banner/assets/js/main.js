window.addEventListener('message', function(e) {
  var message = e.data.message;
  switch (message) {
    case 'expand-banner':
      $('#banner-frame').addClass('stretched'); break;
    case 'shrink-banner':
      $('#banner-frame').removeClass('stretched'); break;
    default:
      break;
  }
});