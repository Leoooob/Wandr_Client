$(document).ready(() => {
  if (localStorage.getItem("venue_data") !== null && localStorage.getItem("location") !== null) {
    let container = $(".front-content");
    let button = document.createElement("button");
    let value = "Revisit \"";
    value += (localStorage.getItem("itinerary_name") === null) ? localStorage.getItem("location") : localStorage.getItem("itinerary_name");
    value += "\"?";
    {
      button.id = "skip_location_submit";
      button.setAttribute("onclick", "window.location='itinerary.html';");
      button.innerHTML = value;
    }
    container.append(button);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setGeoLocation,geoLocationError);
  }
});

var location_sent = false;

function setGeoLocation(position) {
  let coords = `${position.coords.latitude}, ${position.coords.longitude}`;
  let location = document.getElementById("location_input");
  location.value = coords;
}

function geoLocationError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function submit_location() {
  let location = document.getElementById("location_input").value;
  location_sent = true;
  swap_location_buttons();
  send_location(location);
}

function swap_location_buttons() {
  let submit_button = document.getElementById("submit_button");
  let skip_button = document.getElementById("skip_location_submit");
  let loading_div = document.getElementById("loading_div");

  if (location_sent) {
    submit_button.style.display = "none";
    if (skip_button !== null) skip_button.style.display = "none";
    loading_div.style.display = "block";
  } else {
    loading_div.style.display = "none";
    submit_button.style.display = "block";
  }
}

function send_location(location) {
  //let my_url = "http://localhost:3000/api/location";
  var my_url = new URL("https://wandr-app.herokuapp.com/api/location");
  my_url.searchParams.set("near", location);

  fetch(my_url)
    .then((response) => response.json())
    .then((response) => {
      if (!response.venues.length) {
        localStorage.clear();
        throw new Error("No venues were found for this location.");
      } else {
        localStorage.setItem("venue_data", JSON.stringify(response));
        localStorage.setItem("location", location);
      }

      return response;
    })
    .catch((error) => console.error(error))
    .then((response) => {
      window.location.href = "/itinerary.html";
    });
}
