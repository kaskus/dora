var selected = 'qu-entertainment';
var selectedLink = 'qu-entertainment-link';
function show(a, id){
    document.getElementById(selected).style.display = "none";
    document.getElementById(a).style.display = "block";
    document.getElementById(selectedLink).className = "";
    document.getElementById(id).className = "current";
    selected = a;
    selectedLink = id;
}
show(selected, selectedLink);