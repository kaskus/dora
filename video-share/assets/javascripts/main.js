if($('#all-category').length){
	var iterations = 1,
	abjad = $('.abjad'),
	search_category = $('.search-category'),
	closestSelector = $('li[id^="anc-"]');

	// capitalize and contains function
	String.prototype.capitalize = function() {
		return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	};

	jQuery.expr[":"].Contains = function(a, i, m) {
	    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};
	jQuery.expr[":"].contains = function(a, i, m) {
	    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};


	function getAbjad(val){
		var $$ = $(val).find('.head-title');
		firstLetter = [];

		$$.each(function() {
			var txt = $(this).text().toUpperCase();
			firstLetter.push(txt.charAt(0));
		});

		abjad.children('ul').find('li').each(function() {
			$(this).children('a').removeClass('active');
			text = $(this).children('a').text();
			if( firstLetter.indexOf( text.toUpperCase() ) > -1){
				$(this).children('a').addClass('active').css('cursor','pointer');
			}else{
				$(this).children('a').css('cursor','default');
			}
		});
	}

	// ABJAD SELECTED TRIGGER
	unactiveTitle = $(".sub-category, .headache-title" ).find('a');

	$('ul.nav-tabs').find('a').on('click', function() {
		search_category.val('');
		closestSelector.show();
		unactiveTitle.css( "color", "#555555");
		getAbjad($(this).attr('href'));
	}); 

	//  ANCHOR 
	abjad.children('ul').find('a').on('click',function(){
		$('html, body').animate({
			scrollTop: ( $( $(this).attr('href') ).offset().top - 60) 
		}, 500);
		return false;
	});

	
	// SEARCH ALL CATEGORIES
	search_category.keyup(function(event) {
		phrase = $(this).val();
		closestSelector.show();
		if(phrase === '' || phrase === undefined || phrase.length < 3){
			unactiveTitle.css( "color", "#555555");
			return false;
		}
		
		phrase = phrase.capitalize();
		SelectorContainer = $("#all-category a:contains(" + phrase + ")" );
		search_category.find('a').css({
			'text-decoration': 'none',
			'color': '#ccc'
		});
		closestSelector.hide();
		$(".headache-title" ).find('a').css( "color", "#ccc");
		SelectorContainer.css( "color", "#1497ec").closest('li[id^="anc-"]').css('display','block');
	});

	$(window).load(function() {
		$('ul.nav-tabs').find('li.active').children('a').click();
	});

	
};
// console.log("%cHayooo Agan mau ngapain??...", "color: #1497ec; font-size: x-large");
// get category search header area
function get_cat(param)
{
	if (param == 'forum' || param == 'fjb')
	{
		$('.select-category').css('display', 'table-cell');
		$.ajax({
			url: '/misc/get_categories_search/' + param
		}).success(function(result) {
			var checkurl = location.href.match(/forumchoice(\[\])*=([^&]+)/);
            var id = '';
			if (checkurl)
			{
				id = checkurl[2];
			}
			var selected = '';
			for(var i in result)
			{
				if (id == result[i].forum_id)
				{
					selected = "selected";
					$('#search_category').parent().find('.customSelectInner').text(result[i].name);
				}
				else
				{
					selected = '';
				}

				$('#search_category').append('<option data-child-list="' + result[i].child_list + '" value="' + result[i].forum_id + '" ' + selected + '>' + result[i].name + '</option>');
			}
		});
	}
	else
	{
		$('.select-category').css('display', 'none');
	}
}

// Spoiler

function spoiler(spoilerData)
{
   if (spoilerData.value == "Show")
   {
       $(".content_" + $(spoilerData).attr("class")).slideDown(0);
       spoilerData.innerHTML = "";
       spoilerData.value = "Hide";
   }
   else
   {
       $(".content_" + $(spoilerData).attr("class")).slideUp(0);
       spoilerData.innerHTML = "";
       spoilerData.value = "Show";
   }
}


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
    data: mru_smilies || {}
  }).success(function(result) {
    result = JSON.parse(result);
    smilies = JSON.parse(result.kaskus);

    $('.smilies-tab').replaceWith(smilies.tab);
    $('.smilies-tab-content').replaceWith(smilies.content);

    if (result.mru) {
      smilies_mru = result.mru;

      $('#content-mru').html(smilies_mru);

      $('.smiley-tab > .nav-tabs > li[id^="group"]:first').removeClass('active');
      $('.tab-content > .tab-pane[id^="tab"]:first').removeClass('active');

      $('#mru').addClass('active');
      $('#content-mru').addClass('active');

      load_MRU();
    } else {
      $('#mru').hide();
      $('.smiley-tab > .nav-tabs > li[id^="group"]:first').addClass('active');
      $('.tab-content > .tab-pane[id^="tab"]:first').addClass('active');


    }
    show_tab(".smiley-wrapper .smiley-tab .tab-content > .active");
    $('.smiley-tab__item').not('.smiley-tab__item--unavailable').find('.smilie__in-action').click(function() {
      get_focus();
      smiley_tracking(this.children);
      insert_smilikiti(this.children);
    });
    $('#emoticons').show();
  });
}

function printDiv(divId) {
    window.frames["print_frame"].document.body.innerHTML= document.getElementById(divId).innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
}

function get_MRU()
{
	var temp = [];

	if (localStorage[mru_key]) {
		mru = JSON.parse(localStorage[mru_key]);
		
		if (mru) {
			for (var a in mru) {
				if (a.search("smilie") > -1)
				{
					temp.push(mru[a]);
				}
			}
			var data = { smilies: temp };
		}
	}

	return data || {};
}

function load_MRU()
{
	var x = $('#content-mru').find('.loadMRU');

	if (x)
	{
		$.each(x, function(i, smilie)
		{
			$(smilie).attr('src', $( '.loadSmilies[alt="' + $(smilie).attr('alt') + '"]' ).attr('data-src'));
			$(smilie).attr('title', $( '.loadSmilies[alt="' + $(smilie).attr('alt') + '"]' ).attr('title'));
			$(smilie).removeAttr('class');
		});
	}

	return true;
}

function show_tab(tab_number)
{
	var x = $(tab_number).find('.loadSmilies');

	if (x)
	{
		$.each(x, function(i, smilie)
		{
			$(smilie).attr('src', $(smilie).attr('data-src'));
			$(smilie).removeAttr('data-src');
			$(smilie).removeAttr('class');
		});
	}

	return true;
}

function insert_smilikiti(a)
{
	if (localStorage) {
		var smilies = JSON.parse(localStorage.getItem(mru_key));

		if (smilies) {
			for (var b in smilies) {
				if (b === ('smilie' + $(a).attr("alt")))
				{
					delete smilies[b];
				}
			}
		}
		else {
			var smilies = new Object();
		}

		if (mru_limit == Object.keys(smilies).length) {
			delete smilies[Object.keys(smilies)[0]];
		}

		smilies['smilie' + $(a).attr("alt")] = $(a).attr("alt");

		localStorage.setItem(mru_key, JSON.stringify(smilies));
	}
	emoticon = $(a).attr("alt") + " ", 
	$.markItUp({replaceWith:emoticon})
}

// notice

function notice(text, timeout)
{
	if(typeof timeout === 'undefined'){
		timeout = 3000;
	}

	if(document.notice_tid){
		clearTimeout(document.notice_tid);
	}

	$('#notice_span').html(text);
	$('#floating_notice').show();
	document.notice_tid = setTimeout(function(){$('#floating_notice').fadeOut();}, timeout);
}

function printContent(el){
	var restorepage = document.body.innerHTML;
	var printcontent = document.getElementById(el).innerHTML;
	document.body.innerHTML = printcontent;
	window.print();
	document.body.innerHTML = restorepage;
}

// Jump to page
function jump_page(e) {
    var t = $("#" + e).val();
    var n = $(".url_jump").val();
    window.location.href = n + t;
}
//carousel FJB
$('#carousel-fjb').find('.thumbnail').on('click', function() {
	largeTarge = $('#carousel-largeimage');
	$$ = $(this);
	$('.thumbnail').removeClass('active');
	$$.addClass('active');
	largeTarge.find('img').attr('src', $$.find('img').attr('data-large') );
});

