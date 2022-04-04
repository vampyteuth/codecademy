//today's temperature forecast
const kelvin = 3
//kelvin to celsius conversion
let celsius = kelvin - 273
//celsius to fahrenheit conversion
//round down with math.floor
let fahrenheit = Math.floor(celsius *(9/5) + 32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//conversion celsius to newton
let newton = Math.floor(celsius *(33/100))
console.log(`The temperature is ${newton} degrees Newton.`)
