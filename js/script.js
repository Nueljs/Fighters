const fighters = [
 '../assets/img/3b80790105.webp', 
 '../assets/img/Anna.webp',  
 '../assets/img/Hwoarang_new.webp',  
 '../assets/img/Kazuya-Mishima_new.webp',  
 '../assets/img/King_new.webp',  
 '../assets/img/Lars-Alexandersson_new.webp',  
 '../assets/img/lee_new.webp',  
 '../assets/img/Nina-Williams_new.webp',  
 '../assets/img/Paul.webp',  
 '../assets/img/Zafina_new.webp',  
]


const fighter1 = document.getElementById("fighter1");
const buttonFighter1 = document.getElementById("buttonFighter1");


const fighter2 = document.getElementById('fighter2');
const buttonFighter2 = document.getElementById("buttonFighter2");


function chooseFighter(imagen){
    const randomIndex = Math.floor(Math.random() * fighters.length);
    imagen.src = personajes[randomIndex]
    imagen.style.display = "block";
}

buttonFighter1.addEventListener('click', ()=> chooseFighter(fighter1));
buttonFighter2.addEventListener('click', ()=> chooseFighter(fighter2));