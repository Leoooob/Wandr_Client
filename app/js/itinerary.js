var venues = {};
var used_venues = [];
var venue_information = {};
var drag_src_element = null;
var original_venues_length = 0;

//these two statements will catch null responses which usually mean that there is no venue information for that location
if (localStorage.getItem('venue_data') !== null) {
  venues = JSON.parse(localStorage.getItem('venue_data'));

  if (venues.venues !== undefined)  original_venues_length = venues.venues.length;
}

const my_itinerary_container = document.getElementById('itinerary_container');

function next_venue(current_venue, current_position) {
  if (used_venues.indexOf(current_position) !== -1) {
    current_position++;

    if (current_position > (venues.venues.length - 1)) {
      current_position = 0;
    }

    return next_venue(current_venue, current_position);
  } else {
    let remove_me = used_venues.indexOf(current_venue);
    used_venues.splice(remove_me, 1);
    used_venues.push(current_position);

    let id = venues.venues[current_position].id;
    let name = venues.venues[current_position].name;
    let location = venues.venues[current_position].location;
    let coords = location.lat + ',' + location.lng;

    return [id, name, current_position, coords];
  }
}

function previous_venue(current_venue, current_position) {
  if (used_venues.indexOf(current_position) !== -1) {
    current_position--;

    if (current_position < 0) {
      let final_element = (venues.venues.length - 1);
      current_position = final_element;
    }

    return previous_venue(current_venue, current_position);
  } else {
    let remove_me = used_venues.indexOf(current_venue);
    used_venues.splice(remove_me, 1);
    used_venues.push(current_position);

    let id = venues.venues[current_position].id;
    let name = venues.venues[current_position].name;
    let location = venues.venues[current_position].location;
    let coords = location.lat + ',' + location.lng;

    return [id, name, current_position, coords];
  }
}

//this function is called on HTML body load
function update_itinerary_name() {
  let location = (localStorage.getItem('itinerary_name') === null) ? localStorage.getItem('location') : localStorage.getItem('itinerary_name');

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
        let text = document.createTextNode("Sorry, we couldn't find anything for you to do here. You might be giving a location that is too broad or too specific.");
        para.appendChild(text);
      }
      new_element.appendChild(para);
      var para_2 = document.createElement('p');
      let a = document.createElement('a');
      {
        a.href = 'index.html';
        let text = document.createTextNode('Try another location?');
        a.appendChild(text);
      }
      para_2.appendChild(a);
      new_element.appendChild(para_2);
    }
  }
  return new_element;
}

function build_itinerary() {
  add_page_event_listeners();

  if (localStorage.getItem('venue_data') === null || localStorage.getItem('location') === null) {
    console.log('no localstorage');
    window.location.href = 'http://wandr.world/';
  } else if (venues.statusCode !== undefined || venues.venues.length === 0) {
    console.log('statuscode is wrong');
    let new_element = build_no_results();
    my_itinerary_container.appendChild(new_element);
    localStorage.clear();
    return;
  } else {
    let itinerary_items = venues.venues.slice(0, 5);
    itinerary_items.forEach(function(element, index) {
      //start component builder
      build_item_pill(index);
      //add each venue index to the list
      used_venues.push(index);
    });

    //contains all event listeners for item pills
    add_event_listeners();
  }
}

function build_genre_menu() {
  let genre_menu = document.createElement('div');
  {
    genre_menu.className = 'genre_box';

    let cross_span = document.createElement('span');
    {
      cross_span.className = 'genre_close';
      let text = document.createTextNode('\u02DF');
      cross_span.appendChild(text);
    }
    genre_menu.appendChild(cross_span);

    let genre_list = document.createElement('ul');
    {
      genre_list.className = 'genre_list';

      let genres = ['Reset', 'Entertainment', 'Museum', 'Nightlife', 'Spiritual', 'Clothes', 'Athletics', 'Outdoors', 'Food'];
      let file_path = './assets/genre_glyph/';
      let file_extension = '.svg';

      genres.forEach(function(element) {
        let genre_item = document.createElement('li');
        {
          let img = document.createElement('img');
          {
            img.src = file_path + element.toLowerCase() + file_extension;
            img.alt = element + ' genre item';
          }
          genre_item.appendChild(img);

          let genre_label = document.createElement('div');
          {
            let text = document.createTextNode(element);
            genre_label.appendChild(text);
          }
          genre_item.appendChild(genre_label);
        }
        genre_list.appendChild(genre_item);
      });
    }
    genre_menu.appendChild(genre_list);

    let pointer = document.createElement('div');
    {
      pointer.className = 'pointer';
    }
    genre_menu.appendChild(pointer);
  }
   return genre_menu;
}

