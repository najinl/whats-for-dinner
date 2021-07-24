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
var sideDish = food.sides[getRandomNum(food.sides)];
var mainDish = food.mainDishes[getRandomNum(food.mainDishes)];
var dessert = food.desserts[getRandomNum(food.desserts)];

cookButton.addEventListener('click', function(event) {
  event.preventDefault();
  chooseCourse();
  assignDishToCourse();
});

//create a variable that gets elements name by course
function chooseCourse() {
  var radioButton = document.getElementsByName('course');
  var selectedCourse;
  for(var i = 0; i < radioButton.length; i++) {
    if(radioButton[i].checked) {
      selectedCourse = radioButton[i].value
    }
  }
  return selectedCourse;
}

function assignDishToCourse() {
    if(chooseCourse() === 'Side') {
      console.log(sideDish);
    } else if(chooseCourse() === 'Main Dish') {
      console.log(mainDish);
    } else if(chooseCourse() === 'Dessert') {
      console.log(dessert);
    } else {
      console.log('Try Again');
    }
};

function getRandomNum(array) {
  return Math.floor(Math.random() * array.length);
}
