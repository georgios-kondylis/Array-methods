// Exemple Data 2 Users
const users = [
  {
    id: 1,
    name: "Leia",
    email: "Leia@gmail.com",
    isOnline: false,
    age: 25,
  },
  {
    id: 2,
    name: "Look",
    email: "Look@gmail.com",
    isOnline: true,
    age: 36,
  },
  {
    id: 3,
    name: "James",
    email: "James@gmail.com",
    isOnline: true,
    age: 35,
  },
  {
    id: 4,
    name: "Brook",
    email: "Brook@gmail.com",
    isOnline: false,
    age: 32,
  },
  {
    id: 5,
    name: "Havana",
    email: "Havana@gmail.com",
    isOnline: false,
    age: 29,
  },
];
// --------------------- MAP -----------------------

const usernames = users.map((char) => char.name);
const userAge = users.map((char) => parseInt(char.age));
const name_age_objects = users.map((char) => {
  return {
    name: char.name,
    age: parseInt(char.age)
  }
})

const changed_NAME = users.map((user) => {
  return user.id === 2 ? {...user, name:"Abraham" } : user
})
//console.log(changed_NAME)
const allasEmail = users.map((user) => user.email)

// --------------------- FILTER -----------------------

const isOnline = users.filter((user) => {
  return user.isOnline === true
})
//console.log(isOnline)

const under30 = users.filter((user) => {
  return user.age < 30
})

const shortName = users.filter((user) => {
  return user.name.trim().length < 5
})

// --------------------- SOME -----------------------

//console.log(...users)

const ärNågraOnline = users.some((user) => {
  return user.isOnline === true;
})

const Under30 = users.some((user) => {
  return user.age < 30
})

const nameLargerThan5 = users.some((user) => user.name.trim().length > 5)

// --------------------- FOR EACH -----------------------


let age = 0
users.forEach((user) => age += user.age);
const averegeAge = age / users.length;
//console.log(averegeAge)

let allTheLetters = 0
users.forEach((user) => {
  return allTheLetters += user.name.trim().length
})
//console.log(allTheLetters)

let totalAge = 0
users.forEach((user) => totalAge += user.age)

