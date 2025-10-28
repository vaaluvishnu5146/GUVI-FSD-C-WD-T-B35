// document or window is an global object
console.log(window)
console.log(document)

// Access heading change the text and set color to text
var heading = document.body.getElementsByTagName('h1')[0];

setTimeout(() => {
    heading.innerText = 'FSD-C-WD-T-B35'
}, 5000);

heading.style.color = "green";


// Access square and change the style
var square = document.getElementsByClassName('square')[0];
square.style.width = '100px';
square.style.height = '100px';
square.style.background = 'green';

// Counter
var countText = document.getElementById('count');
var decrementBtn = document.getElementById('decrement');
var incrementBtn = document.getElementById('increment');

// Count Variable to resolve counter value
var count = 0;

// Attach event listener
incrementBtn.addEventListener('dblclick', function (event) {
    console.log(event)
    console.log('Increment Button Clicked')
    count += 1
    countText.innerText = count
});

decrementBtn.addEventListener('dblclick', function (event) {
    console.log(event)
    console.log('Decrement Button Clicked')
    count -= 1
    countText.innerText = count
});

// Block default contextmenu
// document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
//     console.log('Context menu opened')
// });


// querySelector vs querySelectorAll
const counterParentDiv = document.getElementById('counter_container');
const para = counterParentDiv.querySelector('p#count');
console.log(para)


function createCircle(id, width, height, bg) {
    const circle = document.createElement('div');
    circle.id = id;
    circle.style.width = width;
    circle.style.height = height;
    circle.style.background = bg;
    circle.style.borderRadius = "100%";
    return circle
}

document.body.appendChild(createCircle('one', '100px', '100px', 'purple'));


document.body.append(createCircle('one', '100px', '100px', 'red'), createCircle('two', '150px', '150px', 'yellow'));