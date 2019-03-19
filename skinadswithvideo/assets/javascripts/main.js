;
(function($) {

  $.fn.kslzy = function(threshold, callback) {

    var $w = $(window),
      images = this,
      threshold = threshold || 0;

    function checkVisible(elm, checker) {
      checker = checker || "visible";
      var spolier = $(elm).closest(".spoiler");
      if (spolier.length == 1) {
        elm = spolier;
      }
      var vpH = $w.height(), // Viewport Height
        st = $w.scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
      //console.log("elm = "+elm+" y = "+y+" scrollTop = "+st+ " elementHeight = "+elementHeight+" Viewport = "+vpH+" threshold ="+threshold);
      if (checker == "visible") return ((y < (vpH + st + threshold)) && (y > (st - elementHeight - threshold)));
      if (checker == "above") return ((y < (vpH + st)));
    }

    this.one("display", function() {
      var downloadingImage = new Image();
      if ($(this).prop("tagName") == 'DIV' || $(this).prop("tagName") == 'A') {
        var currElem = this;
        downloadingImage.onload = function() {
          $(currElem).removeClass("mls-img")
            .addClass("rjn-img")
            .removeAttr("data-src")
            .hide()
            .fadeIn();

          if ($(currElem).attr("data-type") == "1") {
            $(currElem).css("background-image", "url(" + this.src + ")");
          } else {
            var img = $('<img class="lte-img">');
            img.attr('src', this.src);
            img.appendTo($(currElem));
          }

        };
      } else {
        var currImage = this;
        downloadingImage.onload = function() {
          $(currImage).removeClass("mls-img")
            .addClass("rjn-img")
            .removeAttr("data-src");

          $(currImage).attr('src', this.src);
        };
      }
      downloadingImage.src = $(this).attr("data-src");
    });

    function scan() {
      var inview = images.filter(function() {

        if ($(this).is(":visible") == false)
          return false;

        return checkVisible($(this));
      });

      var loaded = inview.trigger("display");
      // console.log(inview);
      images = images.not(loaded);
    }

    $w.on("scroll.kslzy resize.kslzy lookup.kslzy click.kslzy", scan);

    scan();

    return this;

  };

})(window.jQuery || window.Zepto);


function build_ga_track_event(category, action, label) {
  var ga_event_code = "_gaq.push(['_trackEvent', " + category + ", " + action + ", " + label + "]);";
  var gtm_event_code = "dataLayer.push({'event': 'trackEvent','eventDetails.category': " + category + ", 'eventDetails.action': " + action + ", 'eventDetails.label': " + label + "});";

  return ga_event_code + gtm_event_code;
}

function decodeURIComponentSafe(uri, mod) {
  var out = new String(),
    arr, i = 0,
    l, x;
  typeof mod === "undefined" ? mod = 0 : 0;
  arr = uri.split(/(%(?:d0|d1)%.{2})/);
  for (l = arr.length; i < l; i++) {
    try {
      x = decodeURIComponent(arr[i]);
    } catch (e) {
      x = mod ? arr[i].replace(/%(?!\d+)/g, '%25') : arr[i];
    }
    out += x;
  }
  return out;
}

function createThreadlistShareMenuData(elThreadListMenu) {
  var divMenu = elThreadListMenu.parent().find('.jsPopoverMenu:first');
  if (divMenu.attr('data-created') == 'false') {
    var subscribe_tracking = divMenu.attr('data-subscribe-tracking');
    var subscribe_label = divMenu.attr('data-subscribe-label');
    var is_subscribe = divMenu.attr('data-is-subscribe');
    var fb_href = divMenu.attr('data-fb-href');
    var fb_url = divMenu.attr('data-fb-url');
    var twitter_href = divMenu.attr('data-twitter-href');
    var gplus_href = divMenu.attr('data-gplus-href');
    var threadid = divMenu.attr('data-threadid');
    var forum_id = divMenu.attr('data-forum-id');
    var title = decodeURIComponentSafe(divMenu.attr('data-title')).replace('&#92;', "");
    var slug_title = divMenu.attr('data-slug-title');
    var slugtitle = divMenu.attr('data-slugtitle');
    var show_button_first_post = divMenu.attr('data-show-button-first-post');
    var last_post_id = divMenu.attr('data-last-post-id');
    var subscribeMenuString = '';
    if (is_subscribe == 'true') {
      subscribeMenuString =
        '<a ' +
        'href="javascript:void(0);"' +
        'class="D(ib) C(#484848) jsSubscribeThreadIcon" ' +
        'data-type="thread" ' +
        'data-id="' + threadid + '" ' +
        'data-label="' + subscribe_label + '" ' +
        'data-state="unsubscribe" ' +
        'data-style="menu" ' +
        'data-category="' + subscribe_tracking + '"> ' +
        '<i class="Mend(12px) Va(m) fas Fz(14px) fa-bookmark fa-fw"></i> ' +
        '<span class="Fz(12px)">' + window.KASKUS_lang.unsubscribe_button + '</span> ' +
        '</a>';
    } else {
      subscribeMenuString =
        '<a ' +
        'href="javascript:void(0);" ' +
        'class="D(ib) C(#484848) jsSubscribeThreadIcon" ' +
        'data-type="thread" ' +
        'data-id="' + threadid + '" ' +
        'data-label="' + subscribe_label + '" ' +
        'data-state="subscribe" ' +
        'data-style="menu" ' +
        'data-category="' + subscribe_tracking + '"> ' +
        '<i class="Mend(12px) Va(m) fas Fz(14px) fa-bookmark fa-fw"></i> ' +
        '<span class="Fz(12px)">' + window.KASKUS_lang.subscribe_button + '</span> ' +
        '</a>';
    }
    var firstPostButtonString = '';
    if (show_button_first_post == 'true') {
      firstPostButtonString =
        '<li class="D(b) Mb(18px) Mt(15px)"> ' +
        '<a href="/thread/' + threadid + '/' + slugtitle + '?goto=newpost" class="D(ib) C(#484848)"> ' +
        '<i class="Mend(12px) Va(m) fas Fz(14px) fa-chevron-square-down fa-fw"></i> ' +
        '<span class="Fz(12px)">' + window.KASKUS_lang.go_first_new_post_button + '</span> ' +
        '</a> ' +
        '</li>';
    }
    var elString =
      '<ul> ' +
      '<li class="D(b) Mb(13px)">' +
      subscribeMenuString +
      '</li> ' +
      '<div class="H(1px) Bgc(#d4d4d4)"></div> ' +
      '<li class="D(b) Mb(18px) Mt(15px)"> ' +
      '<a target="_blank" href="' + fb_href + '" data-url="' + fb_url + '" data-threadid="' + threadid + '" onclick="threadlist_facebook_share(\'' + fb_url + '\', \'' + threadid + '\');' + build_ga_track_event("'" + forum_id + " " + title + "'", "'share thread'", "'facebook'") + '" class="D(ib) C(#484848)"> ' +
      '<i class="Mend(12px) Va(m) fab Fz(14px) fa-facebook-square fa-fw"></i> ' +
      '<span class="Fz(12px)">' + window.KASKUS_lang.share_facebook_button + '</span> ' +
      '</a> ' +
      '</li> ' +
      '<li class="D(b) Mb(18px)"> ' +
      '<a target="_blank" href="' + twitter_href + '" data-threadid="' + threadid + '" onclick="threadlist_share_count(\'' + threadid + '\', \'twitter\');' + build_ga_track_event("'" + forum_id + " " + title + "'", "'share thread'", "'twitter'") + '" class="D(ib) C(#484848)"> ' +
      '<i class="Mend(12px) Va(m) fab Fz(14px) fa-twitter-square fa-fw"></i> ' +
      '<span class="Fz(12px)">' + window.KASKUS_lang.share_twitter_button + '</span> ' +
      '</a> ' +
      '</li> ' +
      '<li class="D(b) Mb(18px)"> ' +
      '<a target="_blank" href="' + gplus_href + '" data-threadid="' + threadid + '" onclick="threadlist_share_count(\'' + threadid + '\', \'googleplus\');' + build_ga_track_event("'" + forum_id + " " + title + "'", "'share thread'", "'googleplus'") + '" class="D(ib) C(#484848)"> ' +
      '<i class="Mend(12px) Va(m) fab Fz(14px) fa-google-plus-square fa-fw"></i> ' +
      '<span class="Fz(12px)">' + window.KASKUS_lang.share_google_plus_button + '</span> ' +
      '</a> ' +
      '</li> ' +
      '<div class="H(1px) Bgc(#d4d4d4)"></div>' +
      firstPostButtonString +
      '<li class="D(b)' + (show_button_first_post == 'true' ? '' : ' Mb(18px) Mt(15px)') + '"> ' +
      '<a href="/lastpost/' + threadid + '#post' + last_post_id + '" class="D(ib) C(#484848)" rel="nofollow"> ' +
      '<i class="Mend(12px) Va(m) fas Fz(14px) fa-chevron-square-right fa-fw"></i> ' +
      '<span class="Fz(12px)">' + window.KASKUS_lang.go_last_post_button + '</span> ' +
      '</a> ' +
      '</li> ' +
      '</ul>';
    divMenu.attr('data-created', 'true');
    divMenu.append($.parseHTML(elString));
    $('.jsSubscribeThreadIcon').click(function() {
      subscribeUnsubscribe($(this));
    });
  }
}

function bindThreadListShareMenuData() {
  $('.jsThreadListShareMenuData').click(function() {
    createThreadlistShareMenuData($(this));
  });
}

function forumAllEventTracking() {
  if ($('.jsChannelForumButton').length) {
    $('.jsChannelForumButton').click(function() {
      var action = $(this).attr('data-state');
      var label = $(this).attr('data-id');
      dataLayer.push({
        'event': 'trackEvent',
        'eventDetails.category': 'forumall',
        'eventDetails.action': action + ' channel',
        'eventDetails.label': 'channel-' + label
      });
      if (action === 'open') {
        $(this).attr('data-state', 'close');
      } else {
        $(this).attr('data-state', 'open');
      }

    });
  }
}

function bindForumAllIconCancel() {
  if ($('#search-icon').length) {
    $('#search-icon').click(function() {
      if ($(this).hasClass('fa-times')) {
        $('#search-category').val('');
        hide_forum_all_search_result();
        change_forum_all_icon_search();
      }
    });
  }
}

