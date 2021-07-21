let count = 14


function render() {
    let container = document.getElementById('pokemon')
    container.innerHTML = `<img id="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.onclick = function () {
    count -= 1
    render()
}
next.onclick = function () {
    count += 1
    render()
}

render()