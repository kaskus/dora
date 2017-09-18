var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
var otherTitle = document.getElementById('otherTitle');
var otherList = document.getElementById('otherList');
if (mobile) {
    otherTitle.style.display = "block";
    otherList.style.display= "block";
}
else{
  otherTitle.style.display = "none";
  otherList.style.display= "none";
}