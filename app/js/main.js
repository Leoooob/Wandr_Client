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
  //add parameters to request instead of embedding
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

function edit_itinerary_name() {
  let span = $('span.summary_location');
  let input = $('.trip_name_input');
  
  if(span.css('display') == 'none') {
    let new_name = input.val(); 
    span.text(new_name);
    input.hide();
    span.show();
  } else {
    span.hide();
    input.show();
  }
}

$('.travel__node').on('click', function() {
  let origin_div = $(this);
  let parent_div = origin_div.closest('.slot_box');
  
  if (parent_div.data('travel') == 'true') {
    parent_div.find('.travel__node').removeClass('travel__node__active');
    parent_div.find('.travel__instructions').hide();
    parent_div.data('travel', 'false');
  } else {
    parent_div.find('.travel__node').addClass('travel__node__active');
    parent_div.find('.travel__instructions').show();
    parent_div.data('travel', 'true');
  }
});

$('.slot__pin-button').on('click', function(event) {
  if (event) event.preventDefault();
  
  let origin_div = $(this);
  let parent_div = origin_div.closest('.slot');
  let pin_state = parent_div.data('pinned');
  
  let pin_src = pin_state ? "./assets/pin-unfilled.svg" :  "./assets/pin-filled.svg";
  origin_div.find('img').attr('src', pin_src);
  parent_div.data('pinned', !pin_state);
});