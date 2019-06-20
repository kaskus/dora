function build_ga_track_event(category, action, label) {
  var ga_event_code = "_gaq.push(['_trackEvent', " + category + ", " + action + ", " + label + "]);";
  var gtm_event_code = "dataLayer.push({'event': 'trackEvent','eventDetails.category': " + category + ", 'eventDetails.action': " + action + ", 'eventDetails.label': " + label + "});";

  return ga_event_code + gtm_event_code;
}

function build_ga_custom_track_share_thread(category, action, label, el) {
  var threadId = el.attr('data-threadid');
  var threadTitle = decodeURIComponentSafe(el.attr('data-title')).replace('&#92;', "");
  var author = el.attr('data-author');
  var forumId = el.attr('data-forum-id');
  var forumName = el.attr('data-forum-name');
  var forumParentId = el.attr('data-forum-parent-id');
  var forumParentName = el.attr('data-forum-parent-name');
  var channelId = el.attr('data-channel-id');
  var channelName = el.attr('data-channel-name');
  var ga_event_code = "_gaq.push(['_trackEvent', " + category + ", " + action + ", " + label + "]);";
  var gtm_event_code = "dataLayer.push({" +
    "'event': 'trackEvent'," +
    "'eventDetails.category': " + category + "," +
    "'eventDetails.action': " + action + "," +
    "'eventDetails.label': " + label + "," +
    "'threadShared': '1'," +
    "'userID': '" + user_id + "'," +
    "'threadId': '" + threadId + "'," +
    "'threadTitle': '" + threadTitle + "'," +
    "'author': '" + author + "'," +
    "'forumId': '" + forumId + "'," +
    "'forumName': '" + forumName + "'," +
    "'forumParentId': '" + forumParentId + "'," +
    "'forumParentName': '" + forumParentName + "'," +
    "'channelId': '" + channelId + "'," +
    "'channelName': '" + channelName + "'" +
  "});";

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

function buildAdditionalCustomMetricAttr(el) {
  var author = el.attr('data-author');
  var title = decodeURIComponentSafe(el.attr('data-title')).replace('&#92;', "");
  var forum_id = el.attr('data-forum-id');
  var forum_name = el.attr('data-forum-name');
  var forum_parent_id = el.attr('data-forum-parent-id');
  var forum_parent_name = el.attr('data-forum-parent-name');
  var channel_id = el.attr('data-channel-id');
  var channel_name = el.attr('data-channel-name');
  var attr = 'data-userid="' + user_id + '" ' +
    'data-author="' + author + '" ' +
    'data-title="' + title + '" ' +
    'data-forumid="' + forum_id + '" ' +
    'data-forum-name="' + forum_name + '" ' +
    'data-forum-parentid="' + forum_parent_id + '" ' +
    'data-forum-parent-name="' + forum_parent_name + '" ' +
    'data-channelid="' + channel_id + '" ' +
    'data-channel-name="' + channel_name + '" ';
  return attr;
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
        buildAdditionalCustomMetricAttr(divMenu) +
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
        buildAdditionalCustomMetricAttr(divMenu) +
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
      '<a href="javascript:void(0);" data-url="' + fb_url + '" data-threadid="' + threadid + '" onclick="threadlist_facebook_share(\'' + fb_url + '\', \'' + threadid + '\');' + build_ga_custom_track_share_thread("'" + forum_id + " " + title + "'", "'share thread'", "'facebook'", divMenu) + '" class="D(ib) C(#484848)"> ' +
      '<i class="Mend(12px) Va(m) fab Fz(14px) fa-facebook-square fa-fw"></i> ' +
      '<span class="Fz(12px)">' + window.KASKUS_lang.share_facebook_button + '</span> ' +
      '</a> ' +
      '</li> ' +
      '<li class="D(b) Mb(18px)"> ' +
      '<a target="_blank" href="' + twitter_href + '" data-threadid="' + threadid + '" onclick="threadlist_share_count(\'' + threadid + '\', \'twitter\');' + build_ga_custom_track_share_thread("'" + forum_id + " " + title + "'", "'share thread'", "'twitter'", divMenu) + '" class="D(ib) C(#484848)"> ' +
      '<i class="Mend(12px) Va(m) fab Fz(14px) fa-twitter-square fa-fw"></i> ' +
      '<span class="Fz(12px)">' + window.KASKUS_lang.share_twitter_button + '</span> ' +
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
      subscribeUnsubscribe($(this));
      return false;
    });
  }
  if ($('[id^=bookmark-search-forum]').length) {
    $('[id^=bookmark-search-forum]').click(function() {
      subscribeUnsubscribe($(this));
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
  var urlAjax = el.attr('href');
  $('#jsModalWhoPosted').empty();
  var html_view = '<div class="modal-dialog jsModalDialog Ov(h)">' +
              '<div class="modal-content jsModalContent">' +
                '<div class="modal-section W(400px)">' +
                  '<div class="modal-header H(140px) Bgc(#e4f8f6) Bdrs(5px) Pos(r) Maw(360px) Mx(a) Bdrsbend(0) Bdrsbstart(0)">' +
                    '<div class="W(100%) H(130px) Bg(bgImageProps) Bgi(imagePopupWhoposted) Pos(a) B(0)"></div>' +
                    '<button class="Pos(a) End(10px) T(10px) jsModalCloseButton Z(1)">' +
                      '<i class="fas fa-times C(#6e6e6e) Fz(20px)"></i>' +
                    '</button>' +
                  '</div>' +
                  '<div class="modal-body Bgc(#ffffff) Bdrs(5px) Py(15px) Px(40px)">' +
                    '<div class="Fz(18px) Fw(700) Mb(20px)">Who Posted</div>' +
                    '<div class="D(f) Jc(sb) Ai(c) Fz(13px) C(#484848) nightmode_C(#dcdcdc) Py(8px)">' +
                      '<div>Username</div>' +
                      '<div class="W(80px)" id="whoposted_total_post">Post</div>' +
                    '</div>' +
                    '<div class="Ovy(a) Mah(350px) Mb(15px) Mt(10px)">' +
                      '<div class="D(f) Fld(c)" id="whoposted_list_user">' +
                        '<ul>';
  html_view += '<img src="' + assetsFolderNew + '/images/icon-load-biru.gif" width="40" height="40" alt="notification-loading" />';
  html_view += '</ul></div></div></div></div></div></div>';
  $("#jsModalWhoPosted").html(html_view);
  bindJsModalCloseButton();

  $.ajax({
    url: urlAjax,
    success: function(result) {
    if (typeof result !== 'object') {
      result = $.parseJSON(result);
    }
    $('#whoposted_list_user').empty();

    whoposted_data = result.result.whoposted;
    userDatas = result.result.user_info;
    post_userid = result.result.post_userid;
    html_view = "<ul>";
    if (Object.keys(whoposted_data).length > 0) {
      $.each(whoposted_data, function(key, post_info) {
        userData = userDatas[post_info.userid];
        if (typeof userData !== 'undefined' ) {
          html_view += '<li class="D(f) Ai(c) Mb(15px)">' +
                  '<a href="/profile/' + post_info.userid + '" target="_blank">' +
                    '<div class="Pos(r)">' +
                      '<img src="' + userData.profile_picture + '" class="W(36px) H(36px) Bdrs(50%)">' +
                      ((userData.is_online) ? '<i class="W(12px) H(12px) Bdrs(50%) Bgc(#30c436) Pos(a) End(0) B(0) Bd(borderSolidGreen)"></i>' : '' ) +
                    '</div>' +
                  '</a>' +
                  '<div class="Fx(flexOne) Mx(10px) Ta(start)">' +
                    '<a href="/profile/' + post_info.userid + '" class="C(#484848) D(f) Ai(c) Jc(fs) Mb(5px)" target="_blank">' +
                      '<div class="Fz(13px) Fw(500)">' + userData.username + '</div>' +
                      ( (post_info.userid==post_userid) ? '<div class="Bgc(#f8c31c) Bdrs(5px) P(3px) Fw(b) Fz(11px) Mstart(5px)">TS</div>' : '' ) +
                    '</a>' +
                    '<div class="C(#a3a3a3) Fz(11px)">' + userData.user_title + '</div>' +
                  '</div>' +
                  '<div class="W(80px)">' +
                    '<a href="/viewallposts/' + post_info.userid + '?thread_id=' + result.result.thread_id + '&count=' + post_info.total_post + '" class="Td(u):h C(#484848) Fz(12px) Fw(500) Ta(c)">' + post_info.total_post + '</a>' +
                  '</div>' +
                '</li>';
        }
      });
    } else {
      html_view = '<ul><li class="D(f) Ai(c) Mb(15px)">Empty Post</li></ul>';
    }
    html_view += "</ul>";
    $('#whoposted_total_post').html('Post(' + (parseInt(whoposted_data.total_post) || 0) + ')');
    $('#whoposted_list_user').html(html_view);
    }
  });

  return false;
}

function bindJsModalCloseButton()
{
  $('.jsModalCloseButton').click(function() {
    $('.jsModal').removeClass('is-open');
    $('body').removeClass('Ov(h)');
  });
}

$('.openwhoposted').on('click', function(e) {
  e.preventDefault();
  openWhoPosted($(this));
});

var htLoadNumber = 0;
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
      htLoadNumber++;
      dataLayer.push({
        'event': 'trackEvent',
        'eventDetails.category': data_tracking,
        'eventDetails.action': 'load more ' + htLoadNumber,
        'eventDetails.label': 'hot thread'});
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
function show_thread_list(sort, cursor, order, feedtype) {
  tl_is_loading = true;
  var scrollCurrent = $(window).scrollTop();
  $.post("/misc/get_threadlist_forum_landing/", {
    sort: sort,
    cursor: cursor,
    order: order,
    feedtype : feedtype
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

function bindNotice() {
  if ($('.btn_close').length > 0) {
    $('.btn_close').click(function() {
      var shown_notice = $(this).closest('.jsNoticeBoard');
      var notice_id = shown_notice.attr('data-id');
      updateNotice(notice_id);
      shown_notice.remove();
    });
  }
}

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

function setFeedDisplay(targettype) {
  $('.jsFeedTrigger').unbind( "click" );
  $.ajax({
    url: "/misc/set_feed_display/" + targettype,
    success: function(resp) {
      bindSetFeedDisplay();
      location.reload();
    },
    error: function() {
      bindSetFeedDisplay();
    }
  });
}

function bindSetFeedDisplay() {
  if ($('.jsFeedTrigger').length > 0) {
    $('.jsFeedTrigger').click(function() {
      var data_style = $(this).attr('data-style');
      setFeedDisplay(data_style);
    });
  }
}

function bindSetSubcategoryItem(element) {
  if($(element).hasClass('is-selected')){
    $(element).removeClass('is-selected');
  }
  else{
    $(element).addClass('is-selected');
  }
  if($('.jsCategoryPersonalizationItem.is-selected').length == 0){
    $('.jsButtonSubscribe').addClass('is-disabled');
    $('.jsButtonSubscribe button').prop('disabled', true);
    $('.jsButtonSubscribe button').toggleClass('Bgc(#ededed) C(#a4a4a4) Bgc(#1998ed) C(#ffffff)');
  }
  else if($('.jsCategoryPersonalizationItem.is-selected').length == 1 && $('.jsButtonSubscribe').hasClass('is-disabled')){
    $('.jsButtonSubscribe').removeClass('is-disabled');
    $('.jsButtonSubscribe button').prop('disabled', false);
    $('.jsButtonSubscribe button').toggleClass('Bgc(#ededed) C(#a4a4a4) Bgc(#1998ed) C(#ffffff)');
  }
}

function bindSetjsCategoryPersonalizationItem() {
    $('#subscibedFeed').click(function() {
      var forumIds = [];
      var trackForumIds = [];
      $(".jsCategoryPersonalizationItem.is-selected").each(function(){
        forumIds.push($(this).attr("data-forumid"));
        trackForumIds.push('forum-' + $(this).attr("data-forumid"));
        dataLayer.push({
          'forumSubscriber': 1,
          'userID': $(this).attr("data-userid"),
          'forumId': $(this).attr("data-forumid"),
          'forumName': $(this).attr("data-forumname"),
          'forumParentId': $(this).attr("data-forumParentId"),
          'forumParentName': $(this).attr("data-forumParentName"),
          'channelId': $(this).attr("data-channelId"),
          'channelName': $(this).attr("data-channelName"),
        });
      });
       $.ajax({
        url: '/misc/subscribe_multiple_forum',
        type: 'post',
        data: {forumIds: forumIds},
        success: function (e, t) {
          var result = $.parseJSON(e);
          if (result.status == "ok") {
            dataLayer.push({
              'event': 'trackEvent',
              'eventDetails.category': 'feeds subscription',
              'eventDetails.action': 'subscribe',
              'eventDetails.label': trackForumIds.join(",")
            });
            location.reload();
          } else {
            window.location = '/user/login/forum';
          }
        },
        error: function(xhr) {
          window.location = '/user/login/forum';
        }
      });
    });
    $('#subscibedFeedLater').click(function() {
        dataLayer.push({
          'event': 'trackEvent',
          'eventDetails.category': 'feeds subscription',
          'eventDetails.action': 'skip',
          'eventDetails.label': ''
        });
       setFeedDisplay('all_feed');
    });
}

function bindSetjsButtonSubscribe() {
  $(".jsCategoryPersonalizationItem").click(function() {
    bindSetSubcategoryItem($(this));
  });
}
