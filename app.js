const button = document.getElementById('button');
const inputValue = document.getElementById('input-food')

button.addEventListener('click', function() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + inputValue.value)
        .then(res => res.json())
        .then(data => displayFoods(data))

        .catch(error => alert("No itens found"))

        const displayFoods = foods => {
            const foodsDiv = document.getElementsByClassName('foods')

            foodsDiv.innerHTML = "";

            foods.meals.forEach(food => {
                const foodDiv = document.createElement('div')

                foodDiv.className = 'food';
                const foodInfo = `
                <img id="food-image" onclick='displayIngredients("${food.strMeal}")' src="${food.strMealThumb}">
                <h3 id="food-name" onclick='displayIngredients("${food.strMeal}")'>${food.strMeal}</h3>
                `
                foodDiv.innerHTML = foodInfo;
                foodDiv.appendChild(foodDiv);
            });
        }
})