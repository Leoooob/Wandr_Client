"use strict";

function initialise_autocomplete() {
    let input = document.getElementById('location_input');
    let autocomplete = new google.maps.places.Autocomplete(input);
}

var location_sent = false;

function submit_location() {
  let location = document.getElementById('location_input').value;
  location_sent = true;
  console.log(location);
  swap_location_buttons();
};

function swap_location_buttons() {
  console.log(location_sent);
  
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