function build_arrow(direction) {
  let a = document.createElement('a');
  {
    a.href = '#';
    a.className = 'slot__' + direction + '-arrow';
    {
      let img = document.createElement('img');
      img.src = './assets/arrow-' + direction + '.svg';
      img.alt = direction + ' navigation arrow';
      a.appendChild(img);
    }
  }
  return a;
}

function build_genre_button() {
  let a = document.createElement('a');
  {
    a.href = '#';
    a.className = 'slot__genre-button';
    {
      let img = document.createElement('img');
      img.src = './assets/genre_32.svg';
      img.alt = 'Genre menu open/close';
      a.appendChild(img);
    }
  }
  return a;
}

function build_slot_title(title) {
  let div = document.createElement('h2');
  {
    div.className = 'slot__title';
    let text = document.createTextNode(title);
    div.appendChild(text);
  }
  return div;
}

function build_pin_slot() {
  let a = document.createElement('a');
  {
    a.href = '#';
    a.className = 'slot__pin-button';
    {
      let img = document.createElement('img');
      {
        img.src = './assets/pin-unfilled.svg';
        img.alt = 'Pin icon';
      }
      a.appendChild(img);

      let span = document.createElement('span');
      {
        span.className = 'tooltip';
        let text = document.createTextNode("Pinned items can't be edited");
        span.appendChild(text);
      }
      a.appendChild(span);
    }
  }
  return a;
}

function build_article(venue_index) {
  let article = document.createElement('article');
  {
    article.tabIndex = '0';
    article.className = 'slot';
    article.dataset.pinned = 'false';
    {
      let a1 = build_arrow('left');
      article.appendChild(a1);

      let a2 = build_genre_button();
      article.appendChild(a2);

      let genre_menu = build_genre_menu();
      article.appendChild(genre_menu);

      let div = build_slot_title(venues.venues[venue_index].name);
      article.appendChild(div);

      let a3 = build_arrow('right');
      article.appendChild(a3);

      let a4 = build_pin_slot();
      article.appendChild(a4);
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
      travel_node.src = './assets/travel-node.svg';
      travel_node.alt = 'Travel Node: Show travel instructions';
    }
    travel.appendChild(travel_node);

    let travel_time = document.createElement('div');
    {
      travel_time.className = 'travel__time';
      let text = document.createTextNode('unknown');
      travel_time.appendChild(text);
    }
    travel.appendChild(travel_time);
  }
  return travel;
}

function build_travel_instructions() {
  let travel_instructions = document.createElement('ul');
  {
    travel_instructions.className = 'travel__instructions';
  }
  return travel_instructions;
}

function build_item_pill(venue_index) {
  let new_item = document.createElement('li');
  {
    new_item.className = 'slot_box';
    new_item.dataset.venueid = venues.venues[venue_index].id;
    new_item.dataset.index = venue_index;
    new_item.draggable = "true";

    //set travel coords for later use
    let location = venues.venues[venue_index].location;
    let latlong = location.lat + ',' + location.lng;
    new_item.dataset.coords = latlong;

    {
      let article = build_article(venue_index);
      new_item.appendChild(article);

      //if this isn't the last item, build travel
      if (venue_index !== 4) {
        let travel = build_travel();
        new_item.appendChild(travel);

        let travel_instructions = build_travel_instructions();
        new_item.appendChild(travel_instructions);
      }
    }
  }
  my_itinerary_container.appendChild(new_item);
}

