'use strict';

const states = ['alabama', 'alaska', 'arizona', 'arkansas',
    'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii',
    'idaho', 'illinois', 'indiana', 'iowa', 'indiana', 'kansas', 'kentucky', 'louisana',
    'maine', 'maryland', 'massachusetts', 'michigan', 'michigan', 'minnesota', 'mississippi',
    'missouri', 'montana', 'nebraska', 'nevada', 'new_hampshire', 'new_jersey', 'new_mexico',
    'new_york', 'north_carolina', 'north_dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
    'rhode_island', 'south_carolina', 'south_dakota', 'tennessee', 'texas', 'utah', 'vermont',
    'virginia', 'washington', 'west_virginia', 'wisconsin', 'wyoming'
];

let button = document.getElementById('BeerMe');

button.addEventListener('click', async function (e) {
    let url = 'https://api.openbrewerydb.org/breweries/' + getRandomInt(6000);


    const response = await fetch(url);
    const brewery = await response.json();


    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    h5.setAttribute('id', 'breweryName');
    h5.innerHTML = 'Brewery: ' + brewery.name;
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
        const stateButton = document.createElement('button');
        stateButton.setAttribute('class', 'dropdown-item');
        stateButton.setAttribute('type', 'button');
        stateButton.setAttribute('id', state);
        stateButton.setAttribute('value', state);
        stateButton.innerHTML = state.toUpperCase();
        stateMenu.appendChild(stateButton);
    });
};


let dropdownList = document.getElementById('StateMenu');
dropdownList.addEventListener('click', async function (e) {

    let state = e.target.id;

    let url = 'https://api.openbrewerydb.org/breweries' + filterByState(state);
    const response = await fetch(url);
    const brewery = await response.json();


    const list = document.createElement('div');
    list.setAttribute('id', 'list' + e.target.id);

    let breweryList = document.getElementById('breweryList');

    breweryList.appendChild(list);
    let h3 = document.createElement('h3');
    h3.innerHTML = "Breweries in: " + state;
    list.appendChild(h3);

    if (breweryList.childNodes.length > 2) {
        removeChildren(breweryList)
    }
    populateCards(list, brewery);


});

function populateCards(parent, brewery) {
    for (var i = 0; i < 5; i++) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.setAttribute('id', 'breweryName');
        h5.innerHTML = 'Brewery Name: ' + brewery[i].name;
        const location = brewery[i].city + ', ' + brewery[i].state;

        const p = document.createElement('p');
        p.setAttribute('class', 'card-text');
        p.setAttribute('id', 'brewery');
        p.innerHTML = 'Phone: ' + brewery[i].phone + '<br>' + 'City, State: ' + location;

        parent.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(p);
    }
}

function removeChildren(params) {

    let childId = params.children[0].id;
    let listToRemove = document.getElementById(childId);

    params.removeChild(listToRemove);
}

function filterByState(input) {
    return '?by_state=' + input;
};


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}