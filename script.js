let isDragging = false;
document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector('.container');
    
    const divList = {};

    for(let i=0; i < 16384; i++){
        divList[i] = document.createElement('div');
        divList[i].className = "grid";
        container.appendChild(divList[i]);

        
        divList[i].addEventListener('mousedown', () => {
            isDragging = true;
        });

        divList[i].addEventListener('mousemove', () => {
            if(!isDragging) return ;
            divList[i].classList.add("change-color");
        });

        divList[i].addEventListener("mouseup", () => {
            isDragging = false;
        })
    }

    
});

