// Exemple Data 1 Characters
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];


const charNames = characters.map((character) => character.name);
const charHeights = characters.map((character) => character.height);
const charFirstNames = characters.map((character) => character.name.split(" ")[0]);
const charMAss = characters.map((character) => Number(character.mass));
/*
console.log(
  `
${charNames[0]}'s height is ${charHeights[0]} cm his name is ${charFirstNames[0]} and his mass is ${charMAss[0]}
${charNames[1]}'s height is ${charHeights[1]} cm his name is ${charFirstNames[1]} and his mass is ${charMAss[1]}
${charNames[2]}'s height is ${charHeights[2]} cm his name is ${charFirstNames[2]} and his mass is ${charMAss[2]}
${charNames[3]}'s height is ${charHeights[3]} cm his name is ${charFirstNames[3]} and his mass is ${charMAss[3]}` 
)
*/

/*                 -------------------------- REDUCE -----------------------                     */

//Get the total mass of all characters
const sumOfCharMass = charMAss.reduce((accumulator, currValue) => {
  return accumulator + currValue;
},0)

const sumOfCharMass2 = characters.reduce((accum, val) => {
  return accum + parseInt(val.mass)
}, 0)
// console.log(sumOfCharMass)
// console.log(sumOfCharMass2)
//------------------------------------


//Get the total height of all characters
const sumOfCharHeights = charHeights.reduce((accumulator, currValue) => {
  return accumulator + Number(currValue);
},0)
const sumOfCharHeights2 = characters.reduce((accumulator, currValue) => {
  return accumulator + Number(currValue.height);
},0)
// console.log(sumOfCharHeights)
// console.log(sumOfCharHeights2)
//------------------------------------


//Get the total number of characters in all the character names
const charNamesLegth = charNames.map((char) => {
return char.length}) 
const numOfAllCharactersInAllNames = charNamesLegth.reduce((accumulator, currValue) => {
  return accumulator + currValue
},0)
//console.log(numOfAllCharactersInAllNames)
//------------------------------------

// Get the total number of characters by eye color (hint. a map of eye color to count)
const numberOfcharsByEyesofBlue = characters.reduce ((accumulator, char) => {
  char.eye_color === "blue"? accumulator +=1 : ""
  return accumulator
},0)
//console.log(numberOfcharsByEyesofBlue)

const charsByEyesofBlue = characters.reduce ((accumulator, char) => {
  char.eye_color === "blue"? accumulator.push(char) : ""
  return accumulator
},[])
//console.log(charsByEyesofBlue)

const Get_the_total_characters_of_the_names_who_has_blue_eyes = () => {
  const lengthList = charsByEyesofBlue.map((char) => {
    return char.name.length
  })
  const tempListtogether = lengthList.reduce((accum, value) => {
    return accum + Number(value)
  }, 0) 
  console.log(tempListtogether)
}

// Get_the_total_characters_of_the_names_who_has_blue_eyes()

// Jag var lite osäker om vad som sja göras här så jag gjorde lite olika

//-------------------------------------
const charsByEyesofBrown = characters.reduce((accumulator, char) =>{
  char.eye_color === "brown" && accumulator.push(char)
  return accumulator
},[])

const numberOfcharsByEyesofBrown = characters.reduce((accumulator, char) =>{
  char.eye_color === "brown" ? accumulator += 1 : "" 
  return accumulator
},0)
//console.log(charsByEyesofBrown)
//-------------------------------------

const charsByEyesofYellow = characters.reduce((accumulator, value) => {
  value.eye_color === "yellow" && accumulator.push(value) 
  return accumulator
}, [])

const numberOfcharsByEyesofYellow = characters.reduce((accumulator, value) => {
  value.eye_color === "yellow" ? accumulator += 1 : ""
  return accumulator
}, 0)
//console.log(numberOfcharsByEyesofYellow)
//--------------------------------------

/*                 -------------------------- FILTER -----------------------                     */

//Get characters with mass greater than 100
const chars_with_mass_greater_than_100 = characters.filter((char) => {
  return Number(char.mass) > 100 
})

//Get characters with height less than 200
const chars_with_height_less_than_200 = characters.filter((char) => {
  return Number(char.height) < 200 
})

// Get all male characters
const all_male_characters = characters.filter((char) => {
  return  char.gender != "female"
})
//console.log(all_male_characters)

const all_female_characters = characters.filter((char) => {
  return  char.gender === "female"
})

/*                 -------------------------- SORT -----------------------                     */

// Sort by name
const characters_alphabetical_order = characters.sort((a, b) => {
  return b.name.localeCompare(a.name)
})
// console.log(characters_alphabetical_order);

// Sort by mass
const characters_sorted_by_mass = characters.sort((a, b) => {
  return parseInt(a.mass) - parseInt(b.mass) // (- for ascending order, + for descending order)
})
// console.log(characters_sorted_by_mass);

// Sort by height
const characters_sorted_by_height = characters.sort((a, b) => {
  return parseInt(a.height) - parseInt(b.height)
})
// console.log(characters_sorted_by_height);

// Sort by gender
const list_but_males_first = characters.sort((a, b) => {
  if (a.gender !== b.gender) {
    return a.gender === "male" ? -1 : 1;
  }
})
const list_but_females_first = characters.sort((a, b) => {
  b.gender.localeCompare(a.gender)
})
// console.log(list_but_males_first)


//              -------------------------- EVERY -----------------------

const har_alla_blå_ögon = characters.every((char) => {
  return char.eye_color === "blue";
})
//console.log(har_alla_blå_ögon)

const har_alla_störe_mass_än_40 = characters.every((char) => {
  return parseInt(char.mass) > 40
})
//console.log(har_alla_störe_mass_än_40)

const är_alla_kortare_än_200 = characters.every((char) => {
  return parseInt(char.height) < 200
})
//console.log(är_alla_kortare_än_200)

const ärAllaMen = characters.every((char) => char.gender ==="male")
//console.log(ärAllaMen)


//              -------------------------- SOME -----------------------

const har_några_blå_ögon = characters.some((char) => {
  return char.eye_color === "blue";
})
//console.log(har_några_blå_ögon)

const har_några_mindre_mass_än_50 = characters.some((char) => {
  return parseInt(char.mass) < 50
})
//console.log(har_några_mindre_mass_än_50)

const är_några_kortare_än_200 = characters.some((char) => {
  return parseInt(char.height) < 200
})
//console.log(är_några_kortare_än_200)

const ärNågraMen = characters.some((char) => char.gender ==="male")
//console.log(ärNågraMen)










//                 NOTES TO MY SELF
// Number() converts the entire string to a number ignores the following string chars,
//  example Number("123px") = NaN 

// while parseInt() stops at any non-numeric character and returns a number
// example parseInt("123px") = 123

// Both work here since height values are purely numeric strings.
