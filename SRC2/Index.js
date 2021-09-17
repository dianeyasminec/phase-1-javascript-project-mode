function renderDrink(drink){
  const card = createElement("li")
  card.appendChilds()
  card.ClassName= "lists"
  card.innerHTML = `
  <img src = "${drink.imageURL}">
  <div>
  <h4>${drink.name}</h4>
  <p>${drink.ingredients}</p>
  <p>${drink.instruction}</p>
  <div>
  <button>LIKE</button>
  <button>COMMENT</button>
  </div>
   </div>`
document.querySelector("#drinks").appendChild(card)
 
};

function getAllDrinks(){
fetch(' http://localhost:3000/DrinksData')
  .then(response => response.json())
  .then(DrinksData =>DrinksData.forEach(drink, renderDrink(drink
  )));
};
function initialize(){
  getAllDrinks()
}
initialize()





