const btn = document.getElementById("btn");
const RecipesC = document.getElementById("RecipesContainer");

btn.addEventListener("click", getData);

function getData() {
  const inputValue = document.getElementById("inp").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      let mealInfo = "";

      if (data) {
        mealInfo = data.meals
          .map((meal) => {
            return `
            <div class="meal-item">
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="food">
              </div>
              <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe</a>
              </div>
            </div>
          `;
          })
          .join(""); // Join the array into a single string

        RecipesC.classList.remove("notFound");
      } else {
        mealInfo = "Sorry, we didn't find any meal!";
        RecipesC.classList.add("notFound");
      }

      RecipesC.innerHTML = mealInfo;
    });
}

/*     let html = "";
    if (data.meals) {
      data.meals.forEach((meal) => {
        html += `
                <div class = "meal-item" data-id = "${meal.idMeal}">
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                    <div class = "meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href = "#" class = "recipe-btn">Get Recipe</a>
                    </div>
                </div>
            `;
      });
      RecipesC.classList.remove("notFound");
    } else {
      html = "Sorry, we didn't find any meal!";
      RecipesC.classList.add("notFound");
    }
    RecipesC.innerHTML = html;
  } catch (error) {
    console.log("Error processing data:", error);
    RecipesC.innerHTML = "Error fetching data";
  } */
