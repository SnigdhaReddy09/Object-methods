//1
var person={
    firstName: "baran",
    lastName: "karabey",
    age: 32
};
console.log(person.firstName)
person.city="New York"
console.log(person)

//2
const product={
    name:"sunscreen",
    price:699,
    inStock:"yes"
};
product.price=749
delete product.inStock
console.log(product)

// 3
var library={
    fantasy:{
        a1:"harry potter",
        a2:"the hobbit"
    },
    history:{
        b1:"sapiens",
        b2:"harari"
    },
    mystery:{
        c1:"to kill",
        c2:"the selfish"
    }
};
library.sciencefiction={
    d1:"history of time",
    d2:"guns and germs"
};
console.log(library.fantasy["a1"])
delete library.mystery
console.log(library)

//4
var user={
    username:"snigdha",
    email:"snigdha123@gmail.com",
    address:{
        city:"hyderabad",
        state:"telangana",
        zip:500049
    }
};
Object.freeze(user)
user.email="snigdha890@gmail.com"
console.log(Object.isFrozen(user))
user.phone=1234566780
console.log(user)

// 5
var car={
    make:"kia",
    model:"camry",
    price:800000
}
Object.seal(car)
delete car.make
console.log(Object.isSealed(car))
car.price=900000
console.log(Object.isExtensible(car))
console.log(car)

// 6
const store = {
    name: "SuperMart",
    products: {
      electronics: {
        phones: {
          apple: {
            iPhoneX: { price: 999, stock: 20 },
            iPhone12: { price: 1099, stock: 15 },
          },
          samsung: {
            galaxyS21: { price: 799, stock: 25 },
            galaxyNote20: { price: 999, stock: 10 },
          },
        },
        laptops: {
          dell: {
            XPS13: { price: 1200, stock: 10 },
            Inspiron15: { price: 800, stock: 30 },
          },
          hp: {
            SpectreX360: { price: 1300, stock: 5 },
            Pavilion15: { price: 750, stock: 20 },
          },
        },
      },
      groceries: {
        fruits: {
          apples: { price: 2, stock: 100 },
          bananas: { price: 1, stock: 150 },
        },
        vegetables: {
          carrots: { price: 1.5, stock: 200 },
          spinach: { price: 1, stock: 100 },
        },
      },
    },
};  
var a=store.products.groceries.vegetables.spinach.stock
console.log(a)
var b=store.products.electronics.laptops.hp.Pavilion15.price
console.log(b)