// Setting variables for the character's name and class
// Char is just a shorthand for character to shorten our variable names
const charFirstNames = ['fudar','bihner','grue','docrid','mobraf','par','orkoth','brem','botheohveo','bike','zelvelmor','mamisk','shiang','taw','froldunter','haldi','efamul','jahmil','arveerra','nadru','cehron','ni','sigego','coshiy','hehesha','toza','negralrin','shidhen','mai','tsai','dandrv','en'];
const charLastNames = ['cuhrul','Eagledane','Windswallow','miv','birkag','Chestwinds','Battleforce','favithuehk','renzib','zigogonte','edzyegi','caing','mun','zenzobris','usalbir','shekeil','cukheil','Flamebasher','Coldblossom','shug','glovusk','Clanwood','Runevalor','buvulud','mopruft','turgimemru','vreralmu','jang','hiao','ecisca','fimosqo'];

var charClass = charClassArr[0];
var charName;


// STEP 1  ---------------------------------------------------------------------------
// Write a function called getRandomInt()
// This function should accept one input parameter called maxInt
// The function should return a random whole integer between 1 and the value of maxInt

function getRandomInt(maxInt) {
  //Ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  return Math.floor(Math.random() * Math.floor(maxInt));
  
}


function generateName(firstArr, lastArr) {
  // STEP 2 --------------------------------------------------------------------------
  // Create a locally scoped variable called myCharFirstName
  // Set the value of myCharFirstName randomly from the charFirstNames array

   var nameIndex = getRandomInt(charFirstNames.length -1);
   var myCharFirstName = charFirstNames[nameIndex];


  // Create a locally scoped variable called myCharLastName
  // Set the value of myCharFirstName randomly from the charLastNames array
  nameIndex = getRandomInt(charFirstNames.length -1);
  var myCharLastName = charLastNames[nameIndex];

  // Set the value of the global charName variable by
  // concatenating the myCharFirstName and myCharLastName variables

  charName = myCharFirstName + myCharLastName;

  // Don't edit the line below - this will show you character name on the screen
  document.getElementById("adventurerName").innerHTML = charName;
}

// STEP 3 --------------------------------------------------------------------------
var savedCharacters = [];

function saveCharacter() { 
  // STEP 4 -------------------------------------------------------------------------
  // Create an object called charObject, consisting of two properties:
  // - characterClass - with a value of charClass
  // - characterFullName - with a value of charName

  // Add the charObject to the savedCharacters array created in step 3
 
  // Create a local variable called adventurerDetails
  // Set the value to a string in the format of "Name the Class" - E.g. "tsai shug the rogue"

  var charObject =  {
    characterClass: charClass,
    characterFullName: charName,
  }

  savedCharacters.push(charObject);

  var adventurerDetails = charName + " the " + charClass;

  // Don't edit the lines below - this will add your saved character details on the screen
  var li = document.createElement("li");
  li.innerHTML = adventurerDetails;
  document.getElementById('savedCharacters').appendChild(li);

}
