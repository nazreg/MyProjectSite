let card = (e) => {
  e.preventDefault();

  // GET INFO
  let name = document.getElementById("name").value;
  let location = document.getElementById("location").value;
  let photo = document.getElementById("photo").value;
  let description = document.getElementById("description").value;

  // CREATE HTML TAGS
  let newDiv = document.createElement("div");
  let newImg = document.createElement("img");
  let newDiv2 = document.createElement("div");
  let newH5 = document.createElement("h5");
  let newH6 = document.createElement("h6");
  let newP = document.createElement("p");
  let newButton = document.createElement("button");
  let newButton2 = document.createElement("button");

  // ADD INFO TO HTML TAGS

  //add class and atributes
  newDiv.classList.add("card-img-top", "cardDivClass");
  newDiv2.setAttribute("class", "card-body");
  newDiv.setAttribute("style", "width: 14rem; height: fit-content;");
  newH5.classList.add("card-title");
  newP.classList.add("card-text");
  newButton.classList.add("btn", "btn-primary", "eb");
  newButton2.classList.add("btn", "btn-primary", "rb");
  newButton2.addEventListener("click", removeCard);
  newButton.addEventListener("click", editCard);

  // img info
  newImg.setAttribute("class", "card-img-top");
  newImg.setAttribute(
    "src",
    photo ||
      "https://cdn.pixabay.com/photo/2020/06/15/15/16/the-caucasus-5302236_960_720.jpg"
  );

  // card text
  newH5.innerHTML = name;
  newH6.innerHTML = location;
  newP.innerHTML = description;
  newButton.innerHTML = "Edit";
  newButton2.innerHTML = "Remove";
  document.getElementById("details").innerHTML = "My WishList";

  let destinations = document.getElementById("destinations_div");

  destinations.appendChild(newDiv).appendChild(newImg);

  newDiv.appendChild(newDiv2);
  newDiv2.appendChild(newH5);
  newDiv2.appendChild(newH6);
  newDiv2.appendChild(newP);
  newDiv2.appendChild(newButton);
  newDiv2.appendChild(newButton2);

  // clear old input values
  document.getElementById("name").value = "";
  document.getElementById("location").value = "";
  document.getElementById("photo").value = "";
  document.getElementById("description").value = "";
};

// identify Add to list button
let addButton = document.getElementById("addbutton");

// create card on click
const form = document.getElementById("destination_form");
form.addEventListener("submit", card);

// REMOVE CURRENT CARD
function removeCard(getDiv) {
  var thisCard = getDiv.target.parentElement.parentElement;
  thisCard.remove();
}

// EDIT CURRENT CARD
function editCard(edit) {
  // edit name
  let editName = prompt("Enter new name");

  let thisCard = edit.target.parentElement;
  let thisName = thisCard.children[0];

  if (editName.length > 0) {
    thisName.innerHTML = editName;
  }
  // edit location
  let editLocation = prompt("Enter new location");

  let thisLocation = thisCard.children[1];

  if (editLocation.length > 0) {
    thisLocation.innerHTML = editLocation;
  }
  // edit photo url
  let editPhoto = prompt("Enter new photo url");

  let bodyCard = edit.target.parentElement.parentElement;
  let thisPhoto = bodyCard.children[0];

  if (editPhoto.length > 0) {
    thisPhoto.setAttribute("src", editPhoto);
  }
  // edit description
  let editDescription = prompt("Enter new description");

  let thisDescription = thisCard.children[2];

  if (editDescription.length > 0) {
    thisDescription.innerHTML = editDescription;
  }
}
