const meal = new Meal;
const ui = new Ui;
const generate = document.getElementById('generate').addEventListener('click', getMealsByName);
const alpha = document.getElementById('alphabet').addEventListener('keyup', getMealsByAlphabet);
const name = document.getElementById('name');
const save = document.querySelector('.fa-save').addEventListener('click', saveToLocalStorage);
const remove = document.querySelector('.fa-trash').addEventListener('click', removeFromLocalStorage);

function getMealsByName(e){
const mealName = name.value

if(mealName !== ''){
  console.log(mealName)
  meal.getMealsByFullName(mealName)
  .then(data => {
    data.meals.forEach(eat =>{
      let product = '';
      product =+ `
      <div class= "card">
        <p>Meal Category: ${eat.strCategory}</p>
        <p>Meal Name: ${eat.strMeal}</p>
        <p id = "description">Instructions: ${eat.strInstructions}</p>
      </div>
      <div class="icons">
        <a href="#"><i class="fas fa-save"></i></a>
        <a href="#"><i class="fas fa-trash"></i></a>
      </div>
    `   
    document.querySelector('.result').innerHTML = product;
    })
    console.log(data.meal)
  })
  .catch(err => console.log(err));
}
  e.preventDefault()
}


function getMealsByAlphabet(e){
  const alphabet = e.target.value;

  if(alphabet !== ''){
    meal.getMeals(alphabet)
    .then(data => {
      data.meals.forEach(eat => {
        let output = ''
        output += `
          <div class= "card">
            <p>Meal Category: ${eat.strCategory}</p>
            <p>Meal Name: ${eat.strMeal}</p>
            <p id = "description"> Instructions: ${eat.strInstructions}</p>
          </div>
          <div class="icons">
            <a href="#"><i class="fas fa-save"></i></a>
            <a href="#"><i class="fas fa-trash"></i></a>
          </div>
        `
        document.querySelector('.result').innerHTML = output;
      });
    })
  } 
}

