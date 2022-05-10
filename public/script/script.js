function cleanError(id){
    console.log('er')
    let elementId = id+'Error';
    console.log(elementId)
    let element = document.getElementById(elementId);
    console.log(element)
    element.innerHTML = ''
}

