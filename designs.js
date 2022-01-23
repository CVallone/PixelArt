//declare the variables for the color, table, and sizePicker
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
//declare the variables
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
makeGrid(height, width);

//this code erases the previously saved grid
sizePicker.addEventListener('click', (e) => {

    e.preventDefault(); //this prevents the screen from rendering nothing,
    // if left out, the grid remains blank although the variables may be stored
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove();

    makeGrid(height,width);
});

//this is the function that spans the grid
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0;j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', (e) => {
                cell.style.backgroundColor = color.value;
            });
        }
    }

}