//add to watch list
$('.watchlist').on('click', function(){
	$$ = $(this);
	if($$.hasClass('watched')){
		$$.removeClass('watched').html('<i class="fa fa-eye"></i> Watch List');
	}else{
		$$.addClass('watched').html('<i class="fa fa-eye-slash"></i> Remove Watch List');
	}
});

$('.header-trigger').on('click', function() {
	if( $('#left-nav').hasClass('full-show') || $('#bgover').length ){
		$('#bgover').remove();
	}else{
		$('body').prepend('<div id="bgover" onclick="$(\'.header-trigger\').click()"></div>');	
	}
});

var khplist = $('#k-hp-list');
khplist.find('label').click(function() {
	var imgicon = $(this).find('i').attr('class');
	khplist.find('li').removeClass('selected');
	$(this).closest('li').addClass('selected');
	$('#header-search-trigger').attr('class', imgicon);
});

// Accordion
var menuAccordion = $('#menu-accordion');
menuAccordion.children('ul').find('a').click(function() {
	var checkElement = $(this).next();
	if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('open');
		checkElement.slideUp();
	}
	if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		menuAccordion.children('ul').find('ul:visible').slideUp();
		menuAccordion.find('li').removeClass('open');
		$(this).closest('li').addClass('open');
		checkElement.slideDown();
	}

	if ($(this).closest('li').find('ul').children().length === 0) {
		return true;
	}else{
		return false;
	}
});

// Accordion
// var accordionMenu = $('.accordion-menu');
// accordionMenu.children('ul').find('a').click(function() {
// 	var checkedMenu = $(this).next();
// 	if ((checkedMenu.is('ul')) && (checkedMenu.is(':visible'))) {
// 		$(this).closest('li').removeClass('open');
// 		checkedMenu.slideUp();
// 	}
// 	if ((checkedMenu.is('ul')) && (!checkedMenu.is(':visible'))) {
// 		accordionMenu.children('ul').find('ul:visible').slideUp();
// 		accordionMenu.find('li').removeClass('open');
// 		$(this).closest('li').addClass('open');
// 		checkedMenu.slideDown();
// 	}

// 	if ($(this).closest('li').find('ul').children().length === 0) {
// 		return true;
// 	}else{
// 		return false;
// 	}
// });

$('.accordion-menu > ul > li > a').click(function(){
	$('.accordion-menu ul ul').slideUp();
	$('.accordion-menu ul li').removeClass('open');
	if(!$(this).next().is(":visible"))
	{
		$(this).next().slideDown();
		$(this).closest('li').addClass('open');

	}
	return false;
});

$('.accordion-menu > ul > li > ul > li > a').click(function(){

	//$('.accordion-menu > ul > li > ul > li').removeClass('open');
	if(!$(this).next().is(":visible"))
	{
		$(this).next().slideDown();
		$(this).closest('li').addClass('open');
	}
	else{
		$(this).next().slideUp();
	}
	return false;
});

// polling
$('.poll-swap-result').click(function(){
	$('#polling-form').addClass('hide');
	$('#polling-result').removeClass('hide');
});

$('.poll-swap-back').click(function(){
	$('#polling-form').removeClass('hide');
	$('#polling-result').addClass('hide');
});

// accessibility
$('.text-size-increase').click(function(){
	currentSize = parseInt($('.entry').css('font-size')) + 1;
	if(currentSize <= 32){
		$('.entry').css('font-size', currentSize);
		$('.post-quote').children('span').css('font-size', currentSize);
	}
});

$('.text-size-decrease').click(function(){   
	currentSize = parseInt($('.entry').css('font-size')) - 1;
	if(currentSize >= 10){
		$('.entry').css('font-size', currentSize);
		$('.post-quote').children('span').css('font-size', currentSize);
	}
});

//toggle multi-quote
$('.multi-quote').click(function() {
	$(this).toggleClass('active');
});

//quick reply
$('.quick-reply').click(function() {
	$(this).parent().find('.hfeed').addClass('bagus');
});

//notice
$('.btn-close').click(function(){
	$(this).parent().hide();
});

// post-icon post reply
var titleMessage = $('#title-message');
titleMessage.find('label').click(function() {
	$$ = $(this);
	$$.find('input').prop("checked", true);
	titleMessage.find('label').removeClass('selected');
	$$.addClass('selected');
	if( $$.find('img').length < 1){
		titleMessage.find('.btn').html('No icon');	
	}else{
		img = $$.find('img').attr('src');
		titleMessage.find('.btn').html('<img src="'+ img +'" width="15" />');
	}
	
});

// prevent hiding dropdown
$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
    e.stopPropagation();
});

// USER EXPERIENCE
$('.sidebar-trigger-small-screen').on('click', function() {
	setTimeout(function (){
		$('#filter-cat').focus();
	}, 10);
});

$('.short-url').children('a').on('click',function() {
	setTimeout(function() {
		$('.short-url').find('input').focus().select();
	}, 50);
});


// choose location
$('.fjb-refine-search-form .location, .fjb-refine-search-form .close').on('click', function(event) {
	event.preventDefault();
	$('.location-list-con').toggle();
});

// behaviour
$('#loginform').find('.dropdown-toggle').on('click', function(event) {
	event.preventDefault();
	setTimeout(function() {
		$('#username').focus();
	}, 20);
});

// related thread
if ($('.related-thread, .bengkel-content').length){
	var widthList = $('.related-thread, .wrap-bengkel').find('li').outerWidth();
	var lengthList = $('.related-thread, .wrap-bengkel').find('li').length;
	var state = 0, leftPos = 0, lengthData = 1;

	// modify width list on bengkel menu
	if( $('.bengkel-content').length ){
		widthList = widthList + 110;
		lengthData = 3;
	}

	// $('.wrap-bengkel').children('ul').width( widthList * lengthList );
	
	$('.related-thread').find('.close').bind('click', function() {
		$('.related-thread').removeClass('nongol').addClass('disable');
	});

	$('.related, .arrow-bengkel').bind('click', function(event) {
		event.preventDefault();
		if( $(this).hasClass('prev') ){
			// prev
			if( state === 0 ){
				return;
			}
			state = state - 1;
			leftPos = widthList * state;
			$(".wrap-scroll, .wrap-bengkel").animate({scrollLeft: leftPos}, 600);
		}else{
			// next
			if( state === (lengthList - lengthData) ){
				return;
			}
			state = state + 1;
			leftPos = widthList * state;
			$(".wrap-scroll, .wrap-bengkel").animate({scrollLeft: leftPos}, 600);
		}
	});


	$('#show-related').on('click', function(event) {
		event.preventDefault();
		$('.related-thread').toggleClass('nongol');
	});
}

$('.switch-view').on('click', function() {
	$('.switch-view').toggleClass('on');
	$('body').toggleClass('response');
});

