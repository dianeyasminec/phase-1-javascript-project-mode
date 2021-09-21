function renderDrink(drink){
  const card = document.createElement("li")  
  card.className= "lists"
  card.innerHTML = `
  <img src="${drink.imageURL}" width="100" height="100">
  <div>
  <h4>${drink.name}</h4>
  <p>${drink.ingredients}</p>
  <p>${drink.instruction}</p>
  </div>
  <button class="like" onclick = "javascript:alert('click')"> Like </button>
  <br/>
  <br/>
  <textarea id = "comment_${drink.id}"class="text" cols=70 rows=10></textarea>
  <br/>
  <button class="submit" onclick = "commentDrink('comment_${drink.id}')"> Comment </button>
  <br/>
  <br/>
  <hr/>
  

  `

document.querySelector("#drinks").appendChild(card)
};
function commentDrink(id){
  console.log("txt area id is "+id)
const txt = document.getElementById(id)
 alert("your comment has been saved") 
}
/*function addListener(){
  document.querySelector(".submits").addEventListener("submit", event => 
    event.preventDefault())
  document.querySelector(".comments").addEventListener("comments", event => 
event.preventDefault())
  btns = document.querySelector(".like")
  for (let i = 0; i<btns.length;i++){
 btns[i].addEventListener("click", ()=> {
  document.querySelector(".like").innerHTML = "This is really cool!"})
 }

let btn = document.querySelector(".like")
if(btn){
  btn.addEventListener('click', swapper, false);
}

let text = document.querySelector("#msg")
btn.addEventListener("click", ()=> { text.classList.toggle('reveal');})*/


function getAllDrinks(){
  fetch('http://localhost:3000/DrinksData')
  .then(response => response.json())
  .then(DrinksData =>DrinksData.forEach(drink => renderDrink(drink
  )));
};

document.addEventListener('DOMContentLoaded', (addListener) => {
  getAllDrinks();
});
