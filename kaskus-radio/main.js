var minimumDuration = 5;
var audioCurrentTime = 0;
var audioPercentageFinished = 0;
var audioTitle = "";
var dataNumber = 0;
var newStartTime = 0;
var timeInterval;
window.dataLayer = window.dataLayer || [];

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

$(document).ready(function() {

  $.getJSON( '../../data/kaskusnyobain.json' , function(result){
      console.log(result);
      // $.each(result, function(i, field){
      //     $("div").append(field + " ");
      // });
  });

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
		var currentDataNumber = $(this).attr("data-number");

		if (currentDataNumber != dataNumber) {
			if (playerObject.playing == false) {
				updateView(this, true, false);
			} else {
				setTimeInterval("stop");
				updateView(this, false, false);
			}
			audioCurrentTime = 0;
			var audioFile = $(this).attr("data-src");
			var dataType = $(this).attr("data-type");
			var dataStream = $(this).data("stream");
			audioTitle = $(this).find(".jsPlayTitle").text();
			playerObject.live = dataStream;
			playerObject.load([{ type: dataType, src: audioFile }]);
			dataNumber = currentDataNumber;

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

		playerObject.seek(targetTime, function() {
			updateAudioTime();
		});
	});

	$(".jsSkipForwardButton").click(function() {
		sendEventTracking("radio", "forward 15", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
		var skipForwardTime = audioCurrentTime + 15;
		if (skipForwardTime > playerObject.video.duration) {
			playerObject.seek(Math.round(playerObject.video.duration) - 1, function() {
				updateAudioTime();
			});
		} else {
			playerObject.seek(skipForwardTime, function() {
				updateAudioTime();
			});
		}
	});

	$(".jsSkipPreviousButton").click(function() {
		sendEventTracking("radio", "backward 15", audioTitle, 0, audioCurrentTime, audioPercentageFinished);
		var skipPreviousTime = audioCurrentTime - 15;
		if (skipPreviousTime < 0) {
			playerObject.seek(0, function() {
				updateAudioTime();
			});
		} else {
			playerObject.seek(skipPreviousTime, function() {
				updateAudioTime();
			});
		}
	});

	$(".jsPrevButton").click(function() {
		var durationPlayed = audioCurrentTime - newStartTime;
		sendEventTracking("radio", "previous track", audioTitle, 0, durationPlayed, audioPercentageFinished);
		prev();
		sendEventTracking("radio", "initial play", audioTitle, 0, 0, 0);
	});

	$(".jsNextButton").click(function() {
		var durationPlayed = audioCurrentTime - newStartTime;
		sendEventTracking("radio", "next track", audioTitle, 0, durationPlayed, audioPercentageFinished);
		next();
		sendEventTracking("radio", "initial play", audioTitle, 0, 0, 0);
	});

	function next() {
		var nextNumber = parseInt(dataNumber) + 1;
		var nextElement = $("[data-number=" + nextNumber + "]");
		if (nextElement.attr("data-src")) {
			audioCurrentTime = 0;
			var audioFile = nextElement.attr("data-src");
			var dataType = nextElement.attr("data-type");
			var dataStream = nextElement.data("stream");
			playerObject.live = dataStream;
			audioTitle = nextElement.find(".jsPlayTitle").text();
			currentDataNumber = nextElement.attr("data-number");
			setTimeInterval("stop");

			playerObject.load([{ type: dataType, src: audioFile }]);
			dataNumber = currentDataNumber;
			updateView(nextElement, false, false);
			setTimeInterval("start");
		}
	}

	function prev() {
		var prevNumber = parseInt(dataNumber) - 1;
		var prevElement = $("[data-number=" + prevNumber + "]");
		if (prevElement.attr("data-src")) {
			audioCurrentTime = 0;
			var audioFile = prevElement.attr("data-src");
			var dataType = prevElement.attr("data-type");
			var dataStream = prevElement.data("stream");
			playerObject.live = dataStream;
			audioTitle = prevElement.find(".jsPlayTitle").text();
			currentDataNumber = prevElement.attr("data-number");
			setTimeInterval("stop");

			playerObject.load([{ type: dataType, src: audioFile }]);
			dataNumber = currentDataNumber;
			updateView(prevElement, false, false);
			setTimeInterval("start");
		}
	}

	function updateView(element, firstPlay, fromPaused) {
		//update button circle di list item
		$(".jsPlayCircle").removeClass("is-active");
		$(element).find(".jsPlayCircle").addClass("is-active");
		//update title di player
		$(".jsPlayerTitle, .jsPopupTitle").text($(element).data("title"));
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
		$("[data-number=" + dataNumber + "]").find(".jsPlayCircle .bar").css("transform", "rotate(" + circlePercentage + "deg)");
		if (progressPercentage > 50) {
			$("[data-number=" + dataNumber + "]").find(".jsPlayCircle").addClass("halfmore");
		} else {
			$("[data-number=" + dataNumber + "]").find(".jsPlayCircle").removeClass("halfmore");
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
});

window.addEventListener("beforeunload", function(event) {
	var durationPlayed = audioCurrentTime - newStartTime;
	sendEventTracking("radio", "close tab", audioTitle, 0, durationPlayed, audioPercentageFinished);
});
