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

        return '<img style="max-width:100%" src="' + sceditor.escapeUriScheme(content) + '" />';
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
    $('.jsMentionContainer').remove();
    $('.sceditor-button-mention').removeClass("active");
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
        <input value="` + selectedText + `" class="swal-content__input" id="jsLinkMediaInputText" placeholder="Link Url">\
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
          sceInstance.insert("[url="+linkInput+"]" + linkText, "[/url]");
        }
        else{
          if (linkInput !== "") {
            sceInstance.insert("[url=" + linkInput + "]", "[/url]");
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

  // Mention Button
  sceditor.command.set("mention", {
    exec: function() {
      toggleMention(this);
    },
    txtExec: function() {
      toggleMention(this);
    },
    tooltip: "Buat Mention"
  });

  var mentionToolbar = `<div style=\"right: -86px;bottom: 43px;\" class=\"jsMentionSCEditor jsMentionContainer W(205px) Pos(a) Z(1) B(25px) \">\
    <div class=\"W(15px) H(15px) Bgr(nr) Bgz(ct) Bgp(c) Bgi(bgTriangleGrey) Pos(a) Start(8px) B(-11px) Rotate(180deg)\"></div>\
    <div class=\"Bd(borderSolidLightGrey) Bxsh(boxShadow)\">\
      <div class=\"D(f) Pos(r) Bdb(borderSolidLightGrey)\">\
        <input type=\"text\" class=\"W(100%) autocomplete-mention Bd(none) Fz(14px) C(#484848) Py(15px) Pstart(35px) Pend(15px)\" placeholder=\"Cari username\"/>\
        <i class=\"Pos(a) T(17px) Start(15px) fas fa-search C(c-grey)\"></i>\
      </div>\
      <ul class=\"Bgc(c-white) mentionList\">\
      </ul>\
    </div>\
  </div>\
`;

  function toggleMention(sceInstance) {
    $('.jsExtraForm').hide();
    $('.sceditor-button-polling.active, .sceditor-button-media.active, .sceditor-button-smilies.active').removeClass('active');

    if ($('.jsMentionContainer').length == 0) {
      $(mentionToolbar).appendTo('#jsToolbarSCEditor');
      $('.sceditor-button-mention').addClass("active");
      $('.jsMentionContainer input').focus();
      //var scrollTo = $("#jsToolbarSCEditor").offset().top - ($(window).height() - $('.jsEmbedMediaForm').outerHeight(true) - $('#jsToolbarSCEditor').outerHeight(true)) + 50;
    } else {
      $('.jsMentionContainer').remove();
      $('.sceditor-button-mention').removeClass("active");
      //var scrollTo = $("#jsToolbarSCEditor").offset().top - ($(window).height() - $('#jsToolbarSCEditor').outerHeight(true)) + 50;
    }
    // var selectedText = sceInstance.toBBCode(sceInstance.getRangeHelper().selectedHtml().toString());
    // if(selectedText != ""){
    //   alert("jon");
    // }
    // else{
    //   sceInstance.insert('@');
    //   sceInstance.blur();
    //   sceInstance.focus();
    //   $(sceditorInstance.getBody()).click();
    // }

  }

  $(document).on('click', function(event) {
    if (!$(event.target).closest('.sceditor-button-mention, .jsMentionSCEditor ').length) {
      if($('.jsMentionSCEditor').length){
        $('.jsMentionSCEditor').remove();
        $('.sceditor-button-mention').removeClass("active");
      }
    }
  });



  var mentionTemplate = '<a class=\"mention\" href="' + KASKUS_URL + '/@{username}">@{username}</a>';
  sceditor.formats.bbcode.set(
    'mention', {
      tags: {
        "a": {
          class: ['mention']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
       var username = String($(element).attr('href')).split('@');
       return '[mention]' + username[1] + '[/mention]';
      },
      html: function(token, attr, content) { // bbcode2html
        return mentionTemplate.replace(/\{username\}/gi, content);
      },
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

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

  var twitterTemplate = '<div class="sceditor-ignore" style="margin:0 auto;">\
							<div style="position: relative;margin-top: 15px;margin-bottom: 15px;text-align: center">\
								<img style="width: 480px" src="'+ assetsFolderNew +'/images/image-placeholder-twitter.gif">\
							</div>\
						</div>\
						<div class="embed_twitter"  data-url="https://twitter.com/{user}/status/{id}"></div> ';

   sceditor.formats.bbcode.set(
    'twitter', {
      tags: {
        "div": {
          "class": ['embed_twitter']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
		var reg = new RegExp(/(?:http(?:s)?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/);
		var match = reg.exec($(element).data('url'));
		if(match !== null)
		{
			return '[twitter="' + match[1] + '"]' + match[3] + '[/twitter]';
		}
		else return '';
      },
      html: function(token, attr, content) { // bbcode2html
        return twitterTemplate.replace(/\{id\}/gi, content).replace(/\{user\}/gi, attr.defaultattr);
      },
      breakAfter: true,
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

   var instagramTemplate = '<div class="sceditor-ignore wrapperEmbedIg" style="position:relative; margin:15px auto; max-width:480px; text-align:center;"><img style="width:480px;" src="'+assetsFolderNew+'/images/image-placeholder-ig.gif"><div style="position:absolute; top:72px; left:0; width:100%; height:100%; z-index:5;"><img style="width:480px; height:480px; object-fit:cover;" src="https://instagram.com/p/{code}/media/?size=m"></div></div><div class="embed_instagram" data-url="{url}" data-code="{code}"></div> ';

   sceditor.formats.bbcode.set(
    'instagram', {
      tags: {
        "div": {
          class: ['embed_instagram']
        }
      },
      allowsEmpty: true,
      format: function(element, content) { // html2bbcode
        return '[instagram]' + $(element).data('url') + '[/instagram]';
      },
      html: function(token, attr, content) { // bbcode2html
        if (instagramCode = getInstagramCode(content))
          return instagramTemplate.replace(/\{url\}/gi, content).replace(/\{code\}/gi, instagramCode);
        else
          return '';
      },
      breakAfter: true,
      quoteType: sceditor.BBCodeParser.QuoteType.auto
    }
  );

  function getInstagramCode(url) {
    var regExp = /((?:(?:(?:(?:https?)(?::\/\/))?(?:www\.?)?)?)(?:instagram\.com|instagr\.am)\/?([a-zA-Z0-9_.]{1,30})?\/p\/([A-Za-z0-9_\-]+)\/?)/;
    var match = url.match(regExp);
    return (match) ? match[3] : false;
  }


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
    $('.jsMentionContainer').remove();
    $('.sceditor-button-mention').removeClass("active");
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
  var pic13 = new Image();
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
  pic13.src = assetsImageLocation + "ic-editor-mention-blue.svg";


  // Init Script

  var textareaSCeditor = document.querySelector('.jsCreateThreadContentSCEditor');
  var toolbarSCEditor = document.getElementById('jsToolbarSCEditor');

  var heightSCEditor = $(window).height() - $('.jsCreateThreadHeader').outerHeight() - $('.jsCreateThreadTitle').outerHeight() - $('.jsToolbarSCEditorAnchor').outerHeight() - 90 - 20 - 30 - 20 - 36 - 36;


  $(window).on('resize', function() {
    var heightSCEditor = $(window).height() - $('.jsCreateThreadHeader').outerHeight() - $('.jsCreateThreadTitle').outerHeight() - $('.jsToolbarSCEditorAnchor').outerHeight() - 90 - 20 - 30 - 20 - 36;
    sceditorInstance.height(heightSCEditor);
  });

  var createThreadEditor = sceditor.create(textareaSCeditor, {
    style: sceditorStyleLocation,
    spellcheck: false,
    plugins: "bbcode,undo",
    emoticonsEnabled: false,
    format: 'bbcode',
    toolbar: 'bold,italic,underline|left,center,right|font,color,size|link,spoiler,quote,source,validate|polling|mention,media,smilies',
    toolbarContainer: toolbarSCEditor,
    resizeMaxHeight: -1,
    height: heightSCEditor,
    icons: 'custom',
    autoExpand: true,
    resizeEnabled: false,
    placeholder: 'Mulai Menulis!'
  });



  var sceditorInstance = sceditor.instance(textareaSCeditor);
  $(sceditorInstance.getBody()).addClass("bodyTextArea");

  if (sceditorInstance.val() != '') {
    $(sceditorInstance.getBody()).removeClass("placeholder");
  }

  $('.sceditor-color-option[data-color="#484848"]').addClass('is-selected');


  sceditorInstance.keyPress(function(e) {
    if (e.which == 13) {
      if (!($(window).scrollTop() + $(window).height() > $(document).height() - $('.jsToolbarSCEditorAnchor').height())) {
        //console.log("lagi di atas");
      } else {
        //console.log("lagi dibawah");
        $("html, body").animate({
          scrollTop: $(document).height()
        }, 100);
      }
    }
  });



  sceditorInstance.bind('paste', function(event) {
    setTimeout(function(){
      sceditorInstance.insert(' ');
      sceditorInstance.val().substring(0, sceditorInstance.val().length - 1);
    }, 10);

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

  // var ifr = $('.jsCreateThreadContent iframe')[0];
  // $(sceditorInstance.getBody()).atwho('setIframe', ifr).atwho({
  //   at: "@",
  //   limit: 5,
  //   displayTimeout: 150,
  //   displayTpl: "<li class='D(f)'><img class='Bdrs(50%) Mend(10px)' src='../assets/images/image-square3.png' height='35' width='35'/> <div class='Fx(flexOne)'><div>${name}</div><div class='Fz(11px) small'>newbie</div></div> </li>",
  //   insertTpl: "<a href='#' class='mention'>${atwho-at}${name}</a>",
  //   data: ['m', 'ma', 'moon', 'man', 'max', 'mix', 'medy', 'rimaamalia', 'dinarizky', 'andypamungkas', 'kibi', 'koponk', 'kpopluckynumber', 'wkwkwkland', 'Zulting', 'medydwi', 'zenk', 'prayogitio', 'dekampes', 'sevsweet07', 'maylina']
  // })

}


// var tribute = new Tribute({
//   values: [
//     {key: 'Phil Heartman', value: 'pheartman'},
//     {key: 'Gordon Ramsey', value: 'gramsey'}
//   ]
// })
//
// tribute.attach(sceditorInstance.getBody());
