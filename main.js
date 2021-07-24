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
var selectedCourse;
// var mainDish = food.mainDishes[getRandomNum(food.mainDishes)];
// var dessert = food.desserts[getRandomNum(food.desserts)];
// var returnSuggestion = document.querySelector('h2').innerHTML

cookButton.addEventListener('click', function(event) {
  event.preventDefault();
  chooseCourse();
  assignDishToCourse();
  toggleCookPotOff()
});

//create a variable that gets elements name by course
function chooseCourse() {
  var radioButton = document.getElementsByName('course');
  for(var i = 0; i < radioButton.length; i++) {
    if(radioButton[i].checked) {
      selectedCourse = radioButton[i].value
    }
  }
}

function assignDishToCourse() {
  var index = getRandomNum(food[selectedCourse]);
    document.getElementById('dish').innerHTML = food[selectedCourse][index] + '!';



    // if(selectedCourse === 'Side') {
    //   document.getElementById('dish').innerHTML = food.sides[getRandomNum(food.sides)] + '!';
    // } else if(selectedCourse === 'Main Dish') {
    //   document.getElementById('dish').innerHTML = food.mainDishes[getRandomNum(food.mainDishes)] + '!';
    // } else if(selectedCourse === 'Dessert') {
    //   document.getElementById('dish').innerHTML = food.desserts[getRandomNum(food.desserts)] + '!';
    // } else {
    //   console.log('Try Again');
    // }
};
function toggleCookPotOff() {
  document.querySelector('.cookpot-image').style.display = 'none';
  document.querySelector('.suggestion').style.display = 'block';
}

function getRandomNum(array) {
  return Math.floor(Math.random() * array.length);
}
