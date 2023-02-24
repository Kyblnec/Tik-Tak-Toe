
let pole = document.querySelector('.pole')

for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div')
    cell.classList = "cell"
    pole.appendChild(cell)
    console.log(cell);
    
}