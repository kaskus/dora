// window.addEventListener('message', function(e) {
// 	console.log(e);
//   var message = e.data.message;
//   var height = e.data.height;
//   console.log("ini pas terima message" + height);
//   switch (message) {
//   	case 'update-height':
//   		$('#banner-frame').css('height', height);   
//   		break;
//     case 'expand-banner':
//       	$('#banner-frame').addClass('stretched').trigger('classChange'); 
//       	break;
//     case 'shrink-banner':
//       $('#banner-frame').removeClass('stretched');$('#banner-frame').css('height', '50px');  break;
//     default:
//       break;
//   }

// });