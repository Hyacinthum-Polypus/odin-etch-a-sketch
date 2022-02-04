const container = document.getElementById('container');

function createDivs(amount)
{
    for(let i = 0; i < amount; i++)
    {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
}

createDivs(16*16);