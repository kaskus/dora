$(document).ready(function() {
    var urlImageCondensed = 'https://s.kaskus.id/img/seasonal/october2020/header_fciqgsbhbysj.jpg';
    var urlImageExpanded = ' https://s.kaskus.id/img/seasonal/october2020/header_fciqgsnica3r.jpg';
    var urlVideoPoster = '';
  
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
  