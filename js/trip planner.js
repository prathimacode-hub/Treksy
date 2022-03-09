
// Form validation 

const tripForm = document.forms["trip-form"];
const currentLocation = document.getElementById("currentLocation");
const destination = document.getElementById("destination");
const arrivalDate = document.getElementById("arrivalDate");
const returnDate = document.getElementById("returnDate");
const transportation = document.getElementById("transportation");
const amenities = document.getElementById("multiple-checkboxes");


let image = document.getElementById('img');
let images = ['../assets/img/trip planner img/image4.jpg', '../assets/img/trip planner img/image1.jpeg', '../assets/img/trip planner img/image2.jpeg', '../assets/img/trip planner img/image3.jpeg'];
setInterval(() => {
  let random = Math.floor(Math.random() * 4);
  image.src = images[random];
}, 4000);

// doc

$(document).ready(function () {
  $('#multiple-checkboxes').multiselect({
    includeSelectAllOption: true,
  });
});

// navbar
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

tripForm.addEventListener("submit", (event) => {

  event.preventDefault();
  if (currentLocation.value == "") {
    swal("Error !", "Please enter your current location", "error");
  }
  else if (destination.value == "") {
    swal("Error !", "Please enter your destination", "error");
  }
  else if (arrivalDate.value == "") {
    swal("Error !", "Please select your arrival date", "error");
  }
  else if (returnDate.value == "") {
    swal("Error !", "Please select your return date", "error");
  }
  else if (returnDate.value == "") {
    swal("Error !", "Please select your return date", "error");
  }
  else if (transportation.value == "") {
    swal("Error !", "Please select your transportation preferences", "error");
  }
  else if (amenities.value == "") {
    swal("Error !", "Please select your preferred amenities", "error");

  }
  else {
    swal("Thank You !", "We will get back to you soon !", "success");
    tripForm.reset();
  }

})