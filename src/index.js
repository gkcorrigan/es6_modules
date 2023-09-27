import Wishlist from "./wishlist";

console.log("Hello World");

// TODO
const inputForm = document.querySelector("#submitForm");
const carMakeInput = document.querySelector("#makeInput");
const carModelInput = document.querySelector("#modelInput");
const carYearInput = document.querySelector("#yearInput");
const carMakePara = document.querySelector("#car-make");
const carModelPara = document.querySelector("#car-model");
const carYearPara = document.querySelector("#car-year");
const removeBtn = document.querySelector(".removeBtn");
const wishlistUl = document.querySelector("#wishListContainer > ul");

//invoking the constructor on our class to create one instance
const wishList = new Wishlist();

inputForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

//what should happen when we click on a car in our list
function showCarDetails(car) {
  carMakePara.textContent = car.make;
  carModelPara.textContent = car.model;
  carYearPara.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}
//Populate the list of cars on the page
//Reset the list, and then make all the cars again
function updateDOMList() {
  wishlistUl.innerHTML = "";

console.log(wishList);
wishList.list.forEach((element, index, array) => {
  //1. create the elements
  
  const li = document.createElement("li");
  //2. modify the elements
  li.textContent = `Make ${element.make}; Model ${element.model}`;
  li.addEventListener("click", () => {
    showCarDetails(element);
  });
  //3. append the elements
  wishlistUl.append(li);
});
}
console.log(carMakeInput, carModelInput, carYearInput);

function addCar(event) {
  console.log(event);
  event.preventDefault();
  wishList.add(carMakeInput.value, carModelInput.value, carYearInput.value);
  updateDOMList();
  
}

function removeCar() {
  const carId = Number(removeBtn.getAttribute("data-carId"));
  wishList.remove(carId);
  updateDOMList();
  carMakePara.textContent = "";
  carModelPara.textContent = "";
  carYearPara.textContent = "";
  removeBtn.disabled = true;
}
