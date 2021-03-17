/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression )
 */

(function() {

/**
 * Package data and constructor objects
 */

//Package data array (simulated data source, such as JSON or database recordset)
var data = [
  {
    name: 'emmet',
    description: 'Emmet is the number one code snippet tool.',
    author: 'emmetio',
    url: 'https://atom.io/packages/emmet',
    downloads: 1662209,
    stars: 2534,
    prices: 10.50,
    selector: 'p1'
  },
  {
    name: 'atom-beautify',
    description: 'The atom-beautify package will clean up your code and make it more readable',
    author: 'Glavin001',
    url: 'https://atom.io/packages/atom-beautify',
    downloads: 4228040,
    stars: 4541,
    price: 6.75,
    selector: 'p2'
  }
];

//(Atom) Package constructor function
function Package(data){
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.selector = data.selector; //REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA

  this.getFormattedDownloads = function () {
    return this.downloads.toLocaleString();
  };

  this.getFormattedStars = function () {
    return this.stars.toLocaleString();
  };
}

/**
 * Utility Functions
 */

//Returns todays date, formatted
var getTodaysDate = function() {
  var today = new Date();
  return today.toDateString();
};

/**
 * Returns DOM element by id.
 * We're just wrapping document.getElementByID
 * in a shorthand function. If this seems confusing, 
 * just replace getEl with document.getElementById
 * in the writePackageInfo function.
 */
var getEl = function(id) {
  return document.getElementById(id);
};

/**
 * Writes the package object's data to the appropriate DOM
 * elements utilizing the package selector property.
 * @param {Package} package Package object
 * @return {void}
 */
var writePackageInfo = function(package) {
  //Get reference to DOM elements
  var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    //Write package data to DOM elements 
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
};

/**
 * Utilize package data and constructor objects to 
 * construct each package, then add package data to
 * the page via DOM functions
 */

//Write date
dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

/**
 * Write package data one by one or with a for loop.
 */

for(var i = 0; i < data.length; i++) {
  var package = new Package(data[i]);
  writePackageInfo(package);
}

}());