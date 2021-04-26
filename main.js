"use strict"

function renderCoffee(coffee) {
    var html = '<div class="tr coffee">';
    // html += '<div class="td">' + coffee.id + '</div>';
    html += '<div class="td">' + coffee.name + '</div>';
    html += '<div class="td">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        //for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
          filteredCoffees.push(coffee);
        // }
        } else if (selectedRoast === "any") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// function updateCoffeesText(e) {
//   e.preventDefault(); // don't submit the form, we just want to update the data
//   // var selectedRoast = roastSelection.value;
//   var filteredCoffees = [];
//   var textSearch = nameSelection.value;
//   console.log(textSearch)
//
//   coffees.forEach(function(coffee) {
//     if (coffee.roast === textSearch) {
//       filteredCoffees.push(coffee);
//       // }
//     }
//   });
//   tbody.innerHTML = renderCoffees(filteredCoffees);
// }




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
// var typeButton = document.querySelector('#submitType');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector("#submitType")

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);




// typeButton.addEventListener('keydown', updateCoffees);

//
// function myFunction() {
//   // Declare variables
//   var input, filter, roast, name, txtValue;
//   input = document.querySelector("#submitType");
//   filter = input.value.toUpperCase();
//   // roast = document.querySelector("#roast-selection");
//   name =
//   // Loop through all list items, and hide those who don’t match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName(“a”)[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = “”;
//     } else {
//       li[i].style.display = “none”;
//     }
//   }
// }
