let chess = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
]

function draw () {
    let out = ''
    for (let i = 0; i < chess.length; i++) {
        out += `<div></div>`
        for(let k = 0; k < chess[i].length; k++){
           out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>` // i - по вертикали [0,1,2,3,4,5,6,7] ; k - по горизонтали [0,1,2,3,4,5,6,7]
        }
    }
    document.querySelector('#field').innerHTML = out
    document.querySelectorAll('.chess-block').forEach(elem => {
        elem.addEventListener('click', function() {
            removeClassis()
            knightMove.bind(this)()
        })
    })
}

draw()

function knightMove() {
    // По клику получаем две координаты x y
    let x = +this.dataset.x // Атрибуты дата всегда строка
    let y = +this.dataset.y 
    this.classList.add('bg-color') // Отмечаем клик добовляя цвет

    let knightVariations = [[x+2,y+1],[x+2,y-1],[x-2,y+1],[x-2,y-1],[x+1,y+2],[x+1,y-2],[x-1,y+2],[x-1,y-2]]; // Просчитываем на доске варианты хода коня
    knightVariations.forEach(([xx,yy])=>{
        if(xx>=0 && xx<8 && yy>=0 && yy<8){
            document.querySelector(`.chess-block[data-x="${xx}"][data-y="${yy}"]`).id = 'active' 
        }
    })
}

function removeClassis () {
    document.querySelectorAll('.chess-block').forEach(function (element) {
        element.classList.remove('bg-color');
        element.id = '';
    })
}