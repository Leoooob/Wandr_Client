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
});

function initialise_autocomplete() {
    let input = document.getElementById("location_input");
    let autocomplete = new google.maps.places.Autocomplete(input);
}

var location_sent = false;

function submit_location() {
  //TODO: remove localStorage clearing
  localStorage.clear();
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

  //@TODO: check response, if empty then stop the navigation. otherwise carry on and nuke the cache.
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
    //@TODO: do something in frontend with the below error
    .catch((error) => console.error(error))
    .then((response) => {
      window.location.href = "/itinerary.html";
    });

  /*$.ajax({
    url: my_url,
    type: "GET",
    data: {
      near: location
    },
    success: function(response) {
      localStorage.setItem("venue_data", JSON.stringify(response));
      localStorage.setItem("location", location);
      window.location.href = "/itinerary.html";
    },
    error: function(error) {
      console.log("Error: " + error);
    }
  });*/
}
