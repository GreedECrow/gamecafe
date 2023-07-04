// "use strict"
// console.log("Boom Stick!!")

// const hours = ["5pm-7pm", "7pm-9pm", "9pm-11pm"]

// let chairs = 0;
// let maxChairs = 5;

// const bookDnD = document.querySelector("form")
// console.log()

// const table = document.getElementById("ddtable1");

// const cells = document.getElementsByTagName('td');
// console.log(cells)


// get user intput on the radio buttons 
// so we know what time they've selected 

// get element by id th -
// if th innerText === userInput 
//




// for (const cell of cells) {
//     const status = cell.getAttribute("data-status");
//     if (status === "open") {

//     }
//   }


// for ( i=0; i  < chairs; i++){
// console.log("chairs")
// }

// if (chairs = maxChairs){
//     console.log("full")
//     alert("Sorry, we're fully booked.")
// }

// Array.from("tr")


// --------------------------------------------

let inputName;

const confirmButton = document.getElementById('confirmButton')

confirmButton.addEventListener('click', function (e) {
    e.preventDefault()
    inputName = document.getElementById('characterName').value
    console.log(inputName)
    bookingSystem(inputName)

})






const cells = document.getElementsByTagName('td');
// allow user to book time 
function bookingSystem(userInput) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function () {
            if (cells[i].classList.contains('occupied')) {
                alert('this seat has been taken!')
                console.log('how is this happening!?!')
            } else {
                cells[i].innerText = userInput
                cells[i].classList.add('occupied')
            }
        })
    }
}