//toggle autoplay
$('.autoplay-widget .btn-toggle').click(function(){
	$('.autoplay-widget .btn-toggle').toggleClass( "on" );
});
function handleFiles(MAX_WIDTH, MAX_HEIGHT, item)
{
	var filesToUpload = item.files,
    	file = filesToUpload[0],
    	img = document.createElement("img"),
    	imageMimes = ['image/png', 'image/bmp', 'image/gif', 'image/jpeg'],
    	acceptedMimes = new Array(),
    	reader = new FileReader();
    if(imageMimes.indexOf(file.type) === -1){
    	alert('file type is not allowed!!!');return;
    }
    if(file.type !== 'image/gif'){
    	reader.onload = function(e)
	    {
	        img.src = e.target.result;
	        var canvas = document.createElement("canvas");
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(img, 0, 0);
	        var width = img.width;
	        var height = img.height;

	        if (width > height) {
	          if (width > MAX_WIDTH) {
	            height *= MAX_WIDTH / width;
	            width = MAX_WIDTH;
	          }
	        } else {
	          if (height > MAX_HEIGHT) {
	            width *= MAX_HEIGHT / height;
	            height = MAX_HEIGHT;
	          }
	        }
	        canvas.width = width;
	        canvas.height = height;
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(img, 0, 0, width, height);
	        var dataurl = canvas.toDataURL(file.type, 0.8);
	        item.setAttribute('data-img',dataurl);
	        document.getElementById("image").setAttribute('src',dataurl);
	        // BASE64 Image = dataurl;
	    }
	    // Load files into file reader
	    reader.readAsDataURL(file);
    }else{
    	alert('gambar gif tidak di resize');
    }
}
$(function() {
    var liSelected,
        valscroll;
    $("#filter-cat").bind("keydown keyup", function(event) {
        var li = $("#update-tag ul.sidebar-category").find('li');
        // if keydown
        if(event.which === 40){
            if(event.type === 'keydown'){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.next();
                    if(next.length > 0){
                        liSelected = next.addClass('selected');
                    }else{
                        liSelected.addClass('selected');
                    }
                }else{
                    liSelected = li.eq(0).addClass('selected');
                }
            }
            valscroll = ( $(".scrolling-con-update ul li.selected").position().top ) - 140;
            $('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
        // if keyup
        }else if(event.which === 38){
            if(event.type === 'keydown'){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.prev();
                    if(next.length > 0){
                        liSelected = next.addClass('selected');
                    }else{
                        liSelected.addClass('selected');
                    }
                }else{
                    liSelected = li.last().addClass('selected');
                }
            }
            valscroll = ( $(".scrolling-con-update ul li.selected").position().top ) - 140;
            $('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
        // presss enter get redirect URL
        }else if(event.which === 13){
            if($('.scrolling-con-update').find('li.selected').length > 0){
                window.location = $('.scrolling-con-update li.selected .categories-title').children('a').attr('href');   
            }
        }else {
            // keyup get data json and append listing data
            if(event.type === 'keyup'){

                $("#update-tag ul.sidebar-category").find('li').removeClass('selected');
                searchField = $('#filter-cat').val();
                try{
                    myExp = new RegExp(searchField, 'i');
                    if(searchField === ''){
                        $('#update-tag').addClass('hide');
                        return false;
                    }
                    $.retrieveJSON( urlCatJSON, { usergroupid: userGroupIdJSON }, function(data) {
                        $('#update-tag').removeClass('hide');
                        heightUpdateContent = $('.tag-wrap').height() - 28;
                        $('#update-tag').children('.scrolling-con-update').height(heightUpdateContent);
                        output = '<div class="scrolling-con-update"><ul class="sidebar-category list-unstyled">';
                        $.each(data, function(key, val) {
                            if (val.forum_name.search(myExp) != -1) {
                                output += '<li class="listing-sidebar">';
                                output += '<div class="categories-title"><a href="' + decodeURIComponent(val.forum_url) + '">';
                                output += '<img src="' + decodeURIComponent(val.forum_icon) + '" alt="" width="20" height="20" ><span>' + decodeURIComponent(val.forum_name);
                                output += '</span></a></div><hr />';
                                output += '</li>';
                            }
                        });
                        output += '</ul></div>';
                        output += '<div class="close-filter"><a id="close"><i class="fa fa-power-off"></i> close filter</a></div>';
                        $('#update-tag').html(output);
                        
                        // mCustomScrollbar
                        $(".scrolling-con-update").mCustomScrollbar({
                            advanced: {
                                updateOnContentResize: true,
                                autoScrollOnFocus: false
                            }
                        });
                        // close filter categories
                        $('a#close').click(function() {
                            $('#update-tag').html('');
                            $('#update-tag').addClass('hide');
                        });
                    },864e5);
                    liSelected = '';
                }catch(err){
                    // console.log(err);
                }
            }
        }
    });
    // prevent form submiting on filter input
    $('.filter-category').submit(function(e) {
        e.preventDefault();
    });
});
// get height content hover
var heightContentHover = $('.hover-sidebar-content').height(),
    forumCategories = $('#forum-home-categories'),
    fjbCategories = $('#fjb-home-categories');

if($('#home-categories').length){
    // checking arrow circle up
    function checkArrow(){
        if( forumCategories.hasClass('show-all') ){
            fjbCategories.find('.fa').attr('class','fa fa-chevron-circle-up right');
        }else{
            fjbCategories.find('.fa').attr('class','fa fa-chevron-circle-down right');
        }
    }

    // change chevron
    fjbCategories.find('.head-categories-title').hover(function () {
        if( fjbCategories.hasClass('show-five'))
        $(this).find('.fa').attr('class','fa fa-chevron-circle-up right');
    }, function () {
        if( fjbCategories.hasClass('show-five'))
        $(this).find('.fa').attr('class','fa fa-chevron-circle-down right');
    });

    // homepage slide leftsidebar
    function homeSlide(selectorSlide){    
        var liHeight = selectorSlide.find('.listing-sidebar').height() + 1;
        var lilength = selectorSlide.find('.listing-sidebar').length + 1;
        if(selectorSlide.hasClass('show-five')){
            selectorSlide.removeClass('show-five').addClass('show-all').animate({height: (liHeight*lilength)}, {queue:false, duration:300});
            selectorSlide.next().removeClass('show-five').addClass('hide-all').animate({height: 32}, {queue:false, duration:300});
            selectorSlide.prev().removeClass('show-five').addClass('hide-all').animate({height: 32}, {queue:false, duration:300});
            checkArrow();
        }else{
            if(selectorSlide.hasClass('show-all')){
                $('#home-categories').children('div').attr('class','show-five').animate({ height: (liHeight*6)}, {queue:false, duration:300});
            }else if(selectorSlide.hasClass('hide-all')){
                selectorSlide.prev().removeClass('show-all').addClass('hide-all').animate({height: 32}, {queue:false, duration:300});
                selectorSlide.next().removeClass('show-all').addClass('hide-all').animate({height: 32}, {queue:false, duration:300});
                selectorSlide.removeClass('hide-all').addClass('show-all').animate({height: (liHeight*lilength)}, {queue:false, duration:300});
            }else{
                selectorSlide.addClass('show-five').animate({ height: (liHeight*6)}, {queue:false, duration:300});
            }
            checkArrow();
        }
    }
}
// homepage sidebar slideup
$('.head-categories-title').bind('click', function(event) {
    event.preventDefault();
    var selectorSlide = $(this).parent('div');
    homeSlide(selectorSlide);
});

// autoplay hot featured
var refreshInterval = null;

function swapFeatured() {
	active = $('.hot-featured .tab-nav li.active');
	activeDataFjb = $("#fjb-highlight").find(".carousel-indicators").children(".active"); 
    _gaq.push([activeDataFjb.attr("data-event"), activeDataFjb.attr("data-event-category"),
    activeDataFjb.attr("data-event-action"), activeDataFjb.attr("data-event-label")]);
	activeContent = $('.hot-featured .tab-panel .tab-pane.active');
	next = active.next().length > 0 ? active.next().addClass('active') : $('.hot-featured .tab-nav li:first').addClass('active');
	activeNext = activeContent.next().length > 0 ? activeContent.next().addClass('active') : $('.hot-featured .tab-panel .tab-pane:first').addClass('active');
	active.removeClass('active');
	activeContent.removeClass('active');
}

$("#fjb-highlight").on("slid.bs.carousel", function() {
    activeDataFjb = $("#fjb-highlight").find(".carousel-indicators").children(".active"), 
    _gaq.push([activeDataFjb.attr("data-event"), activeDataFjb.attr("data-event-category"), 
    activeDataFjb.attr("data-event-action"), activeDataFjb.attr("data-event-label")])
});

$('.hot-featured').on('mouseleave', function() {
	refreshInterval = setInterval(swapFeatured, 2000);
});
$('.hot-featured').on('mouseover', function() {
	clearInterval(refreshInterval);
});

// be step
(function($){
	$.fn.cycle = function(timeout, clas){
		var length  = $(this).length,
			current = 0,
			prev = 0,
			divs = $(this);
		divs.eq(0).addClass(clas);

		function next(){
			divs.eq(prev).removeClass(clas);
			divs.eq(current).addClass(clas);
			prev = current;
			current = (current + 1) % length;
			setTimeout(next, timeout);
		}
		setTimeout(next, timeout);
		return $(this);
	};
}(jQuery));


