$(document).ready(function() {
  var urlImageCondensed = 'http://i0.sinaimg.cn/fashion/2016/0107/U3978P1503DT20160107145544.gif';
  var urlImageExpanded = 'https://68.media.tumblr.com/8deca5058414d741af9c7b3674be440f/tumblr_obujcnB3kM1vy286ao1_500.gif';
  var urlVideo = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';

  $('#banner-condensed-bg').css('background-image', 'url(' + urlImageCondensed + ')');
  $('#banner-expanded-bg').css('background-image', 'url(' + urlImageExpanded + ')');
  $('#banner-video').attr('src', urlVideo);
  $('#banner-video')[0].load();
});

function expandBanner(e) {
  window.parent.postMessage({message: 'expand-banner'}, '*')
  $('#banner-content').addClass('stretched');
  $('#banner-video').show();
  $('#banner-video')[0].currentTime = 0;
  $('#close-button').show();
  $(e).hide();
}

function shrinkBanner(e) {
  window.parent.postMessage({message: 'shrink-banner'}, '*')
  $('#banner-content').removeClass('stretched');
  $('#banner-video').hide();
  $('#expand-button').show();
  $(e).hide();
}
