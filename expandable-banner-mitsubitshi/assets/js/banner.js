$(curDoc).ready(function(){
  var urlImageCondensed = 'https://s.kaskus.id/img/seasonal/september2017/tematik/wp_background_fbp36ziiyh3e.jpg';
  var urlImageExpanded = 'https://s.kaskus.id/img/seasonal/september2017/tematik/wp_background_fbp36zijzkfn.jpg';

  $(document.getElementById('banner-condensed-bg')).css('background-image', 'url(' + urlImageCondensed + ')');
  $(document.getElementById('banner-expanded-bg')).css('background-image', 'url(' + urlImageExpanded + ')');
  
});

function expandBanner(e) {
  window.parent.postMessage({message: 'expand-banner'}, '*')
  $(document.getElementById('banner-content')).addClass('stretched');
  $(document.getElementById('close-button')).show();

}

function shrinkBanner(e) {
  window.parent.postMessage({message: 'shrink-banner'}, '*')
  $(document.getElementById('banner-content')).removeClass('stretched');
  $(document.getElementById('close-button')).hide();
}
