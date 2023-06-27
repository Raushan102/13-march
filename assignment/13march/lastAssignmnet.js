let person = {
  name: "raja",
  id: 23,
  address: {
    street: "b8,block b,industrial Area",
    city: "sector 62,Noida",
    state: "utter pradesh",
  },
};

function printName(person) {
  let {
    name,
    address: { street },
  } = person;

  return (personAddress = {
    name: name,
    street: street,
  });
}

console.log(printName(person));
