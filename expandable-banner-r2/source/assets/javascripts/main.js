var url;

function share_thread_count(threadId, shareType)
{
  $.ajax({
    url: WAP_KASKUS_URL + '/misc/update_share_count',
    type: 'POST',
    data: {
      share_type: shareType,
      thread_id: threadId
    },
    xhrFields: {
      withCredentials: true
    },
    success: function(resp){
    },
    error: function(xhr){
    }
  });
}

var ht_offset = 0;
var ht_limit = 12;
var ht_is_loading = false;
var ht_no_more_item = false;
var ht_flag = false;
var is_search = false;

var more_ht_end_date = '';
var more_ht_start_date = '';
var more_title = '';
var more_channel = '';
var channel_id_home = '0';

function search_ht()
{
  is_search = true;
  ht_offset = 0;
  ht_no_more_item = false;
  ht_flag = false;
  $('.ht_empty').remove();
  $('.ht_list').remove();
  $('#ht-loader').show();

  more_ht_end_date = $('#jshtDateEnd').val();
  more_ht_start_date = $('#jshtDateStart').val();
  more_title = $('#ht_q').val();
  more_channel = $('#htarchive_channel').val()
  $('#exc_thread_ids').val('');
  load_ht();
}

function load_ht()
{
  if(ht_no_more_item)
  {
    $('#ht-loader').hide();
    return false;
  }
  var ht_date_range = '';
  if(more_ht_end_date && more_ht_start_date)
  {
    ht_date_range = more_ht_start_date + ' / ' + more_ht_end_date
  }
  ht_is_loading = true;
  $.ajax({
    'type' : 'post',
    'url'  : '/forum/hotthread/get/',
    'data' : {
      limit: ht_limit,
      offset: ht_offset,
      date_range: ht_date_range,
      keyword: more_title,
      channel_id: more_channel,
      cursor: $('#ht_cursor').val(),
      exc_thread_ids: $('#exc_thread_ids').val(),
    },
    'success' : function(resp){
      try {
        if(is_search)
        {
          $('#ht-empty').hide();
        }
        display_ht(resp);
      }catch(e){}
      ht_is_loading = false;
    },
    'error' : function(){
      ht_is_loading = false;
    }
  });
}

function display_ht(resp, key)
{
  var item_count = 0;
  key = key || 'result';
  var json = $.parseJSON(resp)[key];
  var thread_subscription = $.parseJSON(resp)['thread_subscription_status'];
  var user_details = $.parseJSON(resp)['user_details'];
  var cursor = $.parseJSON(resp)['cursor'];
  for(tgl in json)
  {
    ht_list = json[tgl];
    ht_id = '#ht_' + tgl.replace(/ /g, '_');

    if($(ht_id).length == 0)
    {
      $('<div class="hot-thread-list ht_list" id="ht_' + tgl.replace(/ /g, '_') + '"></div>').insertBefore('#ht-loader');
      $('<div class="Fz(14px) C(#484848) nightmode_C(#dcdcdc) Fw(b) Px(10px) Pb(15px) Pt(5px) ht_list"><span>'+ tgl+'</span></div>').appendTo(ht_id);
      if(ht_flag)
      {
        $('<ul class="list-unstyled"></ul>').appendTo(ht_id);
      }
    }

    for(i in ht_list)
    {
      var html = '';
      if(ht_list[i].promoted == "1")
      {
        html += '<div class="Bdb(BdbThreadItem) nightmode_Bdbc(#000) Bgc(#fff) nightmode_Bgc(#171717)'
        if(ht_list[i].promoted_username != '') {
          html += ' Pt(5px)';
        } else {
          html += ' is-compact-view_Pt(10px)';
        }
        html += ' ht_list">';

        if( ht_list[i].promoted_username) {
          html += '<div class="D(f) Jc(sb) M(10px)"><div class="D(f) Jc(fs) Pos(r)">'+
                '<div class="W(35px) H(35px) is-compact-view_W(25px) is-compact-view_H(25px) O(h) Mend(10px) Fx(flex0Auto) is-no-image_D(n) As(c)">'+
                  '<img class="Bdrs(50%) W(35px) H(35px) is-compact-view_W(25px) is-compact-view_H(25px)" src="'+ ht_list[i].promoted_avatar + '" alt="img-1-px">'+
                '</div>'+
                '<div class="Fx(flex1Auto) As(c)">'+
                  '<div class="Mb(3px) Fz(13px) Fw(500)">'+ ht_list[i].promoted_username +'</div>'+
                  '<div class="Fz(12px) C(#9e9e9e)">' + ht_list[i].promoted_entitlement + '</div>'+
                '</div>'+
              '</div>'+
            '</div>';
        } else {
          html += '<div class="D(f) Jc(sb)';
          html += '">'+
                '<div class="D(f) Jc(sb) is-compact-view_M(10px)">'+
                  '<a class="C(#484848) nightmode_C(#dcdcdc)" href="'+ ht_list[i].url +'">'+
                    '<div class="D(f) Jc(fs) Pos(r) Px(10px)">'+
                      '<div class="Fz(12px) C(#9e9e9e) D(n) is-compact-view_D(b)">'+ ht_list[i].promoted_entitlement + '</div>'+
                  '</a>'+
                '</div>'+
              '</div>'+
            '</div>'
        }
        if(ht_list[i].promoted_username == '') {
          html += '<div class="Pt(0) c-compact">';
        } else {
          html += '<div class="Pt(5px) c-compact">';
        }
            html += '<div class="is-compact-view_D(f) is-compact-view_Fld(r) is-compact-view_Jc(sb) W(100%)">'+
                  '<div class="Pos(r) Ov(h) Mah(320px) Bgr(nr) Bgz(cv) c-compact__wrapper is-no-image_D(n)">'+
                    '<div class="Pos(r) c-compact__image">'+
                      '<div class="D(b) Pb(52.5%) c-compact__image-wrapper Pos(r) W(100%) Mah(300px) Ov(h) H(0)">'+
                        '<a class="C(#484848) nightmode_C(#dcdcdc)" href="'+ ht_list[i].url +'' +'">'+
                          '<img class="Pos(a) T(0) B(0) W(100%) mls-img" data-src="'+ ht_list[i].image +'" alt="hot-thread-picture" />'+
                        '</a>'+
                      '</div>';
                if(ht_list[i].stamp) {
                  html += '<div class="Pos(a) Bdrs(borderTag) Py(15px) W(50px) H(50px) Ta(c) T(15px) End(15px) Bgc(#f8e71c) Fz(14px) C(#000) Lts(1px) Ff(fontVAGBold) c-compact__tag"><div class="Trf(transform35deg) c-compact__tag-title Tt(u)">'+ ht_list[i].stamp +'</div></div>';
                }
                  html += '</div>'+
                    '</div>';
                html += '<div class="is-no-image_Pt(0px) c-compact__title is-compact-view_W(100%)">'+
                      '<div class="Px(10px) is-compact-view_Px(0) Py(10px) is-compact-view_Py(0)">'+
                        '<div class="Fz(14px) Fw(b) is-compact-view_Mih(35px)">'+
                          '<span class="Va(m)">'+
                            '<a class="C(#484848) nightmode_C(#dcdcdc)" href="'+ ht_list[i].url  +'">'+  ht_list[i].title  +'</a>'+
                          '</span>';
                    if(ht_list[i].stamp) {
                      html += '<span class="D(n) is-no-image_D(ib) Ff(fontVAGBold) Fz(10px) C(#000) Bgc(#f8e71c) Bdrs(5px) Px(5px) Pt(3px) Pb(0)">'+ ht_list[i].stamp +'</span>';
                    }
                    html += '</div>'+
                      '<div class="Fz(13px) Mt(15px) Mb(10px) is-compact-view_D(n)">' + ht_list[i].description + '</div>'+
                      '<div class="Mt(10px) Mb(10px)">'+
                        '<span class="Va(m)"><a class="C(#1998ed) nightmode_C(#fbc160)" href="'+ ht_list[i].url +'">'+ht_list[i].promoted_cta +'</a></span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>';
        $(html).appendTo(ht_id);
        $('<ul class="list-unstyled"></ul>').appendTo(ht_id);
      }
      else
      {
        html += '<div class="Bdb(BdbThreadItem) nightmode_Bdbc(#000) Bgc(#fff) nightmode_Bgc(#171717) Pt(5px) is-compact-view_Pt(5px) ht_list">'+
              '<div class="D(f) Jc(sb) M(10px)"><div class="D(f) Jc(fs) Pos(r)">'+
                '<a href="/profile/'+ ht_list[i].userid +'">'+
                  '<div class="W(35px) H(35px) is-compact-view_W(25px) is-compact-view_H(25px) O(h) Mend(10px) Fx(flex0Auto) is-no-image_D(n) As(c)">'+
                    '<img class="Bdrs(50%) W(35px) H(35px) is-compact-view_W(25px) is-compact-view_H(25px) mls-img"  data-src="'+ ht_list[i].profile_picture +'" alt="img-1-px">'+
                  '</div>'+
                '</a>'+
                '<div class="Fx(flex1Auto) As(c)">'+
                  '<div class="Mb(3px) Fz(13px) Fw(500) Maw(200px) Ov(h) is-compact-view_Mb(0px)">'+
                    '<a href="/profile/' + ht_list[i].userid + '?ref=htarchive&med=hot_thread" class="C(#484848)">'+ ht_list[i].username+'</a>'+
                  '</div>'+
                  '<div class="Fz(12px) C(#9e9e9e)">'+ user_details[ht_list[i].userid].usertitle +'</div>'+
                '</div>'+
              '</div>'+
              '<div class="C(#b3b3b3) Fz(14px) W(40px) H(30px) Ta(e) jsShowShare hide jsThreadListShareMenuData jsMoreMenus">'+
                '<i class="fas fa-ellipsis-h"></i>'+
              '</div>'+
            '</div>'+
            '<div class="Pos(r) jsRevealShare D(n)">'+
              '<div class="Pos(a) End(10px) W(100%) Maw(200px) P(10px) Mt(5px) Bdrs(1px) Bgc(#fff) Z(10) T(-30px) Bxsh(shadowShare) nightmode_Bgc(#171717) nightmode_C(#dcdcdc) jsShareMenuDiv"'+
                'data-created="false"'+
                'data-subscribe-label="hot thread-' + ht_list[i].id + '"'+
                'data-subscribe-tracking="htarchive"';
              if(thread_subscription[ht_list[i].id]) {
                html += 'data-is-subscribe="true"';
              } else {
                html += 'data-is-subscribe="false"';
              }
            html += 'data-threadid="' + ht_list[i].id + '"'+
                'data-fb-href="' + 'https://www.facebook.com/dialog/share?app_id=' + FACEBOOK_APP_ID + '&href=' + ht_list[i].fb_shared_url + '&redirect_uri=' + ht_list[i].fb_redirect_url+ '"'+
                'data-forum-id="' + ht_list[i].forumid + '"'+
                'data-forum-name="' + ht_list[i].forum_name + '"'+
                'data-forum-parent-id="' + ht_list[i].forum_parent_id + '"'+
                'data-forum-parent-name="' + ht_list[i].forum_parent_name + '"'+
                'data-channel-id="' + ht_list[i].channel_id + '"'+
                'data-channel-name="' + ht_list[i].channel_name + '"'+
                'data-author="' + ht_list[i].userid + '"'+
                'data-title="' + ht_list[i].stripped_title + '"'+
                'data-twitter-href="https://twitter.com/share?url='+ ht_list[i].twitter_shared_url + '&amp;text=' + ht_list[i].decoded_title + '&amp;via=' + ht_list[i].share_via + '&amp;hashtags=' + ht_list[i].hashtags + '"' +
                'data-wa-href="whatsapp://send?text=' + ht_list[i].decoded_title  + ' - ' + ht_list[i].whatsapp_shared_url + '"' +
                'data-show-button-first-post="' + ht_list[i].show_button_first_post + '"'+
                'data-slug-title="'+ ht_list[i].slug_title + '"'+
                'data-last-post-id="'+ ht_list[i].last_post_id + '"'+
              '></div>'+
      '</div>'+
      '<div class="c-compact">'+
        '<div class="is-compact-view_D(f) is-compact-view_Fld(r) is-compact-view_Jc(sb) W(100%)">'+
          '<div class="Pos(r) Ov(h) Mah(320px) Bgr(nr) Bgz(cv) c-compact__wrapper is-no-image_D(n)">'+
            '<div class="Pos(r) c-compact__image">'+
              '<div class="D(b) Pb(52.5%) c-compact__image-wrapper Pos(r) W(100%) Mah(300px) Ov(h) H(0)">'+
                '<a class="C(#484848) nightmode_C(#dcdcdc)" href="'+ ht_list[i].url +'"><img class="Pos(a) T(gbgb0) B(0) W(100%) mls-img" data-src="'+ ht_list[i].image +'" alt="img-1-px" /></a></div>';
        if(ht_list[i].stamp) {
          html += '<div class="Pos(a) Bdrs(borderTag) Py(15px) W(50px) H(50px) Ta(c) T(15px) End(15px) Bgc(#f8e71c) Fz(14px) C(#000) Lts(1px) Ff(fontVAGBold) c-compact__tag">'+
                '<div class="Trf(transform35deg) c-compact__tag-title Tt(u)">'+ ht_list[i].stamp +'</div>'+
              '</div>';
        }
        html += '</div>'+
          '</div>'+
          '<div class="is-no-image_Pt(0px) c-compact__title is-compact-view_W(100%)">'+
            '<div class="Px(10px) is-compact-view_Px(0) Py(10px) is-compact-view_Py(0)">'+
              '<div class="Fz(14px) Fw(b) is-compact-view_Mih(35px)">'+
                '<span class="Va(m)">'+
                  '<a class="C(#484848) nightmode_C(#dcdcdc)" href="'+ ht_list[i].url +'">'+  ht_list[i].title  +'</a>'+
                '</span>';
        if(ht_list[i].stamp) {
          html += '<span class="D(n) is-no-image_D(ib) Ff(fontVAGBold) Fz(10px) C(#000) Bgc(#f8e71c) Bdrs(5px) Px(5px) Pt(3px) Pb(0)">'+ ht_list[i].stamp.text +'</span>';
        }
        html += '</div>'+
          '<div class="Fz(13px) Mt(15px) Mb(10px) is-compact-view_D(n)">' + ht_list[i].description + '</div>'+
            '<div class="D(f) Jc(fs) Py(10px) C(#9e9e9e) Ai(c) c-compact__info is-compact-view_Pb(10px) nightmode_C(#dcdcdc)">'+
              '<div class="D(f) Jc(fs) Ai(c) Fz(12px)"><div class="D(f) Jc(c) Ai(c) Lh(10px)">'+
                '<i class="far fa-eye Fz(14px)"></i>'+
                '<span class="Mstart(7px)">'+ ht_list[i].views +'</span>'+
              '</div>'+
            '</div>';
        if (parseInt(ht_list[i].reply) > 0) {
          html += '<div class="Mstart(20px) jsWhoPosted" data-href="/misc/whoposted/' + ht_list[i].id + '">'+
              '<a href="#" class="jsRevealModal D(f) Jc(c) Ai(c) Lh(10px) C(#9e9e9e) nightmode_C(#dcdcdc)" data-modal="who-posted-modal">' +
                '<i class="fas fa-reply Fz(14px)"></i>' +
                '<span class="Mstart(7px)">' + ht_list[i].reply + '</span>' +
              '</a>' +
            '</div>'+
            '<div class="Mstart(20px)"><a href="' + ht_list[i].url_lastpost + '" class="C(#9e9e9e) nightmode_C(#dcdcdc)">Last Post</a></div>';
        } else {
          html += '<div class="Mstart(20px)">'+
                '<i class="fas fa-reply Fz(14px)"></i>' +
                '<span class="Mstart(7px)">' + ht_list[i].reply + '</span>' +
            '</div>';
        }
        html += '</div>'+
        '</div>'+
      '</div></div></div></div>';

        $(html).appendTo(ht_id);
        $('<ul class="list-unstyled"></ul>').appendTo(ht_id);
      }
      $('#ht_cursor').val(cursor);
    item_count++;
    }
  }
  if (item_count == 0 && key == 'result' && is_search)
  {
    $('#ht-empty').show();
    reset_field();
    return display_ht(resp, 'default');
  }
  else if(item_count < 10)
  {
    $('#ht-loader').hide();
    ht_no_more_item = true;
  }

  bindThreadListShareMenuData();
  bindOpenWhoPosted();
  bindJsRevealModal();
  bindJsCloseModal();
  if ("MutationObserver" in window != true) {
    initLazyload();
  }
  ht_offset += ht_limit;
}

