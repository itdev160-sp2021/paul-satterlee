//create variables for the welcome message
var greeting = "Hello ";
var name = "TreeHugger!";
var message = " Please confirm that your tree data is correct.";

//concatenate variables into a message
var welcome = greeting + name + message;

//create and initialize variables to hold data about tree
var commonName = "Red Oak";
var sciName = "Quercus rubra";
var dia = 24.2;
var datePruned = "March 14, 2021";

//get element that has id of greeting and replace content
var el = document.getElementById('greeting');
el.textContent = welcome;

//get element that has id of commonName and replace content
var elCommon = document.getElementById('commonName');
elCommon.textContent = commonName;

//get element that has id of scientificName and replace content
var elSci = document.getElementById('scientificName');
elSci.textContent = sciName;

//get element that has id of diameter and replace content
var elDiameter = document.getElementById('diameter');
elDiameter.textContent = dia;

//get element that has id of date and replace content
var elDate = document.getElementById('date');
elDate.textContent = datePruned;

