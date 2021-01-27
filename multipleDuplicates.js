// Find all duplicate numbers in an array with multiple duplicates
// Return: array — containing all duplicates found or empty array if none are found
// Like question 2, I would use an hash map, but instead of setting the value of
// observed[arr[i]] = arr[i], we will increment a count. Depending on what we want
// to return, we can either return the object with the repeated values or we could
// push the duplicate numbers to a new array and return the new array.
// Since it is cleaner, and we can do it in one pass, I will do the latter.

const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];
function returnMultipleDupesArray (arr) {
  let observed = {};
  let dupesArray = [];

  for(let i = 0; i < arr.length; i++) {

    if(observed[arr[i]]) {
      if(observed[arr[i]] === 1) {
        dupesArray.push(arr[i]);
      }

      observed[arr[i]] = observed[arr[i]] + 1;
    } else {
      observed[arr[i]] = 1;
    }
  }

  return dupesArray;
}
console.log(returnMultipleDupesArray(arr)); // prints [1, 6, 7, 10]
