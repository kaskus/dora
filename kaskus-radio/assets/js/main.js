$(document).ready(function(){
	var dataNumber = 0;
	var audioCurrentTime = 0;
	var timeInterval;

	var playerObject = flowplayer('#hidden-player', {
		live: true,
		splash: true,
		audioOnly: true,
		clip: { sources : [] }
	});

	$(".jsPlayButton").click(function(){
		if(playerObject.playing == false){
			$(".jsPlayer, .jsProgress").removeClass("is-hide");
			$(".jsPlayButton").toggleClass("is-playing");
			$(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
			playerObject.play();
			setTimeInterval("start");
		}
		else {
			$(".jsPlayButton").toggleClass("is-playing");
			$(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
			playerObject.pause();
			setTimeInterval("stop");
		}
	});

	$(".jsPlayLink").click(function(){
		var currentDataNumber = $(this).attr("data-number");
		if(playerObject.playing == false){
			if (currentDataNumber != dataNumber) {
				console.log('me');
				var audioFile = $(this).attr("data-src");
				playerObject.load([{ type: "audio/mpeg", src: audioFile }]);
				dataNumber = currentDataNumber;

				updateView(this, true);
			}
			else {
				playerObject.play();
				updateView(this, false, true);
			}

			setTimeInterval("start");
		}
		else{
			currentDataNumber = $(this).attr("data-number");

			if (currentDataNumber != dataNumber) {
				playerObject.stop();
				setTimeInterval("stop");

				var audioFile = $(this).attr("data-src");
				playerObject.load([{ type: "audio/mpeg", src: audioFile }]);
				dataNumber = currentDataNumber;
				setTimeInterval("start");

				updateView(this);
			}

			else {
				playerObject.pause();
				setTimeInterval("stop");

				$(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
				$(".jsPlayTitle").removeClass("green");
			}
		}
	});

	$(".jsSkipForwardButton").click(function(){
		var skipForwardTime = audioCurrentTime + 15;
		if (skipForwardTime > playerObject.video.duration) {
			playerObject.seek(Math.round(playerObject.video.duration) - 1);
		}
		else {
			playerObject.seek(skipForwardTime);
		}
	});

	$(".jsSkipPreviousButton").click(function(){
		var skipPreviousTime = audioCurrentTime - 15;
		if (skipPreviousTime < 0) {
			playerObject.seek(0);
		}
		else {
			playerObject.seek(skipPreviousTime);
		}
	});

	$(".jsPrevButton").click(function(){
		prev();
	});

	$(".jsNextButton").click(function() {
		next();
	});

	function next() {
		var nextNumber = parseInt(dataNumber) + 1;
		var nextElement = $("[data-number=" + nextNumber + "]");
		if (nextElement.attr("data-src")) {
			var audioFile = nextElement.attr("data-src");
			currentDataNumber = nextElement.attr("data-number");
			playerObject.stop();
			setTimeInterval("stop");

			playerObject.load([{ type: "audio/mpeg", src: audioFile }]);
			dataNumber = currentDataNumber;
			updateView(nextElement);
			setTimeInterval("start");
		}
	}

	function prev() {
		var prevNumber = parseInt(dataNumber) - 1;
		var prevElement = $("[data-number=" + prevNumber + "]");
		if (prevElement.attr("data-src")) {
			var audioFile = prevElement.attr("data-src");
			currentDataNumber = prevElement.attr("data-number");
			playerObject.stop();
			setTimeInterval("stop");

			playerObject.load([{ type: "audio/mpeg", src: audioFile }]);
			dataNumber = currentDataNumber;
			updateView(prevElement);
			setTimeInterval("start");
		}
	}

	function updateView(element, firstPlay = false, fromPaused = false) {
		if (firstPlay) {
			$(".jsPlayTitle").removeClass("green");
			$(".jsPlayer, .jsProgress").removeClass("is-hide");
			$(element).find(".jsPlayTitle").toggleClass("green");
			$(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
			$(".jsProgressBar").css("width", "0%");
		}

		else {
			$(".jsPlayTitle").removeClass("green");
			$(element).find(".jsPlayTitle").toggleClass("green");
			if(fromPaused) {
				$(".jsPlayButton").find("i").toggleClass("fa-pause-circle fa-play-circle");
			}
			else {
				$(".jsProgressBar").css("width", "0%");
			}
		}
	}

	function updateAudioTime() {
		audioCurrentTime = Math.round(playerObject.video.time);
		var timePercentage = (playerObject.video.time / playerObject.video.duration) * 100;
		var formattedTime = formatTime(audioCurrentTime);
		$("[data-number=" + dataNumber + "]").find(".jsProgressBar").css("width", timePercentage + "%");
		$(".c-player__progress__scale").find(".jsProgressBar").css("width", timePercentage + "%");
		$(".c-progress__time--current").html(formattedTime);
		$(".c-progress__time--duration").html(formatTime(Math.round(playerObject.video.duration)));

		if (playerObject.finished == true) {
			next();
		}
	}

	function setTimeInterval(action) {
		if (action == "start") {
			timeInterval = setInterval(updateAudioTime, 10);
		}
		if (action == "stop") {
			clearInterval(timeInterval);
		}
	}

	function formatTime(secs) {
		var minutes = Math.floor(secs / 60) || 0;
		var seconds = (secs - minutes * 60) || 0;
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	}

	$(".jsPopupArea").css("transform","translateY("+ $(window).height() +"px)");

	$(".jsPopupShowButton").click(function(){
		$("body").addClass("o-hidden");
		$(".jsPopupArea").toggleClass("is-show");
		$(".jsPopupToolbar").show();
	});
	$(".jsPopupCloseButton").click(function(){
		$("body").removeClass("o-hidden");
		$(".jsPopupArea").toggleClass("is-show");
		$(".jsPopupToolbar").hide();
	});

	$(window).scroll(function() {
		if($(window).scrollTop() > 0) {
			$(".jsNav").addClass("shadow-2");
		}
		else{
			$(".jsNav").removeClass("shadow-2");
		}
	});
});
