"use strict"
//localstorage cannot hold an array. it can only hold a string.
//so to use localstorage you need to turn your array into a string anytime you want to store it
//which means you also need to turn the stored string into an array anytime you want to use it


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

//make a blank array to hold our list of coffee objects
 var coffees = [];
//   {id: 1, name: 'Light City', roast: 'light'},
//   {id: 2, name: 'Half City', roast: 'light'},
//   {id: 3, name: 'Cinnamon', roast: 'light'},
//   {id: 4, name: 'City', roast: 'medium'},
//   {id: 5, name: 'American', roast: 'medium'},
//   {id: 6, name: 'Breakfast', roast: 'medium'},
//   {id: 7, name: 'High', roast: 'dark'},
//   {id: 8, name: 'Continental', roast: 'dark'},
//   {id: 9, name: 'New Orleans', roast: 'dark'},
//   {id: 10, name: 'European', roast: 'dark'},
//   {id: 11, name: 'Espresso', roast: 'dark'},
//   {id: 12, name: 'Viennese', roast: 'dark'},
//   {id: 13, name: 'Italian', roast: 'dark'},
//   {id: 14, name: 'French', roast: 'dark'},
// ];





function fillCoffeeArray()
{
    //see if there is a coffeearray stored in local storage
    if (localStorage.getItem("coffeeArray") === null) {
        //alert('Filling manually');
        //if there is NOT a coffeeArray saved in localStorage, fill the array with the default data
        coffees = [
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
    }
    else
    {
        //alert('Filling from localStorage');
        // if there is a variable named coffeeArray stored in localStorage,
        // pull the value from localStorage, but remember that localStorage cannot hold an array, only a string
        // so we will need to turn the string we pulled out of localStorage back into an array
        // before we can use it in the program because it is expecting the data to be in an array of coffee objects
        //
        // we turn the JSON string we made (when we saved it and used the JSON.stringify command on it)
        // back into a JavaScript array by using the JSON.parse command
        coffees = JSON.parse(localStorage.getItem("coffeeArray"));
    }
    writeCoffeeHtmlToPage(coffees);
}

function writeCoffeeHtmlToPage(coffeeArray)
{
    tbody.innerHTML = renderCoffees(coffeeArray.sort((a,b) => (a.name > b.name) ? -1 : 1));
}

function saveCoffeeArray()
{
    //Turn the coffee array into a string because localStorage cannot hold an array (that is what JSON.stringify is for)
    //save to local storage (setItem is the save command for local storage)
    //make a variable in localStorage named coffeeArray and put the current coffee array in it,
    //but since localStorage cannot hold and array and can only hold strings, turn the array into
    // a JSON string first by using the JSON.stringify command on it before storing it.
    localStorage.setItem("coffeeArray",JSON.stringify(coffees));
}

function addToCoffeeArray()
{
  //e.preventDefault(); // don't submit the form, we just want to update the data
    //add new coffee to coffee array and call saveCoffeeArray
    //
    var newCoffeeName = addCoffee.value;
    var selectedRoast = roastSelectionNew.value;
    //Make a new object for the coffee and give it field names that match what we used for coffees originally
    var obj = {};
    //The id for the coffee has to be added and since the ids start at 1 and not zero we need to add one so we do not overlap the last id in the list
    obj['id'] = coffees.length+1;
    //add the cofee name
    obj['name'] = newCoffeeName;
    //add the selected roast
    obj['roast'] = selectedRoast;
    //push the new object onto the end of the coffees array
    coffees.push(obj);
    //The coffees array works fine now but the new addition will be lost if the page is reloaded so we need to
    //save the coffee array again to local storage since we added data to the array that is not currently saved in local storage
    saveCoffeeArray();
}


function renderCoffee(coffee) {
    var html = '<div class="card tr coffee">';
    html += '<div class="card-body coffeeCard">';
    // html += '<div class="td">' + coffee.id + '</div>';
    html += '<div class="td coffeeName " style="max-width:150px;">' + coffee.name + '</div>';
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

    //alert(html);
    return html;
}

function updateCoffees(e) {
    //e.preventDefault(); // don't submit the form, we just want to update the data
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
    writeCoffeeHtmlToPage(filteredCoffees);
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
  writeCoffeeHtmlToPage(filteredCoffees);
}

function getRandomQuote(){
  var quotesArray = ["Never trust anyone who doesn’t drink coffee. – AJ Lee","Coffee is a kind of magic you can drink. ― Catherynne M. Valente","Never underestimate the power of a good cup of coffee. – Ursula Vernon","At least there was coffee. Reliable, delicious, life-giving coffee. – Mary H.K. Choi"]
  return quotesArray[Math.floor(Math.random() * quotesArray.length - 1) + 1];
}

var randomQuote = document.getElementById("quote")

randomQuote.innerHTML = getRandomQuote()


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
// var submitCoffee = document.querySelector("#submitCoffee")
submitCoffee.addEventListener('click', addToCoffeeArray);

//submitButtonText.addEventListener('click', updateCoffeesText);


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

