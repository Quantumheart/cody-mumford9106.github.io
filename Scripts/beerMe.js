'use strict';

const states = ['alabama', 'alaska', 'arizona', 'arkansas',
    'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii'
];

let button = document.getElementById('BeerMe');

button.addEventListener('click', async function (e) {
    let url = 'https://api.openbrewerydb.org/breweries/' + getRandomInt(1000);


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

});
const stateMenu = document.getElementById('StateMenu');
stateMenu.addEventListener('load', addStates(states));

function addStates(states) {
    states.forEach(state => {
        console.dir(state);
        const stateButton = document.createElement('button');
        stateButton.setAttribute('class', 'dropdown-item');
        stateButton.setAttribute('type', 'button');
        stateButton.setAttribute('value', state);
        stateButton.innerHTML = state.toUpperCase();
        stateMenu.appendChild(stateButton);
    });
};

function filterByState(input) {
    return '?by_name=' + input;
};


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}