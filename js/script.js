/* 1 */

const button = document.getElementById('my-button');



/* 2 */

/* funzione della generazione della grigla */
function generateGameGrid(){
    /* pulisce la tabella se ricliccata */
    document.querySelector('#my-table').innerHTML = '';
    /* genera la tabella */
    for (let i = 0; i < 100; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = i+1;
        cell.addEventListener('click',
        /*  3 - funzione del toggle delle celle */
        function(){
            this.classList.toggle('clicked')
            console.log(this.innerText)
            /* inserire qui il check delle bombe */
        })
        document.querySelector('#my-table').appendChild(cell)
    }
}

button.addEventListener('click', function(){
    generateGameGrid()
})