function clear_cursor() {
  $('#ht_cursor').val('*');
}

function reset_field() {
  more_ht_end_date = '';
  more_ht_start_date = '';
  more_title = '';
}

function reset_ht_field() {
  $('#jshtDateEnd').val('');
  $('#jshtDateStart').val('');
  $('#ht_q').val('');
  clear_cursor();
  search_ht();
}

function bindJsRevealModal()
{
  $(".jsRevealModal").on("click", function() {
    $("#" + $(this).data("modal")).fadeIn();
    $("body").addClass("Ov(h)");
  });
}

function bindJsCloseModal()
{
 $(".jsCloseModal, .jsDismissModal").on("click", function() {
   $('.jsModal').removeClass('is-open');
   $(".jsModal").fadeOut();
   $("body").removeClass("Ov(h)");
 });
}

function bindThreadListShareMenuData()
{
  $('.jsThreadListShareMenuData').click(function(){
    createThreadlistShareMenuData($(this));
  });
}

var tl_limit = 20;
var tl_is_loading = false;
var tl_page = 1;

function load_tl() {
  tl_is_loading = true;
  tl_cursor = $('#tl_cursor').val();
  tl_order = $('#tl_order').val();
  tl_sort = $('#tl_sort').val();
  feed_track = $('#feed_track').val();
  tl_sort_track = $('#tl_sort_track').val();
  feedtype = $('#tl_feed').val();

  $.ajax({
    'type': 'post',
    'url': '/misc/get_thread_list/',
    'data': {
      cursor: tl_cursor,
      sort: tl_sort,
      order: tl_order,
      feedtype: feedtype
    },
    'success': function(resp) {
      try {
        display_tl(resp);
        if ("MutationObserver" in window != true) {
          initLazyload();
        }
        bindThreadListShareMenuData();
        bindOpenWhoPosted();
        bindJsRevealModal();
        bindJsCloseModal();
      } catch (e) {}
    }
  });
}

function display_tl(resp) {
  tl_page++;

  var item_count = 0;
  $('#tl_cursor').val(resp.cursor);
  var html = resp.html;
  $(html).insertBefore('#tl-loader');
  var item_count = resp.totalcount;
  if (item_count < tl_limit || tl_page > 1000) {
    $('#tl-loader').hide();
    window.removeEventListener("resize", tlload);
    window.removeEventListener("scroll", tlload);
    window.removeEventListener("touch", tlload);
    window.removeEventListener("click", tlload);
  } else {
    tl_is_loading = false;
  }
}

var oh_limit = 20;
var oh_is_loading = false;
var oh_no_more_item = false;
var oh_page = 1;

function isElementInViewport(el) {

  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    (rect.bottom - 100) <= (window.innerHeight || document.documentElement.clientHeight) &&
    (rect.right - 25) <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function load_oh() {
  if (oh_no_more_item) {
    $('#oh-loader').hide();
    return false;
  }

  oh_is_loading = true;
  oh_cursor = $('#oh_cursor').val();
  $.ajax({
    'type': 'post',
    'url': '/misc/get_obrolan_hangat/',
    'data': {
      channel_id: channel_id,
      cursor: oh_cursor
    },
    'success': function(resp) {
      try {
        display_oh(resp);
      } catch (e) {}
      oh_is_loading = false;
    },
    'error': function() {
      oh_is_loading = false;
    }
  });
}

function display_oh(resp, key) {
  oh_page++;
  dataLayer.push({
    'event': 'trackEvent',
    'eventDetails.category': tracking_ref,
    'eventDetails.action': 'load more',
    'eventDetails.label': 'obrolan hangat'
  });
  var json = $.parseJSON(resp);
  var html = json.html;
  var item_count = json.total;
  $(html).insertBefore('#oh-loader');
  $('#oh_cursor').val(json.obrolan_hangat_cursor);

  if (item_count < oh_limit || oh_page > 2) {
    $('#oh-loader').hide();
    oh_no_more_item = true;
  }
}

function decodeURIComponentSafe(uri, mod) {
    var out = new String(), arr, i = 0, l, x;
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

function createThreadlistShareMenuData(elThreadListMenu)
{
  var divMenu = elThreadListMenu.parent().parent().find('.jsShareMenuDiv:first');
    if (divMenu.attr('data-created') == 'false') {
    var subscribe_label = divMenu.attr('data-subscribe-label');
    var subscribe_tracking = divMenu.attr('data-subscribe-tracking');
    var is_subscribe = divMenu.attr('data-is-subscribe');
    var threadid = divMenu.attr('data-threadid');
    var fb_href = divMenu.attr('data-fb-href');
    var forum_id = divMenu.attr('data-forum-id');
    var title = decodeURIComponentSafe(divMenu.attr('data-title')).replace('&#92;', "");
    var slug_title = divMenu.attr('data-slug-title');
    var twitter_href = divMenu.attr('data-twitter-href');
    var wa_href = divMenu.attr('data-wa-href');
    var show_button_first_post = divMenu.attr('data-show-button-first-post');
    var last_post_id = divMenu.attr('data-last-post-id');
      var subscribeMenuString = '';
      if (is_subscribe == 'true') {
        subscribeMenuString =
      '<a" href="javascript:void(0);" class="jsSubscribeThreadIcon C(#484848) nightmode_C(#dcdcdc)" data-type="thread" data-id="' + threadid + '" data-label="' + subscribe_label + '" data-state="unsubscribe" data-category="' + subscribe_tracking + '" ' + buildAdditionalCustomMetricAttr(divMenu) + '>' + window.KASKUS_lang.unsubscribe_button + '</a>';
      } else {
        subscribeMenuString =
        '<a href="javascript:void(0);" class="jsSubscribeThreadIcon C(#484848) nightmode_C(#dcdcdc)" data-type="thread" data-id="' + threadid + '" data-label="' + subscribe_label + '" data-state="subscribe" data-category="' + subscribe_tracking + '" ' + buildAdditionalCustomMetricAttr(divMenu) + '>' + window.KASKUS_lang.subscribe_button + '</a>';
      }
      var firstPostButtonString = '';
      if (show_button_first_post == 'true') {
        firstPostButtonString =
          '<div class="D(f) Fz(14px) Py(8px) Ai(c)"> ' +
          '<div class=""><i class="fas fa-chevron-square-down"></i></div> ' +
          '<a class="D(b) Lh(10px) C(#484848) nightmode_C(#dcdcdc)" href="' + '/thread/' + threadid + '/' +  slug_title + '?goto=newpost" id="thread_gotonew_' + threadid + '" class="jump goto_newpost" rel="tooltip" title="Go to first new post"> ' +
            '<div class="Fz(12px) As(c) Mstart(15px)">' + window.KASKUS_lang.go_first_new_post_button + '</a> ' +
          '</div> ' +
        '</div>';
      }
      var elString =
      '<div class="D(f) Fz(14px) P(10px)"> ' +
      '<div class=""><i class="fas fa-bookmark"></i></div> ' +
      '<div class="Fz(12px) As(c) Mstart(15px)"> ' +
        subscribeMenuString +
      '</div> ' +
    '</div> ' +
    '<div class="Px(10px)"> ' +
      '<div class="Bdt(light-gray-border) D(f) Fz(14px) Py(10px) nightmode_Bdt(night-border)"> ' +
        '<div class=""><i class="fab fa-facebook-square"></i></div> ' +
        '<div class="Fz(12px) As(c) Mstart(15px)"><a class="C(#484848) nightmode_C(#dcdcdc)" target="_blank" href="' + fb_href + '" onclick="share_thread_count( \'' + threadid + '\' ,\'facebook\'); ' +  build_ga_custom_track_share_thread("'" + forum_id + " " + title + "'", "'share thread'", "'facebook'", divMenu) + '">' + window.KASKUS_lang.share_facebook_button + '</a></div> ' +
      '</div> ' +
      '<div class="D(f) Fz(14px) Py(10px)"> ' +
        '<div class=""><i class="fab fa-twitter-square"></i></div> ' +
        '<div class="Fz(12px) As(c) Mstart(15px)"><a class="C(#484848) nightmode_C(#dcdcdc)" target="_blank" href="' + twitter_href + '" onclick="share_thread_count( \'' + threadid + '\', \'twitter\'); ' + build_ga_custom_track_share_thread("'" + forum_id + " " + title + "'", "'share thread'", "'twitter'", divMenu) + '">' + window.KASKUS_lang.share_twitter_button + '</a></div> ' +
      '</div> ' +
      '<div class="D(f) Fz(14px) Py(10px)"> ' +
        '<div class=""><i class="fab fa-whatsapp-square"></i></div> ' +
        '<div class="Fz(12px) As(c) Mstart(15px)"><a class="C(#484848) nightmode_C(#dcdcdc)" href="' + wa_href + '" data-action="share/whatsapp/share" onclick="share_thread_count(\'' + threadid + '\', \'whatsapp\'); ' + build_ga_custom_track_share_thread("'" + forum_id + " " + title + "'", "'share thread'", "'whatsapp'", divMenu) + '">' + window.KASKUS_lang.share_whatsapp_button + '</a></div> ' +
      '</div> ' +
    '</div> ' +
    '<div class="Px(10px)">' +
      '<div class="Bdt(light-gray-border) nightmode_Bdt(night-border)"></div>' +
      firstPostButtonString +
      '<div class="D(f) Fz(14px) Py(8px) Ai(c)"> ' +
        '<div class=""><i class="fas fa-chevron-square-right"></i></div> ' +
        '<a class="D(b) Lh(10px) C(#484848) nightmode_C(#dcdcdc)" href="/lastpost/' + threadid + '#post' + last_post_id + '"> ' +
          '<div class="Fz(12px) As(c) Mstart(15px)">' + window.KASKUS_lang.go_last_post_button + '</div> ' +
        '</a> ' +
      '</div> ' +
    '</div>';

    divMenu.attr('data-created', 'true');
    divMenu.append($.parseHTML(elString));
    $('body').on('click','.jsSubscribeThreadIcon',function(){
        subscribeUnsubscribe($(this));
      });
  }
}

/**
 * set feed display type
 */
function setFeedDisplay(el)
{
  $('.filterItem').unbind( "click" );
  var type = el.attr("data-type");

  $.ajax({
    url: "/misc/set_feed_display/" + type,
    success: function(resp) {
      bindSetFeedDisplay();
      location.reload();
    },
    error: function() {
      bindSetFeedDisplay();
    }
  });
}

function bindSetFeedDisplay()
{
  if($('#jsFeedDisplay').length > 0) {
    $('.filterItem').click(function() {
      setFeedDisplay($(this));
    });
  }
}

/**
 * set display type
 */
function setThreadDisplay(landing)
{
	var type = $("#jsThreadDisplay").attr("name");
	var uniqueDisplayType = 'thumb';

	if (landing == 'forum') {
		uniqueDisplayType = 'list';
	}

	if(type == uniqueDisplayType) {
		var targettype = 'compact';
	} else {
		var targettype = uniqueDisplayType;
	}

	$.ajax({
		url: "/misc/set_thread_list_display/" + targettype + "/" + landing,
		success: function(resp) {
			location.reload();
		},
		error: function() {
		}
	});
}

function bindSetThreadDisplay()
{
	if($('#jsThreadDisplay').length > 0){
		var data_style = $('#jsThreadDisplay').attr('data-style');
		$('#jsThreadDisplay').click(function() {
			setThreadDisplay(data_style);
		});
	}
}

function bindSetjsButtonSubscribe() {
  $(".jsCategoryPersonalizationItem").click(function() {
    bindSetSubcategoryItem($(this));
  });
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
          'userID': user_id,
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
       setFeedDisplay($(this));
    });
}

/**
 * notice nookie
 */
function createCookie(name, value, expires, path, domain)
{
	var cookie = name + "=" + escape(value) + ";";

	if (expires) {
		if (expires instanceof Date) {
			if (isNaN(expires.getTime())) {
				expires = new Date();
			}
		} else {
			expires = new Date(new Date().getTime() + parseInt(expires) * 1000 *60 * 60 * 24);
		}

		cookie += "expires=" + expires.toGMTString() + ";";
	}

	if (path) {
		cookie += "path=" + path + ";";
	}

	if (domain) {
		cookie += "domain=" + domain + ";";
	}

	document.cookie = cookie;
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return unescape(c.substring(name.length,c.length));
		}
	}
	return null;
}

function updateNotice(notice_id)
{
	var cookie_data = getCookie('notices');
	if (cookie_data === null) {
		cookie_data = [];
	} else {
		cookie_data = JSON.parse(cookie_data);
	}
	cookie_data.push(notice_id);
	createCookie('notices', JSON.stringify(cookie_data), "14", "/", "");
}

function close_notice(notice_id)
{
	updateNotice(notice_id);
	$('.jsNoticeDisplay').remove();
}

/*
 * sticky banner
 */
function hideEl(id)
{
	document.getElementById(id).style.display = 'none';
}

/*
 * global notice
 */
