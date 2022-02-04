let penMode = 'grey-scale';
const container = document.getElementById('container');
let boxes = [];

function getRandomHexidecimal()
{
    let randomNumber = Math.floor(Math.random() * 1000) % 16;
    
    if(randomNumber < 10)
    {
        return randomNumber;
    }
    else
    {
        switch(randomNumber)
        {
            case 10:
                return 'A';
            case 11:
                return 'B';
            case 12:
                return 'C';
            case 13:
                return 'D';
            case 14:
                return 'E';
            case 15:
                return 'F';
        }
    }
}

function getRandomColor()
{
    let newColor = '#';

    for(let i = 0; i < 6; i++)
    newColor += getRandomHexidecimal();

    return newColor;
}

function colorIn()
{
    switch(penMode)
    {
        case 'grey-scale':
            this["data-passed"] = this["data-passed"] - 10;
            this.style.backgroundColor = `hsl(0, 0%, ${this["data-passed"]}%)`;
        break;
        case 'rainbow':
            this["data-passed"] = 100;
            this.style.backgroundColor = getRandomColor();
        break;
        case 'eraser':
            this["data-passed"] = 100;
            this.style.backgroundColor = 'white';
    }    
}

function createDivs(columns, rows)
{
    for(let x = 0; x < columns*rows; x++)
    {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${100/columns}%`
        div.style.height = `${100/rows}%`
        div["data-passed"] = 100;
        div.addEventListener('mouseover', colorIn);

        container.appendChild(div);
        boxes.push(div);
    }
    container.style.height = `${rows/columns*40}vw`
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

document.getElementById('reset').addEventListener('click', reset);

document.getElementById('rainbow').addEventListener('click', () => penMode = 'rainbow');

document.getElementById('grey-scale').addEventListener('click', () => penMode = 'grey-scale');

document.getElementById('eraser').addEventListener('click', () => penMode = 'eraser');