$(document).ready(function() {
    var urlImageCondensed = 'http://i0.sinaimg.cn/fashion/2016/0107/U3978P1503DT20160107145544.gif';
    var urlImageExpanded = 'https://68.media.tumblr.com/8deca5058414d741af9c7b3674be440f/tumblr_obujcnB3kM1vy286ao1_500.gif';
    var urlVideoPoster = 'http://camendesign.com/code/video_for_everybody/poster.jpg';
  
    $('.banner-condensed-bg').css('background-image', 'url(' + urlImageCondensed + ')');
    $('.banner-expanded-bg').css('background-image', 'url(' + urlImageExpanded + ')');
  
    $('.banner-video').attr('poster', urlVideoPoster);
  });

  function expandBanner(position) {
    window.parent.postMessage({message: 'expand-banner-' + position}, '*')
  
    var urlVideo = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    var container = $('.banner-container.' + position);
    console.log($(container))
    $(container).addClass('stretched');
    $(container).find('.banner-video.' + position).show();
    $(container).find('.banner-video.' + position).attr('src', urlVideo);
    $(container).find('.banner-video.' + position).currentTime = 0;
    $(container).find('.banner-close.' + position).show();
  }

  function shrinkBanner(position) {
    window.parent.postMessage({message: 'shrink-banner-' + position}, '*')
    var container = $('.banner-container.' + position);
    $(container).removeClass('stretched');
    $(container).find('.banner-video').attr('src', '');
    $(container).find('.banner-video').hide();
    $(container).find('.banner-close').hide();
  }
  