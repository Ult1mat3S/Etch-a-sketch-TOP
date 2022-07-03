
function createGrid(rows, cols) {
    const container = document.getElementById("container");
    const gridItem = document.querySelector('.grid-item');
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

function getRandomRBGValue() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

const button = document.querySelector('input');
button.addEventListener('click', updateGridSize);


function updateGridSize() {
    const newGridSize = window.prompt("New grid size");
    if (newGridSize > 64) {
        window.alert('Invalid number. Max limit: 64')
    }
    else {
        createGrid(newGridSize, newGridSize);
    }
}



container.addEventListener('mouseover', (e) => {
    if (event.target.matches('div')) {
        // event.target.classList.add('hovering');
        e.target.style.backgroundColor = getRandomRBGValue();
    }
})

createGrid(16, 16)