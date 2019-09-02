// @codekit-prepend "../backend/backend-subforum.js";
// @codekit-prepend "../backend/backend-thread.js";
// @codekit-prepend "../backend/backend-user.js";

var catLoaded, retryFetch = true;


//share fb
function threadlist_facebook_share(url, data_threadid) {

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

function show_signin_popup() {
  $.ajax({
    url: "/user/login/",
    success: function(a) {
      $("#jsModalSignin .modal-body").html(a),
        $("#username").focus();
    }
  })
}

function show_signup_popup() {
  $.ajax({
    url: "/register/index/",
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
    if($(this).find('a').hasClass("categorySearch")) {
      var fidterm = $(this).find('a').attr('data-term');
      if($(this).find('a').attr('data-forum-id') !== undefined) {
        fidterm += " fid:" + $(this).find('a').attr('data-forum-id');
      }
      $("#search").val(fidterm);
    } else {
      $("#search").val($(this).text());
    }
    $("#btn-search").click();
  });
}

function show_template_search(terms, div_id, div_to_hide, last_data) {
  var temp_template = '';
  for (var i in terms) {
    temp_template += '<li><a href="javascript:void(0);" class="D(b) P(5px) C(#484848) Fz(12px) Td(n):h Bgc(#f2f2f2):h resultTerm">' + terms[i] + '</a></li>';
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
               if (el.attr('data-style') == 'button-forum') {
               var spanEl = el.find('span:first');
               spanEl.text('Subscribed');
               spanEl.removeClass("Bgc(#f8c31c)");
               spanEl.addClass("Bgc(#b3b3b3)");
             } else if (el.attr('data-style') == 'menu-search'){
               var iEl = el.find('i:first');
               iEl.removeClass("C(#b3b3b3) D(n) C(#f8c31c):h");
               iEl.addClass("C(#b3b3b3):h C(#f8c31c)");
             } else {
               var iEl = el.find('i:first');
               iEl.removeClass("C(#b3b3b3) D(n)");
               iEl.addClass("C(#f8c31c)");
             }

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
              if (el.attr('data-style') == 'button-forum') {
               var spanEl = el.find('span:first');
               spanEl.text('Subscribe');
               spanEl.removeClass("Bgc(#b3b3b3)");
               spanEl.addClass("Bgc(#f8c31c)");
             } else if (el.attr('data-style') == 'menu-search'){
               var iEl = el.find('i:first');
               iEl.removeClass("C(#b3b3b3):h C(#f8c31c)");
               iEl.addClass("C(#b3b3b3) D(n) C(#f8c31c):h");
             } else {
               var iEl = el.find('i:first');
               iEl.removeClass("C(#f8c31c)");
               iEl.addClass("C(#b3b3b3) D(n)");
             }
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
