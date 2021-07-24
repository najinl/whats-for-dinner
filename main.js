var food = {
  sides: [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
  ],
  mainDishes: [
    'Beef Ragu',
    'Mississippi Pot Roast',
    'Meatloaf',
    'Chicken & Dumplings',
    'Chicken Alfredo',
    'Enchiladas',
    'Vegetarian Lettuce Wraps',
    'Falafel Sandwich',
    "Za'atar Roasted Lamb Chops",
    'Bamia',
    'Veggie Pot Pie',
    'Butternut Risotto',
    'Bibimbap'
  ],
  desserts: [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
  ]
};

var cookButton = document.querySelector('.lets-cook');
var clearButton = document.querySelector('.clear');
var selectedCourse;

cookButton.addEventListener('click', function(event) {
  event.preventDefault();
  chooseCourse();
  assignDishToCourse();
  toggleCookPotOff()
});

clearButton.addEventListener('click', clearSuggestion);

function chooseCourse() {
  var radioButton = document.getElementsByName('course');
  for(var i = 0; i < radioButton.length; i++) {
    if(radioButton[i].checked) {
      selectedCourse = radioButton[i].value;
    }
  }
};

function assignDishToCourse() {
  // var index = getRandomNum(food[selectedCourse]);
  var side = food.sides[getRandomNum(food.sides)];
  var mainDish = food.mainDishes[getRandomNum(food.mainDishes)];
  var dessert = food.desserts[getRandomNum(food.desserts)];
  var fullMeal = `${mainDish} with a side of ${side} and ${dessert} for dessert!`;
  // console.log(selectedCourse);
    if(selectedCourse !== 'entire-meal') {
      var index = getRandomNum(food[selectedCourse]);
      document.getElementById('dish').innerHTML = food[selectedCourse][index] + '!';
    } else {
      document.getElementById('dish').innerHTML = fullMeal;
      }
};

function toggleCookPotOff() {
  document.querySelector('.cookpot-image').style.display = 'none';
  document.querySelector('.suggestion').style.display = 'block';
  document.querySelector('.clear').style.display = 'block'
};

function getRandomNum(array) {
  return Math.floor(Math.random() * array.length);
};


function clearSuggestion() {
  location.reload();
}
