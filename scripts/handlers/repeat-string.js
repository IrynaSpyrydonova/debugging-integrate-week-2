'use strict';
// fix the bugs

console.log('--- loading: repeat string');

function repeatStringHandler() {
  debugger;
  console.log('\n--- action: repeat string ---');

  // read inputs from user
  const stringToRepeat = prompt('Enter a string to repeat');
  console.log('stringToRepeat:', typeof stringToRepeat, '\n', stringToRepeat);
  const range = +prompt('How many times do you want to repeat the string?');
  console.log('range:', typeof range, '\n', range);

  if (range == null || isNaN(range) || stringToRepeat === null) {
      alert (`Please enter the valid number to repeat your string`);
  } else {
    // perform core logic
    let repeatedString = '';
    for (let i = 0; i <= range; i++) {
      repeatedString += stringToRepeat;
    }
    console.log('repeatedString:', typeof repeatedString, '\n', repeatedString);
  
    // alert result for the user
    alert(repeatedString);
  }
}
