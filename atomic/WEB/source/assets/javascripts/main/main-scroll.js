$(window).bind('scroll', function() {
    //scrollHeader();

    //PositionBackToTop();

    if($('.jsLeaderboardSkyscrapper').length){
        scrollSkyscrapper();
    }
    scrollHeaderSticky();
    //checkStickySubforumSidebar();
    scrollTooltipReputation();
    if ($('.postItemFirst').length > 0) {
      stickyShare();
    }
});

// function scrollHeader() {
//     var topHeaderPosition;
//
//     if($('.jsNoticeHeader').length > 0){
//
//         if($(window).scrollTop() <  $('.jsNoticeHeader').outerHeight()){
//             topHeaderPosition = $('.jsNoticeHeader').outerHeight() - $(window).scrollTop();
//         }
//         else{
//             topHeaderPosition = 0;
//         }
//         $('.jsNavHeader').css('top', topHeaderPosition + 'px');
//     }
// }
// 


function scrollTooltipReputation() {
  var scrollHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var tooltipAnchor = $('.firstPostBot').offset();
  if ($('.firstPostBot').length > 0) {
    if (scrollTop  > tooltipAnchor.top - scrollHeight + 64) {
      $('.jsTooltipReputation').addClass("is-visible");
    }
  }
}

var positionOverlayHeader;
var onTop = true;

function scrollHeaderSticky() {
    var batasScrollHeader = $('.jsNavHeader').offset().top + $('.jsNavHeader').height();
    if($(window).scrollTop() > (batasScrollHeader)){

      $(".jsSearchSticky").removeClass("is-clicked");
      $(".jsSearchOutterWrapper").appendTo(".jsSearchSticky");
      $('.jsStickyHeader').css('transform','translateY(0px)');
      positionOverlayHeader = 0;
      $('.jsFlyoutAnchor').appendTo('.jsFlyoutTriggerSticky');
      $('.jsUserDropdownMenu').appendTo('.jsUserAnchorSticky');
      $('.jsNotificationDropdownMenu').appendTo('.jsNotificationAnchorSticky');

      if($(".jsSearchFormInput").is(":focus")){
          $('.jsSearchFormInput').blur();
      }


      if(onTop == true && $('.jsPodcastWidgetHeaderIframe').hasClass('is-sticky')){
          //$('.jsPodcastWidgetHeaderIframe').appendTo('.jsPodcastWidgetAnchorSticky');
          //$('.jsPodcastWidgetHeaderIframe').toggleClass('Start(0) End(0)');
          setTimeout(
            function(){
              $('.jsPodcastWidgetHeaderIframe').toggleClass("is-scrolled Pos(f) Pos(a) Start(0) T(0) T(50px)");
            }, 300);

          onTop = false;
      }

      $('.jsSearchFormInput').blur();

    }
    else{
      $(".jsSearchSticky").removeClass("is-clicked");
      $(".jsSearchOutterWrapper").appendTo(".jsSearchTrigger");
      $('.jsStickyHeader').css('transform','translateY(-200px)');
      //positionOverlayHeader = $('.jsNavHeader').offset().top + 90 - $(window).scrollTop();
      $('.jsFlyoutAnchor').appendTo('.jsFlyoutTrigger');
      $('.jsUserDropdownMenu').appendTo('.jsUserAnchor');
      if(onTop == false && $('.jsPodcastWidgetHeaderIframe').hasClass('is-sticky')){
          // $('.jsPodcastWidgetHeaderIframe').appendTo('.jsPodcastWidgetAnchor');
          // $('.jsPodcastWidgetHeaderIframe').toggleClass('Start(0) End(0)')
          $('.jsPodcastWidgetHeaderIframe').toggleClass("is-scrolled Pos(f) Pos(a) Start(0) T(0) T(50px)");
          onTop = true;
      }

      $('.jsNotificationDropdownMenu').appendTo('.jsNotificationAnchor');
    }
    //console.log(positionOverlayHeader);
}

