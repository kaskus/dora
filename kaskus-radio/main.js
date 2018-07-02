var minimumDuration = 5;
var audioCurrentTime = 0;
var audioPercentageFinished = 0;
var audioTitle = "";
var dataId;
var dataIndex;
var episodes;
var colorTheme;
var currentPlayElement;
var newStartTime = 0;
var timeInterval;
window.dataLayer = window.dataLayer || [];

$(document).ready(function() {
  var pjax = new Pjax({
    elements: ".jsLink", // default is "a[href], form[action]"
    selectors: [".jsSectionWrapper", ".jsNav"],
    switches: {
      ".jsSectionWrapper": Pjax.switches.sideBySide,
      ".jsSectionWrapper": Pjax.switches.sideBySide
    },
    switchesOptions: {
      ".jsSectionWrapper": {
        classNames: {
          // class added on the element that will be removed
          remove: "Animated Animated--reverse Animate--fast Animate--noDelay",
          // class added on the element that will be added
          add: "Animated",
          // class added on the element when it go backward
          backward: "Animate--slideInRight",
          // class added on the element when it go forward (used for new page too)
          forward: "Animate--slideInLeft"
        },
        callbacks: {
          // to make a nice transition with 2 pages as the same time
          // we are playing with absolute positioning for element we are removing
          // & we need live metrics to have something great
          // see associated CSS below
          removeElement: function(el) {
            el.style.marginLeft = "-" + (el.getBoundingClientRect().width/2) + "px"
          }
        }
      }
    }
  });

  topbar.config({
    barColors    : {
      '1': "rgba(239, 170, 66, 1)"
    },
    shadowBlur: 0,
    shadowColor: "rgba(0, 0, 0, 0)"
  });

  $(".jsPopupArea").css("transform", "translateY(" + $(window).height() + "px)");

  document.addEventListener("pjax:send", topbar.show)
  document.addEventListener("pjax:complete", topbar.hide)

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $(".jsNav").addClass("shadow-2");
    } else {
      $(".jsNav").removeClass("shadow-2");
    }
  });
});

function renderPodcastList(program) {
  var linkJSON = "../data/" + program +".json";
  $.getJSON(linkJSON, function(result) {
      $(".jsPlayHeader").show();
      $(".jsSpinner").hide();
      episodes = result.program.episode;
      colorTheme = result.program.colorTheme;
      $(".jsPlayImage, .jsPopupImage").attr("src", result.program.imageAlbum);
      $(".jsPlayHeaderTitle").text(result.program.title);
      $(".jsPlayAuthor").text(result.program.title);
      $.each(episodes, function(index, episode) {
        $(".jsPlayList").append("<div class='fl w-100 pa2 jsPlayItem'><a class='link black jsPlayLink flex items-center' data-index='" + index + "' data-id='" + result.program.title.replace(/\s/g, '') + "-" + index +"'><div class='fl mr2'><div style='width:65px; height:65px;'><div class='c100 p0 jsPlayCircle'><span class='vagRoundedBold jsPlayCircleSpan'>" + index + "</span><div class='slice'><div class='bar jsPlayCircleBar'></div><div class='fill jsPlayCircleFill'></div></div></div></div></div><div class='flex-auto'><div class='jsPlayTitle f5 line-clamp'>" + episode.title + "</div><div class='f6 truncate mt1'><span>" + episode.duration + " ▪ " + episode.date + "</span></div></div></a><div style='display:none;' class='mt3 jsPlayDescription'>" + episode.description + "</div></div>");
      });
      initPodcastList();
  });
}

/**
 * Init Podcast List setelah ke render
 * @return {[type]} [void]
 */

