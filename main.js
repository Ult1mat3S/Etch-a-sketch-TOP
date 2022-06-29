const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows(16, 16);



const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
const gridItem = document.querySelector('.grid-item');

document.documentElement.style.setProperty('--main-bg-color', randomColor);

container.addEventListener('mouseover', (e) => {
    if (event.target.matches('div')) {
        event.target.classList.add('hovering');
    }
})

const button = document.querySelector('input');
button.addEventListener('click', updateGridSize);

function updateGridSize() {
    const newGridSize = window.prompt("New grid size");
    if (newGridSize >= 101) {
        window.alert('Invalid number. Max limit: 100')
    }
    else {
        makeRows(newGridSize, newGridSize);
    }
}