document.onkeydown = function(event) {
	event = event || window.event; // Internet Explorer Event...
	key = event.which || event.charCode || event.keyCode; // browser differences...
	if(key == 27) $('#bgover').click();
	if ($('input[type="text"], textarea, input[type="radio"], input[type="checkbox"], input[type="password"] , input[type="search"], input[type="email"]').is(":focus")) return;
	state = 0;
	if (!event.altKey && !event.ctrlKey && event.shiftKey ) { // Shift
		switch (key) {
			case 88: // shift+x (Open all spoiler)
				$(".spoiler input[type=button]").click();
			break;

			case 65: // shift+A (Show/Hide All categories)
				if($('body').hasClass('landing')){
					if($('.sidebar-trigger-small-screen').is(':visible')) {
						$('.sidebar-trigger-small-screen').click();	
					}
					setTimeout(function(){
						$('#filter-cat').focus();	
					}, 10);
				}else{
					$('.sidebar-trigger-small-screen').click();
				}
			break;

			case 83: // shift + s (Search)
				setTimeout(function() {
					$('#search').focus();
				}, 10);
			break;

			case 49:  // shift + 1 (Go to Homepage)
				link = $('.navbar-brand').attr('href');
				if(link){
					window.location = link;
				}
			break;

			case 50:  // shift + 2 (Go to Forum)
				link = $('#kk-forum a').attr('href');
				if(link){
					window.location = link;
				}
			break;

			case 51:  // shift + 3 (Go to FJB)
				link = $('#kk-fjb a').attr('href');
				if(link){
					window.location = link;
				}
			break;

			case 52:  // shift + 4 (Go to Groupee landing page)
				link = $('#kk-groupee a').attr('href');
				if(link){
					window.location = link;
				}
			break;

			case 53:  // shift + 5 (Go to Radio landing page)
				link = $('#kk-radio a').attr('href');
				if(link){
					window.location = link;
				}
			break;

			case 82: // Shift+R (Reply Thread)
				link = $("#act-post").attr("href");
				if(link){
					window.location = link;
				}
			break;

			case 37: // (Go To Previous Page)
				link = $(".pagination .previous-page").attr("href");
				if(link){
					window.location = link;
				}
			break;
			
			case 39: // (Go to Next Page)
				link = $(".pagination .next-page").attr("href");
				if(link){
					window.location = link;
				}
			break;

			default:
				key = '';
			break;
		}
	} 
	else if (event.ctrlKey && event.shiftKey && !event.altKey) { // Ctrl + shift
		switch (key) {
			case 37: // Go to previous thread
				link = $(".prev-thread").attr("href");
				if(link){
					window.location = link;
				}
			break;

			case 39: // Go to next thread
				link = $(".next-thread").attr("href");
				if(link){
					window.location = link;
				}
			break;

			default:
				key = '';
			break;
		}
	}
	else if (!event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey) { // Key Only
		switch (key) {
			case 74: // J (Jump to next post section)
				if(state < $('.permalink').length - 1){
					state++;
					scrollval = $('.permalink').eq(state).offset().top;
					$('body').animate({scrollTop: scrollval - 100}, 500);
				}
			break;

			case 75: // K (Jump to next post section)
				if(state > 0){
					state--;
					scrollval = $('.permalink').eq(state).offset().top;
					$('body').animate({scrollTop: scrollval - 100}, 500);
				}
			break;

			case 49: // 1 (Homepage)
				$('.navbar-brand').focus();
			break;

			case 50: // 2 (Forum)
				$('#kk-forum a').focus();
			break;

			case 51: // 3 (FJB)
				$('#kk-fjb a').focus();
			break;

			case 52: // 4 (Gruopee)
				$('#kk-groupee a').focus();
			break;

			case 53: // 5
				$('#kk-radio a').focus();
			break;

			default:
				key = '';
			break;
		}
	} 
	else {
		return true;
	}
	return true;
};

$('#search-header-button , #k-hp-list').hover(function() {
	$('#search-header-button').addClass('hover');
}, function() {
	$('#search-header-button').removeClass('hover');
});

// reputation
function reputationTrigger(){
	$('.reputation-icon').hover(function() {
		if($(this).hasClass('cendol-big')){
			$(this).addClass('shake');
		}else{
			$(this).addClass('tada');	
		}
	}, function() {
		if($(this).hasClass('cendol-big')){
			$(this).removeClass('shake');
		}else{
			$(this).removeClass('tada');
		}
	});

	$('.reputation-icon').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.radio').prev().removeClass('selected');
		$(this).closest('.radio').next().removeClass('selected');
		$(this).closest('.radio').addClass('selected');
	});
}

// bengkel
$(".ani-swing").bind("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationend", function() {
	$(this).removeClass("swing");
});

$(".ani-swing").hover(function() {
	$(this).addClass("swing");
});

// cendol-bata
$('.vote-up-off').hover(function() {
	$(this).parent().toggleClass('vote-cendol');
});
$('.vote-down-off').hover(function() {
	$(this).parent().toggleClass('vote-bata');
});

