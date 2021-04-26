"use strict"

function renderCoffee(coffee) {
    var html = '<div class="card tr coffee">';
    html += '<div class="card-body coffeeCard">';
    // html += '<div class="td">' + coffee.id + '</div>';
    html += '<div class="td coffeeName ">' + coffee.name + '</div>';
    html += '<div class="td coffeeRoast text-muttext-muteded">' + coffee.roast + '</div>';
    html += '</div>';
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

    tbody.innerHTML = renderCoffees(filteredCoffees.sort((a,b) => (a.name > b.name) ? -1 : 1));
}

function updateCoffeesText(e) {
    //alert('i was called');
  //e.preventDefault(); // don't submit the form, we just want to update the data
  // var selectedRoast = roastSelection.value;
  var filteredCoffees = [];
  var textSearch = nameSelection.value.toLowerCase();
    var selectedRoast = roastSelection.value;
    //alert('sroast: ' + selectedRoast);
  console.log(textSearch);

  coffees.forEach(function(coffee) {
    if (coffee.name.toLowerCase().includes(textSearch) && (coffee.roast.toLowerCase() === selectedRoast || selectedRoast === 'any')) {
      filteredCoffees.push(coffee);
      // }
    }
  });
  tbody.innerHTML = renderCoffees(filteredCoffees.sort((a,b) => (a.name > b.name) ? -1 : 1));
}

function getRandomQuote(){
  var quotesArray = ["bada bing","You got bamboozled","Hi there","What ever"]
  return quotesArray[Math.floor(Math.random() * quotesArray.length - 1) + 1];
}

var randomQuote = document.getElementById("quote")

randomQuote.innerHTML = getRandomQuote()

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
//     var name = document.querySelector("#roast-selection-new")
//
// function addCoffee(id,name,roast){
//   //localstorage
//
// }

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButtonText = document.querySelector('#submitText');
// var typeButton = document.querySelector('#submitType');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector("#submitType")

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

submitButtonText.addEventListener('click', updateCoffeesText);

//Text content, with changing the event listerner

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
