'use strict';

function initialise_autocomplete() {
    let input = document.getElementById('location_input');
    let autocomplete = new google.maps.places.Autocomplete(input);
}

var location_sent = false;

function submit_location() {
  localStorage.clear();
  let location = document.getElementById('location_input').value;
  location_sent = true;
  swap_location_buttons();
  send_location(location);
};

function swap_location_buttons() {
  if (location_sent) {
    //show loading
    let submit_button = document.getElementById('submit_button');
    submit_button.style.display = 'none';
    
    let loading_div = document.getElementById('loading_div');
    loading_div.style.display = 'block';
  } else {
    //show not loading
    let loading_div = document.getElementById('loading_div');
    loading_div.style.display = 'none';
    
    let submit_button = document.getElementById('submit_button');
    submit_button.style.display = 'block';
  }
}

function send_location(location) {
  let my_url = 'http://localhost:3000/api/location';
  
  $.ajax({
    url: my_url,
    type: 'GET',
    data: {
      near: location
    },
    success: function(response) {
      //save data to local storage and then redirect to new page
      localStorage.setItem('venue_data', JSON.stringify(response));
      localStorage.setItem('location', location);
      window.location.href = '/itinerary.html';
    },
    error: function(error) {
      console.log('Error: ' + error);
    }
  });
}