;(function($) {

$.fn.kslzy = function(threshold, callback) {

	var $w = $(window),
		images = this,
		threshold = threshold || 0;

	function checkVisible( elm, eval ) {
		eval = eval || "visible";
		var spolier = $(elm).closest(".spoiler") ;
     	if( spolier.length == 1){ elm = spolier; }
		var vpH = $w.height() , // Viewport Height
		st = $w.scrollTop(), // Scroll Top
		y = $(elm).offset().top,
		elementHeight = $(elm).height();
		//console.log("elm = "+elm+" y = "+y+" scrollTop = "+st+ " elementHeight = "+elementHeight+" Viewport = "+vpH+" threshold ="+threshold);
	if (eval == "visible") return ((y < (vpH + st + threshold)) && (y > (st - elementHeight - threshold)));
	if (eval == "above") return ((y < (vpH + st)));
	}

	this.one("display", function() {
		$(this).removeClass('mls-img').addClass('rjn-img');
		if($(this).context.tagName == 'DIV')
		{
			$(this).hide();
			$(this).fadeIn();
			var img = $('<img class="lte-img">');
			img.attr('src', $(this).attr("data-src"));
			img.appendTo($(this));
		} else {
			$(this).attr('src', $(this).attr("data-src"));
			$(this).removeAttr('data-src');
		}
	});

	function scan()
	{
		var inview = images.filter(function() {
				return checkVisible($(this));
			});

		loaded = inview.trigger("display");
		// console.log(inview);
		images = images.not(loaded);
	}

	$w.on("scroll.kslzy resize.kslzy lookup.kslzy", scan);

	scan();

	return this;

	};

})(window.jQuery || window.Zepto);
$(function() {
    // Menu AIM
    var $menu = $("#categories > ul , #forum-home-categories > ul , #fjb-home-categories > ul");
    // jQuery-menu-aim: <meaningful part of the example>
    // Hook up events to be fired on menu row activation.
    $menu.menuAim({
        activate: activateSubmenu,
        deactivate: deactivateSubmenu,
        exitOnMouseOut: true,
        submenuWrap: '.hover-sidebar-content'
    });

    // jQuery-menu-aim: </meaningful part of the example>

    // jQuery-menu-aim: the following JS is used to show and hide the submenu
    // contents. Again, this can be done in any number of ways. jQuery-menu-aim
    // doesn't care how you do this, it just fires the activate and deactivate
    // events at the right times so you know when to show and hide your submenus.
    function activateSubmenu(row) {
        var $row = $(row),
        submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId),
        height = $menu.outerHeight(),
        width = $menu.outerWidth();

    	$submenu.css({
            display: "block"
        });

        $(".listing-sidebar").hover(
            function() {
                $(this).addClass('hover').addClass('maintainHover');
            },
            function() {
                $(this).removeClass('hover').removeClass('maintainHover');
            }
        );

        $('.hover-sidebar-content').height( $('.tag-wrap').height() - 1);

        $row.addClass("maintainHover hover");
        $row.mousedown(function() {
            $row.on('mouseup mousemove', function handler(evt) {
                if (evt.type === 'mouseup') {
                    $($submenu).css("display", "block");
                }else{
                    $($submenu).css("display", "none");
                }
                $row.off('mouseup mousemove', handler);
            });
        });

        //for lazyload image
        startHover = $.now();
        img = $(row).find(".b_sdbr");
        preload = img.attr("data-src") || null;
        if(preload)
        {
            rsrc = img.attr("data-src");
            img.attr("data-src",null);
            img.attr("src",rsrc);

        }
        //end of lazyload image
    }

    // Deactive submenu mouseout
    function deactivateSubmenu(row){
        var $row = $(row),
            submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId);
        $submenu.css("display", "none");
        $row.removeClass("maintainHover");

        var endHover = $.now();
        var msHovered = endHover - startHover;
        var seconds = msHovered/1000;

        if (seconds >= 1) {
            cat_tag_name = $(row).find('.b_sdbr').attr("cat-tag-name");
            // tracksidebar(cat_tag_name);
        }
    }

    // Bootstrap's dropdown menus immediately close on document click.
    // Don't let this event close the menu if a submenu is being clicked.
    // This event propagation control doesn't belong in the menu-aim plugin
    // itself because the plugin is agnostic to bootstrap.
    $(".listing-sidebar").click(function(e) {
        e.stopPropagation();
    });
    $('.hover-sidebar-content').on('mouseup mousemove', function handler(evt) {
        evt.stopPropagation();
    });
});
// define ready function
$(document).ready(function() {

	$(".feed-score").parents("body").addClass("user-forum-profile");

	$('#toggle-subforum').on("click",function (event) {
		event.preventDefault();
		$$ = $(".header-list-sub");
		if( $$.hasClass('hide-sub') ){
			$$.removeClass('hide-sub');
			$(this).find('.fa').attr('class', 'fa fa-chevron-up');
		}else{
			$$.addClass('hide-sub');
			$(this).find('.fa').attr('class', 'fa fa-chevron-down');
		}
	});

	// header border
	if ($(window).scrollTop() > 0) {
        $(".site-header").addClass("scrolled");
    }

    if ($.cookie('display') == 'list') { 
    	FiveGridToList();
  	}
  	else{
    	ListToFiveGrid();
  	}

    

	function FiveGridToList(){
		var CookieList = $.cookie('display', 'list');
   		$.cookie('display', 'list');
    	$('.product__listing').animate({opacity:0},function(){
		    $('.grid__icon').removeClass('active');
		    $('.list__icon').addClass('active');
		    $('.product__listing .block-grid-lg-5').removeClass('block-grid-lg-5 block-grid-md-5 block-grid-sm-4 block-grid-xs-4');
		    $('.product__listing>div>ul').addClass('block-grid-xs-1');
		    $('.product__listing .product__item .item--grid').removeClass('item--grid');
		    $('.product__listing .product__item>div').addClass('item--list');
		    $('.product__listing').stop().animate({opacity:1});
		});
	}

	function ListToFiveGrid(){
		var CookieGrid = $.cookie('display', 'grid'); 
   		$.cookie('display', 'grid');
		$('.product__listing').animate({opacity:0},function(){
		    $('.list__icon').removeClass('active');
		    $('.grid__icon').addClass('active');
		    $('.product__listing .block-grid-xs-1').removeClass('block-grid-xs-1');
		    $('.product__listing>div>ul').addClass('block-grid-lg-5 block-grid-md-5 block-grid-sm-4 block-grid-xs-4');
		    $('.product__listing .product__item .item--list').removeClass('item--list');
		    $('.product__listing .product__item>div').addClass('item--grid');
		    $('.product__listing').stop().animate({opacity:1});
		});
	}

	// change 5 grid to list 
    $('.list__icon').click(function() {
    	FiveGridToList();
	});

    //change list to 5 grid
	$('.grid__icon').click(function() {
		ListToFiveGrid();
	});

	$(".slider__highlight").slick({
	    autoplay: true,
	    dots: true,
	    customPaging : function(slider, i) {
	        var atag = document.createElement('A');
               atag.setAttribute('onclick', $(slider.$slides[i]).data("onclick"));
               var options = $(slider.$slides[i]).data("options");
               if(options)
               {
               		$.each(options, function(idx, val){
	               		atag.setAttribute(idx, val);
	               	});
               }
               atag.appendChild(document.createTextNode($(slider.$slides[i]).data("thumb")));
               return atag.outerHTML;
	    },

	    responsive: [{ 
	        breakpoint: 500,
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: false,
	            slidesToShow: 2,
	            slidesToScroll: 2
	        } 
	    }]
	});



	$(".slider__highlight").show();

	if(typeof slickHotReviewInitialized === "undefined"){
		$(".slider__grid").slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			customPaging: function(a, b){
	           	var atag = document.createElement('BUTTON');
	           	atag.setAttribute( 'class', 'tab' );
	            atag.setAttribute('onclick', $(a.$slides[b]).data("onclick"));
	            var options = $(a.$slides[b]).data("options");
	            if(options){
					$.each(options, function(idx, val){
						atag.setAttribute(idx, val);
					})
	            }
	            return atag.outerHTML;
	        }
		})
	}

	if(typeof slickShowcaseInitialized === "undefined"){
		$(".slider__grid--six").slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 6,
			dots: true
		})
	}
	
    function CurrencyFormatted(number){
	   var decimalplaces = 2;
	   var decimalcharacter = ",";
	   var thousandseparater = ".";
	   number = parseFloat(number);
	   var sign = number < 0 ? "-" : "";
	   var formatted = new String(number.toFixed(decimalplaces));
	   if( decimalcharacter.length && decimalcharacter != "." ) { formatted = formatted.replace(/\./,decimalcharacter); }
	   var integer = "";
	   var fraction = "";
	   var strnumber = new String(formatted);
	   var dotpos = decimalcharacter.length ? strnumber.indexOf(decimalcharacter) : -1;
	   if( dotpos > -1 )
	   {
	      if( dotpos ) { integer = strnumber.substr(0,dotpos); }
	      fraction = strnumber.substr(dotpos+1);
	   }
	   else { integer = strnumber; }
	   if( integer ) { integer = String(Math.abs(integer)); }
	   while( fraction.length < decimalplaces ) { fraction += "0"; }
	   temparray = new Array();
	   while( integer.length > 3 )
	   {
	      temparray.unshift(integer.substr(-3));
	      integer = integer.substr(0,integer.length-3);
	   }
	   temparray.unshift(integer);
	   integer = temparray.join(thousandseparater);
	   // return sign + integer + decimalcharacter + fraction;
	   return sign + integer;
	}

	var total = $('#offer-price').text();
	total = total.replace(".", "");
	total = parseInt(total);

	$('input[type="range"]').rangeslider({
	    polyfill: false,
	    rangeClass: 'rangeslider',
	    fillClass: 'rangeslider__fill',
	    handleClass: 'rangeslider__handle',

	    // Callback function
	    onInit: function() {
	    	// price = $('#the-price');
	    	// curPrice = $('#id-range').val();
	    	// price.html( CurrencyFormatted(parseInt(price.text()) + parseInt(curPrice)));
	    	// $('#the-price').attr('price', parseInt(price.text()) + parseInt(curPrice) );
	    },

	    // Callback function
	    onSlide: function(position, value) {
	    	if( value <= 5000){
	    		$('#id-range').attr('step', 1000);
	    		$('#id-range2').attr('step', 1000);
	    	}
	    	else if( value > 5000 && value < 30000 ){
	    		$('#id-range').attr('step', 5000);
	    		$('#id-range2').attr('step', 5000);

	    	}
	    	else if( value >= 30000 && value < 200000 ){
	    		$('#id-range').attr('step', 10000);
				$('#id-range2').attr('step', 10000);

	    	}
	    	if( value > 5000){
	    		// value = value - 1000;
	    	}
	    	// console.log(value);
	    	$('#js-output').css('left',position).text( CurrencyFormatted(value) );
	    	$('#price-control').val(value);
	    	$('#js-output2').css('left',position).text( CurrencyFormatted(value) );
	    	$('#price-control2').val(value);
	    	// $('#js-output').attr('price', value);
	    },

	    // Callback function
	    onSlideEnd: function(position, value) {
	    	// $('#the-price').html( CurrencyFormatted( parseInt($('#js-output').attr('price')) + value) );
	    	celengan = value;
			$('#the-price').text( CurrencyFormatted(total + celengan ) );
			$('#celengan-range').attr('value', celengan);
			$('#the-price2').text( CurrencyFormatted(total + celengan ) );
			$('#celengan-range').attr('value', celengan);
	    }
	});

	$('#price-control').change(function(event){
		$('input[type="range"]').val($(this).val()).change();
	})
	$('#price-control2').change(function(event){
		$('input[type="range"]').val($(this).val()).change();
	})

	// $( "select" )
	//   .change(function() {
	//     var str = "";
	//     $( "select option:selected" ).each(function() {
	//       str += $( this ).text() + " ";
	//     });
	//     $( "div" ).text( str );
	//   })
	//   .trigger( "change" );

	// $('.order-sidebar').scrollToFixed({ marginTop: 30});
	// $('.invoice-sidebar').scrollToFixed({zIndex:1, marginTop: 60});
	       

	/* hot thread date picker */
	// var to = new Date();
	// var from = new Date(to.getTime() - 1000 * 60 * 60 * 24 * 14);

	//FJB CROP images
	// $('.upload-image-holder').fjbcrop();

	// content lazy load
	$(".mls-img").kslzy(300);

	$('body.fjb #tags').tagsInput({
    	'height':'80px',
    	'width':'100%',
    	'defaultText':'Tambahkan',
    	'placeholderColor': '#b7b7b7'
    });

	$('#datepicker-calendar').DatePicker({
		inline: true,
		// date: [from, to],
		calendars: 2,
		mode: 'range',
		// current: new Date(to.getFullYear(), to.getMonth() - 1, 1),
		onChange: function(dates, el) {
			$('#date-range-field span').html(dates[0].getDate() + '/' + ( dates[0].getMonth(true) + 1 ) + '/' + dates[0].getFullYear() + ' - ' +
				dates[1].getDate() + '/' + ( dates[1].getMonth(true) + 1 ) + '/' + dates[1].getFullYear());
		}
	});

	$('#dp2').datepicker()
	  .on('changeDate', function(ev){
	    $('#dp2').datepicker('hide');
	  });

	$('.form-date').datepicker()
	.on('changeDate', function(ev){
	$('.form-date').datepicker('hide');
	});

	// initialize the special date dropdown field
	// $('#date-range-field span').text(from.getDate()+' '+from.getMonthName(true)+', '+from.getFullYear()+' - '+
	//                                 to.getDate()+' '+to.getMonthName(true)+', '+to.getFullYear());

	$('#date-range-field').bind('click', function() {
		$('#datepicker-calendar').toggle();
		$(this).toggleClass('open');
		$('#search-keyword').removeClass('open');
		return false;
	});

	$('html').click(function() {
		if ($('#datepicker-calendar').is(":visible")) {
			$('#datepicker-calendar').hide();
			$('#date-range-field').removeClass('open');
		}
	});

	$('#datepicker-calendar').click(function(event){
		event.stopPropagation();
	});


	// friend thumbnail
	$('.check-select').change(function() {
		if ($(this).prop("checked")) {
			$(this).closest('.thumbnail').addClass('selected');
		} else {
			$(this).closest('.thumbnail').removeClass('selected');
		}
	});

	// img-hover-change
	$('.thumbnail').hover(function() {
		img = $(this).find('.img-hover');
		if (img.attr('src') === '#') {
			img.attr('src', img.attr('data-large'));
		}
	});

	// fjb-carousel
	$('#carousel-largeimage').zoom({
		callback: function(){
			if( $('.zoomImg').width() <= 400 ){
				$('.zoomImg').css({
					visibility: 'hidden',
					cursor: 'default'
				});
			}else{
				$('.zoomImg').css({
					visibility: 'visible',
					cursor: 'all-scroll'
				});
			}
		}
	});

	//Sundul eropa slider
	// $(".slider-match").slick({
	// 	slidesToShow: 5,
	// 	dots: true,
	// 	infinite: false,
	// 	dotsClass: 'slider-pagination',
	// 	arrows: false,
	// 	nextArrow: '<div class="next-slider-btn"><i class="fa fa-angle-right"></i></div>',
 //    prevArrow: '<div class="prev-slider-btn"><i class="fa fa-angle-left"></i></div>'
	// });

	$('#shipping-img').zoom();

	var slider = $("#carousel-thumb").lightSlider({
		enableDrag: false,
		autoWidth: true,
		pager: false,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		controls: true,
		slideMove: 1,
		slideMargin: 0
	});

	$('.prev-thumb').click(function(){
        slider.goToPrevSlide();
    });
    $('.next-thumb').click(function(){
        slider.goToNextSlide();
    });

	// accordion
	var allPanels = $('.accordion > dd').hide();

	$('.accordion > dd').first().show();
	$('.accordion > dt').first().addClass('active');

	$('.escrow .accordion > dd').first().hide();
	$('.escrow .accordion > dt').first().removeClass('active');

	$('.accordion.autoexpand > dd').show();
	$('.accordion.autoexpand > dt').addClass('active');

	$('.accordion > dt').click(function() {
		// allPanels.slideUp(300);
		// $(this).next().slideDown(300);

		// if ($('.accordion > dt').next().is(':visible')) {
		// 	$('.accordion > dt').removeClass('active');
		// 	$(this).addClass('active');
		// };
		// else if{

		// }

		// return false;
		var $this = $(this) ,
            $target = $this.next();

        $('.accordion > dt.active').not($this.toggleClass('active')).removeClass('active');

        $this.siblings('dd').not($target.addClass('active').slideToggle()).slideUp();

        return false;
	});

	// $('#tab-payment-method li a').click(function(){
	// 	// $('#kaspay > div > form > dl > dt').click();
	// 	$('.accordion > dd').show();
	// 	$('.accordion > dt').addClass('active');
	// })

	$('#tab-info-lapak li a').click(function(){
		$('#tab2 .accordion > dd').first().show();
		$('#tab2 .accordion > dt').first().addClass('active');
		$('#tab4 .accordion > dd').first().show();
		$('#tab4 .accordion > dt').first().addClass('active');
	})

	$('.head-categories-title').click(function(){
		checkArrow();
	});

	$(window).on('resize', function() {
		if ($(window).width() > 1024) {
			$('#left-nav').removeClass('full-show');
			$('#bgover').remove();
		}
	});

	$('#home-categories').children('div').addClass('show-five');
	$('.sidebar-trigger').on('click', function() {
		$('#left-nav').toggleClass('full-show');
		$('.hover-sidebar-content').height($('.tag-wrap').height());
		// if( $('body').hasClass('groupee') || $('body.forum').hasClass('inner') || $('body.groupee').hasClass('inner') || $('body.username').hasClass('inner')){
		// 	setTimeout(function() {
				// $('.head-categories-title').eq(1).click();
		// 	}, 50);
		// }
	});

	// sortable
	$('.sortable').sortable({
		items: ':not(.disabled)'
	});

	// backend sortable JS
	$("#sidebar-category").sortable().bind("sortupdate", function()
	{
		var a = $("#sidebar-category > li").map(function()
		{
			if($(this).attr("data-submenu-id"))
			{
				var tag_id = $(this).attr("data-submenu-id").split('-');
				return "tag_id[]=" + tag_id[2];
			} else
				return null;
		}).get();
		$.ajax(
		{
			url: urlSaveTagOrder,
			type: "post",
			data: a.join("&"),
			success: function() {},
			error: function()
			{
				alert("Please try again");
			}
		});
	});

	// hover-sidebar-content
	if ($('#home-categories').length < 1) {
		$('.hover-sidebar-content').height($('.tag-wrap').height());
	}

	//mCustomScrollbar
	$(".event-calendar, .scrolling-con-update").mCustomScrollbar({
		advanced: {
			updateOnContentResize: true,
			autoScrollOnFocus: false
		}
	});

	// be step
	$('#wts-tab .step li').cycle(2500, 'active');
	$('#be-buyer-tab .step li').cycle(2500, 'active');

	// custom select
	$('select.select').customSelect();

	$('.modal').on('shown.bs.modal', function (e) {
		$('.select').trigger('render');
	})

	// tooltips
	$('.tooltips').tooltip();
	$('.popovers').popover({
		trigger: 'hover'
	});

	// markItUp
	$('#reply-messsage').markItUp(kaskusBbcodeSettings).focus();

	// selected first header search
	// $('#k-hp-list label:first').click();

	// FJB Thread list brand
	$('.brand-con .brand').each(function(index, el) {
		$(this).width(Math.floor($('.brand-con').width() / $('.brand-con .brand').length) - 1);
	});

	// search width
	$('#search').focus(function(event) {
		$('.global-search').addClass('large');
	});

	$('#search').blur(function(event) {
		$('.global-search').removeClass('large');
	});

	// badges
	$(".badges .user-badge>div .badge").bind("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationend", function() {
		$(this).removeClass("swing");
	});

	$(".badges .user-badge>div .badge").hover(function() {
		$(this).addClass("swing");
	});

	$(".must-number").keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			 // Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			 // Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});

	// BackEnd
		// hide unused div search result pages
	if ($("ul#filter_list").has("li").length > 0){
		$('#div_filter').css('display', 'block');
		$('#clear_filter').css('display', 'inline-block');
	}

	// back to top
	$('.back-to-top, .back-top').bind('click', function(event) {
		if( $(window).scrollTop() < 40 ) return;
		$('html, body').animate({ scrollTop: 0 }, 500);
	});

	// bottom leaderboard fix
	if( $('.main-content-full').length ){
		$('#bottom-leaderboard').children().attr('style', '');
	}

	// search result height fix
	if( $('#search-result').length ){
		if( $('#search-result').height() < $('#refine-search').height() ){
			$('#search-result').find('tbody').height( $('#refine-search').height() - 98 );
		}
	}

	// floating notice
	$('<div id="floating_notice" class="header-notification-wrap visible"><div class="header-notification"><span id="notice_span"></span></div></div>').appendTo('body').hide();

	// placeholder
	$('input, textarea').placeholder();

	// input helper verified seller form

	$(".verified-seller-form").hide();
	
	$( "#button-form-verified-seller" ).click(function() {
	  $(".verified-seller-trigger").hide();
	  $(".verified-seller-form").show();
	});

	$( ".verified-seller-form input[type='text']" ).focusin(function() {
		$(".input-helper").show();
	});
	$( ".verified-seller-form input[type='text']" ).focusout(function() {
		$(".input-helper").hide();
	});

	// landing hot review carousel
	$('#landing-hot-review').find('.item').each(function(){
		var next = $(this).next();
		if (!next.length) {
		    next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i = 0; i < 1; i++) {
		    next = next.next();
		    if (!next.length) {
		        next = $(this).siblings(':first');
		    }
		    next.children(':first-child').clone().appendTo($(this));
		}
	});

	// career
	if($('.career-page').length){
		var url = document.location.toString();
		if (url.match('#')) {
			$('.career-page .nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
		}
		$('.career-page .nav-tabs a').on('shown', function (e) {
			window.location.hash = e.target.hash;
		})
		$('.career-page .nav-tabs a').click(function (e) {
			window.location.hash = e.target.hash;
		})

		function offsetAnchor() {
		    if(location.hash.length !== 0) {
		        window.scrollTo(window.scrollX, window.scrollY - 200);
		    }
		}
		if( $('.career-page').length ){
			$(window).on("hashchange", function () {
			    offsetAnchor();
			});
		}
	}

	//chosen select
	$('.cat-selection').chosen({
		search_contains : true,
	 	no_results_text: "Salah kali, gan!"
	});

	$('#catlevel1').chosen({
		search_contains : true,
	 	no_results_text: "Kategori tidak ada, Gan!"
	});

	$( "#catlevel1" ).change(function() {
	  	$("#catlevel2").show();
		  	$('#catlevel2').chosen({
			search_contains : true,
		 	no_results_text: "Kategori tidak ada, Gan!"
		});
	});

	$('.alamat-selection').chosen({
	 	no_results_text: "Alamat tidak ditemukan, gan!"
	});

	//chosen select
	$('.no-search').chosen({
		disable_search_threshold: 10
	});

	// google-analytics mlt & nav-ads
	$(".related-thread").find("a").click(function() {
        _gaq.push(['_trackEvent', 'more like this', 'click', this.href]);
    })
    var startHover = $.now();
    $(".trfc").hover(
        function() {
            startHover = $.now();
        },
        function() {
            var endHover = $.now();
            var msHovered = endHover - startHover;
            var seconds = msHovered / 1000;
            if (seconds >= 1) {
                var cat_tag_name = $(this).attr("cat-tag-name");
                _gaq.push(['_trackPageview', '/bannercategories/' + cat_tag_name]);
            }
        }
    );
	$('.nav-promo').find('img').addClass('trfc');

	$('.hover-sidebar-content').on('mouseup mousemove', function handler(evt) {
		evt.stopPropagation();
	});

	//change textarea resize cursor 
	$(function() {
	    $(document).on('mousemove', 'textarea', function(e) {
			var a = $(this).offset().top + $(this).outerHeight() - 16,
				b = $(this).offset().left + $(this).outerWidth() - 16;
			$(this).css({
				cursor: e.pageY > a && e.pageX > b ? 'nwse-resize' : ''
			});
		})

	.on('keyup', 'textarea', function(e) {
			$(this).height($(this).height() + this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth")) - $(this).outerHeight());
		});
	});
});

