let isDragging = false;

let button = document.querySelector('.change-pad');

let size = 100;
let gridSize = size * size;
let container = document.querySelector('.container');


button.addEventListener('click', () => {
    size = Number(prompt("Enter size for your sketchpad(Eg -> 64): "));

    if(size <= 100){
        true;
    }else {
        prompt("Maximum size allowed is 100");
    }
    container.textContent = "";
    container.style.width = (size * 10).toString() + "px";
    
    gridSize = size * size;
    

    const divList = {};

    for(let i=0; i < gridSize; i++){
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


document.addEventListener("DOMContentLoaded", () => {
    
    
    const divList = {};

    for(let i=0; i < gridSize; i++){
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

