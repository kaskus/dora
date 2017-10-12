//isNextPage ( bool true) untuk tombol next
//isNextPage ( bool false ) untuk tombol false

function showNextPrev(sectionName,isNextPage) {
    idPageSelected = 'page-selected' + sectionName;
    idItemLIst = 'item-list' + " " + sectionName;
    var elements = document.getElementsByClassName(idItemLIst);
    var elementsCount = elements.length;
    var pageCount = document.getElementById(idPageSelected).innerHTML;
    
    if(isNextPage)
    {
        var targetPage = Number(pageCount) >= elementsCount ? 1 : Number(pageCount)+1;
    }
    else
    {
        var targetPage = Number(pageCount) <= 1 ? elementsCount : Number(pageCount)-1;
    }
    
    var text = pageCount.innerText || pageCount.textContent;
    document.getElementById(idPageSelected).innerHTML = targetPage + " ";
    var elements = document.getElementsByClassName(idItemLIst);
    for(i in elements)
    {
        try{
            elements[i].style.display="none"; 
        }
        catch(e){
        }
    }
    document.getElementById('item-list'+sectionName+targetPage).style.display="block";
    
    return false;
}