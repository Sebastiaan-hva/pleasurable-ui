// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

const userID = 6 // MAAK DEZE OOIT DYNAMISCH

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// ----------------------------------------------- HOMEPAGE -----------------------------------------------//

app.get('/', async function (request, response) {

  const milledoniProducts = await fetch('https://fdnd-agency.directus.app/items/milledoni_products'); //Haalt alle producten ooit op
  const milledoniProductsJSON = await milledoniProducts.json(); // Maak hier een JSON van
  const {data: all_Products} = milledoniProductsJSON // Betere naamgeving, geeft de JSON Variable weer mee aan all Products

  const savedProductsURL = 'https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products';
  const savedProductsJSON = await fetch(`${savedProductsURL}?filter={"milledoni_users_id":${userID}}`);
  const {data: saved_products} = await savedProductsJSON.json();
  
   // Render index.liquid uit de Views map
   // Geef hier eventueel data aan mee
   response.render('index.liquid', {allMilledoniProducts: all_Products, savedProducts: saved_products });
})

// ----------------------------------------------- PROFILE -----------------------------------------------//

app.get('/profile', async function (request, response) {
  response.render('profile.liquid');
})

// ----------------------------------------------- SAVE GIFT CODE -----------------------------------------------//
app.post('/update-gift/:giftId', async function (request, response) {

  const savedProductsURL = 'https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products';

  const checkSavedIdRes = await fetch(`${savedProductsURL}?filter={"milledoni_products_id":${request.params.giftId},"milledoni_users_id":${userID}}`); //Request paramsID
  const checkSavedIdResJson = await checkSavedIdRes.json();

  console.log(checkSavedIdResJson)
  if (checkSavedIdResJson.data.length > 0) {
    const id = checkSavedIdResJson.data[0].id;
   
    await fetch(`${savedProductsURL}/${id}`, {
      method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=UTF-8'
        }
    });
  } else {
     await fetch('https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products', {
        method: 'POST',
        body: JSON.stringify({
            milledoni_products_id: request.params.giftId,
            milledoni_users_id: userID
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
  }
  response.redirect(303, '/');
});

// ----------------------------------------------- ZIEN VAN SAVED GIFTS -----------------------------------------------// 
app.get('/savedgifts', async function (request, response) {
  try {
    const savedGiftsResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products?filter=%7B%22milledoni_users_id%22:6%7D');
    const {data: savedGiftsJSON} = await savedGiftsResponse.json();

    const savedGiftsWithDetails = [];

    for (const gift of savedGiftsJSON) {
      const productResponse = await fetch(`https://fdnd-agency.directus.app/items/milledoni_products/${gift.milledoni_products_id}`);
      const {data: productJSON} = await productResponse.json();
      savedGiftsWithDetails.push({
        ...gift,
        productDetails: productJSON
      });
    }
    response.render('savedgifts.liquid', { savedGifts: savedGiftsWithDetails });
  } catch (error) {
    console.error('Error fetching data:', error);
    response.status(500).send('Internal Server Error');
  }
});

// ----------------------------------------------- DETAIL PAGE SPECIFIC GIFTS -----------------------------------------------// 

app.get('/gifts/:slug', async function (request, response) {
  const slug = request.params.slug;

  const giftURL = `https://fdnd-agency.directus.app/items/milledoni_products/?fields=id,slug,name,image,amount,tags,shop_name,spotter,description,url&filter={"slug":"${slug}"}`;
  const giftResponse = await fetch(giftURL);
  const giftJSON = await giftResponse.json();

  const gift = giftJSON.data[0];

  if (!gift) {
    return response.status(404).send('Gift not found');
  }

  response.render('gifts.liquid', { giftResponse: gift });
});

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\n`)
})