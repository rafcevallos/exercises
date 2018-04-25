// 1. Create an array that holds at least five items. Each item should be a string that describes your experiance at NSS so far.
const experiences = ['Hard', 'Stressful', 'Rewarding', 'Exciting', 'Mistakes were made.']


// 2. Iterate over the array and console log each item in the array.
experiences.forEach(function (adjectives) {
    console.log(adjectives)
})
    // Above Simplified with arrow function
    experiences.forEach(adjectives => console.log(adjectives))
    // Above Simplified even futher
    experiences.forEach(console.log)


// 1. Write a function that takes two arguments. This function should return the concatenated value of the two arguments.
const poop = (doodoo, peepee) => `${doodoo} ${peepee}`

// 2. Call the function with your first name and last name as the two arguments.
const joinedNames = poop("Rafael", "Cevallos")

// 3. Console log the return value.
console.log(joinedNames)



// 1. Create an object to represent a driver. The object should have properties to represent the following: driver's license, a collection of vehicles they own, and a collection of dates for when they have gotten a ticket.
const Driver = Object.create(null, {
    licenseNumber: {
        value: "8675309",
        enumerable: true
    },
    ownedVehicles: {
        enumerable: true,
        value: ["Mars Lander", "Range Rover", "1967 Ford Mustang", "Optimus Prime"]
    },
    ticketsReceived: {
        enumerable: true,
        value: ["06/01/1999", "07/27/2005", "08/15/2010"]
    },
    // The Actore (Driver) now has an action to perform
    drive: {
        value: function (action) {
            console.log(`Yes, ma'am. I will ${action}.`)
        }
    }
})

// calling the drive function within the Driver object.   Since drive is not stored in a variable, we use . (dot notation)
Driver.drive("accelerate")
Driver.drive("Turn left")
Driver.drive("drive this car into the ravine.")

// 2. Iterate over your object and console log the keys and their values.
for (const key in Driver) {
    console.log(`${key} ${Driver[key]}`)
}

// if object is stored in variable, use [] (square brackets)
// if object is not stored in a variable, use . (dot notation)
// key is akin to 'i' in a for loop


// Make a menu datbaase to have Actor: Server and Actor: Customer interact
const menu = [
    {
        name: "Frappe McFrapperson",
        price: 6.99,
        category: "beverage",
        size: ["8 oz", "16 oz", "52 oz"]
    },
    {
        name: "Scone",
        price: 6.66,
        category: "pastry",
        size: ["mini", "regular", "large"]
    },
    {
        name: "T-shirt",
        price: 1000.00,
        category: "merchandise",
        size: [
            {
                description: "S",
                material: "Rayon"
            },
            {
                description: "M",
                material: "Cotton"
            },
            {
                description: "L",
                material: "Asbestos"
            }
        ]
    }
  ]
  
//   This targets and array in within an object
  const printMenu = () => {
    menu.forEach((currentMenuItem, index) => {
        console.log(`${index+1}. ${currentMenuItem.name} ($${currentMenuItem.price})`)
        currentMenuItem.size.forEach(currentSize => {
            console.log(currentSize.description)
        })
    })
  }
  
//   Actor: Server
  const server = Object.create(null, {
    name: {
      value: "Handsome Jake",
      enumerable: true
    },
    employeeID: {
      value: 123789,
      enumerable: true
    },
    ringUpOrder: {
      value: function(item) {
        menu.forEach((menuItem) => {
          if(menuItem.name === item){
            console.log(`Your total is ${menuItem.price}`)
          }
        })
      },
    },
    deliverOrder: {
      value: function(item){
        console.log(`Here is your order: ${item}! Have a good day!`);
        
      }
    }
  })


//   Actor: Customer
  const customer = Object.create(null, {
    name: {
      value: "Thanos",
      enumerable: true
    },
    purchaseItem: {
      value: function(item) {
        console.log(`I would like to purchase ${item}`);
      }
    },
    payForOrder: {
      value: function(paymentMethod){
        console.log(`I would like to pay using ${paymentMethod}`);
        
      }
    }
  })
  
  customer.purchaseItem("Frappe McFrapperson")
  server.ringUpOrder("Frappe McFrapperson")
  customer.payForOrder("Cash")
  server.deliverOrder("Frappe McFrapperson")