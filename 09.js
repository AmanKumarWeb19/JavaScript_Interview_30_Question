// Create an Object representing a car with properties like make, model, and year.
// Add a method to the car object to start the Engine. 

// let car={
//   make:"Mahindra",
//   model:"Scorpio",
//   year:2022
// }
// // console.log(car)

// car.startEngine = function(){
//   console.log("Engine Started")
// }

// car.startEngine()

let car={
  make:"Mahindra",
  model:"SCORPIO",
  year:2024
}
car.startEngine=function(){
  console.log(this.make+ " " +"Engine Started in" + " " + this.year)
}

car.startEngine()