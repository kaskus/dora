var isHobbyOnScroll = 1;

function initOnboardingAslinyaLo(){
  loadAllHobbies();
  $('#jsModalAslinyaLo').addClass('is-open');
  $('#jsModalAslinyaLo').find('.jsModalDialog').addClass('is-animate');
  $('body').addClass('Ov(h)');
}

function setCookieOnBoarding(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    var domain = "domain="+window.location.host;
    document.cookie = cname + "=" + cvalue + "; " + expires + "; " + domain + "; path=/";
}

function bindCheckboxItem() {
  $('.checkboxItem').change(function(event){
    var checkedCheckbox = $('input[type=checkbox]:checked');
    if (checkedCheckbox.length >= 1) {
      $('.jsBtnSubmit').removeClass('disabled');
      $('.jsBtnSubmit button').prop('disabled', false);
    }
    else {
      $('.jsBtnSubmit').addClass('disabled');
      $('.jsBtnSubmit button').prop('disabled', true);
    }
    if (checkedCheckbox.length >= 3) {
      event.preventDefault();
      $('input[type="checkbox"]').not(':checked').prop('disabled', true);
    }
    else {
      $('input[type="checkbox"]').not(':checked').prop('disabled', false);
    }
  });

  $('.cardItemChannel').click(function(event){
    if ($("#jsModalAslinyaLoFinish").length) {
      $(".jsNavHeader").addClass("z1000");
    }
    else {
      $(".jsNavHeader").removeClass("z1000");
    }
  });
}

function loadAllHobbies() {
  $.ajax({
      url: "/misc/get_all_hobbies",
      success: function(resp) {
        var json = $.parseJSON(resp)['result'];
        var wrapper_id = '#hobby_wrapper';
        var hobby_html = '';
        var total_hobby = 1 ;
        for(key in json)
        {
          hobby_html += '<div class="W(1/5) H(0) Pos(r) Pb(20%)"><div class="W(100%) P(10px)"><div class="Pos(r) Ov(h) Bdrs(5px)">' +
                            '<input id="' + key + '" class="Pos(a) Op(0) Cur(p) checkboxItem" name="' + json[key].name + '" type="checkbox" value="' + key + '">' +
                              '<label class="D(b) W(100%) Pos(r) Start(0) B(0) checkboxAslinyaloChecker Cur(p)" for="' + key + '">' +
                                '<div class="W(100%) Pb(100%) Pos(r)">';
                                if (total_hobby > 10) {
                                  hobby_html += '<div class="Bgr(nr) Bgz(cv) Bgp(c) W(100%) H(100%) Pos(a) mls-img" data-type="1" style="background-image: url(' + json[key].preload_image + ')" data-src="' + hobby_img_url + json[key].icon + '"></div>';
                                } else {
                                  hobby_html += '<div class="Bgr(nr) Bgz(cv) Bgp(c) W(100%) H(100%) Pos(a)" style="background-image: url(' + hobby_img_url + json[key].icon + ')"></div>';
                                }

          hobby_html += '<div class="Bgc(#f8c31c) Bgr(nr) Bgz(cv) Op(.5) Bgp(c) D(n) Pos(a) W(100%) H(100%) Z(3) checkedStatus"></div>' +
                                    '<i class="fas fa-check-circle D(n) Pos(a) Z(9) C(#ffffff) Fz(30px) Trf(transformCenter) T(50%) Start(50%)"></i>' +
                                  '<div class="Bgc(#000000) Op(.4) Pos(a) B(0) W(100%) H(100%) Start(0)"></div>' +
                                  '<div class="C(#ffffff) Fz(15px) Pos(a) B(0) Start(50%) Trf(transformCenter) Z(9) Tsh(textShadow) W(100%) titleHobbies">' + json[key].name + '</div>' +
                                '</div>' +
                              '</label>' + 
                            '</div></div></div>';
          total_hobby ++;
        }
        $(hobby_html).appendTo(wrapper_id);
        bindCheckboxItem();
        $(".mls-img").kslzy(300);
        $('.jsModalAslinyaLoContentWrapper').scroll(function() {
            if (isHobbyOnScroll === 1) {
                isHobbyOnScroll = 0;
                setTimeout(function(){
                    $(window).off("scroll.kslzy resize.kslzy lookup.kslzy click.kslzy");
                    $(".mls-img").kslzy(300);
                    isHobbyOnScroll = 1;
                }, 300);
            }
        });
      }
  })
}


