const button = document.getElementById('button');
const inputValue = document.getElementById('input-food');

button.addEventListener('click', function () {
    fetch('www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue.value)
        .then(res => res.json())
        .then(data => displayFoods(data))

        .catch(err => alert('No item found'))

    const displayFoods = foods => {
        const foodsDiv = document.getElementById('foods');
        // console.log(foods);
        foodsDiv.innerHTML = "";

        foods.meals.forEach(food => {
            const foodDiv = document.createElement('div');

            foodDiv.className = 'food';
            const foodInfo = `
            <img id ="food-image" onclick='displayIngredients("${food.strMeal}")' src = "${food.strMealThumb}">
            <h3 id="food-name" onclick='displayIngredients("${food.strMeal}")'>${food.strMeal}</h3>
            `
            foodDiv.innerHTML = foodInfo;
            foodsDiv.appendChild(foodDiv);



        });


    }




})

const displayIngredients = strMeal => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + strMeal)
        .then(res => res.json())
        .then(data => ingredientList(data['meals'][0]))
}

const ingredientList = food => {
    const foodDetails = document.getElementById('food-details');

    const foodIngredients = document.getElementById('food-ingredients');
    const li = document.createElement('li');

    foodDetails.innerHTML = `
    <img src ="${food.strMealThumb}">
    <h3>${food.strMeal}</h3>
    <h5>Ingredients:</h5>
    <li>${food.strIngredient1}</li>
     <li>${food.strIngredient2}</li>
     <li>${food.strIngredient3}</li>
     <li>${food.strIngredient4}</li>
     <li>${food.strIngredient5}</li>
     <li>${food.strIngredient6}</li>
     <li>${food.strIngredient7}</li>
     <li>${food.strIngredient8}</li>
     <li>${food.strIngredient9}</li>
     <li>${food.strIngredient10}</li>
    `
    foodIngredients.appendChild(li);
}