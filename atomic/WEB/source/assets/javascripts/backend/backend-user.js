function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {
    type: mime
  });
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
      success: function(e) {
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
        var extension = input.files[0].name.split('.').pop().toLowerCase(),
          isAllowed = fileTypes.indexOf(extension) > -1;
        if (isAllowed) {
          openModal('jsModalCropAvatar');
          $('.cr-viewport').css('border-radius', '50%');
          setTimeout(function() {
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
            success: function(e, t) {
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
                  success: function(e) {
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
      size: {
        width: 400,
        height: 400
      },
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
        success: function(e, t) {
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
              success: function(e) {
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
      success: function(result) {
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
        var extension = input.files[0].name.split('.').pop().toLowerCase(),
          isAllowed = fileTypes.indexOf(extension) > -1;
        if (isAllowed) {
          openModal('jsModalCropCover');
          $('.cr-viewport').css('border-radius', '');
          setTimeout(function() {
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
      size: {
        width: 970,
        height: 160
      },
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
        success: function(e) {
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
    template = template.replace('{postContent}', '<div class="C(#9e9e9e) Fz(13px) Lh(18px) Wob(breakWord) LineClamp(2,35px)">' + notification.additional_data.post_content + '</div>');
  } else {
    template = template.replace('{postBodyAlign}', 'c');
    template = template.replace('{postContent}', '');
  }
  if (notification.additional_data.img_src) {
    template = template.replace('{imageSource}', '<div class="Fx(flexZero) Mstart(10px)"><img class="W(60px) H(60px)" src="' + notification.additional_data.img_src + '"></div>');
  } else {
    template = template.replace('{imageSource}', '');
  }
  return template
}


$(document).ready(function() {
  var notifications_loaded = false;
  var current_displayed_state = '';
  $('.get_notifications').click(function() {
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
      $('#notif_wrapper').html('<div class="Ta(c)">' + fetching_notif + '</div>');
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
  fetching_notif = '<img src="' + assetsFolderNew + '/images/icon-load-biru.gif" width="40" height="40" alt="notification-loading" />';
  html = '<div id="load_image" class="Ta(c)">' + fetching_notif + '</div>';
  return html;
}

function getTypeName(type) {
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
        template = template.replace('{postContent}', '<div class="C(#9e9e9e) Fz(13px) Lh(18px) Wob(breakWord) LineClamp(2,35px)">' + notification.additional_data.post_content + '</div>');
      } else {
        template = template.replace('{postBodyAlign}', 'c');
        template = template.replace('{postContent}', '');
      }
      if (notification.additional_data.img_src) {
        template = template.replace('{imageSource}', '<div class="Fx(flexZero) Mstart(10px)"><img class="W(60px) H(60px)" src="' + notification.additional_data.img_src + '"></div>');
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

$("#qr-code-btn").click(function() {
  $.ajax({
    url: "/profile/qrcode/" + $(this).data('userid'),
    success: function(result) {
      var qrcode = result['qrcode'];
      if (qrcode) {
        $('#img-qrcode').attr('src', 'data:image/png;base64,' + qrcode);
      } else {
        $('#img-qrcode').hide();
        $('#div-qr-code').html('Failed to generate QR Code');
      }
    }
  })
});

function ignoreDataLayer(type) {
  dataLayer.push({
    'event': 'trackEvent',
    'eventDetails.category': 'connection',
    'eventDetails.action': type,
    'eventDetails.label': 'profile'
  });
}

function add_connection(url, username, modal) {
  closeModal();

  var currentid = $('#currentid').val();
  var loginid = $('#loginid').val();
  var clickid = url.substring(url.lastIndexOf('/') + 1);
  $.post(url, {
    securitytoken: $('#sctoken').val()
  }, function(data) {
    $('#sctoken').val(data.securitytoken);
    if (data.result == true) {
      var followingInfo = parseInt($("#following_info").text().replace(/[,\.]/g, ''));
      var followerInfo = parseInt($("#follower_info").text().replace(/[,\.]/g, ''));
      if (data.connection_type == 'Unfollow') {
        if (currentid == loginid || clickid == currentid) {
          $('#unfollow_btn').show();
          $('#follow_btn').hide();

          if (currentid == loginid) {
            count = followingInfo + 1;
            $('#following_info').text(count.toLocaleString());
          }

          if (clickid == currentid) {
            count = followerInfo + 1;
            $('#follower_info').text(count.toLocaleString());
          }
        }

        followCustomMetrics('follow', loginid, clickid);
        showBottomToast('Agan berhasil mengikuti ' + username, 1500);
      } else if (data.connection_type == 'Follow') {
        if (currentid == loginid || clickid == currentid) {
          $('#follow_btn').show();
          $('#unfollow_btn').hide();
          $('#blocked_btn').hide();

          if (!data.hasOwnProperty('number_of_following')) {
            $('#block_btn').show();
            $('#unblock_btn').hide();
          } else {
            if (currentid == loginid) {
              count = followingInfo - 1;
              $('#following_info').text(count.toLocaleString());
            }

            if (clickid == currentid) {
              count = followerInfo - 1;
              $('#follower_info').text(count.toLocaleString());
            }
          }
        }

        if (!data.hasOwnProperty('number_of_following')) {
          ignoreDataLayer('unignore');
          showBottomToast('Agan telah menghapus ' + username + ' dari ignore list', 1500);
        } else {
          followCustomMetrics('unfollow', loginid, clickid);
          showBottomToast('Agan telah berhenti mengikuti ' + username, 1500);
        }
      } else if (data.connection_type == 'Unblock') {
        if (currentid == loginid || clickid == currentid) {
          var attr = $('#follow_btn').attr('style');

          $('#unblock_btn').show();
          $('#block_btn').hide();
          $('#follow_btn').hide();
          $('#unfollow_btn').hide();
          $('#blocked_btn').show();
          $('#unblock_btn').attr('data-id', 'unignore');

          if (attr && typeof attr !== typeof undefined && attr !== false) {
            if (currentid == loginid) {
              count = followingInfo - 1;
              $('#following_info').text(count.toLocaleString());
            }

            if (clickid == currentid) {
              count = followerInfo - 1;
              $('#follower_info').text(count.toLocaleString());
            }

            followCustomMetrics('ignore', loginid, clickid);
          } else {
            ignoreDataLayer('ignore');
          }
        }
        showBottomToast('Agan berhasil mengabaikan ' + username, 1500);
      }
    } else if (data.result == false) {
      showBottomToast(data.error_message, 1500);
    }

    if (modal == 'following') {
      setTimeout(function() {
        openModal('jsModalFollowingList')
      }, 1500);
      load_following_data();
    } else if (modal == 'follower') {
      setTimeout(function() {
        openModal('jsModalFollowersList')
      }, 1500);
      load_follower_data();
    }
  }, "json");
}

function followCustomMetrics(type, userid, targetid) {
  dataLayer.push({
    'event': 'trackEvent',
    'eventDetails.category': 'connection',
    'eventDetails.action': type,
    'eventDetails.label': 'profile',
    'Follow': type === 'follow' ? 1 : -1,
    'userID': userid,
    'userIDHit': targetid
  });
}


$(document).on({
  mouseenter: function() {
    $(this).find("span").text($(this).data('hover'));
    $(this).find("i").toggleClass("fa-user-lock fa-unlock");
  },
  mouseleave: function() {
    $(this).find("span").text($(this).data('default'));
    $(this).find("i").toggleClass("fa-user-lock fa-unlock");
  }
}, '.jsButtonBlockedHeader');


$(document).on({
  mouseenter: function() {
    $(this).text($(this).data('hover'));
  },
  mouseleave: function() {

    $(this).text($(this).data('default'));
  }
}, '.jsFollowingButton, .jsBlockedButton');

function set_data_unfol_modal(image_unfol, text_unfol, url_unfol, username, modal) {
  $("#jsModalConfirmUnfollow img").attr("src", image_unfol);
  set_show_modal_confirm(url_unfol, text_unfol, username, modal);
};

function set_data_unblock_modal(image_unblock, text_unblock, url_unblock, username, modal) {
  $("#jsModalConfirmUnblock img").attr("src", image_unblock);
  set_show_modal_confirm(url_unblock, text_unblock, username, modal);
};

function set_show_modal_confirm(url, text, username, modal) {
  $("#confirm-message").html(text);
  $(".confirm-action").attr("onclick", "add_connection('" + url + "', '" + username + "', '" + modal + "')");
}

var moderated_page = 1;
var load_more_forum = '<li id="forum-loadmore" class="D(f) Ai(c) Mb(15px)"><a data-id="moderator-load-more" onclick="load_more_moderated_forum()" href="javascript:void(0)" class="D(b) W(100%) Bgc(#1998ed):h C(#ffffff):h Td(n):h D(b) Py(7px) Px(7px) Fw(500) Ta(c) C(#1998ed) Bd(borderSolidBlue) Bdrs(5px) Mb(10px)">Load More</a></li>';

function moderate() {
  moderated_page = 1;
  $('#jsModalModerateList .data-moderate').empty();
  $.get("/profile/get_all_forum_moderate/?user_id=" + user_id + '&moderate_page=' + moderated_page, function(result) {

    if (typeof result !== 'object') {
      result = $.parseJSON(result);
    }
    forum_moderate = result.result.list_forum;
    forum_icon = result.result.forum_icon;
    var html_view = '';

    delete forum_moderate.total_post;
    $.each(forum_moderate, function(key, forum) {
      html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="' + forum_icon[key] + '" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><a class="Fw(500) C(c-normal))" href="' + forum.url + '">' + forum.name + '</a></div></div>';
    });

    moderated_page = result.result.next_page;
    page_remaining = result.result.page_remaining;
    $("#jsModalModerateList .data-moderate").append(html_view);
    if (page_remaining > 0) {
      $("#jsModalModerateList .data-moderate").append(load_more_forum);
    }
  });
}

function load_more_moderated_forum() {
  $.get("/profile/get_all_forum_moderate/?user_id=" + user_id + '&moderate_page=' + moderated_page, function(result) {

    if (typeof result !== 'object') {
      result = $.parseJSON(result);
    }
    forum_moderate = result.result.list_forum;
    forum_icon = result.result.forum_icon;
    var html_view = '';

    delete forum_moderate.total_post;
    $.each(forum_moderate, function(key, forum) {
      html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="' + forum_icon[key] + '" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><a class="Fw(500) C(c-normal))" href="' + forum.url + '">' + forum.name + '</a></div></div>';
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

function badge() {
  badge_page = 1;
  $('#jsModalBadgeList .data-badge').empty();
  $.get("/profile/get_all_badges/?user_id=" + user_id + '&badge_page=' + badge_page, function(result) {

    if (typeof result !== 'object') {
      result = $.parseJSON(result);
    }

    list_badge = result.result.badges;
    var html_view = '';
    delete list_badge.total_post;
    $.each(list_badge, function(key, badge) {
      html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="' + badge_url + badge.badge_id + '.gif" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><div class="Fw(500) ">' + badge.event + '</div><div class="Mt(5px) Fz(11px) C(c-grey)"></div></div></div>';
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

  $.get("/profile/get_all_badges/?user_id=" + user_id + '&badge_page=' + badge_page, function(result) {
    if (typeof result !== 'object') {
      result = $.parseJSON(result);
    }
    list_badge = result.result.badges;

    var html_view = '';
    delete list_badge.total_post;
    $.each(list_badge, function(key, badge) {
      html_view += '<div class="D(f) Ai(c) Py(10px)"><div class="Fx(flexZero)"><img src="' + badge_url + badge.badge_id + '.gif" class="W(50px) H(50px)" /></div><div class="Fx(flexOne) Ta(s) Mstart(20px)"><div class="Fw(500) ">' + badge.event + '</div><div class="Mt(5px) Fz(11px) C(c-grey)"></div></div></div>';
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
var loading_img = '<div class="W(100%) Ta(c) Mt(50px) Mb(50px)"><img src="' + assetsFolderNew + '/images/icon-load-biru.gif" width="40" height="40" alt="conection-loading" /></div>';
var tab = $('#tab-act').val();
var connection_type = 'following';
var userid = $("#current-user").val();
var current_page = $('#current-page').val();

function get_list_connection(connection_type) {
  $('#loading-area').html(loading_img);
  $('#pagination').html('');

  $.get("/profile/get_connection/?connection_type=" + connection_type + "&id=" + userid + "&theme=new_connection&page=" + current_page, function(data) {
    $('#loading-area').html(data.html);
    $('#pagination').html(data.pagination);
  }, "json");
}


function connection_action(url, username, type) {
  var loginid = $('#loginid').val();
  var clickid = url.substring(url.lastIndexOf('/') + 1);
  $.post(url, {
    securitytoken: $('#sctoken').val()
  }, function(data) {
    $('#sctoken').val(data.securitytoken);
    if (data.result == true) {
      get_list_connection(type);
      if (url.search('/follow') > 0) {
        followCustomMetrics('follow', loginid, clickid);
        showBottomToast('Agan berhasil mengikuti ' + username, 1500);
      } else if (url.search('/unfollow') > 0) {
        followCustomMetrics('unfollow', loginid, clickid);
        showBottomToast('Agan telah berhenti mengikuti  ' + username, 1500);
      } else if (url.search('/unblock') > 0) {
        ignoreDataLayer('unignore');
        showBottomToast('Agan telah menghapus ' + username + ' dari ignore list', 1500);
      }
    } else {
      showBottomToast(data.error_message, 3000);
    }
  }, "json");
}

function modal_action(url, username, type) {
  closeModal();
  connection_action(url, username, type);
}

function set_connection_unfol_modal(image_unfol, text_unfol, url_unfol, username, modal) {
  $("#jsModalConfirmUnfollow img").attr("src", image_unfol);
  $(".confirm-action").removeAttr("data-id").attr("data-id", "button-unfollow");
  connection_show_modal_confirm(url_unfol, text_unfol, username, modal);
};

function set_connection_unblock_modal(image_unblock, text_unblock, url_unblock, username, modal) {
  $("#jsModalConfirmUnblock img").attr("src", image_unblock);
  $(".confirm-action").removeAttr("data-id").attr("data-id", "button-unignore");
  connection_show_modal_confirm(url_unblock, text_unblock, username, modal);
};

function connection_show_modal_confirm(url, text, username, modal) {
  $("#confirm-subtitle, #confirm-message").html(text);
  $(".confirm-action, .confirm-action-unignore").attr("onclick", "modal_action('" + url + "', '" + username + "', '" + modal + "')");
}

function searchConnection() {
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
