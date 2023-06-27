
/* You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces. */


var text =
  "You are building a word count generator that will take a large string of text as input and output the words";

let map = new Map();

function count(text) {
  textT = text.split(" ");
  textT.forEach((element) => {
    map.set(element, element.length);
  });

  console.log(map);
}

count(text);
