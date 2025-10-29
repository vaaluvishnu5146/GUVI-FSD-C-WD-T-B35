// Access #clickMe btn
var clickMeBtn = document.getElementById('clickMe');

clickMeBtn.addEventListener('click', function(event) {
    console.log('Button Clicked')
});

// Access #name Input
var namee = document.getElementById('name');

// change, keyup, keydown
namee.addEventListener('keydown', function(event) {
    console.log('Input changing')
})

// Attach events for checkbox

// Attaching Event Listener in Old school way

// document.getElementById('pubg').addEventListener('change', function (event) {
//     console.log(event)
//     console.log('Loading Pubg...')
// });

// document.getElementById('coc').addEventListener('change', function (event) {
//     console.log(event)
//     console.log('Loading coc...')
// });

// document.getElementById('cod').addEventListener('change', function (event) {
//     console.log(event)
//     console.log('Loading cod...')
// });

// Attaching Event Listerner to Checkbox in GENZ way
document.querySelectorAll('div#games > input').forEach((element) => {
    element.addEventListener('change', function (event) {
        console.log(`Loading ${event.target.id}...`)
    })
})

// Attaching Event Listerner to radio in GENZ way
document.querySelectorAll('div#paymentMode > input').forEach((element) => {
    element.addEventListener('change', function (event) {
        console.log(`Choosing ${event.target.id}...`)
    })
})

// Attaching Event Listerner to select in GENZ way
document.getElementById('city').addEventListener('change', function(event) {
    console.log(event.target.value)
})

// Attaching Event Listener to Range
document.getElementById('brightness').addEventListener('change', 
    function(event) {
        console.log(event.target.value)
    }
)