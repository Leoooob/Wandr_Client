'use strict';

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
  let my_url = 'http://localhost:3000/api/location?near=' + location;
  
  $.ajax({
    url: my_url,
    type: 'GET',
    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log('Error: ' + error);
    }
  });
}

$(".travel__node").on("click", function() {
  console.log('travel node clicked!');
  let my_div = $(this);
  let parent_div = my_div.closest('.slot_box');
  
  parent_div.find('.travel__node').addClass('travel__node__active');
  parent_div.find('.travel__instructions').show();
  //parent_div.find('.travel__instructions').css('display','block');
});