let booleanOutput = document.getElementById('truthOutput');
let calButton = document.getElementById('calButton');

// Adding function
function countTruthy(truArray) {
  let truth = 0;

  // Looping through the array
  for (let truValue of truArray) {

    // Validation 
    if (typeof truValue !== 'boolean') {
      return "Enter only boolean values";
    }

    if (truValue === true) {
      truth++;
    }
  }
  return truth;
}

let truArray = [true, false, true, false, true, true, false, false, true];

calButton.addEventListener('click', function () {
  let truth = countTruthy(truArray);
  truthOutput.value = (typeof truth === 'number') ? truth : truth;
});