function bindForumAllSearchResult() {
  if ($('#search-result').length && $('#search-result').children().length) {
    jQuery.expr[":"].icontains = function(a, i, m) {
      return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    $('#search-category').keyup(function(event) {
      phrase = $(this).val();
      if (phrase === '' || phrase === undefined) {
        hide_forum_all_search_result();
        change_forum_all_icon_search();
        return false;
      }
      show_forum_all_search_result();
      change_forum_all_icon_cancel();

      $('#search-result').children().hide();
      search_container = $(".listForumItem span span:icontains(" + phrase + ")");
      search_container.closest(".listForumItem").show();
    });
  }
}

function bindForumAllSubscribeEvent() {
  if ($('[id^=bookmark-forum]').length) {
    $('[id^=bookmark-forum]').click(function() {
      forum_all_toggle_subscribe($(this));
      return false;
    });
  }
  if ($('[id^=bookmark-search-forum]').length) {
    $('[id^=bookmark-search-forum]').click(function() {
      forum_all_toggle_subscribe($(this));
      return false;
    });
  }
}

function show_forum_all_search_result() {
  $('.jsChannelForumItem').hide();
  $('#search-result').show();
}

function hide_forum_all_search_result() {
  $('.jsChannelForumItem').show();
  $('#search-result').hide();
}

function change_forum_all_icon_search() {
  if ($('#search-icon').hasClass('fa-times')) {
    $('#search-icon').removeClass('fa-times');
    $('#search-icon').addClass('fa-search');
  }
}

function change_forum_all_icon_cancel() {
  if ($('#search-icon').hasClass('fa-search')) {
    $('#search-icon').removeClass('fa-search');
    $('#search-icon').addClass('fa-times');
  }
}

function forum_all_toggle_subscribe(element) {
  if (user_id == "") {
    window.location.href = "/user/login/forum/all";
  }
  var id = element.attr('data-id');
  var securitytoken = $('#securitytoken').val();
  var url = '/myforum/unsubscribe/forum/' + id;
  var add_class = 'C(#b3b3b3) D(n)';
  var remove_class = 'C(#f8c31c)';
  var action = 'unsubscribe';
  if (element.hasClass('D(n)')) {
    url = '/myforum/subscribe/forum/' + id;
    add_class = 'C(#f8c31c)';
    remove_class = 'C(#b3b3b3) D(n)';
    action = 'subscribe';
  }
  $.post(url, {
    securitytoken: securitytoken
  }, function(data) {
    if (typeof data.securitytoken !== 'undefined') {
      $('#securitytoken').val(data.securitytoken);
    }
    element.removeClass(remove_class);
    element.addClass(add_class);
    dataLayer.push({
      'event': 'trackEvent',
      'eventDetails.category': 'forumall',
      'eventDetails.action': action,
      'eventDetails.label': 'forum-' + id
    });
  }, 'json');
}

/*
 * get trh in home / channel landing
 */
function bindTrhHome() {
  if ($('#recommended-thread-home').length > 0) {
    $.get(url_recommendation, function(result) {
      if (typeof result !== 'object') {
        result = $.parseJSON(result);
      }

      if (result.result !== false) {
        var trh_data = '';
        var display_trh = '';

        $.each(result.result, function(model_name, thread_data) {
          var counter = 1;
          var total_thread = Object.keys(thread_data).length;

          trh_data += '<div id="' + model_name + '" class="Px(15px) Py(10px) Bgc(#ffffff) Bd(borderSolidLightGrey) Mb(15px)"' + display_trh + '><div class="D(f) Ai(c) Mb(15px)">';
          trh_data += '<img src="' + assetsFolderNew + '/images/ic-rekomendasi-thread.svg" width="28" alt="recommended-thread">';
          trh_data += '<div><span class="Ff(VagRounded) Lts(0.2px) Fz(20px) Mstart(10px) D(ib) Mt(4px) Mend(5px)">';
          trh_data += window.KASKUS_LANG.thread_recommendation_title;
          trh_data += '</span></div></div>';

          $.each(thread_data, function(thread_id, thread_detail) {
            counter++;
            var additional_class = counter < total_thread ? 'Bdb(borderSolidLightGrey) ' : '';
            trh_data += '<a class="C(#4a4a4a)" href="' + thread_detail['href'] + '" onclick="' + thread_detail['ga_track'] + '">';
            trh_data += '<div class="D(f) Mb(10px) ' + additional_class + 'Pb(15px)">';
            trh_data += '<div class="Fx(flexOne) Fw(500) Fz(13px) Lh(19px) Lts(0.1px) ">' + thread_detail['title'] + '</div>';

            if (Boolean(thread_detail['image_source'])) {
              trh_data += '<div class="Fx(flexZero) Mstart(10px)"><img src="' + thread_detail['image_source'] + '" alt="' + thread_detail['slug_title'] + '" data-src="' + thread_detail['data-img-src'] + '" class="mls-img W(60px) H(60px)" ></div>';
            }

            trh_data += '</div></a>';
            display_trh = ' style="display: none;"';
          });

          trh_data += '</div>';
        });

        $('#recommended-thread-home').replaceWith(trh_data);
        $(".mls-img").kslzy(300);

        if (Object.keys(result.result).length > 1) {
          dataLayer.push({
            'event': 'optimize.activate'
          });
        }
      }
    });
  }
}

/*
 * get trh in forum landing / threadlist
 */
function bindTrhThreadList() {
  if ($('#recommended-thread-threadlist').length > 0) {
    $.post(url_recommendation, {
      hot_threads: hot_thread_data
    }, function(result) {
      if (typeof result !== 'object') {
        result = $.parseJSON(result);
      }

      if (result.result !== false) {
        var trh_data = '';
        trh_data += '<div class="Px(15px) Py(10px) Bgc(#ffffff) Bd(borderSolidLightGrey) Mb(15px)">';
        trh_data += '<div class="D(f) Ai(c) Mb(15px)">';
        trh_data += '<img src="' + assetsFolderNew + '/images/ic-rekomendasi-thread.svg" width="28" alt="recommended-thread">';
        trh_data += '<div><span class="Ff(VagRounded) Lts(0.2px) Fz(20px) Mstart(10px) D(ib) Mt(4px) Mend(5px)">';
        trh_data += window.KASKUS_LANG.thread_recommendation_title;
        trh_data += '</span></div></div>';

        var empty_model = 0;
        var first_not_empty_model = '';
        var trh_exist = 0;
        $.each(result.result, function(model, threads) {
          if (Object.keys(threads).length == 0) {
            empty_model++;
          } else if (first_not_empty_model == '') {
            first_not_empty_model = model;
          }
        });

        $.each(result.result, function(model, threads) {
          var total_thread = Object.keys(threads).length;
          $.each(threads, function(thread_id, thread_detail) {
            trh_exist++;
            trh_data += '<a class="C(#484848) Td(n):h ' + thread_detail['model_name'] + '" href="' + thread_detail['href'] + '"';

            if (thread_detail['ga_track']) {
              trh_data += ' onclick="' + thread_detail['ga_track'] + '"';
            }

            trh_data += ' style="display: none;">';
            trh_data += '<div class="D(f) Mb(10px) Pb(15px) ' + thread_detail['border_display'] + '">';
            trh_data += '<div class="Fx(flexOne) D(f) Jc(sb) Fld(c) Mih(60px)"><div class="Fw(500) Lh(16px) C(#4a4a4a) Fz(13px)">';
            trh_data += thread_detail['title'];
            trh_data += '</div>';
            trh_data += '<div class="Fz(12px) C(#9e9e9e) Mt(5px)">';
            trh_data += thread_detail['thread_label'];
            trh_data += '</div></div>';

            if (Boolean(thread_detail['image_source'])) {
              trh_data += '<div class="Fx(flexZero) Mstart(10px)"><img src="' + thread_detail['image_source'] + '" alt="' + thread_detail['slug_title'] + '" data-src="' + thread_detail['data-img-src'] + '" class="mls-img W(60px) H(60px)" ></div>';
            }
            trh_data += '</div></a>';
          });
        });

        trh_data += '</div>';


        if (trh_exist > 0) {
          $('#recommended-thread-threadlist').replaceWith(trh_data);
        }
        $(".mls-img").kslzy(300);

        if (first_not_empty_model != '') {
          $("." + first_not_empty_model).show();
        }

        if (Object.keys(result.result).length > 1 && empty_model == 0) {
          dataLayer.push({
            'event': 'optimize.activate'
          });
        }
      }
    });
  }
}

/**
 * subscribe thread
 */
function bindSubscribeButton() {
  if (typeof subscribeUnsubscribe === "function") {
    $('.jsSubscribeThreadIcon').unbind();
    $('.jsSubscribeThreadIcon').click(function() {
      subscribeUnsubscribe($(this));
    });
  } else {
    window.setTimeout(bindSubscribeButton, 1000);
  }
}

/**
 * whoposted
 */
function bindOpenWhoPosted() {
  if (typeof openWhoPosted === "function") {
    $('.openwhoposted').unbind();
    $('.openwhoposted').on('click', function(e) {
      e.preventDefault();
      openWhoPosted($(this));
    });
  } else {
    window.setTimeout(bindOpenWhoPosted, 1000);
  }
}

function openWhoPosted(el) {
  notice('Please wait...');
  var urlAjax = el.attr('href');
  var urlThread = el.attr('data-content');

  $.ajax({
    url: urlAjax,
    success: function(result) {
      $('#jsModalWhoPosted .modal-body').empty();

      if (typeof result !== 'object') {
        result = $.parseJSON(result);
      }
      whoposted_data = result.result.whoposted;

      var html_view = '';

      html_view += '<div class="Fz(18px) Fw(700) Mb(20px)">Who Posted</div>';
      html_view += '<div class="Ovy(a) Mah(350px) Mb(15px)">';
      html_view += '<table class="W(100%)"><thead><tr><td class="Fw(700) W(50%) Py(5px)">Username</td>';
      html_view += '<td class="Fw(700) W(50%) Py(5px)">Post (' + whoposted_data.total_post + ')</td></tr></thead><tbody>';

      delete whoposted_data.total_post;
      $.each(whoposted_data, function(key, post_info) {
        html_view += '<tr><td class="Py(5px) Td(u):h"><a href="/profile/' + post_info.userid + '" target="_blank">' + post_info.username + '</a></td><td class="Py(5px) Td(u):h"><a href="/viewallposts/' + post_info.userid + '?thread_id=' + result.result.thread_id + '&count=' + post_info.total_post + '">' + post_info.total_post + '</a></td></tr>';
      });

      html_view += '</tbody></table></div><a class="W(125px) Py(8px) Bgc(#1998ed) Bdrs(5px) C(#ffffff) D(ib)" id="btn-show-thread" href="/thread/' + result.result.thread_id + '/' + result.result.slug + '">Show Thread</a>';

      $("#jsModalWhoPosted .modal-body").append(html_view),
        $('#btn-show-thread').attr('href', urlThread);
    }
  });

  return false;
}

$('.openwhoposted').on('click', function(e) {
  e.preventDefault();
  openWhoPosted($(this));
});

var load_ht_without_cursor = 1;
var ht_is_loading = false;
/*
 * show list of HT
 */
function show_ht_channel(channel_id) {
  ht_is_loading = true;
  var scrollCurrent = $(window).scrollTop();
  var next_ht_button = '<a id="ht-next" class="Bgc(#1998ed):h C(#ffffff):h Td(n):h D(b) Py(7px) Px(7px) Fw(500) Ta(c) C(#1998ed) Bd(borderSolidBlue) Bdrs(5px) Mb(10px)" data-tracking="' + data_tracking + '" data-channel="' + channel_id + '">Lanjut Gan!</a>';
  var counter = $('#ht_counter').val();
  var ht_cursor = $('#ht_cursor').val();
  var ht_hash_key = $('#ht_hash_key').val();

  $('#ht-loading-area').html(next_ht_image);
  $.ajax({
    url: "/misc/get_hotthread_channel/" + counter + '/' + channel_id,
    dataType: 'json',
    type: 'post',
    data: {
      cursor: ht_cursor,
      disable_cursor: load_ht_without_cursor,
      exc_thread_ids: ht_hash_key
    },
    success: function(response) {
      $(response.html).insertBefore($("#ht-loading-area"));
      $('#ht-loading-area').html(next_ht_button);
      $('#ht_counter').val(response.counter);

      var old_cursor = $('#ht_cursor').val();

      if (load_ht_without_cursor == 0) {
        if (!response.cursor || old_cursor == response.cursor) {
          removeHtAutoload();
        }
      } else {
        bindHtNext();
      }
      load_ht_without_cursor = response.next;
      $('#ht_cursor').val(response.cursor);
      ht_is_loading = false;
      $(".mls-img").kslzy(300);
      window.scrollTo(0, scrollCurrent);
      $(document.body).trigger("sticky_kit:recalc");
      window.scrollTo(0, scrollCurrent + 1);
      bindSubscribeButton();
      bindOpenWhoPosted();
      bindThreadListShareMenuData();
    },
    error: function() {
      ht_is_loading = false;
      removeHtAutoload();
    }
  });
}

function removeHtAutoload() {
  window.removeEventListener("resize", htloadnext);
  window.removeEventListener("scroll", htloadnext);
  window.removeEventListener("touch", htloadnext);
  window.removeEventListener("click", htloadnext);
  $('#ht-next').hide();
}

function htloadnext() {
  if (ht_is_loading == false && isElementInViewport($('#ht-next'))) {
    var data_channel = $('#ht-next').attr('data-channel');
    var data_tracking = $('#ht-next').attr('data-tracking');
    show_ht_channel(data_channel);
    build_ga_track_event(data_tracking, 'load more', 'hot thread');
  }
}

function bindHtNext() {
  if ($('#ht-next').length > 0) {
    window.addEventListener("resize", htloadnext, {
      passive: !0
    });
    window.addEventListener("scroll", htloadnext, {
      passive: !0
    });
    window.addEventListener("touch", htloadnext, {
      passive: !0
    });
    window.addEventListener("click", htloadnext, {
      passive: !0
    });
  }
}

function isElementInViewport(elm, threshold) {
  threshold = threshold || 0;
  $w = $(window);
  var vpH = $w.height(), // Viewport Height
    st = $w.scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();
  return ((y < (vpH + st + threshold)) && (y > (st - elementHeight - threshold)));
}

var tl_limit = 20;
var tl_is_loading = false;
var tl_page = 1;

/*
 * show list of thread
 */
function show_thread_list(sort, cursor, order) {
  tl_is_loading = true;
  var scrollCurrent = $(window).scrollTop();
  $.post("/misc/get_threadlist_forum_landing/", {
    sort: sort,
    cursor: cursor,
    order: order
  }, function(response) {
    tl_page++;
    var item_count = response.totalcount;
    $(response.html).insertBefore($("#threadlist-loading-area"));
    $('#tl_cursor').val(response.cursor);

    $(".mls-img").kslzy(300);
    window.scrollTo(0, scrollCurrent);
    $(document.body).trigger("sticky_kit:recalc");
    window.scrollTo(0, scrollCurrent + 1);
    bindSubscribeButton();
    bindOpenWhoPosted();
    bindThreadListShareMenuData();

    if (item_count < tl_limit || tl_page > 1000) {
      $('#threadlist-loading-area').hide();
      window.removeEventListener("resize", tlload);
      window.removeEventListener("scroll", tlload);
      window.removeEventListener("touch", tlload);
      window.removeEventListener("click", tlload);
    } else {
      tl_is_loading = false;
    }
  }, "json");
}

/**
 * notice cookie
 */
function updateNotice(notice_id) {
  var cookie_data = $.parseJSON($.cookie('notices'));
  cookie_data.push(notice_id);
  $.cookie('notices', JSON.stringify(cookie_data), {
    expires: null,
    path: "/",
    domain: "",
    secure: false
  });
}

$('.btn_close').click(function() {
  $(this).closest('.jsNoticeBoard').remove();
});

/**
 * set display type
 */
function setThreadDisplay(landing) {
  var islist = $('body').hasClass('is-title');
  var iscompact = $('body').hasClass('is-compact');
  var targettype = 'compact';
  if (iscompact) {
    targettype = 'thumb';
  }
  if (landing == 'forum' && !islist) {
    targettype = 'list';
  }
  $.ajax({
    url: "/misc/set_thread_list_display/" + targettype + "/" + landing,
    success: function(resp) {
      location.reload();
    },
    error: function() {}
  });
}

function bindSetThreadDisplay() {
  if ($('.jsCompactTrigger').length > 0) {
    var data_style = $('.jsCompactTrigger').attr('data-style');
    $('.jsCompactTrigger').click(function() {
      setThreadDisplay(data_style);
    });
  }
}


// Spoiler
function spoiler(spoilerData) {
  if (spoilerData.value == "Show") {
    $(".content_" + $(spoilerData).attr("class")).slideDown(0);
    spoilerData.innerHTML = "";
    spoilerData.value = "Hide";
  } else {
    $(".content_" + $(spoilerData).attr("class")).slideUp(0);
    spoilerData.innerHTML = "";
    spoilerData.value = "Show";
  }
}

//get all smilies
function get_smilies() {
  localSmilies = get_MRU();

  if (localSmilies) {
    var mru_smilies = {
      'smilies': $.param(localSmilies)
    };
  }

  $.ajax({
    method: "POST",
    url: '/misc/get_smilies',
    data: mru_smilies || {},
    success: function(result) {

      result = JSON.parse(result);
      smilies = JSON.parse(result.kaskus);

      $('.smilies-tab').replaceWith(smilies.tab);
      $('.smilies-tab-content').replaceWith(smilies.content);

      if (result.mru) {
        smilies_mru = result.mru;

        $('#content-mru').html(smilies_mru);

        // $('.smiley-tab > .nav-tabs > li[id^="group"]:first').removeClass('active');
        // $('#emoticons .tab-content > .tab-pane[id^="tab"]:first').removeClass('active');

        $('#mru').addClass('active');
        $('#content-mru').addClass('active');

        load_MRU();
      } else {
        $('#mru').hide();
        // $('.smiley-tab > .nav-tabs > li[id^="group"]:first').addClass('active');
        // $('#emoticons .tab-content > .tab-pane[id^="tab"]:first').addClass('active');
      }
      show_tab(".smiley-wrapper .smiley-tab .tab-content > .active");
      $('.smiley-tab__item').not('.smiley-tab__item--unavailable').find('.smilie__in-action').click(function() {
        get_focus();
        smiley_tracking(this.children);
        insert_smilikiti(this.children);
      });
      $('#emoticons').show();
    }
  });
}

//Thread gk make si, tapi cari di backend gk ad yg pake please recheck
function printDiv(divId) {
  window.frames["print_frame"].document.body.innerHTML = document.getElementById(divId).innerHTML;
  window.frames["print_frame"].window.focus();
  window.frames["print_frame"].window.print();
}

//get most recent used smiley
function get_MRU() {
  var temp = [];

  if (localStorage[mru_key]) {
    mru = JSON.parse(localStorage[mru_key]);

    if (mru) {
      for (var a in mru) {
        if (a.search("smilie") > -1) {
          temp.push(mru[a]);
        }
      }
      var data = {
        smilies: temp
      };
    }
  }

  return data || {};
}

//load most recent used smilies
function load_MRU() {
  var x = $('#content-mru').find('.loadMRU');

  if (x) {
    $.each(x, function(i, smilie) {
      $(smilie).attr('src', $('.loadSmilies[alt="' + $(smilie).attr('alt') + '"]').attr('data-src'));
      $(smilie).attr('title', $('.loadSmilies[alt="' + $(smilie).attr('alt') + '"]').attr('title'));
      $(smilie).removeAttr('class');
    });
  }

  return true;
}

//tab smilies
function show_tab(tab_number) {
  var x = $(tab_number).find('.loadSmilies');

  if (x) {
    $.each(x, function(i, smilie) {
      $(smilie).attr('src', $(smilie).attr('data-src'));
      $(smilie).removeAttr('data-src');
      $(smilie).removeAttr('class');
    });
  }

  return true;
}

//insert smilies
function insert_smilikiti(a) {
  if (localStorage) {
    var smilies = JSON.parse(localStorage.getItem(mru_key));

    if (smilies) {
      for (var b in smilies) {
        if (b === ('smilie' + $(a).attr("alt"))) {
          delete smilies[b];
        }
      }
    } else {
      var smilies = new Object();
    }

    if (mru_limit == Object.keys(smilies).length) {
      delete smilies[Object.keys(smilies)[0]];
    }

    smilies['smilie' + $(a).attr("alt")] = $(a).attr("alt");

    localStorage.setItem(mru_key, JSON.stringify(smilies));
  }
  emoticon = $(a).attr("alt") + " ",
    $.markItUp({
      replaceWith: emoticon
    })
  if ($.cookie('use_old_qnt') !== "1") {
    if (sceditorInstance.inSourceMode()) {
      sceditorInstance.insert($(a).attr("alt"))
    } else {
      sceditorInstance.insert('<img src="' + $(a).attr("src") + '" data-sceditor-emoticon="' + $(a).attr("alt") + '" border="0" alt="emoticon-' + $(a).attr("title") + '" title="' + $(a).attr("title") + '">', null, false);
    }
  }
}

// Jump to page thread detail
function jump_page(e) {
  var t = $("#" + e).val();
  var n = $(".url_jump").val();
  window.location.href = n + t;
}


//click video gif
function clickVideo(el) {
  if ((' ' + el.className + ' ').indexOf(' playing ') > -1) {
    el.className = el.className.replace(/(?:^|\s)playing(?!\S)/g, '');
    var video = el.getElementsByTagName('video')[0];
    video.setAttribute("src", "");
    video.pause();
    while (video.firstChild) {
      video.removeChild(video.firstChild);
    }
  } else {
    el.className += " playing";
    var source = document.createElement('source');
    source.src = el.getAttribute('data-src');
    source.type = "video/mp4";
    el.getElementsByTagName('video')[0].setAttribute("src", el.getAttribute('data-src'));
    el.getElementsByTagName('video')[0].appendChild(source);
    el.getElementsByTagName('video')[0].play();

    if (el.hasAttribute('data-threadid')) {
      listThreadId.push(el.getAttribute('data-threadid'));
      el.removeAttribute('data-threadid');
      updateView();
    }
  }
}

function showMe(box) {
  var chboxs = document.getElementsByName("timeout");
  var vis = "none";
  var timeout = 0;
  for (var i = 0; i < chboxs.length; i++) {
    if (chboxs[i].checked) {
      vis = "block";
      timeout = 1;
      break;
    }
  }
  $("input[name=timeout]").val(timeout);
  document.getElementById(box).style.display = vis;
}

function changeValueCreatedPoll(obj) {
  var value = $("input[name=created_poll]").val();
  $("input[name=created_poll]").val(1 - value);
}

function checkcreatedPoll() {
  if ($("input[name=created_poll]").val() == 1) {
    $('.sceditor-button-polling').addClass("active createdPoll");
  }
}


/*
  This Section Belongs to SCEditor Related Code in Create Thread
 */


if (document.getElementById('jsToolbarSCEditor') != null) {
  // Spoiler Button
  var spoilerTemplate = '<div class="spoiler sceditor-ignore"><span class="spoiler-head sceditor-ignore"><span class="spoiler-label">Spoiler</span>&nbsp;for <span class="spoiler-title">%title%</span>: <input type="button" value="Hide" class="spoiler-btn open" onclick="this.parentElement.parentElement.nextSibling.classList.toggle(\'open\');this.parentElement.parentElement.nextSibling.nextSibling.classList.toggle(\'open\');this.value=this.value==\'Hide\'?\'Show\':\'Hide\'"></span></div><div class="spoiler-mid sceditor-ignore"></div><div class="spoiler-content expandable open" data-title="%title%">%content%</div>';

  sceditor.formats.bbcode.set(
    'spoiler', {
      tags: {
        "div": {
          class: ['spoiler-content expandable open', 'spoiler-content expandable']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        var spoilerTitle = $(element).data('title') || "spoiler";
        return '[spoiler=' + spoilerTitle + ']' + content + '[/spoiler]';
      },
      html: function(token, attr, content) { // bbcode2html
        var spoilerTitle = attr.defaultattr.replace(/"/g, '&quot;');
        var result = spoilerTemplate.replace(/%title%/g, spoilerTitle).replace(/%content%/g, content);
        return result;
      },
      isInline: false,
      quoteType: sceditor.BBCodeParser.QuoteType.never
    }
  );

  sceditor.command.set("spoiler", {
    exec: function() {
      create_spoiler(this);
    },
    txtExec: function() {
      create_spoiler(this);
    },
    tooltip: "Masukkan Spoiler"
  });

  function create_spoiler(sceInstance) {
    swal("Masukkan Judul Spoiler:", {
        content: "input",
      })
      .then((value) => {
        if (value !== null) {
          if (!$('.sceditor-button-source').hasClass('active')) {
            value = value.replace(/"/g, '&quot;') || "spoiler";
          }
          sceInstance.insert('[spoiler=' + value + ']', '[/spoiler]');
        }

      });
  }

  sceditor.formats.bbcode.set(
    'img', {
      allowsEmpty: true,
      tags: {
        img: {
          src: null
        },
        video: {
          class: ['c-giphy__preview']
        }
      },
      allowedChildren: ['#'],
      quoteType: sceditor.BBCodeParser.QuoteType.never,
      format: function(element, content) {
        if ($(element).attr('data-sceditor-emoticon')) {
          return content;
        }
        var link = $(element).attr('src') ? $(element).attr('src') : $(element).attr('data-src');
        var matches = link.split(new RegExp('(.+giphy\.com.+)\/.+\.mp4$'));

        link = matches[1] ? matches[1] + '/giphy.gif' : link;

        return '[img]' + link + '[/img]';
      },
      html: function(token, attrs, content) {
        var matches = content.split(new RegExp('(.+giphy\.com.+)\/.+\.gif$'));

        if (matches[1]) {
          content = matches[1] + '/giphy-downsized-small.mp4';
          return '<video class="c-giphy__preview" autoplay loop data-src="' + sceditor.escapeUriScheme(content) + '"> <source src="' + sceditor.escapeUriScheme(content) + '" type="video/mp4"> </video>';
        }

        return '<img src="' + sceditor.escapeUriScheme(content) + '" />';
      }
    });
  // END_COMMAND

  // Quote Button

  var quoteTemplate = '<div class="sceditor-ignore quote-mark">Quote:</div>\
  <div class="quote expandable" data-by="%quotedBy%" data-postid="%quotedPostId%">%cite%%content%</blockquote></div>';

  sceditor.formats.bbcode.set(
    'quote', {
      tags: {
        "div": {
          "class": ['quote expandable']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        var by = $(element).data('by');
        var postId = $(element).data('postid');
        var param = '';
        if (by !== '' && postId !== '') {
          param = '=' + by + ';' + postId;
        }
        return '[quote' + param + ']' + content + '[/quote]';
      },
      html: function(token, attr, content) { // bbcode2html
        var cite = '';
        var quotedBy = '';
        var quotedPostId = '';
        if (attr.defaultattr) {
          var seg = attr.defaultattr.split(';');
          quotedBy = seg[0];
          if (quotedBy) {
            quotedPostId = seg[1] || '';
            cite = '<cite class="sceditor-ignore">Original Posted By <b>' + quotedBy + '</b> ';
            cite += '<a href="/post/' + quotedPostId + '#post' + quotedPostId + '">►</a></cite>';
          }
        }
        var result = quoteTemplate.replace(/%quotedBy%/g, quotedBy).replace(/%quotedPostId%/g, quotedPostId).replace(/%cite%/g, cite).replace(/%content%/g, content);
        return result;
      },
      isInline: false,
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  sceditor.command.set("quote", {
    exec: function() {
      this.insert("[quote]", "[/quote]");
    },
    txtExec: function() {
      this.insert("[quote]", "[/quote]");
    },
    tooltip: "Masukkan Quote"
  });


  // Smilies Button

  sceditor.command.set('smilies', {
    exec: function() {
      toggleSmilies();
    },
    txtExec: function() {
      toggleSmilies();
    },
    tooltip: 'Masukkan Smilies'
  });

  function toggleSmilies() {
    if ($('.jsExtraForm:visible').length == 1 && $('.jsSmiliesEditor:visible').length == 0) {
      $('.jsExtraForm').hide();
      $('.sceditor-button-polling.active, .sceditor-button-media.active, .sceditor-button-smilies.active').removeClass('active');
    }
    if ($('.jsSmiliesEditor:visible').length == 0) {
      $('.jsSmiliesEditor').show();
      $('.sceditor-button-smilies').addClass("active");
      //var scrollTo = $("#jsToolbarSCEditor").offset().top - ($(window).height() - $('.jsSmiliesEditor').outerHeight(true) - $('#jsToolbarSCEditor').outerHeight(true)) + 50;
    } else {
      $('.jsSmiliesEditor').hide();
      $('.sceditor-button-smilies').removeClass("active");
      //var scrollTo = $("#jsToolbarSCEditor").offset().top - ($(window).height() - $('#jsToolbarSCEditor').outerHeight(true)) + 50;
    }
    // $('html, body').animate({
    //   scrollTop: scrollTo
    // }, 500);
  }

  // Polling Button

  sceditor.command.set("polling", {
    exec: function() {
      togglePolling();
    },
    txtExec: function() {
      togglePolling();
    },
    tooltip: "Buat Poll"
  });

  function togglePolling() {
    // if($('.jsExtraForm:visible').length == 1 && $('.jsPollingForm:visible').length == 0){
    //   $('.jsExtraForm').hide();
    //   $('.sceditor-button-polling.active, .sceditor-button-media.active, .sceditor-button-smilies.active').removeClass('active');
    // }
    if ($('.jsPollingForm:visible').length == 0) {
      $('.jsPollingForm').slideDown();
      $('.sceditor-button-polling').addClass("active createdPoll");
      //var scrollTo = $("#jsToolbarSCEditor").offset().top - ($(window).height() - $('.jsPollingForm').outerHeight(true) - $('#jsToolbarSCEditor').outerHeight(true)) + 50;
      var scrollTo = $(".jsExtraFormContainer").offset().top;
    } else {
      swal({
          text: "Poll akan dihapus. Yakin?",
          icon: "warning",
          buttons: ["Batal", "Hapus"],
          dangerMode: true,
        })
        .then((akanHapus) => {
          if (akanHapus) {
            $('.jsPollingForm').slideUp();
            $('.sceditor-button-polling').removeClass("active createdPoll");
            var scrollTo = $("#jsToolbarSCEditor").offset().top;
            $('html, body').animate({
              scrollTop: scrollTo
            }, 400);
          }
        });
    }
    $('html, body').animate({
      scrollTop: scrollTo
    }, 400);
  }

  // Link Button
  sceditor.command.set("link", {
    exec: function() {
      insertLink(this);
    },
    txtExec: function() {
      insertLink(this);
    },
    tooltip: "Masukkan Link"
  });

  function insertLink(sceInstance) {
    var selectedText = sceInstance.toBBCode(sceInstance.getRangeHelper().selectedHtml().toString());
    var el =
      `<div class="Ta(s)">\
        <div class="Fz(16px) Mb(10px)">URL:</div>\
        <input class="swal-content__input" id="jsLinkInputUrl" placeholder="http://">\
        <div class="Fz(16px) My(10px)">Text to display:</div>\
        <input value="` + selectedText +`" class="swal-content__input" id="jsLinkMediaInputText" placeholder="Link Url">\
      </div>`;
    var elNode = $.parseHTML(el);
    swal({
        content: elNode[0],
        buttons: {
          confirm: {
            value: "",
          },
        },
      })
      .then((value) => {
        var linkInput = $('#jsLinkInputUrl').val();
        var linkText = $('#jsLinkMediaInputText').val();
        if(!selectedText){
          console.log("tidak ada text");
          sceInstance.wysiwygEditorInsertHtml(
            '<a href="' + linkInput + '">' + linkText + '</a>'
          );
        }
        else{
          if (linkInput !== "") {
            sceInstance.insert("[url="+linkInput+"]", "[/url]");
          }
        }

      });
  }
  $(document).on("click", ".jsDivCounter", function() {
    sceditorInstance.focus();
    var rangeHelper = sceditorInstance.getRangeHelper();
    var range = rangeHelper.cloneSelected();

    // Handle DOM ranges, if you casre about IE < 9
    // you'll need to handle TextRanges too
    if ('selectNodeContents' in range) {
        var bodyChildren = sceditorInstance.getBody().children;

        // Select the last child of the body
        range.selectNodeContents(bodyChildren[bodyChildren.length - 1]);

        // Move cursor to after it
        range.collapse(false);
        rangeHelper.selectRange(range);
    }
  });

  // Media Button
  $(document).on("click", ".jsEmbedMediaButton", function() {
    var el =
      `<div>\
      <input class="swal-content__input" id="jsEmbedMediaInputUrl" placeholder="Link Url">\
    </div>\
    <div class="Ta(c)">\
      <div class="My(15px)">Supported Media</div>\
      <div>\
        <i title="Youtube" class="fab fa-youtube"></i>\
        <i title="Vimeo" class="fab fa-vimeo-square"></i>\
        <i title="Soundcloud" class="fab fa-soundcloud"></i>\
        <i title="Twitch" class="fab fa-twitch"></i>\
        <i title="Facebook Video" class="icon icon-facebook-video"></i>\
        <i title="Dailymotion" class="icon icon-daily-motion"></i>\
        <i title="Smule" class="icon icon-smule"></i>\
      </div>\
    </div>`;
    var elNode = $.parseHTML(el);
    swal({
        text: "Masukkan URL Embed:",
        content: elNode[0],
        buttons: {
          confirm: {
            value: "",
          }
        }
      })
      .then((value) => {
        var urlEmbed = document.getElementById('jsEmbedMediaInputUrl').value;
        inserEmbedMedia(sceditor.instance(textareaSCeditor), urlEmbed);
      });
  });



  // Youtube
  var youtubeTemplate = '<div class="sceditor-ignore youtube-player" onclick="this.nextElementSibling.style.display=\'block\'; this.style.display=\'none\';\
  this.nextElementSibling.src =\'https://www.youtube.com/embed/{id}?autoplay=1\'">\
  <div class="sceditor-ignore"><div class="icon" style="background-image:url(https://img.youtube.com/vi/{id}/0.jpg);padding-bottom:56.25%; width:100%; height: 0; background-size: cover; background-position:center; max-width: 100%"></div>\
  </div></div>\
  <iframe data-id="{id}" class="youtube-iframe" style="display:none" type="text/html" width="100%" height="350" frameborder="0"></iframe>';
  var youtubeId;

  function getYoutubeId(url) {
    var regExp = /(^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?|^)([^#\&\?]*).*/;
    var match = url.match(regExp);

    return (match && match[8].length === 11) ? match[8] : false;
  }

  sceditor.formats.bbcode.set(
    'youtube', {
      tags: {
        "iframe": {
          class: ['youtube-iframe']
        }
      },
      allowsEmpty: false,
      breakAfter: true,
      format: function(element, content) { // html2bbcode
        return '[youtube]' + $(element).data('id') + '[/youtube]';
      },
      html: function(token, attr, content) { // bbcode2html
        if (youtubeId = getYoutubeId(content))
          return youtubeTemplate.replace(/\{id\}/gi, youtubeId);
        else
          return '';
      },
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  // Vimeo
  var vimeoTemplate = '<iframe class="vimeo-player" data-id="{id}" src="https://player.vimeo.com/video/{id}?title=0&byline=0&portrait=0" \
  width="520" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
  var vimeoId;

  sceditor.formats.bbcode.set(
    'vimeo', {
      tags: {
        "iframe": {
          class: ['vimeo-player']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[vimeo]' + $(element).data('id') + '[/vimeo]';
      },
      html: function(token, attr, content) { // bbcode2html
        if (vimeoId = getVimeoId(content))
          return vimeoTemplate.replace(/\{id\}/gi, vimeoId);
        else
          return '';
      },
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  function getVimeoId(url) {
    var regExp = /(vimeo\.com\/|^)(\d+)/;
    var match = url.match(regExp);
    return (match) ? match[2] : false;
  }

  // KASKUS Podcast Program
  var KASKUS_PODCAST_URL;
  var podcastProgramTemplate = '<iframe id="player" type="text/html" src="' + KASKUS_PODCAST_URL + '/widget/{user}/program/{slug}?embed=true" frameborder="0" class="iframe-podcast-program" data-id="{slug}" data-user="{user}" width="100%" scrolling="no" allowfullscreen></iframe>';
  sceditor.formats.bbcode.set(
    'kaskuspodcast_program', {
      tags: {
        "iframe": {
          class: ['iframe-podcast-program']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[kaskuspodcast_program="' + $(element).data('user') + '"]' + $(element).data('id') + '[/kaskuspodcast_program]';
      },
      html: function(token, attr, content) { // bbcode2html
        return podcastProgramTemplate.replace(/\{slug\}/gi, content).replace(/\{user\}/gi, attr.defaultattr);
      },
      breakAfter: true,
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  var podcastEpisodeTemplate = '<iframe id="player" type="text/html" src="' + KASKUS_PODCAST_URL + '/widget/{user}/episode/{id}?embed=true" frameborder="0" class="iframe-podcast-episode" data-id="{id}" data-user="{user}" width="100%" scrolling="no" allowfullscreen></iframe>';
  sceditor.formats.bbcode.set(
    'kaskuspodcast_episode', {
      tags: {
        "iframe": {
          class: ['iframe-podcast-episode']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[kaskuspodcast_episode="' + $(element).data('user') + '"]' + $(element).data('id') + '[/kaskuspodcast_episode]';
      },
      html: function(token, attr, content) { // bbcode2html
        return podcastEpisodeTemplate.replace(/\{id\}/gi, content).replace(/\{user\}/gi, attr.defaultattr);
      },
      breakAfter: true,
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  // KASKUS Video
  sceditor.formats.bbcode.set(
    'kaskus_video', {
      tags: {
        "iframe": {
          class: ['kaskus_video']
        },
        "div": {
          class: ['kaskus_video']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[kaskus_video]' + $(element).data('id') + '[/kaskus_video]';
      },
      html: function(token, attr, content) { // bbcode2html
        var videoId = content.match(/[0-9a-f]{24}/)[0];
        return '<iframe class="kaskus_video" data-id="' + videoId + '" style="display: block;" width="95%" height="350" frameborder="0" src="' + KASKUS_URL + '/embed/' + videoId + '"></iframe>'
      },

      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  function getKaskusVideoId(url) {
    var regExp = /[0-9a-f]{24}/;
    var match = url.match(regExp);
    return (match) ? match[1] : false;
  }

  //VIDEO
  sceditor.formats.bbcode.set(
    'video', {
      tags: {
        a: {
          class: ['toggle-play']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[video]' + $(element).find('source').attr('src') + '[/video]';
      },
      html: function(token, attr, content) { // bbcode2html
        var video_tag = '<video preload="auto" poster="' + content + '.png" loop="" muted="" title="" width="100%"><source src="' + content + '" type="video/mp4"></video>';

        return '\
  			<a class="toggle-play" href="' + content + '" data-src="' + content + '" onclick="clickVideo(this);return false;">\
  				' + video_tag + '\
  				<span>\
  					<span class="empty-space"></span>\
  					<span class="gif-space">GIF</span>\
  				</span>\
  			</a>'
        // return '<video class="upload_video" preload="auto" poster="' + content + '.png" loop="" muted="" title="" width="100%"><source src="' + content + '" type="video/mp4"></video>';
      },

      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  // Twitch

  var twitchTemplate = '<div class="sceditor-ignore twitch-player" onclick="this.nextElementSibling.style.display=\'block\'; this.style.display=\'none\';this.nextElementSibling.src =\'/embed/video/{type}/{id}\'" style="max-width: 100%;margin: 0 auto;display:inline-block;">\
  <div class="sceditor-ignore" style="position:relative;cursor:pointer;display:inline-block; overflow: hidden;">\
  <img src="/embed/thumbnail_video_third_party/{type}/{id}" style="max-width: 100%" alt="{thread_title}" />\
  <i></i></div></div>\
  <iframe data-type="{type}" data-id="{id}"  class="twitch-iframe" style="display:none" type="text/html" width="100%" height="350" frameborder="0"></iframe>';
  sceditor.formats.bbcode.set(
    'twitch', {
      tags: {
        "iframe": {
          class: ['twitch-iframe']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[twitch="' + $(element).data('type') + '"]' + $(element).data('id') + '[/twitch]';
      },
      html: function(token, attr, content) { // bbcode2html
        return twitchTemplate.replace(/\{id\}/gi, content).replace(/\{type\}/gi, attr.defaultattr);
      },
      breakAfter: true,
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  function getTwitchId(url) {
    var regexExp = new RegExp(/(?:https?:\/\/)?(?:(.*?)(?:\.)?)twitch\.tv\/((?:(videos)\/)|\?.*(?:(?:(clip|channel)=)|(?:(video)=v?))|(?:(?:embed\?.*?clip=)))?(.*?)(\]|\[|&|$)/g);
    var match = regexExp.exec(url);
    if (match === null) {
      return false;
    }
    var result = [];
    result['id'] = match[6];
    if (match[1] == 'clips') {
      result['type'] = 'twitch_clip'
    } else if (match[3] && match[6]) {
      result['type'] = 'twitch_video'
    } else {
      result['type'] = 'twitch_channel';
    }
    return result;
  }

  // Facebook Video

  var fbvideoTemplate = '<iframe id="fb-video" data-user="{user}" data-id="{id}" src="https://www.kaskus.co.id/embed/facebook/{user}/{id}" class="fb_video{id}" frameborder="0" allowfullscreen height="450px" width="100%" scrolling="no" onload="function resizeIframeFBBody(e){try{var t=JSON.parse(e.data); if( \'fb_video\' == t.type ){var vel = document.getElementsByClassName(\'fb_video\'+t.id); for(var v = 0; v < vel.length; v ++){if(vel[v].className.indexOf(\'resized\') > -1) continue; vel[v].className += \' resized\';vel[v].setAttribute(\'height\', t.height); if(t.width !== undefined){ vel[v].setAttribute(\'width\', t.width); };};};}catch(e){}}window.addEventListener(\'message\',resizeIframeFBBody,!1);"></iframe>';

  sceditor.formats.bbcode.set(
    'fb_video', {
      tags: {
        "iframe": {
          id: ['fb-video']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[fb_video="' + $(element).data('user') + '"]' + $(element).data('id') + '[/fb_video]';
      },
      html: function(token, attr, content) { // bbcode2html
        return fbvideoTemplate.replace(/\{id\}/gi, content).replace(/\{user\}/gi, attr.defaultattr);
      },
      breakAfter: true,
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  function getFbvideoId(url) {
    var regexExp = new RegExp(/http(?:s?):\/\/(?:www\.|web\.|m\.)?facebook\.com\/([A-z0-9\.]+)\/videos(?:\/[0-9A-z].+)?\/(\d+)(?:.+)?$/g);
    var match = regexExp.exec(url);
    if (match === null) {
      return false;
    }
    var result = [];
    result['user'] = match[1];
    result['id'] = match[2];
    return result;
  }

  // Soundcloud

  var soundcloudTemplate = '<iframe class="soundcloud-player" data-id="{id}" width="100%" height="166" scrolling="no" frameborder="no" \
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{id}&color=1484ce&auto_play=false"></iframe>';
  var soundcloudId;

  sceditor.formats.bbcode.set(
    'soundcloud', {
      tags: {
        "iframe": {
          class: ['soundcloud-player']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[soundcloud]' + $(element).data('id') + '[/soundcloud]';
      },
      html: function(token, attr, content) { // bbcode2html
        if (soundcloudId = getSoundCloudId(content))
          return soundcloudTemplate.replace(/\{id\}/gi, soundcloudId);
        else
          return '';
      },
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  function getSoundCloudId(url) {
    var regExp = /(tracks\/|^)(\d+)/;
    var match = url.match(regExp);
    return (match) ? match[2] : false;
  }

  // Dailymotion

  var dailymotionTemplate = '<div class="dailymotion-wrapper sceditor-ignore" onclick="this.nextElementSibling.style.display=\'block\';\
  this.style.display=\'none\';this.nextElementSibling.src =\'//www.dailymotion.com/embed/video/{id}?autoplay=1\'"><div>\
  <img src="https://www.dailymotion.com/thumbnail/video/{id}" alt="{thread_title}" /><i></i></div></div>\
  <iframe class="dailymotion-iframe" style="display:none" data-id="{id}" type="text/html" width="100%" height="350" frameborder="0"></iframe>';
  var dailymotionId;

  sceditor.formats.bbcode.set(
    'dailymotion', {
      tags: {
        "iframe": {
          class: ['dailymotion-iframe']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[dailymotion]' + $(element).data('id') + '[/dailymotion]';
      },
      html: function(token, attr, content) { // bbcode2html
        if (dailymotionId = getDailymotionId(content))
          return dailymotionTemplate.replace(/\{id\}/gi, dailymotionId);
        else
          return '';
      },
      breakAfter: true,
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  function getDailymotionId(url) {
    var regExp = /(?:(?:(?:dailymotion\.com(?:\/video|\/hub)|dai\.ly))\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=(?:[a-z0-9]+))?|(^[0-9a-z]+$))/i;
    var match = url.match(regExp);
    return (match) ? (match[1] || match[2]) : false;
  }

  // Smule
  var smuleTemplate = '<iframe class="smule-player" data-id="{id}" frameborder="0" width="100%" height="125" \
  src="https://www.smule.com/recording/preview/{id}/frame" scrolling="no"></iframe>';
  var smuleId;

  sceditor.formats.bbcode.set(
    'smule', {
      tags: {
        "iframe": {
          class: ['smule-player']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[smule]' + $(element).data('id') + '[/smule]';
      },
      html: function(token, attr, content) { // bbcode2html
        if (smuleId = getSmuleId(content))
          return smuleTemplate.replace(/\{id\}/gi, smuleId);
        else
          return '';
      },

      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  function getSmuleId(url) {
    var regExp = /(\d+_\d+)/i;
    var match = url.match(regExp);
    return (match) ? match[1] : false;
  }

  //KaskusTV VOD
  var kaskuTvVodTemplate = '<div class="sceditor-ignore" onclick="this.nextSibling.style.display=\'block\'; this.style.display=\'none\';this.nextSibling.src =\'//tv.kaskus.co.id/api/embed/live/{id}?autoplay&player_medium=kaskus-thread\'" style="max-width: 100%;margin: 0 auto;display:inline-block;">\
  <div style="position:relative;cursor:pointer;display:inline-block">\
  <img src="//tv.kaskus.co.id/api/live/{id}/thumbnail" width="700" height="350" style="max-width:100%" alt="{thread_title}" />\
  <i style="background: url(//s.kaskus.id/img/icon/player-yt-icon.png) center center no-repeat;height: 41px;left: 50%;margin: -20px 0 0 -30px;position:absolute;top: 50%;width: 60px;-moz-border-radius: 5px;opacity: 0.8;"></i>\
  </div>\
  </div><iframe data-id="{id}" class="kaskustv-vod-iframe" style="display:none" type="text/html" width="100%" height="350" frameborder="0"/></iframe>';

  sceditor.formats.bbcode.set(
    'kaskustv', {
      tags: {
        "iframe": {
          class: ['kaskustv-vod-iframe']
        }
      },
      allowsEmpty: false,
      breakAfter: true,
      format: function(element, content) { // html2bbcode
        console.log(element);
        return '[kaskustv]' + $(element).data('id') + '[/kaskustv]';
      },
      html: function(token, attr, content) { // bbcode2html
        return kaskuTvVodTemplate.replace(/\{id\}/gi, content);
      },
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  //KASKUSTV Live
  var KaskusTvLivetemplate = '<div class="sceditor-ignore" onclick="this.nextSibling.style.display=\'block\'; this.style.display=\'none\';this.nextSibling.src =\'//tv.kaskus.co.id/api/embed/live/{id}?autoplay&player_medium=kaskus-thread\'" style="max-width: 100%;margin: 0 auto;display:inline-block;">\
  <div style="position:relative;cursor:pointer;display:inline-block">\
  <img src="//tv.kaskus.co.id/api/live/{id}/thumbnail" width="700" height="350" style="max-width:100%" alt="{thread_title}" />\
  <i style="background: url(//s.kaskus.id/img/icon/player-yt-icon.png) center center no-repeat;height: 41px;left: 50%;margin: -20px 0 0 -30px;position:absolute;top: 50%;width: 60px;-moz-border-radius: 5px;opacity: 0.8;"></i>\
  </div>\
  </div><iframe  data-id="{id}" class="kaskustv-live-iframe" style="display:none" type="text/html" width="100%" height="350" frameborder="0"/></iframe>';
  sceditor.formats.bbcode.set(
    'kaskustv_live', {
      tags: {
        "iframe": {
          class: ['kaskustv-live-iframe']
        }
      },
      allowsEmpty: false,
      breakAfter: true,
      format: function(element, content) { // html2bbcode
        return '[kaskustv_live]' + $(element).data('id') + '[/kaskustv_live]';
      },
      html: function(token, attr, content) { // bbcode2html
        return kaskuTvVodTemplate.replace(/\{id\}/gi, content);
      },
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  //KASKUS LIVE
  var KaskusLiveTemplate = '<iframe src="//live.kaskus.co.id/thread/info/{id}" data-id="{id}" class="livethread_iframe" width="100%" height="350px" frameborder="0"></iframe>';
  sceditor.formats.bbcode.set(
    'kaskus_live', {
      tags: {
        "iframe": {
          class: ['livethread_iframe']
        }
      },
      allowsEmpty: false,
      breakAfter: true,
      format: function(element, content) { // html2bbcode
        return '[livethread]' + $(element).data('id') + '[/livethread]';
      },
      html: function(token, attr, content) { // bbcode2html
        return KaskusLiveTemplate.replace(/\{id\}/gi, content);
      },
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  sceditor.command.set('media', {
    exec: function() {
      toggleMedia();
    },
    txtExec: function() {
      toggleMedia();
    },
    tooltip: 'Masukkan Media'
  });

  function toggleMedia() {
    if ($('.jsExtraForm:visible').length == 1 && $('.jsEmbedMediaForm:visible').length == 0) {
      $('.jsExtraForm').hide();
      $('.sceditor-button-polling.active, .sceditor-button-media.active, .sceditor-button-smilies.active').removeClass('active');
    }
    if ($('.jsEmbedMediaForm:visible').length == 0) {
      $('.jsEmbedMediaForm').show();
      $('.sceditor-button-media').addClass("active");
      //var scrollTo = $("#jsToolbarSCEditor").offset().top - ($(window).height() - $('.jsEmbedMediaForm').outerHeight(true) - $('#jsToolbarSCEditor').outerHeight(true)) + 50;
    } else {
      $('.jsEmbedMediaForm').hide();
      $('.sceditor-button-media').removeClass("active");
      //var scrollTo = $("#jsToolbarSCEditor").offset().top - ($(window).height() - $('#jsToolbarSCEditor').outerHeight(true)) + 50;
    }
    // $('html, body').animate({
    //   scrollTop: scrollTo
    // }, 500);
  }

  function inserEmbedMedia(sceditor, url) {
    var template;
    var embedMediaId;

    if (getYoutubeId(url)) {
      embedMediaId = getYoutubeId(url);
      sceditor.insert("[youtube]" + embedMediaId + "[/youtube]");
    } else if (getFbvideoId(url)) {
      embedMediaId = getFbvideoId(url);
      sceditor.insert('[fb_video="' + embedMediaId['user'] + '"]' + embedMediaId['id'] + "[/fb_video]");
    } else if (getVimeoId(url)) {
      embedMediaId = getVimeoId(url);
      sceditor.insert("[vimeo]" + embedMediaId + "[/vimeo]");
    } else if (getTwitchId(url)) {
      embedMediaId = getVimeoId(url);
      sceditor.insert("[twitch]" + embedMediaId['id'] + "[/twitch]");
    } else if (getSoundCloudId(url)) {
      embedMediaId = getSoundCloudId(url);
      sceditor.insert("[soundcloud]" + embedMediaId + "[/soundcloud]");
    } else if (getDailymotionId(url)) {
      embedMediaId = getDailymotionId(url);
      sceditor.insert("[dailymotion]" + embedMediaId + "[/dailymotion]");
    } else if (getKaskusVideoId(url)) {
      embedMediaId = getKaskusVideoId(url);
      sceditor.insert("[kaskus_video]" + embedMediaId + "[/kaskus_video]");
    } else {
      swal("Tidaaaak!", "Link URL yang Agan Masukkan Salah!", "error");
    }
  }

  $(document).on('click', '.jsButtonValidate', function(e) {
    $('.sceditor-button-validate div').click();
  });

  $(document).on('click', '.jsButtonBBCode', function(e) {
    $('.sceditor-button-source div').click();
    if (sceditorInstance.val() != '') {
      $(sceditorInstance.getBody()).removeClass("placeholder");
    }
    if ($('.sceditor-button-source').hasClass('active')) {
      $('.jsButtonBBCode').addClass('is-active');
    } else {
      $('.jsButtonBBCode').removeClass('is-active');
    }
    if ($('.sceditor-button-validate').hasClass('disabled')) {
      $('.jsButtonValidate').addClass('is-disabled');
      $(".jsButtonValidate").prop('disabled', true);

    } else {
      $('.jsButtonValidate').removeClass('is-disabled');
      $(".jsButtonValidate").prop('disabled', false);
    }
    var target = $(e.currentTarget);
    var textarea_bbcode = $('.sceditor-container textarea');
    if (target.hasClass('active')) {
      textarea_bbcode.css({
        "padding-top": "20px",
        "padding-left": "10px"
      });
      textarea_bbcode.width(textarea_bbcode.parent('div').width() - 10);
      setTimeout(function() {
        textarea_bbcode.css("height", "1px");
        textarea_bbcode.css("height", textarea_bbcode.prop("scrollHeight") + 'px');
      }, 100);
    } else {
      textarea_bbcode.css({
        "padding": "0px"
      });
      var added = sceditorInstance.val().trimRight();
      if (added !== '') {
        sceditorInstance.val(added + '\n');
      }
      push_validate();
      setTimeout(function() {
        sceditorInstance.expandToContent();
      }, 1000);
    }
  });



  // VALIDATE
  sceditor.command.set("validate", {
    exec: function() {
      push_validate();
    },
    tooltip: "Validasi"
  });

  function push_validate() {
    sceditorInstance.readOnly(true);
    $.ajax({
      type: 'POST',
      url: '/misc/preview_post_ajax/1',
      dataType: 'json',
      data: {
        title: $('#form-title').val(),
        forum_id: $('#forum_id').val(),
        icon_id: parseInt($('input[name=iconid]:checked').val()),
        message: sceditorInstance.val(),
        parseurl: 1
      },
      success: function(resp) {
        var content = resp.message.replace(/( <br \/>\n|<br \/>\n<br \/>\n)/g, '<div></div>');
        content = content.replace(/class="mls-img" src=".*?" data-src="(.*?)"/g, 'src="$1"');
        content = content.replace(/class="spoiler"/g, 'class="spoiler open"');
        content = content + '<div><br></div>';
        sceditorInstance.setWysiwygEditorValue(content)
        sceditorInstance.readOnly(false);
        setTimeout(function() {
          sceditorInstance.expandToContent();
        }, 100);
      },
      error: function(xhr) {
        swal("Gagal ngecek, Gan!", "Silakan dicoba kembali!", "error");
        sceditorInstance.readOnly(false);
      }
    });
  }


  // prefetch iconHover
  var pic = new Image();
  var pic2 = new Image();
  var pic3 = new Image();
  var pic4 = new Image();
  var pic5 = new Image();
  var pic6 = new Image();
  var pic7 = new Image();
  var pic8 = new Image();
  var pic9 = new Image();
  var pic10 = new Image();
  var pic11 = new Image();
  var pic12 = new Image();
  pic.src = assetsImageLocation + "ic-editor-bold-blue.svg";
  pic2.src = assetsImageLocation + "ic-editor-italic-blue.svg";
  pic3.src = assetsImageLocation + "ic-editor-underline-blue.svg";
  pic4.src = assetsImageLocation + "ic-editor-align-left-blue.svg";
  pic5.src = assetsImageLocation + "ic-editor-align-center-blue.svg";
  pic6.src = assetsImageLocation + "ic-editor-align-right-blue.svg";
  pic7.src = assetsImageLocation + "ic-editor-link-blue.svg";
  pic8.src = assetsImageLocation + "ic-editor-spoiler-blue.svg";
  pic9.src = assetsImageLocation + "ic-editor-quote-blue.svg";
  pic10.src = assetsImageLocation + "ic-editor-smilies-blue.svg";
  pic11.src = assetsImageLocation + "ic-editor-poll-blue.svg";
  pic12.src = assetsImageLocation + "ic-editor-image-blue.svg";


  // Init Script

  var textareaSCeditor = document.querySelector('.jsCreateThreadContentSCEditor');
  var toolbarSCEditor = document.getElementById('jsToolbarSCEditor');
  var heightSCEditor = $(window).height() - $('.jsCreateThreadHeader').outerHeight() - $('.jsCreateThreadTitle').outerHeight() - $('.jsToolbarSCEditorAnchor').outerHeight() -  90 - 20 - 30 - 20  - 36 - 36;
  console.log(heightSCEditor);

  $(window).on('resize', function(){
    var heightSCEditor = $(window).height() - $('.jsCreateThreadHeader').outerHeight() - $('.jsCreateThreadTitle').outerHeight() - $('.jsToolbarSCEditorAnchor').outerHeight() -  90 - 20 - 30 - 20  - 36;
    sceditorInstance.height(heightSCEditor);
  });

  var createThreadEditor = sceditor.create(textareaSCeditor, {
    style: sceditorStyleLocation,
    spellcheck: false,
    plugins: "bbcode,undo",
    emoticonsEnabled: false,
    format: 'bbcode',
    toolbar: 'bold,italic,underline|left,center,right|font,color,size|link,spoiler,quote,source,validate|polling|media,smilies',
    toolbarContainer: toolbarSCEditor,
    resizeMaxHeight: -1,
    height: heightSCEditor,
    icons: 'custom',
    autoExpand: true,
    resizeEnabled: false,
    placeholder: 'Mulai Menulis!'
  });

  var sceditorInstance = sceditor.instance(textareaSCeditor);

  if (sceditorInstance.val() != '') {
    $(sceditorInstance.getBody()).removeClass("placeholder");
  }

  $('.sceditor-color-option[data-color="#484848"]').addClass('is-selected');


  sceditorInstance.keyPress(function(e) {
      if(e.which == 13) {
        if(!($(window).scrollTop() + $(window).height() > $(document).height() - $('.jsToolbarSCEditorAnchor').height())) {
             //console.log("lagi di atas");
         }
         else{
            //console.log("lagi dibawah");
            $("html, body").animate({ scrollTop: $(document).height() }, 100);
         }
      }
  });

  // countChars
  sceditorInstance.keyUp(function(e) {
    countChars();
    sceditorInstance.expandToContent(true);
  });

  function countChars() {
    var limitChar = 20000;
    var inputLength = sceditor.instance(textareaSCeditor).val().length;
    $(".jsCharacterCounter").text(limitChar - inputLength);
    if (inputLength > limitChar) {
      $(".jsCharacterCounter").addClass("C(c-red)");
      $(".jsCharacterCounter").removeClass("C(c-grey)");
    } else {
      $(".jsCharacterCounter").addClass("C(c-grey)");
      $(".jsCharacterCounter").removeClass("C(c-red)");
    }
  }

  $(document).on("click", ".jsClosePolling", function() {
    togglePolling();
  });

  $(document).on("click", ".sceditor-button-font, .sceditor-button-color, .sceditor-button-size", function() {
    $('.sceditor-button-media.active, .sceditor-button-smilies.active').removeClass('active');
    $('.jsExtraForm').hide();
  });

}


function dataURLtoFile(dataurl, filename) {
	var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
	bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
	while(n--){
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, {type:mime});
}

function removeAvatar() {
	$.post("/user/removeprofilepicture/", {
		userimgrev: $("#userimgrev").val()
	}, function(e) {
		$("#userimgrev").val(e.userimgrev), $("#userimgtime").val(e.userimgtime), $("#jsImageAvatar").attr('src', e.imgurl);
		$.ajax({
			url: '/user/update_avatar',
			type: 'post',
			data: {
				userimgtime: e.userimgtime,
				userimgrev: e.userimgrev,
				imgurl: e.url
			},
			success: function (e) {
				e = $.parseJSON(e);
				$("#jsImageAvatar").attr('src', e.imgurl);
				$(".jsModal #jsImageAvatar").attr('src', e.imgurl);
				$('.jsModal #jsPreviewAvatar').attr('src', e.imgurl);
				$("#loading").html("");
				$("#remove_avatar").addClass('D(n)');
				closeModal();
			}
		});
	}, "json")
}

function uploadAvatar() {
	var $uploadCrop;
	var fileTypes = ['jpg', 'png', 'jpeg'];
	var myFile;
	function readFile(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				var extension = input.files[0].name.split('.').pop().toLowerCase(), isAllowed = fileTypes.indexOf(extension) > -1;
				if (isAllowed) {
					openModal('jsModalCropAvatar');
					$('.cr-viewport').css('border-radius', '50%');
					setTimeout(function(){
						$uploadCrop.croppie('bind', {
							url: e.target.result
						});
					}, 400);
				} else {
					myFile = input.files[0];
					var data = new FormData();
					data.append('userpicture', myFile);
					data.append('securitytoken', $('.sctoken').val());
					$.ajax({
						url: "/user/profilepicture",
						type: 'POST',
						data: data,
						processData: false,
						contentType: false,
						dataType: 'json',
						success: function (e, t) {
							$('.sctoken').val(e.securitytoken);
							if (e.status == "ok") {
								$.ajax({
									url: '/user/update_avatar',
									type: 'post',
									data: {
										userimgtime: e.userimgtime,
										userimgrev: e.userimgrev,
										imgurl: e.url
									},
									success: function (e) {
										$('#remove_avatar').removeClass('D(n)');
										$('#jsImageAvatar').attr('src', reader.result);
										$('.jsModal #jsImageAvatar').attr('src', reader.result);
										$('.jsModal #jsPreviewAvatar').attr('src', reader.result);
										$(document).click();
									}
								});
							} else {
								$('#jsModalError #error_message').html(e.error);
								openModal('jsModalError');
							}
						}
					});
				}
			}
			reader.readAsDataURL(input.files[0]);
		} else {
			$('#jsModalError #error_message').html("Sorry - your browser doesn't support the FileReader API");
			openModal('jsModalError');
		}
	}

	$uploadCrop = $('#jsUploadAvatarCropper').croppie({
		viewport: {
			width: 250,
			height: 250,
			type: 'square'
		}
	});

	$('#jsUploadAvatar').on('change', function() {
		readFile(this);
	});

	$('#jsButtonCropAvatar').on('click', function(ev) {
		$uploadCrop.croppie('result', {
			type: 'base64',
			size: {width: 400, height: 400},
			quality: 0.8,
			format: 'jpeg',
			backgroundColor: '#e9ebee'
		}).then(function(resp) {
			$("#jsImageAvatar").attr("src", resp);
			$('.jsModal #jsImageAvatar').attr('src', resp);
			$('.jsModal #jsPreviewAvatar').attr('src', resp);
			var file = dataURLtoFile(resp, "myavatar.jpg");
			var data = new FormData();
			data.append('userpicture', file);
			data.append('securitytoken', $('.sctoken').val());
			$.ajax({
				url: "/user/profilepicture",
				type: 'POST',
				data: data,
				processData: false,
				contentType: false,
				dataType: 'json',
				success: function (e, t) {
					$('.sctoken').val(e.securitytoken);
					if (e.status == "ok") {
						$.ajax({
							url: '/user/update_avatar',
							type: 'post',
							data: {
								userimgtime: e.userimgtime,
								userimgrev: e.userimgrev,
								imgurl: e.url
							},
							success: function (e) {
								$('#remove_avatar').removeClass('D(n)');
								closeModal();
							}
						});
					} else {
						$('#jsModalError #error_message').html(e.error);
						openModal('jsModalError');
					}
				}
			});
		});
	});
}

function removeCoverImage() {
	$.post("/user/removecoverimage/", function(e) {
		$.ajax({
			url: '/user/removecoverimage',
			type: 'post',
			data: {
				imgurl: e.old_cover_image_url,
				action: 'delete'
			},
			success: function (result) {
				if (result != typeof 'object')
					result = $.parseJSON(result);
				if (result.status == 'ok') {
					$('#jsImageCover').attr('src', assetsFolderNew + '/images/placeholder-cover-image.png');
					$('#remove_cover').addClass('D(n)');
					closeModal();
				}
			}
		});
	}, "json")
}

function uploadCover() {
	var $uploadCrop;
	var fileTypes = ['jpg', 'png', 'jpeg'];
	var myFile;
	var oldcoverurl = $('#jsImageCover').attr('src');
	function readFile(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function(e) {
				var extension = input.files[0].name.split('.').pop().toLowerCase(), isAllowed = fileTypes.indexOf(extension) > -1;
				if (isAllowed) {
					openModal('jsModalCropCover');
					$('.cr-viewport').css('border-radius', '');
					setTimeout(function(){
						$uploadCrop.croppie('bind', {
							url: e.target.result
						})
					}, 400);
				} else {
					$('#jsModalError #error_message').html('Hanya boleh upload gambar dengan ekstensi <b>.jpg</b>, <b>.png</b>, dan <b>.jpeg</b>');
					openModal('jsModalError');
				}
			}
			reader.readAsDataURL(input.files[0]);
		} else {
			$('#jsModalError #error_message').html("Sorry - your browser doesn't support the FileReader API");
			openModal('jsModalError');
		}
	}

	$uploadCrop = $('#jsUploadCoverCropper').croppie({
		viewport: {
			width: 685,
			height: 113,
			type: 'square'
		}
	});

	$('#jsUploadCover').on('change', function() {
		readFile(this);
	});

	$('#jsButtonCropCover').on('click', function(ev) {
		$uploadCrop.croppie('result', {
			type: 'base64',
			size: {width: 970, height: 160},
			quality: 0.8,
			format: 'jpeg',
			backgroundColor: '#e9ebee'
		}).then(function(resp) {
			$("#jsImageCover").attr("src", resp);
			$('.jsModal #jsImageCover').attr('src', resp);
			var file = dataURLtoFile(resp, "mycover.jpg");
			var data = new FormData();
			data.append('userpicture', file);
			data.append('securitytoken', $('.sctoken').val());
			$.ajax({
				url: "/user/coverimage",
				type: 'POST',
				data: data,
				processData: false,
				contentType: false,
				dataType: 'json',
				success: function (e) {
					$('.sctoken').val(e.securitytoken);
					if (e.status == "ok") {
						$('#remove_cover').removeClass('D(n)');
						closeModal();
					} else {
						$('#jsModalError #error_message').html(e.error);
						openModal('jsModalError');
					}
				}
			});
		});
	});
}

function modify_notification_list(notification) {
  var offset = parseInt($('#notification_data').attr('data-offset'));
  var operation = notification.operation;
  if (operation == 'delete') {
    if ($('#notif_wrapper_page #' + String(notification.notificationId)).length > 0) {
      $('#notif_wrapper_page #' + String(notification.notificationId)).remove();
      $('#notif_wrapper #' + String(notification.notificationId)).remove();
      $('#notification_data').attr('data-offset', offset - 1);
    }
    return;
  }
  var url = '/notification/get_notification/?displayed_state=' + notification.newState + '&notifId=' + notification.notificationId;
  $.get(url, function(result) {
    if (typeof result !== 'object') {
      result = $.parseJSON(result);
    }
    notification = result.notification;
    switch (operation) {
      case 'add':
        $('#notif_wrapper_page .notif_empty').hide();
        template = build_notification_card(notification);
        if ($('#notif_wrapper_page #' + String(notification._id.$id)).length > 0) {
          $('#notif_wrapper_page #' + String(notification._id.$id)).remove();
        } else {
          $('#notification_data').attr('data-offset', offset + 1);
        }
        $('#notif_wrapper_page .notificationList').prepend(template).fadeIn(300);
        break;
      case 'update':
        if ($('#notif_wrapper_page #' + String(notification._id.$id)).length > 0) {
          $('#notif_wrapper_page #' + String(notification._id.$id)).remove();
          template = build_notification_card(notification);
          $('#notif_wrapper_page .notificationList').prepend(template).fadeIn(300);
        }
        break;
    }
  });
}



function build_notification_card(notification) {
  template = $('#notif_wrapper_page #notificationCardTemplate').html();
  template = template.replace('Bgc(c-white)', 'Bgc(c-grayish)');
  template = template.replace(' data-src=', ' src=');
  template = template.replace(/{notifType}/g, notification.type);
  template = template.replace('{notifId}', String(notification._id.$id));
  read_url = '/notification/read/' + String(notification._id.$id) + '/?is_pop_up=false';
  template = template.replace('{clickUrl}', read_url);
  template = template.replace('{postBody}', notification.additional_data.post_body);
  template = template.replace('{lastUpdated}', notification.last_updated);
  if (notification.additional_data.post_content) {
    template = template.replace('{postBodyAlign}', 'fs');
    template = template.replace('{postContent}', '<div class="C(#9e9e9e) Fz(13px) Lh(18px) Wob(breakWord) LineClamp(2,35px)">'+ notification.additional_data.post_content +'</div>');
  } else {
    template = template.replace('{postBodyAlign}', 'c');
    template = template.replace('{postContent}', '');
  }
  if (notification.additional_data.img_src) {
    template = template.replace('{imageSource}', '<div class="Fx(flexZero) Mstart(10px)"><img class="W(60px) H(60px)" src="'+ notification.additional_data.img_src +'"></div>');
  } else {
    template = template.replace('{imageSource}', '');
  }
  return template
}


$(document).ready(function() {
  var notifications_loaded = false;
  var current_displayed_state = '';
  $('.get_notifications').click(function () {
    if ($('.jsNotificationDropdownMenu').hasClass('is-visible')) {
      $('.jsNotificationIcon i').attr('data-id', 'header-notification');
    } else {
      $('.jsNotificationIcon i').removeAttr('data-id');
    }
    var displayed_state = $('#notification_data').attr('data-displayed_state');
    if (current_displayed_state != displayed_state) {
      notifications_loaded = false;
    }
    if (!notifications_loaded) {
      fetching_notif = '<img src="' + assetsFolderNew + '/images/icon-load-biru.gif" width="40" height="40" alt="notification-loading" />';
      $('#notif_wrapper').html('<div class="Ta(c)">'+ fetching_notif +'</div>');
      var url = '/notification/show/all/?ispopup=true&displayed_state=' + displayed_state;
      $.get(url, function(result) {
        if (typeof result !== 'object') {
          result = $.parseJSON(result);
        }
        $('#notification_see_more');
        $('#notif_wrapper').html(result.view);
        if ($('.notif_red').hasClass('D(tb)')) {
          $('.notif_red').removeClass('D(tb)');
          $('.notif_red').addClass('D(n)');
        }
        $('#notification_data').attr('data-displayed_state', result.new_state);
        current_displayed_state = displayed_state;
        notifications_loaded = true;
			});
		}
	});
});


function getDisplayedState() {
	return $('#notification_data').attr('data-displayed_state');
}

function getFetchNotifGif() {
	fetching_notif = '<img src="'+ assetsFolderNew +'/images/icon-load-biru.gif" width="40" height="40" alt="notification-loading" />';
	html = '<div id="load_image" class="Ta(c)">'+ fetching_notif +'</div>';
	return html;
}

function getTypeName(type)
{
	type_name = '';
	switch (type) {
		case 'all':
		type_name = 'All (Default)';
		break;
		case 'reputation':
		type_name = 'Cendol';
		break;
		case 'quoted_post':
		type_name = 'Quote';
		break;
		case 'thread_replies':
		type_name = 'Reply';
		break;
	}
	return type_name;
}

function hideLoadMoreLink(element, newState) {
	var type = $(element + ' #type ul li a.Fw\\(700\\)').attr('data-type');
	if (type == 'reputation')
		$(element + ' #see_more').addClass('D(n)');
	$('#notification_data').attr('data-displayed_state', newState);
	var total_notifications = parseInt($('#total_notif').attr('value'));
	if ($('#notification_data').attr('data-offset') >= total_notifications - 30) {
		$(element + ' .load_more').hide();
		$(element + ' #see_more').addClass('D(n)');
	}
}

function getNotifications(element, type) {
	$(element + ' #notif_counter_wrapper').removeClass('D(n)');
	$(element + ' .notificationList').html(getFetchNotifGif());
	$('#notification_data').attr('data-offset', 0);
	if (type == 'quoted_post') {
		$(element + ' #notif_counter_wrapper').addClass('D(n)');
		$(element + ' #filterName').text(getTypeName(type));
		$(element + ' #type a').removeClass('Fw(700)');
		$(element + ' #type [data-type=quoted_post]').addClass('Fw(700)');
		$(element + ' #type').removeClass('is-visible');
		url = '/myforum/myquotedpost/?offset=' + $('#notification_data').attr('data-offset');
		getNotificationData(element, url);
	} else if (type == 'reputation') {
		$(element + ' #notif_counter_wrapper').addClass('D(n)');
		$(element + ' #filterName').text(getTypeName(type));
		$(element + ' #type a').removeClass('Fw(700)');
		$(element + ' #type [data-type=reputation]').addClass('Fw(700)');
		$(element + ' #type').removeClass('is-visible');
		url = '/notification/reputation';
		getNotificationData(element, url);
	} else {
		$(element + ' .load_more').hide();
		type_name = getTypeName(type);
		displayed_state = getDisplayedState();
		url = '/notification/show/' + type + '/?ispopup=false&type_name=' + type_name + '&displayed_state=' + displayed_state;
		$.get(url, function(result) {
			if (typeof result !== 'object') {
				result = $.parseJSON(result);
			}
			$('#notif_wrapper_page').html(result.view.replace(' data-src=', ' src='));
			$(element + ' .load_more').show();
			hideLoadMoreLink(element, result.new_state);
		});
	}
}

function getNotificationData(element, url) {
	$(element + ' .notif_empty').hide();
	$(element + ' #notif_empty_template').addClass('D(n)');
	var type = $(element + ' #type ul li a.Fw\\(700\\)').attr('data-type');
	var view = '';
	if (!$(element + ' #see_more').hasClass('D(n)')) {
		$(element + ' #see_more').addClass('D(n)');
	}
	$.get(url, function(result) {
		if (typeof result !== 'object') {
			result = $.parseJSON(result);
		}
		if (result.notifications.length == 0) {
			var cendol_empty = 'Agan belum memiliki reputasi nih. Untuk mendapatkan cendol, Agan bisa mulai komen atau buat thread di Kaskus. Jika Kaskuser lain merasa thread Agan menarik, maka Agan bisa mendapatkan cendol atau bata.';
			var quote_empty = 'Agan belum memiliki post yang dibalas nih. Coba deh Agan komen atau buat thread dulu.';
			if (type == 'reputation')
				$(element + ' #notif_empty_template span').text(cendol_empty);
			else if (type == 'quoted_post')
				$(element + ' #notif_empty_template span').text(quote_empty);
			$(element + ' .notif_empty').hide();
			$(element + ' #notif_empty_template').removeClass('D(n)');
		}
		$.each(result.notifications, function(notificationId, notification) {
			template = $(element + ' #notificationCardTemplate').html();
			template = template.replace(' data-src=', ' src=');
			template = template.replace(/{notifType}/g, notification.type);
			if (notification.url.indexOf('?') < 0) {
				if (notification.url.indexOf('#') < 0) {
					track_url = notification.url + '/?ref=notification&med=single_page_' + type;
				} else {
					track_url = notification.url.replace('#', '/?ref=notification&med=single_page_' + type + '#');
				}
			} else {
				if (notification.url.indexOf('#') < 0) {
					track_url = notification.url + '&ref=notification&med=single_page_' + type;
				} else {
					track_url = notification.url.replace('#', '&ref=notification&med=single_page_' + type + '#');
				}
			}
			template = template.replace('{notifId}', '');
			template = template.replace('{clickUrl}', track_url);
			template = template.replace('{postBody}', notification.additional_data.post_body);
			template = template.replace('{lastUpdated}', notification.last_updated);
			if (notification.additional_data.post_content) {
				template = template.replace('{postBodyAlign}', 'fs');
				template = template.replace('{postContent}', '<div class="C(#9e9e9e) Fz(13px) Lh(18px) Wob(breakWord) LineClamp(2,35px)">'+ notification.additional_data.post_content +'</div>');
			} else {
				template = template.replace('{postBodyAlign}', 'c');
				template = template.replace('{postContent}', '');
			}
			if (notification.additional_data.img_src) {
				template = template.replace('{imageSource}', '<div class="Fx(flexZero) Mstart(10px)"><img class="W(60px) H(60px)" src="'+ notification.additional_data.img_src +'"></div>');
			} else {
				template = template.replace('{imageSource}', '');
			}
			view += template;
		});
		$(element + ' .notificationList').append(view);
		$(element + ' #load_image').remove();
		$('#total_notif').attr('value', result.total_notif);
		$(element + ' #see_more').removeClass('D(n)');
		hideLoadMoreLink(element, getDisplayedState());
	});
}

function seeMore() {
	var element = '#notif_wrapper_page';
	$(element + ' .load_more').hide();
	if (!$(element + ' #see_more').hasClass('D(n)') && type == 'quoted_post') {
		$(element + ' #see_more').addClass('D(n)');
	}
	$(element + ' #notification_see_more').append(getFetchNotifGif());
	var type = $(element + ' #type ul li a.Fw\\(700\\)').attr('data-type');
	var offset = parseInt($('#notification_data').attr('data-offset'));
	$('#notification_data').attr('data-offset', offset + 30);
	if (type == 'quoted_post') {
		$(element + ' .notificationList').append(getFetchNotifGif());
		url = '/myforum/myquotedpost/?offset=' + $('#notification_data').attr('data-offset');
		getNotificationData(element, url);
	} else if (type == 'reputation') {
		$(element + ' .notificationList').append(getFetchNotifGif());
		url = '/notification/reputation';
		getNotificationData(element, url);
	} else {
		type_name = getTypeName(type);
		displayed_state = getDisplayedState();
		var url = '/notification/show/' + type + '/?ispopup=false&type_name=' + type_name + '&displayed_state=' + displayed_state + '&offset=' + $('#notification_data').attr('data-offset');
		$.get(url, function(result) {
			if (typeof result !== 'object') {
				result = $.parseJSON(result);
			}
			$(element + ' #notification_see_more #load_image').remove();
			$(element + ' #notification_see_more').append(result.view.replace(' data-src=', ' src='));
			if (type == 'quoted_post')
				$(element + ' #see_more').removeClass('D(n)');
			$(element + ' .load_more').show();
			hideLoadMoreLink(element, result.new_state);
		});
	}
}

$("#qr-code-btn").click(function(){
	$.ajax({
		url: "/profile/qrcode/" + $(this).data('userid'),
		success: function(result){
			var qrcode = result['qrcode'];
			if(qrcode) {
				$('#img-qrcode').attr('src', 'data:image/png;base64,'+qrcode);
			} else {
				$('#img-qrcode').hide();
				$('#div-qr-code').html('Failed to generate QR Code');
			}
		}
	})
});

function add_connection(url, username, modal)
{
	closeModal();

	var currentid = $('#currentid').val();
	var loginid = $('#loginid').val();
	var clickid = url.substring(url.lastIndexOf('/') + 1);
	$.post(url, {securitytoken: $('#sctoken').val()}, function(data) {
		$('#sctoken').val(data.securitytoken);
		if (data.result == true) {
			var followingInfo = parseInt($("#following_info").text().replace(/[,\.]/g, ''));
			var followerInfo = parseInt($("#follower_info").text().replace(/[,\.]/g, ''));
			if (data.connection_type == 'Unfollow') {
				if (currentid == loginid || clickid == currentid) {
					$('#unfollow_btn').show();
					$('#follow_btn').hide();
					$('#unfollow_btn').attr('data-id', 'unfollow');

					if(currentid == loginid) {
						count = followingInfo + 1;
						$('#following_info').text(count.toLocaleString());
					}

					if(clickid == currentid) {
						count = followerInfo + 1;
						$('#follower_info').text(count.toLocaleString());
					}
				}
				showBottomToast('Agan berhasil mengikuti ' + username, 1500);
			} else if (data.connection_type == 'Follow') {
				if (currentid == loginid || clickid == currentid) {
					$('#follow_btn').show();
					$('#unfollow_btn').hide();
					$('#blocked_btn').hide();
					$('#follow_btn').attr('data-id', 'follow');

					if (!data.hasOwnProperty('number_of_following')) {
						$('#block_btn').show();
						$('#unblock_btn').hide();
					} else {
						if(currentid == loginid) {
							count = followingInfo - 1;
							$('#following_info').text(count.toLocaleString());
						}

						if(clickid == currentid) {
							count = followerInfo - 1;
							$('#follower_info').text(count.toLocaleString());
						}
					}
				}

				if (!data.hasOwnProperty('number_of_following')) {
					showBottomToast('Agan telah menghapus ' + username + ' dari ignore list', 1500);
				} else {
					showBottomToast('Agan telah berhenti mengikuti ' + username, 1500);
				}
			} else if (data.connection_type == 'Unblock') {
				if (currentid == loginid || clickid == currentid) {
					$('#unblock_btn').show();
					$('#block_btn').hide();
					$('#follow_btn').hide();
					$('#unfollow_btn').hide();
					$('#blocked_btn').show();
					$('#unblock_btn').attr('data-id', 'unignore');

					var attr = $('#follow_btn').attr('style');
					if (typeof attr !== typeof undefined && attr !== false) {
						if(currentid == loginid) {
							count = followingInfo - 1;
							$('#following_info').text(count.toLocaleString());
						}

						if(clickid == currentid) {
							count = followerInfo - 1;
							$('#follower_info').text(count.toLocaleString());
						}
					}
				}
				showBottomToast('Agan berhasil mengabaikan ' + username, 1500);
			}
		}
		else if (data.result == false) {
			showBottomToast(data.error_message, 1500);
		}

		if (modal == 'following') {
			setTimeout(function(){ openModal('jsModalFollowingList')}, 1500);
			load_following_data();
		} else if (modal == 'follower') {
			setTimeout(function(){ openModal('jsModalFollowersList')}, 1500);
			load_follower_data();
		}
	}, "json");
}


$(document).on({
	mouseenter: function () {
		$(this).find("span").text($(this).data('hover'));
		$(this).find("i").toggleClass("fa-user-lock fa-unlock");
	},
	mouseleave: function () {
		$(this).find("span").text($(this).data('default'));
		$(this).find("i").toggleClass("fa-user-lock fa-unlock");
	}
}, '.jsButtonBlockedHeader');


$(document).on({
	mouseenter: function () {
		$(this).text($(this).data('hover'));
	},
	mouseleave: function () {

		$(this).text($(this).data('default'));
	}
}, '.jsFollowingButton, .jsBlockedButton');

function set_data_unfol_modal(image_unfol, text_unfol, url_unfol, username, modal) {
	$("#jsModalConfirmUnfollow img").attr("src",image_unfol);
  set_show_modal_confirm(url_unfol, text_unfol, username, modal);
};

function set_data_unblock_modal(image_unblock, text_unblock, url_unblock, username, modal) {
  $("#jsModalConfirmUnblock img").attr("src",image_unblock);
  set_show_modal_confirm(url_unblock, text_unblock, username, modal);
};

function set_show_modal_confirm(url, text, username, modal)
{
  $("#confirm-message").html(text);
	$(".confirm-action").attr("onclick","add_connection('" +  url  + "', '" + username + "', '" + modal + "')");
}

var moderated_page = 1;
var load_more_forum = '<li id="forum-loadmore" class="D(f) Ai(c) Mb(15px)"><a data-id="moderator-load-more" onclick="load_more_moderated_forum()" href="javascript:void(0)" class="D(b) W(100%) Bgc(#1998ed):h C(#ffffff):h Td(n):h D(b) Py(7px) Px(7px) Fw(500) Ta(c) C(#1998ed) Bd(borderSolidBlue) Bdrs(5px) Mb(10px)">Load More</a></li>';
function moderate()
{
	moderated_page = 1;
	$('#jsModalModerateList .data-moderate').empty();
	$.get("/profile/get_all_forum_moderate/?user_id=" + user_id + '&moderate_page=' + moderated_page, function( result ) {

		if (typeof result !== 'object') {
			result = $.parseJSON(result);
		}
		forum_moderate = result.result.list_forum;
		forum_icon = result.result.forum_icon;
		var html_view = '';

		delete forum_moderate.total_post;
		$.each(forum_moderate, function(key, forum)
		{
			html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="'+ forum_icon[key] +'" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><a class="Fw(500) C(c-normal))" href="'+ forum.url+'">'+forum.name+'</a></div></div>';
		});

		moderated_page = result.result.next_page;
		page_remaining = result.result.page_remaining;
		$("#jsModalModerateList .data-moderate").append(html_view);
		if (page_remaining > 0) {
			$("#jsModalModerateList .data-moderate").append(load_more_forum);
		}
	});
}

function load_more_moderated_forum()
{
	$.get("/profile/get_all_forum_moderate/?user_id=" + user_id + '&moderate_page=' + moderated_page, function( result ) {

		if (typeof result !== 'object') {
			result = $.parseJSON(result);
		}
		forum_moderate = result.result.list_forum;
		forum_icon = result.result.forum_icon;
		var html_view = '';

		delete forum_moderate.total_post;
		$.each(forum_moderate, function(key, forum)
		{
			html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="'+ forum_icon[key] +'" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><a class="Fw(500) C(c-normal))" href="'+ forum.url+'">'+forum.name+'</a></div></div>';
		});

		moderated_page = result.result.next_page;
		page_remaining = result.result.page_remaining;
		$("#jsModalModerateList .data-moderate").append(html_view);
		$('#forum-loadmore').remove();

		if (page_remaining > 0) {
			$("#jsModalModerateList .data-moderate").append(load_more_forum);
		}
	});
}

var badge_page = 1;
var load_more = '<li id="badge-loadmore" class="D(f) Ai(c) Mb(15px)"><a data-id="badge-load-more" onclick="load_more_badge()" href="javascript:void(0)" class="D(b) W(100%) Bgc(#1998ed):h C(#ffffff):h Td(n):h D(b) Py(7px) Px(7px) Fw(500) Ta(c) C(#1998ed) Bd(borderSolidBlue) Bdrs(5px) Mb(10px)">Load More</a></li>';

function badge()
{
	badge_page = 1;
	$('#jsModalBadgeList .data-badge').empty();
	$.get("/profile/get_all_badges/?user_id="+ user_id + '&badge_page=' + badge_page, function( result ) {

		if (typeof result !== 'object') {
			result = $.parseJSON(result);
		}

		list_badge = result.result.badges;
		var html_view = '';
		delete list_badge.total_post;
		$.each(list_badge, function(key, badge)
		{
			html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="'+ badge_url + badge.badge_id +'.gif" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><div class="Fw(500) ">'+ badge.event+'</div><div class="Mt(5px) Fz(11px) C(c-grey)"></div></div></div>';
		});

		badge_page = result.result.next_page;
		page_remaining = result.result.page_remaining;

		$("#jsModalBadgeList .data-badge").append(html_view);
		if (page_remaining > 0) {
			$("#jsModalBadgeList .data-badge").append(load_more);
		}
	});

}

function load_more_badge() {

	$.get("/profile/get_all_badges/?user_id="+ user_id + '&badge_page=' + badge_page, function( result ) {
		if (typeof result !== 'object') {
			result = $.parseJSON(result);
		}
		list_badge = result.result.badges;

		var html_view = '';
		delete list_badge.total_post;
		$.each(list_badge, function(key, badge)
		{
			html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="'+ badge_url + badge.badge_id +'.gif" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><div class="Fw(500) ">'+ badge.event+'</div><div class="Mt(5px) Fz(11px) C(c-grey)"></div></div></div>';
		});

		badge_page = result.result.next_page;
		page_remaining = result.result.page_remaining;

		$("#jsModalBadgeList .data-badge").append(html_view);
		$('#badge-loadmore').remove();

		if (page_remaining > 0) {
			$("#jsModalBadgeList .data-badge").append(load_more);
		}

	});
}

var assetsFolderNew = assetsFolderNew || '';
var loading_img = '<div class="W(100%) Ta(c) Mt(50px) Mb(50px)"><img src="'+ assetsFolderNew +'/images/icon-load-biru.gif" width="40" height="40" alt="conection-loading" /></div>';
var tab = $('#tab-act').val();
var connection_type = 'following';
var userid = $("#current-user").val();
var current_page = $('#current-page').val();

function get_list_connection(connection_type)
{
    $('#loading-area').html(loading_img);
    $('#pagination').html('');

    $.get("/profile/get_connection/?connection_type=" + connection_type + "&id=" + userid + "&theme=new_connection&page=" + current_page, function(data) {
        $('#loading-area').html(data.html);
        $('#pagination').html(data.pagination);
    }, "json");
}

function connection_action(url, username, type)
{
    $.post(url, {securitytoken: $('#sctoken').val()}, function(data) {
        $('#sctoken').val(data.securitytoken);
        if (data.result == true) {
            get_list_connection(type);
            if (url.search('/follow') > 0) {
                showBottomToast('Agan berhasil mengikuti ' + username, 1500);
            } else if (url.search('/unfollow') > 0) {
                showBottomToast('Agan telah berhenti mengikuti  ' + username, 1500);
            } else if (url.search('/unblock') > 0) {
                showBottomToast('Agan telah menghapus ' + username + ' dari ignore list', 1500);
            }
        } else {
            showBottomToast(data.error_message, 3000);
        }
    }, "json");
}

function modal_action(url, username, type)
{
    closeModal();
    connection_action(url, username, type);
}

function set_connection_unfol_modal(image_unfol, text_unfol, url_unfol, username, modal) {
    $("#jsModalConfirmUnfollow img").attr("src",image_unfol);
    $(".confirm-action").removeAttr("data-id").attr("data-id", "button-unfollow");
    connection_show_modal_confirm(url_unfol, text_unfol, username, modal);
};

function set_connection_unblock_modal(image_unblock, text_unblock, url_unblock, username, modal) {
    $("#jsModalConfirmUnblock img").attr("src",image_unblock);
    $(".confirm-action").removeAttr("data-id").attr("data-id", "button-unignore");
    connection_show_modal_confirm(url_unblock, text_unblock, username, modal);
};

function connection_show_modal_confirm(url, text, username, modal)
{
    $("#confirm-subtitle, #confirm-message").html(text);
    $(".confirm-action, .confirm-action-unignore").attr("onclick","modal_action('" +  url  + "', '" + username + "', '" + modal + "')");
}

function searchConnection()
{
    if ($("#search_connection_keyword").val() != '') {
        var b = $.ajax();
        b.abort();

        var userid = $("#current-user").val();
        var keyword = $("#search_connection_keyword").val();

        $('#loading-area').html(loading_img);
        $('#pagination').html('');

        $.get("/profile/get_networkings/" + tab + '/' + 0 + '/' + userid + '/' + 0 + '/' + keyword + '/new_connection', function(response) {
            $('#loading-area').html(response.html);
        }, "json");

    } else {
        alert('Silahkan masukkan kata kunci terlebih dahulu.');
    }
}


// @codekit-prepend "../backend/backend-subforum.js";
// @codekit-prepend "../backend/backend-thread.js";
// @codekit-prepend "../backend/backend-user.js";

var linksearch, searchchoice, catLoaded, retryFetch = true;

// get category search header area
function get_cat(param) {
  if (param == 'forum' || param == 'fjb') {
    $('.select-category').addClass('show');
    $.ajax({
      url: '/misc/get_categories_search/' + param,
      success: function(result) {
        var checkurl = location.href.match(/forumchoice(\[\])*=([^&]+)/);
        var id = '';
        if (checkurl) {
          id = checkurl[2];
        }
        var selected = '';
        for (var i in result) {
          if (id == result[i].forum_id) {
            selected = "selected";
            $('#search_category').parent().find('.customSelectInner').text(result[i].name);
          } else {
            selected = '';
          }

          $('#search_category').append('<option data-child-list="' + result[i].child_list + '" value="' + result[i].forum_id + '" ' + selected + '>' + result[i].name + '</option>');
        }
      }
    });
  } else {
    $('.select-category').removeClass('show');
  }
}

//share fb
function threadlist_facebook_share(url, data_threadid) {
 FB.init({
   appId : '356445735231',
   xfbml : true,
   version : 'v2.2',
 });

 FB.ui({
   method: 'share',
   href: url,
 }, function(response){
   if(response && !response.error_code)
   {
     threadlist_share_count(data_threadid, 'facebook');
     _gaq.push(['_trackSocial', 'facebook', 'send', url]);
     customGtm.clickEventToAnalytics('facebook', 'send', url);
   }
 });

 return false;
}

//share count
function threadlist_share_count(threadId, shareType) {
  $.ajax({
    url: KASKUS_URL + '/misc/update_share_count',
    type: 'POST',
    data: {
      share_type: shareType,
      thread_id: threadId
    },
    xhrFields: {
      withCredentials: true
    },
    success: function(resp){ },
    error: function(xhr){ }
  });
}

function printDiv(divId) {
  window.frames["print_frame"].document.body.innerHTML = document.getElementById(divId).innerHTML;
  window.frames["print_frame"].window.focus();
  window.frames["print_frame"].window.print();
}

// notice

function notice(text, timeout) {
  if (typeof timeout === 'undefined') {
    timeout = 3000;
  }

  if (document.notice_tid) {
    clearTimeout(document.notice_tid);
  }

  $('#notice_span').html(text);
  $('#floating_notice').show();
  document.notice_tid = setTimeout(function() {
    $('#floating_notice').fadeOut();
  }, timeout);
}

function printContent(el) {
  var restorepage = document.body.innerHTML;
  var printcontent = document.getElementById(el).innerHTML;
  document.body.innerHTML = printcontent;
  window.print();
  document.body.innerHTML = restorepage;
}

function show_signin_popup(theme) {
  $.ajax({
    url: "/user/login/" + theme,
    success: function(a) {
      $("#jsModalSignin .modal-body").html(a),
        $("#username").focus();
    }
  })
}

function show_signup_popup(theme) {
  $.ajax({
    url: "/register/index/" + theme,
    success: function(a) {
      $("#jsModalSignin .modal-body").html(a),
        $("#signup_email").focus();
    }
  })
}

//SEARCH

var ten_minutes = 600;
var one_second = 1;
var local_search_history_date;
var local_search_history;
var local_top_keyword_date;
var local_top_keyword;
var indexSelected = -1;
var last_process_time = 0;
var last_search_history;
var last_top_keyword;

function get_search_dropdown() {
  var time_now = Date.now() / 1000;
  if (parseFloat(last_process_time) + one_second > time_now)
    return;

  last_process_time = time_now;

  get_top_keyword();
  get_search_history();
  show_search_drop_down();
}

function show_search_drop_down() {
  var data_top_keyword = get_term_local_data('top_keyword');
  var data_search_history = get_cookie_term_local_data('search_history_' + user_id);

  show_template_search(data_top_keyword, 'top_search_choice', '#top_search', 'last_top_keyword');
  show_template_search(data_search_history, 'history_search_choice', '#history_search', 'last_search_history');

  $('.jsSearchResult li').hover(function(event) {
    $(".jsSearchResult").find('li.is-selected').removeClass('is-selected');
    $(this).addClass('is-selected');
    indexSelected = $(".jsSearchResult li").index($(this));
  });

  $(".jsSearchResult li").mousedown(function(e) {
    e.preventDefault();
    $("#search").val($(this).text());
    $("#btn-search").click();
  });
}

function show_template_search(terms, div_id, div_to_hide, last_data) {
  var temp_template = '';
  for (var i in terms) {
    temp_template += '<li><a href="javascript:void(0);" class="D(b) P(5px) C(#484848) Fz(12px) Td(n):h Bgc(#f2f2f2):h">' + terms[i] + '</a></li>';
  }

  if (temp_template != window[last_data]) {
    document.getElementById(div_id).innerHTML = temp_template;
    window[last_data] = temp_template;
    indexSelected = -1;
  }
  if (temp_template == '') {
    $(div_to_hide).hide();
  } else {
    $(div_to_hide).show();
  }
}

function get_top_keyword() {
  var top_keyword_date = null;
  if (localStorage) {
    top_keyword_date = parseFloat(localStorage.getItem("top_keyword_date"));
  } else {
    top_keyword_date = local_top_keyword_date;
  }
  var date_now = Date.now() / 1000;
  if (isNaN(top_keyword_date) || (top_keyword_date + ten_minutes) < date_now) {
    $.ajax({
      url: "/misc/get_top_keyword",
      success: function(a) {
        if (localStorage) {
          localStorage.setItem("top_keyword", a);
          localStorage.setItem("top_keyword_date", Date.now() / 1000);
        } else {
          local_top_keyword = JSON.parse(a);
          local_top_keyword_date = Date.now() / 1000;
        }

        show_search_drop_down();
      },
      error: function() {
        show_search_drop_down();
      }
    });
  }
}

function get_search_history() {
  var search_history_date = parseFloat($.cookie("search_history_date_" + user_id));
  var date_now = Date.now() / 1000;

  if (isNaN(search_history_date) || (search_history_date + ten_minutes) < date_now) {
    $.ajax({
      url: "/misc/get_search_history",
      success: function(a) {
        var cookie_domain = '';
        if (typeof KASKUS_COOKIE_DOMAIN !== 'undefined')
          cookie_domain = KASKUS_COOKIE_DOMAIN;
        else
          cookie_domain = COOKIE_DOMAIN;
        date_now = Date.now() / 1000;

        $.cookie("search_history_" + user_id, a, {
          expires: date_now + ten_minutes,
          path: "/",
          domain: cookie_domain,
          secure: false
        });
        $.cookie("search_history_date_" + user_id, date_now, {
          expires: date_now + ten_minutes,
          path: "/",
          domain: cookie_domain,
          secure: false
        });

        show_search_drop_down();
      },
      error: function() {
        show_search_drop_down();
      }
    });
  }
}

function get_term_local_data(key) {
  var data = {};
  if (localStorage) {
    data = localStorage.getItem(key);
    if (data) {
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = {};
      }
    }
  } else {
    data = window['local_' + key];
  }

  return (data) ? data : {};
}

function get_cookie_term_local_data(key) {
  var data = $.cookie(key);
  try {
    data = JSON.parse(data);
  } catch (e) {
    data = {};
  }
  return data;
}

function remove_search_history() {
  $.ajax({
    url: "/misc/remove_search_history",
    success: function() {
      var cookie_domain = '';
      if (typeof KASKUS_COOKIE_DOMAIN !== 'undefined')
        cookie_domain = KASKUS_COOKIE_DOMAIN;
      else
        cookie_domain = COOKIE_DOMAIN;
      date_now = Date.now() / 1000;
      $.cookie("search_history_" + user_id, '[]', {
        expires: date_now + ten_minutes,
        path: "/",
        domain: cookie_domain,
        secure: false
      });
      $.cookie("search_history_date_" + user_id, date_now, {
        expires: date_now + ten_minutes,
        path: "/",
        domain: cookie_domain,
        secure: false
      });

      show_search_drop_down();
    }
  });
}

function fetchCategories() {
  var url = KASKUS_URL + '/misc/get_categories/' + catVersion;
  $.retrieveJSON(url, {}, function(a) {
    if (retryFetch && a.version != catVersion) {
      $.clearJSON(url, {});
      retryFetch = false;
      fetchCategories();
    } else {
      $('#cat-forum').replaceWith(a.forum);
      $('#cat-jb').replaceWith(a.jb);
      catLoaded = true;

      var liSelected,
        valscroll;
      $("#filter-cat-forum").bind("keydown keyup", function(event) {
        var li = $("#update-tag ul.sidebar-category").find('li');
        // if keydown
        if (event.which === 40) {
          if (event.type === 'keydown') {
            if (liSelected) {
              liSelected.removeClass('selected');
              next = liSelected.next();
              if (next.length > 0) {
                liSelected = next.addClass('selected');
              } else {
                liSelected.addClass('selected');
              }
            } else {
              liSelected = li.eq(0).addClass('selected');
            }
          }
          valscroll = ($(".scrolling-con-update ul li.selected").position().top) - 140;
          // $('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
          // if keyup
        } else if (event.which === 38) {
          if (event.type === 'keydown') {
            if (liSelected) {
              liSelected.removeClass('selected');
              next = liSelected.prev();
              if (next.length > 0) {
                liSelected = next.addClass('selected');
              } else {
                liSelected.addClass('selected');
              }
            } else {
              liSelected = li.last().addClass('selected');
            }
          }
          //valscroll = ( $(".scrolling-con-update ul li.selected").position().top ) - 140;
          //$('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
          // presss enter get redirect URL
        } else if (event.which === 13) {
          if ($('.scrolling-con-update').find('li.selected').length > 0) {
            window.location = $('.scrolling-con-update li.selected .categories-title').children('a').attr('href');
          }
        } else {
          // keyup get data json and append listing data
          if (event.type === 'keyup') {
            $("#update-tag ul.sidebar-category").find('li').removeClass('selected');
            searchField = $('#filter-cat-forum').val();
            $(".flyout__search i").removeClass("fa-search");
            $(".flyout__search i").addClass("fa-times");
            // close filter categories
            $('#jsCategoryTabForum .flyout__search i.fa-times').click(function(event) {
              $(this).removeClass("fa-times");
              $(this).addClass("fa-search");

              $('#filter-cat-forum').val('');
              $('#update-tag').html('');
              $('#update-tag').addClass('hide');
            });
            try {
              myExp = new RegExp(searchField, 'i');
              if (searchField === '') {
                $('#update-tag').addClass('hide');
                $("#jsCategoryTabForum .flyout__search i").removeClass("fa-times");
                $("#jsCategoryTabForum .flyout__search i").removeClass("fa-search");


                return false;
              }
              $.retrieveJSON(urlCatJSON, {
                usergroupid: userGroupIdJSON
              }, function(data) {
                $('#update-tag').removeClass('hide');
                //heightUpdateContent = $('.tag-wrap').height() - 28;
                //$('#update-tag').children('.scrolling-con-update').height(heightUpdateContent);
                output = '<ul class="flyout__result__list"><div class="flyout__scroll flyout__scroll--up"><i class="fa fa-chevron-up"></i></div>';
                $.each(data, function(key, val) {
                  if (val.forum_name.search(myExp) != -1) {
                    output += '<li class="flyout__result__item">';
                    output += '<a class="flyout__result__link" href="' + decodeURIComponent(val.forum_url) + '">';
                    output += '<img src="' + decodeURIComponent(val.forum_icon) + '" alt="" width="20" height="20" ><span>' + decodeURIComponent(val.forum_name);
                    output += '</span></a>';
                    output += '</li>';
                  }
                });
                output += '<div class="flyout__scroll flyout__scroll--down"><i class="fa fa-chevron-down"></i></div></ul>';
                $('#update-tag').html(output);

              }, 864e5);
              liSelected = '';
              checkScroller(".flyout__result__list");
            } catch (err) {
              // console.log(err);
            }
          }
        }
      });

      $("#filter-cat-jb").bind("keydown keyup", function(event) {
        var li = $("#update-tag ul.sidebar-category").find('li');
        // if keydown
        if (event.which === 40) {
          if (event.type === 'keydown') {
            if (liSelected) {
              liSelected.removeClass('selected');
              next = liSelected.next();
              if (next.length > 0) {
                liSelected = next.addClass('selected');
              } else {
                liSelected.addClass('selected');
              }
            } else {
              liSelected = li.eq(0).addClass('selected');
            }
          }
          valscroll = ($(".scrolling-con-update ul li.selected").position().top) - 140;
          // $('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
          // if keyup
        } else if (event.which === 38) {
          if (event.type === 'keydown') {
            if (liSelected) {
              liSelected.removeClass('selected');
              next = liSelected.prev();
              if (next.length > 0) {
                liSelected = next.addClass('selected');
              } else {
                liSelected.addClass('selected');
              }
            } else {
              liSelected = li.last().addClass('selected');
            }
          }
          //valscroll = ( $(".scrolling-con-update ul li.selected").position().top ) - 140;
          //$('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
          // presss enter get redirect URL
        } else if (event.which === 13) {
          if ($('.scrolling-con-update').find('li.selected').length > 0) {
            window.location = $('.scrolling-con-update li.selected .categories-title').children('a').attr('href');
          }
        } else {
          // keyup get data json and append listing data
          if (event.type === 'keyup') {
            $("#update-tag ul.sidebar-category").find('li').removeClass('selected');
            searchField = $('#filter-cat-jb').val();
            $(".flyout__search i").removeClass("fa-search");
            $(".flyout__search i").addClass("fa-times");
            // close filter categories
            $('#jsCategoryTabJB .flyout__search i.fa-times').click(function() {

              $(this).removeClass("fa-times ");
              $(this).addClass("fa-search ");
              $('#filter-cat-jb').val('');
              $('#update-tag').html('');
              $('#update-tag').addClass('hide');
            });
            try {
              myExp = new RegExp(searchField, 'i');
              if (searchField === '') {
                $('#update-tag').addClass('hide');
                $("#jsCategoryTabJB .flyout__search i").removeClass("fa-times");
                $("#jsCategoryTabJB .flyout__search i").addClass("fa-search");
                return false;
              }
              $.retrieveJSON(urlCatJSON, {
                usergroupid: userGroupIdJSON
              }, function(data) {
                $('#update-tag').removeClass('hide');
                //heightUpdateContent = $('.tag-wrap').height() - 28;
                //$('#update-tag').children('.scrolling-con-update').height(heightUpdateContent);
                output = '<ul class="flyout__result__list"><div class="flyout__scroll flyout__scroll--up"><i class="fa fa-chevron-up"></i></div>';
                $.each(data, function(key, val) {
                  if (val.forum_name.search(myExp) != -1) {
                    output += '<li class="flyout__result__item">';
                    output += '<a class="flyout__result__link" href="' + decodeURIComponent(val.forum_url) + '">';
                    output += '<img src="' + decodeURIComponent(val.forum_icon) + '" alt="" width="20" height="20" ><span>' + decodeURIComponent(val.forum_name);
                    output += '</span></a>';
                    output += '</li>';
                  }
                });
                output += '<div class="flyout__scroll flyout__scroll--down"><i class="fa fa-chevron-down"></i></div></ul>';
                $('#update-tag').html(output);

              }, 864e5);
              liSelected = '';
              checkScroller(".flyout__result__list");
            } catch (err) {
              // console.log(err);
            }
          }
        }
      });
      if ($('.flyout__tab__pane > .flyout__category__list').length > 0 && $('.flyout__tab__pane > .flyout__category__list')[0].scrollHeight > $('.flyout__tab__pane > .flyout__category__list').height()) {
        $('.flyout__tab__pane > .flyout__category__list').siblings(".flyout__scroll--down").addClass("flyout__scroll--on");
      }
      //scroll top main category nav
      $(".flyout__category__list").bind('scroll', function() {
        checkScroller($(this));
      });

      //scroll top main category search
      $(".flyout__result__list").bind('scroll', function() {
        checkScroller($(this));
      });

      //scroll anakan main category nav
      $(".flyout__category-children__list").bind('scroll', function() {
        checkScroller($(this));
      });
    }
  }, 36e5);
}

/**
 * Function buat subscribe unsubscribe thread gaTrack (thread & subforum)
 */
function gaTrackOb(el) {
  var category = el.attr("data-category");
  var label = el.attr("data-label");
  var action = el.attr('data-state');

  _gaq.push(['_trackEvent', category, action, label]);
  dataLayer.push({
    'event': 'trackEvent',
    'eventDetails.category': category,
    'eventDetails.action': action,
    'eventDetails.label': label
  });
};

/**
 * Function buat subscribe unsubscribe thread (thread & subforum)
 */

 var subscribeUnsubscribeOnProgress = false;
 var subscribeUnsubscribeEls = [];

 function subscribeUnsubscribe(el) {
   var index_el_exist = subscribeUnsubscribeEls.indexOf(el.attr('id'));
   if (index_el_exist < 0) {
     subscribeUnsubscribeEls.push(el.attr('id'));
   }
   if (subscribeUnsubscribeOnProgress) {
     return;
   }
   subscribeUnsubscribeOnProgress = true;
   var subscribe_to_do = el.attr('data-state');
   var subscribe_option = el.attr('data-type');
   var subscribe_id = el.attr('data-id');
   var subscribe_url = '/myforum/' + subscribe_to_do + '/' + subscribe_option + '/' + subscribe_id;
   var securitytoken = $('#securitytoken').val();
   var forum_name = el.data('name');

   if (securitytoken) {
     $.ajax({
       type: "POST",
       url: subscribe_url,
       data: {
         securitytoken: securitytoken
       },
       xhrFields: {
         withCredentials: true
       },
       success: function(result) {
         if (typeof result !== 'object') {
           result = $.parseJSON(result);
         }
         if (result.flag == 'TRUE') {
           gaTrackOb(el);
           if (subscribe_to_do == 'subscribe') {
             $('#securitytoken').val(result.securitytoken);
             el.attr("data-state", "unsubscribe");

             if (el.attr('data-style') == 'icon') {
               var iEl = el.find('i:first');
               iEl.addClass("C(#f8c31c)");
               iEl.removeClass("C(#b3b3b3) D(n) listThreadItem:h_D(b) C(#f8c31c):h Cur(p):h is-animate");
             } else if (el.attr('data-style') == 'icon-category') {
               var iEl = el.find('i:first');
               iEl.addClass("C(#f8c31c) C(#b3b3b3):h");
               iEl.removeClass("C(#b3b3b3) D(n) listForumItem:h_D(b) C(#f8c31c):h");
             } else if (el.attr('data-style') == 'icon-thread') {
               el.attr('title', el.attr('title-unsubscribe'));
               var iEl = el.find('i:first');
               iEl.removeClass("C(#b3b3b3)");
               iEl.addClass("C(#f8c31c)");
               var elementJsSubscribeThreadIcon = document.querySelector('.jsSubscribeThreadIcon');
               var tipJsSubscribeThreadIcon = elementJsSubscribeThreadIcon._tippy;
               tipJsSubscribeThreadIcon.setContent(el.attr('title-unsubscribe'));
               showBottomToast("Subscribe Thread Berhasil", 1500);
             } else {
               var spanEl = el.find('span:first');
               spanEl.text('Unsubscribe');
             }
             if (el.data('type') == 'forum') {
               var element_a = el.parent().find('a');
               var parent_old = el.parent();
               var list_subscribed = $('#subscribed_forum').find('.subscribed').length;
               if (list_subscribed == 0) {
                 var parent_div = $('<div/>', {
                   class: 'D(f) Ai(c) Mb(10px)'
                 }).appendTo('#subscribed_forum');
                 var child_div = $('<div/>', {
                   class: 'Pos(r)'
                 }).appendTo(parent_div);
                 var title = $('<span/>', {
                   class: 'Ff(VagRounded) Lts(0.6px) Fz(14px) D(ib) Mt(4px) C(#9e9e9e)',
                   text: 'SUBSCRIPTIONS'
                 }).appendTo(child_div);
                 $('#subscribed_forum').show();
               }
               var parent_div = $('<div/>', {
                 class: 'Pos(r) subscribed Bgc(#f9f9f9):h My(3px)'
               }).appendTo('#subscribed_forum');
               $(element_a).appendTo(parent_div);
               parent_div.attr('data-name', forum_name);
               var subscribed_data = $('#subscribed_forum').find('.subscribed');
               sortCategories(subscribed_data, '#subscribed_forum');
               $(parent_old).remove();
             }
           } else {
             el.attr("data-state", "subscribe");
             if (el.attr('data-style') == 'icon') {
               var iEl = el.find('i:first');
               iEl.removeClass("C(#f8c31c)");
               iEl.addClass("C(#b3b3b3) D(n) listThreadItem:h_D(b) C(#f8c31c):h Cur(p):h is-animate");
             } else if (el.attr('data-style') == 'icon-category') {
               var iEl = el.find('i:first');
               iEl.removeClass("C(#f8c31c)");
               iEl.addClass("C(#b3b3b3) D(n) listForumItem:h_D(b) C(#f8c31c):h Cur(p):h");
             } else if (el.attr('data-style') == 'icon-thread') {
               el.attr('title', el.attr('title-subscribe'));
               var iEl = el.find('i:first');
               iEl.removeClass("C(#f8c31c)");
               iEl.addClass("C(#b3b3b3)");
               var elementJsSubscribeThreadIcon = document.querySelector('.jsSubscribeThreadIcon');
               var tipJsSubscribeThreadIcon = elementJsSubscribeThreadIcon._tippy;
               tipJsSubscribeThreadIcon.setContent(el.attr('title-subscribe'));
               showBottomToast("Unsubscibe Thread Berhasil", 1500);
             } else {
               var spanEl = el.find('span:first');
               spanEl.text('Subscribe');
             }

             if (el.data('type') == 'forum') {
               var id_append = '#child_forum_parent';
               if (el.data('forum-type') == 'regional') {
                 id_append = '#child_regional_parent';
               }
               updateForumCategories(el, id_append, forum_name);
             }
           }
         }
         var index_el = subscribeUnsubscribeEls.indexOf(el.attr('id'));
         if (index_el > -1) {
           subscribeUnsubscribeEls.splice(index_el, 1);
         }
         subscribeUnsubscribeOnProgress = false;
         if (subscribeUnsubscribeEls.length > 0) {
           subscribeUnsubscribe($('#' + subscribeUnsubscribeEls[0]));
         }
       },
       error: function(result) {
         var index_el = subscribeUnsubscribeEls.indexOf(el.attr('id'));
         if (index_el > -1) {
           subscribeUnsubscribeEls.splice(index_el, 1);
         }
         subscribeUnsubscribeOnProgress = false;
         if (subscribeUnsubscribeEls.length > 0) {
           subscribeUnsubscribe($('#' + subscribeUnsubscribeEls[0]));
         }
       }
     });
   } else {
     window.location.href = subscribe_url;
   }
 }

 function updateForumCategories(el, id_append, forum_name)
 {
   var element_a = el.parent().find('a');
   var parent_old = el.parent();
   var parent_div = $('<div/>', {
     class: 'Pos(r) listForumItem subscribed Bgc(#f9f9f9):h My(3px)'
   }).appendTo(id_append);
   $(element_a).appendTo(parent_div);
   $(parent_old).remove();
   parent_div.attr('data-name', forum_name);

   var list_subscribed = $('#subscribed_forum').find('.subscribed').length;

   if (list_subscribed == 0) {
     $('#subscribed_forum > div').remove();
     $('#subscribed_forum').hide();
   }

   // Sorts
   var subscribed_data = $(id_append).find('.subscribed');
   sortCategories(subscribed_data, id_append);
   // Sort
 }

function sortCategories(subscribed_data, id_append)
{
  subscribed_data.sort(function(a,b){
    var an = a.getAttribute('data-name');
    var bn = b.getAttribute('data-name');

    if(an > bn) {
      return 1;
    }
    if(an < bn) {
      return -1;
    }
    return 0;
  });

  subscribed_data.detach().appendTo(id_append);
}


$( ".jsFollowingButton" ).hover(
  function() {
    $( this ).find('span').text(($(this).data('hover')));
  }, function() {
    $( this ).find('span').text(($(this).data('default')));
  }
);

$( ".jsButtonFollowingHeader" ).hover(
  function() {
    $( this ).find('span').text(($(this).data('hover')));
    $( this ).find('i').toggleClass('fa-user-times fa-user-minus');
  }, function() {
    $( this ).find('span').text(($(this).data('default')));
    $( this ).find('i').toggleClass('fa-user-times fa-user-minus');
  }
);

$( ".jsButtonBlockedHeader" ).hover(
  function() {
    $( this ).find('span').text(($(this).data('hover')));
    $( this ).find('i').toggleClass('fa-user-lock fa-unlock');
  }, function() {
    $( this ).find('span').text(($(this).data('default')));
    $( this ).find('i').toggleClass('fa-user-lock fa-unlock');
  }
);

// $( ".jsBlockedButton" ).hover(
//   function() {
//     $( this ).text('Unblock');
//   }, function() {
//     $( this ).text('Blocked');
//   }
// );

// $( ".jsUserMenu" )
// 	.mouseover(function() {
//     $(this).find('.jsUserDropdownMenu').toggleClass("is-visible");
//     toggleOverlay();
//   	})
//  	.mouseout(function() {
//     	$(this).find('.jsUserDropdownMenu').toggleClass("is-visible");
//       toggleOverlay();
//   	});

// $( ".jsNotificationMenu" )
// 	.mouseover(function() {
//     $(this).find('.jsNotificationDropdownMenu').toggleClass("is-visible");
//     toggleOverlay();
//   	})
//  	.mouseout(function() {
//     	$(this).find('.jsNotificationDropdownMenu').toggleClass("is-visible");
//       toggleOverlay();
//   	});


// $( ".flyout__trigger" )
// 	.mouseover(function() {
//     	$(".flyout__anchor").show();
//       toggleOverlay();
//
//     	if($('.flyout__tab__pane > .flyout__category__list').length > 0 && $('.flyout__tab__pane > .flyout__category__list')[0].scrollHeight > $('.flyout__tab__pane > .flyout__category__list').height()){
// 	  		$('.flyout__tab__pane > .flyout__category__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
// 	  	}
// 	  	if($('.flyout__subscribed__list').length > 0 && $('.flyout__subscribed__list')[0].scrollHeight > $('.flyout__subscribed__list').height()){
// 	  		$('flyout__subscribed__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
// 	  	}
//   	})
//  	.mouseout(function() {
//       console.log("wwwwwww");
//     	$(".flyout__anchor").hide();
//       toggleOverlay();
//   	});

    $( ".flyout__trigger" )
      .on( "mouseenter", function() {
        $(".flyout__anchor").show();
        toggleOverlay();

      	if($('.flyout__tab__pane > .flyout__category__list').length > 0 && $('.flyout__tab__pane > .flyout__category__list')[0].scrollHeight > $('.flyout__tab__pane > .flyout__category__list').height()){
  	  		$('.flyout__tab__pane > .flyout__category__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
  	  	}
  	  	if($('.flyout__subscribed__list').length > 0 && $('.flyout__subscribed__list')[0].scrollHeight > $('.flyout__subscribed__list').height()){
  	  		$('flyout__subscribed__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
  	  	}
      })
      .on( "mouseleave", function() {
        $(".flyout__anchor").hide();
        toggleOverlay();
      });

$( ".flyout__content" )
	.mouseenter(function() {
    	$(this).closest(".flyout__anchor").show();
  	})
	.mouseleave(function() {
    	$(this).closest(".flyout__anchor").hide();
  	});

$( ".flyout__category__item--has-children , .flyout__category-children__item--has-children"  )
	.mouseover(function() {
    	$(this).closest(".flyout__content").addClass( "flyout__content--triggered" );
    	if($(this).find('.flyout__category-children__list').first().length > 0 && $(this).find('.flyout__category-children__list').first()[0].scrollHeight > $(this).find('.flyout__category-children__list').first().height()){
	  		$(this).find('.flyout__category-children__list').first().siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
	  	}
  	})
  	.mouseout(function() {
    	$(this).closest(".flyout__content").removeClass( "flyout__content--triggered" );
  	});

$( ".flyout__subscribed__anchor" )
	.mouseover(function() {
    	$(this).closest(".flyout__content").addClass( "flyout__content--triggered" );
    	$(this).closest(".flyout__anchor").addClass( "flyout__anchor--subscribed" );
    	if($(this).find('.flyout__subscribed__list').length > 0 && $(this).find('.flyout__subscribed__list')[0].scrollHeight > $(this).find('.flyout__subscribed__list').height()){
	  		$(this).find('.flyout__subscribed__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
	  	}
  	})
  	.mouseout(function() {
    	$(this).closest(".flyout__content").removeClass( "flyout__content--triggered" );
    	$(this).closest(".flyout__anchor").removeClass( "flyout__anchor--subscribed" );
  	});

$( ".flyout__subscribed__panel" )
	.mouseover(function() {
    	$(this).siblings(".flyout__subscribed__anchor__link").addClass( "flyout__subscribed__anchor__link--hovered" );
  	})
  	.mouseout(function() {
    	$(this).siblings(".flyout__subscribed__anchor__link").removeClass( "flyout__subscribed__anchor__link--hovered" );
  	});

$( ".flyout__category__panel" )
	.mouseover(function() {
    	$(this).siblings(".flyout__category__link").addClass( "flyout__category__link--hovered" );
    	$(this).siblings(".flyout__category-children__link").addClass( "flyout__category-children__link--hovered" );
  	})
  	.mouseout(function() {
    	$(this).siblings(".flyout__category__link").removeClass( "flyout__category__link--hovered" );
    	$(this).siblings(".flyout__category-children__link").removeClass( "flyout__category-children__link--hovered" );
  	});


var scrolling = false;
function scrollContent(direction,element) {
    var amount = (direction === "up" ? "-=5px" : "+=5px");
    $(element).animate({
        scrollTop: amount
    }, 1, function() {
        if (scrolling) {
            scrollContent(direction,element);
        }
    });
}

$(".flyout__scroll--down")
	.bind("mouseover", function(event) {
    	scrolling = true;
    	scrollContent("down",$(this).siblings(".flyout__category-children__list"));
    	scrollContent("down",$(this).siblings(".flyout__category__list"));
    	scrollContent("down",$(this).siblings(".flyout__result__list"));
    	scrollContent("down",$(this).siblings(".flyout__subscribed__list"));
	})
	.bind("mouseout", function(event) {
    	scrolling = false;
	});

$(".flyout__scroll--up")
	.bind("mouseover", function(event) {
    	scrolling = true;
    	scrollContent("up",$(this).siblings(".flyout__category-children__list"));
    	scrollContent("up",$(this).siblings(".flyout__category__list"));
    	scrollContent("up",$(this).siblings(".flyout__result__list"));
    	scrollContent("up",$(this).siblings(".flyout__subscribed__list"));
	})
	.bind("mouseout", function(event) {
    	scrolling = false;
	});


$(window).bind('scroll', function() {
    //scrollHeader();

    //PositionBackToTop();

    if($('.jsLeaderboardSkyscrapper').length){
        scrollSkyscrapper();
    }
    scrollHeaderSticky();
    //checkStickySubforumSidebar();
    

    scrollTooltipReputation();
});

// function scrollHeader() {
//     var topHeaderPosition;
//
//     if($('.jsNoticeHeader').length > 0){
//
//         if($(window).scrollTop() <  $('.jsNoticeHeader').outerHeight()){
//             topHeaderPosition = $('.jsNoticeHeader').outerHeight() - $(window).scrollTop();
//         }
//         else{
//             topHeaderPosition = 0;
//         }
//         $('.jsNavHeader').css('top', topHeaderPosition + 'px');
//     }
// }
// 


function scrollTooltipReputation() {
  var scrollHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var tooltipAnchor = $('.firstPostBot').offset();
  if ($('.firstPostBot').length > 0) {
    if (scrollTop  > tooltipAnchor.top - scrollHeight + 64) {
      $('.jsTooltipReputation').addClass("is-visible");
    }
  }
}

var positionOverlayHeader;
var onTop = true;

function scrollHeaderSticky() {
    var batasScrollHeader = $('.jsNavHeader').offset().top + $('.jsNavHeader').height();
    if($(window).scrollTop() > (batasScrollHeader)){

      $('.jsStickyHeader').css('transform','translateY(0px)');
      positionOverlayHeader = 0;
      $('.jsFlyoutAnchor').appendTo('.jsFlyoutTriggerSticky');
      $('.jsUserDropdownMenu').appendTo('.jsUserAnchorSticky');
      $('.jsNotificationDropdownMenu').appendTo('.jsNotificationAnchorSticky');

      if($(".jsSearchFormInput").is(":focus")){
          $('.jsSearchFormInput').blur();
      }


      if(onTop == true && $('.jsPodcastWidgetHeaderIframe').hasClass('is-sticky')){
          //$('.jsPodcastWidgetHeaderIframe').appendTo('.jsPodcastWidgetAnchorSticky');
          //$('.jsPodcastWidgetHeaderIframe').toggleClass('Start(0) End(0)');
          setTimeout(
            function(){
              $('.jsPodcastWidgetHeaderIframe').toggleClass("is-scrolled Pos(f) Pos(a) Start(0) T(0) T(50px)");
            }, 300);

          onTop = false;
      }

      $('.jsSearchFormInput').blur();


    }
    else{

      $('.jsStickyHeader').css('transform','translateY(-200px)');
      //positionOverlayHeader = $('.jsNavHeader').offset().top + 90 - $(window).scrollTop();
      $('.jsFlyoutAnchor').appendTo('.jsFlyoutTrigger');
      $('.jsUserDropdownMenu').appendTo('.jsUserAnchor');
      if(onTop == false && $('.jsPodcastWidgetHeaderIframe').hasClass('is-sticky')){
          // $('.jsPodcastWidgetHeaderIframe').appendTo('.jsPodcastWidgetAnchor');
          // $('.jsPodcastWidgetHeaderIframe').toggleClass('Start(0) End(0)')
          $('.jsPodcastWidgetHeaderIframe').toggleClass("is-scrolled Pos(f) Pos(a) Start(0) T(0) T(50px)");
          onTop = true;
      }

      $('.jsNotificationDropdownMenu').appendTo('.jsNotificationAnchor');
    }
    //console.log(positionOverlayHeader);
}

function scrollSkyscrapper() {
    var batasAtasWrapperAds = $('.jsLeaderboardSkyscrapper').offset().top;
    var tinggiNavHeader = $('.jsStickyHeader').height();
    var tinggiSkyscrapper = 600;
    var tinggiMainContent  = $('.jsMainContent').outerHeight(true);

    var tinggiLeaderboard =
    ($('.jsLeaderboardAds').length) ? $('.jsLeaderboardAds').outerHeight(true) : 0;

    var tinggiNoticeBoard =
    ($('.jsNoticeBoard').length) ? $('.jsNoticeBoard').outerHeight(true) * $('.jsNoticeBoard').length : 0;

    var tinggiBreadCrumb =
    ($('.jsBreadcrumb').length) ? $('.jsBreadcrumb').outerHeight(true) : 0;

    var tinggiBottomLeaderboard =
    ($('.jsBottomLeaderboardAds').length) ? $('.jsBottomLeaderboardAds').outerHeight(true) : 0;

    var spacingBawah = 30;
    var spacingAtas = 10;
    var posisiFixed = tinggiNavHeader + spacingAtas;

    var posisiAbsolute = tinggiMainContent + tinggiBottomLeaderboard + tinggiLeaderboard + tinggiNoticeBoard + tinggiBreadCrumb - tinggiSkyscrapper ;
    var batasAtasFooter = $('.jsMainFooter').offset().top;
    var batasHarusFixed = batasAtasWrapperAds - tinggiNavHeader - spacingAtas;
    var batasHarusAbsolute = batasAtasFooter - tinggiSkyscrapper - posisiFixed - spacingBawah;

    //kondisi harus sticky
    if($(window).scrollTop() > batasHarusFixed){
      //console.log(tinggiMainContent );
      $('.jsSkyscrapperAds').css('position','fixed');
      $('.jsSkyscrapperAds').css('transform','translateY('+ posisiFixed +'px)');
      //kondisi harus absolute
      if($(window).scrollTop() > batasHarusAbsolute){
        $('.jsSkyscrapperAds').css('position','absolute');
        $('.jsSkyscrapperAds').css('transform','translateY('+ posisiAbsolute + 'px)');
      }
    }
    //kondisi awal
    else{
      $('.jsSkyscrapperAds').css('position','initial');
      $('.jsSkyscrapperAds').css('transform','none');
    }
}

/*
function buat subforum fixed sidebar
 */
function checkStickySubforumSidebar(){
    var scrollToFixed;
    var anchorMainContent = $('.jsMainContent').offset().top;
    var heightMainContent = $('.jsMainContent').outerHeight();
    var heightSidebar = $('.jsSubforumFixedSidebar').outerHeight();
    if($(window).scrollTop() > (anchorMainContent - 50)){
      //$('.jsSubforumFixedSidebar').css("transform", 'translateY(60px)');
      $('.jsSubforumFixedSidebar').css("top", '50px');
      if($(window).scrollTop() > (anchorMainContent + heightMainContent - heightSidebar - 50)){
        scrollToFixed = (anchorMainContent + heightMainContent) - $(window).scrollTop() - (heightSidebar);
        $('.jsSubforumFixedSidebar').css('top', scrollToFixed+'px');
      }
    }
    else{
      scrollToFixed = ($('.jsMainContent').offset().top - $(window).scrollTop());
      $('.jsSubforumFixedSidebar').css('top', scrollToFixed+'px');
    }
}

function checkScroller(element) {
    if (element[0].scrollHeight > element.height()) {
		// mentok bawah
		if (element[0].scrollHeight - element.scrollTop() == element.outerHeight())
        {
            element.siblings(".flyout__scroll--down").removeClass( "flyout__scroll--on" );
        }
        // mentok atas
        else if(element.scrollTop() === 0)
        {
            element.siblings(".flyout__scroll--up").removeClass( "flyout__scroll--on" );
        }
		else{
			element.siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
			element.siblings(".flyout__scroll--up").addClass( "flyout__scroll--on" );
		}

	}
}

//scroll top main category nav
$(".flyout__category__list").bind('scroll', function() {
	checkScroller($(this));
});

$(".flyout__subscribed__list").bind('scroll', function() {
	checkScroller($(this));
});

//scroll top main category search
$(".flyout__result__list").bind('scroll', function() {
	checkScroller($(this));
});

//scroll anakan main category nav
$(".flyout__category-children__list").bind('scroll', function() {
	checkScroller($(this));
});


// @codekit-prepend "main/main-kslzy.js";
// @codekit-prepend "main/main-backend.js";
// @codekit-prepend "main/main-hover.js";
// @codekit-prepend "main/main-scroll.js";

function toggleOverlay() {
  if (!($('.jsNavHeaderOverlay').css('display') == 'block')) {
    $('.jsNavHeaderOverlay').show();
    $('.jsNavHeaderOverlay').css('top', positionOverlayHeader + 'px');
  } else {
    $('.jsNavHeaderOverlay').hide();
  }
}

function showBottomToast(text, time) {
  $('.jsBottomToast').addClass('is-visible');
  $('.jsBottomToast').text(text);
  setTimeout(function() {
    $('.jsBottomToast').removeClass('is-visible');
  }, time);
}

function bindPopoverMenu() {
  $('body').on('click', '.jsPopoverTrigger', function() {
    var others = $('.jsPopoverTrigger').not(this);
    others.next().removeClass('is-visible');
    if ($(this).next().hasClass("is-visible")) {
      $(this).next().removeClass("is-visible");
    } else {
      $(this).next().addClass("is-visible");
    }
  });
}

function showReplyTools() {
  $('.jsReplyTools').show();
  $('.jsReplyUser').removeClass('Pos(a)');
  $('.jsReplyUser span').show();
  $(this).removeClass('Px(40px)');
}

function openModal(modalTarget) {
  $('.jsModal').removeClass('is-open');
  var modalElement = $('#' + modalTarget);
  modalElement.addClass('is-open');
  modalElement.find('.jsModalDialog').addClass('is-animate');
  $('body').addClass('Ov(h)');
}

function closeModal() {
  $('.jsModal').removeClass('is-open is-animate');
  $('body').removeClass('Ov(h)');
}

/*
   Function to insert BBCode, it receives 3 parameter. The openWith and closeWith parameters are used to wrap the text with the BBCode tag. The textbox parameter defines which textbox element should be used.
 */
function insertBBCode(openWith, closeWith, textbox) {
  var objectTextbox = document.querySelector(textbox);
  var jqueryTextbox = $(textbox);
  var posSelectionStart = objectTextbox.selectionStart;
  var posSelectionEnd = objectTextbox.selectionEnd;
  var textAreaTxt = jqueryTextbox.val();
  var selection = textAreaTxt.substring(posSelectionStart, posSelectionEnd);
  var txtToAddStart = openWith;
  var txtToAddEnd = closeWith;
  jqueryTextbox.val(textAreaTxt.substring(0, posSelectionStart) + txtToAddStart + selection + txtToAddEnd + textAreaTxt.substring(posSelectionEnd));
  objectTextbox.focus();
  objectTextbox.selectionStart = posSelectionStart + txtToAddStart.length + selection.length + txtToAddEnd.length;
  objectTextbox.selectionEnd = posSelectionStart + txtToAddStart.length + selection.length + txtToAddEnd.length;
}

var regex = /^(.+?)(\d+)$/i;

  /*
   * notice cookie
   */
  if ($.cookie('notices') === null) {
    $.cookie('notices', JSON.stringify([]), {
      expires: null,
      path: "/",
      domain: "",
      secure: false
    });
  }

  /*
   * trh in forum landing / threadlist
   */
  bindTrhThreadList();

  /*
   * trh in home / channel landing
   */
  bindTrhHome();

  /*
   * set thread display
   */
  bindSetThreadDisplay();

  /*
   * show list of HT
   */
  bindHtNext();

  /*
   * show list of thread in forum landing / threadlist
   */
  if ($("#threadlist-loading-area").length) {
    function tlload() {
      if (isElementInViewport($("#threadlist-loading-area")) && tl_is_loading == false) {
        data_sort = $('#tl_sort').val();
        data_cursor = $('#tl_cursor').val();
        data_order = $('#tl_order').val();
        show_thread_list(data_sort, data_cursor, data_order);

        tracking_ref = $('#tl_tracking_ref').val();
        data_sort_track = $('#tl_sort_track').val();
        dataLayer.push({
          'event': 'trackEvent',
          'eventDetails.category': tracking_ref,
          'eventDetails.action': 'load more ' + tl_page,
          'eventDetails.label': 'threadlist-' + data_sort_track
        });
      }
    }
    window.addEventListener("resize", tlload, {
      passive: !0
    });
    window.addEventListener("scroll", tlload, {
      passive: !0
    });
    window.addEventListener("touch", tlload, {
      passive: !0
    });
    window.addEventListener("click", tlload, {
      passive: !0
    });
  };

function cloneRepeaterItem(){
    var repeaterItemLength = $(".jsRepeaterItem").length;
    var repeaterIndex = 1;
    $(this).closest(".jsRepeater").find(".jsRepeaterItem").first().clone().hide().appendTo(".jsRepeaterList");
    var clonedItem = $(this).closest(".jsRepeater").find(".jsRepeaterItem").last();
    clonedItem.find('.jsErrorNote').remove();
    clonedItem.find('input[type="text"]').val('');
    clonedItem.slideDown(200);
    //$(this).closest(".jsRepeater").find(".jsRepeaterItem").first().clone().hide().appendTo(".jsRepeaterList").slideDown(200);

    // setTimeout(function(){
    //   $(this).closest(".jsRepeater").find(".jsRepeaterItem").last().find('.jsErrorNote').remove();
    // }, 200);

    if(repeaterItemLength == 2){
      $(".jsRepeaterItem > div.radio").append('<button class="jsRepeaterButtonRemove"><i class="fas fa-times"></i></button>');
    }
    if (repeaterItemLength == 44) {
      $('.jsRepeaterButtonAdd').hide();
    }
    $(this).closest(".jsRepeater").find(".jsRepeaterItem")
        .each(function() {
            $(this).find("input").attr("id", "repeaterItem-" + repeaterIndex);
            $(this).find("input").attr("placeholder", "Pilihan " + repeaterIndex);
            $(this).find("input").attr("name", "options[" + repeaterIndex +']');
            repeaterIndex++;
        });
}

function removeRepeaterItem(){
    $(this).closest(".jsRepeaterItem").remove();
    var repeaterItemLength = $(".jsRepeaterItem").length;
    var repeaterIndex = 1;
    $(".jsRepeaterItem")
    .each(function() {
      $(this).find("input").attr("id", "repeaterItem-" + repeaterIndex);
      $(this).find("input").attr("placeholder", "Pilihan " + repeaterIndex);
      repeaterIndex++;
    });
    if(repeaterItemLength == 2){
      $(".jsRepeaterItem").find('.jsRepeaterButtonRemove').remove();
    }
    if (repeaterItemLength == 44) {
      $('.jsRepeaterButtonAdd').show();
    }
}

$(document).ready(function() {
  $(document).on('click', '.jsRepeaterButtonRemove', removeRepeaterItem);
  $(document).on('click', '.jsRepeaterButtonAdd', cloneRepeaterItem);
  if($(".jsRepeaterItem").length == 2){
      $(".jsRepeaterItem").find('.jsRepeaterButtonRemove').remove();
  }

  $('#jsToolbarSCEditor').on('click', ".createdPoll", function (){
  changeValueCreatedPoll(this);
  });
  $('.jsClosePolling').on('click', function (){
    changeValueCreatedPoll(this);
  });
  checkcreatedPoll();

  /**
   *Bind clicks close tooltip
   */
  $('.jsCloseBtn').click(function(event) {
    $('.jsTooltipReputation').removeClass("is-visible");
  });

  $('.jsModal').click(function(event) {
    if (!$(event.target).closest('.jsModalContent').length) {
      $('.jsModal').removeClass('is-open is-animate');
      $('body').removeClass('Ov(h)');
    }
  });

  if (typeof uploadAvatar === "function") {
    uploadAvatar();
  }

  if (typeof uploadCover === "function") {
    uploadCover();
  }

  scrollHeaderSticky();

  $(document).on('click','.jsNgetopTabButton',function(){
    var indexElement = $(".jsNgetopTabButton").index(this);
    $('.jsNgetopTabButton').removeClass("is-active");
    $(this).addClass("is-active");
    $('.jsNgetopTabLine').css('transform', 'translateX(' + $(this).position().left + 'px)');
    $('.jsNgetopTabContent').css('transform', 'translateX(-' + (indexElement * 100) + '%)');
    $('.jsNgetopTabContent').css('height', $(".jsNgetopTabContent > div:nth-child(" + (indexElement + 1) + ")").height());
  });

  if ($('.jsTabComponent').length) {
    $(".jsTabComponent").each(function() {
      var tabActive = $(this).find(".jsTabButton.is-active");
      var index = $(this).find(".jsTabButton").index(tabActive);
      $(this).find('.jsTabLine').css('width', tabActive.outerWidth() + 'px');
      $(this).find('.jsTabLine').css('transform', 'translateX(' + tabActive.position().left + 'px)');
      $(this).find('.jsTabLine').show();
      $(this).find('.jsTabComponentContent').css('transform', 'translateX(-' + (index * 100) + '%)');
      $(this).find('.jsTabComponentContent').css('height', $(".jsTabComponentContent > div:nth-child(" + (index + 1) + ")").height());
    });
  }

  $(document).on('click','.jsTabButton',function(){
    var indexElement = $(".jsTabButton").index(this);
    $(this).closest('.jsTabComponent').find('.jsTabButton').removeClass("is-active");
    $(this).addClass("is-active");
    $(this).closest('.jsTabComponent').find('.jsTabLine').css('width', $(this).outerWidth() + 'px')
    $(this).closest('.jsTabComponent').find('.jsTabLine').css('transform', 'translateX(' + $(this).position().left + 'px)');
    $(this).closest('.jsTabComponent').find('.jsTabComponentContent').css('transform', 'translateX(-' + (indexElement * 100) + '%)');
    $(this).closest('.jsTabComponent').find('.jsTabComponentContent').css('height', $(".jsTabComponentContent > div:nth-child(" + (indexElement + 1) + ")").height());
  });

$(document).on('click','.jsTabNav',function(){
    var indexElement = $(".jsTabNav").index(this);
    $(this).closest('.jsTabElement').find('.jsTabNav').removeClass("is-active");
    $(this).addClass("is-active");
    $(this).closest('.jsTabElement').find('.jsTabContent').removeClass("is-show");
    $(this).closest('.jsTabElement').find('.jsTabContent').eq(indexElement).addClass('is-show');
  });



  /*
    bind onclick on link view all badges
   */
  $('.all-badges').on('click', function(e) {
    e.preventDefault();
    badge();
  });

  /*
    bind onclick on link view all moderated forum
   */
  $('.moderate-di').on('click', function(e) {
    e.preventDefault();
    moderate();
  });

  /*
    Initiated Search Connection
   */
  $('#pagination').html('');

  $('#search_connection').unbind('click').on('click', function() {
    searchConnection();
  });

  $("#search_connection_keyword").unbind("keydown").bind("keydown", function(event) {
    if (event.keyCode === 13) {
      searchConnection();
    }
  });

  $(".connection_tab").click(function() {
    connection_type = tab = $(this).attr("connection-type");
    current_page = 1;
    $('#search_connection_keyword').val('');
    get_list_connection(connection_type);
  });



  tippy('.jsTippy', {
    theme: 'translucent',
    arrow: true,
    size: 'small'
  });

  /*
  Init Datepicker
   */

   flatpickr(".jsDatepickerPolling",{
     minDate : new Date().fp_incr(1),
     dateFormat: "d-m-Y",
     "locale": "id"
   });

  // var editorIcons = Quill.import('ui/icons');
  // editorIcons['bold'] = '<i class="fas fa-bold" aria-hidden="true"></i>';
  // editorIcons['italic'] = '<i class="fas fa-italic" aria-hidden="true"></i>';
  // editorIcons['align'][''] = '<i class="fas fa-align-left" aria-hidden="true"></i>';
  // editorIcons['align']['center'] = '<i class="fas fa-align-center" aria-hidden="true"></i>';
  // editorIcons['align']['right'] = '<i class="fas fa-align-right" aria-hidden="true"></i>';
  // editorIcons['underline'] = '<i class="D(ib) W(14px) H(14px) Bg(bgImageProps) Bgi(iconEditorUnderline) Va(m)"></i>';
  //
  // Quill.register('modules/characterCounter', function(quill, options) {
  //   var container = document.querySelector('.jsCharacterCounter');
  //   var limitChar = 20000;
  //   quill.on('text-change', function(delta,old,source) {
  //     var counter = quill.getLength();
  //     if (counter > limitChar) {
  //       quill.deleteText(limitChar, counter);
  //       counter = quill.getLength();
  //     }
  //     // There are a couple issues with counting words
  //     // this way but we'll fix these later
  //     container.innerText = limitChar - counter + 1;
  //   });
  // });
  //
  // var quill = new Quill('.jsCreateThreadContentEditor', {
  //   theme: 'snow',
  //   placeholder: 'Mulai Menulis!',
  //   modules: {
  //     toolbar: '#quillToolbar',
  //     characterCounter: true
  //   }
  // });

  $('.jsPilihKategori').select2();

  /*
    Init Clipboard function for Thread Detail Copy Link
   */
  var clipboard = new ClipboardJS('.jsClipboardButton');
  clipboard.on('success', function(e) {
    showBottomToast("URL Copied to Clipboard", '2000');
  });

  /*
    Init Hotkey Function
   */
  hotkeys('shift+x, shift+r, shift+left, shift+right', function(event, handler) {
    switch (handler.key) {
      // Shift + X to Open Spoiler
      case "shift+x":
        $(".spoiler input[type=button]").click();
        break;
        // Shift + X to Reply Advanced
      case "shift+r":
        link = $(".jsButtonPostReply").attr("href");
        if (link) {
          window.location = link;
        }
        break;
        // Shift + Left to Prev Page
      case "shift+left":
        link = $(".pagination .jsPrevPage").attr("href");
        if (link) {
          window.location = link;
        };
        break;
        // Shift + Right to Next Page
      case "shift+right":
        link = $(".pagination .jsNextPage").attr("href");
        if (link) {
          window.location = link;
        };
        break;
    }
  });

  $('.jsButtonSmilies').click(function() {
    if (!$('.jsSmiliesContainer').hasClass('is-visible')) {
      $('.jsSmiliesContainer').addClass('is-visible');
      $(this).css('color', '#1998ed');
    } else {
      $('.jsSmiliesContainer').removeClass('is-visible');
      $(this).removeAttr('style');
    }
  });

  $('.jsSubscribeThreadIcon').click(function() {
    subscribeUnsubscribe($(this));
  });

  $('#jsReplyTextArea').focus(function() {
    showReplyTools();
  });



  autosize($('#jsReplyTextArea'));
  autosize($('.jsNestedReplyTextArea'));

  /*
    Click event toggling
   */
  // $('.jsCompactTrigger').click(function(){
  //   if(!$('body').hasClass('is-compact')){
  //     $('body').addClass('is-compact');
  //     $(this).find('i').addClass('fa-list-ul').removeClass('fa-th-large');
  //   }
  //   else{
  //     $('body').removeClass('is-compact');
  //     $(this).find('i').addClass('fa-th-large').removeClass('fa-list-ul');
  //   }
  // });


  bindPopoverMenu();

  bindThreadListShareMenuData();

  //scrollHeaderSticky();

  $(".is-remove-all").mousedown(function(e) {
    e.preventDefault();
  });

  $(document).on("click", ".jsModalTrigger", function() {
    $('.jsModal').removeClass('is-open');
    var modalTarget = $(this).attr('data-modal');
    var modalElement = $('#' + modalTarget);
    modalElement.addClass('is-open');
    modalElement.find('.jsModalDialog').addClass('is-animate');
    $('body').addClass('Ov(h)');
  });

  $(document).on("click", ".jsModalCloseButton", function() {
    closeModal();
  });

  $(".mls-img").kslzy(300);

  /*
     Bind Click Button on BUtton channel List
  */
  $('body').on('click', '.jsChannelForumButton', function() {
    if ($(this).closest('.jsChannelForumItem').hasClass('is-open')) {
      $(this).closest('.jsChannelForumItem').removeClass('is-open');
      $(this).find('i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
      $(this).closest('.jsChannelForumItem').find('.jsChannelForumList').slideUp();
    } else {
      $(this).closest('.jsChannelForumItem').addClass('is-open');
      $(this).find('i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
      $(this).closest('.jsChannelForumItem').find('.jsChannelForumList').slideDown();
    }
  });

  $(document).on("click", ".jsButtonMultiquote", function() {
    $(this).toggleClass('is-animate is-selected');
  });

  $(document).on("click", ".jsPodcastWidgetButtonExpand", function() {
    $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    $('.jsPodcastWidgetEpisodeList').slideToggle();
  });

  if ($('.flyout__trigger').length > 0) {
    $('.flyout__trigger').hover(function() {
      if (!catLoaded) {
        fetchCategories();
      }
    });
  }
  if (linksearch !== '') {
    get_cat(searchchoice);
  }

  $('body').on('click', '.jsFormPasswordToggle', function() {
    var formPasswordInput = $(this).closest('.jsFormPassword').find('.jsFormPasswordInput');
    var formPasswordIcon = $(this).closest('.jsFormPassword').find('i');
    if (formPasswordInput.attr('type') == 'text') {
      var isPassword = false;
    } else {
      var isPassword = true;
    }

    if (isPassword) {
      formPasswordIcon.removeClass('fa-eye-slash');
      formPasswordIcon.addClass('fa-eye');
      formPasswordInput.attr('type', 'text');
    } else {
      formPasswordIcon.removeClass('fa-eye');
      formPasswordIcon.addClass('fa-eye-slash');
      formPasswordInput.attr('type', 'password');
    }
  });

  $('.jsFirstPostItemTrigger').click(function() {
    if (!$('.jsFirstPostItemContent').hasClass('is-hide')) {
      $('.jsFirstPostItemContent').addClass('is-hide');
      $('.jsFirstPostItemContent').slideUp();
      $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
      $(this).find('span').text('Lihat Isi Thread');
      $('html, body').animate({
        scrollTop: $(".jsFirstPostItemContent").offset().top - 300
      }, 400);
    } else {
      $('.jsFirstPostItemContent').removeClass('is-hide');
      $('.jsFirstPostItemContent').slideDown();
      $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
      $(this).find('span').text('Sembunyikan Isi Thread');
    }
  });

  $('.jsSpoilerTrigger').click(function(event) {
    $(this).closest('.jsSpoiler').toggleClass('is-open');
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    if ($(this).closest('.jsSpoiler').hasClass('is-open')) {
      $(this).find('span').text('Hide');
      $(this).closest('.jsSpoiler').find('.jsSpoilerContent').first().slideDown();
    } else {
      $(this).find('span').text('Show');
      $(this).closest('.jsSpoiler').find('.jsSpoilerContent').first().slideUp();
    }
  });

  $('.jsTabLink').click(function() {
    var tabId = $(this).attr('data-tab');

    $('.jsTabLink, .jsTabContent').removeClass('is-active');

    $(this).addClass('is-active');
    $("#" + tabId).addClass('is-active');
  });

  $('.jsSearchFormInput').focus(function() {
    $('.jsSearchResult').addClass('is-open');
    $('.jsNavHeaderOverlay').show();
    //$('.jsNavHeaderOverlay').css('top', ($('.jsNavHeader').offset().top + 90 - $(window).scrollTop())+'px');
  });

  $('.jsSearchFormInput').blur(function() {
    $('.jsSearchResult').removeClass('is-open');
    $('.jsNavHeaderOverlay').hide();
  });

  $('.jsModalCloseButton').click(function() {
    $('.jsModal').removeClass('is-open');
    $('body').removeClass('Ov(h)');
  });

  if ($('.jsPodcastWidget').length > 0) {
    var widthFlex = $('.jsPodcastWidget').outerWidth() - 45 - 35 - 30;
    $('.jsPodcastWidgetFlex').css('width', widthFlex + 'px');
    var innerWidth = $(".jsAudioTitle")[0].scrollWidth;
    var wrap = $(".jsAudioContainer").width();
    if (innerWidth > wrap) {
      $(".jsAudioContainer").addClass("is-running");
      $(".jsAudioLink").clone().prependTo(".jsAudioTitle");
    }
  }

  $("#search").keydown(function(event) {
    $(".jsSearchResult").find('li').removeClass('Bgc(#f2f2f2)');
    var totalIndex = $(".jsSearchResult .jsSearchWrapper li").length - 1;

    if (event.which == 38) {
      if (indexSelected > 0) {
        indexSelected--;
      } else {
        indexSelected = totalIndex;
      }
      setSelectedSearch();
      return false;
    } else if (event.which == 40) {
      if (indexSelected < totalIndex) {
        indexSelected++;
      } else {
        indexSelected = 0;
      }
      setSelectedSearch();
    }
  });

  function setSelectedSearch() {
    var selectedElement = ".jsSearchResult .jsSearchWrapper li:eq(" + indexSelected + ")";
    var selectedElementValue = $(selectedElement).find('a').text();

    $("#search").val(selectedElementValue);
    $(selectedElement).addClass('Bgc(#f2f2f2)');
    $("#search").attr("value", selectedElementValue);
    $("#search").blur();
    $("#search").focus();
  }

  $('.jsUserAvatar').click(function() {
    if ($('.toggleMenu').hasClass('is-visible')) {
      $('.toggleMenu').removeClass('is-visible');
      $('.jsNavHeaderOverlay').hide();
    } else {
      $(this).next().toggleClass("is-visible");
      toggleOverlay();
    }

  });

  $('.jsNotificationIcon').click(function() {
    if ($('.toggleMenu').hasClass('is-visible')) {
      $('.toggleMenu').removeClass('is-visible');
      $('.jsNavHeaderOverlay').hide();
    } else {
      $(this).next().toggleClass("is-visible");
      toggleOverlay();
    }
  });


  $(document).on('click', function(event) {

    if (!$(event.target).closest('.jsPopover, .jsUserMenu, .jsNotificationMenu, .jsFlyoutMenu, .jsSearchContainer, .jsReplyTools, #jsReplyTextArea, .jsSmilies ').length) {
      $('.jsPopoverMenu').removeClass('is-visible');
      $('.jsSmiliesContainer').removeClass('is-visible');
      $('.jsButtonSmilies').removeAttr('style');
      if ($('#jsReplyTextArea').length && $('#jsReplyTextArea').val().length == 0) {
        $('.jsReplyTools').hide();
        $('.jsReplyUser').addClass('Pos(a)');
        $('.jsReplyUser span').hide();
        $('#jsReplyTextArea').addClass('Px(40px)');
      }
      $('.jsUserDropdownMenu').removeClass('is-visible');
      $('.jsNotificationDropdownMenu').removeClass('is-visible');
      if ($('.jsNavHeaderOverlay').css('display') == 'block') {
        $('.jsNavHeaderOverlay').hide();
      }


    }
  });

  // $('.jsSidebarLeft').stickySidebar({
  //     innerWrapperSelector: '.jsSidebarLeftInner',
  //     topSpacing: 100,
  //     bottomSpacing: 60
  // });
  //
  // $('.jsSidebarRight').stickySidebar({
  //     innerWrapperSelector: '.jsSidebarRightInner',
  //     topSpacing: 100,
  //     bottomSpacing: 60
  // });

  // $(".jsStickyColumn").stick_in_parent({
  //   parent: ".jsStickyParent",
  //   spacer: ".jsStickySpacer",
  //   offset_top: 60
  // });

  // $('.').stickybits();
  // stickybits('.jsStickyColumn', {verticalPosition: 'bottom'});
  
  stickybits('.jsStickyAnchor', {stickyBitStickyOffset: 60 });
  stickybits('.jsToolbarSCEditorAnchor', {
    verticalPosition: 'bottom',
    useStickyClasses: true
  });

  //scrollHeader();

  // Accordion
  var menuAccordion = $('.jsMenuAccordion');
  menuAccordion.children('ul').find('a').click(function() {
    var checkElement = $(this).next();
    if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('is-open');
      $(this).find('.jsMenuAccordionIcon').toggleClass('fa-angle-down fa-angle-up');
      checkElement.slideUp();
    }
    if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      menuAccordion.children('ul').find('ul:visible').slideUp();
      menuAccordion.find('li').removeClass('is-open');
      menuAccordion.find('.jsMenuAccordionIcon').removeClass('fa-angle-up').addClass('fa-angle-down');
      $(this).closest('li').addClass('is-open');
      $(this).find('.jsMenuAccordionIcon').toggleClass('fa-angle-down fa-angle-up');
      checkElement.slideDown();
    }

    if ($(this).closest('li').find('ul').children().length === 0) {
      return true;
    } else {
      return false;
    }
  });

  forumAllEventTracking();
  bindForumAllIconCancel();
  bindForumAllSearchResult();
  bindForumAllSubscribeEvent();

});
