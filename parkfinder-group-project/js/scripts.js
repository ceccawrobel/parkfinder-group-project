/*How to get values from textboxes, dates, and drop downs:*/
var beverage = $("#beverage").val();

/*How to get values from radio buttons:*/
var flavor = $("input:radio[name=flavor]:checked").val();


/*How to get values from checkboxes:*/
var flavor = $("input:checkbox[name=flavor]:checked").val();


/*Sample script we may want to copy from*/
// <script type="text/javascript">
// function doSearch(roomquery) {
// alert('roomquery is ' + roomquery);
// }
// </script>
//
// how many rooms? <select onchange="doSearch(this.options[selectedIndex].text);">
//     <option>1</option>
//     <option>2</option>
// </select>
//Source: http: jsfiddle.net/H9jkd/

//Business Logic
//Creating the "Park" object constructor function. Reference: https://www.learnhowtoprogram.com/intro-to-programming-evening/object-oriented-javascript-3cb65911-fc7b-4e3d-ae84-8af3cbed4b34/constructors-and-prototypes
function Park(playground, parking, garden, restroom, accessibility, zone, pool) {
  this.playground = playground;
  this.parking = parking;
  this.garden = garden;
  this.restroom = restroom;
  this.accessibility = accessibility;
  this.zone = zone;
  this.pool = pool;
}

var rainbowPark = new Park(true, false, true, true, false, true, true);
var unicornPark = new Park(true, true, false, true, true, false, true);
var dragonPark = new Park(false, true, true, true, false, true, true);
var hobbitPark = new Park(true, false, true, true, true, false, false);
var galaxyPark = new Park(false, true, true, true, false, true, false);

//UI Logic
