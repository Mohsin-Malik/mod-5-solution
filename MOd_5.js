// Previous code
function redirectToSpecials() {
  var categoryShortName = "Specials";
  $state.go('categoryItems', { categoryShortName: categoryShortName });
}

// Modified code
function redirectToRandomCategory() {
  // Generate a random category short name
  var categories = ["Lunch", "Dinner", "Sushi", "Drinks", "Desserts"];
  var randomIndex = Math.floor(Math.random() * categories.length);
  var categoryShortName = categories[randomIndex];

  // Redirect the user to the random category
  $state.go('categoryItems', { categoryShortName: categoryShortName });
}
