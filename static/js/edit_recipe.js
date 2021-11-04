var ingredient = 0;

document.addEventListener('DOMContentLoaded', function () {
  callForRemuve();

  enterIngredientEdit ();
  enterDirectionsEdit();
  removeIngredient();
  removeDirection();
});


// ------------------------------------------------------
// Remove function block fro old ingredient adn directions list

// Gets the length of the ingredient and directions list
// Seds request for remove function to delete specifict item
function callForRemuve() {
  var list = document.getElementsByClassName("edit-ing-input-field");
  var directionList = document.getElementsByClassName("edit-dir-input-field");

  for (var i = 0; i < list.length; i++) {
    var parent = document.getElementById(`edit-ingredient-list-item-${i}`);
    var btn = document.getElementById(`edit-ingredient-list-item-remuve-${i}`);
    remuve(parent, btn);
  }

  for (var i = 0; i < directionList.length; i++) {
    var parent02 = document.getElementById(`edit-directions-list-item-${i}`);
    var btn02 = document.getElementById(`edit-direction-list-item-remuve-${i}`);
    remuve02(parent02, btn02);
  }
} 


// Removes old ingredients list
function remuve(parent, btn) {
    btn.addEventListener("click", () => {
      parent.remove(parent);
    });
  return
}


// Removes old directions list
function remuve02(parent, btn) {
  btn.addEventListener("click", () => {
    parent.remove(parent);
  });
return
}
// ------------------------------------------------------


// ------------------------------------------------------
// Generates a list item for recipe ingredients
function addIngredientsEdit () {
  var ingredientList = document.getElementById("edit_ingredients");
  var ingredientItem = document.createElement("li");
  var ingredientRow = document.createElement("div");
  var ingredientImputCol = document.createElement("div");
  var ingredientInput = document.createElement("input");
  var remuveBtnCol = document.createElement("div");
  var remuveBtnText = document.createElement("p");

  ingredientList.appendChild(ingredientItem);

  ingredientItem.setAttribute("class", "ing-input-field");
  ingredientItem.setAttribute("id", `ingredient-list-item-${ingredient}`);
  ingredientItem.setAttribute("number", `${ingredient}`);
  ingredientItem.appendChild(ingredientRow);

  ingredientRow.setAttribute("class", "row");
  ingredientRow.appendChild(ingredientImputCol);
  ingredientRow.appendChild(remuveBtnCol);
  
  ingredientImputCol.setAttribute("class", "col s9");
  ingredientImputCol.appendChild(ingredientInput);

  ingredientInput.setAttribute("name", "recipe_ingredient");
  ingredientInput.setAttribute("type", "text");
  ingredientInput.setAttribute("class", "recipe_ing");
  ingredientInput.setAttribute("required", "");

  remuveBtnCol.setAttribute("class", "col s3");
  remuveBtnCol.setAttribute("id", `ingredient-list-item-remuve-${ingredient}`);
  remuveBtnCol.setAttribute("number", `${ingredient}`);
  
  remuveBtnCol.appendChild(remuveBtnText);

  remuveBtnText.appendChild(document.createTextNode("Remuve"));

  ingredient++;
  return
}


// Generates a list after pressing enter after user input
// in add_recipe.html ingredient list
function enterIngredientEdit () {
  document.querySelector('#edit_ingredients').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addIngredientsEdit ();
      removeIngredient();
    }
  });
}


function removeIngredient() {
  var removeBtns = document.querySelectorAll(".ing-input-field");
  var num;

  var num = parseInt(removeBtns[removeBtns.length-1].getAttribute("number")) + 1;

    for (var i = 0; i < num; ++i) {
      var parent = document.getElementById(`ingredient-list-item-${i}`);
      var btns = document.getElementById(`ingredient-list-item-remuve-${i}`);
    }
    btns.addEventListener("click", () => {
      parent.remove(parent);
    });
  
  return
}
// ------------------------------------------------------


// ------------------------------------------------------
// Generates a list item for recipe directions
function addDirectionsEdit () {
  var directiontList = document.getElementById("edit-directions");
  var directionItem = document.createElement("li");
  var directiontRow = document.createElement("div");
  var directiontImputCol = document.createElement("div");
  var directiontInput = document.createElement("textarea");
  var remuveBtnCol = document.createElement("div");
  var remuveBtnText = document.createElement("p");

  directiontList.appendChild(directionItem);

  directionItem.setAttribute("class", "dir-input-field");
  directionItem.setAttribute("id", `directions-list-item-${direction}`);
  directionItem.setAttribute("number", `${direction}`);
  directionItem.appendChild(directiontRow);


  directiontRow.setAttribute("class", "row");
  directiontRow.appendChild(directiontImputCol);
  directiontRow.appendChild(remuveBtnCol);
  
  directiontImputCol.setAttribute("class", "col s9");
  directiontImputCol.appendChild(directiontInput);

  directiontInput.setAttribute("name", "recipe_direction");
  directiontInput.setAttribute("type", "text");
  directiontInput.setAttribute("class", "recipe_dir");
  directiontInput.setAttribute("required", "");

  remuveBtnCol.setAttribute("class", "col s3");
  remuveBtnCol.setAttribute("id", `direction-list-item-remuve-${direction}`);
  remuveBtnCol.appendChild(remuveBtnText);

  remuveBtnText.appendChild(document.createTextNode("Remuve"));

  direction++;
  return
}


// Generates a list after pressing enter after user input
// in add_recipe.html directions list
function enterDirectionsEdit () {
  document.querySelector('#edit-directions').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addDirectionsEdit();
      removeDirection();
    }
  });
}

function removeDirection() {
  var removeBtns = document.querySelectorAll(".dir-input-field");
  var num;

  var num = parseInt(removeBtns[removeBtns.length-1].getAttribute("number")) + 1;

    for (var i = 0; i < num; ++i) {
      var parent = document.getElementById(`directions-list-item-${i}`);
      var btns = document.getElementById(`direction-list-item-remuve-${i}`);
    }
    btns.addEventListener("click", () => {
      parent.remove(parent);
    });
  
  return
}
// ------------------------------------------------------