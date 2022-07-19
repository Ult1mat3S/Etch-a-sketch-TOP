
let rainbowColor = true;
let pickColor = null;

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

function selectColor(e) {
    rainbowColor = false
    document.getElementById("color").style.backgroundColor = e.value
    pickColor = e.value
}

function toggleRainbowMode() {
    rainbowColor = true
}

function updateGridSize() {
    const newGridSize = window.prompt('New grid size');
    if (newGridSize > 64 || newGridSize < 1) {
        window.alert('Invalid number. Max limit: 64');
    } else {
        resetGrid();
        createGrid(newGridSize, newGridSize);
    }
}

function resetGrid() {
    const removeGridSquares = document.getElementById('container');
    removeGridSquares.innerHTML = '';
    createGrid(16, 16);
}

container.addEventListener('mouseover', (e) => {
    if (e.target.matches('.grid-item') && rainbowColor == true) {
        e.target.style.backgroundColor = getRandomRBGValue();
    }
    else {
        e.target.style.backgroundColor = pickColor
    }
});

createGrid(16, 16);
