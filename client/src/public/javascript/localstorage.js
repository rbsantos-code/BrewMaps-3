let favoritePlaces = JSON.parse(localStorage.getItem("favoritePlaces"))
let ulPlaces = $("#places")
// Ian's code above


// Place-holder code below for appending localStorage
var favSectionEl = document.querySelector(".fav-section");

// Grab brew names from local storage (array)
var favorites = JSON.parse(localStorage.getItem("brew-name"));
console.log("favorites", favorites);

// Function to show brewery names on page

function ShowBrew() {
    favSectionEl.innerHTML = "";
    for (var i = 0; i < favorites.length; i++) {
        var favBrew = document.createElement("h3");
        favBrew.innerHTML = `<a href=${favorites[i].href}/>${favorites[i].name}</a><a href="/dashboard"><button>comment</button></a>`;

        favSectionEl.append(favBrew);
    }
}

// BUTTON FUNCTION SECTION ----------------------

// clear button section
var clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    favorites = [];
    favSectionEl.innerHTML = "";
})

// Show button section
var showBtn = document.querySelector("#showBtn");

showBtn.addEventListener("click", function() {
    ShowBrew();
})