

const viewRecipeBtn = document.querySelector(".view-recipe-btn");
const recipeBox = document.querySelector(".recipe-box");
const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");

const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "";

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();

    if (!data.meals) {
        recipeContainer.innerHTML = "<h2>No recipes found</h2>";
        return;
    }

    data.meals.forEach(meal => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <h3>${meal.strCategory}</h3>
            <h3>${meal.strArea}</h3>
        `;

        const viewRecipe = document.createElement("button");
        viewRecipe.setAttribute("class", "viewRecipe");
        viewRecipe.innerHTML = "View Recipe";

        viewRecipe.addEventListener("click", () => {
            showRecipe(meal);
        });

        recipeDiv.appendChild(viewRecipe);
        recipeContainer.appendChild(recipeDiv);
    });
};

const showRecipe = (meal) => {
    let ingredientsWithMeasures = "";
    for (let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`];
        let measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== '') {
            ingredientsWithMeasures += `<p>${measure ? measure : ''} ${ingredient}</p>`;
        }
    }
    ingredientsWithMeasures += "";

    recipeBox.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p><strong>Recipe Instructions:</strong> ${meal.strInstructions}</p>
        <h3>Ingredients:</h3>
        <p>${ingredientsWithMeasures}</p>
    `;

    document.querySelector(".view-recipe").style.display = "block";
};

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (searchInput) {
        fetchRecipes(searchInput);
    }
});

viewRecipeBtn.addEventListener("click", () => {
    document.querySelector(".view-recipe").style.display = "none";
});
