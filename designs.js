/*
 * Select size input
 * When size is submitted by the user, call makeGrid()
 * Select color input
 * /

/*Create constant variables for all the HTML ID elements */
const color = document.getElementById('colorPicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWeight');
const sizePicker = document.getElementById('sizePicker');
const gridTable = document.getElementById('pixelCanvas');


/*Clear off existing grid on the gridTable*/
function clearGrid() {
    gridTable.innerHTML = '';
}

/*Create the Grid table using nexted loop of tr and td, append tr to gridTable and td to tr.*/
function makeGrid() {
    var tr, td;
    for (var i = 0; i < height.value; i++) {
        tr = document.createElement('tr');
        gridTable.appendChild(tr);
        for (var j = 0; j < width.value; j++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

/*Change color of the selected cell */

function colorGrid(){
    gridTable.addEventListener('click', function(e) {
        e.preventDefault();
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = color.value;
        }
    })
}

/* Submit selected size, trigger all the other functions to */
sizePicker.addEventListener('submit',function(e) {
   e.preventDefault();
  clearGrid();
    makeGrid();
 colorGrid();
})