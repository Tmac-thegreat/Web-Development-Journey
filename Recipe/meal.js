class Meal{
  constructor() {
    this.key = "1";
  }

  async getMeals(meal){
    const mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}&test_key=${this.key}`);

    const mealData = await mealResponse.json()

    return  mealData;  
  }

  async getMealsByFullName(meal) {
    const wholeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}&test_key=${this.key}`);

    const wholeData = await wholeResponse.json()
    return wholeData;
  }
}