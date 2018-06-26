var minimumDuration = 5;
var audioCurrentTime = 0;
var audioPercentageFinished = 0;
var audioTitle = "";
var dataId = 0;
var episodes;
var currentPlayElement;
var newStartTime = 0;
var timeInterval;
window.dataLayer = window.dataLayer || [];

$(document).ready(function() {
  $.getJSON(getCookie('json_src'), function(result) {
      episodes = result.program.episode;

      $.each(episodes, function(index, episode) {
        $(".playList").append("<div class='fl w-100 pa2 jsPlayItem'><a class='link black jsPlayLink flex items-center' data-id='" + index +"'><div class='fl mr2'><div style='width:65px; height:65px;'><div class='c100 p0 jsPlayCircle'><span class='vagRoundedBold'>" + index + "</span><div class='slice'><div class='bar'></div><div class='fill'></div></div></div></div></div><div class='flex-auto'><div class='jsPlayTitle f5 line-clamp'>" + episode.title + "</div><div class='f6 truncate mt1'><span>" + episode.duration + " ▪ " + episode.date + "</span></div></div></a><div style='display:none;' class='mt3 jsPlayDescription'>" + episode.description + "</div></div>");
      });
      initPodcastList();
  });
});

function initPodcastList() {
  var playerObject = flowplayer("#hidden-player", {
    live: false,
    splash: true,
    audioOnly: true,
    clip: { sources: [] }
  });

  if($('.jsPlayImage').length > 0){
    var malingWarna = new ColorThief();
    warnaDominant = malingWarna.getColor($(".jsPlayImage")[0]);
    warnaDefault = [0, 0, 0];
  }

  if ($(".jsPlayHeader").length > 0) {
    $(".jsPlayHeader").css("background-color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
  }

  // play button on detail
  $(".jsPlayButton").click(function() {
    if (playerObject.playing == false) {
      $(".jsPlayer, .jsProgress").removeClass("is-hide");
      $(".jsPlayButton").toggleClass("is-playing");
      $(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
      playerObject.play();
      setTimeInterval("start");
      sendEventTracking("radio", "play", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
    } else {
      $(".jsPlayButton").toggleClass("is-playing");
      $(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
      playerObject.pause();
      setTimeInterval("stop");
      sendEventTracking("radio", "pause", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
    }
  });

  $(".jsPlayLink").click(function() {
    var currentDataId = $(this).attr("data-id");
    currentPlayElement = $(this);

    if (currentDataId != dataId) {
      dataId = currentDataId;
      if (playerObject.playing == false) {
        updateView(this, true, false);
      } else {
        setTimeInterval("stop");
        updateView(this, false, false);
      }
      audioCurrentTime = 0;
      episode = episodes[currentDataId];
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
        $(".jsPlayDescription").slideUp();
        $(".jsPlayCircle").removeClass("is-active");
        $(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
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

  function prev() {
    var prevElement = currentPlayElement.parent().prev();
    if (prevElement.find(".jsPlayLink").attr("data-id")) {
      dataId = prevElement.find(".jsPlayLink").attr("data-id");
      var durationPlayed = audioCurrentTime - newStartTime;
      sendEventTracking("radio", "previous track", audioTitle, 0, durationPlayed, audioPercentageFinished);
      setTimeInterval("stop");
      var currentDataId = prevElement.find(".jsPlayLink").attr("data-id");
      audioCurrentTime = 0;
      currentPlayElement = prevElement.find(".jsPlayLink");

      episode = episodes[currentDataId];
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
      dataId = nextElement.find(".jsPlayLink").attr("data-id");
      var durationPlayed = audioCurrentTime - newStartTime;
      sendEventTracking("radio", "next track", audioTitle, 0, durationPlayed, audioPercentageFinished);
      setTimeInterval("stop");
      var currentDataId = nextElement.find(".jsPlayLink").attr("data-id");
      audioCurrentTime = 0;
      currentPlayElement = nextElement.find(".jsPlayLink");

      episode = episodes[currentDataId];
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
    $(".jsPlayerTitle, .jsPopupTitle").text(episodes[dataId].title);
    $(".jsPopupDescription").text(episodes[dataId].description);
    
    //update description di list item
    $(".jsPlayDescription").slideUp();
    $(element).next().slideDown();
    if (firstPlay) {
      $(".jsPlayTitle").css("color", "rgb(" + warnaDefault[0] + "," + warnaDefault[1] + "," + warnaDefault[2]);
      $(".jsPlayer, .jsProgress").removeClass("is-hide");
      $(element).find(".jsPlayTitle").css("color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
      $(".jsPopupArea, .jsPopupToolbar, .jsPlayerIndicator").css("background-color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
      $(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
      $(".jsProgressBar").css("width", "0%");
    } else {
      $(".jsPlayTitle").css("color", "rgb(" + warnaDefault[0] + "," + warnaDefault[1] + "," + warnaDefault[2]);
      $(element).find(".jsPlayTitle").css("color", "rgb(" + warnaDominant[0] + "," + warnaDominant[1] + "," + warnaDominant[2]);
      if (fromPaused) {
        $(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
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
      var durationPlayed = audioCurrentTime - newStartTime;
      sendEventTracking("radio", "next track", audioTitle, 0, durationPlayed, audioPercentageFinished);
      next();
      sendEventTracking("radio", "initial play", audioTitle, 0, 0, 0);
    }
  }

  $(".jsPopupArea").css("transform", "translateY(" + $(window).height() + "px)");

  $(".jsPopupShowButton").click(function() {
    $("body").addClass("o-hidden");
    $(".jsPopupArea").toggleClass("is-show");
    $(".jsPopupToolbar").show();
  });
  $(".jsPopupCloseButton").click(function() {
    $("body").removeClass("o-hidden");
    $(".jsPopupArea").toggleClass("is-show");
    $(".jsPopupToolbar").hide();
  });


  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $(".jsNav").addClass("shadow-2");
    } else {
      $(".jsNav").removeClass("shadow-2");
    }
  });
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

function setTimeInterval(action) {
  if (action == "start") {
    timeInterval = setInterval(updateAudioTime, 100);
  }

  if (action == "stop") {
    clearInterval(timeInterval);
  }
}

function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

window.addEventListener("beforeunload", function(event) {
  var durationPlayed = audioCurrentTime - newStartTime;
  sendEventTracking("radio", "close tab", audioTitle, 0, durationPlayed, audioPercentageFinished);
});
