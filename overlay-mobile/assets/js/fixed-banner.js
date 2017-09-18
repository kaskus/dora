function setWindowHeight() {
    var windowHeight = Math.max(document.documentElement.clientHeight);
    document.getElementById('fixed-banner').style.height = windowHeight + 'px';
};
window.onload = setWindowHeight;