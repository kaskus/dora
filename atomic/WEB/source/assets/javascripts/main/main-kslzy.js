;
(function($) {

  $.fn.kslzy = function(threshold, callback) {

    var $w = $(window),
      images = this,
      threshold = threshold || 0;

    function checkVisible(elm, checker) {
      checker = checker || "visible";
      var spolier = $(elm).closest(".spoiler");
      if (spolier.length == 1) {
        elm = spolier;
      }
      var vpH = $w.height(), // Viewport Height
        st = $w.scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
      //console.log("elm = "+elm+" y = "+y+" scrollTop = "+st+ " elementHeight = "+elementHeight+" Viewport = "+vpH+" threshold ="+threshold);
      if (checker == "visible") return ((y < (vpH + st + threshold)) && (y > (st - elementHeight - threshold)));
      if (checker == "above") return ((y < (vpH + st)));
    }

    this.one("display", function() {
      var downloadingImage = new Image();
      if ($(this).prop("tagName") == 'DIV' || $(this).prop("tagName") == 'A') {
        var currElem = this;
        downloadingImage.onload = function() {
          $(currElem).removeClass("mls-img")
            .addClass("rjn-img")
            .removeAttr("data-src")
            .hide()
            .fadeIn();

          if ($(currElem).attr("data-type") == "1") {
            $(currElem).css("background-image", "url(" + this.src + ")");
          } else {
            var img = $('<img class="lte-img">');
            img.attr('src', this.src);
            img.appendTo($(currElem));
          }

        };
      } else {
        var currImage = this;
        downloadingImage.onload = function() {
          $(currImage).removeClass("mls-img")
            .addClass("rjn-img")
            .removeAttr("data-src");

          $(currImage).attr('src', this.src);
        };
      }
      if(typeof $(this).attr("data-src") != "undefined"){
        downloadingImage.src = $(this).attr("data-src");
      }
    });

    function scan() {
      var inview = images.filter(function() {

        if ($(this).is(":visible") == false)
          return false;

        return checkVisible($(this));
      });

      var loaded = inview.trigger("display");
      // console.log(inview);
      images = images.not(loaded);
    }

    $w.on("scroll.kslzy resize.kslzy lookup.kslzy click.kslzy", scan);

    scan();

    return this;

  };

})(window.jQuery || window.Zepto);
