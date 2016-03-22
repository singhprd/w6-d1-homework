var vegetables = ["carrot", "parsnip", "batman", "lettuce", "umbungo"]
//6.2 Loop over the array and write to the console using a "while"
// for (veg in vegetables) {
//   console.log(veg);
// }
var i = 0;
while ( i < vegetables.length ) {
  console.log(vegetables[i]);
  i += 1; 
}

for (index in vegetables) { 
  console.log(vegetables[index])
}