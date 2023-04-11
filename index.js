function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2), as the function contains two nested loops. 
*/

/* 
  Add your pseudocode here
Create a function called hasTargetSum that takes an array and a target number as arguments.
For each number in the array:
a. For each subsequent number in the array:
i. If the sum of the current number and subsequent number equals the target number, return true.
If we have checked all pairs of numbers and none of them add up to the target number, return false.
*/

/*
  Add written explanation of your solution here
  The function hasTargetSum takes an array of integers and a target integer as input, and returns true if any pair of numbers in the array adds up to the target number, and false otherwise.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