function bindNotice() {
	if ($('.jsNoticeDisplay').length > 0) {
		$('.jsNoticeDisplay .fa-times').click(function() {
			var shown_notice = $(this).closest('.jsNoticeDisplay');
			var notice_id = shown_notice.attr('data-id');
			close_notice(notice_id);
		});
	}
}

/*
 * trh in home / channel landing
 */
function bindTrhHome() {
  if ($('#recommended-trh-home').length > 0) {
    $.get(url_recommendation, function(result){
      if (typeof result !== 'object') {
	result = $.parseJSON(result);
      }

      if (result.result !== false) {
	var trh_data = '';
	var display_trh = '';

	$.each(result.result, function(model_name, thread_data) {
	  trh_data += '<div class="Bxsh(shadowSeperator) Pos(r) Z(1) H(2px) Bgc(#fff) nightmode_Bgc(#000) ' + model_name + '"' + display_trh + '></div>';
	  trh_data += '<div class="c-obrolan-section__list Px(10px) Bgc(bgPrimaryColor) nightmode_Bgc(#171717) ' + model_name + '" id="' + model_name + '"' + display_trh + '>';
	  trh_data += '<div class="D(f) Py(10px)"><div class="W(20px) H(20px) Mend(10px)"><img class="Maw(100%)  W(100%)" src="' + assetsFolderNew + '/images/icon-recommended.svg" alt="recommended-for-you-logo"></div><div class="As(c) Fz(16px) C(#484848) nightmode_C(#dcdcdc) Fw(b) Ff(fontVAGBold)">';
	  trh_data += window.KASKUS_LANG.thread_recommendation_title + '</div></div>';

	  $.each(thread_data, function(thread_id, thread_detail) {
	    trh_data += '<div class="nightmode_Bdbc(#000)">';
	    trh_data += '<div class="Fz(14px) Fw(b) Py(10px)">';
	    trh_data += '<a class="C(#484848) nightmode_C(#dcdcdc)" href="' + thread_detail['href'] + '" onclick="' + thread_detail['ga_track'] + '"><span class="Va(m)">' + thread_detail['title'] + '</span></a></div></div><div class="W(100%) H(1px) Bgc(white) nightmode_Bgc(#3f3f3f)"></div>';
	  });

	  trh_data += '</div>';
	  display_trh = ' style="display: none;"';
	});

	$('#recommended-trh-home').replaceWith(trh_data);

	if (Object.keys(result.result).length > 1) {
	  dataLayer.push({'event': 'optimize.activate'});
	}
      }
    });
  }
}

/*
 * trh in forum landing / threadlist
 */
function bindTrhThreadList() {
  if ($('#recommended-trh-threadlist').length > 0) {
    $.post(url_recommendation, {hot_threads : hot_thread_data}, function(result){
      if (typeof result !== 'object') {
        result = $.parseJSON(result);
      }

      if (result.result !== false) {
        var trh_data = '';
        trh_data += '<div class="Bdb(BdbThreadItem) nightmode_Bdbc(#000)">';
        trh_data += '<div class="Bgc(#fff) P(10px) nightmode_Bgc(#171717)"><div class="D(f) Jc(sb) Mb(10px)"><div class="D(f) Jc(fs) Ai(c)"><div class="W(20px) H(20px) Mend(10px)">';
        trh_data += '<img class="Maw(100%)  W(100%)" src="' + assetsFolderNew + '/images/icon-recommended.svg"  alt="recommended-thread">';
        trh_data += '</div><div class="As(c) Fz(16px) C(#484848) Fw(b) nightmode_C(#dcdcdc) Ff(fontVAGBold) Py(2px)">'+ window.KASKUS_LANG.thread_recommendation_title + '</div>';
        trh_data += '</div></div><div class="Pos(r)">';

        var empty_model = 0;
        var first_not_empty_model = '';
        var trh_exist = 0;
        $.each(result.result, function(model, threads) {
          if (Object.keys(threads).length == 0 ) {
            empty_model++;
          } else if(first_not_empty_model == ''){
            first_not_empty_model = model;
          }
        });

        if (result.result.length !== 0) {
          $.each(result.result, function(model, threads) {
            var total_thread = Object.keys(threads).length;
            $.each(threads, function(thread_id, thread_detail) {
              trh_exist++;
              trh_data += '<div class="D(f) Jc(fs) ' + thread_detail['border_display'] + ' nightmode_Bdbc(#3f3f3f) Pt(10px) '+ thread_detail['model_name']+'"';
              trh_data += ' style="display: none;"';
              trh_data += '><div class="Pb(10px) Mih(70px) Fz(13px) W(100%)"><a class="C(#484848) nightmode_C(#dcdcdc)" href="' + thread_detail['href']
              if (Boolean(thread_detail['ga_track'])) {
                trh_data += '" onclick="' + thread_detail['ga_track']
              }
              trh_data += '">' + thread_detail['title'] + '<div class="Fw(500) C(#4a4a4a) nightmode_C(#dcdcdc)"></div>';
              trh_data += '<div class="Mt(10px)"><div class="C(#9e9e9e) Fz(12px)">'+ thread_detail['thread_label'] +'</div></div></a></div>';
              if (Boolean(thread_detail['image_source'])) {
                trh_data += '<div class="is-no-image_D(n)"><a href="'+ thread_detail['href']+'"><div class="Miw(60px) Mih(60px) W(60px) H(60px) Mstart(10px)"><img src="' + thread_detail['image_source'] + '" alt="' + thread_detail['slug_title'] + '" data-src="' + thread_detail['data-img-src'] + '" class="mls-img W(60px) H(60px)" ></div></a></div>';
              }
              trh_data += '</div>';
            });
          });

          trh_data += '</div></div></div>';

          if (trh_exist>0) {
            $('#recommended-trh-threadlist').replaceWith(trh_data);
          }

          if (first_not_empty_model != '') {
            $("." + first_not_empty_model).show();
          }

          if (Object.keys(result.result).length > 1 && empty_model == 0) {
            dataLayer.push({'event': 'optimize.activate'});
          }

          if ("MutationObserver" in window != true) {
            initLazyload();
          }
        }
      }
    });
  }
}

/*
 * update share count of thread
 */
function share_thread_count(threadId, shareType)
{
    $.ajax({
	url: WAP_KASKUS_URL + '/misc/update_share_count',
	type: 'POST',
	data: {
	    share_type: shareType,
	    thread_id: threadId
	},
	xhrFields: {
	    withCredentials: true
	},
	success: function(resp){
	},
	error: function(xhr){
	}
    });
}

function bindForumAllSearchResult()
{
  if ($('#search-result').length && $('#search-result').children().length) {
    jQuery.expr[":"].icontains = function(a, i, m) {
      return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    $('.jsInputSearch').keyup(function(event) {
      var phrase = $(this).val();
      if (phrase === '' || phrase === undefined) {
        hide_forum_all_search_result();
        return false;
      }
      show_forum_all_search_result();

      $('#search-result').children().hide();
      var search_container = $(".listForumItem div span:icontains(" + phrase + ")");
      search_container.closest(".listForumItem").show();
    });
  }
}

function hide_forum_all_search_result()
{
  $('.jsChannelForumItem').show();
  $('#search-result').hide();
}

function show_forum_all_search_result()
{
  $('.jsChannelForumItem').hide();
  $('#search-result').show();
}

function bindForumAllSubscribeEvent()
{
  if ($('[id^=bookmark-forum]').length) {
    $('[id^=bookmark-forum]').click(function() {
      subscribeUnsubscribe($(this));
      return false;
    });
  }
}

function bindForumAllIconCancel()
{
  if ($('.jsCancelSearch').length) {
    $('.jsCancelSearch').click(function() {
      if ($(this).show()) {
        $('.jsCancelSearch').hide();
        $('.jsInputSearch').val('');
        hide_forum_all_search_result();
      }
    });
  }
}

function bindOpenWhoPosted() {
  if (typeof openWhoPosted === "function") {
    $('.jsWhoPosted').unbind();
    $('.jsWhoPosted').on('click', function(e) {
      e.preventDefault();
      openWhoPosted($(this));
    });
  } else {
    window.setTimeout(bindOpenWhoPosted, 1000);
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

function openWhoPosted(el) {
  $('#who-posted-modal').empty();
  var html_view = '<div class="Bgc(transparent) Ta(c) Pos(r) M(a) P(0) W(90%) Miw(300px) Maw(620px) Bdrs(5px) modal-popup-content">' +
            '<div class="Bgc(#e4f5f8) Bdrs(5px) Ta(c) Py(10px) Px(15px) M(marginAuto0) W(92%)">' +
              '<div class="Pos(r) Ta(end) Fz(14px) nightmode_C(#171717) jsCloseModal">' +
                '<i class="fas fa-times"></i>' +
              '</div>' +
              '<div class="Px(15px) Maw(420px) M(marginAuto0)">' +
                '<div class="Ov(h) M(marginAuto0) W(100%) modal-header">' +
                  '<img class="W(350px)" src="' + assetsFolderNew + '/images/image-popup-who-posted.svg" alt="header modal">' +
                '</div>' +
              '</div>' +
              '<div class="W(100%) Bgc(#fff) M(marginAuto0) Pos(a) Start(0) Bdrs(5px) P(20px) nightmode_Bgc(#171717) Ov(h) nightmode_Bdc(#3f3f3f) nightmode_Bds(s) nightmode_Bdw(1px) jsTabWrapper">' +
                '<div class="Fw(b) Fz(16px) Mb(10px) nightmode_C(#dcdcdc)">Who Posted</div>' +
                '<div class="Mah(250px) Ovy(a)">' +
                  '<div class="D(f) Jc(sb) Ai(c) Fz(13px) C(#484848) nightmode_C(#dcdcdc) Py(8px)">' +
                    '<div>Username</div>' +
                    '<div class="W(80px)" id="whoposted_total_post">Post</div>' +
                  '</div><div id="whoposted_list_user">';
  html_view += '<img src="' + assetsFolderNew + '/images/icon-load-biru.gif" width="40" height="40" alt="notification-loading" />';
  html_view += '</div></div></div></div></div>';

  $("#who-posted-modal").html(html_view);
  bindJsCloseModal();

  var urlAjax = el.attr('data-href');
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
      if (Object.keys(whoposted_data).length > 0) {
        html_view = '';
        $.each(whoposted_data, function(key, post_info) {
          userData = userDatas[post_info.userid];
          if (typeof userData !== 'undefined' ) {
            html_view += '<div class="D(f) Jc(sb) Ai(c) Fz(12px) C(#4a4a4a) Py(12px)">' +
                    '<div class="D(f) Jc(fs) Ai(c)">' +
                      '<div class="Mend(10px) Pos(r)">' +
                        '<img class="W(36px) H(36px) Bdrs(50%)" src="' + userData.profile_picture + '" alt="profile-picture">' +
                        ((userData.is_online) ? '<div class="W(12px) H(12px) Bgc(#30c436) Bdrs(50%) Pos(a) T(25px) End(0) Bd(border-white-2)"></div>' : '') +
                      '</div>' +
                      '<a href="/profile/' + post_info.userid + '" class="D(b) Fx(flex1Auto) Ta(start)">' +
                        '<div class="D(f) Js(fs) Ai(c)">' +
                          '<div class="Fz(13px) Fw(500) C(#484848) nightmode_C(#dcdcdc)">' + userData.username + '</div>' +
                          ((post_info.userid==post_userid) ? '<div class="Bdrs(5px) Bgc(#f8c31c) C(#484848) Fz(11px) Fw(b) Py(2px) Px(4px) Mstart(5px) Lh(1.4)">TS</div>' : '') +
                        '</div>' +
                        '<div class="Mt(3px) C(#a3a3a3) Fz(11px) nightmode_C(#b3b3b3)">' + userData.user_title + '</div>' +
                      '</a>' +
                    '</div>' +
                    '<div class="W(80px) C(#484848) Fz(12px) Fw(500) Lh(30px) Ta(c) nightmode_C(#dcdcdc)">' + 
                      '<a href="/viewallposts/' + post_info.userid + '?thread_id=' + result.result.thread_id + '&count=' + post_info.total_post + '" class="C(#484848) nightmode_C(#dcdcdc)">' + post_info.total_post + '</a>' +
                    '</div>' +
                  '</div>';
          }
        });
      } else {
        html_view = 'Empty Post';
      }
      $('#whoposted_total_post').html('Post(' + (parseInt(whoposted_data.total_post) || 0) + ')');
      $('#whoposted_list_user').html(html_view);
    }
  });

  return false;
}



// Function Play Video gif
function clickVideo(el){
  if( (' ' + el.className + ' ').indexOf(' playing ') > -1){
    el.className = el.className.replace( /(?:^|\s)playing(?!\S)/g , '' );
    var video = el.getElementsByTagName('video')[0];
    video.setAttribute("src","");
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

    if(el.hasAttribute('data-threadid')){
      listThreadId.push(el.getAttribute('data-threadid'));
      el.removeAttribute('data-threadid');
      updateView();
    }
  }
}
// End



var track_url;

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
				$('.jsModal #jsImageAvatar').attr('src', e.imgurl);
				$("#remove_avatar").addClass('D(n)');
				$("#jsImageAvatarView").attr("src", e.imgurl);
				$('.jsModal').fadeOut();
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
					openModal('changeProfilePicture');
					$('.cr-viewport').css('border-radius', '50%');
					setTimeout(function(){
						$uploadCrop.croppie('bind', {
							url: e.target.result
						})
					}, 400);
				} else {
					myFile = input.files[0];
					var data = new FormData();
					data.append('userpicture', myFile);
					data.append('securitytoken', $('.sctoken').val());
					$.ajax({
						url: "/user/profile_picture",
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
										$("#jsImageAvatar").attr("src", reader.result);
										$('.jsModal #jsImageAvatar').attr('src', reader.result);
										$("#jsImageAvatarView").attr("src", reader.result);
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
			width: 150,
			height: 150,
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
			$("#jsImageAvatarView").attr("src", resp);
			var file = dataURLtoFile(resp, "myavatar.jpg");
			var data = new FormData();
			data.append('userpicture', file);
			data.append('securitytoken', $('.sctoken').val());
			$.ajax({
				url: "/user/profile_picture",
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
								$('#changeProfilePicture').find('.jsClosePopUp').click();
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
					$('.jsModal').fadeOut();
				}
			}
		});
	}, "json")
}

