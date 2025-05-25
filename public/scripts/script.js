let max = 180
let min = -180
let animationDuration = 1400

let createListCard = document.querySelector('.create-list-card');
let flower = document.querySelector('.flower'); 
let header = document.querySelector('header');

let giftBoxes = document.querySelectorAll('.gift-box'); // Dit selecteerd alle gift-boxes, Bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
let randomNumber = null; // https://css-tricks.com/random-numbers-css/: Is nu niks maar wordt in de listAni aangepast tot een random number.

giftBoxes.forEach(giftBox => {
    giftBox.addEventListener('click', giftBoxAni);
}); // Array Loop waarin een eventlistener word toegevoegd voor elke giftBox

createListCard.addEventListener('click', listAni);

function listAni() {

    createListCard.classList.add('clicked');

        setTimeout(() => {

            console.log("Animatie begint");
            createListCard.classList.remove('clicked');

            // Zoekt een willekeurig nummer tussen 180 en -180 als het maar niet tussen 25 en -25 zit. Zowel, dan probeert de loop opnieuw.
            // Mijn test: https://codepen.io/Lutrian1/pen/yyNBEjj

            do{
                randomNumber = Math.random() * (max - min) + min;
                console.log("Random Number =", randomNumber);     
            } while (randomNumber >= -25 && randomNumber <= 25);
      
            console.log("Juiste nummer gevonden:", randomNumber);

            flower.style.setProperty('--random-degrees', randomNumber + 'deg');
            flower.classList.add('flowerAni'); 

            //Z-Index aanpassen en ervoor zorgen dat de DOM niet scrollbaar is
            flower.style.zIndex = '1000';
            header.style.zIndex = '-1000';   

            giftBoxes.forEach(giftBox => {
                giftBox.style.zIndex = '-1000'
            });

        }, 250); // setTimeout is de duur van de 'click animatie'

        setTimeout(() => {
            flower.classList.remove('flowerAni');
            //Verwijderd weer alles na de duur van de animatie
            flower.style.zIndex = '';
            header.style.zIndex = ''
            giftBoxes.forEach(giftBox => {
                giftBox.style.zIndex = ''
            });

        }, (animationDuration)); // Duur animatie
    
}

// Ik maak hierboven een loop dat de var in mijn stylesheet 'random-degrees' dynamisch aanpast na het clicken op de 'createListCard'. Dit getal word willekeurig aangepast

function giftBoxAni(event) { // Gebruik van event dat niet uitmaakt waarop de .clicked word toegevoegd. Bron: https://learnjavascript.online (In deze course staat, dus volg deze course weer om dit te begrijpen)
    event.target.classList.add('clicked');
        setTimeout(() => {
            event.target.classList.remove('clicked');
        }, 250);
}
