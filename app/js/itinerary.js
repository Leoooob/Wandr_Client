'use strict';

//var current_position = 5;
var used_venues = [];
const venues = JSON.parse(localStorage.getItem('venue_data'));
const itinerary_container = document.getElementById('itinerary_container');

function next_venue(current_venue, current_position) {
  console.log('\nnext venue')
  console.log('current position: ' + current_position);
  console.log('current venue: ' + current_venue);
  //if exists in used_venues
  if (used_venues.indexOf(current_position) !== -1) {
    console.log('current position exists in our list');
    /*if (current_position === current_venue) {
      console.log ('remove ' + current_venue + ' venue from list')
      used_venues.splice(current_venue, 1);
    }*/
    console.log('used venues: ' + used_venues);
    current_position++;
    console.log('current position is now: ' + current_position);
    return next_venue(current_venue, current_position);
  } else {
    console.log ('remove ' + current_venue + ' venue from list')
    //used_venues.splice(current_venue, 1);
    
    let remove_me = used_venues.indexOf(current_venue);
    used_venues.splice(remove_me, 1);
    
    console.log('add ' + current_position + ' venue to list')
    used_venues.push(current_position);
    console.log('used venues: ' + used_venues);
    
    let id = venues.venues[current_position].id;
    let name = venues.venues[current_position].name;
    
    return [id, name, current_position]
  }
}

function previous_venue() {
  current_position--;
  console.log(current_position);
  //if (current_position < 0) current_position = venues.venues.length-1;
  let id = venues.venues[current_position].id;
  let name = venues.venues[current_position].name;
  
  return [id, name];
}

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

function build_no_results() {
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
  return new_element;
}

function build_itinerary() {
  if (venues.venues.length === 0) {
    let new_element = build_no_results();
    itinerary_container.appendChild(new_element);
    return;
  } else {
    let itinerary_items = venues.venues.slice(0, 5);
    itinerary_items.forEach(function(element, index) {
      //start component builder
      build_item_pill(index);
      used_venues.push(index);
    });
    
    //contains all event listeners for item pills
    //create a function for each event listener and add them after creating the element?
    add_event_listeners();
  }
}

function build_article(venue_index) {
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
      let modes = ['Walking', 'Cycling', 'Driving', 'Public Transport'];
      
      modes.forEach(function(element) {
        let option = document.createElement('option');
        option.text = element;
        travel_select.add(option);
      });
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

function build_item_pill(venue_index) {
  let new_item = document.createElement('div');
  {
    new_item.className = 'slot_box';
    new_item.dataset.travel = 'false';
    new_item.dataset.venueid = venues.venues[venue_index].id;
    new_item.dataset.index = venue_index;
    {
      let article = build_article(venue_index);
      new_item.appendChild(article);
      
      let travel = build_travel();
      new_item.appendChild(travel);
      
      let travel_instructions = build_travel_instructions();
      new_item.appendChild(travel_instructions);
    }
  }
  itinerary_container.appendChild(new_item);
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
  $('.slot__right-arrow').on('click', function(event) {
    if (event) event.preventDefault();
    
    let origin = $(this);
    let slot = origin.closest('.slot_box');
    let slot_label = origin.siblings('.slot__title');
    //let current_index = slot.data('index');
    let current_index = parseInt(slot.attr('data-index'));
    console.log('\nhtml index: ' + current_index);
    console.log(used_venues);
    
    //0 = id, 1 = name, 2 = index of new venue in venues array
    let data = next_venue(current_index, current_index);
    const venue_id = data[0];
    const venue_name = data[1];
    const new_index = data[2];
    
    slot.attr('data-index', new_index);
    slot.attr('data-venueid', venue_id);
    slot_label.text(venue_name);
  });
  
  $('.slot__left-arrow').on('click', function(event) {
    if (event) event.preventDefault();
    
    //0 = id, 1 = name, 2 = index in venues array
    let data = previous_venue();
    const venue_id = data[0];
    const venue_name = data[1];
    const venue_index = data[2];
    
    let origin = $(this);
    
    let slot = origin.closest('.slot_box');
    slot.attr('data-venueid', venue_id);
    slot.dataset('index', venue_index);
    
    let slot_label = origin.siblings('.slot__title');
    slot_label.text(venue_name);
  });
  
  $('.slot__pin-button').on('click', function(event) {
    if (event) event.preventDefault();

    let origin_div = $(this);
    let parent_div = origin_div.closest('.slot');
    let pin_state = parent_div.data('pinned');

    let pin_src = pin_state ? "./assets/pin-unfilled.svg" :  "./assets/pin-filled.svg";
    origin_div.find('img').attr('src', pin_src);
    parent_div.data('pinned', !pin_state);
    //count the number of pinned items, if this is number of itinerary items display travel stuff
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