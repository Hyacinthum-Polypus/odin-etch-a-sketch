const container = document.getElementById('container');
let boxes = [];

function createDivs(amount)
{
    for(let i = 0; i < amount; i++)
    {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
        boxes.push(div);
    }
}

function colorIn()
{
    this.classList.add('colored')
}

createDivs(16*16);

boxes.forEach(box => {
    box.addEventListener('mouseover', colorIn);
});