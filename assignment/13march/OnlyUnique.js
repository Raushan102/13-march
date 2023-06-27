/* You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.
 */

let array = ["pumaBAg", "nikeBag", "pumaBAg", "pumaTshirt", "nikeTshirt", "nikeTshirt"];

let set = new Set();

function uniqueItem(array) {
  let set = new Set();
  array.map((el) => set.add(el));

  console.log(set);
}

uniqueItem(array)
