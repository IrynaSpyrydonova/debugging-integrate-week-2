'use strict';
// fill in the blanks

console.log('--- loading: list all numbers');

function listAllNumbersHandler() {
  debugger;
  console.log('\n--- action: list all numbers ---');

  // read user input
  const start = +prompt('Enter the first Number of the list');
  const end = +prompt('Enter the last Number of the list');
  console.log('start:', typeof start, '\n', start);
  console.log('end:', typeof end, '\n', end);

  if (isNaN(start) || isNaN(end)) {
    alert ('Please enter the valid number of start or/and end of the range');
  } else {

  // perform core logic
  /* create a string listing all the numbers in the range
    ex: "1, 2, 3, 4, "
    ex: "1, 2, 3, 4, 5, 6, "
  */
  let numbersList = '';
  for (let i = start; i <= end; i++) {
      numbersList += `${i}, `;
  }
  console.log('numbersList:', typeof numbersList, '\n', numbersList);

  // alert result for the user
  alert(numbersList);
}
};
