<script type="text/javascript">


//we want the targetNumber to be random...//This function is to pick a random word from the array  //Math.floor((Math.random() * 100) + 1);
var targetNumber = Math.floor((Math.random() * 100) + 19);    //console.log(targetNumber);
//var ImageRandomNumber = Math.floor((Math.random() * 100) + 20);

function imageRandomNumber() {
  var randomNumber = Math.floor((Math.random() * 12) + 1);
  return randomNumber;
}



function imageRandomValues(){

 randomNumber1 = imageRandomNumber();
 randomNumber2 = imageRandomNumber(); //callin the function for each image to give it a number
 randomNumber3 = imageRandomNumber();
 randomNumber4 = imageRandomNumber();
}

// imageRandomValues();

var randomNumber1 = imageRandomNumber();
var randomNumber2 = imageRandomNumber(); //callin the function for each image to give it a number
var randomNumber3 = imageRandomNumber();
var randomNumber4 = imageRandomNumber();

var counter = 0; //
var sum = 0;
var wins =0;
var loss =0;



$("#MatchThisScore").text(targetNumber); //id number-to-guess (selection by ID#), .text adds the  targetNumber text into the div number-to-guess
//https://stackoverflow.com/questions/7802744/adding-an-img-element-to-a-div-with-javascript

assignedValues();

function assignedValues() {

var elem = document.createElement("img");
elem.setAttribute("data-number", randomNumber1);
//add click event listener

$("#crystal1").on("click", function() {


      //console.log(this);  //logs crystal 1
      var test =  $(this).find('img')[0]; //the zero looks for html elements, assums there would be multiple and returnes it in array
      //console.log(test.attr("data-number"));  //we want to grab the data attribue by its attribue name
      var crystalNumberString = $(test).attr("data-number");//take the data number and stores it in the crystal variable

      //console.log(crystalNumberString);

      var crystalNumber = parseInt(crystalNumberString);  // we are  passing in crystalNumberString into parseInt int...to change this string into an interger


      //console.log(crystalNumber);

      counter = crystalNumber + counter;

      //console.log(counter);

      CheckScore();  // call the CheckScore function
    // we want to add this value to our score... we want to add the value of current score and the randomly assigned number
});
console.log(randomNumber1);
elem.setAttribute("src", "Assets/Images/crystal1.jpeg"); //JS syntax... .attr is jquery
elem.setAttribute("height", "200");
elem.setAttribute("width", "200");
elem.setAttribute("alt", "Flower");
document.getElementById("crystal1").appendChild(elem);



var elem2 = document.createElement("img");
elem2.setAttribute("data-number", randomNumber2);
$("#crystal2").on("click", function() {
  //console.log(this);  //logs crystal 2
  var test =  $(this).find('img')[0]; //the zero looks for html elements, assums there would be multiple and returnes it in array
  //console.log(test.attr("data-number"));  //we want to grab the data attribue by its attribue name
  var crystalNumberString = $(test).attr("data-number");//take the data number and stores it in the crystal variable

  //console.log(crystalNumberString);

  var crystalNumber = parseInt(crystalNumberString);  // we are  passing in crystalNumberString into parseInt int...to change this string into an interger


  //console.log(crystalNumber);

  counter = crystalNumber + counter;

  //console.log(counter);

    CheckScore();
});
console.log(randomNumber2);
elem2.setAttribute("src", "Assets/Images/crystal2.jpeg");
elem2.setAttribute("height", "200");
elem2.setAttribute("width", "200");
elem2.setAttribute("alt", "Flower2");
document.getElementById("crystal2").appendChild(elem2);




var elem3 = document.createElement("img");
$("#crystal3").on("click", function() {
  //console.log(this);  //logs crystal 2
  var test =  $(this).find('img')[0]; //the zero looks for html elements, assums there would be multiple and returnes it in array
  //console.log(test.attr("data-number"));  //we want to grab the data attribue by its attribue name
  var crystalNumberString = $(test).attr("data-number");//take the data number and stores it in the crystal variable

  //console.log(crystalNumberString);

  var crystalNumber = parseInt(crystalNumberString);  // we are  passing in crystalNumberString into parseInt int...to change this string into an interger


  //console.log(crystalNumber);

  counter = crystalNumber + counter;

  //console.log(counter);

    CheckScore();
});
elem3.setAttribute("src", "Assets/Images/crystal3.jpeg");
elem3.setAttribute("data-number", randomNumber3);
//console.log(randomNumber3);
elem3.setAttribute("height", "200");
elem3.setAttribute("width", "200");
elem3.setAttribute("alt", "Flower3");
document.getElementById("crystal3").appendChild(elem3);




var elem4 = document.createElement("img");
$("#crystal4").on("click", function() {
  //console.log(this);  //logs crystal 2
  var test =  $(this).find('img')[0]; //the zero looks for html elements, assums there would be multiple and returnes it in array
  //console.log(test.attr("data-number"));  //we want to grab the data attribue by its attribue name
  var crystalNumberString = $(test).attr("data-number");//take the data number and stores it in the crystal variable

  //console.log(crystalNumberString);

  var crystalNumber = parseInt(crystalNumberString);  // we are  passing in crystalNumberString into parseInt int...to change this string into an interger


  //console.log(crystalNumber);

  counter = crystalNumber + counter;

  //console.log(counter);

    CheckScore();
});
elem4.setAttribute("data-number", randomNumber4);
//console.log(randomNumber4);
elem4.setAttribute("src", "Assets/Images/crystal4.jpeg");
elem4.setAttribute("height", "200");
elem4.setAttribute("width", "200");
elem4.setAttribute("alt", "Flower4");
document.getElementById("crystal4").appendChild(elem4);

}  //closing for on window load ....

function CheckScore() {

  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You won!");
    wins++;
    $("#Wins").text(wins);
    targetNumber = Math.floor((Math.random() * 100) + 1);
    $("#MatchThisScore").text(targetNumber);
    sum = 0;
    counter = 0;
    imageRandomValues();
    $("#crystal1, #crystal2, #crystal3, #crystal4").empty()

    assignedValues();
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    loss++;
      $("#loss").text(loss)
    targetNumber = Math.floor((Math.random() * 100) + 1);
    $("#MatchThisScore").text(targetNumber);
    sum = 0;
    counter = 0;
    imageRandomValues();
    $("#crystal1, #crystal2, #crystal3, #crystal4").empty()

    assignedValues();
  }
    // might be able to put the rest funtion into the check socre fuctions...like
    //  if (counter  === targetNumber) { rest(); }
    // $("#MatchThisScore").text(targetNumber); //id number-to-guess (selection by ID#), .text adds the  targetNumber text into the div number-to-guess
    // do I want to rest the html element or do I want to rest the targetNumber text...these are the same thing
    // How do I build a rest function and then call it...where should I call it...
}

// function resetFunction() {
//     document.getElementById("targetNumber").reset();
// }


</script>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