function loadHobbiesResult() {
  var hobbies = [];
  var hobbies_name = [];
  $("input[type=checkbox]:checked").each(function(){
      hobbies.push($(this).val());
      hobbies_name.push($(this).attr("name"));
  });
  dataLayer.push({
    'event': 'trackEvent',
    'eventDetails.category': 'pop up 1',
    'eventDetails.action': 'submit hobby',
    'eventDetails.label': hobbies_name.toString()
  });

    $.ajax({
    url: '/misc/get_recommendations_by_hobbies',
    type: 'post',
    data: {hobbies: hobbies},
    success: function(response){
         var json = $.parseJSON(response)['result'];
         var wrapper_2_id = '#forum_wrapper';
         var forum_html = '';
         var hobbies = json.hobbies;
         var channels = json.channels;
         var forums = json.forums;
         for(key in hobbies){
            var hobby_channel_id = forums[hobbies[key].forum_id].channel_id;
            if(typeof channels[hobby_channel_id] !== 'undefined' && typeof forums[hobbies[key].forum_id] !== 'undefined') {
              forum_html += '<div class="W(180px) H(100%) Bdrs(5px) M(10px) Pos(r) Ov(h) Bxsh(boxShadow5) cardItemChannel">' +
                            '<div class="Pos(r) H(180px)">'+
                              '<div class="Bgr(nr) Bgz(cv) Bgp(c) W(100%) Pb(100%) Blur(2px)" style="background-image: url(' + hobby_img_url + hobbies[key].icon + ')">' +
                              '</div>' +
                              '<div class="Bgc(#000000) Op(.4) Pos(a) B(0) W(100%) H(100%) Start(0)"></div>' +
                              '<img class="Pos(a) C(#ffffff) Fz(30px) Trf(transformCenter) T(50%) Start(50%) Z(9) W(48px) H(48px) Fil(whiteFilter)" src="' + tag_icon_url +  channels[hobby_channel_id].tag_icon + '">'+
                              '<div class="C(#ffffff) Fz(11px) Pos(a) B(40px) Start(50%) Trf(transformCenterX) Z(9)">channel</div>' +
                              '<div class="C(#ffffff) Fz(18px) Pos(a) B(20px) Start(50%) Trf(transformCenterX) Z(9) W(100%)">' + channels[hobby_channel_id].name + '</div>' +
                            '</div>' +
                            '<div class="Bgc(#ffffff) Ta(start) Mih(184px) Mah(184px) P(12px) Pos(r)">' +
                              '<div class="Fz(12px) C(#b3b3b3)">Forum</div>' +
                              '<div class="Fz(16px)">' + forums[hobbies[key].forum_id].name + '</div>' +
                              '<div class="Fz(13px) Fw(300) Lh(1.5) Mt(5px) Mah(72px) Ov(h) ellipsisText4">' + hobbies[key].description + '</div>' +
                              '<a href="/forum/' + hobbies[key].forum_id + '" class="C(#ffffff) Fz(14px) Bgc(#1998ed) Bdrs(3px) P(5px) Ta(c) Pos(a) B(10px) Start(50%) Trf(transformCenterX) W(90%)" onclick="setCookieOnBoarding(\'onboarding_aslinyalo_2\' ,\''  + hobbies[key].forum_id + '\', 365);setCookieOnBoarding(\'onboarding_aslinyalo\' ,\'1\', 365);">' + hobbies[key].cta + '</a>' +
                            '</div>' +
                          '</div>';
            }
         };
        $(forum_html).appendTo(wrapper_2_id);
    }
});
}



$(document).ready(function() {
    $( ".jsOnboardingCloseButton" ).on( "click", function() {
      dataLayer.push({
      'event': 'trackEvent',
      'eventDetails.category': hobby_category,
      'eventDetails.action': 'close',
      'eventDetails.label': ''
      });
    setCookieOnBoarding('onboarding_aslinyalo', '1', 365);
  });
});

$('.jsButtonAslinyaLoStart').on('click', function() {
  var checkedCheckbox = $('input[type=checkbox]:checked');
  if (checkedCheckbox.length >= 1) {
    hobby_category = 'pop up 2';
    dataLayer.push({
      'event': 'trackEvent',
      'eventDetails.category': 'pop up 2',
      'eventDetails.action': 'view popup',
      'eventDetails.label': ''
    });
    loadHobbiesResult();
    openModal('jsModalAslinyaLoStep2');
  }
});

$(".jsGotItClose").on("click", function() {
   dataLayer.push({
    'event': 'trackEvent',
    'eventDetails.category': hobby_category,
    'eventDetails.action': 'understand',
    'eventDetails.label': ''
  });
    setCookieOnBoarding('onboarding_aslinyalo', '1', 365);
  $("#jsModalAslinyaLoFinish").hide();
  $("body").removeClass("Ov(h)");
});

$(".jsNavHeader").mouseover(function() {
  $("#jsModalAslinyaLoFinish").hide();
  $("body").removeClass("Ov(h)");
});

$('.jsAslinyaLoModal').click(function(event){
  if (!$(event.target).closest('.jsModalContent').length) {
    $('.jsModal').removeClass('is-open is-animate');
    $('body').removeClass('Ov(h)');
    dataLayer.push({
      'event': 'trackEvent',
      'eventDetails.category': hobby_category,
      'eventDetails.action': 'close',
      'eventDetails.label': ''
      });
    setCookieOnBoarding('onboarding_aslinyalo', '1', 365);
  }
});