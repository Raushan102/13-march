let array = [1, 3, 3, 4, 3, 54, 35];

function extractElements(arr) {

    //to assign the first=arr[0],and second=arr[1]  and rest is use to store rest all element of array
  const [first, second, ...rest] = arr;
 

  const last = rest.pop();// we all know the  pop() function that is use to remove element from array to the last  index

  return [first, second, last];
}

console.log(extractElements(array));