// Post Reply Textarea function to show post buttons

$(".textarea-block").on("focus", function () {
	$(".control-hidden").show();
});

function checkObject( varObject ){
	existing = varObject.length ? true : false;
	return existing;
}

var StatusControlStick = false,
	forumControl = $('.postlist').eq(0),
	userControlStick = $('.user-control-stick'),
	header = $('.site-header'),
	windowPanel = $(window),
	sidebar = $('.sidebar-wrap'),
	footer = $('.site-footer'),
	leftnav = $('#left-nav'),
	relatedThread = $('.related-thread'),
	momod = $('.momod-frame');
	kaskusStore = $('.kaskus-store');
	kasAds = $('.kaskus-ads');
	if( checkObject( leftnav ) ) leftnavTop = leftnav.position().top;
	if( checkObject( momod ) ) heightright = momod.offset().top;
	if( checkObject( kaskusStore ) ) heightright = kaskusStore.offset().top;
	
function stickSidebar() {
	leaderboardHeight = ($('#bottom-leaderboard').length && $('.main-content').width() > 689) ? 100 : 0;

	if( sidebar.height() < $('.main-content').height() ){
		if( windowPanel.scrollTop() > ( heightright - windowPanel.height() ) + momod.height() + 15 ){

			if( windowPanel.scrollTop() > ( footer.offset().top - windowPanel.height() + 5 - leaderboardHeight) ){
				var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() - leaderboardHeight);
				sidebar.css({
					position: 'fixed',
					bottom: footerHeight - 5
				});
			}else{
				sidebar.css({
					position: 'fixed',
					bottom: 0
				});
			}

		}else{
			sidebar.css('position', 'static');
		}
	}
}

