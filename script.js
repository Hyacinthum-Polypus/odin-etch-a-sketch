const container = document.getElementById('container');
let boxes = [];

function randomHue()
{
    let randomNumber = Math.floor(Math.random() * 1000) % 360;
    console.log(randomNumber)
    return randomNumber;
}

function colorIn()
{
    this["data-passed"] = this["data-passed"] - 10;
    this.style.backgroundColor = `hsl(0, 0%, ${this["data-passed"]}%)`;
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
        div["data-passed"] = 100;
        div.addEventListener('mouseover', colorIn);
        boxes.push(div);
    }
}

createDivs(16, 16);

function reset()
{   
    let newColumns = +prompt("How many columns?");
    let newRows = +prompt("How many rows?");

    console.log(newColumns);

    if(newColumns > 100 || newRows > 100) 
    {
        alert("Columns and rows cannot be over 100!");
        return;
    }
    else if(newColumns < 1 || newRows < 1)
    {
        alert("Columns and rows cannot be below 1!");
        return;
    }
    else if(Number.isNaN(newColumns) || Number.isNaN(newRows))
    {
        alert("Inputs must be a number!");
        return;
    }

    console.log("hello?")

    boxes.forEach(box => box.remove());
    for(box of boxes) boxes.pop();

    createDivs(newColumns, newRows);
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

