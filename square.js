const square = document.getElementById('square');
let rotations = 0;
let squareHovered = false;

// Load from local storage
if (localStorage.getItem('rotations')) {
    rotations = parseInt(localStorage.getItem('rotations'));
    document.getElementById('status').innerHTML = `square. [${rotations}]`;
    document.title = `square. [${rotations}]`;
}

square.addEventListener('animationiteration', () => {
    if (!squareHovered) {
        rotations++;
        document.getElementById('status').innerHTML = `square. [${rotations}]`;
        document.title = `square. [${rotations}]`;
        localStorage.setItem('rotations', rotations);
    }
});

// On mouse in
square.addEventListener('mouseover', () => {
    squareHovered = true;
});

// On mouse out
square.addEventListener('mouseout', () => {
    squareHovered = false;
});