function scrollSkyscrapper() {
    var batasAtasWrapperAds = $('.jsLeaderboardSkyscrapper').offset().top;
    var tinggiNavHeader = $('.jsStickyHeader').height();
    var tinggiSkyscrapper = 600;
    var tinggiMainContent  = $('.jsMainContent').outerHeight(true);

    var tinggiLeaderboard =
    ($('.jsLeaderboardAds').length) ? $('.jsLeaderboardAds').outerHeight(true) : 0;

    var tinggiNoticeBoard =
    ($('.jsNoticeBoard').length) ? $('.jsNoticeBoard').outerHeight(true) * $('.jsNoticeBoard').length : 0;

    var tinggiBreadCrumb =
    ($('.jsBreadcrumb').length) ? $('.jsBreadcrumb').outerHeight(true) : 0;

    var tinggiBottomLeaderboard =
    ($('.jsBottomLeaderboardAds').length) ? $('.jsBottomLeaderboardAds').outerHeight(true) : 0;

    var spacingBawah = 30;
    var spacingAtas = 10;
    var posisiFixed = tinggiNavHeader + spacingAtas;

    var posisiAbsolute = tinggiMainContent + tinggiBottomLeaderboard + tinggiLeaderboard + tinggiNoticeBoard + tinggiBreadCrumb - tinggiSkyscrapper ;
    var batasAtasFooter = $('.jsMainFooter').offset().top;
    var batasHarusFixed = batasAtasWrapperAds - tinggiNavHeader - spacingAtas;
    var batasHarusAbsolute = batasAtasFooter - tinggiSkyscrapper - posisiFixed - spacingBawah;

    //kondisi harus sticky
    if($(window).scrollTop() > batasHarusFixed){
      //console.log(tinggiMainContent );
      $('.jsSkyscrapperAds').css('position','fixed');
      $('.jsSkyscrapperAds').css('transform','translateY('+ posisiFixed +'px)');
      //kondisi harus absolute
      if($(window).scrollTop() > batasHarusAbsolute){
        $('.jsSkyscrapperAds').css('position','absolute');
        $('.jsSkyscrapperAds').css('transform','translateY('+ posisiAbsolute + 'px)');
      }
    }
    //kondisi awal
    else{
      $('.jsSkyscrapperAds').css('position','initial');
      $('.jsSkyscrapperAds').css('transform','none');
    }
}

/*
function buat subforum fixed sidebar
 */
function checkStickySubforumSidebar(){
    var scrollToFixed;
    var anchorMainContent = $('.jsMainContent').offset().top;
    var heightMainContent = $('.jsMainContent').outerHeight();
    var heightSidebar = $('.jsSubforumFixedSidebar').outerHeight();
    if($(window).scrollTop() > (anchorMainContent - 50)){
      //$('.jsSubforumFixedSidebar').css("transform", 'translateY(60px)');
      $('.jsSubforumFixedSidebar').css("top", '50px');
      if($(window).scrollTop() > (anchorMainContent + heightMainContent - heightSidebar - 50)){
        scrollToFixed = (anchorMainContent + heightMainContent) - $(window).scrollTop() - (heightSidebar);
        $('.jsSubforumFixedSidebar').css('top', scrollToFixed+'px');
      }
    }
    else{
      scrollToFixed = ($('.jsMainContent').offset().top - $(window).scrollTop());
      $('.jsSubforumFixedSidebar').css('top', scrollToFixed+'px');
    }
}

function checkScroller(element) {
    if (element[0].scrollHeight > element.height()) {
		// mentok bawah
		if (element[0].scrollHeight - element.scrollTop() == element.outerHeight())
        {
            element.siblings(".flyout__scroll--down").removeClass( "flyout__scroll--on" );
        }
        // mentok atas
        else if(element.scrollTop() === 0)
        {
            element.siblings(".flyout__scroll--up").removeClass( "flyout__scroll--on" );
        }
		else{
			element.siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
			element.siblings(".flyout__scroll--up").addClass( "flyout__scroll--on" );
		}

	}
}

//scroll top main category nav
$(".flyout__category__list").bind('scroll', function() {
	checkScroller($(this));
});

$(".flyout__subscribed__list").bind('scroll', function() {
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
