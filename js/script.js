/* 1 */

const button = document.getElementById('my-button');



/* 2 */
let numCell;
/* funzione della generazione della grigla */
function generateGameGrid(){


    let select = document.getElementById('select-difficult');
    let cellPerRow = 0;
    let cellNumber = 0;
    switch(select.value){
        case '1':
            cellNumber = 100;
            cellPerRow = 10;
            break;
        case '2':
            cellNumber = 81;
            cellPerRow = 9;
            break;
        case '3':
            cellNumber = 49;
            cellPerRow = 7;
            break;
    }

    numCell = cellNumber;
    let sideLength = (520 - cellPerRow * 2) / cellPerRow + 'px';

    console.log(numCell)
    const grid = document.querySelector('#my-table')
    /* pulisce la tabella se ricliccata */
    grid.innerHTML = '';
    grid.classList.remove('events-none')
    let arrayBombs = [];
    let score = 0;
    /* genera la tabella */
    for (let i = 0; i < cellNumber; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.style.width = sideLength;
        cell.style.height = sideLength;

        cell.innerText = i+1;
        cell.addEventListener('click',
        /*  3 - funzione del toggle delle celle */
        function(){
            score++;
            this.classList.add('clicked')
            this.classList.add('events-none');
            console.log(this.innerText)
            /* inserire qui il check delle bombe */
            if(arrayBombs.includes(parseInt(this.innerText))){
                this.classList.add('bomb')
                grid.classList.add('events-none')
                score--;
                alert(`Game Over il tuo punteggio è: ${score} punti`)
            }
            if(score == cellNumber - 16){
                alert('You win')
                grid.classList.add('events-none')
            }
        })
        grid.appendChild(cell)
    }
    arrayBombs = generateBombsArray(numCell);
    console.log(arrayBombs);
}

button.addEventListener('click', function(){
    generateGameGrid()
})

/*  5  */
function generateBombsArray(numCell){
    let bombs = [];

    let i = 0;
    while(i<16){
        let num = Math.floor(Math.random()*numCell) + 1;
        if (!bombs.includes(num)){
            bombs.push(num);
            i++;
        }
    }
    return bombs;
}
