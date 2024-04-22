const ol = document.querySelector('ol');

const last_child = ol.children[4];

const first_child =ol.children[0];

ol.insertBefore(last_child,first_child);

//---------------------------------------------------------------------- étape 1.

const section = document.querySelector('main');

const second_section = section.children[1];
const third_section = section.children[2];

const h2_2 = second_section.querySelector('h2');//const h2_2 = second_section.children[0];
const h2_3 = third_section.querySelector('h2');//const h2_3 = third_section.children[0];

second_section.insertBefore(h2_3,second_section.children[1]);

third_section.insertBefore(h2_2,third_section.children[0]);

//----------------------------------------------------------------------- étape 2.

third_section.remove();//I am not sure that was the exercices.