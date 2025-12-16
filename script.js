
document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector('.container');
    let button = document.querySelector('.change');
    const divList = {};

    for(let i=0; i < 256; i++){
        divList[i] = document.createElement('div');
        divList[i].className = "grid";
        container.appendChild(divList[i]);
    }

    
});

