/*
*/

let rand_col= ()=>{
    const r=parseInt(Math.random()*255);
    const g=parseInt(Math.random()*255);
    const b=parseInt(Math.random()*255);

    return `rgb(${r},${g},${b})`
}

document.title = "modifying the DOM" ;

document.querySelector('body').style.backgroundColor=rand_col();

