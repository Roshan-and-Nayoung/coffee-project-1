"use strict";
// Tables are a little old school, you need to refactor the code so that each coffee is displayed in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph. Don't display the ids, these are only for our application's internal use
//

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {
    let html = '<div class="coffee h3 p-3 col-6">' + coffee.name + ' ' + '<p class="d-inline-block h6">' + coffee.roast + '</p>' + '</div>';
    // html += '<div>' + coffee.id + '</div>';
    // html += '<div>' + coffee.name + '</div>'
    // html += '<p>' + coffee.roast + '</p>';
    // html += '</div>';
    return html;
}

//When the page loads, the coffees should be sorted by their ids in ascending order
function renderCoffees(coffees) {
    let html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
function updateCoffees(e) {
    // console.log("update coffee");
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    // console.log(selectedRoast);
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        // console.log("coffee name input: " + coffeeNameInput.value + " " +  coffee.name );
        if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(coffeeNameInput.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(coffeeNameInput.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
        // console.log("coffee name input: " + coffeeNameInput.value + " " + coffee.name);
    });
    coffeeListElement.innerHTML = renderCoffees(filteredCoffees);
}


// function to add new coffee
function addCoffee(f) {
    // f.preventDefault(); // don't submit the form, we just want to update the data
    let addCoffeeName = document.querySelector('#coffee-search-add-coffee').value;
    if (addCoffeeName === '' || addCoffeeName === null || addCoffeeName ===undefined) {
        alert ('Please enter a coffee name!')
    } else {
        let newValue = {
            id: 0,
            name: document.querySelector('#coffee-search-add-coffee').value,
            roast: document.querySelector('#roast-selection-add-coffee').value
        }
        coffees.unshift(newValue);
        coffeeListElement.innerHTML = renderCoffees(coffees)
    }
}


let secondSubmitButton = document.querySelector('#submit-add-coffee');

let coffeeListElement = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeNameInput = document.querySelector("#coffee-search");

coffeeListElement.innerHTML = renderCoffees(coffees);
secondSubmitButton.addEventListener('click', addCoffee);


submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);
coffeeNameInput.addEventListener('keyup', updateCoffees);
