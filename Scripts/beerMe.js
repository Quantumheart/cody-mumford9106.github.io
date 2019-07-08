'use strict';

var button = document.getElementById('BeerMe');

button.addEventListener('click', async function (e) {
    let url = 'https://api.openbrewerydb.org/breweries/' + getRandomInt(600);

    const response = await fetch(url);
    console.dir(response);
    const beer = await response.json();
    console.log('The brewery is: ');
    console.dir(beer);
    console.log(beer.name);

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    h5.setAttribute('id', 'beerName');
    h5.innerHTML = 'The random brewery is: ' + beer.name;

    const randomBeer = document.getElementById('randomBeer');
    randomBeer.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(h5);

})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}