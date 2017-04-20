'use strict';

const itinerary_container = document.getElementById('itinerary_container');

function update_itinerary_name() {
  let location = '';
  if (localStorage.getItem('itinerary_name') === null) {
    location = localStorage.getItem('location');
  } else {
    location = localStorage.getItem('itinerary_name');
  }
  
  $('span.summary_location').text(location);
  build_itinerary();
}

function build_itinerary() {
  const venues = JSON.parse(localStorage.getItem('venue_data'));
  
  if (venues.length === 0) {
    let new_element = document.createElement('div');
    {
      new_element.tabIndex = '1';
      new_element.className = 'no_results';
      {
        let para = document.createElement('p');
        {
          para.appendChild(document.createTextNode("Sorry, we couldn't find anything for you to do here."));
        }
        new_element.appendChild(para);
        var para_2 = document.createElement('p');
        let a = document.createElement('a');
        {
          a.href = 'index.html';
          a.appendChild(document.createTextNode('Try another location?'));
        }
        para_2.appendChild(a);
      }
      new_element.appendChild(para_2);
    }
    itinerary_container.appendChild(new_element);
    return;
  } else {
    let itinerary_items = venues.venues.slice(0, 5);
    itinerary_items.forEach(function(element, index) {
      console.log(element.name + ' at index ' + index);
      //start component builder
      build_item_pill(venues, index);
    });
    
    //contains all event listeners for item pills
    add_event_listeners();
  }
}

function build_article(venues, venue_index) {
  let article = document.createElement('article');
  {
    article.tabIndex = '0';
    article.className = 'slot';
    article.dataset.pinned = 'false';
    {
      let a1 = document.createElement('a');
      {
        a1.href = '#';
        a1.className = 'slot__left-arrow';
        {
          let img = document.createElement('img');
          img.src = './assets/arrow-left.svg';
          a1.appendChild(img);
        }
        article.appendChild(a1)
      }

      let a2 = document.createElement('a');
      {
        a2.href = '#';
        a2.className = 'slot__genre-button';
        {
          let img = document.createElement('img');
          img.src = './assets/genre_32.svg';
          a2.appendChild(img);
        }
        article.appendChild(a2)
      }

      let div = document.createElement('div');
      {
        div.className = 'slot__title';
        div.appendChild(document.createTextNode(venues.venues[venue_index].name));
      }
      article.appendChild(div);

      let a3 = document.createElement('a');
      {
        a3.href = '#';
        a3.className = 'slot__right-arrow';
        {
          let img = document.createElement('img');
          img.src = './assets/arrow-right.svg';
          a3.appendChild(img);
        }
        article.appendChild(a3)
      }

      let a4 = document.createElement('a');
      {
        a4.href = '#';
        a4.className = 'slot__pin-button';
        {
          let img = document.createElement('img');
          img.src = './assets/pin-unfilled.svg';
          a4.appendChild(img);
        }
        article.appendChild(a4)
      }
    }
  }
  return article;
}

function build_travel() {
  let travel = document.createElement('div');
  {
    travel.className = 'travel';
    let travel_select = document.createElement('select');
    {
      travel_select.className = 'travel__mode';

      let option_1 = document.createElement('option');
      {
        option_1.appendChild(document.createTextNode('Walking'))
      }
      travel_select.appendChild(option_1);

      let option_2 = document.createElement('option');
      {
        option_2.appendChild(document.createTextNode('Cycling'))
      }
      travel_select.appendChild(option_2);

      let option_3 = document.createElement('option');
      {
        option_3.appendChild(document.createTextNode('Driving'))
      }
      travel_select.appendChild(option_3);

      let option_4 = document.createElement('option');
      {
        option_4.appendChild(document.createTextNode('Public Transport'))
      }
      travel_select.appendChild(option_4);
    }
    travel.appendChild(travel_select);

    let travel_node = document.createElement('img');
    {
      travel_node.className = 'travel__node';
      travel_node.src = './assets/travel-node_32.svg'
    }
    travel.appendChild(travel_node);

    let travel_time = document.createElement('div');
    {
      travel_time.className = 'travel__time';
      travel_time.appendChild(document.createTextNode('unknown'));
    }
    travel.appendChild(travel_time);
  }
  return travel;
}

function build_travel_instructions() {
  let travel_instructions = document.createElement('ul');
  {
    travel_instructions.className = 'travel__instructions';
    let instruction = document.createElement('li');
    {
      instruction.appendChild(document.createTextNode('no instructions set, yet'));
    }
    travel_instructions.appendChild(instruction);
  }
  return travel_instructions;
}

function build_item_pill(venues, venue_index) {
  let new_item = document.createElement('div');
  {
    new_item.className = 'slot_box';
    new_item.dataset.travel = 'false';
    new_item.dataset.venue_id = venues.venues[venue_index].id;
    {
      let article = build_article(venues, venue_index);
      new_item.appendChild(article);
      
      let travel = build_travel();
      new_item.appendChild(travel);
      
      let travel_instructions = build_travel_instructions();
      new_item.appendChild(travel_instructions);
    }
  }
  itinerary_container.appendChild(new_item);
}

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
  let my_url = 'http://localhost:3000/api/location';
  
  $.ajax({
    url: my_url,
    type: 'GET',
    data: {
      near: location
    },
    success: function(response){
      //save data to local storage and then redirect to new page
      localStorage.setItem('venue_data', JSON.stringify(response));
      localStorage.setItem('location', location);
      window.location.href = '/itinerary.html';
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
    localStorage.setItem('itinerary_name', new_name);
    span.text(new_name);
    input.hide();
    span.show();
  } else {
    span.hide();
    input.show();
  }
}

function add_event_listeners() {
  $('.slot__pin-button').on('click', function(event) {
    if (event) event.preventDefault();

    let origin_div = $(this);
    let parent_div = origin_div.closest('.slot');
    let pin_state = parent_div.data('pinned');

    let pin_src = pin_state ? "./assets/pin-unfilled.svg" :  "./assets/pin-filled.svg";
    origin_div.find('img').attr('src', pin_src);
    parent_div.data('pinned', !pin_state);
  });
  
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
}

/*$('.travel__node').on('click', function() {
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
});*/