function stickSidebarHot() {
	if( sidebar.height() < $('.hot-thread-wrap').height() ){
		if( windowPanel.scrollTop() > ( heightright - windowPanel.height() ) + kaskusStore.height() + 15 ){
			if( windowPanel.scrollTop() > ( footer.offset().top - windowPanel.height() + 5) ){
				var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height());
				sidebar.css({
					position: 'fixed',
					bottom: footerHeight
				});
			}else{
				sidebar.css({
					position: 'fixed',
					bottom: 0
				});
			}
		}else{
			sidebar.css('position', 'static');
		}
	}
}

function stickLeftnav() {
	if( windowPanel.scrollTop() > leftnavTop - 60){
		var marHeight = footer.offset().top - windowPanel.height() + ( windowPanel.height() - leftnav.height() - $('.site-header').height() );
		if( windowPanel.scrollTop() > ( marHeight - 25 ) ){
			var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() );
			leftnav.attr('style', 'position:fixed !important;bottom:'+ (footerHeight + 15) +'px;');
		}else{
			leftnav.attr('style', 'position:fixed !important;top:60px;');
		}
	}else{
		leftnav.attr('style', '');
	}
}

function ControlStick(){
	var windowTop = windowPanel.scrollTop() + 50;
	if( $('body').hasClass('fjb') ) {
		userContorlVal = 50;
		kasAdsOffet = 1000000;
	}else{
		userContorlVal = 0;
		kasAdsOffet = kasAds.offset().top;
	}

	if (windowTop > forumControl.offset().top && !StatusControlStick && windowTop < kasAdsOffet) {
		userControlStick.css({
			top: userContorlVal
		});
		$('.global-search').css('opacity', '0');
		StatusControlStick = true;
	}

	if(windowTop < forumControl.offset().top || windowTop > kasAdsOffet){
		if(StatusControlStick === true){
			userControlStick.css({
				top: -51
			});
			$('.global-search').css('opacity', '1');
			StatusControlStick = false;
		}
		if($('.short-url').hasClass('open')){
			$('.short-url').removeClass('open');
		}
	}
}

// header separator
function borderHeader(){
	var scroll = windowPanel.scrollTop();

	if (scroll >= 160) {
		$(".site-header").addClass("scrolled");
	} else {
		$(".site-header").removeClass("scrolled");
	}
}

