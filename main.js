
function createGrid(rows, cols) {
    const container = document.getElementById('container');
    const gridItem = document.querySelector('.grid-item');
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

function getRandomRBGValue() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

// const button = document.querySelector("input");
// button.addEventListener("click", updateGridSize);

function updateGridSize() {
    const newGridSize = window.prompt('New grid size');
    if (newGridSize > 64 || newGridSize < 1) {
        window.alert('Invalid number. Max limit: 64');
    } else {
        clearGrid();
        createGrid(newGridSize, newGridSize);
    }
}

function clearGrid() {
    const removeGridSquares = document.getElementById('container');
    removeGridSquares.innerHTML = '';
}

container.addEventListener('mouseover', (e) => {
    if (e.target.matches('.grid-item')) {
        e.target.style.backgroundColor = getRandomRBGValue();
    }
});

createGrid(16, 16);
