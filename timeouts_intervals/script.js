//Exercice 1.
//============================================================
// const table = ['k', 'e', 'l', 'l', 'e', 'r'];
// let i = 0;

// function affiche() {
//     if (i < table.length) {
//         console.log(table[i]);
//         i++;
//     } else {
//         clearInterval(interval); // Clear the interval when all letters are printed
//     }
// }

// const interval = setInterval(affiche, 1000); // Store interval ID to clear it later
//---------------------------------------------------------------------------------------
// const table = ['k', 'e', 'l', 'l', 'e', 'r']; do the same but with setTimeout.
// let i = 0;

// function affiche() {
//     if (i < table.length) {
//         console.log(table[i]);
//         i++;
//         setTimeout(affiche, 1000); // Call the function again after 1 second
//     }
// }

// affiche(); // Start the sequence

//=============================================================================================
//Exercice 2
//--------------------------------------------
let secondsPassed = 55;
let minutesPassed = 59;
let hourPassed = 0;


function displayTime() {
    secondsPassed++;
    if (secondsPassed >59 ) {
        minutesPassed++;
        secondsPassed = 0;
        if(minutesPassed > 59){
            hourPassed++;
            minutesPassed=0;
            console.log(hourPassed + " hour " + minutesPassed+' minute '+secondsPassed+' second ');
        }else{
            console.log(hourPassed + " hour " + minutesPassed+' minute '+secondsPassed+' second ');
        }
    } else {
        console.log(hourPassed + " hour " + minutesPassed+' minute '+secondsPassed+' second ');
    }
}

setInterval(displayTime, 1000);
