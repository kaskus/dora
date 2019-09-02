$( ".jsFollowingButton" ).hover(
  function() {
    $( this ).find('span').text(($(this).data('hover')));
  }, function() {
    $( this ).find('span').text(($(this).data('default')));
  }
);

$( ".jsButtonFollowingHeader" ).hover(
  function() {
    $( this ).find('span').text(($(this).data('hover')));
    $( this ).find('i').toggleClass('fa-user-times fa-user-minus');
  }, function() {
    $( this ).find('span').text(($(this).data('default')));
    $( this ).find('i').toggleClass('fa-user-times fa-user-minus');
  }
);

$( ".jsButtonBlockedHeader" ).hover(
  function() {
    $( this ).find('span').text(($(this).data('hover')));
    $( this ).find('i').toggleClass('fa-user-lock fa-unlock');
  }, function() {
    $( this ).find('span').text(($(this).data('default')));
    $( this ).find('i').toggleClass('fa-user-lock fa-unlock');
  }
);

// $( ".jsBlockedButton" ).hover(
//   function() {
//     $( this ).text('Unblock');
//   }, function() {
//     $( this ).text('Blocked');
//   }
// );

// $( ".jsUserMenu" )
// 	.mouseover(function() {
//     $(this).find('.jsUserDropdownMenu').toggleClass("is-visible");
//     toggleOverlay();
//   	})
//  	.mouseout(function() {
//     	$(this).find('.jsUserDropdownMenu').toggleClass("is-visible");
//       toggleOverlay();
//   	});

// $( ".jsNotificationMenu" )
// 	.mouseover(function() {
//     $(this).find('.jsNotificationDropdownMenu').toggleClass("is-visible");
//     toggleOverlay();
//   	})
//  	.mouseout(function() {
//     	$(this).find('.jsNotificationDropdownMenu').toggleClass("is-visible");
//       toggleOverlay();
//   	});


// $( ".flyout__trigger" )
// 	.mouseover(function() {
//     	$(".flyout__anchor").show();
//       toggleOverlay();
//
//     	if($('.flyout__tab__pane > .flyout__category__list').length > 0 && $('.flyout__tab__pane > .flyout__category__list')[0].scrollHeight > $('.flyout__tab__pane > .flyout__category__list').height()){
// 	  		$('.flyout__tab__pane > .flyout__category__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
// 	  	}
// 	  	if($('.flyout__subscribed__list').length > 0 && $('.flyout__subscribed__list')[0].scrollHeight > $('.flyout__subscribed__list').height()){
// 	  		$('flyout__subscribed__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
// 	  	}
//   	})
//  	.mouseout(function() {
//       console.log("wwwwwww");
//     	$(".flyout__anchor").hide();
//       toggleOverlay();
//   	});

    $( ".flyout__trigger" )
      .on( "mouseenter", function() {
        $(".flyout__anchor").show();
        toggleOverlay();

      	if($('.flyout__tab__pane > .flyout__category__list').length > 0 && $('.flyout__tab__pane > .flyout__category__list')[0].scrollHeight > $('.flyout__tab__pane > .flyout__category__list').height()){
  	  		$('.flyout__tab__pane > .flyout__category__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
  	  	}
  	  	if($('.flyout__subscribed__list').length > 0 && $('.flyout__subscribed__list')[0].scrollHeight > $('.flyout__subscribed__list').height()){
  	  		$('flyout__subscribed__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
  	  	}
      })
      .on( "mouseleave", function() {
        $(".flyout__anchor").hide();
        toggleOverlay();
      });

$( ".flyout__content" )
	.mouseenter(function() {
    	$(this).closest(".flyout__anchor").show();
  	})
	.mouseleave(function() {
    	$(this).closest(".flyout__anchor").hide();
  	});

$( ".flyout__category__item--has-children , .flyout__category-children__item--has-children"  )
	.mouseover(function() {
    	$(this).closest(".flyout__content").addClass( "flyout__content--triggered" );
    	if($(this).find('.flyout__category-children__list').first().length > 0 && $(this).find('.flyout__category-children__list').first()[0].scrollHeight > $(this).find('.flyout__category-children__list').first().height()){
	  		$(this).find('.flyout__category-children__list').first().siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
	  	}
  	})
  	.mouseout(function() {
    	$(this).closest(".flyout__content").removeClass( "flyout__content--triggered" );
  	});

$( ".flyout__subscribed__anchor" )
	.mouseover(function() {
    	$(this).closest(".flyout__content").addClass( "flyout__content--triggered" );
    	$(this).closest(".flyout__anchor").addClass( "flyout__anchor--subscribed" );
    	if($(this).find('.flyout__subscribed__list').length > 0 && $(this).find('.flyout__subscribed__list')[0].scrollHeight > $(this).find('.flyout__subscribed__list').height()){
	  		$(this).find('.flyout__subscribed__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
	  	}
  	})
  	.mouseout(function() {
    	$(this).closest(".flyout__content").removeClass( "flyout__content--triggered" );
    	$(this).closest(".flyout__anchor").removeClass( "flyout__anchor--subscribed" );
  	});

$( ".flyout__subscribed__panel" )
	.mouseover(function() {
    	$(this).siblings(".flyout__subscribed__anchor__link").addClass( "flyout__subscribed__anchor__link--hovered" );
  	})
  	.mouseout(function() {
    	$(this).siblings(".flyout__subscribed__anchor__link").removeClass( "flyout__subscribed__anchor__link--hovered" );
  	});

$( ".flyout__category__panel" )
	.mouseover(function() {
    	$(this).siblings(".flyout__category__link").addClass( "flyout__category__link--hovered" );
    	$(this).siblings(".flyout__category-children__link").addClass( "flyout__category-children__link--hovered" );
  	})
  	.mouseout(function() {
    	$(this).siblings(".flyout__category__link").removeClass( "flyout__category__link--hovered" );
    	$(this).siblings(".flyout__category-children__link").removeClass( "flyout__category-children__link--hovered" );
  	});


var scrolling = false;
function scrollContent(direction,element) {
    var amount = (direction === "up" ? "-=5px" : "+=5px");
    $(element).animate({
        scrollTop: amount
    }, 1, function() {
        if (scrolling) {
            scrollContent(direction,element);
        }
    });
}

$(".flyout__scroll--down")
	.bind("mouseover", function(event) {
    	scrolling = true;
    	scrollContent("down",$(this).siblings(".flyout__category-children__list"));
    	scrollContent("down",$(this).siblings(".flyout__category__list"));
    	scrollContent("down",$(this).siblings(".flyout__result__list"));
    	scrollContent("down",$(this).siblings(".flyout__subscribed__list"));
	})
	.bind("mouseout", function(event) {
    	scrolling = false;
	});

$(".flyout__scroll--up")
	.bind("mouseover", function(event) {
    	scrolling = true;
    	scrollContent("up",$(this).siblings(".flyout__category-children__list"));
    	scrollContent("up",$(this).siblings(".flyout__category__list"));
    	scrollContent("up",$(this).siblings(".flyout__result__list"));
    	scrollContent("up",$(this).siblings(".flyout__subscribed__list"));
	})
	.bind("mouseout", function(event) {
    	scrolling = false;
	});