function stickyInvoiceSidebar(){
	var limitScroll = $(".main-content")[0].scrollHeight - $(".invoice-sidebar")[0].scrollHeight; 
	var scroll = windowPanel.scrollTop();

	if (scroll >= limitScroll) {
		$(".invoice-sidebar").css('position', 'absolute');
		$(".invoice-sidebar").css('bottom', '0');

	}
	else{
		$(".invoice-sidebar").css('position', 'fixed');
		$(".invoice-sidebar").css('bottom', 'inherit');
	}
}

function stickyOrderInfoSidebar(){
	var scroll = windowPanel.scrollTop();
	
	if (scroll >= 30) {
		$(".order-sidebar").css('position', 'fixed');
		$(".order-sidebar").css('margin-top', '-30px');

	}
	else{
		$(".order-sidebar").css('position', 'relative');
		$(".order-sidebar").css('margin-top', '0');
	}
}

// header hide/show
// function headerAni(){
// 	var	windowTop = windowPanel.scrollTop() + 50;
// 		kasAdsOffet = kasAds.offset().top;

// 	if (windowTop > kasAdsOffet) {
// 		// Detect IE version
// 		var iev = 0;
// 		var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
// 		var trident = !!navigator.userAgent.match(/Trident\/7.0/);
// 		var rv = navigator.userAgent.indexOf("rv:11.0");

// 		if (ieold) iev = new Number(RegExp.$1);
// 		if (navigator.appVersion.indexOf("MSIE 10") != -1) iev = 10;
// 		if (trident && rv != -1) iev = 11;

// 		// Firefox or IE 11
// 		if (typeof InstallTrigger !== 'undefined' || iev == 11) {
// 			var lastScrollTop = 0;
// 			$(window).on('scroll', function() {
// 				st = $(this).scrollTop();
// 				if (st < lastScrollTop) {
// 					if (windowTop > kasAdsOffet) {
// 						$(header).css({
// 							top: 0
// 						});
// 					}
// 				} else if (st > lastScrollTop) {
// 					if (windowTop > kasAdsOffet) {
// 						$(header).css({
// 							top: -51
// 						});
// 					}
// 				}
// 				lastScrollTop = st;
// 			});
// 		}
// 		// Other browsers
// 		else {
// 			$('body').on('mousewheel', function(e) {
// 				if (windowTop > kasAdsOffet && e.originalEvent.wheelDelta > 20) {
// 					if (windowTop > kasAdsOffet) {
// 						$(header).css({
// 							top: 0
// 						});
// 					}
// 				} else if (windowTop > kasAdsOffet && e.originalEvent.wheelDelta < 0) {
// 					if (windowTop > kasAdsOffet) {
// 						$(header).css({
// 							top: -51
// 						});
// 					}
// 				}
// 			});
// 		}
// 	}else{
// 		$(header).css({
// 			top: 0
// 		});
// 	}
// }

// related content
function relatedContent(){
	if ( $(this).scrollTop() > ( $('.kaskus-ads .kasad-h').offset().top - $(window).height()) && 
		!relatedThread.hasClass('disable') && 
		!relatedThread.hasClass('fjb') ) 
	{
		relatedThread.addClass('nongol');	
	}else{
		relatedThread.removeClass('nongol');
	}
}

// Make header and leftnav position fixed when ready
// header.css("position", "fixed");

if( checkObject( $(".landing") ) ) {
	leftnav.css("position", "relative");
	leftnav.css("top", "0");
} else {
	leftnav.css("position", "fixed");
}

//scroll window
$(window).bind('scroll', function() {
	borderHeader();

	if( checkObject( $('.landing') ) ){
		if(!$('#left-nav').hasClass('full-show'))
		stickLeftnav();
	}

	if( checkObject( $('.invoice-sidebar') ) )
	stickyInvoiceSidebar();

	if( checkObject( $('.order-sidebar') ) )
	stickyOrderInfoSidebar();

	if( checkObject( momod ) )
		stickSidebar();

	if( checkObject( $('.user-control-stick') ) ){
		ControlStick();
		// headerAni();
	}

	if( checkObject( $('.kaskus-ads .kasad-h') ) )
		relatedContent();

	if( checkObject( $('.hot-thread-wrap') ) )
		stickSidebarHot();

	// fix header < 1024px
	$('.site-header').css('left', -$(this).scrollLeft() + "px");

	$('.user-control-stick').css('left', -$(this).scrollLeft() + 52 + "px");
});


if( checkObject( $('.hot-thread-wrap') ) )
	stickSidebarHot();

if( checkObject( momod ) )
	stickSidebar();

if( checkObject( $('.user-control-stick') ) )
	ControlStick();

if( checkObject( $('.kaskus-ads .kasad-h') ) )
	relatedContent();

if( checkObject( $('.landing') ) )
	setTimeout(function() {
		stickLeftnav();
	}, 130);

// Email validation
function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if( !emailReg.test( $email ) ) {
		return false;
	}else{
		return true;
	}
}
function multiEmail(email_field) {
	var form = $('#share-from');
	var email = email_field.split(',');
	for (var i = 0; i < email.length; i++) {
		var trimemail = email[i].trim();
		if (!validateEmail(trimemail, 1, 0)) {
			form.next().remove();
			form.css('border-color', 'red');
			form.after('<span style="margin: 5px 0;float: left;color: #f00;">One or more email address is invalid!</span>');
			return false;
		}
	}
	$('#form-email-thread').submit();
	return true;
}

// fjb share email thread
$('#send-share-mail').on('click', function(event) {
	emailtext = $('#share-from').val();
	multiEmail(emailtext);
});
function checkObject( varObject ){
	existing = varObject.length ? true : false;
	return existing;
}

var coverImage = $(".cover-image"),
		header = $('.site-header'),
		windowPanel = $(window),
		footer = $('.site-footer'),
		leftnav = $('#left-nav');

function stickHeader() {
	if( windowPanel.scrollTop() > coverImage.height() ){
		header.addClass("fixed");
	} else {
		header.removeClass("fixed");
	}
}

function stickLeftBanner() {
	if( windowPanel.scrollTop() > leftnavTop + 140){
		var marHeight = footer.offset().top - windowPanel.height() + ( windowPanel.height() - leftnav.height() - $('.site-header').height() );
		if( windowPanel.scrollTop() > ( marHeight - 25 ) ){
			var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() );
			leftnav.attr('style', 'position:fixed !important;bottom:'+ (footerHeight + 15) +'px;');
		}else{
			leftnav.attr('style', 'position:fixed !important;top:60px;');
		}
	}else{
		leftnav.attr('style', '');
	}
}

// Make header position absolute when there is cover image
// if( checkObject( $(coverImage) ) ) {

// 	if (coverImage.height() > 10) {
// 		// check landing page
// 		if( checkObject( $(".landing") ) ) {
// 			header.css("position", "absolute");
// 			if (windowPanel.scrollTop() > 299) {
// 				leftnav.css("position", "fixed");
// 				header.css("position", "fixed");
// 			}

// 		} else {
// 			leftnav.css("position", "absolute");
// 			header.css("position", "absolute");
// 			if (windowPanel.scrollTop() > 199) {
// 				leftnav.css("position", "fixed");
// 				header.css("position", "fixed");
// 			}

// 		}

// 	}

// };

$(window).bind('scroll', function() {

	// check when cover banner is enabled
	if( checkObject( $(coverImage) ) ) {

		if (coverImage.height() > 3) {
			stickHeader();
			$('.site-header').css('left', -$(this).scrollLeft() + "px");

			// check landing page
			if( checkObject( $(".landing") ) ) {
				stickLeftBanner();

				// check window position when page is refreshed
				if (windowPanel.scrollTop() > coverImage.height()) {
					header.css("position", "fixed");
					$('.site-header').css('left', -$(this).scrollLeft() + "px");
				} else {
					header.css("position", "absolute");
					$('.site-header').css('left', - 0);
				}

			} else {

				// check window position when page is refreshed
				if (windowPanel.scrollTop() > coverImage.height()) {
					leftnav.css("position", "fixed");
				} else {
					header.css("position", "absolute");
					leftnav.css("position", "absolute");
				}

			}
		} else {
			header.css("position", "fixed");
		}
	} else {
		$('.site-header').css('left', -$(this).scrollLeft() + "px");
	}
	
});
