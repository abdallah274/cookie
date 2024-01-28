import { Ingredients } from "./Ingredients.module.js";
import { Area } from "./area.module.js";
import { Category } from "./categories.module.js";
import { Details } from "./details.module.js";
import { Search } from "./search.mdule.js";
import { Ui } from "./ui.module.js";


export class Home {
  constructor() {
    this.ui = new Ui();
    this.Ingred= new Ingredients();
    this.search= new Search();
    this.Category = new Category();
    this.area = new Area();
    this.getMeals();
  }

  async getMeals() {
    document.querySelector("#displayData").classList.add("d-none");
    document.querySelector("#spiner").classList.remove("d-none");
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`
    );
    const response = await api.json();
    document.querySelector("#displayData").classList.remove("d-none");
    document.querySelector("#spiner").classList.add("d-none");
    const endResponse = response.meals;
    this.ui.displayDataMeals(endResponse);
    this.Event();
    this.category();
    this.Area();
    this.Ingredients()
  }

  Event() {
    document.querySelectorAll(".meal").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.de = new Details(id);
      });
    });
  }

  category() {
    document.getElementById("categ").addEventListener("click", (e) => {
      this.Category.getMainDetails();
    });
  }


  Area() {
    document.getElementById("area").addEventListener("click", (e) => {
      this.area.getArea();
   
    });
  }
  Ingredients() {
    document.getElementById("ingrend").addEventListener("click", (e) => {
      this.Ingred.getIngredients()

   
    });
  }
}
