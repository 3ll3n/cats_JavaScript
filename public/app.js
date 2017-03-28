var app = function() {

  // create the parent container
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");

  // create the child - li
  var liName = document.createElement("li");
  liName.innerText = "Name: Leo";

  var liFood = document.createElement("li");
  liFood.innerText = "Favourite food: Chicken";

  var liImg = document.createElement("li");
  // Photo by Maria - unsplash.com
  liImg.innerHTML = "<img src='maria-73382.jpg'/>";

  // append the li to the ul
  catUl.appendChild(liName);
  catUl.appendChild(liFood);
  catUl.appendChild(liImg);

  // add everything
  var cats = document.querySelector("#cats");
  cats.appendChild(catUl);
}

window.onload = app;