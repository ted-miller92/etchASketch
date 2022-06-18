const gridContainer = document.getElementById("gridContainer");
const grid = document.getElementById("grid");

let gridWidth = gridContainer.getBoundingClientRect().width;
console.log("Grid width: " + gridWidth);

function createGrid(gridWidth, cellCount){
    let cellWidth = gridWidth / cellCount;
    const grid = document.getElementById("grid");
    grid.style.gridTemplateColumns =`repeat(${cellCount}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${cellCount}, 1fr)`;

    for (i = 0; i < cellCount * cellCount; i++){
            const cell = createCell(cellWidth);
            grid.appendChild(cell);
    }
}

function createCell(cellWidth){
    const cell = document.createElement("div");
    cell.style.width = cellWidth - 2 + "px";
    cell.style.height = cellWidth  - 2 + "px";
    cell.style.background = "#DEDEDE";
    cell.margin = "0px";
    cell.style.border = "1px solid #CDCDCD";

    // change background on hover
    cell.addEventListener("mouseenter", e => {
        cell.style.backgroundColor = "#AAA";
    });
    // change background on touch
    cell.addEventListener("touchstart", e => {
        cell.style.backgroundColor = "#AAA";
    });
    cell.addEventListener("touchmove", e => {
        cell.style.backgroundColor = "#AAA";
    });
    return cell;
}

createGrid(gridWidth, 16);
// if screen is greater then medium size,
// leave padding, act as if it were desktop/laptop

// if screen is smaller,
// check if horizontal or vertical
// if vertical, align buttons on bottom

// if horizontal, align buttons on side

//touchmove testing
grid.addEventListener("touchmove", e =>{
    console.log(e.touches);
    console.log(e.target);
    e.target.style.backGroundColor = "#AAA";
})