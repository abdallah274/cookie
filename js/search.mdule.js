 
 export class Search {
 constructor(){

 }
async searchByl(term) {
    closeSideNav()
    term == "" ? term = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
    response = await response.json()
    response.meals ? displayMeals(response.meals) : displayMeals([])
}

 }