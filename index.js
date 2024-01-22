const gridContainer = document.querySelector('#myGrid')
const inputContainer = document.querySelector('#input')

const button = document.querySelector('#btn')

button.addEventListener('click', () => {
    let gridSize;
    do {
        gridSize = prompt("Enter the size of grid: L X W");
    } while (gridSize && (isNaN(gridSize) || gridSize < 1 || gridSize > 100));

    if (gridSize) {
        createGrid(gridSize);
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
});


function createGrid(size) {
    gridContainer.textContent = ''
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const Item = document.createElement('div')
            Item.setAttribute('style', 'border: 1px solid black; background-color: #ffffff; padding: 20px')
            const Container = document.querySelector('#myGrid')
            Container.setAttribute('style', `margin-top: 20px; display: grid; grid-template-columns: repeat(${size}, 1fr)`)
            Container.appendChild(Item)
            Item.addEventListener('mouseover', () => {
                const currentColor = Item.style.backgroundColor || 'rgb(255, 255, 255)';
                const rgb = currentColor.match(/\d+/g);
                const newColor = `rgb(${Math.max(rgb[0] - 25, 0)}, ${Math.max(rgb[1] - 25, 0)}, ${Math.max(rgb[2] - 25, 0)})`;
                Item.style.backgroundColor = newColor;
            })
        }
    }
}

const rows = 16
const columns = 16

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div')
        gridItem.className = 'grid-item'
        gridContainer.appendChild(gridItem)
        gridItem.addEventListener('mouseover', () => {
            const currentColor = gridItem.style.backgroundColor || 'rgb(255, 255, 255)';
            const rgb = currentColor.match(/\d+/g);
            const newColor = `rgb(${Math.max(rgb[0] - 25, 0)}, ${Math.max(rgb[1] - 25, 0)}, ${Math.max(rgb[2] - 25, 0)})`;
            gridItem.style.backgroundColor = newColor;
            // const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            // gridItem.style.backgroundColor = randomColor;
        })
    }
}



