//first_Name
const first_name = document.querySelector('#firstname');
const span_fstName = document.querySelector('#display-firstname');

first_name.addEventListener('keyup',even =>{
    
    //copy the value of the input .
    let copy = first_name.value;

    // console.log(copy); //debug
    
    //put the copyed value in the span.
    span_fstName.textContent= copy;

})

//Number hidden if bellow 18's
const input_age = document.querySelector('#age');
const display_age = document.querySelector('#a-hard-truth');

input_age.addEventListener('keyup',even =>{
    
    //copy the value of the input .
    let copy = input_age.value;
    
    copy<18 ? window.alert(`t'est pas assez grand petit`) :display_age.style.visibility = "visible";

});

//check if same pwd if no border red
//id pwd-confirm et pwd 

const passW = document.querySelector('#pwd');
const confPwd = document.querySelector('#pwd-confirm');

passW.addEventListener('keyup',even =>{

    let pwd = passW.value;
        
    if( pwd.length < 6 ){
        
        if(even.code === 'Tab' || even.code === 'Enter'){
            passW.style.outlineColor='red';
            window.alert('le mots de passe est trop courts');
        }
        
    }else{
        //ne passe pas en vert si on ne met Tab pq ???
        if(even.code === 'Tab' || even.code === 'Enter'){
            passW.style.outlineColor='green';
        }
    }
})

confPwd.addEventListener('keyup', even =>{
    let cPwd = confPwd.value; 
    let pwd = passW.value;
    if( cPwd !== pwd || cPwd.length<6 ){
        if(even.code === 'Enter'){
            window.alert('les mots de passe ne corresponf pas')
            confPwd.style.outlineColor='red';
        }
    }else {
        if(even.code === 'Enter'){
            confPwd.style.outlineColor='green';
        }
    }
})

const darkMode = document.getElementById('toggle-darkmode');

darkMode.addEventListener('change',even=>{
    if(darkMode.value == 'dark'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color='white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color='black';
    }
})