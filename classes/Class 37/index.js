// number
let balance = 100;
console.log(balance, typeof balance)

let balance2 = balance;
console.log(balance, balance2)
balance = 120;
balance2 = 60;
console.log(balance, balance2)

// boolean
let isActive = true;
console.log(isActive, typeof isActive)

// bigInt
let salary = 99999999999999999999n;
console.log(salary, typeof salary)

// string
let username = "anasraza06"
let username2 = 'anasraza07'
let username3 = `anasraza08`

// string interpolation 
let greetMessage = "Happy Birthday";
// console.log(greetMessage + " " + username)
console.log(`${greetMessage} ${username}`)

// calculation under interpolation
console.log(`My age is ${20 * 1}`)

// undefined
let myAge;
console.log(myAge);

// null
let lastnam = null;
console.log(lastnam, typeof lastnam);