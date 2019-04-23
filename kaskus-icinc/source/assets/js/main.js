// @codekit-prepend "backend.js";

function cloneRepeaterItem() {
  var repeaterItemLength = $(".jsRepeaterItem").length;
  var repeaterIndex = 1;
  $(this).closest(".jsRepeater").find(".jsRepeaterItem").first().clone().hide().appendTo(".jsRepeaterList");
  var clonedItem = $(this).closest(".jsRepeater").find(".jsRepeaterItem").last();
  clonedItem.find('.jsFormError').remove();
  clonedItem.find('input[type="text"]').val('');
  clonedItem.slideDown(200);

  if (repeaterItemLength == 1) {
    $(".jsRepeaterItem ").append('<button type="button" class="registration-form-repeater-remove jsRepeaterButtonRemove"><i class="icon icon-close"></i></button>');
  }
  if (repeaterItemLength == 2) {
    $('.jsRepeaterButtonAdd').hide();
  }
  $(this).closest(".jsRepeater").find(".jsRepeaterItem")
    .each(function() {
      $(this).find("input").attr("id", "repeaterItem-" + repeaterIndex);
      $(this).find(".jsRepeaterNumber").text(repeaterIndex);
      $(this).find("input").attr("placeholder", "Video Link " + repeaterIndex);
      $(this).find("input").attr("name", "options[" + repeaterIndex + ']');
      repeaterIndex++;
    });
}

function removeRepeaterItem() {
  $(this).closest(".jsRepeaterItem").remove();
  var repeaterItemLength = $(".jsRepeaterItem").length;
  var repeaterIndex = 1;
  $(".jsRepeaterItem")
    .each(function() {
      $(this).find("input").attr("id", "repeaterItem-" + repeaterIndex);
      $(this).find("input").attr("placeholder", "Video Link " + repeaterIndex);
      repeaterIndex++;
    });
  if (repeaterItemLength == 1) {
    $(".jsRepeaterItem").find('.jsRepeaterButtonRemove').remove();
  }
  if (repeaterItemLength == 2) {
    $('.jsRepeaterButtonAdd').show();
  }
}

function showModal(modalId){
  var modal = "#"+modalId;
  $(modal).show();
}




$(document).ready(function() {
  $(document).on('click', '.jsRepeaterButtonRemove', removeRepeaterItem);
  $(document).on('click', '.jsRepeaterButtonAdd', cloneRepeaterItem);

  // Get the modal
  var modal = document.getElementById('jsModalThankYou');

  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

  $(window).click(function(event) {
    if (event.target == modal) {
      $('.jsModal').hide();
    }
  });

  $('.jsButtonRegister').click(function() {
    if ($('.jsRegister:visible').length == 0) {
      $('.jsRegister').show();
      $('.jsHome').hide();
      $('html, body').animate({
        scrollTop: 0
      }, 400);
    }
  });

  $('.jsModalClose').click(function() {
    $('.jsModal').hide();
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $(".jsFormDate").flatpickr({
    dateFormat: "d-M-Y"
  });

  $(".jsFormCheckbox").change(function(e) {
    if($('.jsFormCheckbox:checked').length > 0){
        $('.jsButtonSubmit').prop("disabled", false);
    }
    else{
        $('.jsButtonSubmit').prop("disabled", true);
    }
  });​


});
