import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Ingredients {
  constructor() {
    this.ui = new Ui();
    this.deatals = new Details();
  }
  async getIngredients() {
    rowData.innerHTML = "";

    document.querySelector("#displayData").classList.add("d-none");
    document.querySelector("#spiner").classList.remove("d-none");
    let abi = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let respone = await abi.json();
    console.log(respone.meals);
    document.querySelector("#displayData").classList.remove("d-none");
    document.querySelector("#spiner").classList.add("d-none");
    this.ui.displayIngredients(respone.meals.slice(0, 20));
    this.EventIngrend();
  }

  EventIngrend() {
    document.querySelectorAll(".AHMED").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;

        console.log(id);
        this.getIngredientsMeals(id);
      });
    });
  }
  async getIngredientsMeals(ingredients) {
    document.querySelector("#displayData").classList.add("d-none");
    document.querySelector("#spiner").classList.remove("d-none");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
    );
    response = await response.json();
    document.querySelector("#displayData").classList.remove("d-none");
    document.querySelector("#spiner").classList.add("d-none");

    this.ui.displayDataMeals(response.meals.slice(0, 20));
    this.Event();
  }
  Event() {
    document.querySelectorAll(".meal").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;

        this.de = new Details(id);
        console.log(id);
      });
    });
  }
}
