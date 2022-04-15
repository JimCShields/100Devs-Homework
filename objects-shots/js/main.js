//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)

      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      
      document.querySelector('#instructions > p').innerText = data.drinks[0].strInstructions

      let ingredientList = document.getElementById('ingredientList')
      let ingredient = document.getElementById('li')
      console.log(data.drinks[0].strIngredient1)
      for(let i = 0; i<3;i++){
        console.log("strIngredient"+[i])
      }
      // for(let i=1; i<=15;i++){
      //   if(data.drinks[0].strIngredient[i] != null){
      //     console.log(data.drinks[0].strIngredient[1])
          // ingredient.appendChild(document.createTextNode(data.drinks[0].strIngredient[i]));
          // ingredientList.appendChild.ingredient;
      //   }
      // }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


