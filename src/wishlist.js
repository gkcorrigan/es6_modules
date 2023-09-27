import Car from "./car.js";
class Wishlist {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }

  add(make, model, year) {
    const carAdd = new Car(++this.nextId, make, model, year);
    this.list.push(carAdd);
  }

  remove(carId) {
    // for (let i = 0; i < this.list.length; i++){

    this.list = this.list.filter((car) => {
      return car.id !== carId;
    });
  }
}

export default Wishlist;
