const parseMealDataJson = (rawMealDataJsonList) => {
  let mealDataJsonList = [];
  if (rawMealDataJsonList.hasOwnProperty("meals")) {
      mealDataJsonList = rawMealDataJsonList.meals;
  }
  if(mealDataJsonList === null) {
    return [];
  }
  let parsedMealDataJsonList = [];
  for(let i = 0; i < mealDataJsonList.length; i++) {
    let mealDataJson = mealDataJsonList[i];
    let keyList = Object.keys(mealDataJson);
    let ingredientJson = {};
    for (let j=0; j < keyList.length; j++) {
      if (keyList[j].indexOf("strIngredient") !== -1) {
        if (mealDataJson[keyList[j]] != "") {
          ingredientJson[keyList[j]] = mealDataJson[keyList[j]];
        }
      }
    }
    let parsedMealDataJson = {
      Name: mealDataJson["strMeal"],
      Category: mealDataJson["strCategory"],
      Cuisine: mealDataJson["strArea"],
      Instructions: mealDataJson["strInstructions"],
      Ingredients: Object.values(ingredientJson).join(",")
    };
    parsedMealDataJsonList.push(parsedMealDataJson);
  }
  return parsedMealDataJsonList;
}

export default parseMealDataJson