function edit_itinerary_name() {
  let span = $('span.summary_location');
  let input = $('.trip_name_input');
  let new_name = input.val();

  if (new_name.length === 0) {
    new_name = localStorage.getItem('location');
  }

  localStorage.setItem('itinerary_name', new_name);
  span.text(new_name);

  input.toggle();
  span.toggle();
  if (input.css('display') != 'none') input.focus();
}

function update_travel(instructions_div, travel_JSON) {
  //array of JSON, each element key = mode of transport, value = array (each element = part of journey)
  let travel = [];
  travel_JSON.forEach(function(element) {
    //get the first key in the object, this is always the mode of transport
    let key = Object.keys(element)[0];
    let everything_else;
    let exception = element[key][0];
    if (exception === undefined) {
      let journey = {
        'mode': key,
        'journey_time': 'N/A',
        'steps': ['No travel details could be found']
      };

      travel.push(journey);
    } else {
      everything_else = element[key][0].legs[0].steps;
      let journey_duration = element[key][0].legs[0].duration.text;
      let steps = [];
      everything_else.forEach(function(element) {
        let step = element.html_instructions + ' (' + element.distance.text + ')';
        steps.push(step);
      });

      //cast the key so that it is consistent with label in the select element and
      if (key == 'bicycling') key = 'cycling';

      let journey = {
        'mode': key,
        'journey_time': journey_duration,
        'steps': steps
      };
      travel.push(journey);
    }
  });

  $(instructions_div).empty();
  //build all directions, hide all but walking and update the journey time
  update_travel_instructions(instructions_div, travel);
}

function update_travel_instructions(instructions_div, journeys) {
  journeys.forEach(function(root) {
    instructions_div.setAttribute('data-' + root.mode, root.journey_time);
    let class_name = (root.mode == 'walking') ? root.mode : root.mode + ' hidden';

    if (class_name == 'walking') {
      let parent_div = instructions_div.parentNode.childNodes;
      if (parent_div[1].className == 'travel') {
        let travel_div = parent_div[1].childNodes;
        if (travel_div[2].className == 'travel__time') {
          travel_div[2].innerHTML = (root.journey_time);
        } else return;
      } else return;
    }

    root.steps.forEach(function(element, index) {
      let li = document.createElement('li');
      {
        li.className = class_name;
        li.innerHTML = element;
      }
      instructions_div.appendChild(li);
    });
  });
}

function get_all_travel() {
  let slot_box = $('.slot_box:lt(5)');
  let travel_ins = document.getElementsByClassName('travel__instructions');

  for (let i = 0; i < 5; i++) {
    if (i !== 4) {
      let origin = slot_box[i].getAttribute('data-coords');
      let destination = slot_box[i + 1].getAttribute('data-coords');
      //let my_url = 'http://localhost:3000/api/travel';
      let my_url = 'https://wandr-app.herokuapp.com/api/travel';

      $.ajax({
        url: my_url,
        type: 'GET',
        data: {
          'origin': origin,
          'destination': destination
        },
        success: function(response) {
          let instructions_div = travel_ins[i];
          update_travel(instructions_div, response);
        },
        error: function(error) {
          console.log(error);
        }
      });
    }
  }
}

function is_pinned(origin_div) {
  let pin_state = origin_div.attr('data-pinned');
  pin_state = (pin_state == 'false') ? false : true;
  return pin_state;
}

function count_pins() {
  let count = 0;
  let display = '';
  let pins = $('.slot__pin-button:lt(5)');

  for (let i = 0; i < 5; i++) {
    let parent_div = $(pins[i]).closest('.slot');
    let pin_value = parent_div.attr('data-pinned');
    if (pin_value == 'true') count++;
  }

  var slots = document.querySelectorAll('#itinerary_container .slot_box');

  if (count === 5) {
    get_all_travel();
    display = 'inline-flex';
    [].forEach.call(slots, remove_DND_listeners);
  } else {
    display = 'none';
    $('.travel__node').attr('src', './assets/travel-node.svg');
    if ($('.travel__mode')[0].selectedIndex !== 0)  $('.travel__mode')[0].selectedIndex = 0;
    if ($('.travel__instructions').css('display') !== 'none') $('.travel__instructions').css('display', display);
    [].forEach.call(slots, add_DND_listeners);
  }

  $('.travel').css('display', display);
}

