/***************
 * Question Number 1.
 * I found 2 way to solve this question.
 * My first formula is (feet / 5280);
 * My Second formula is (feet * 0.0001893939393939394);
 * Here I am using my second formula to solve this question.
 */
/******************
 * Question 1 Start.
 */

function feetToMile(feet) {
  if (feet < 0) {
    const inputError = "Invalid feet.Please check your feet and try again.";
    return inputError;
  } else {
    let miles = feet * 0.0001893939393939394;
    return miles;
  }
}
const fiveFeet = feetToMile(5);
console.log("Miles: " + fiveFeet);

/******************
 * Question 1 End.
 */

/***************
 * Question Number 2.
 * my formula is ((chair * 1) + (table * 3) + (bed * 5))
 */

/******************
 * Question Two Start.
 */
function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    const errorMsg =
      "Invalid Furniture Value.Please double check your Furniture value and try again.Thank You";
    return errorMsg;
  } else {
    let totalWood = chair * 1 + table * 3 + bed * 5;
    return totalWood;
  }
}

const furnitureWood = woodCalculator(14, 5, 12);
console.log("Total Wood: " + furnitureWood);
/******************
 * Question 2 End.
 */

/**********************
 * Question 3
 * brickCalculator
 * 1 to 10 storey building every single storey has 15 fet;
 * 1 fet = 1000 bricks;
 * 15 fet = 15 * 1000 bricks;
 * 11 to 20 storey building every single storey has 12 fet;
 * 12 fet = 12 * 1000 bricks;
 * Then last every single story has 10 fet;
 * 10 fet = 10 * 1000 bricks;
 */

/**********************
 * Question 3 start
 */
function brickCalculator(floor) {
  let bricks = 0;
  if (floor < 0) {
    const errorMsg =
      "Invalid Floor Input.Please check your floor input and try again.Thank You";
    return errorMsg;
  } else if (floor <= 10) {
    bricks = floor * (15 * 1000);
    return bricks;
  } else if (floor >= 11 && floor <= 20) {
    floor -= 10;
    bricks = 10 * (15 * 1000) + floor * (12 * 1000);
    return bricks;
  } else {
    floor -= 20;
    bricks = 10 * (15 * 1000) + 10 * (12 * 1000) + floor * (10 * 1000);
    return bricks;
  }
}
const bricksNeed = brickCalculator(30);
console.log("Total Bricks: " + bricksNeed);

/**********************
 * Question 3 end
 */

/**********************
 * Question Number 4 Start
 * tinyFriend
 */

function tinyFriend(name) {
  let tinyArray = name;
  let tinyName = tinyArray[0];
  let tinyNameIndex = 0;
  for (let i = 1; i < tinyArray.length; i++) {
    if (tinyArray[i] == "" || tinyArray[i] == " ") {
      const errorMsg = "Please remove empty array and try again.Thank You.";
      return errorMsg;
    } else if (tinyArray[i].length < tinyName.length) {
      tinyName = tinyArray[i];
      tinyNameIndex = i;
    }
  }

  // console.log("TinyName: " + tinyName + "\nTinyIndex: " + tinyNameIndex);
  /**
   * Here I am using object because
   * return tinyName, tinyNameIndex; this returning methood is not work;
   * 2 value because I want to show you name index;
   * thats why i am using object to return value;
   */

  return {
    TinyName: tinyName,
    TinyIndex: tinyNameIndex,
  };
}

const findTinyName = tinyFriend([
  "Imran Khan",
  "GangStar",
  "Sara Soueidan",
  "Abby Covert",
  "Ethan Marcotte",
  "Chris Coyier",
  "Karen McGrane",
  "Dan Cederholm",
  "Sarah Parmenter",
  "Dave Shea",
  "Jeffrey Zeldman",
  "Rachel Andrew",
  "Simon Collison",
  "Veerle Pieters",
  "Cameron Moll",
]);
console.log(findTinyName);

/**********************
 * Question Number 4 End
 */
