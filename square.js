const square = document.getElementById('square');
let angle = 180;
let rotations = 0;
let speed = 0.2;
let direction = 1;
let squareHovered = false;

// Load from local storage
if (localStorage.getItem('rotations')) {
    rotations = parseInt(localStorage.getItem('rotations'));
    document.getElementById('status').innerHTML = `square. [${rotations}]`;
    document.title = `square. [${rotations}]`;
    direction = parseInt(localStorage.getItem('direction'));
}
localStorage.setItem('direction', direction);

// Loop
setInterval(() => {
    angle += direction * speed;
    square.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
    if (angle >= 360) {
        angle = 0;
        rotations++;
        localStorage.setItem('rotations', rotations);
    } else if (angle <= 0) {
        angle = 360;
        rotations--;
        localStorage.setItem('rotations', rotations);
    }
    if (rotations == 0) {
        document.getElementById('status').innerHTML = `square.`;
        document.title = `square.`;
    } else {
        document.getElementById('status').innerHTML = `square. [${rotations}]`;
        document.title = `square. [${rotations}]`;
    }
}, 0.1);

// On click
square.addEventListener('click', () => {
    direction *= -1;
    localStorage.setItem('direction', direction);
});