function add_genre_venues(new_venues) {
  let original_length = venues.venues.length;

  if (new_venues.venues.length > 0) {
    new_venues.venues.forEach(function(element) {
      //indexOf an object, is there a way to compare the name of
      //the object against the names of other objects?
      //http://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects/16788517#16788517
      if (venues.venues.indexOf(element) == -1) {
        venues.venues.push(element);
      } else {
        console.log(element.name + ' already exists in our venue list');
      }
    });

    return (original_length + 1);
  } else {
    return false;
  }
}

function set_genre_position(genre, new_venue_index) {
  $('li.selected').children('div').each(function() {
    let genre_text = $(this).text();
    if (genre_text == genre) {
      let slotbox = $(this).closest('.slot_box');
      let current_index = slotbox.attr('data-index');

      let data = next_venue(current_index, new_venue_index);
      update_slotbox(data, slotbox);
    }
  });
}

//this function updates data-attributes for a slot box
function update_slotbox(data, slotbox) {
  let my_slotbox = $(slotbox);
  let slot_label = my_slotbox.find('.slot__title');

  const venue_id = data[0];
  const venue_name = data[1];
  const new_index = data[2];
  const coords = data[3];

  my_slotbox.attr('data-index', new_index);
  my_slotbox.attr('data-venueid', venue_id);
  my_slotbox.attr('data-coords', coords);
  slot_label.text(venue_name);
}

function send_location(genre) {
  if (genre == 'Reset') {
    venues.venues.length = original_venues_length;
    set_genre_position(genre, 0);
  } else {
    //let my_url = 'http://localhost:3000/api/location';
    let my_url = 'https://wandr-app.herokuapp.com/api/location';
    let location = localStorage.getItem('location');

    $.ajax({
      url: my_url,
      type: 'GET',
      data: {
        near: location,
        genre: genre.toLowerCase()
      },
      success: function(response) {
        //add new locations to the venue list
        let new_index = add_genre_venues(response);

        if (new_index !== false) {
          //set position in venue index to new_index for genre item
          set_genre_position(genre, new_index);
        } else {
          //do something to let the user know that there is nothing for this genre in this area
        }
      },
      error: function(error) {
        console.log('Error: ' + error);
      }
    });
  }
}

function add_page_event_listeners() {
  $('#venue_info').on('click', function(e) {
    if (e.target !== this) {
      return;
    } else {
      $('.modal-close').click();
    }
  });

  $('#trip_input').on('keyup', function(event) {
    event.stopImmediatePropagation();

    let key = event.keyCode | event.which;
    if (key === 13) edit_itinerary_name();
  });

  $('.modal-close').on('click', function() {
    event.stopImmediatePropagation();
    event.preventDefault();

    $('#venue_info').hide();
  });

  $(document).on('keyup', function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    let key = event.keyCode;
    if (key === 27) $('.modal-close').click();
  });
}

