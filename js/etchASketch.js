const gridContainer = document.getElementById("gridContainer");
const grid = document.getElementById("grid");

let gridWidth = gridContainer.getBoundingClientRect().width;
console.log("Grid width: " + gridWidth);

function createGrid(gridWidth, cellCount, color){
    let cellWidth = gridWidth / cellCount;
    const grid = document.getElementById("grid");
    grid.style.gridTemplateColumns =`repeat(${cellCount}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${cellCount}, 1fr)`;

    for (i = 0; i < cellCount * cellCount; i++){
            const cell = createCell(cellWidth, color);
            grid.appendChild(cell);
    }
}

function createCell(cellWidth, color){
    const cell = document.createElement("div");
    cell.classList.add('cell');
    cell.style.width = cellWidth - 2 + "px";
    cell.style.height = cellWidth  - 2 + "px";
    cell.style.background = "#DEDEDE";
    cell.margin = "0px";
    cell.style.border = "1px solid #CDCDCD";
    
    // change background on hover
    cell.addEventListener("mouseenter", e => {
        if (color == true){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = "#" + randomColor;
        } else {
            cell.style.backgroundColor = "#AAA";
        }
    });
    // change background on touch
    cell.addEventListener("touchstart", e => {
        if (color == true){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = "#" + randomColor;
        } else {
            cell.style.backgroundColor = "#AAA";
        }
    });
    return cell;
}

createGrid(gridWidth, 16, false);

// clear grid
function clearGrid(){
    let allCells = document.querySelectorAll(".cell");
    allCells.forEach((cell) => {
        grid.removeChild(cell);
    })
}
// colored cells
function coloredCells(){
    clearGrid();
    createGrid(gridWidth, 16, true);
}
// reset function
function resetFunction(){
    clearGrid();
    createGrid(gridWidth, 16, false);
}

//
// buttons
//
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    resetFunction();
});

const rgb = document.getElementById("rgb");
rgb.addEventListener("click", () => {
    let size = prompt("Enter size of grid");
    clearGrid();
    createGrid(gridWidth, size, true);
})