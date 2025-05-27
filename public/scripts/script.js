// CONFIGURATIE VOOR VARIABLEN IN SCRIPT
let max = 180
let min = -180
let animationDuration = 800

// DOM 
let createListCard = document.querySelector('.create-list-card')
let flower = document.querySelector('.flower') 
let flowerNew = document.querySelector('.flower-new')
let giftBoxes = document.querySelectorAll('.gift-box')// Dit selecteerd alle gift-boxes, Bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
let randomNumber = null; // https://css-tricks.com/random-numbers-css/: Is nu niks maar wordt in de listAni aangepast tot een random number.

giftBoxes.forEach(giftBox => {
    giftBox.addEventListener('click', giftBoxAni)
}); // Array Loop waarin een eventlistener word toegevoegd voor elke giftBox

// Ik maak hierboven een loop dat de var in mijn stylesheet 'random-degrees' dynamisch aanpast na het clicken op de 'createListCard'. Dit getal word willekeurig aangepast

function giftBoxAni(event) { // Gebruik van event dat niet uitmaakt waarop de .clicked word toegevoegd. Bron: https://learnjavascript.online (In deze course staat, dus volg deze course weer om dit te begrijpen)
    event.target.classList.add('clicked')
        setTimeout(() => {
            event.target.classList.remove('clicked')
        }, 250);
}

// Hide de 'new-flower' na animatie duur.
setTimeout(() => {
    flowerNew.style.display = 'none'
}, animationDuration)

//Beforeunload: Zorgt ervoor dat voordat je de site verlaat, de new-flower weer woord gedisplayed. Dit is nodig omdat deze op display none staat om niet met de DOM te interacten https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
addEventListener("beforeunload", (event) => { 
    flowerNew.style.display = 'block'
})

// LOADING STATE

if ('fetch' in window && 'DOMParser' in window) {

  document.addEventListener('submit', async function(event) {

    const form = event.target

    if (!form.hasAttribute('data-enhanced')) {
      return
    }
    event.preventDefault()

    let loadingStateButton = form.querySelector('.loading')
    
    loadingStateButton.classList.add("load-state")

    const response = await fetch(form.action, {
      method: form.method,
      body: new URLSearchParams(new FormData(form))
    })
    
    const responseText = await response.text()

    const parser = new DOMParser()
    const responseDOM = parser.parseFromString(responseText, 'text/html')

    const newState = responseDOM.querySelector('[data-enhanced="' + form.getAttribute('data-enhanced') + '"]')

    loadingStateButton.classList.remove("load-state");

    form.outerHTML = newState.outerHTML

  })
}