function add_event_listeners() {
  $('.genre_close').on('click', function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    let origin = $(this);
    let parent = origin.closest('.genre_box');
    let genre_button = parent.siblings('.slot__genre-button');
    genre_button.click();
  });

  $('.slot__genre-button').on('click', function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    let origin = $(this);
    let pin_div = origin.closest('.slot');
    let genre_box = origin.siblings('.genre_box');

    if (is_pinned(pin_div)) {
      console.log('this item is pinned and cannot be changed');
      return;
    } else {
      if (genre_box.css('display') == 'none') $('.genre_box').hide();
      genre_box.toggle();
    }
  });

  $('.slot__right-arrow').on('click', function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    let origin = $(this);
    let pin_div = origin.closest('.slot');
    if (is_pinned(pin_div)) {
      console.log('this item is pinned and cannot be changed');
      return;
    } else {
      let slot = origin.closest('.slot_box');
      let current_index = parseInt(slot.attr('data-index'));

      let data = next_venue(current_index, current_index);
      update_slotbox(data, slot);
    }
  });

  $('.slot__left-arrow').on('click', function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    let origin = $(this);
    let pin_div = origin.closest('.slot');
    if (is_pinned(pin_div)) {
      console.log('this item is pinned and cannot be changed');
      return;
    } else {
      let slot = origin.closest('.slot_box');
      let current_index = parseInt(slot.attr('data-index'));

      let data = previous_venue(current_index, current_index);
      update_slotbox(data, slot);
    }
  });

  $('.slot__pin-button').on('click', function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    let origin_div = $(this);
    let parent_div = origin_div.closest('.slot');
    let pin_state = parent_div.attr('data-pinned');
    if (pin_state == 'false') {
      pin_state = true;
    } else {
      pin_state = false;
    }

    let pin_src = (!pin_state) ? "./assets/pin-unfilled.svg" :  "./assets/pin-filled.svg";
    origin_div.find('img').attr('src', pin_src);
    parent_div.attr('data-pinned', pin_state);
    count_pins();
    //count the number of pinned items, if this is number of itinerary items display travel stuff
  });

  $('.genre_list li').on('click', function() {
    event.stopImmediatePropagation();
    event.preventDefault();

    let origin_div = $(this);
    let item_text = origin_div.children('div').text();
    let parent_div = origin_div.parent();
    parent_div.children('li').removeClass('selected');
    origin_div.addClass('selected');

    send_location(item_text);
  });

  $('.travel__mode').on('change', function() {
    let origin_div = $(this);
    let new_mode = this.value.toLowerCase();
    if (new_mode == 'public transport') new_mode = 'transit';

    let travel_time_div = origin_div.siblings('.travel__time');
    let travel_instruction_div = origin_div.parent('.travel').siblings('.travel__instructions');

    //change instructions to correct class
    update_instructions(travel_instruction_div, new_mode);

    let journey_time = travel_instruction_div.attr('data-' + new_mode);
    travel_time_div.text(journey_time);
  });

  $('.travel__node').on('click', function() {
    event.stopImmediatePropagation();
    event.preventDefault();

    let origin_div = $(this);
    let parent_div = origin_div.closest('.slot_box');

    if (parent_div.find('.travel__instructions').css('display') != 'none') {
      parent_div.find('.travel__node').attr('src', './assets/travel-node.svg');
      parent_div.find('.travel__instructions').hide();
    } else {
      parent_div.find('.travel__node').attr('src', './assets/travel-node_active.svg');
      parent_div.find('.travel__instructions').show();
    }
  });

  $('.slot__title').on('click', function() {
    event.stopImmediatePropagation();
    event.preventDefault();

    let modal = $('#venue_info');
    if (modal.css('display') == 'none') {
      let origin_div = $(this);
      let parent_div = origin_div.closest('.slot_box');
      let venue_id = parent_div.attr('data-venueid');

      venue_info(venue_id);
      modal.show();
    }
  });

  var slots = document.querySelectorAll('#itinerary_container .slot_box');
  [].forEach.call(slots, add_DND_listeners);
}

function update_instructions(instructions_div, transport_mode) {
  let old_instructions = $(instructions_div).find('li').not('hidden');
  old_instructions.addClass('hidden');

  let new_instructions = $(instructions_div).find('li.' + transport_mode);
  new_instructions.removeClass('hidden');
}

function venue_info(venue_id) {
  //let my_url = 'http://localhost:3000/api/venue';
  let my_url = 'https://wandr-app.herokuapp.com/api/venue';

  $.ajax({
    url: my_url,
    type: 'GET',
    data: {
      id: venue_id
    },
    success: function(response) {
      build_venue_JSON(response);
    },
    error: function(error) {
      console.log('Error: ' + error);
    }
  });
}

