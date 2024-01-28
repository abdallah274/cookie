export class Ui {
  displayDataMeals(data) {
    let carton = "";
    for (let i = 0; i < data.length; i++) {
      carton =
        carton +
        `<div class="col-md-3">
         <div data-id='${data[i].idMeal}' " class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
             <img class="w-100" src="${data[i].strMealThumb}" alt="" srcset="">
             <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                 <h3>${data[i].strMeal}</h3>
             </div>
         </div>
 </div>`;
    }
    console.log(data);

    document.getElementById("displayData").innerHTML = carton;
  }

  displayDetails(meal) {
    let cartoons = `
   <div class="col-md-4">
               <img class="w-100 rounded-3" src="${meal[0].strMealThumb}"
                   alt="">
                   <h2>${meal[0].strMeal}</h2>
           </div>
           <div class="col-md-8">
               <h2>Instructions</h2>
               <p>${meal[0].strInstructions}</p>
               <h3><span class="fw-bolder">Area : </span>${meal[0].strArea}</h3>
               <h3><span class="fw-bolder">Category : </span>${meal[0].strCategory}</h3>
               <h3>Recipes :</h3>
               <ul class="list-unstyled d-flex g-3 flex-wrap">
               <li class="alert alert-info m-2 p-1"> ${meal[0].strIngredient1}  ${meal[0].strMeasure1}</li>
               <li class="alert alert-info m-2 p-1"> ${meal[0].strIngredient2}  ${meal[0].strMeasure2}</li>
               <li class="alert alert-info m-2 p-1"> ${meal[0].strIngredient3}   ${meal[0].strMeasure3}</li>
               <li class="alert alert-info m-2 p-1">${meal[0].strIngredient4}   ${meal[0].strMeasure4}</li>
               <li class="alert alert-info m-2 p-1">${meal[0].strIngredient5}   ${meal[0].strMeasure5}</li>
               <li class="alert alert-info m-2 p-1">${meal[0].strIngredient6}  ${meal[0].strMeasure6}</li>
               <li class="alert alert-info m-2 p-1">${meal[0].strIngredient6}  ${meal[0].strMeasure7}</li>
               <li class="alert alert-info m-2 p-1">${meal[0].strIngredient6}  ${meal[0].strMeasure8}</li>
               </ul>

               <h3>Tags :</h3>
               <ul class="list-unstyled d-flex g-3 flex-wrap">
               <a target="_blank" href="${meal[0].strSource}" class="btn btn-success">Source</a>
               <a target="_blank" href="${meal[0].strYoutube}" class="btn btn-danger">Youtube</a>
               </ul>

           </div>`;

    document.getElementById("displayData").innerHTML = cartoons;
  }

  categoriesData(arr) {
    let cartoony = "";

    for (let i = 0; i < arr.length; i++) {
      cartoony += `
      <div class="col-md-3" id="cordate">
              <div data-id='${
                arr[i].strCategory
              }'  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                  <img class="w-100 img" src="${
                    arr[i].strCategoryThumb
                  }" alt="" srcset="">
                  <div class="meal-layer position-absolute text-center text-black p-2">
                      <h3>${arr[i].strCategory}</h3>
                      <p>${arr[i].strCategoryDescription
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")}</p>
                  </div>
              </div>
      </div>
      `;
    }

    document.getElementById("displayData").innerHTML = cartoony;
  }

  displayArea(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
      cartoona += `
      <div class="col-md-3">
              <div data-id='${arr[i].strArea}' class=" AHMED rounded-2 text-center cursor-pointer">
                      <i class="fa-solid fa-house-laptop fa-4x"></i>
                      <h3>${arr[i].strArea}</h3>
              </div>
      </div>
      `;
    }

    document.getElementById("displayData").innerHTML = cartoona;
  }

  displayIngredients(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
      cartoona += `
        <div class="col-md-3">
        <div data-id='${
          arr[i].strIngredient
        }'" class=" AHMED rounded-2 text-center cursor-pointer">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h3>${arr[i].strIngredient}</h3>
        <p>${arr[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
        </div>
        </div>
        `;
    }

    document.getElementById("displayData").innerHTML = cartoona;
  }
}
