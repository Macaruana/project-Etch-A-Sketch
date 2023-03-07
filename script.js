const containerDiv = document.querySelector(".container")

function createGridElements(size) {
    containerDiv.style.display = "grid"
    containerDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    containerDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i = 0; i < (size * size); i++) { 
        let square = document.createElement("div")
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener('click', colorSquare);
    }
}

let color = "black";
function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else { 
        this.style.backgroundColor = color
    } 
}

function changeColor(choice) {
    color = choice
}

function resetBoard() {
    document.querySelectorAll(".grid-item").forEach(e => e.remove());
}



   




