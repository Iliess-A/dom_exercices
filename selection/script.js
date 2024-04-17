/*
    */
//rajoute un title au class important.
document.querySelectorAll(".important").forEach(function(change_title) {
    change_title.setAttribute("title", "This is an important item");
});

document.querySelectorAll('img:not(.important)').forEach(function(not_important){
    not_important.style.display="none";
});

// permet d'afficher le contenue des paragraphes et le contenue de leur class si ils on ont une.
document.querySelectorAll("p:not([class])").forEach(function(paragraphe){
    console.log(paragraphe.textContent)
})
document.querySelectorAll("p[class]").forEach(function(class_et_para){
    console.log(class_et_para.textContent,' || qui est de class: ',class_et_para.className)
})

//donne une couleur random a tt les paragrphe saus ceux avec une class.
//fct randome color
let rand_col= ()=>{
    const r=parseInt(Math.random()*255);
    const g=parseInt(Math.random()*255);
    const b=parseInt(Math.random()*255);

    return `rgb(${r},${g},${b})`
};
document.querySelectorAll('p:not([class])').forEach(function(element){
    element.style.color=rand_col();
});