function initPodcastList() {
  var playerObject = flowplayer("#hidden-player", {
    live: false,
    splash: true,
    audioOnly: true,
    clip: { sources: [] }
  });

  var warnaDominant = colorTheme;
  var warnaDefault = [0, 0, 0];

  if ($(".jsPlayHeader").length > 0) {
    $(".jsPlayHeader").css("background-color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
  }

  // play button on detail
  $(".jsPlayButton").click(function() {
    if (playerObject.playing == false) {
      $(".jsPlayer, .jsProgress").removeClass("is-hide");
      $(".jsPlayButton").addClass("is-playing");
      $(".jsPlayButton").find("i").addClass("fa-pause-circle");
      $(".jsPlayButton").find("i").removeClass("fa-play-circle");
      playerObject.play();
      setTimeInterval("start");
      sendEventTracking("radio", "play", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
    } else {
      $(".jsPlayButton").removeClass("is-playing");
      $(".jsPlayButton").find("i").addClass("fa-play-circle");
      $(".jsPlayButton").find("i").removeClass("fa-pause-circle");
      playerObject.pause();
      setTimeInterval("stop");
      sendEventTracking("radio", "pause", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
    }
  });

  $(".jsPlayLink").click(function() {
    var currentDataId = $(this).attr("data-id");
    var currentDataIndex = $(this).attr("data-index");
    currentPlayElement = $(this);

    if (currentDataId != dataId) {
      dataId = currentDataId;
      dataIndex = currentDataIndex;
      if (playerObject.playing == false) {
        updateView(this, true, false);
      } else {
        setTimeInterval("stop");
        updateView(this, false, false);
      }
      audioCurrentTime = 0;
      episode = episodes[currentDataIndex];
      audioTitle = episode.title;
      playerObject.live = episode.stream;
      playerObject.load([{ type: episode.type, src: episode.src }]);

      sendEventTracking("radio", "initial play", audioTitle, 0, 0, 0);
      setTimeInterval("start");
    } else {
      if (playerObject.playing == false) {
        newStartTime = audioCurrentTime;
        playerObject.play();
        setTimeInterval("start");
        updateView(this, false, true);
        sendEventTracking("radio", "play", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
      } else {
        var durationPlayed = audioCurrentTime - newStartTime;
        playerObject.pause();
        setTimeInterval("stop");
        sendEventTracking("radio", "pause", audioTitle, 0, durationPlayed, audioPercentageFinished);

        $(".jsPlayTitle").css("color", "rgb(" + warnaDefault[0] + "," + warnaDefault[1] + "," + warnaDefault[2]);
        $(".jsPlayCircleSpan").removeAttr("style");
        $(".jsPlayDescription").slideUp();
        $(".jsPlayCircle").removeClass("is-active");
        $(".jsPlayButton").find("i").addClass("fa-play-circle");
        $(".jsPlayButton").find("i").removeClass("fa-pause-circle");
      }
    }
  });

  $(".c-player__progress__scale").click(function(e) {
    var wrapperWidth = $(".c-player__progress__scale").width();
    var xCoordinate = e.pageX - this.offsetLeft;
    xCoordinate = (xCoordinate / wrapperWidth) * 100;

    var targetTime = (playerObject.video.duration / 100) * xCoordinate;

    playerObject.seek(targetTime, updateAudioTime);
  });

  $(".jsSkipForwardButton").click(function() {
    sendEventTracking("radio", "forward 15", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
    var skipForwardTime = audioCurrentTime + 15;
    if (skipForwardTime > playerObject.video.duration) {
      playerObject.seek(Math.round(playerObject.video.duration) - 1, updateAudioTime);
    } else {
      playerObject.seek(skipForwardTime, updateAudioTime);
    }
  });

  $(".jsSkipPreviousButton").click(function() {
    sendEventTracking("radio", "backward 15", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
    var skipPreviousTime = audioCurrentTime - 15;
    if (skipPreviousTime < 0) {
      playerObject.seek(0, updateAudioTime);
    } else {
      playerObject.seek(skipPreviousTime, updateAudioTime);
    }
  });

  $(".jsPrevButton").click(function() {
    prev();
  });

  $(".jsNextButton").click(function() {
    next();
  });

  $(".jsPopupShowButton").click(function() {
    $("body").addClass("o-hidden");
    $(".jsPopupArea").addClass("is-show");
    $(".jsPopupToolbar").show();
  });
  $(".jsPopupCloseButton").click(function() {
    $("body").removeClass("o-hidden");
    $(".jsPopupArea").removeClass("is-show");
    $(".jsPopupToolbar").hide();
  });

  function prev() {
    var prevElement = currentPlayElement.parent().prev();
    if (prevElement.find(".jsPlayLink").attr("data-id")) {
      var durationPlayed = audioCurrentTime - newStartTime;
      sendEventTracking("radio", "previous track", audioTitle, 0, durationPlayed, audioPercentageFinished);
      setTimeInterval("stop");

      var currentDataId = prevElement.find(".jsPlayLink").attr("data-id");
      var currentDataIndex = prevElement.find(".jsPlayLink").attr("data-index");
      dataId = currentDataId;
      audioCurrentTime = 0;
      currentPlayElement = prevElement.find(".jsPlayLink");

      episode = episodes[currentDataIndex];
      audioTitle = episode.title;
      playerObject.live = episode.stream;
      playerObject.load([{ type: episode.type, src: episode.src }]);
      updateView(prevElement.find(".jsPlayLink"), false, false);
      setTimeInterval("start");
      sendEventTracking("radio", "initial play", audioTitle, 0, 0, 0);
    }
  }

  function next() {
    var nextElement = currentPlayElement.parent().next();
    if (nextElement.find(".jsPlayLink").attr("data-id")) {
      var durationPlayed = audioCurrentTime - newStartTime;
      sendEventTracking("radio", "next track", audioTitle, 0, durationPlayed, audioPercentageFinished);
      setTimeInterval("stop");

      var currentDataId = nextElement.find(".jsPlayLink").attr("data-id");
      var currentDataIndex = nextElement.find(".jsPlayLink").attr("data-index");
      dataId = currentDataId;
      audioCurrentTime = 0;
      currentPlayElement = nextElement.find(".jsPlayLink");

      episode = episodes[currentDataIndex];
      audioTitle = episode.title;
      playerObject.live = episode.stream;
      playerObject.load([{ type: episode.type, src: episode.src }]);
      updateView(nextElement.find(".jsPlayLink"), false, false);
      setTimeInterval("start");
      sendEventTracking("radio", "initial play", audioTitle, 0, 0, 0);
    }
  }

  function updateView(element, firstPlay, fromPaused) {
    //update button circle di list item
    $(".jsPlayCircle").removeClass("is-active");
    $(element).find(".jsPlayCircle").addClass("is-active");
    //update title di player
    $(".jsPlayerTitle, .jsPopupTitle").text(episodes[dataIndex].title);
    $(".jsPopupDescription").text(episodes[dataIndex].description);

    //update description di list item
    $(".jsPlayDescription").slideUp();
    $(element).next().slideDown();

    if (firstPlay) {
      $(".jsPlayTitle").css("color", "rgb(" + warnaDefault[0] + "," + warnaDefault[1] + "," + warnaDefault[2]);
      $(".jsPlayCircleSpan").removeAttr("style");
      $(".jsPopupArea, .jsPopupToolbar, .jsPlayerIndicator").css("background-color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
      $(element).find(".jsPlayTitle, .jsPlayCircleSpan").css("color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
      $(element).find(".jsPlayCircleBar, .jsPlayCircleFill").css("border-color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
      $(".jsPlayer, .jsProgress").removeClass("is-hide");
      $(".jsPlayButton").find("i").addClass("fa-pause-circle");
      $(".jsPlayButton").find("i").removeClass("fa-play-circle");
      $(".jsProgressBar").css("width", "0%");
    } else {
      $(".jsPlayTitle").css("color", "rgb(" + warnaDefault[0] + "," + warnaDefault[1] + "," + warnaDefault[2]);
      $(".jsPlayCircleSpan").removeAttr("style");
      $(".jsPopupArea, .jsPopupToolbar, .jsPlayerIndicator").css("background-color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
      $(element).find(".jsPlayTitle, .jsPlayCircleSpan").css("color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
      $(element).find(".jsPlayCircleBar, .jsPlayCircleFill").css("border-color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);

      if (fromPaused) {
        $(".jsPlayButton").find("i").addClass("fa-pause-circle");
        $(".jsPlayButton").find("i").removeClass("fa-play-circle");
      } else {
        $(".jsProgressBar").css("width", "0%");
        $(".jsPlayCircle .bar").css("transform", "rotate(0deg)");
        $(".jsPlayCircle").removeClass("halfmore");
      }
    }
  }

  function updateAudioTime() {
    audioCurrentTime = Math.round(playerObject.video.time);
    audioPercentageFinished = (playerObject.video.time / playerObject.video.duration) * 100;
    var progressPercentage = (playerObject.video.time / playerObject.video.duration) * 100;
    var circlePercentage = progressPercentage * 3.6;
    var formattedTime = formatTime(audioCurrentTime);
    $("[data-id=" + dataId + "]").find(".jsPlayCircle .bar").css("transform", "rotate(" + circlePercentage + "deg)");
    if (progressPercentage > 50) {
      $("[data-id=" + dataId + "]").find(".jsPlayCircle").addClass("halfmore");
    } else {
      $("[data-id=" + dataId + "]").find(".jsPlayCircle").removeClass("halfmore");
    }
    $(".c-player__progress__scale").find(".jsProgressBar").css("width", progressPercentage + "%");
    $(".jsPlayerIndicator").css("width", progressPercentage + "%");
    $(".c-progress__time--current").html(formattedTime);
    $(".c-progress__time--duration").html(formatTime(Math.round(playerObject.video.duration)));

    audioPercentageFinished = Math.round(audioPercentageFinished);

    if (playerObject.finished == true) {
      next();
    }
  }

  function setTimeInterval(action) {
    if (action == "start") {
      timeInterval = setInterval(updateAudioTime, 100);
    }

    if (action == "stop") {
      clearInterval(timeInterval);
    }
  }

  $(".jsPopupArea").css("transform", "translateY(" + $(window).height() + "px)");
}

function sendEventTracking(category, action, audioTitle, userId, durationPlayed, percentageFinished) {
  var additionalCustomDimention = ['pause', 'next track', 'previous track', 'close tab'];

  if (audioCurrentTime >= minimumDuration || action == "initial play") {
    var trackingArray = {
      "event": "trackEvent",
      "eventDetails.category": category,
      "eventDetails.action": action,
      "eventDetails.label": audioTitle,
      "eventDetails.value": audioCurrentTime,
      "userID": userId
    }

    if (additionalCustomDimention.includes(action)) {
      trackingArray["durationPlayed"] = durationPlayed;
      trackingArray["audioTitle"] = audioTitle;

      if (action != "pause") {
        trackingArray["percentageFinished"] = percentageFinished;
      }
    }

    dataLayer.push(trackingArray);
  }
}

function formatTime(secs) {
  var minutes = Math.floor(secs / 60) || 0;
  var seconds = (secs - minutes * 60) || 0;
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for(var i = 0; i < cookieArray.length; i++) {
      var cookieData = cookieArray[i];
      while (cookieData.charAt(0) == " ") {
          cookieData = cookieData.substring(1);
      }

      if (cookieData.indexOf(name) == 0) {
          return cookieData.substring(name.length, cookieData.length);
      }
  }

  return "";
}

window.addEventListener("beforeunload", function(event) {
  var durationPlayed = audioCurrentTime - newStartTime;
  sendEventTracking("radio", "close tab", audioTitle, 0, durationPlayed, audioPercentageFinished);
});
