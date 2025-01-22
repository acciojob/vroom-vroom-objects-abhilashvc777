
// Do not change the code below// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + ' ' + this.model;
};

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to initialize make and model
    Car.call(this, make, model);
    
    // Initialize topSpeed for SportsCar
    this.topSpeed = topSpeed;
}

// Inherit Car prototype in SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Fix the constructor property of SportsCar prototype
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
var myCar = new Car('Toyota', 'Camry');
console.log(myCar.getMakeModel()); // Output: Toyota Camry

var mySportsCar = new SportsCar('Ferrari', '488 GTB', 205);
console.log(mySportsCar.getMakeModel()); // Output: Ferrari 488 GTB
console.log(mySportsCar.getTopSpeed()); // Output: 205

window.Car = Car;
window.SportsCar = SportsCar;
// function Car(make,model){
// 	this.make = make;
// 	this.model = model;
// }
// Car.prototype.getMakeModel =  function(){
// 	return this.make+""+this.model
// }
// function SportsCar(make,model,topSpeed){
// 	Car.call(this,make,model)
// 	this.topSpeed = topSpeed;
// }
// SportsCar.prototype = Object.create(Car.prototype)
// SportsCar.prototype.constructor = SportsCar
// SportsCar.prototype.getTopSpeed=function(){
// 	return this.topSpeed;
// }
