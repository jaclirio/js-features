//Nullish Coalescing
let calculatePrice = (price, tax, description) => {
    tax = tax ?? .05 //tax = null/undefined ?? 0.5. If first value empty, uses .5
    description = description ?? "Default Item"
    const total = price * (1 + tax)
    console.log(`${description} With Tax: $${total}`)
}

calculatePrice(100, .07, "My item")
calculatePrice(100, 0, "My other item")
calculatePrice(100, undefined, "")

//Styling Console Log
console.log("%c This text %cis bold", //%c (bold, green), %c(red)
    "font-weight:bold; color:green",
    "font-size:16px; color:red"
)

//Optional Chaining

class Person{
    constructor(name, address, hobbies) {
        this.name = name
        this.address = address
        this.hobbies = hobbies
    }
    print(){
        console.log(this)
    }
}

let printPersonStreet = (person) => {
    console.log(person?.address?.street) // '?'- Cuts off if undefined. Displays undefined in log.
}

const kyle = new Person(
    "Kyle",
    { street: "123 Main St.", city: "Somewhere" },
    ["Bowling", "Weight Lifting"]
)

kyle.print() //Go To Line27
kyle.printName?.() //Checks first if printName is present. Cuts off if not

printPersonStreet(undefined)