function uploadCover() {
	var device_width = $('#jsImageCover').width()-32;
	var device_height = device_width/6.0625;
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
					openModal('changeCoverPicture');
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
			width: device_width,
			height: device_height,
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
						$('#changeCoverPicture').find('.jsClosePopUp').click();
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
  	var wrapElements = [];
  	switch (operation) {
  		case 'add':
		$('.notificationWrapper #load_more .notif_empty').remove();
  		template = build_notification_card(notification, wrapElements);
  		if ($('#notif_wrapper_page #' + String(notification._id.$id)).length > 0) {
  			$('#notif_wrapper_page #' + String(notification._id.$id)).remove();
  		} else {
  			$('#notification_data').attr('data-offset', offset + 1);
  		}
  		$('#notif_wrapper_page #notificationList').prepend(template).fadeIn(300);
  		for (var i = 0, l = wrapElements.length; i < l; i++) {
  			$('#notif_wrapper_page #' + wrapElements[i] + ' .inner').wrapAll('<div></div>');
  		}
  		break;
  		case 'update':
  		if ($('#notif_wrapper_page #' + String(notification._id.$id)).length > 0) {
  			$('#notif_wrapper_page #' + String(notification._id.$id)).remove();
  			template = build_notification_card(notification, wrapElements);
  			$('#notif_wrapper_page #notificationList').prepend(template).fadeIn(300);
  			for (var i = 0, l = wrapElements.length; i < l; i++) {
  			  $('#notif_wrapper_page #' + wrapElements[i] + ' .inner').wrapAll('<div></div>');
  			}
  		}
  		break;
  	}
  });
}


