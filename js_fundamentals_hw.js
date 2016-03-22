//Section 1

//what types are these? Write your answer in a comment beside it.

1; 
NUMBER
"cat";
STRING
true;
BOOEAN
[];
ARRAY
{};
HASH
1.1;
NUMBER
undefined;
UNDEFINED

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
TRUE
"cat";
TRUE
true;
TRUE
NaN;
FALSE
[];
TRUE
{};
TRUE
undefined;
FALSE
"";
FALSE
0;
FALSE


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var numberOne = 1;
//3.2 Assign a variable that is a string
var batmanName = "batman";
//3.3 Assign a variable that is a boolean
var notReallyTrue = true;
//3.4 Assign a variable that is an object
var iThinkArraysAreObjects = []

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
if( true ) {
  console.log("hello");
} else {
  console.log("bye");
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var racoonFromArray = animals[0];
var racoonFromArray = animals.shift();
//5.2. Assign the last element to a variable
var gerbilFromArray = animals.pop();
//5.3. Assign the length of an array to a variable
var lengthOfArray = animals.length;
//5.4. Add an item to the end of the array
animals.push("batman");
//5.5. Add an item to the start of the array
animals.unshift("robin");
//5.6. Assign the index of hedgehog total a variable
var hedgehogIndex = animals.indexOf("hedgehog");


//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["carrot", "parsnip", "batman", "lettuce", "umbungo"]
//6.2 Loop over the array and write to the console using a "while"
var i = 0;
while ( i < vegetables.length ) {
  console.log(vegetables[i]);
  i += 1; 
}

//6.3 Loop again using a "for" with a counter
?
//6.4 Loop again using a "for in"
for (index in vegetables) { 
  console.log(vegetables[index])
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
//7.2 Find the name of the account with the largest balance
//7.3 Find the name of the account with the smallest balance
//7.4 Calculate the average bank account value
//7.5 Find the value of marcs bank account
//7.6 Find the holder of the largest bank account
//7.7 Calculate the total cash in business accounts
//7.8 Find the largest personal account owner


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food