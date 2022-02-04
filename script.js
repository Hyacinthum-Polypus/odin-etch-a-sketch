const container = document.getElementById('container');
let boxes = [];

function colorIn()
{
    this.classList.add('colored')
}

function createDivs(columns, rows)
{
    for(let x = 0; x < columns*rows; x++)
    {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${100/columns}%`
        div.style.height = `${100/columns}%`
        container.appendChild(div);
        div.addEventListener('mouseover', colorIn);
        boxes.push(div);
    }
}

createDivs(16, 16);

function reset()
{   
    let newColumns = prompt("How many columns?");
    let newRows = prompt("How many rows?");

    if(newColumns > 100 || newRows > 100) 
    {
        alert("Columns and rows cannot be over 100!")
        return;
    }

    boxes.forEach(box => box.remove());
    for(box of boxes) boxes.pop();

    createDivs(newColumns, newRows);
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

