/*
    */
//1.créé un article.
//2.créé pour chaque eleve une section.
//3.ces section doivent contennir un p avec le nom de l'apprenant. 

//creation du tableau.
const tabl_eleve = ['iliess', 'giovanni', 'tom', 'manu','zinzin','popey','jojo','tintin'];

// Tableau pour le mélange aléatoire
let copy_table = tabl_eleve // Crée une copie du tableau original

// Mélange le tableau
for (let i = copy_table.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // Choisis un index aléatoire
    [copy_table[i], copy_table[j]] = [copy_table[j], copy_table[i]]; // Échange les éléments
}

// console.log(copy_table); // debug


//randome color returned en rgb.
let rand_col= ()=>{
    const r=parseInt(Math.random()*255);
    const g=parseInt(Math.random()*255);
    const b=parseInt(Math.random()*255);

    return `rgb(${r},${g},${b})`
};
//fct permetant de savoir si une couleur est claire ou sombre.
function isLight(rgb) {
    // Extraire les valeurs r, g, b de la chaîne
    let values = rgb.match(/\d+/g).map(Number);
    let r = values[0], g = values[1], b = values[2];

    // Calculer la luminance
    let calc=r+g+b;

    calc=calc/3;
    //return true si c'est claire else false.
    if(calc>127){
        return true;
    }else{
        return false;
    }
}



copy_table.forEach(function(elem){
     //création des sections
     let section = document.createElement('section');

     //changement de la couleur du background.
     section.style.backgroundColor=rand_col();
 
     //insertion des section dans le article.
     document.querySelector('article').appendChild(section);
 
     //création des paragraphe avec le nom indexé au table.
     let p = document.createElement('p');
     p.textContent=elem;
     
     //console.log(section.style.backgroundColor); //debeug

    // si la couleur est claire alors le text s'affiche en noir else en blanc.
     if(isLight(section.style.backgroundColor)){
        p.style.color="black";
     }else{
        p.style.color="white";
     };
 
     //on insert le p dans la section.
     section.appendChild(p);
});

/*
for (i=0;i<tabl_eleve.length;i++){
    //création des sections
    let section = document.createElement('section');

    //changement de la couleur du background.
    section.style.backgroundColor=rand_col();

    //insertion des section dans le article.
    document.querySelector('article').appendChild(section);

    //création des paragraphe avec le nom indexé au table.
    let p = document.createElement('p');
    p.textContent=tabl_eleve[i];

    //on insert le p dans la section.
    section.appendChild(p);
}
*/