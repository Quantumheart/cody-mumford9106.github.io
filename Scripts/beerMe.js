'use strict';

var button = document.getElementById('BeerMe');

button.addEventListener('click', async function (e) {
    let url = 'https://api.openbrewerydb.org/breweries/' + getRandomInt(600);

    const response = await fetch(url);
    const brewery = await response.json();


    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    h5.setAttribute('id', 'breweryName');
    h5.innerHTML = 'The random brewery is: ' + brewery.name;
    const location = brewery.city + ', ' + brewery.state;

    const p = document.createElement('p');
    p.setAttribute('class', 'card-text');
    p.setAttribute('id', 'brewery');
    p.innerHTML = 'Phone: ' + brewery.phone + '<br>' + 'City, State: ' + location;

    const randomBeer = document.getElementById('randomBeer');
    randomBeer.removeChild(randomBeer.childNodes[0]);
    randomBeer.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);

})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}