
let dateActuelle = new Date();

let options = { 
    anchorage :{timeZone: 'America/Anchorage', hour12: false},
    reykjavik :{timeZone: 'Atlantic/Reykjavik', hour12: false},
    moscow :{timeZone: 'Europe/Moscow', hour12: false},
 };
console.log(dateActuelle.toLocaleString());
console.log(dateActuelle.toLocaleString('fr-FR', options.anchorage));
console.log(dateActuelle.toLocaleString('fr-FR', options.reykjavik));
console.log(dateActuelle.toLocaleString('fr-FR', options.moscow));

//--------------------------------------------------------------------- exercice 2
// const birthDay = new Date('2000-06-14');
// //vas me donner le nombre d'annee depuis que je suis né.
// console.log((dateActuelle.getTime() - birthDay.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
// /*---------------- fct qui calcule le nombre de j passer depuis n'importe quel date ----------------*/
// function days_from (daate){
//     daate = new Date (daate);
// let days = daate.getTime()/(1000*60*60*24);
// //console.log(days);
// return days;
// };
// days_from('1975-10-29');
//--------------------------------------------------------------------exercice 3
// 80 000 h.
let dateIn_H = (1000*60*60)*80000;
let the_dateAfter_H = new Date(dateActuelle.getTime()+dateIn_H);
console.log(the_dateAfter_H.toString());
/*-------------------------------- exercice 3b --------------------------------*/
const button=document.getElementById('submit_hour');
const input = document.getElementById('hours');
const div_futur = document.querySelector('future_time');
button.addEventListener('click',event=>{

    //donne la futur date.
    let hours = (1000*60*60)*input.value ;
    input.value='';
    let future_date = new Date(dateActuelle.getTime()+hours);
    // console.log(future_date.toString());

    //mettre ma future date dans un h1.
    let h1_futur = document.createElement('h1');
    h1_futur.textContent= future_date;
    div_futur.appendChild(h1_futur);

});

