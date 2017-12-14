<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">


//we want the targetNumber to be random...//This function is to pick a random word from the array  //Math.floor((Math.random() * 100) + 1);
var targetNumber = Math.floor((Math.random() * 100) + 20);    //console.log(targetNumber);

$("#number-to-guess").text(targetNumber); //id number-to-guess (selection by ID#), .text adds the  targetNumber text into the div number-to-guess



var counter = 0; //

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
// JQuery for each or JS a for loop
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal...using the
  // var imageCrystal1 = $("<img1>");
  // var imageCrystal2 = $("<img2>");
  // var imageCrystal3 = $("<img3>");
  // var imageCrystal4 = $("<img4>");


  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");  //adds css class

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src",  "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"); // adding a cdn, which is a piture of the crystal-image.  the attr tells the html where to put the image

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]); //adding another data attribute (attr)..each picture nedds to have its own value.

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {
  // this is an un-named function...if its un-named, it only runs here. but if the funtion is named, you can call it!
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);  // parseInt changes the string into an integer
  //console.log(typeof(crystalValue));
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You won!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }
//=== is a type-of check as well as a numbrer check
});

</script>
