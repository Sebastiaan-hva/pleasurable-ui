# Milledoni                      

Check onze Milledoni website [hier](https://pleasurable-ui-jby7.onrender.com)! 

## Over de opdracht

De website van Milledoni heeft als doel mensen helpen bij het kiezen van een cadeau. Dit doet het doormiddel van een (AI) chatbot. Deze helpt je bij het vinden van het / de perfecte cadeau('s). 

## Doel

Als doel gaan wij aflsuiten met de opdrachtgever. We laten ons werk zien en hopen daar nog wat feedback op te krijgen. Zodat we aan het einde van deze sprint er weer verder aan kunen werken. 

## Beschrijving

Vanuit school hebben we deze sprint vooral met UI-States, Progressive Enhancement, Animaties, UX & het POSTen en PATCHen/DELETEen van data uit de database gewerkt. Dit laten wij ook zien hieronder.

## Uitwerking / Kenmerken
### View transition:

Een uitgebreide uitwerking en uitleg hierover kan je [hier]( https://github.com/Sebastiaan-hva/pleasurable-ui/wiki/View-Transition-%E2%80%90-Luuk-Tol-(Blog)) vinden. Ik leg hier uit over de view transition waaraan ik heb gewerkt deze sprint, en hoe andere dit kunnen toepassen.

### Homepage Liquid
#### Partials
Wij hebben deze sprint ook besloten om voornamelijk te werken met partials zodat we die ook later konden plakken in bijvoorbeeld de homepage. 1 component was bijvoorbeeld 1 partial. 1 voorbeeld is de header partial (te vinden in de map 'views') of bijvoorbeeld de [imgcard partial](https://github.com/Sebastiaan-hva/pleasurable-ui/blob/main/views/partials/imgcard.liquid). Deze imgcard partial word gerendered in de homepage en is eigenlijk ook de 'main' content. Dit is de code: 

https://github.com/Sebastiaan-hva/pleasurable-ui/blob/a5c8954d6dd06dfacd8b49b043621602209f9805/views/partials/imgcard.liquid#L1-L33

Om alles even langs te gaan. Deze for loop plakt eigenlijk alle losse content / gifts (ongefiltered) in de homepage. Zoals hier staat beschereven:

https://github.com/Sebastiaan-hva/pleasurable-ui/blob/a5c8954d6dd06dfacd8b49b043621602209f9805/views/partials/imgcard.liquid#L1

Bijbehorende data uit de directus kan dan ook worden meegegeven: 

https://github.com/Sebastiaan-hva/pleasurable-ui/blob/a5c8954d6dd06dfacd8b49b043621602209f9805/views/partials/imgcard.liquid#L5

Zodat je alles niet zelf hoeft te schrijven en de content ook veranderd met nieuwe data. Ik gebruik hier 'truncate', dit zorgt ervoor dat een titel nooit langer is dan 30 karakters. Dit is zodat de styling altijd word behouden. 

Voor performance heb ik ook nagedacht met de 'loading-lazy' in HTML. Ik maak een if loop dat telt hoeveel van de images pas de lazy tag kan worden toegepast. 

https://github.com/Sebastiaan-hva/pleasurable-ui/blob/a5c8954d6dd06dfacd8b49b043621602209f9805/views/partials/imgcard.liquid#L4

In dit geval dus pas na de 9e image.

### Loading state:
#### Save-Button
En ander mooi component in de site is de Loading-state save-button, en de saven button in het algemeen. Dit is hoe het werkt:

https://github.com/user-attachments/assets/a7e6859b-d26b-4743-bd20-99e76bfac9ee

Om te bekijken hoe dit allemaal werk is het beste om [hier](https://github.com/Lutrian1/the-web-is-for-everyone-interactive-functionality?tab=readme-ov-file#save-button--loading-state) te kijken. Ik leg hier uitgebreid uit wat de loading-state allemaal doet, en hoe ik dat heb verwerkt in code.

### Detail Page

Wij kunnen maar 1 image dynamisch inladen dus daarom hebben we voor een 1 column layout gekozen. Wij hebben ook samen besloten om de layout van de website zo in te richten dat de header soort naast de content van de pagina valt zodat alle tekst altijd te lezen is tijdens het scrollen.

<img src="https://github.com/user-attachments/assets/217fefe1-b27d-46d8-8ad3-8f168befdecc" width=500>

detail page design: 

<img src="https://github.com/user-attachments/assets/f2d65b47-ad12-46e8-b751-bbf43cc66b6b" width=500>

#### Rating Component

Verder heb ik zo veel mogelijk overal de milledoni kleuren/stijl in toe te passen. Dus ook als we de assets niet hadden heb ik toch geprobeerd de svg's in de juiste style te vinden.
volledig progressively enhanced natuurlijk.

https://github.com/user-attachments/assets/8f387289-f442-4f24-a65f-da17c29f0cb6



#### Pleasurable hover Interactie


https://github.com/user-attachments/assets/a0b98b85-324a-415e-9010-09a7e6f8a9df



## Samenwerking:
### Project boards:
Dit is hoe ons project board eruit zag toen we volop aan de slag waren:

![lit](https://github.com/user-attachments/assets/6e7a2622-5574-4ae3-a036-45b77d1f6b6d)

We werkte met een aantal belangrijke componenten om ervoor te zorgen dat ons project soepel verliep. Denk aan:
-	Backlog: hierin stonden de issues waaran we nog moesten werken.
-	Todo: het werk dat we voor die week gingen doen.
-	In progress: Waaraan we werken
-	Review: Zodra we een pull request deden, linkten we deze aan de project board en gaven wij hem het label ‘review’. Alle overige issues werden hieraan gelinkt, en zodra iemand een review had gedaan, werden deze verplaatst naar ‘done’
#### Review:
In ons team werkte we ook met reviews op geleverde pull request. 2 mooie voorbeelden:
-	https://github.com/Sebastiaan-hva/pleasurable-ui/pull/67
-	https://github.com/Sebastiaan-hva/pleasurable-ui/pull/71

Hierin zie je dat we elkaars feedback verwerkten, en daarna weer opnieuw feedback gaven.

## Installatie

1. Fork deze Repo
   - Je kan een Repo forken door rechtsboven op de fork te klikken en (create fork) te drukken:
     <img width="1231" alt="image" src="https://github.com/user-attachments/assets/e0036e3b-0602-4d3c-ad11-ed496934ef8e" />
   - Zorg ervoor dat je ook even github desktop download: https://desktop.github.com/download/
   - Dit zorgt ervoor dat je de code kan kopiëren op jouw computer
   - Dit doe je door op de grootte groene knop 'code' te drukken (in jouw geforkte repo) en dan op 'open with github desktop' te drukken:
     <img width="1241" alt="image" src="https://github.com/user-attachments/assets/4472f294-646a-4d71-be83-b45faf0f27b4" />
   - sla deze nu ergens op

2. Download NoteJS: https://nodejs.org/en/download

3. Open nu de console door cmd te typen in je searchbar van windows, of door bijvoorbeeld windows + r te op je keyboard te tikken, en vervolgens cmd te typen.
    - https://www.lifewire.com/how-to-open-command-prompt-2618089#:~:text=Select%20the%20Start%20menu%20(the,Command%20Prompt%20from%20the%20list.
      
4. Installeer nu via Npm een liveserver.
   - navigeer naar jouw repo (die opgeslagen is op je computer), in mijn geval staat deze in de S: schijf, maar vaak zal deze in je C: staan.
   - Om te navigeren naar je schijf type de letter van die schijf, stel je wil in C: typen, gebruik dan :C, zit je in een D schijf, gebruik dan :D
     <img width="889" alt="image" src="https://github.com/user-attachments/assets/f57d7146-88c5-47d1-b3f9-423e789fcdda" />
   - Sleep de locatie in je console (of copy paste deze):
     
     https://github.com/user-attachments/assets/7a13077b-4893-4a07-81f5-7ae9376d8fd7
     
   - Type nu:
     > Npm Install
     <img width="865" alt="image" src="https://github.com/user-attachments/assets/f840921b-a927-4ed7-a462-bc72b2faa3b2" />
   - Nu is de NoteJS geïnstalleerd op de Repo, Typ nu:
     > Npm start
     <img width="869" alt="image" src="https://github.com/user-attachments/assets/8f0365bc-5c5c-45d7-be4c-c7d4b1114cdc" />
   - Je server opent nu op http://localhost:8000
   - Om de server te sluiten, gebruik ctrl + c
     

## Bronnen

https://github.com/fdnd-agency/milledoni/wiki/Design-Challenge

https://liquidjs.com/tags/overview.html

https://liquidjs.com/filters/overview.html

https://expressjs.com/en/5x/api.html#app.post.method

https://directus.io/docs/api/items#create-an-item

https://directus.io/docs/api/items#create-an-item

https://directus.io/docs/api/items#update-an-item

https://codepen.io/Lutrian1/pen/jEPNJMe

https://shopify.github.io/liquid/tags/iteration/

https://shopify.github.io/liquid/filters/truncate/

https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition

This project is licensed under the terms of the [MIT license](./LICENSE).

### Vragen

- Is de view transition binnen de huisstijl? Of is dit te goofy?
- Zijn de button animaties binnen de huisstijl of is dit te speels?
- De header toont nu altijd, dit is uit feedback van vorige sprint, is dit nog goed?




Figma design:

https://www.figma.com/design/It3TACmzAr4Ft9g158dQSt/Untitled?node-id=6-2&p=f&t=Ywwvn5BHWKDqHHgj-0
