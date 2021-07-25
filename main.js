var cookButton = document.querySelector('.lets-cook');
var clearButton = document.querySelector('.clear');
var addRecipeButton = document.querySelector('.add-recipe-button');
var addNewRecipeButton = document.querySelector('.add-new');
var loginButton = document.querySelector('#submit');
var selectedCourse;
var visitorName;

window.onload = displayLogIn;

cookButton.addEventListener('click', function(event) {
  event.preventDefault();
  chooseCourse();
  assignDishToCourse();
  toggleCookPotOff();
});

clearButton.addEventListener('click', clearSuggestion);

addRecipeButton.addEventListener('click', displayFooter);

addNewRecipeButton.addEventListener('click', function(event) {
  event.preventDefault();
  addNewRecipe();
  toggleCookPotOff();
});

loginButton.addEventListener('click', function(event) {
  greetVisitor();
});

function chooseCourse() {
  var radioButton = document.getElementsByName('course');
  for(var i = 0; i < radioButton.length; i++) {
    if(radioButton[i].checked) {
      selectedCourse = radioButton[i].value;
    }
  }
};

function assignDishToCourse() {
  var side = food.sides[getRandomNum(food.sides)];
  var mainDish = food.mainDishes[getRandomNum(food.mainDishes)];
  var dessert = food.desserts[getRandomNum(food.desserts)];
  var fullMeal = `${mainDish} with a side of ${side} and ${dessert} for dessert!`;
    if(selectedCourse !== 'entire-meal') {
      var index = getRandomNum(food[selectedCourse]);
      document.getElementById('dish').innerHTML = food[selectedCourse][index] + '!';
    } else {
      document.getElementById('dish').innerHTML = fullMeal;
      }
};

function addNewRecipe() {
  var recipeType = document.querySelector('#recipe-type').value.toLowerCase();
  var recipeName = document.querySelector('#recipe-name').value;
  if(recipeType === 'side') {
    document.getElementById('dish').innerHTML = recipeName + '!';
    food.sides.push(recipeName);
  } else if(recipeType === 'main dish') {
    document.getElementById('dish').innerHTML = recipeName + '!';
    food.mainDishes.push(recipeName);
  } else if(recipeType === 'dessert') {
    document.getElementById('dish').innerHTML = recipeName + '!';
    food.desserts.push(recipeName);
  } else {
    document.getElementById('dish').innerHTML = "Sorry, you'll need to specify a recipe classified as a side, main dish, or dessert. Try again!";
  }
};

function toggleCookPotOff() {
  document.querySelector('.cookpot-image').style.display = 'none';
  document.querySelector('.suggestion').style.display = 'block';
  document.querySelector('.clear').style.display = 'block'
};

function clearSuggestion() {
  document.querySelector('.cookpot-image').style.display = '';
  document.querySelector('.suggestion').style.display = 'none';
  document.querySelector('.clear').style.display = 'none';
  document.getElementById('dish').innerText = '';
};

function getRandomNum(array) {
  return Math.floor(Math.random() * array.length);
};

function displayFooter() {
  document.querySelector('.site-footer').style.display = 'block';
};

function greetVisitor() {
  visitorName = document.querySelector('#user-name').value;
  document.querySelector('.login-home').style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('.main-page').style.display = 'block';
    if(visitorName.length > 0) {
      document.querySelector('.box-title').innerHTML = `Welcome, ${visitorName}! What are you looking for? <sup class="asterisk">*</sup>`;
    }
};

function displayLogIn() {
document.querySelector('header').style.display = 'none';
document.querySelector('.main-page').style.display = 'none';
document.querySelector('footer').style.display = 'none';
};
