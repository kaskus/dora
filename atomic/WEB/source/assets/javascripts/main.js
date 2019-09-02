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
  $(document).on("keyup","#search",function() {
    var term = $(this).val().trim();
    if($('#category_search').length){
      if(term.length > 0) {
        $('#category_search').show();
          var searchHlTerm = document.getElementsByClassName("searchHlTerm");
          for(var j = 0; j < searchHlTerm.length; j++){
            searchHlTerm[j].innerText = term;
          }
          var categorySearch = document.getElementsByClassName("categorySearch");
          for(var j = 0; j < categorySearch.length; j++){
          categorySearch[j].setAttribute('data-term', term);
        }
      } else {
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
   * general notice
   */
  bindNotice();

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
   * set feed display
   */
  bindSetFeedDisplay();

  /*
   * set button subscribe
   */
  bindSetjsButtonSubscribe();
  /**
   * set button feed subscribe
   */
  bindSetjsCategoryPersonalizationItem();


  /*
   * show list of thread in forum landing / threadlist
   */
  if ($("#threadlist-loading-area").length) {
    function tlload() {
      if (isElementInViewport($("#threadlist-loading-area")) && tl_is_loading == false) {
        data_sort = $('#tl_sort').val();
        data_cursor = $('#tl_cursor').val();
        data_order = $('#tl_order').val();
        data_feed = $('#tl_feed').val();
        show_thread_list(data_sort, data_cursor, data_order, data_feed);

        tracking_ref = $('#tl_tracking_ref').val();
        data_sort_track = $('#tl_sort_track').val();
        feed_track = $('#feed_track').val();
        dataLayer.push({
          'event': 'trackEvent',
          'eventDetails.category': tracking_ref,
          'eventDetails.action': 'load more ' + tl_page,
          'eventDetails.label': feed_track,
          'threadListSort' : data_sort_track
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

function stickyShare(){
  var scrollValue = $(window).scrollTop();
  var scrollLimit = $(".jsThreadRating");
  var firstPost = $('.postItemFirst');
  var startShow = firstPost.offset().top + firstPost.height();
  if (scrollValue < startShow && scrollValue > scrollLimit.offset().top){
    $('.jsShareBtn').addClass("scrolled");
  }
  else {
    $('.jsShareBtn').removeClass("scrolled");
  }
}

$(document).ready(function() {

  $(document).on('click', '.jsSearchStickyBtn', function(e) {
    $(".jsSearchSticky").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
      if ($(".jsSearchSticky").hasClass("is-clicked")) {
       $('.jsSearchFormInput').focus();
      }
    });
    $(".jsSearchSticky").addClass("is-clicked");
    $('.jsSearchResult').addClass('is-open');
    $('.jsNavHeaderOverlay').show();
  });

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
    if ($(".jsTabButton").hasClass("cendol is-active")) {
      $(this).closest('.jsTabComponent').find('.jsTabLine').css("background-color","#50ae5e");
      $(this).parents().closest('.modal-section').find('.modal-header > div').addClass("cendol");
      if ($(".modal-header > div").hasClass("bata")) {
        $(".modal-header > div").removeClass("bata");
      }
      else {
        $(".modal-header > div").removeClass("cendol");
      }
    }
    else if ($(".jsTabButton").hasClass("bata is-active")) {
      $(this).closest('.jsTabComponent').find('.jsTabLine').css("background-color","#d0021b");
      $(this).parents().closest('.modal-section').find('.modal-header > div').addClass("bata");
    }
    else {
      $(this).closest('.jsTabComponent').find('.jsTabLine').css("background-color","#1998ed");
    }
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
      $('.toggleMenu').removeClass('is-visible');
      $('.jsButtonToggle').removeAttr('style');
      $('.jsSmiliesContainer').addClass('is-visible');
      $(this).css('color', '#1998ed');
    } else {
      $('.jsSmiliesContainer').removeClass('is-visible');
      $(this).removeAttr('style');
    }
  });

  $('.jsButtonMention').click(function() {
    if (!$('.jsMentionContainer').hasClass('is-visible')) {
      $('.toggleMenu').removeClass('is-visible');
      $('.jsButtonToggle').removeAttr('style');
      $('.jsMentionContainer').addClass('is-visible');
      $(this).css('color', '#1998ed');
      setTimeout(function(){
          $('.jsMentionContainer input').focus();
      }, 310);
    } else {
      $('.jsMentionContainer').removeClass('is-visible');
      $(this).removeAttr('style');
    }
  });

  $('.jsSubscribeThreadIcon').click(function() {
    subscribeUnsubscribe($(this));
  });

  $('#jsReplyTextArea').focus(function() {
    showReplyTools();
  });

  var lastElementClicked;

  $(document).mousedown(function(e) {
      lastElementClicked = $(e.target);
  });

  $(document).mouseup(function(e) {
      lastElementClicked = null;
  });

  $('#jsReplyTextArea').blur(function(e) {
    if (!$(lastElementClicked).closest('.jsReplyTools').length && !$(lastElementClicked).closest('.jsButtonReply').length) {
      if ($('#jsReplyTextArea').length && $('#jsReplyTextArea').val().length == 0) {
        $('.jsReplyTools').hide();
        $('.jsReplyUser').addClass('Pos(a)');
        $('.jsReplyUser span').hide();
        $('#jsReplyTextArea').addClass('Px(40px)');
      }
    }
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
    // if (modalElement.find('.jsTabComponent').hasClass('modalWhoCendoled')) {
    //   $('.jsTabComponent').find('.cendol').trigger('click');
    //   $('.modal-section').find('.modal-header > div').addClass('cendol');
    // }
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
    $('.jsSearchStickyWrapper').css('min-height', '500px');
    //$('.jsNavHeaderOverlay').css('top', ($('.jsNavHeader').offset().top + 90 - $(window).scrollTop())+'px');
  });

  $('.jsSearchFormInput').blur(function() {
    $('.jsSearchResult').removeClass('is-open');
    $('.jsNavHeaderOverlay').hide();
    $('.jsSearchStickyWrapper').css('min-height', '30px');
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
    var totalIndex = $(".jsSearchResult .jsSearchWrapper li").length-1;
    var fidterm = '';
    var selectedElement = ".jsSearchResult .jsSearchWrapper li:eq(" + indexSelected + ")";
    if($(selectedElement).find('a').hasClass("categorySearch")) {
      if($(selectedElement).find('a').attr('data-forum-id') !== undefined) {
        if (event.which == 13 ) {
          event.preventDefault();
          fidterm = $(selectedElement).find('span').text();
          fidterm += " fid:" + $(selectedElement).find('a').attr('data-forum-id');
          window.location.href = "/search/forum/?q=" + fidterm;
        }
      }
    }
    if ( event.which == 38 ) {
      if(indexSelected>0){
        indexSelected--;
      }
      else{
        indexSelected = totalIndex;
      }
      setSelectedSearch();
      return false;
    }
    else if( event.which == 40 ) {
      if(indexSelected<totalIndex){
        indexSelected++;
      }
      else{
        indexSelected = 0;
      }
      setSelectedSearch();
    }
  });

  function setSelectedSearch() {
    var selectedElement = ".jsSearchResult .jsSearchWrapper li:eq(" + indexSelected + ")";
    if($(selectedElement).find('a').hasClass("categorySearch")) {
        var selectedElementValue  = $(selectedElement).find('span').text();
    } else {
      var selectedElementValue = $(selectedElement).find('a').text();
    }

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

    if (!$(event.target).closest('.jsPopover, .jsUserMenu, .jsNotificationMenu, .jsFlyoutMenu, .jsSearchOutterWrapper, .jsSearchStickyBtn,  .jsReplyTools, #jsReplyTextArea, .jsSmilies, .jsMention, .jsSearchAnchorSticky ').length) {
      $('.jsPopoverMenu').removeClass('is-visible');
      $('.jsSmiliesContainer').removeClass('is-visible');
      $('.jsButtonSmilies').removeAttr('style');
      $('.jsMentionContainer').removeClass('is-visible');
      $('.jsButtonMention').removeAttr('style');
      $('.jsUserDropdownMenu').removeClass('is-visible');
      $('.jsNotificationDropdownMenu').removeClass('is-visible');
      $(".jsSearchSticky").removeClass("is-clicked");
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
