let createListCard = document.querySelector('.create-list-card');
let flower = document.querySelector('.flower'); 
let giftBoxes = document.querySelectorAll('.gift-box'); // Dit selecteerd alle gift-boxes, Bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll


giftBoxes.forEach(giftBox => {
    giftBox.addEventListener('click', giftBoxAni,);
}); // Array Loop waarin een eventlistener word toegevoegd voor elke giftBox

createListCard.addEventListener('click', listAni,);

function listAni() {
    createListCard.classList.add('clicked');
        setTimeout(() => {
            console.log("Korte Timeout voor animatie");
            createListCard.classList.remove('clicked');
            flower.classList.add('flowerAni'); 
        }, 250);
        flower.classList.remove('flowerAni'); 
}

function giftBoxAni(event) { // Gebruik van event dat niet uitmaakt waarop de .clicked word toegevoegd. Bron: https://learnjavascript.online (In deze course staat, dus volg deze course weer om dit te begrijpen)
    event.target.classList.add('clicked');
        setTimeout(() => {
            event.target.classList.remove('clicked');
        }, 250);
}