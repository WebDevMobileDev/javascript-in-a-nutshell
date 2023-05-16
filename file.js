//   VARIABLES : This is a commented line

 //declaration
var x;
let y;
const z;


 //initialisation
x = 10;
y = 20;
z =  30;


 //declaration and initialisation
var x = 10;
let y = 20;
const z = 30;


 //variable reassignment:
let x = 10;
x = 20;
console.log(x);  // Output: 20

const y = 30;
y = 40;         // Error: Assignment to constant variable



//   DATATYPES

let number = 10;
let string = "Hello";
let boolean = true;
let array = [1, 2, 3];
let object = { name: "John", age: 25 };
let nullValue = null;
let undefinedValue;



//   VARIABLES AND DATATYPES

const PI = 3.14159;
PI = 3.14;  // Error: Assignment to constant variable

const person = {
  name: "John",
  age: 30
};
person.name = "Jane";  // Valid (properties of a const object can be modified)
person = {};  // Error: Assignment to constant variable


//   TEMPLATE LITERALS

 //simple application
let name = "John";
let age = 30;

let message = `My name is ${name} and I'm ${age} years old.`;
console.log(message);  // Output: My name is John and I'm 30 years old.

 //multiline strings
let multilineString = `
  This is a
  multiline
  string.
`;
console.log(multilineString);
/*
Output:
  This is a
  multiline
  string.
*/

 //Expression Evaluation:
let a = 5;
let b = 10;

let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);  // Output: The sum of 5 and 10 is 15.


//   OPERATORS

let sum = (2 + 3 * 50)/1000;
let isEqual = (x === y);
let logicalAnd = (a && b);




//   CONTROL FLOW

 
 //if
let num = 10;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}


 //tenary
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are not an adult";

console.log(message);


  //while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

  //for
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }


  //switch

  let day = "Monday";

  switch (day) {
    case "Monday":
      console.log("It's Monday!");
      break;
    case "Tuesday":
      console.log("It's Tuesday!");
      break;
    case "Wednesday":
      console.log("It's Wednesday!");
      break;
    case "Thursday":
      console.log("It's Thursday!");
      break;
    case "Friday":
      console.log("It's Friday!");
      break;
    default:
      console.log("It's the weekend!");
  }




//   FUNCTIONS

  //simple functions
function addNumbers(x, y) {
    return x + y;
  }
  
  const multiplyNumbers = (x, y) => {
    return x * y;
  }


  addNumbers(1, 4)   //Outputs: 5
  multiplyNumbers(2,3)  //Outputs: 6




  //functions and variable scope 
  function scopeExample() {
    var x = 10;  // Function-scoped variable
    if (true) {
      let y = 20;  // Block-scoped variable
      const z = 30;  // Block-scoped variable (read-only)
      console.log(x, y, z);  // Output: 10 20 30
    }
    console.log(x);  // Output: 10
    console.log(y);  // Error: y is not defined
    console.log(z);  // Error: z is not defined
  }

  scopeExample();




//   ARRAY FUNCTIONS

//forEach
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});


//map
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers);


//filter
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);


//reduce
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(acc, number) {
  return acc + number;
}, 0);

console.log(sum);


//find
let numbers = [1, 2, 3, 4, 5];

let foundNumber = numbers.find(function(number) {
  return number > 3;
});

console.log(foundNumber);



//   OBJECTS

 //Creating an object
let person = {
    name: "John",
    age: 30,
    occupation: "Developer",
  };
  
  // Accessing object properties
  console.log(person.name);        // Output: John
  console.log(person.age);         // Output: 30
  console.log(person.occupation);  // Output: Developer
  
  // Modifying object properties
  person.age = 35;
  person.occupation = "Engineer";
  
  // Adding new properties
  person.location = "New York";
  
  // Accessing updated object properties
  console.log(person.age);         // Output: 35
  console.log(person.occupation);  // Output: Engineer
  console.log(person.location);    // Output: New York


//  SPREAD OPERATOR

//on arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = [...array1, ...array2];

console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]


//on objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);  // Output: { a: 1, b: 2, c: 3, d: 4 }


//  DESTRUCTURING

 //on arrays
 let numbers = [1, 2, 3];

let [a, b, c] = numbers;

console.log(a);  // Output: 1
console.log(b);  // Output: 2
console.log(c);  // Output: 3


 //on objects
 let person = {
    name: "John",
    age: 30,
    occupation: "Developer"
  };
  
  let { name, age, occupation } = person;
  
  console.log(name);       // Output: John
  console.log(age);        // Output: 30
  console.log(occupation); // Output: Developer

    


//   CLASSES

  //simple class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(5, 3);
console.log(rectangle.getArea());  // Output: 15


  //inheritance
class Square extends Rectangle {
constructor(sideLength) {
    super(sideLength, sideLength);
}
}

let square = new Square(4);
console.log(square.getArea());  // Output: 16
    
//methods and static methods
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    static createFromDiameter(diameter) {
      return new Circle(diameter / 2);
    }
}
  
  let circle = new Circle(5);
  console.log(circle.getArea());  // Output: 78.53981633974483
  
  let circleFromDiameter = Circle.createFromDiameter(10);
  console.log(circleFromDiameter.getArea());  // Output: 78.53981633974483


  //Getter and setters
class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
}
  
  let person = new Person("John");
  console.log(person.name);  // Output: John
  
  person.name = "Jane";
  console.log(person.name);  // Output: Jane






//   WORKING WITH THE DOM


  //DOM selection
let elementById = document.getElementById("myElement");
let elementsByClass = document.getElementsByClassName("myClass");
let elementByQuery = document.querySelector("#myElement");

 //DOM manipulation
elementById.innerHTML = "New content";
elementById.style.color = "red";

let newElement = document.createElement("div");
newElement.textContent = "Dynamic element";
document.body.appendChild(newElement);

  //Event handling
elementById.addEventListener("click", function() {
  console.log("Element clicked!");
});





//   ASYNCHRONOUS JAVASCRIPT

  //callbacks
function fetchData(callback) {
    setTimeout(function() {
      callback("Data received");
    }, 2000);
  }
  
  fetchData(function(data) {
    console.log(data);
  });
  
   //promises
  function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Data received");
      }, 2000);
    });
  }
  
  fetchData().then(function(data) {
    console.log(data);
  }).catch(function(error) {
    console.log(error);
  });
  
   //Async/await
  async function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Data received");
      }, 2000);
    });
  }
  
  async function getData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  getData();

  


  
//   ERROR HANDLING

try {
    // Code that may throw an error
  } catch (error) {
    console.log(error);
  }


  

//   WORKING WITH MODULES
  
  // Modules (exporting)
  export const message = "Hello, world!";

  export function greet(name) {
   console.log(`Welcome, ${name}!`);
  }
  
  // Modules (importing)
  import { message, greet } from './module1.js';

  console.log(message);       // Output: Hello, world!
  greet("John");              // Output: Welcome, John!





//   JAVASCRIPT BROWSER APIS
  
  // Browser APIs (Geolocation API)
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  });
  
  // Browser APIs (Fetch API)
  fetch("https://api.example.com/data")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  
  // Browser APIs (Local Storage API)
  localStorage.setItem("username", "John");
  let username = localStorage.getItem("username");
  localStorage.removeItem("username");
  

  // WebSockets API

  // WebRTC API