// Exemple Data 3 Products
const products = [
  {
    id: 1,
    title: "Iphone 9",
    price: 8998,
    inStock: true,
    totalAmount: 99,
    discount: true,
  },
  {
    id: 1,
    title: "Iphone 9",
    price: 8998,
    inStock: true,
    totalAmount: 99,
    discount: true,
  },
  {
    id: 2,
    title: "Iphone 10",
    price: 9998,
    inStock: true,
    totalAmount: 5,
    discount: true,
  },
  {
    id: 3,
    title: "Iphone 11",
    price: 10800,
    inStock: false,
    totalAmount: 0,
    discount: false,
  },
  {
    id: 4,
    title: "Iphone 12",
    price: 11500,
    inStock: true,
    totalAmount: 58,
    discount: true,
  },
  {
    id: 5,
    title: "Iphone 13",
    price: 12998,
    inStock: true,
    totalAmount: 99,
    discount: false,
  },
];

/*
let titles = products.map((product) => product.title).join(" and ");
let ids = products.map((product) => product.id);
let titles_and_ids = titles.concat(ids);
*/

// Ändra alla produkters property discount till false.
const noDiscount = products.map((prod) => {
  return prod.discount === true ? {...prod, discount: false} : prod;
})

// Lista alla produkters namn i en ny array.
const addedNames = products.map((prod) => {
  return {...prod, name: `product ${prod.id}`};
})
const namesOnly = addedNames.map((prod) => {
  return prod.name;
})

// Ändra discount på produkten med id 5 till true.

const id5discount = products.map((prod)=> {
  return prod.id === 5 ? {...prod, discount: true} : prod;
});

// Ändra price på alla produkter med discount === true, till priset reducerat med 12%.

const discount12 = products.map((prod) => {
  return prod.discount === true ? {...prod, price: prod.price - prod.price * 0.12 } : prod;
});

//                --------------------- FILTER --------------------

// Filtrera bort alla produkter som inte har discount === true.
const discountOnly = products.filter((pr) => {
  return pr.discount === true
});

// Filtrera bort alla produkter som har ett pris över 10000kr.
const expensive = products.filter((pr) => {
  return pr.price > 10000
});

// Filtrera bort alla produkter som inte är inStock === true.
const inStockOnly = products.filter((prod) => prod.inStock === true);


//                --------------------- FOR EACH --------------------

// Räkna ut total priset för alla produkter.
let totalPrice = 0
products.forEach((prod) => {
  return totalPrice += prod.price;
});
//console.log(totalPrice)

// Räkna ut totala discount beloppet på alla produkter, med discount på 12%.
let totalDiscount = 0
products.forEach((prod) => {
  return prod.discount ? totalDiscount += prod.price * 0.12 : "" 
})
//console.log(totalDiscount)

// Räkna ut det totala antalet produkter in stock.
let amountOfInStock = 0

products.forEach((prod) => {
  return prod.inStock? amountOfInStock += 1 : "" 
})


//                --------------------- EVERY --------------------

// Kolla om alla produkter har ett pris över 7000kr.
const itsOver7000 = products.every((prod) => prod.price > 7000)

// Kolla om alla produkter är inStock === true.
const allInStock = products.every((prod) => prod.inStock === true)


//                --------------------- SOME --------------------

// Kolla om det är någon produkt som har ett pris över 15000kr.
const itsOver15000 = products.some((pr) => pr.price > 15000)

// Kolla om det är någon produkt som inte är inStock === true.
const anyOutOfStock = products.some((pr) => pr.inStock !== true)

// Kolla om det är någon produkt som har samma id.

const ids = new Set()

const anySameIds = products.some((prod) => {
  if(ids.has(prod.id)){
    return true
  }
  else {
    ids.add(prod.id)
    return false
  }
})
console.log(anySameIds)

// OR using an empty array

const idsArray = [];

const anySimilarIds = products.some((prod) => {
  return idsArray.includes(prod.id) ? true : idsArray.push(prod.id) && false
})

console.log(anySimilarIds)