function build_venue_JSON(response) {
  //general stuff
  venue_information.name = response.name;
  venue_information.url = response.url;
  venue_information.foursquare = response.canonicalUrl;

  //categories
  let categories = response.categories;
  venue_information.categories = [];

  categories.forEach(function(element) {
    venue_information.categories.push(element.name);
  });

  venue_information.address = response.location.formattedAddress; //this is an array, each element is a line of address

  //opening times
  let opening_times = '';
  if (response.hours !== undefined) {
    opening_times = response.hours.timeframes;
  } else if (response.popular !== undefined) {
    opening_times = response.popular.timeframes;
  } else {
    opening_times = 'No opening times were found for this venue';
  }

  venue_information.times = [];

  if (opening_times != 'No opening times were found for this venue') {
    opening_times.forEach(function (element) {
      let days = element.days;
      if (days == 'Today') {
        return;
      } else {
        let times_list = element.open;
        let times = [];
        times_list.forEach(function (element) {
          times.push(element.renderedTime);
        });

        let day_times = {
          'days': days,
          'times': times
        };

        venue_information.times.push(day_times);
      }
    });
  } else {
    let day_times = {
      'days': 'No opening times were found, sorry.',
      'times': ''
    };
    venue_information.times.push(day_times);
  }

  //ratings
  venue_information.avg_rating = response.rating;
  venue_information.no_ratings = response.ratingSignals;

  //gylphs
  venue_information.glyphs = [];
  let glyph_stuff = response.attributes.groups;

  console.log(venue_information.name + ': ');
  for (let i = 0; i < glyph_stuff.length; i++) {
    let this_glyph = glyph_stuff[i].items[0];
    //easy to collect more glyph data, just add more usable cases
    switch (this_glyph.displayName) {
      case 'Price':
        venue_information.glyphs.price = this_glyph.displayValue;
        break;

      case 'Credit Cards':
        venue_information.glyphs.creditcard = this_glyph.displayValue;
        break;

      case 'Outdoor Seating':
        venue_information.glyphs.outdoor = this_glyph.displayValue;
        break;

      case 'Wi-Fi':
        venue_information.glyphs.wifi = this_glyph.displayValue;
        break;

      default:
        console.log("Sorry we don't currently display glyph information for " + this_glyph.displayName);
        break;
    }
  }

  //social media
  venue_information.facebook = '/' + response.contact.facebookUsername;
  venue_information.twitter = '/' + response.contact.twitter;
  build_venue(venue_information);
}

function build_venue_category(category_name) {
  let category = document.createElement('li');
    {
      let text = document.createTextNode(category_name);
      category.appendChild(text);
    }
    return category;
}

function build_venue_openingtimes(element) {
  let li = document.createElement('li');
  {
    let text = document.createTextNode(element.days + ': ' + element.times);
    li.appendChild(text);
  }
  return li;
}

function build_venue_glyph(eq_no, img_src, img_alt, text) {
  let glyphs = $('.glyph-icon');
  let tooltip_arrow = document.createElement('div');
  tooltip_arrow.className = 'arrow';

  glyphs.eq(eq_no).children('img').attr('src', img_src).attr('alt', img_alt);
  glyphs.eq(eq_no).children().text(text);
  glyphs.eq(eq_no).children().append(tooltip_arrow);
}

//media = 0 (facebook) or 1 (twitter), link = profile route ONLY
function build_venue_social(media, link) {
  let base_url = (media === 0) ? 'https://facebook.com' : 'https://www.twitter.com';
  let hyperlink = (link === ' N/A') ? '#' : (base_url + link);
  let a_tag = $('.social').eq(media).children('a');
  a_tag.attr('href', hyperlink);
  let label = a_tag.children('span');
  label.contents().filter(function() {
    return (this.nodeType === 3);
  }).remove();
  let text = document.createTextNode(' ' + link);
  label.append(text);
}

