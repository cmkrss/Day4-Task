// For the given JSON Iterate over all for loops(for, for in, for of, forEach)

const myJson = {
    "name": "Manikandan",
    "age": 26,
    "email": "cmkrss007@gmail.com"
  };

//================================================================================================
console.log("================================================================================================");
  //for loop
  console.log("Iterate Given JSON By Using For Loop");


  const keys = Object.keys(myJson);
  for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key, myJson[key]);
}

//===============================================================================================
console.log("===============================================================================================");

//for in
  console.log("Iterate Given JSON By Using For-In Loop");

  for (let key in myJson) {
    console.log(key, myJson[key]);
  }

//===============================================================================================
console.log("===============================================================================================");

//for of
console.log("Iterate Given JSON By Using For-of loop");

  const entries = Object.entries(myJson);
  for (let [key, value] of entries) {
  console.log(key, value);
  }

//===============================================================================================
console.log("===============================================================================================");

//   for each:
console.log("Iterate Given JSON By Using For-Each loop");

  const entriesArray = Object.entries(myJson);
  entriesArray.forEach(([key, value]) => {
  console.log(key, value);
  });

//===============================================================================================