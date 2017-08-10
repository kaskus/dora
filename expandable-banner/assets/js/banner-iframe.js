$(document).ready(function() {
  var urlImageCondensed = 'http://i0.sinaimg.cn/fashion/2016/0107/U3978P1503DT20160107145544.gif';
  var urlImageExpanded = 'https://68.media.tumblr.com/8deca5058414d741af9c7b3674be440f/tumblr_obujcnB3kM1vy286ao1_500.gif';

  var urlVideoPoster = 'http://camendesign.com/code/video_for_everybody/poster.jpg';

  $('#banner-condensed-bg').css('background-image', 'url(' + urlImageCondensed + ')');
  $('#banner-expanded-bg').css('background-image', 'url(' + urlImageExpanded + ')');

  $('#banner-video').attr('poster', urlVideoPoster);
});

function expandBanner(e) {
  var urlVideos = 'https://www.youtube.com/embed/WHdYxRHkMfI?autoplay=1';
  window.parent.postMessage({message: 'expand-banner'}, '*')
  $('#banner-content').addClass('stretched');
  $('#banner-video').show();

  //for iframe
  $('#banner-video').attr('src', urlVideos);
  $('#close-button').show();
}

function shrinkBanner(e) {
  window.parent.postMessage({message: 'shrink-banner'}, '*')
  $('#banner-content').removeClass('stretched');
  $('#banner-video').attr('src', '');
  $('#banner-video').hide();
  $('#close-button').hide();
}
