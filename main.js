/* const container = document.getElementById("container");

const cell = document.createElement("div");

cell.setAttribute('class', 'cell')

const rowNum = 16;
const columns = 16;


function createRows() {
    for (let i = 0; i < 16; i++) {
        container.appendChild(cell);
    }       
    
}

createRows();*/

const container = document.getElementById("container");

function makeRows(rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);

    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        /*cell.innerText = (c + 1);*/
        container.appendChild(cell).className = "grid-item"
    }
}

makeRows(16, 16);




