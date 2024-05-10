const main =document.querySelector('main');
const ul = document.createElement('ul');
const bouton = document.getElementById('click_moi');
main.appendChild(ul);

bouton.addEventListener('click',()=>{

    fetch("myjsosn.json")
    .then((response)=>response.json())
    .then((json)=>{
        ul.innerHTML="";
        json.strings.forEach(element => {
            const li = document.createElement('li');
            li.textContent=element;
            ul.appendChild(li);
            
        });
            

    })
    .catch((error)=>{
        console.log('there was an error!',error);
    })
})
/*============================================= exercice 2 =============================================*/
// "https://api.agify.io?name="+name+"&country_id="+country;
const section = document.getElementById('how_old');

const input_name = document.getElementById('your_name');
const selc_cntry = document.getElementById('ur_country');
const sub_name = document.getElementById('submit_name');

sub_name.addEventListener('click',event=>{

    let name = input_name.value;
    let country = selc_cntry.value;
    input_name.value="";
    selc_cntry.value="";
    if(country==='default'){
        const fetchName = (prenom) => fetch("https://api.agify.io/?name=" + prenom);
        fetchName(name)
	        .then((response) => response.json())
	        .then((json) => {
	        	let moy_age=json.age;
	        	let nb_name = json.count;
                let country_id = json.country_id;
                console.log(country_id);
                createDiv(nb_name,moy_age,country);

	        })
	        .catch((error) => {
	        	console.log("There was an error!", error);
	        });
    }else {
        const fetchName = (prenom,pays) => fetch("https://api.agify.io?name="+prenom+"&country_id="+pays);
        
        fetchName(name,country)
	        .then((response) => response.json())
	        .then((json) => {
	        	let moy_age=json.age;
	        	let nb_name = json.count;
                let country_id = json.country_id;
                console.log(country_id);
                createDiv(nb_name,moy_age,country);

	        })
	        .catch((error) => {
	        	console.log("There was an error!", error);
            });

    }

})

function createDiv(nom,age,country){

    const div_sect = document.createElement('div');
    section.appendChild(div_sect);

    const ul_div = document.createElement('ul')
    div_sect.appendChild(ul_div);

    const li_name = document.createElement('li')
    li_name.textContent="votre nom "+nom;
    ul_div.appendChild(li_name);

    const li_age = document.createElement('li')
    li_age.textContent = " a une moyenne d'age de "+ age;
    ul_div.appendChild(li_age);

    if(country !== 'undefined'){

        const li_country = document.createElement('li');
        li_country.textContent=" dans ce pays "+country;
        ul_div.appendChild(li_country);

    }

}
/*================================================= asynchrone site =================================================*/
const asynch_site = document.getElementById('asynchrone_site');

const url = 'https://thatsthespir.it/api';


async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData(url)
    .then(data => {
        
        const author=data.author;
        const quote=data.quote;
        // console.log(data.author);
        // console.log(data.quote);
        
        aproxyage(author);

    })
    .catch(error => {
        console.error('Error in .then():', error);
    });

    function aproxyage(newName){
        const fetchName = (prenom) => fetch("https://api.agify.io/?name=" + prenom);

        fetchName(newName)
            .then((response)=> response.json())
            .then((data)=>{
                let age = data.age;
                // console.log(age);
            })
    }
