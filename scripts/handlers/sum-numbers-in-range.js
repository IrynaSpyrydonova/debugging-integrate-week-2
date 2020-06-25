'use strict';
// fill in the blanks

console.log('--- loading: sum numbers in range');

function sumNumbersInRangeHandler() {
  debugger;
  console.log('\n--- action: sum numbers in range ---');

  // read inputs from user
  const start = +prompt('Please enter the lowest number of the range');
  const end = +prompt('Please enter the highest number of the range');
  console.log('start:', typeof start, '\n', start);
  console.log('end:', typeof end, '\n', end);

  if (isNaN(start) || isNaN(end)) {
    alert ('Please enter the valid number of start or/and end of the range');
    return;
  }
    // perform core logic
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    console.log('sum:', typeof sum, '\n', sum);
    // alert result for the user
    alert(`The sum of numbers is ${sum}`);
}

