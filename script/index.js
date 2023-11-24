// Getting references to HTML elements
let truthOutput = document.getElementById('truthOutput');
let calButton = document.getElementById('calButton');

let truArray = [false, false, true, false, true, false, false, false, true];

// Function
function countTruthy(truArray) {
  let truth = 0;
  // looping through the array
  for (let truValue of truArray) {

    // Validating, check if the array only has true or false values
    if (typeof truValue !== 'boolean') {
      return "Enter only boolean values";
    }
    if (truValue === true) {
      truth++;
    }
  }
  // Returning truth values
  return truth;
}

calButton.addEventListener('click', function () {

  // Calling the function
  let truth = countTruthy(truArray);
  truthOutput.value = (typeof truth === 'number') ? truth : truth;
});