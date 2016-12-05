function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        elements[index].style.display = 'none';
    }
}

function show (elements, specifiedDisplay) {
    var computedDisplay, element, index;

    elements = elements.length ? elements : [elements];
    for (index = 0; index < elements.length; index++) {
       element = elements[index];

        // Remove the element's inline display styling
        element.style.display = '';
        computedDisplay = window.getComputedStyle(element, null).getPropertyValue('display');

        if (computedDisplay === 'none') {
            element.style.display = specifiedDisplay || 'block';
        }
    }
}

function goToStep2(){
    hide(document.querySelectorAll('.step-1'));
    show(document.querySelectorAll('.step-2'));
}
function goToStep3(){
    hide(document.querySelectorAll('.step-2'));
    show(document.querySelectorAll('.step-3'));
}