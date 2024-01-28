import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();

    this.getDetails(id);
  }

  async getDetails(idMeal) {
    document.querySelector("#displayData").classList.add("d-none");
    document.querySelector("#spiner").classList.remove("d-none");
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const response = await api.json();
    document.querySelector("#displayData").classList.remove("d-none");
    document.querySelector("#spiner").classList.add("d-none");
    const endResponse = response.meals;
    this.ui.displayDetails(endResponse);
  }
}