//wrap this function call in a try-catch in case it cannot interpret some data and it ends up displaying stale info
function build_venue(venue_info) {
  //add venue id as data role and check that before rebuilding the modal
  let container = $('#venue_information');
  container.children('h3').text(venue_info.name);
  let url = (venue_info.url !== undefined) ? venue_info.url : 'No website available';
  if (url == 'No website available') {
    container.children('a').attr('href', '#').text(url);
  } else {
    container.children('a').attr('href', url).text(url);
  }

  //add link to the foursquare attribution
  $('.foursquare-attribution').attr('href', venue_info.foursquare);

  let categories = venue_info.categories;
  let category_list = container.children('.venue__categories').children('ul');
  category_list.empty();

  categories.forEach(function(element) {
    let category = build_venue_category(element);
    category_list.append(category);
  });

  let address_element = container.find('.venue__address');
  address_element.children('address').empty();
  address_element.children('address').text(venue_info.address.join('\n'));

  let opening_times = $('.venue__times').children('ul');
  opening_times.empty();

  venue_info.times.forEach(function(element) {
    let li = build_venue_openingtimes(element);
    opening_times.append(li);
  });

  let rating_div = $('.venue__rating');
  rating_div.empty();

  if (venue_info.avg_rating !== undefined && venue_info.no_ratings !== undefined) {
    rating_div.append('<strong>Rating</strong>').append(': ' + venue_info.avg_rating + '/10 (rated by ' + venue_info.no_ratings + ' people)');
  }

  if (venue_info.glyphs.price === undefined)  venue_info.glyphs.price = '';

  let money = venue_info.glyphs.price.length;
  let img_src = './assets/venue_glyph/pound_glyph_' + money + '.svg';
  let img_alt = 'Price glyph';
  let text = 'This is the price rating';
  build_venue_glyph(0, img_src, img_alt, text);

  let creditcard = (venue_info.glyphs.creditcard == "Yes") ? '_yes' : '';
  img_src = './assets/venue_glyph/credit_card_glyph' + creditcard + '.svg';
  img_alt = 'Credit card glyph';
  text = (creditcard.length > 0) ? 'Accepts creditcard' : 'Does not accept creditcard';
  build_venue_glyph(1, img_src, img_alt, text);

  let wifi = (venue_info.glyphs.wifi == 'Free') ? '_yes' : '';
  img_src = './assets/venue_glyph/wifi_glyph' + wifi + '.svg';
  img_alt = 'Free wi-fi glyph';
  text = (wifi.length > 0) ? 'Free wi-fi available' : 'No free wi-fi';
  build_venue_glyph(2, img_src, img_alt, text);

  let outdoor = (venue_info.glyphs.outdoor == 'Yes') ? '_yes' : '';
  img_src = './assets/venue_glyph/outdoor_seating_glyph' + creditcard + '.svg';
  img_alt = 'Outdoor seating glyph';
  text = (outdoor.length > 0) ? 'There is outdoor seating available' : 'There is no outdoor seating available';
  build_venue_glyph(3, img_src, img_alt, text);

  let facebook_link = (venue_info.facebook != '/undefined') ? (venue_info.facebook) : ' N/A';
  build_venue_social(0, facebook_link);

  let twitter_link = (venue_info.twitter != '/undefined') ? (venue_info.twitter) : ' N/A';
  build_venue_social(1, twitter_link);
}

/* DND event functions */
function DND_drag_start(e) {
  drag_src_element = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
  this.classList.add('drag');
}

function DND_drag_over(e) {
  if (e.preventDefault) e.preventDefault();

  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';

  return false;
}

function DND_drag_leave(e) {
  this.classList.remove('over');
}

function DND_drop(e) {
  if (e.stopPropagation)  e.stopPropagation();

  if (drag_src_element != this) {
    this.parentNode.removeChild(drag_src_element);
    let drop_HTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin', drop_HTML);
  }

  this.classList.remove('drag');
  this.classList.remove('over');
  return false;
}

function DND_drag_end(e) {
  this.classList.remove('over');
  this.classList.remove('drag');
  add_event_listeners();
}

function add_DND_listeners(element) {
  element.addEventListener('dragstart', DND_drag_start, false);
  element.addEventListener('dragover', DND_drag_over, false);
  element.addEventListener('dragleave', DND_drag_leave, false);
  element.addEventListener('drop', DND_drop, false);
  element.addEventListener('dragend', DND_drag_end, false);
}

function remove_DND_listeners(element) {
  element.removeEventListener('dragstart', DND_drag_start);
  element.removeEventListener('dragover', DND_drag_over);
  element.removeEventListener('dragleave', DND_drag_leave);
  element.removeEventListener('drop', DND_drop);
  element.removeEventListener('dragend', DND_drag_end);
}
