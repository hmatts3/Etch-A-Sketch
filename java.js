const boxesContainer = document.querySelector('#boxesContainer');



let num = 16;
// Create 16*16 boxes -1 because there is already one created


firstGrid(num);

const newButton = document.querySelector('#new');

newButton.addEventListener ('click', () => {
    newGrid();
});


function firstGrid(num) { 
    for (i=1;i<=((num*num));i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('box');
        boxesContainer.appendChild(pixel);
        const boxes = document.querySelectorAll('.box');
        pixel.style.setProperty('width', 'calc(1000px / ' + num + ')');
        pixel.style.setProperty('height', 'calc(1000px / ' + num + ')');
    }

 
    
    colorBox();
}


function colorBox() {
const boxes = document.querySelectorAll('.box');
for (let i = 0; i<boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', () => { 
    boxes[i].style.backgroundColor = 'black';
    });
}
}

function newGrid() {
const boxes = document.querySelectorAll('.box');
    for (let i = 0; i<boxes.length; i++) { 
    boxes[i].style.backgroundColor = 'white';
    let sides = parseInt(prompt('Please enter the number of squares per side'));
        if (sides >0 && sides <=100) {
            num = sides;
            removeAllBoxes();
            firstGrid(num);
            colorBox();
            return;
        }
        else if (sides === null || isNaN(sides)) {
            return;
        }
        else if (sides <=0 || sides >100) {
            alert('Please enter a value between 1 and 100.');
        }
    }};
    //set all boxes backgrounds to white
    //create a new for loop to create divs where the w&h of each box is a variable which equals 1000/userinput


function removeAllBoxes() {
const boxes = document.querySelectorAll('.box');
boxes.forEach(e => e.remove());

}


function setBoxHeight() {

}