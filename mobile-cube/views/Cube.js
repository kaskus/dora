function Cube(elID, opts) {
    this.rotateToLeft = rotateToLeft;
    this.setInitialRotationTime = setInitialRotationTime;
    this.setStopDurationBetweenCube = setStopDurationBetweenCube;
    this.setDurationAfterTouchend = setDurationAfterTouchend;
    this.startEngine = startEngine;

    var version = '3.2.0';
    var MOVING_DEGREE = 90;
    var TRANSITION_CSS = 'Cube-transition';

    var extraOptions = mergeObject({stopDuration: 2000, stopDurationAfterTouch: 0, directionToRight: true, initialRotateTime: 500}, opts, 'extraOptions');
    var cubeEl;
    var autoRotationInterval = null, timerAfterTouch = null;
    // This timer is to control how fast the initial cube rotation.
    var firstRotationTimer = null, firstAutoRotationTimer = null;
    var isTouch = false, isScrolling = null;
    var curDegree = 0, initX = 0, prevX = 0, initY = 0;
    var startDeg = 0, minDeg = 0, maxDeg = 0;
    var cssPrefix = new CSSPrefix();

    function initClass() {
        cubeEl = document.getElementById(elID);

        bindTouchEvent();
        initialRotation();
    };

    function bindTouchEvent() {
        cubeEl.addEventListener('mousedown', touchStart, false);
        cubeEl.addEventListener('mousemove', touchMove, false);
        cubeEl.addEventListener('mouseup', touchEnd, false);
        cubeEl.addEventListener('mouseleave', touchEnd, false);
    };
    function touchStart(e) {
        isTouch = true;
        initX = e.clientX;
        prevX = e.clientX;
        initY = e.clientY;

        calcDegBorder();

        cubeEl.classList.remove(TRANSITION_CSS);

        clearInterval(autoRotationInterval);
        autoRotationInterval = null;

        cancelInitialRotation();
        cancelTimerAfterTouch();
    };
    function touchMove(e) {
        if (isTouch === true) {
            if (isUserScrolling(e) === true) {
                return;
            }

            e.preventDefault();
            var newX = movementTuning(e.clientX - prevX);
            curDegree += newX;
            borderLimit();
            prevX = e.clientX;
            rotateTo();
        }
    };
    function touchEnd(e) {
        if (isTouch === true) {
            if (isScrolling === false) {
                var movementX = e.clientX - initX;
                rotateToNextOrPrevious(movementX);
            }

            isTouch = false;
            isScrolling = null;
            cubeEl.classList.add(TRANSITION_CSS);
            timerAfterTouch = setTimeout(autoRotation, extraOptions.stopDurationAfterTouch);
        }
    };

    function calcDegBorder() {
        startDeg = curDegree;
        minDeg = curDegree - 90;
        maxDeg = curDegree + 90;
    };

    function isUserScrolling(e) {
        if (isScrolling !== null) {
            return isScrolling;
        }

        var touchAngle = Math.atan2(Math.abs(e.clientY - initY), Math.abs(e.clientX - initX)) * 180 / Math.PI;
        if(touchAngle < 45) {
            isScrolling = false;
        }
        else{
            isScrolling = true;
        }

        return isScrolling;
    };
    function movementTuning(x) {
        var newX = 1;
        if (x < 0) {
            newX *= -1;
        }
        return newX;
    };
    function borderLimit() {
        if (curDegree >= maxDeg) {
            curDegree = maxDeg;
        }
        else if (curDegree < minDeg) {
            curDegree = minDeg;
        }
    };
    function rotateToNextOrPrevious(xDiff) {
        var rotateToRight = true;
        if (xDiff > 0) {
            rotateToRight = false;
        }
        else if (xDiff === 0) {
            return;
        }

        if (rotateToRight === true) {
            curDegree = startDeg - 90;
        }
        else {
            curDegree = startDeg + 90;
        }
        setTimeout(rotateTo, 30);
    };

    function initialRotation() {
        firstRotationTimer = setTimeout(rotationAnimation, extraOptions.initialRotateTime);
        firstAutoRotationTimer = setTimeout(autoRotation, extraOptions.initialRotateTime);
    };
    function cancelInitialRotation() {
        clearTimeout(firstRotationTimer);
        clearTimeout(firstAutoRotationTimer);

        firstRotationTimer = null;
        firstAutoRotationTimer = null;
    };
    function autoRotation() {
        if (autoRotationInterval === null) {
            autoRotationInterval = setInterval(rotationAnimation, extraOptions.stopDuration);
        }

        cancelTimerAfterTouch();
    };
    /**
     * Cancel timer for after touchend auto rotation.
     */
    function cancelTimerAfterTouch() {
        if (timerAfterTouch !== null) {
            clearInterval(timerAfterTouch);
            timerAfterTouch = null;
        }
    };

    function rotationAnimation() {
        if (cssPrefix.isHidden() === true) {
            return;
        }

        if (extraOptions.directionToRight === true) {
            curDegree += MOVING_DEGREE;
        }
        else {
            curDegree -= MOVING_DEGREE;
        }

        // var active = (curDegree / MOVING_DEGREE) % 4;
        // active = Math.abs(active);
        // switch (active)
        // {
        //     case 0:
        //         first_image++;
        //         break;
        //     case 1:
        //         second_image++;
        //         break;
        //     case 2:
        //         third_image++;
        //         break;
        //     case 3:
        //         fourth_image++;
        //         break;
        // }
        // console.log(first_image, second_image, third_image, fourth_image);
        rotateTo();
    };
    function rotateTo() {
        cubeEl.style.transform = 'rotateY(' + curDegree + 'deg)';
        cubeEl.style.webkitTransform = 'rotateY(' + curDegree + 'deg)';
    };

    function rotateToLeft() {
        extraOptions.directionToRight = false;
    };
    function setInitialRotationTime(duration) {
        if (isNaN(duration) === false) {
            extraOptions.initialRotateTime = duration;
        }
    };
    function setStopDurationBetweenCube(duration) {
        if (isNaN(duration) === false) {
            extraOptions.stopDuration = duration;
        }
    };
    function setDurationAfterTouchend(duration) {
        if (isNaN(duration) === false) {
            extraOptions.stopDurationAfterTouch = duration;
        }
    }
    function startEngine() {
        initClass();
    };

    function mergeObject(defaultObj, overrideObject, reference) {
		for (var attributeKey in overrideObject) {
			if (defaultObj.hasOwnProperty(attributeKey)) {
				defaultObj[attributeKey] = overrideObject[attributeKey];
			}
			else {
				console.warn('[Version '+version+'] Key ['+attributeKey+'] not found in object merging process.', reference);
			}
		}

		return defaultObj;
	};

    function CSSPrefix() {
        this.isHidden = isHidden;

        var STANDARD = 1;
        var WEBKIT = 2;
        var MOZ = 3;

        var cssPrefix = STANDARD;

        initClass();

        function initClass() {
            checkCSSPrefix();
        };
        function checkCSSPrefix() {
            if (typeof(document.hidden) !== "undefined") {
                cssPrefix = STANDARD;
            }
            else if (typeof(document.webkitHidden) !== "undefined") {
                cssPrefix = WEBKIT;
            }
            else if (typeof(document.mozHidden) !== "undefined") {
                cssPrefix = MOZ;
            }
        };

        function isHidden() {
            switch(cssPrefix) {
                case WEBKIT:
                    return document.webkitHidden;
                case MOZ:
                    return document.mozHidden;
                case STANDARD:
                default:
                    return document.hidden;
            };
        };
    };
};