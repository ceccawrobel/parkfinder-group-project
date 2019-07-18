//Business Logic
function Park(name, keyword, playground, parking, garden, restroom, accessibility, zone, pool) {
  this.name = name;
  //add new key for keywords (as defined below) - seems more efficient for moving into arrays (as in parkNames array for showing/hiding all) - while retaining key for full park name seems worthwhile
  this.keyword = keyword;
  this.playground = playground;
  this.parking = parking;
  this.garden = garden;
  this.restroom = restroom;
  this.accessibility = accessibility;
  this.zone = zone;
  this.pool = pool;
}

//Create a new object for each park
//note to Winter: we looked over these together and changed just a few based on the images and whatnot that Breken & Aruna had already planned out - fortunately I think the way you wrote the code for building arrays and whatnot, it s
var rainbowPark = new Park("Rainbow Park", "rainbow", true, false, true, true, false, true, true);
var unicornPark = new Park("Unicorn Park", "unicorn", true, false, true, true, true, false, true);
var dragonPark = new Park("Dragon Park", "dragon", true, true, false, true, false, true, false);
var hobbitPark = new Park("Hobbit Park", "hobbit", true, false, true, true, true, false, true);
var galaxyPark = new Park("Galaxy Park", "galaxy", false, true, true, false, false, true, true);

//Array of park objects
var parkObjects = [rainbowPark, unicornPark, dragonPark, hobbitPark, galaxyPark];

var playgroundParks = [];
var parkingParks = [];
var gardenParks = [];
var restroomParks = [];
var accessibilityParks = [];
var zoneParks = [];
var poolParks = [];

function findPlaygroundParks(park) {
  parkObjects.forEach(function(park) {
    if (park.playground == true) {
      playgroundParks.push(park.keyword);
    }
  });
}

function findParkingParks(park) {
  parkObjects.forEach(function(park) {
    if (park.parking == true) {
      parkingParks.push(park.keyword);
    }
  });
}

function findGardenParks(park) {
  parkObjects.forEach(function(park) {
    if (park.garden == true) {
      gardenParks.push(park.keyword);
    }
  });
}

function findRestroomParks(park) {
  parkObjects.forEach(function(park) {
    if (park.restroom == true) {
      restroomParks.push(park.keyword);
    }
  });
}

function findAccesibilityParks(park) {
  parkObjects.forEach(function(park) {
    if (park.accessibility == true) {
      accessibilityParks.push(park.keyword);
    }
  });
}

function findZoneParks(park) {
  parkObjects.forEach(function(park) {
    if (park.zone == true) {
      zoneParks.push(park.keyword);
    }
  });
}

function findPoolParks(park) {
  parkObjects.forEach(function(park) {
    if (park.pool == true) {
      poolParks.push(park.keyword);
    }
  });
}

//Array of park name KEYWORDS for manipulating the DOM
var parkNames = ["rainbow", "unicorn", "dragon", "hobbit", "galaxy"];

// //To show all parks with jQuery
// function showAllParks() {
//   parkNames.forEach(function(park) {
//     $("#" + park + "-result").show();
//   });
// }
//
// //To hide all parks with jQuery
// function hideAllParks() {
//   parkNames.forEach(function(park) {
//     $("#" + park + "-result").hide();
//   });
// }

// function showPlaygroundParks() {
//
// }
//
// function showParkingParks() {
//
// }
//
// function showGardenParks() {
//
// }

//OLD CODE BELOW. NEEDS TO BE REFACTORED. (Refactoring taking place above)

// //Simple functions to show the parks (jQuery version)
// function showRainbowPark() {
//   $("#rainbow-result").show();
// }
//
// function showUnicornPark() {
//   $("#unicorn-result").show();
// }


// //Simple functions to show the parks (pure JS version)
// function showUnicornPark() {
//   var text = document.getElementById("unicorn-result");
//   text.style.display = "block";
// }
//
// function showDragonPark() {
//   var text = document.getElementById("dragon-result");
//   text.style.display = "block";
// }
//
// function showHobbitPark() {
//   var text = document.getElementById("hobbit-result");
//   text.style.display = "block";
// }
//
// function showGalaxyPark() {
//   var text = document.getElementById("galaxy-result");
//   text.style.display = "block";
// }
//
// //Simple functions to hide the parks
// function hideRainbowPark() {
//   $("#rainbow-result").hide();
// }
//
// function hideUnicornPark() {
//   var text = document.getElementById("unicorn-result");
//   text.style.display = "none";
// }
//
// function hideDragonPark() {
//   var text = document.getElementById("dragon-result");
//   text.style.display = "none";
// }
//
// function hideHobbitPark() {
//   var text = document.getElementById("hobbit-result");
//   text.style.display = "none";
// }
//
// function hideGalaxyPark() {
//   var text = document.getElementById("galaxy-result");
//   text.style.display = "none";
// }

// //Complex functions sorted by feature
// function showPlayground() {
//   var checkBox = document.getElementById("playground");
//   var text = document.getElementById("playground-result");
//   if (checkBox.checked == true){
//   text.style.display = "block";
//   } else {
//    text.style.display = "none";
//  }
// }

//UI Logic
$(document).ready(function() {

  //Hide results div
  $(".hidden").hide();

  //Run all the functions to populate the arrays with the corresponding park names. This doesn't put the text anywhere; it just populates the arrays, which we then can display when we want to.
  findPlaygroundParks();
  findParkingParks();
  findGardenParks();
  findRestroomParks();
  findAccesibilityParks();
  findZoneParks();
  findPoolParks();

});
