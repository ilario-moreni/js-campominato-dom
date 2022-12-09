/* 1 */

const button = document.getElementById('my-button');



/* 2 */

/* funzione della generazione della grigla */
function generateGameGrid(){
    const grid = document.querySelector('#my-table')
    /* pulisce la tabella se ricliccata */
    grid.innerHTML = '';
    grid.classList.remove('events-none')
    let arrayBombs = [];
    let score = 0;
    /* genera la tabella */
    for (let i = 0; i < 100; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = i+1;
        cell.addEventListener('click',
        /*  3 - funzione del toggle delle celle */
        function(){
            score++;
            this.classList.toggle('clicked')
            console.log(this.innerText)
            /* inserire qui il check delle bombe */
            if(arrayBombs.includes(parseInt(this.innerText))){
                this.classList.add('bomb')
                grid.classList.add('events-none')
                score--;
                alert(`Game Over il tuo punteggio è: ${score} punti`)
            }
        })
        grid.appendChild(cell)
    }
    arrayBombs = generateBombsArray();
    console.log(arrayBombs);
}

button.addEventListener('click', function(){
    generateGameGrid()
})

/* 5 */
function generateBombsArray(){
    let bombs = [];

    let i = 0;
    while(i<16){
        let num = Math.floor(Math.random()*100) + 1;
        if (!bombs.includes(num)){
            bombs.push(num);
            i++;
        }
    }
    return bombs;
}

/* calcolo punteggio */

function finalScore(){

}