function build_notification_card(notification, wrapElements) {
  template = $('#notif_wrapper_page #notificationCardTemplate').html();
  template = template.replace('{isRead}', '');
  template = template.replace('{clickUrl}', '/notification/read/' + String(notification._id.$id));
  if (notification.type == 'badge') {
    replacement = '$1src="$2/c30x30/images/badgeslist/' + notification.subject_id + '.gif"$3';
    template = template.replace(/(<img class="notifIcon.*?)(?:data-src="(.*?)\/assets\/.*?")(.*?>)/, replacement);
  }
  template = template.replace(' data-src=', ' src=');
  template = template.replace(/{notificationType}/g, notification.type);
  template = template.replace('{postBody}', notification.additional_data.post_body);
  template = template.replace('{dateTime}', notification.last_updated);
  template = template.replace('{notifId}', String(notification._id.$id));
  if (notification.additional_data.post_content) {
    wrapElements.push(String(notification._id.$id));
    template = template.replace('{postContent}', '<div class="C(#9e9e9e) Fz(13px) Lh(18px) Wob(breakWord) LineClamp(2,35px) inner">'+ notification.additional_data.post_content +'</div>');
  } else {
    template = template.replace('{postContent}', '');
  }
  if (notification.additional_data.img_src) {
    template = template.replace('{imageSource}', notification.additional_data.img_src);
  } else {
    template = template.replace('{imageSource}', '');
  }
  return template;
}


var notifications_loaded = false;
var current_displayed_state = '';
$(document).ready(function() {
  $('#get_notifications').click(function () {
    var displayed_state = $('#notification_data').attr('data-displayed_state');
    if (current_displayed_state != displayed_state) {
      notifications_loaded = false;
    }
    if (!notifications_loaded) {
      $('#notif_wrapper').append(getFetchNotifGif());
      var url = '/notification/show/all/?ispopup=true&displayed_state=' + displayed_state;
      current_displayed_state = displayed_state;
      notifications_loaded = true;
      loadNotif(url, '#notif_wrapper');
    }
  });
});


var all_notif_empty = '<div class="notif_empty"><div class="Ta(c)"><img src="'+ assetsFolderNew +'/images/image-notification-empty.png" width="80" height="80" /></div><span>Agan belum memiliki notifikasi sama sekali nih. Yuk mulai beraktivitas di KASKUS dari baca dan komentar di thread hingga membuat teman baru. Ramein notifikasi Agan sekarang!</span></div>';
var cendol_notif_empty = '<div class="notif_empty"><div class="Ta(c)"><img src="'+ assetsFolderNew +'/images/image-notification-empty.png" width="80" height="80" /></div><span>Agan belum memiliki reputasi nih. Untuk mendapatkan cendol, Agan bisa mulai komen atau buat thread di Kaskus. Jika Kaskuser lain merasa thread Agan menarik, maka Agan bisa mendapatkan cendol atau bata.</span></div>';
var reply_notif_empty = '<div class="notif_empty"><div class="Ta(c)"><img src="'+ assetsFolderNew +'/images/image-notification-empty.png" width="80" height="80" /></div><span>Agan belum memiliki post yang dibalas nih. Coba deh Agan komen atau buat thread dulu.</span></div>';
function loadNotif(url, element) {
	$(element + ' #load_more').addClass('D(n)');
	$.get(url, function(result) {
		if (typeof result !== 'object') {
			result = $.parseJSON(result);
		}
		$('#red_notif').hide();
		var track_medium;
		var full_track;
		if (result.data.is_pop_up == 'true') {
			track_medium = 'header';
		} else {
			track_medium = 'single_page';
		}
		full_track = '/?ref=notification&med=' + track_medium;
		var url = $(element + ' #notif_counter_wrapper #pmunread_notif a').attr('href') + track_medium;
		$(element + ' #notif_counter_wrapper #pmunread_notif a').attr('href', url);
		var url = $(element + ' #notif_counter_wrapper #buying_notif a').attr('href') + track_medium;
		$(element + ' #notif_counter_wrapper #buying_notif a').attr('href', url);
		var url = $(element + ' #notif_counter_wrapper #selling_notif a').attr('href') + track_medium;
		$(element + ' #notif_counter_wrapper #selling_notif a').attr('href', url);
		$('#notification_data').attr('data-displayed_state', result.data.new_state);
		if (result.data.pm_unread > 0) {
			$(element + ' #pmunread_notif').removeClass('D(n)');
			$(element + ' #pmunread_counter').text(result.data.pm_unread);
		}
		if (result.data.sum_buying_notification > 0) {
			$(element + ' #buying_notif').removeClass('D(n)');
			$(element + ' #buying_counter').text(result.data.sum_buying_notification);
		}
		if (result.data.sum_selling_notification > 0) {
			$(element + ' #selling_notif').removeClass('D(n)');
			$(element + ' #selling_counter').text(result.data.sum_selling_notification);
		}
		$(element + ' #total_notif').val(result.data.total_notifications);
		if (result.data.is_pop_up === "true") {
			$(element + ' #see_all').removeClass('D(n)');
			$(element + ' #load_more').removeClass('D(n)');
		} else {
			if (result.data.offset <= result.data.total_notifications - 30) {
				$(element + ' #load_more').removeClass('D(n)');
				$(element + ' #see_more').removeClass('D(n)');
			} else {
				$(element + ' #load_more').addClass('D(n)');
			}
			$(element + ' #filter_notif').removeClass('D(n)');
		}
		if (result.data.selected_type_name) {
			$(element + ' #filter_title').text(result.data.selected_type_name);
		} else {
			$(element + ' #filter_title').text('All (Default)');
		}
		$(element + ' div').removeClass('is-choosen');
		if (result.data.selected_type === "all" || result.data.selected_type === '') {
			$(element + ' #all').addClass('is-choosen');
		} else {
			$(element + ' #'+result.data.selected_type).addClass('is-choosen');
		}
		var notif_setting_card = $('#notif_setting_card').html();
		var view = '';
		var counter = 1;
		var templateElement = $(element + ' #notificationCardTemplate').html();
		var wrapElements = [];
		$.each(result.data.notifications, function(notificationId, notification) {
			var template = templateElement;
			if (notification.read) {
				template = template.replace('{isRead}', 'is-opened');
				if (notification.url.indexOf('?') < 0) {
					if (notification.url.indexOf('#') < 0) {
						track_url = notification.url + '/?ref=notification&med=' + track_medium;
					} else {
						track_url = notification.url.replace('#', '/?ref=notification&med=' + track_medium + '#');
					}
				} else {
					if (notification.url.indexOf('#') < 0) {
						track_url = notification.url + '&ref=notification&med=' + track_medium;
					} else {
						track_url = notification.url.replace('#', '&ref=notification&med=' + track_medium + '#');
					}
				}
				template = template.replace('{clickUrl}', track_url);
			} else {
				template = template.replace('{clickUrl}', '/notification/read/' + String(notification._id.$id) + '/?is_pop_up=' + String(result.data.is_pop_up));
			}
			if (notification.type == 'badge') {
				replacement = '$1src="$2/c30x30/images/badgeslist/' + notification.subject_id + '.gif"$3';
				template = template.replace(/(<img class="notifIcon.*?)(?:data-src="(.*?)\/assets\/.*?")(.*?>)/, replacement);
			}
			template = template.replace(/{notificationType}/g, notification.type);
			template = template.replace('{postBody}', notification.additional_data.post_body);
			template = template.replace('{dateTime}', notification.last_updated);
			template = template.replace('{notifId}', String(notification._id.$id));
			if (notification.additional_data.post_content) {
				wrapElements.push(String(notification._id.$id));
				template = template.replace('{postContent}', '<div class="C(#9e9e9e) Fz(13px) Lh(18px) Wob(breakWord) LineClamp(2,35px) inner">'+ notification.additional_data.post_content +'</div>');
			} else {
				template = template.replace('{postContent}', '');
			}
			if (notification.additional_data.img_src) {
				template = template.replace('{imageSource}', '<div class="Fx(flex0Auto) W(60px) H(60px) Mend(10px)"><img class="W(60px) H(60px)" src="'+ notification.additional_data.img_src +'"></div>');
			} else {
				template = template.replace('{imageSource}', '');
			}
			if (counter === 11) {
				view += notif_setting_card;
			}
			view += template.replace('data-src', 'src');
			counter++;
		});
		$(element + ' #notificationList').html(view);
		$(element + ' #load_image').remove();
		for (var i = 0, l = wrapElements.length; i < l; i++) {
			$(element + ' #' + wrapElements[i] + ' .inner').wrapAll('<div></div>');
		}
		var type = $(element + ' #type div.is-choosen').attr('data-type');
		if (type != 'thread_replies' && result.data.pm_unread == 0 && result.data.sum_buying_notification == 0 && result.data.sum_selling_notification == 0 && result.data.total_notifications == 0) {
			$(element + ' #load_more').removeClass('D(n)');
			$(element + ' #load_more').html(all_notif_empty);
			$(element + ' #load_image').remove();
		} else if (type == 'thread_replies' && result.data.total_notifications == 0) {
			$(element + ' #load_more').removeClass('D(n)');
			$(element + ' #load_more').html(reply_notif_empty);
			$(element + ' #load_image').remove();
		}
	});
}

function getDisplayedState() {
	return $('#notification_data').attr('data-displayed_state');
}

function getFetchNotifGif() {
	var fetching_notif = '<img src="'+ assetsFolderNew +'/images/icon-load-biru.gif" width="40" height="40" alt="notification-loading" />';
	var html = '<div id="load_image" class="Ta(c)">'+ fetching_notif +'</div>';
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
	var type = $(element + ' #type div.is-choosen').attr('data-type');
	if (type == 'reputation')
		$(element + ' #load_more').addClass('D(n)');
	$('#notification_data').attr('data-displayed_state', newState);
	var total_notifications = parseInt($(element + ' #total_notif').attr('value'));
	if (parseInt($('#notification_data').attr('data-offset')) >= total_notifications - 30) {
		$(element + ' #load_more').addClass('D(n)');
	}
}

function getNotifications(element, type) {
	$(element + ' #notif_counter_wrapper').removeClass('D(n)');
	$(element + ' #see_more').removeClass('D(n)');
	$(element + ' #notificationList').html(getFetchNotifGif());
	$(element + ' #notification_see_more').html('');
	$('#notification_data').attr('data-offset', 0);
	if (type == 'quoted_post') {
		$(element + ' #notif_counter_wrapper').addClass('D(n)');
		url = '/myforum/myquotedpost/?offset=' + $('#notification_data').attr('data-offset');
		getNotificationData(element, url, type);
	} else if (type == 'reputation') {
		$(element + ' #notif_counter_wrapper').addClass('D(n)');
		url = '/notification/reputation';
		getNotificationData(element, url, type);
	} else {
		if (type == 'thread_replies')
			$(element + ' #notif_counter_wrapper').addClass('D(n)');
		else
			$(element + ' #notif_counter_wrapper').removeClass('D(n)');
		var type_name = getTypeName(type);
		displayed_state = getDisplayedState();
		url = '/notification/show/' + type + '/?ispopup=false&type_name=' + type_name + '&displayed_state=' + displayed_state;
		loadNotif(url, element);
	}
}

function getNotificationData(element, url, type) {
	$(element + ' #load_more').addClass('D(n)');
	var view = '';
	$.get(url, function(result) {
		if (typeof result !== 'object') {
			result = $.parseJSON(result);
		}
		var wrapElements = [];
		$.each(result.notifications, function(notificationId, notification) {
			template = $(element + ' #notificationCardTemplate').html();
			if (notification.read) {
				template = template.replace('{isRead}', 'is-opened');
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
				template = template.replace('{clickUrl}', track_url);
			}
			template = template.replace(' data-src=', ' src=');
			template = template.replace(/{notificationType}/g, notification.type);
			template = template.replace('{postBody}', notification.additional_data.post_body);
			template = template.replace('{dateTime}', notification.last_updated);
			template = template.replace('{notifId}', notificationId);
			if (notification.additional_data.post_content) {
				wrapElements.push(notificationId);
				template = template.replace('{postContent}', '<div class="C(#9e9e9e) Fz(13px) Lh(18px) Wob(breakWord) LineClamp(2,35px) inner">'+ notification.additional_data.post_content +'</div>');
			} else {
				template = template.replace('{postContent}', '');
			}
			if (notification.additional_data.img_src) {
				template = template.replace('{imageSource}', notification.additional_data.img_src);
			} else {
				template = template.replace('{imageSource}', '');
			}
			view += template;
		});
		if ($('#notification_data').attr('data-offset') == 0)
			$(element + ' #notificationList').html(view);
		else
			$(element + ' #notification_see_more').append(view);
		$(element + ' #load_image').remove();
		$(element + ' #filter_title').text(getTypeName(type));
		$(element + ' #total_notif').attr('value', result.total_notif);
		$(element + ' div').removeClass('is-choosen');
		$(element + ' #' + type).addClass('is-choosen');
		for (var i = 0, l = wrapElements.length; i < l; i++) {
			$(element + ' #' + wrapElements[i] + ' .inner').wrapAll('<div></div>');
		}
		$(element + ' #load_more').removeClass('D(n)');
		hideLoadMoreLink(element, getDisplayedState());
		if (result.notifications.length == 0) {
			$(element + ' #load_more').removeClass('D(n)');
			if (type == 'reputation')
				$(element + ' #load_more').html(cendol_notif_empty);
			else if (type == 'quoted_post')
				$(element + ' #load_more').html(reply_notif_empty);
			$(element + ' #load_image').remove();
		}
	});
}

function seeMore(element) {
	$(element + ' #notification_see_more').append(getFetchNotifGif());
	var type = $(element + ' #type div.is-choosen').attr('data-type');
	var offset = parseInt($('#notification_data').attr('data-offset'));
	$('#notification_data').attr('data-offset', offset + 30);
	if (type == 'quoted_post') {
		url = '/myforum/myquotedpost/?offset=' + $('#notification_data').attr('data-offset');
		getNotificationData(element, url, type);
	} else if (type == 'reputation') {
		url = '/notification/reputation';
		getNotificationData(element, url, type);
	} else {
		$(element + ' #load_more').addClass('D(n)');
		var type_name = getTypeName(type);
		displayed_state = getDisplayedState();
		var url = '/notification/show/' + type + '/?ispopup=false&type_name=' + type_name + '&displayed_state=' + displayed_state + '&offset=' + $('#notification_data').attr('data-offset');
		$.get(url, function(result) {
			if (typeof result !== 'object') {
				result = $.parseJSON(result);
			}
			$(element + ' #notification_see_more #load_image').remove();
			var wrapElements = [];
			$.each(result.data.notifications, function(notificationId, notification) {
				template = $(element + ' #notificationCardTemplate').html();
				if (notification.read) {
					template = template.replace('{isRead}', 'is-opened');
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
					template = template.replace('{clickUrl}', notification.url + '/?ref=notification&med=single_page_' + type);
				} else {
					template = template.replace('{clickUrl}', '/notification/read/' + String(notification._id.$id));
				}
				if (notification.type == 'badge') {
					replacement = '$1src="$2/c30x30/images/badgeslist/' + notification.subject_id + '.gif"$3';
					template = template.replace(/(<img class="notifIcon.*?)(?:data-src="(.*?)\/assets\/.*?")(.*?>)/, replacement);
				}
				template = template.replace(' data-src=', ' src=');
				template = template.replace(/{notificationType}/g, notification.type);
				template = template.replace('{postBody}', notification.additional_data.post_body);
				template = template.replace('{dateTime}', notification.last_updated);
				template = template.replace('{notifId}', notificationId);
				if (notification.additional_data.post_content) {
					wrapElements.push(notificationId);
					template = template.replace('{postContent}', '<div class="C(#9e9e9e) Fz(13px) Lh(18px) Wob(breakWord) LineClamp(2,35px) inner">'+ notification.additional_data.post_content +'</div>');
				} else {
					template = template.replace('{postContent}', '');
				}
				if (notification.additional_data.img_src) {
					template = template.replace('{imageSource}', notification.additional_data.img_src);
				} else {
					template = template.replace('{imageSource}', '');
				}
				$(element + ' #load_image').remove();
				$(element + ' #notification_see_more').append(template);
			});
			$(element + ' #load_more').removeClass('D(n)');
			for (var i = 0, l = wrapElements.length; i < l; i++) {
				$(element + ' #' + wrapElements[i] + ' .inner').wrapAll('<div></div>');
			}
			hideLoadMoreLink(element, result.data.new_state);
		});
	}
}





function load_follower_data(base_url)
{
	$.ajax({
		url: base_url,
		success : function(result){
			response = $.parseJSON(result);
			$('#follower_list').html(response.dataview);
			$('#pagination-follower').html(response.pagination);
		}
	});
}

function load_following_data(base_url)
{
	$.ajax({
		url: base_url,
		success : function(result) {
			response = $.parseJSON(result);
			$('#following_list').html(response.dataview);
			$('#pagination-following').html(response.pagination);
		}
	});
}

var moderated_page = 1;
var load_more_forum = '<li id="forum-loadmore" class="D(f) Ai(c) Mb(15px)"><a data-id="moderator-load-more" onclick="load_more_moderated_forum()" href="javascript:void(0)" class="Fz(12px) C(#fff) nightmode_C(#000) Bgc(#1998ed) Bd(0) Px(28px) Py(8px) Bdrs(3px) nightmode_Bgc(#faa517) Ta(c) Fw(500) D(b) W(100%)">Load More</a></li>';
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
			html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="'+ forum_icon[key] +'" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><a class="Fw(500) C(c-normal)) C(#484848) nightmode_C(#dcdcdc)" href="'+ forum.url+'">'+forum.name+'</a></div></div>';
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
			html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="'+ forum_icon[key] +'" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><a class="Fw(500) C(c-normal)) C(#484848) nightmode_C(#dcdcdc)" href="'+ forum.url+'">'+forum.name+'</a></div></div>';
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
var load_more = '<li id="badge-loadmore" class="D(f) Ai(c) Mb(15px)"><a data-id="badge-load-more" onclick="load_more_badge()" href="javascript:void(0)" class="Fz(12px) C(#fff) nightmode_C(#000) Bgc(#1998ed) Bd(0) Px(28px) Py(8px) Bdrs(3px) nightmode_Bgc(#faa517) Ta(c) Fw(500) D(b) W(100%)">Load More</a></li>';

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


// ----- optimize wap js ------

$(document).ready(function(){
	$('#pagination-blocked').unbind("click").on('click','a',function(e){
		e.preventDefault();
		$.ajax({
			url: $(this).attr('href'),
			success : function(result) {
				response = $.parseJSON(result);
				$('#blocked_list').html(response.dataview);
				$('#pagination-blocked').html(response.pagination);
			}
		});
	});

	$('#pagination-follower').unbind('click').on('click','a',function(e){
		e.preventDefault();
		var base_url = $(this).attr('href');
		load_follower_data(base_url);
	});

	$('#pagination-following').unbind('click').on('click','a',function(e){
		e.preventDefault();
		var base_url = $(this).attr('href');
		load_following_data(base_url);
	});

	// $('#jsBacktoTop').click(backToTopFunction);
	$(document).on('click', '#qr-code-btn', function(){
		$.ajax({
			url: '/profile/qrcode/' + $('#profile-userid').val(),
			success: function(result){
				var qrcode = result['qrcode'];
				if(qrcode) {
					$('#img-qrcode').attr('src', 'data:image/png;base64,' + qrcode);
				} else {
					$('#img-qrcode').hide();
					$('#div-qr-code').html('Failed to generate QR Code');
				}
			}
		})
	});

	$(document).on('click', '#unfollow-btn', function(){
		$.ajax({
			url:'/profile/unfollow_user/' + $('#profile-userid').val(),
			success : function(result){
				$('#unfollow-modal-body').html(result);
			}
		});
	});

	$(document).on('click', '#block-dot', function(){
		$.ajax({
			url:'/profile/block_user/' + $('#profile-userid').val(),
			success : function(result){
				$('#block-modal-body').html(result);
			}
		});
	});

	$(document).on('click', '#unblock-btn, #unblock-dot', function(){
		$.ajax({
			url:'/profile/unblock_user/' + $('#profile-userid').val(),
			success : function(result){
				$('#unblock-modal-body').html(result);
			}
		});
	});

	$(document).on('click', '[data-bind-click]', function(){
		var dataBindClick = $(this).data('bind-click');
		window[dataBindClick] && window[dataBindClick]();
	});

	if ($('#notif_wrapper_page').length) {
		// script for notification page

		var loadNotificationElement = '#notif_wrapper_page';
		var displayed_state = $('#notification_data').attr('data-displayed_state');
		$('#notif_wrapper_page #notificationList').append(getFetchNotifGif());
		var url = '/notification/show/all/?ispopup=false&displayed_state=' + displayed_state;
		loadNotif(url, '#notif_wrapper_page');
		$(document).on('click', '.jsSortItemNotification', function() {
			var type = $(this).attr('id');
			getNotifications(loadNotificationElement, type);
		});
	}
});


// @codekit-prepend "../backend/backend-subforum.js";
// @codekit-prepend "../backend/backend-thread.js";
// @codekit-prepend "../backend/backend-user.js";

/**
 * Function subscribe unsubscribe thread (sub forum and thread used)
 */
function gaTrackOb(el) {
  var type = el.attr('data-type');
  var category = el.attr('data-category');
  var action = el.attr('data-state');
  var forumId = el.attr('data-forumid');
  var forumName = el.attr('data-forum-name');
  var forumParentId = el.attr('data-forum-parentid');
  var forumParentName = el.attr('data-forum-parent-name');
  var channelId = el.attr('data-channelid');
  var channelName = el.attr('data-channel-name');
  var totalSubscriber = '-1';
  
  if (action == 'subscribe') {
    totalSubscriber = '1';
  }
  if (type == 'thread') {
    var label = el.attr('data-label');
    var threadId = el.attr('data-id');
    var userId = el.attr('data-userid');
    var threadTitle = el.attr('data-title');
    var author = el.attr('data-author');

    _gaq.push(['_trackEvent', category, action, label]);
    dataLayer.push({
      'event': 'trackEvent',
      'eventDetails.category': category,
      'eventDetails.action': action,
      'eventDetails.label': label,
      'threadSubscriber': totalSubscriber,
      'userID': userId,
      'threadId': threadId,
      'threadTitle': threadTitle,
      'author': author,
      'forumId': forumId,
      'forumName': forumName,
      'forumParentId': forumParentId,
      'forumParentName': forumParentName,
      'channelId': channelId,
      'channelName': channelName
    });
  } else if (type == 'forum') {
    var label = 'forum-' + forumId;
    _gaq.push(['_trackEvent', category, action, label]);
    dataLayer.push({
      'event': 'trackEvent',
      'eventDetails.category': category,
      'eventDetails.action': action,
      'eventDetails.label': label,
      'forumSubscriber': totalSubscriber,
      'userID': user_id,
      'forumId': forumId,
      'forumName': forumName,
      'forumParentId': forumParentId,
      'forumParentName': forumParentName,
      'channelId': channelId,
      'channelName': channelName
    });
  }
}

var subscribeUnsubscribeOnProgress = false;
var subscribeUnsubscribeEls = [];

/**
 * Function subscribe unsubscribe thread (sub forum and thread used)
 */
function subscribeUnsubscribe(el)
{
  var index_el_exist = subscribeUnsubscribeEls.indexOf(el.attr('id'));
  if(index_el_exist < 0){
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

  if (securitytoken) {
    $.ajax({
      type: "POST",
        url: subscribe_url,
        data:{
          securitytoken:securitytoken
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
              if(el.attr('data-style') == 'icon-thread') {
                el.children('i').toggleClass('is-subcribed');
              } else if (el.attr('data-style') == 'button-forum') {
                el.text('subscribed');
                el.removeClass("Bgc(#f8c31c)");
                el.addClass("Bgc(#b3b3b3)");
              } else {
                el.text('Unsubscribe');
              }
            } else {
              el.attr("data-state", "subscribe");
              if(el.attr('data-style') == 'icon-thread') {
                el.children('i').toggleClass('is-subcribed');
              } else if (el.attr('data-style') == 'button-forum') {
                el.text('subscribe');
                el.removeClass("Bgc(#b3b3b3)");
                el.addClass("Bgc(#f8c31c)");
              } else {
                el.text('Subscribe');
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
      error:function(result){
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

// HEADER CATEGORY & SEARCH
function fetchCategories() {
  url = WAP_KASKUS_URL + "/misc/get_categories/" + catVersion + "/" + theme;
  $.retrieveJSON(url, {
    usergroupid: userGroupIdJSON,
    theme: theme
  }, function(categories) {
    if (retryFetch && categories.version != catVersion) {
      $.clearJSON(url, {
        usergroupid: userGroupIdJSON
      });
      retryFetch = 0;
      fetchCategories();
    } else {
      catLoad = true;
      $("#forum-categories").append(categories.forum);
      $("#fjb-categories").append(categories.jb);
      $("#filter-cat-fjb").on("keyup", function(a) {
        searchCategory("fjb");
      });
      $("#filter-cat-forum").on("keyup", function(a) {
        searchCategory("forum");
      });
    }
  }, 864e5);
}
var catLoad = false;
var retryFetch = 1;

function searchCategory(name) {
  var searchField = $("#filter-cat-" + name).find("div input").val();
  try {
    var upperName = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    var myExp = new RegExp(searchField, "i");
    if ("" === searchField) {
      $("#jsCategory" + upperName).find(".c-category__item").removeClass('disappear');
      $("#" + name + "-category-list").removeClass('disappear');
      $("#" + name + "-category-search").addClass('disappear');
      return;
    }

    $("#jsCategory" + upperName).find(".c-category__item").addClass('disappear');
    $("#" + name + "-category-list").addClass('disappear');
    $("#" + name + "-category-search").removeClass('disappear');
    $("#" + name + "-category-search").html("");
    var output = '';
    var not_found = true;
    $("#" + name + "-categories").find(".list__item div span").each(function(c, d) {
      if ($(d).first().text().search(myExp) != -1) {
        output += '<div class="list__item"><div class="Pstart(28px) Py(15px) Px(10px)"><span>' + $(d).html() + '</span></div></div>';
        not_found = false;
      }
    });
    if (not_found) {
      output += '<div class="P(10px)">No result</div>';
    }
    $("#" + name + "-category-search").append(output);
  } catch (a) {}
}

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

  show_template_search(data_top_keyword, 'top_search_choice', 'top_search', 'last_top_keyword');
  show_template_search(data_search_history, 'history_search_choice', 'history_search', 'last_search_history');
}

function show_template_search(terms, div_id, div_to_hide, last_data) {
  var temp_template = '';
  for (var i in terms) {
    temp_template += '<div class="P(10px)"><a class="C(#484848) nightmode_C(#dcdcdc) resultTerm" href="' + link_search + '?q=' + terms[i] + '">' + terms[i] + '</a></div>';
  }

  if (temp_template != window[last_data]) {
    document.getElementById(div_id).innerHTML = temp_template;
    window[last_data] = temp_template;
    indexSelected = -1;
  }

  if (temp_template == '') {
    document.getElementById(div_to_hide).style.display = "none";
  } else {
    document.getElementById(div_to_hide).style.display = "block";
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
        if (typeof KASKUS_COOKIE_DOMAIN !== 'undefined') {
          cookie_domain = KASKUS_COOKIE_DOMAIN;
        } else {
          cookie_domain = COOKIE_DOMAIN;
        }
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
      if (typeof KASKUS_COOKIE_DOMAIN !== 'undefined') {
        cookie_domain = KASKUS_COOKIE_DOMAIN;
      } else {
        cookie_domain = COOKIE_DOMAIN;
      }
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
// END

// GA TRACK THREAD LIST
function build_ga_track_event(category, action , label )
{
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

function openModal(modalTarget){
  $('.jsModal').removeClass('is-open');
  $(".jsModal").show();
  var modalElement =  $('#'+modalTarget);
  modalElement.addClass('is-open');
  $("body").addClass("Ov(h)");
}


/**
 *Bind clicks anywhere outside of the modal, close it
*/
// window.onclick = function(event) {
//   if (event.target.className == 'jsModal') {
//     $('.jsModal').hide();
//     $('body').removeClass('Ov(h)');
//   }
// }

/**
 *bind click notice
*/
function showNotice(text, timeout) {
  if(typeof timeout === 'undefined'){
    timeout = 3000;
  }

  if(document.notice_tid){
    clearTimeout(document.notice_tid);
  }

  $('.jsNoticeText').html(text);
  $('.jsNoticeWrap').show();
  document.notice_tid = setTimeout(function(){$('.jsNoticeWrap').fadeOut();}, timeout);
}


/**
 * function to adjust text area
 */
function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (o.scrollHeight-25)+"px";
}

/**
 * function to adjust larger text area
 */
function largeTextAreaAdjust(o) {
  o.style.height = "15px";
  o.style.height = (o.scrollHeight+5)+"px";
}

/**
 * bind close btn notice
 */
// $('.closeNoticeBtn').on('click', function(){
//   $(this).parents('.noticeParent').hide();
// })


$(document).ready(function() {
  window.addEventListener("scroll", function() {
    (function(){})()
    scrollHeader();
    PositionBackToTop();
    scrollCopyLink();
    setTopNotice();
    scrollBtnFixed();
    scrollTooltipReputation();
    if ($('.threadDetail').length > 0) {
      stickyShare();
    }
  },{passive:!0});
});

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

function scrollBtnFixed() {
  var scrollHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var btnFixedAnchor = $('.jsBtnFixedAnchor').offset();
  if ($('.jsBtnFixedAnchor').length > 0) {
      if (scrollTop  > btnFixedAnchor.top - scrollHeight + 64) {
          $('.jsBtnFixed').removeClass('Pos(f)').addClass('Pos(a)');
      }
      else {
          $('.jsBtnFixed').addClass('Pos(f)').removeClass('Pos(a)');
      }
  }
}

function scrollCopyLink() {
    if ($(window).scrollTop() > 5) {
        $('.copiedLink').css('top', '75px');
    } else {
        $('.copiedLink').css('top', '100px');
    }
}

var tinggiPodcastHeader = 0;

function scrollHeader() {

    var topHeaderPosition
    var isSticky = $('.jsPodcastWidgetHeaderIframe').hasClass('is-sticky');

    if($('.jsHeader').length > 0){
        if(isSticky){
          if($('.jsNoticeHeader').length > 0){
            if($(window).scrollTop() <  $('.jsNoticeHeader').outerHeight()){
              $('.jsNoticeHeader').show();
              topHeaderPosition = 0 - $(window).scrollTop();
            }
            else{
              $('.jsNoticeHeader').hide();
              topHeaderPosition = 0;
            }
          }
          else{
              topHeaderPosition = 0;
          }
        }
        else{
          if($('.jsNoticeHeader').length > 0){
            if($(window).scrollTop() <  $('.jsNoticeHeader').outerHeight() + tinggiPodcastHeader){
                topHeaderPosition = 0 - $(window).scrollTop();
                $('.jsPodcastWidgetAnchor').show();
                $('.jsNoticeHeader').show();
                tinggiPodcastHeader = $('.jsPodcastWidgetAnchor').outerHeight();
            }
            else{
                topHeaderPosition = 0;
                $('.jsPodcastWidgetAnchor').hide();
                $('.jsNoticeHeader').hide();
            }
          }
          else{
              if($(window).scrollTop() <  $('.jsPodcastWidgetAnchor').outerHeight()){
                topHeaderPosition = 0 - $(window).scrollTop();
                $('.jsPodcastWidgetAnchor').show();
              }
              else{
                  topHeaderPosition = 0;
                  $('.jsPodcastWidgetAnchor').hide();
              }
          }
        }
        $('.jsHeader').css('top', topHeaderPosition + 'px');
    }
}

function PositionBackToTop() {
    if ($(window).scrollTop() > 20) {
        $('.arrowBacktoTop').show();
    } else {
        $('.arrowBacktoTop').hide();
    }
}

function setTopNotice() {
    if ($(window).scrollTop() > 1) {
      $('.jsNoticeWrap').css('top', '75px');
    }
    else {
      $('.jsNoticeWrap').css('top', '125px');
    }
}


// FRONT END

/*
  Function to detect height of element changed
 */
function onElementHeightChange(elm, callback) {
  var lastHeight = elm.clientHeight,
    newHeight;
  (function run() {
    newHeight = elm.clientHeight;
    if (lastHeight != newHeight)
      callback();
    lastHeight = newHeight;

    if (elm.onElementHeightChangeTimer)
      clearTimeout(elm.onElementHeightChangeTimer);

    elm.onElementHeightChangeTimer = setTimeout(run, 200);
  })();
}

// function toggleSortThread() {
//     $("#jsThreadSort").toggleClass("is-open");
//     $(document.body).toggleClass("o-hidden");
// }

/**
 * function to resize captcha
 */
function resizeCaptcha() {
  // RESPONSIVE CAPTCHA WHEN SCREEN < 302
  var width = $(".g-recaptcha").parent().width();
  if (width < 302) {
    var scale = width / 302;
    $(".g-recaptcha").css("transform", "scale(" + scale + ")");
    $(".g-recaptcha").css("-webkit-transform", "scale(" + scale + ")");
    $(".g-recaptcha").css("transform-origin", "0 0");
    $(".g-recaptcha").css("-webkit-transform-origin", "0 0");
  }
}

/*
 * bind function repeat poll
 */
function cloneRepeaterItem() {
  var repeaterItemLength = $(".jsRepeaterItem").length;
  var repeaterIndex = 1;
  $(this).closest(".jsRepeater").find(".jsRepeaterItem").first().clone().appendTo(".jsRepeaterList");
  $(this).prev().find(".jsRepeaterItem").last().find('input[type="text"]').val('');
  $(this).closest(".jsRepeater").find(".jsRepeaterItem").last().find('.jsErrorNote').remove();
  if (repeaterItemLength == 2) {
    $(".jsRepeaterItem > div.jsInputWrapper").append('<button class="jsRepeaterButtonRemove C(#b3b3b3) Mstart(10px)"><i class="fas fa-times"></i></button>');
  }
  if (repeaterItemLength == 44) {
    $('.jsRepeaterButtonAdd').hide();
  }
  $(this).closest(".jsRepeater").find(".jsRepeaterItem")
    .each(function() {
      $(this).find("input").attr("id", "repeaterItem-" + repeaterIndex);
      $(this).find("input").attr("name", "options[" + repeaterIndex + ']');
      $(this).find(".jsRepeaterCounter").html(repeaterIndex)
      repeaterIndex++;
    });
}


/*
 * function remove repeat poll
 */
function removeRepeaterItem() {
  $(this).closest(".jsRepeaterItem").remove();
  var repeaterItemLength = $(".jsRepeaterItem").length;
  var repeaterIndex = 1;
  $(".jsRepeaterItem")
    .each(function() {
      $(this).find("input").attr("id", "repeaterItem-" + repeaterIndex);
      $(this).find(".jsRepeaterCounter").html(repeaterIndex)
      repeaterIndex++;
    });
  if (repeaterItemLength == 2) {
    $(".jsRepeaterItem").find('.jsRepeaterButtonRemove').remove();
  }
  if (repeaterItemLength == 44) {
    $('.jsRepeaterButtonAdd').show();
  }
}

function stickyShare(){
  var scrollValue = $(window).scrollTop();
  var scrollLimit = $(".jsThreadRating");
  var firstPost = $('.is-first-post');
  var startShow = firstPost.offset().top + firstPost.height();
  if (scrollValue < startShow && scrollValue > scrollLimit.offset().top){
    $('.jsShareBtn').addClass("scrolled");
    $(".jsBotScroll").hide();
  }
  else {
    $('.jsShareBtn').removeClass("scrolled");
    $(".jsBotScroll").show();
  }
}

// DOCUMENT READY
$(document).ready(function() {

  $(document).on('click', function(event) {
    if (!$(event.target).closest('.jsMentionWrapper, .jsMentionBtn, .jsRevealMenus, .jsShowMenus, .jsMoreMenus, .jsRevealShare, .jsSmiliesBtn, .jsSmiliesWrapper').length) {
      $('.jsMentionWrapper, .jsSmiliesWrapper').removeClass('is-open');
      $(".jsMentionBtn, .jsSmiliesBtn").removeClass("is-active");
      $(".jsRevealMenus, .jsRevealShare").hide();
      $(".jsShowMenus, .jsMoreMenus").removeClass("show").addClass("hide");
    }
  });

  $(document).on("keyup","#global-search",function() {
    var term = $(this).val().trim();
    if($('#category_search').length){
      if (term.length > 0) {
        $('#category_search').show();
          var searchHlTerm = document.getElementsByClassName("searchHlTerm");
          for(var j = 0; j < searchHlTerm.length; j++){
            searchHlTerm[j].innerText = term;
          }
          var categorySearch = document.getElementsByClassName("categorySearch");
          var fidterm = link_search + '?q=' + term;
          for(var j = 0; j < categorySearch.length; j++){
            if(categorySearch[j].getAttribute('data-forum-id') !== null) {
               categorySearch[j].setAttribute('href', fidterm + " fid:" + categorySearch[j].getAttribute('data-forum-id'));
            } else {
              categorySearch[j].setAttribute('href', fidterm);
            }
           }
      }
      else
      {
        $('#category_search').hide();
      }
    }
    var pattern = new RegExp("("+term+")", "gi");
    searchTerms = document.getElementsByClassName("resultTerm");
    for(var i = 0; i < searchTerms.length; i++){
      var highlightedTerm = searchTerms[i].innerText.replace(pattern, "<span class=\"highlightedText\">$1</span>");
      searchTerms[i].innerHTML = highlightedTerm;
    }
  });

  if ($(".jsRepeaterItem").length == 2) {
    $(".jsRepeaterItem").find('.jsRepeaterButtonRemove').remove();
  }

  $(document).on('click', '.jsRepeaterButtonRemove', removeRepeaterItem);

  $(document).on('click', '.jsRepeaterButtonAdd', cloneRepeaterItem);


  /**
   * function to open channel filter
   */
   $(document).on("click", ".jsToggleHTChannel", function() {
     $("#jsChannelFilter").toggleClass('is-open');
     $(document.body).toggleClass("o-hidden");
   });

  /**
   * bind to open change Cover overlay
   */
   $(document).on("click", ".jsToggleChangeCover", function() {
     $("#changeCoverPicture").toggleClass("is-open");
     $(document.body).removeClass("o-hidden");
   });

  /**
   * bind to open change profile picture overlay
   */
   $(document).on("click", ".jsToggleChangePP", function() {
     $("#changeProfilePicture").toggleClass("is-open");
     $(document.body).removeClass("o-hidden");
   });

  /**
   * bind to open view profile picture overlay
   */
  $(".jsToggleViewPP").on("click", function() {
    $("#viewProfilePicture").toggleClass("is-open");
    $(document.body).toggleClass("o-hidden");
  });

  /**
   * bind to open category overlay
   */
   $(document).on("click", ".jsToggleCategory", function() {
     $("#jsCategory").toggleClass("is-open");
     $(document.body).toggleClass("o-hidden");
     if (!catLoad) {
         fetchCategories();
     }
   });

  /**
   * bind to open create thread overlay
   */
   $(document).on("click", ".jsToggleCreate", function() {
     $("#jsCreatePost").toggleClass("is-open");
     $(document.body).toggleClass("o-hidden");
   });

  /**
   * bind to open notification menu overlay
   */
   $(document).on("click", ".jsToggleNotif", function() {
     $("#jsNotification").toggleClass("is-open");
     $(document.body).toggleClass("o-hidden");
     $("#get_notifications i").attr("data-id", "header-notification");
   });

  var timeout;
  var resized = false;

  /**
   * bind to open login and resized captcha
   */
   $(document).on("click", ".jsToggleLogin", function() {
     $("#jsLogin").toggleClass("is-open");
     $(document.body).toggleClass("o-hidden");
     $("#username").focus();

     if (resized == false) {
         resizeCaptcha();
         resized = true;
     }
   });

  /**
   * bind to open profile menu overlay
   */
   $(document).on("click", ".jsToggleProfile", function() {
     $("#jsProfile").toggleClass("is-open");
     $(document.body).toggleClass("o-hidden");
   });

  /**
   * bind to open navigation bar
   */
   $(document).on("click", ".jsToggleNavBar", function() {
     $("#jsNavBar").addClass("is-open");
     $(document.body).addClass("o-hidden");
   });


  /**
   * bind to close modal popup
   */
   $(document).on("click", ".jsClosePopUp", function() {
     $(this).closest(".modal").removeClass("is-open");
     $(document.body).removeClass("o-hidden");
   });

  /**
   * bind spoiler
   */
  $(function() {
    $("div.jsSpoilerHead").on("click", function(e) {
      e.stopPropagation();
      if ($(this).parent().next().hasClass("is-hide")) {
        $(this).parent().next().removeClass("is-hide");
        $(this).parent().next().addClass("is-show");
        $(this).find(".jsSpoilerBtn").text("hide");
        $(this).find(".jsIconMovement").addClass("turnIcon");
        // $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
      } else {
        $(this).parent().next().removeClass("is-show");
        $(this).parent().next().addClass("is-hide");
        $(this).find(".jsSpoilerBtn").text("show");
        $(this).find(".jsIconMovement").removeClass("turnIcon");
        // $(this).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
      }
    });
  });
  // END

  /**
   * function to open sort thread by (filter)
   */
   $(document).on("click", ".jsSortThreadHead", function() {
       $(this).parent().next().show();
       $(".jsOverlay").show();
       $(this).find(".jsIconMovement").addClass("turnIcon");
       $(document.body).addClass("Ov(h)");
   });

  /**
   * function to back to top
   */
  $('body').on('click', '.arrowBacktoTop', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });

  /**
   * function to subscribe thread
   */
  $(".jsBookmarkWrapper").on("click", ".jsBookmark", function() {
    if ($(this).hasClass("is-subcribed")) {
      $(this).removeClass("is-subcribed");
      // $("#unsubcribe-thread").fadeIn();
      // $("body").addClass("Ov(h)");
    } else {
      $(this).addClass("is-subcribed");
      // $("body").removeClass("Ov(h)");
    }
  });

  /**
   * function to open share more on landing
   */
  $('body').on('click', '.jsMoreMenus', function() {
    toShow = true;
    if ($(this).parent().next().css("display") == "block") {
      toShow = false;
    }

    $.each($(".jsMoreMenus"), function(index, obj) {
      if ($(obj).parent().next().css("display") == "block") {
        $(obj).parent().next().hide();
        $(obj).addClass("hide").removeClass("show");
      }
    });

    if (toShow) {
      $(this).parent().next().show();
      $(this).addClass("show").removeClass("hide");
    }
  });

  // /*
  //    Function to insert BBCode, it receives 3 parameter. The openWith and closeWith parameters are used to wrap the text with the BBCode tag. The textbox parameter defines which textbox element should be used.
  // */
  $(".bbcode-btn").on("click", function() {
    var textbox = "#jsReplyTextArea, #jsCreateThread";
    var bbcodeTag = $(this).data("bbcode");
    var openWith = "[" + bbcodeTag + "]";
    var closeWith = "[/" + bbcodeTag + "]";
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
    objectTextbox.selectionEnd = posSelectionEnd + 3;
  });


  /*
   * bind function trh when #recommended-trh-threadlist
   */
  bindTrhThreadList();

  /*
   * count char create thread
   */
  $(".jsTextArea").keyup(function() {
    var lengthCount = this.value.length;
    var maxLimit = 20000;
    if (lengthCount > maxLimit) {
      this.value = this.value.substring(0, maxLimit);
      var charactersLeft = maxLimit - lengthCount + 1;
    } else {
      var charactersLeft = maxLimit - lengthCount;
    }
    $(".jsCharsLeft").text(charactersLeft);
  });

  //openModalAnniversary();

  /*
   * bind function trh when #recommended-trh-home
   */
  bindTrhHome();

  /**
   * bind thread display type
   */
  bindSetThreadDisplay();

  /**
   * bind feed display type
   */
  bindSetFeedDisplay();

  /**
   * bind category personalization
   */
  bindSetjsCategoryPersonalizationItem();

  /**
   * bind button subscribe
   */
  bindSetjsButtonSubscribe();


  /**
   * bind click to show hide notice
   */
  // $(".jsShowNoticeBtn").on("click", function() {
  //     $(".jsNotice").fadeIn("slow").delay(5000).fadeOut();
  //     if ($(".jsHeader").css("top","0")) {
  //         $(".jsNotice").css("top","75px");
  //     }
  //     else {
  //         $(".jsNotice").css("top","100px");
  //     }
  // });

  if ($('#ht-loader').length > 0) {
    load_ht();
  }

  $(document).scroll();

  $('#ht_q').keyup(function(e) {
    if (e.keyCode == 13) {
      clear_cursor();
      search_ht();
    }
  });
  $('#jsHTArchiveSubmit').on('click', function() {
    clear_cursor();
    search_ht();
  });

  $('body').on('click', '.jsHtChannel', function() {
    var ht_channel_id = $(this).attr("data-id");
    if (ht_channel_id == channel_id_home) {
      $('.jsHtSelectedChannel').html('<div class="Mend(10px) C(#1998ed)"><i class="fas fa-home"></i></div><div class="C(#6e6e6e) nightmode_C(#dcdcdc) Fz(13px)">' + window.KASKUS_lang.all_channel_label + '</div>');
      $('#htarchive_channel').val("0");
    } else {
      $('.jsHtSelectedChannel').html('<div class="As(c) Mend(10px) W(22px) H(22px)"><div class="Flxs(0) H(100%) Ov(h) W(100%)  Bgr(nr) Bgp(c) Bgz(bgImageSizeSmall)" style="background-image:url(' + $(this).attr("data-image") + ')"></div></div><div class="C(#6e6e6e) nightmode_C(#dcdcdc) Fz(13px)">' + $(this).attr("data-name") + '</div>');
      $('#htarchive_channel').val($(this).attr("data-id"));
    }
  });

  /**
   * function to open share thread
   */
   $(document).on("click", ".jsTriggerShare", function() {
       $(".jsShareThread").toggleClass("is-open");
       $(".jsShareThread").next().toggleClass("is-open");
   });

  /**
   * function to open rating
   */
   $(document).on("click", ".jsTriggerRating", function() {
     $(".jsRating").show();
     $(".jsOverlay").show();
     // $(".jsIconMovement").addClass("turnIcon");
     $(document.body).addClass("Ov(h)");
   });


  /**
   * function to open more menus ...
   */
   $(document).on("click", ".jsShowMenus", function() {
       toShow = true;
       if($(this).parent().next().css("display")=="block"){
          toShow = false;
       }

       $.each($(".jsShowMenus"), function(index, obj){
           if($(obj).parent().next().css("display")=="block"){
               $(obj).parent().next().hide();
               $(obj).parent().next().find(".toggleMenu").removeClass("is-visible");
               $(obj).addClass("hide").removeClass("show");
           }
       });

       if(toShow){
           $(this).parent().next().show();
           $(this).parent().next().find(".toggleMenu").addClass("is-visible");
           $(this).addClass("show").removeClass("hide");
       }
   });

  /**
   * function to lapor hansip form overlay
   */
   $(document).on("click", ".jsLaporHansip", function(e) {
       $("#jsLaporHansip").toggleClass("is-open");
       $(document.body).toggleClass("o-hidden");
   });

  /**
   * function to open bottom option popover
   */
   $(document).on("click", ".jsTriggerBotPopOver", function(e) {
     $(this).next().slideDown();
     $(".jsOverlay").show();
     $(document.body).addClass("Ov(h)");
   });

  bindNotice();
  uploadAvatar();
  uploadCover();

  bindThreadListShareMenuData();

  $('.jsPilihKategori').select2({
    placeholder: 'Pilih Kategori'
  });

  /*
   * bind click show hide toggle
   */
  $(".jsPollToggle").on('click', function() {
    if ($('.jsPollForm:visible').length == 0) {
      $('.jsPollForm').show();
      $(".jsPollToggle").toggleClass("is-active");
      $(".jsPollToggle").addClass("created-poll");
      $('html, body').animate({
        scrollTop: $(".jsPollForm").offset().top - 90
      }, 1000);
      $(".jsSmiliesBtn").removeClass("is-active");
      $(".jsSmiliesWrapper").removeClass("is-open");
    } else {
      swal({
          text: "Poll akan dihapus. Yakin?",
          icon: "warning",
          dangerMode: true,
          buttons: ["Batal", "Hapus"],
        })
        .then(function(akanHapus) {
          if (akanHapus) {
            $('.jsPollForm').hide();
            $('.jsPollToggle').removeClass("is-active");
            $(".jsPollToggle").removeClass("created-poll");
          }
        });
    }
  });


  /*
   * bind state if polling has expired date
   */
  $("#closedPolling").on('change', function() {
    if ($("#closedPolling:checked").length > 0) {
      $(".jsClosedPolling").show();
    } else {
      $(".jsClosedPolling").hide();
    }
  });

  /*
   * bind remove uploaded item
   */
  $(".jsRemoveBtn").on('click', function() {
    $(this).parent().remove();
    if ($(".uploadedItem").length == 0) {
      $(".uploadedList").remove();
    }
  });

  /**
   *Bind clicks close tooltip
   */
  $(".jsCloseBtn").on("click", function(event) {
    $(".jsTooltipReputation").removeClass("is-visible");
  });

  /**
   *  Bind Focus Event Hide Keyboard on Enter pressed
   */
  $(".jsCariJudulThreadArchive").keydown(function(e) {
    if (e.keyCode == 13) {
      clear_cursor();
      search_ht();
      $(this).blur();
      e.preventDefault();
    }
  });

  /**
   *Bind clicks anywhere outside of the modal, close it
   */
  $(".jsModal").on("click", function(event) {
    if (!$(event.target).closest(".modal-popup-content").length) {
      $(".jsModal").hide();
      $("body").removeClass("Ov(h)");
    }
  });

  /**
   * bind focus on search categories all forum landing
   */
  $(".jsInputSearch").focusin(function() {
    $(".jsCancelSearch").show();
  });

  /**
      Check notification tab changed to call scroll button function
  */
  if ($(".jsTabNotifWrapper").length > 0) {
    onElementHeightChange(document.querySelector(".jsTabNotifWrapper"), function() {
      scrollBtnFixed();
    });
  }

  /**
   * bind click to show hide thread
   */
  $(".jsShowThread").on("click", function() {
    if ($(this).parent().find(".jsThreadContent").hasClass("is-show")) {
      $(this).parent().find(".jsThreadContent").removeClass("is-show").addClass("is-hide");
      $(this).find(".jsThreadBtnTxt").text("Tampilkan isi Thread");
      $(this).find(".jsIconMovement").removeClass("turnIcon");
      $("html, body").animate({
        scrollTop: $(".is-first-post").offset().top
      }, 1000);
    } else {
      $(this).parent().find(".jsThreadContent").removeClass("is-hide").addClass("is-show");
      $(this).find(".jsThreadBtnTxt").text("Sembunyikan isi thread");
      $(this).find(".jsIconMovement").addClass("turnIcon");
      $("html, body").animate({
        scrollTop: $(".is-first-post").offset().top
      }, 1000);
    }
  });

  /**
   * bind click and change when click on jsOverlay
   */
  $(".jsOverlay").on("click change", function() {
    $(".jsSortThreadBy").hide();
    $(".jsBottomOptionContent").slideUp();
    $(".jsRating").hide();
    $(".jsOverlay").hide();
    $(".jsSortThreadHead").find(".jsIconMovement").removeClass("turnIcon");

    $(document.body).removeClass("Ov(h)");
  });

  /**
   * bind click and change when click on overlayPodcast
   */
  $(".jsOverlayPodcast").on("click change", function() {
    $(".jsOverlayPodcast").hide();
    $(".jsPodcastWidgetEpisodeList").slideUp();
    $(".jsPodcastWidgetButtonExpand i").toggleClass("fa-chevron-down fa-chevron-up");
    $(document.body).removeClass("Ov(h)");
  });

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


  /**
   * bind click when sort thread and rating thread
   */
  $(".jsSortItem, .jsRatingItem, .itemOption").on("click", function() {
    $(".jsBottomOptionContent").slideUp();
    $(".jsSortThreadBy").hide();
    $(".jsRating").hide();
    $(".jsOverlay").hide();
    $(".jsSortThreadHead").find(".jsIconMovement").removeClass("turnIcon");
    $(document.body).removeClass("Ov(h)");
  });

  // /**
  //     * bind click when channel filter
  // */
  // $(".is-channel-item").on("click change", function() {
  //     $("#jsChannelFilter").hide();
  //     $(document.body).removeClass("o-hidden");
  // });

  /**
   *Bind clicks subscribe Thread
   */
  $("body").on("click", ".jsSubscribeThreadIcon", function() {
    subscribeUnsubscribe($(this));
  });

  /**
   * bind movement show hide btn
   */
  $(".jsShowHideBtn").on("click", function(e) {
    var channel_btn_id = $(this).attr('data-id');
    $(this).next().toggleClass("is-open");
    $(this).find(".jsIconMovement").toggleClass("turnIcon");
    if ($(this).next().hasClass("is-open")) {
      if (channel_btn_id !== undefined) {
        dataLayer.push({
          'event': 'trackEvent',
          'eventDetails.category': 'forumall',
          'eventDetails.action': 'open channel',
          'eventDetails.label': 'channel-' + channel_btn_id
        });
      }
      $(this).find(".subForumList i").attr("class", "fas fa-minus-circle");
    } else {
      if (channel_btn_id !== undefined) {
        dataLayer.push({
          'event': 'trackEvent',
          'eventDetails.category': 'forumall',
          'eventDetails.action': 'close channel',
          'eventDetails.label': 'channel-' + channel_btn_id
        });
      }
      $(this).find(".subForumList i").attr("class", "fas fa-plus-circle");
    }
  });

  $(".jsShowHideSubForumBtn").on("click", function() {
    $(this).prev().toggleClass("is-open");
    if ($(this).prev().hasClass("is-open")) {
      $(this).find(".jsShowHideSubForumTxt").text(window.KASKUS_LANG.hide_subforum_link);
    } else {
      $(this).find(".jsShowHideSubForumTxt").text(window.KASKUS_LANG.show_subforum_link);
    }
  });

  $(".jsCategoryItem").each(function(idx) {
    $(this).on("scroll", function() {
      if ($(this).scrollTop() > 0) {
        $(".jsCategoryItem").parent().addClass("fixed");
      } else {
        $(".jsCategoryItem").parent().removeClass("fixed");
      }
    })
  });

  $(document).on("click", "#fjb-tab", function(e) {
      if ($("#forum-tab").hasClass("active-forum")) {
          $("#forum-tab").removeClass("active-forum");
          $("#fjb-tab").addClass("active-fjb");
          $("#jsCategoryForum").removeClass("open");
          $("#jsCategoryFjb").addClass("open");
          $("#filter-cat-forum").addClass("disappear");
          $("#filter-cat-forum").removeClass("appear");
          $("#filter-cat-fjb").addClass("appear");
          $("#filter-cat-fjb").removeClass("disappear");
      }
  });

  $(document).on("click", "#forum-tab", function(e) {
      if ($("#fjb-tab").hasClass("active-fjb")) {
          $("#fjb-tab").removeClass("active-fjb");
          $("#forum-tab").addClass("active-forum");
          $("#jsCategoryFjb").removeClass("open");
          $("#jsCategoryForum").addClass("open");
          $("#filter-cat-fjb").addClass("disappear");
          $("#filter-cat-fjb").removeClass("appear");
          $("#filter-cat-forum").addClass("appear");
          $("#filter-cat-forum").removeClass("disappear");
      }
  });

  $("#jsSearchButton,#jsSearchCancelButton").on("click", function() {
    if ($("#searchform").hasClass("active")) {
      $("#searchform").removeClass("active");
      $("#JsCatBar").addClass("active");
      $("#jsSearchButton").css("color", "#ddd");
      $("#category-swipe").removeClass("disappear");
      $(".search-overlay").removeClass("is-show");
      $("body").removeClass("o-hidden");
    } else {
      $("#searchform").addClass("active");
      $("#JsCatBar").removeClass("active");
      $("#jsSearchButton").css("color", "#ff7100");
      $("input[name=q]").focus();
      $("#category-swipe").addClass("disappear");
      $(".search-overlay").addClass("is-show");
      $("body").addClass("o-hidden");
    }
  });

  $("#global-search").focusin(function() {
    $(".global-search-results").addClass("is-show");
  });

  $("#jsListButton").on("click", function(e) {
    $(".jsContentList").addClass("list-type");
    $(".jsContentList").removeClass("grid-type");
    $("#jsListButton").removeClass("is-hide");
    $("#jsGridButton").addClass("is-hide");
  });

  $("#jsGridButton").on("click", function(e) {
    $(".jsContentList").addClass("grid-type");
    $(".jsContentList").removeClass("list-type");
    $("#jsListButton").addClass("is-hide");
    $("#jsGridButton").removeClass("is-hide");
  });

  $("#jsDropdownArrow").on("click", function(e) {
    $("#jsThreadSort").toggleClass("is-open");
    $(document.body).toggleClass("o-hidden");
  });

  $("#jsListSubButton").on("click", function(e) {
    $("#thumbSubForum").addClass("is-hide");
    $("#listSubForum").removeClass("is-hide");
    $("#jsListSubButton").removeClass("is-hide");
    $("#jsGridSubButton").addClass("is-hide");
  });

  $("#jsGridSubButton").on("click", function(e) {
    $("#listSubForum").addClass("is-hide");
    $("#thumbSubForum").removeClass("is-hide");
    $("#jsListSubButton").addClass("is-hide");
    $("#jsGridSubButton").removeClass("is-hide");
  });

  $(".threadSortRadio").on("click", function() {
    $(this).find("input:radio").prop("checked", true);
  });

  $(".jsShowHide").on("click", function(e) {
    $(this).toggleClass("is-unactive");
    $(this).siblings(".jsExpand").toggleClass("is-hide");
    if ($(this).hasClass("is-unactive")) {
      $(this).find("i").attr("class", "fa fa-chevron-down");
      $(this).find("i").removeClass("fa-chevron-up");
    } else {
      $(this).find("i").attr("class", "fa fa-chevron-up");
      $(this).find("i").removeClass("fa-chevron-down");
    }
  });

  $(".is-channel-item").on("click", function() {
    $("#jsChannelFilter").toggleClass('is-open');
    $(document.body).toggleClass("o-hidden");
  });

  scrollHeader();

  $(".jsBotScroll").on("scroll", function() {
    var cur = $(this).scrollLeft();
    if (cur == 0) {
      $(".jsContainerCat").removeClass("headerShadow");
    } else {
      var max = $(this)[0].scrollWidth - $(this).parent().width();
      if (cur == max) {
        $(".jsContainerCat").removeClass("headerShadow");
      } else {
        $(".jsContainerCat").addClass("headerShadow");
      }
    }
  });

  // // Podcast Widget Header
  // if($(".jsPodcastWidget").length > 0){
  //   var  widthFlex = $(".jsPodcastWidget").outerWidth() - 40 - 40;
  //   $(".jsPodcastWidgetFlex").css("width",widthFlex + "px");
  //   var innerWidth = $(".jsAudioTitle")[0].scrollWidth;
  //   var wrap = $(".jsAudioContainer").width();
  //   if (innerWidth > wrap)
  //   {
  //     $(".jsAudioContainer").addClass("is-running");
  //     $(".jsAudioLink").clone().prependTo( ".jsAudioTitle" );
  //   }
  // }

  $(".jsBotScroll").trigger("scroll");

  $(".pass-trigger").on("click", function() {
    if ($(this).find(".pass-icon-eye").hasClass("fa-eye-slash")) {
      $(this).find(".pass-icon-eye").addClass("fa-eye").removeClass("fa-eye-slash");
      $(".pass-input-control").prop("type", "text");
    } else {
      $(this).find(".pass-icon-eye").addClass("fa-eye-slash").removeClass("fa-eye");
      $(".pass-input-control").prop("type", "password");
    }
  });

  $(".jsSignUpTab").on("click", function() {
    if ($(".jsSignInTab").hasClass("active")) {
      $(".jsSignInTab").removeClass("active");
      $(".jsSignUpTab").addClass("active");
      $(".signInContent").hide();
      $(".signUpContent").show();
    }
  });

  $(".jsSignInTab").on("click", function() {
    if ($(".jsSignUpTab").hasClass("active")) {
      $(".jsSignUpTab").removeClass("active");
      $(".jsSignInTab").addClass("active");
      $(".signInContent").show();
      $(".signUpContent").hide();
    }
  });

  $(".jsMentionBtn").on("click", function(e) {
    $(".jsMentionWrapper").toggleClass("is-open");
    $(".jsMentionBtn").toggleClass("is-active");
    if($('.jsMentionWrapper').hasClass("is-open")){
      setTimeout(function(){
          $('.jsMentionWrapper input').focus();
      }, 310);

    }
  });

  $(".jsSmiliesBtn").on("click", function(e) {
    $(".jsSmiliesWrapper").toggleClass("is-open");
    $(".jsSmiliesBtn").toggleClass("is-active");
  });

  $('.detailSection').on('click', ".jsSmiliesTabNavHead li a", function(e) {
    var attrValueState = $(this).attr('href');
    $('.jsSmiliesTabNavHead li' + attrValueState).show().siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    $("div.jsSmiliesTabContent [data-id]").hide();
    $("div.jsSmiliesTabContent [data-id='" + $(this).attr("href").replace("#", "") + "']").show();
    e.preventDefault();
  });

  $(".jsTabNav li a").on("click", function(e) {
    var currentAttrValue = $(this).attr("href");
    $(".jsTabWrapper " + currentAttrValue).show().siblings().hide();
    $(this).parent("li").addClass("active").siblings().removeClass("active");
    e.preventDefault();
  });

  $(".jsTabNav.cendol").on("click", function(e) {
    $(".modal-header").addClass("cendol");
    if ($(".modal-header").hasClass("bata")) {
      $(".modal-header").removeClass("bata");
    }
  });

  $(".jsTabNav.bata").on("click", function(e) {
    $(".modal-header").addClass("bata");
    if ($(".modal-header").hasClass("cendol")) {
      $(".modal-header").removeClass("cendol");
    }
  });

  $(".jsDeletePoll").on("click", function(e) {
    swal({
        text: "Poll akan dihapus. Yakin?",
        icon: "warning",
        dangerMode: true,
        buttons: ["Batal", "Hapus"],
      })
      .then(function(akanHapus) {
        if (akanHapus) {
          $('.jsPollForm').hide();
          $('.jsPollToggle').removeClass("is-active");
          $('.jsPollToggle').removeClass("created-poll");
        }
      });
  });


  // $(".jsSaveDraft").on("click", function(e)  {
  //     swal({
  //         title: "Berhasil menyimpan draft!",
  //         text: "Ayo, buat thread lagi...",
  //         icon: "success",
  //         button: "Okay",
  //     })
  // });

  // https://stackoverflow.com/questions/3964710/replacing-selected-text-in-the-textarea
  function getInputSelection(el) {
    var start = 0,
      end = 0,
      normalizedValue, range,
      textInputRange, len, endRange;

    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
      start = el.selectionStart;
      end = el.selectionEnd;
    } else {
      range = document.selection.createRange();

      if (range && range.parentElement() == el) {
        len = el.value.length;
        normalizedValue = el.value.replace(/\r\n/g, "\n");

        // Create a working TextRange that lives only in the input
        textInputRange = el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        endRange = el.createTextRange();
        endRange.collapse(false);

        if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
          start = end = len;
        } else {
          start = -textInputRange.moveStart("character", -len);
          start += normalizedValue.slice(0, start).split("\n").length - 1;

          if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
            end = len;
          } else {
            end = -textInputRange.moveEnd("character", -len);
            end += normalizedValue.slice(0, end).split("\n").length - 1;
          }
        }
      }
    }
    return {
      start: start,
      end: end
    };
  }

  function replaceSelectedText(el, text) {
    var sel = getInputSelection(el),
      val = el.value;
    el.value = val.slice(0, sel.start) + text + val.slice(sel.end);
  }

$(".jsInsertURL").on("click", function(e) {
    var textArea = document.getElementById("jsCreateThread");
    var indexSelection = getInputSelection(textArea);
    selectedText = textArea.value.slice(indexSelection.start,indexSelection.end);

    var prompt =
      `<div id="insert_url">\
            <div class="Mb(20px) Ta(start)">\
                <div class="Fz(13px) Mb(10px)">\
                    URL :\
                </div>\
                <input class="swal-content__input" id="urlValue" autocomplete="off">\
            </div>\
            <div>\
                <div class="Fz(13px) Mb(10px) Ta(start)">\
                    Teks yang ditampilkan :\
                </div>\
                <input value="` + selectedText + `" class="swal-content__input" id="urlText" autocomplete="off">\
            </div>\
        </div>`;
    var input_promp = $.parseHTML(prompt);
    swal({
        content: {
        element: input_promp[0],
        attributes: {
            placeholder: "Paste your URL",
            type: "text"
        }
    },
    }).then(function(input) {
        if (input)
        {
            var urlVal = $('#urlValue').val();
            var texttoDisp = $('#urlText').val();
            if (urlVal)
            {
                var embed_url = '[url=' + urlVal + ']' + texttoDisp + '[/url]';
                replaceSelectedText(textArea, embed_url);
            }
        }
    })
  });

    // $(".jsEmbedMedia").on("click", function(e)  {
    //     var embed_media =
    //     `<div class="embedMediaWrapper">\
    //         <div class="Mt(10px)">\
    //             <div class="Fz(13px) Mb(10px)">\
    //                 Embed Media\
    //             </div>\
    //             <div class="Ta(c) Mb(10px)">\
    //                 <i class="fab fa-youtube"></i>\
    //                 <i class="fab fa-vimeo-square"></i>\
    //                 <i class="fab fa-soundcloud"></i>\
    //                 <i class="fab fa-twitch"></i>\
    //                 <i class="fab fa-facebook-square"></i>\
    //                 <i class="icon icon-facebook-video"></i>\
    //                 <i class="icon icon-daily-motion"></i>\
    //                 <i class="icon icon-smule"></i>\
    //             </div>\
    //             <input class="swal-content__input" id="embedMedia" placeholder="Masukan link media disini">\
    //         </div>\
    //     </div>`;
    //     var input_embed_media = $.parseHTML(embed_media);
    //     swal({
    //         content: {
    //         element: input_embed_media[0],
    //         attributes: {
    //             placeholder: "Paste your URL",
    //             type: "text"
    //         }
    //     }
    //     })
    // });

  // $(".jsEmbedMedia").on("click", function(e)  {
  //     var embed_media =
  //     `<div class="embedMediaWrapper">\
  //         <div class="Mt(10px)">\
  //             <div class="Fz(13px) Mb(10px)">\
  //                 Embed Media\
  //             </div>\
  //             <div class="Ta(c) Mb(10px)">\
  //                 <i class="fab fa-youtube"></i>\
  //                 <i class="fab fa-vimeo-square"></i>\
  //                 <i class="fab fa-soundcloud"></i>\
  //                 <i class="fab fa-twitch"></i>\
  //                 <i class="fab fa-facebook-square"></i>\
  //                 <i class="icon icon-facebook-video"></i>\
  //                 <i class="icon icon-daily-motion"></i>\
  //                 <i class="icon icon-smule"></i>\
  //             </div>\
  //             <input class="swal-content__input" id="embedMedia" placeholder="Masukan link media disini">\
  //         </div>\
  //     </div>`;
  //     var input_embed_media = $.parseHTML(embed_media);
  //     swal({
  //         content: {
  //         element: input_embed_media[0],
  //         attributes: {
  //             placeholder: "Paste your URL",
  //             type: "text"
  //         }
  //     }
  //     })
  // });


  $('.createThreadWrapper').on('click', '.jsAccordionHeading', function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('reveal')) {
      $this.next().removeClass('reveal');
      $this.next().slideUp(350);
      $this.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    } else {
      $this.parent().parent().find('.jsAccordionItem .jsAccordionContent').removeClass('reveal');
      $this.parent().parent().find('.jsAccordionItem .jsAccordionContent').slideUp(350);
      $this.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $this.next().toggleClass('reveal');
      $this.next().slideToggle(350);
    }
  });

  /**
   *Bind clicks modal
   */
  bindJsRevealModal();
  bindJsCloseModal();

  /**
   *bind textarea on post list
   */
  $(document).on("click", function(event) {
    var textArea = $(".jsTextareaBB").find("textarea").length;
    if (textArea > 0) {
      if ($(".jsTextareaBB").find("textarea").val().length > 0) {
        $(".jsTextareaBB").show();
        $(".jsTextareaReply").hide();
      } else if (!$(event.target).closest(".jsTextareaBB, .reply-btn").length) {
        $(".jsTextareaBB").hide();
        $(".jsTextareaReply").show();
      }
    }
  });

  $(".jsTextareaReply").on("click", function(event) {
    $(".jsTextareaBB").show();
    $(".jsTextareaReply").hide();
    $(".jsTextareaBB").find("textarea").focus();
    event.stopPropagation();
  });

  //SET BACK TO TOP POSITION BASED ON STICKY BANNER
  if ($(".adsSection").length > 0) {
    $(".arrowBacktoTop").css("bottom", "60px");
  } else {
    $(".arrowBacktoTop").css("bottom", "0px");
  }

  // JS FROM BACKEND

  if ($('#ht-loader').length) {
    function htload() {
      if (isElementInViewport($('#ht-loader')) && ht_is_loading == false) {
        is_search = false;
        load_ht();
      }
    }
    window.addEventListener("resize", htload, {
      passive: !0
    });
    window.addEventListener("scroll", htload, {
      passive: !0
    });
    window.addEventListener("touch", htload, {
      passive: !0
    });
    window.addEventListener("click", htload, {
      passive: !0
    });
  };

  if ($('#oh-loader').length) {
    function ohload() {
      if (isElementInViewport($("#oh-loader")) && oh_is_loading == false)
        load_oh();
    }
    window.addEventListener("resize", ohload, {
      passive: !0
    });
    window.addEventListener("scroll", ohload, {
      passive: !0
    });
    window.addEventListener("touch", ohload, {
      passive: !0
    });
    window.addEventListener("click", ohload, {
      passive: !0
    });
  };

  if ($("#tl-loader").length) {
    function tlload() {
      if (isElementInViewport($("#tl-loader")) && tl_is_loading == false) {
        load_tl();
        dataLayer.push({
          'event': 'trackEvent',
          'eventDetails.category': tracking_ref,
          'eventDetails.action': 'load more ' + tl_page,
          'eventDetails.label': feed_track,
          'threadListSort' : tl_sort_track
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

  $(".jsSignUpTab").on("click", function() {
    if ($("#securitytokensignup").val() == "") {
      $.get("/register/generate_captcha", function(e) {
        result = JSON.parse(e);
        $("#captcha_forms").html(result.captcha_form);
        $("#securitytokensignup").val(result.securitytoken);
      });
    }
  });

  $("#global-search").focusin(function() {
    $(".global-search-results").addClass("is-show");
    get_search_dropdown();
  });

  /*
  Bind link View All Moderated on Profile
   */
  $(".moderate-di").on("click", function(e) {
    e.preventDefault();
    moderate();
  });

  /*
  Bind link View All Badges on Profile
   */
  $(".all-badges").on("click", function(e) {
    e.preventDefault();
    badge();
  });

  $('#markItUpMessage').on('click', ".created-poll", function() {
    changeValueCreatedPoll(this);
  });

  $('.jsDeletePoll').on('click', function() {
    changeValueCreatedPoll(this);
  });



  checkcreatedPoll();

  function changeValueCreatedPoll(obj) {
    var value = $("input[name=created_poll]").val();
    $("input[name=created_poll]").val(1 - value);
  }

  function checkcreatedPoll() {
    if ($("input[name=created_poll]").val() == 1) {
      $('.jsPollToggle').addClass("created-poll");
    }
  }

  bindForumAllSearchResult();

  bindForumAllSubscribeEvent();

  bindForumAllIconCancel();

  bindOpenWhoPosted();
});


// @codekit-prepend "main/main-backend.js";
// @codekit-prepend "main/main-click.js";
// @codekit-prepend "main/main-scroll.js";
// @codekit-prepend "main/main-ready.js";
