import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";
export class Category {
  constructor() {
    this.ui = new Ui();
  }

  async getMainDetails() {
    document.querySelector("#displayData").classList.add("d-none");
    document.querySelector("#spiner").classList.remove("d-none");
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    document.querySelector("#displayData").classList.remove("d-none");
    document.querySelector("#spiner").classList.add("d-none");
    const response = await api.json();
    const endResponse = response.categories;
    this.ui.categoriesData(endResponse);
    this.categoryTwo();
  }
  categoryTwo() {
    document.querySelectorAll(".meal").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.getCategoryMeals(id);
      });
    });
  }

  async getCategoryMeals(category) {
    document.querySelector("#displayData").classList.add("d-none");
    document.querySelector("#spiner").classList.remove("d-none");
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    document.querySelector("#displayData").classList.remove("d-none");
    document.querySelector("#spiner").classList.add("d-none");
    response = await response.json();

    this.ui.displayDataMeals(response.meals.slice(0, 20));
    this.Event();
  }
  Event() {
    document.querySelectorAll(".meal").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.de = new Details(id);
      });
    });
  }
}
