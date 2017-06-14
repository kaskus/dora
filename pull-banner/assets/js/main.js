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
      showAdDialog();   
      break;
    default:
      break;
  }
});

function hideAdDialog(){
  $('#ad-overlay').hide(); 
  $('#ad-dialog').hide();
}

function showAdDialog(){
  $('#ad-overlay').show(); 
  $('#ad-dialog').show();
}

function goTo(url){
  window.location.href = url;
}