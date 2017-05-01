'use strict';

const my_itinerary_container = document.getElementById('itinerary_container');

function build_no_storage() {
  let new_element = document.createElement('div');
  {
    new_element.tabIndex = '1';
    new_element.className = 'no_results';
    {
      let para = document.createElement('p');
      {
        let text = document.createTextNode("Sorry, we couldn't find anything for you to do here. You might be giving a location that is too specific.");
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
    }
    new_element.appendChild(para_2);
  }
  return new_element;
}

if (localStorage.getItem('venue_data') === null || localStorage.getItem('location') === null) {
  let new_element = build_no_storage();
  my_itinerary_container.appendChild(new_element);
} else {
  init();
}

function init() {
  var used_venues = [];
  var venue_information = {};
  var venues = JSON.parse(localStorage.getItem('venue_data'));
  const original_venues_length = venues.venues.length;

  function next_venue(current_venue, current_position) {
    //if exists in used_venues
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

      return [id, name, current_position]
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

      return [id, name, current_position]
    }
  }

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
          let text = document.createTextNode("Sorry, we couldn't find anything for you to do here. You might be giving a location that is too specific.");
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
      }
      new_element.appendChild(para_2);
    }
    return new_element;
  }

  function build_itinerary() {
    if (venues.statusCode !== undefined || venues.venues.length === 0) {
      let new_element = build_no_results();
      my_itinerary_container.appendChild(new_element);
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
      //create a function for each event listener and add them after creating the element?
    }
  }

  function build_genre_menu() {
    let genre_menu = document.createElement('div');
    {
      genre_menu.className = 'genre_box';

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
            }
            genre_item.appendChild(img);

            let genre_label = document.createElement('div');
            {
              //genre_label.className = '';
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
        a.appendChild(img);
      }
    }
    return a;
  }

  function build_slot_title(title) {
    let div = document.createElement('div');
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
        article.appendChild(a1)

        let a2 = build_genre_button();
        article.appendChild(a2)

        let genre_menu = build_genre_menu();
        article.appendChild(genre_menu);

        let div = build_slot_title(venues.venues[venue_index].name);
        article.appendChild(div);

        let a3 = build_arrow('right');
        article.appendChild(a3)

        let a4 = build_pin_slot();
        article.appendChild(a4)
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
        travel_node.src = './assets/travel-node.svg'
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
    //if val empty and localstorage exists just set text
    if (new_name.length === 0) {
      new_name = localStorage.getItem('location');
    }

    localStorage.setItem('itinerary_name', new_name);
    span.text(new_name);

    input.toggle();
    span.toggle();
    if (input.css('display') != 'none')  input.focus();
  }

  function update_travel(instructions_div, travel_JSON) {
    //array of JSON, each element key = mode of transport, value = array (each element = part of journey)
    let travel = [];
    travel_JSON.forEach(function(element) {
      //get the first key in the object, this is always the mode of transport
      let key = Object.keys(element)[0];
      let everything_else = element[key][0].legs[0].steps;
      let journey_duration = element[key][0].legs[0].duration.text;
      let steps = [];

      everything_else.forEach(function(element) {
        let step = element.html_instructions + ' (' + element.distance.text + ')';
        steps.push(step);
      });

      if (key == 'bicycling') key = 'cycling';
      let journey = {
        'mode': key,
        'journey_time': journey_duration,
        'steps': steps
      };
      travel.push(journey);
    });

    //empty instructions before updating with new ones
    $(instructions_div).empty();
    //build all directions, hide all but walking and update the journey time
    update_travel_instructions(instructions_div, travel);
  }

  function update_travel_instructions(instructions_div, journeys) {
    //journey array contains 4 elements (journeys)
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
      //for each step in the journey, add it to the list
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
            console.log('Error: ' + error);
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

    if (count === 5) {
      get_all_travel();
      display = 'inline-flex';
    } else {
      display = 'none';
      if ($('.travel__mode')[0].selectedIndex !== 0)  $('.travel__mode')[0].selectedIndex = 0;
      if ($('.travel__instructions').css('display') !== 'none') $('.travel__instructions').css('display', display);
    }

    $('.travel').css('display', display);
  }

  function add_genre_venues(new_venues) {
    let original_length = venues.venues.length;

    if (new_venues.venues.length > 0) {
      new_venues.venues.forEach(function(element) {
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
        let slot_label = slotbox.find('.slot__title');
        let current_index = slotbox.attr('data-index');

        //0 = id, 1 = name, 2 = index of new venue in venues array
        let data = next_venue(current_index, new_venue_index);
        update_slotbox(data, slotbox);
      }
    });
  }

  function update_slotbox(data, slotbox) {
    let my_slotbox = $(slotbox);
    let slot_label = my_slotbox.find('.slot__title');

    const venue_id = data[0];
    const venue_name = data[1];
    const new_index = data[2];

    my_slotbox.attr('data-index', new_index);
    my_slotbox.attr('data-venueid', venue_id);
    slot_label.text(venue_name);
  }

  function send_location(genre) {
    if (genre == 'Reset') {
      venues.venues.length = original_venues_length;
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

  function add_event_listeners() {
    $('#trip_input').on('keyup', function(event) {
      let key = event.keyCode | event.which;
      if (key === 13) edit_itinerary_name();
    });

    $('.slot__genre-button').on('click', function(event) {
      if (event)  event.preventDefault();

      let origin = $(this);
      let pin_div = origin.closest('.slot');
      let genre_box = origin.siblings('.genre_box');

      if (is_pinned(pin_div)) {
        console.log('this item is pinned and cannot be changed');
        return;
      } else {
        if (genre_box.css('display') == 'none') {
          $('.genre_box').hide();
        } 
        genre_box.toggle();
      }
    });

    $('.slot__right-arrow').on('click', function(event) {
      if (event)  event.preventDefault();

      let origin = $(this);
      let pin_div = origin.closest('.slot');
      if (is_pinned(pin_div)) {
        console.log('this item is pinned and cannot be changed');
        return;
      } else {
        let slot = origin.closest('.slot_box');
        let slot_label = origin.siblings('.slot__title');
        let current_index = parseInt(slot.attr('data-index'));

        //0 = id, 1 = name, 2 = index of new venue in venues array
        let data = next_venue(current_index, current_index);
        update_slotbox(data, slot);
      }
    });

    $('.slot__left-arrow').on('click', function(event) {
      if (event)  event.preventDefault();

      let origin = $(this);
      let pin_div = origin.closest('.slot');
      if (is_pinned(pin_div)) {
        console.log('this item is pinned and cannot be changed');
        return;
      } else {
        let slot = origin.closest('.slot_box');
        let slot_label = origin.siblings('.slot__title');
        let current_index = parseInt(slot.attr('data-index'));

        //0 = id, 1 = name, 2 = index of new venue in venues array
        let data = previous_venue(current_index, current_index);
        update_slotbox(data, slot);
      }
    });

    $('.slot__pin-button').on('click', function(event) {
      if (event)  event.preventDefault();

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
      let modal = $('#venue_info');
      if (modal.css('display') == 'none') {
        //only call this if we are displaying the modal
        let origin_div = $(this);
        let parent_div = origin_div.closest('.slot_box');
        let venue_id = parent_div.attr('data-venueid');

        venue_info(venue_id);
        modal.show();
      }
    });

    //closing the modal
    $('.modal-close').on('click', function() {
      $('#venue_info').hide();
    });

    $(document).on('keyup', function(event) {
      let key = event.keyCode;
      if (key === 27) $('.modal-close').click();
    });
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
      opening_times = 'No opening times were found for this venue'
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
        'days': 'No opening times were found',
        'times': 'Sorry.'
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
    venue_information.facebook = response.contact.facebookUsername;
    venue_information.twitter = response.contact.twitter;
    build_venue(venue_information);
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

    let categories = venue_info.categories
    let category_list = container.children('.venue__categories').children('ul');
    category_list.empty();

    categories.forEach(function(element) {
      let category = document.createElement('li');
      {
        let text = document.createTextNode(element);
        category.appendChild(text);
      }
      category_list.append(category);
    });

    let address_element = container.find('.venue__address');
    address_element.children('address').empty();
    address_element.children('address').text(venue_info.address.join('\n'));

    let opening_times = $('.venue__times').children('ul');
    opening_times.empty();

    venue_info.times.forEach(function(element) {
      let li = document.createElement('li');
      {
        let text = document.createTextNode(element.days + ': ' + element.times);
        li.appendChild(text);
      }
      opening_times.append(li);
    });

    let rating_div = $('.venue__rating');
    rating_div.empty();

    if (venue_info.avg_rating !== undefined && venue_info.no_ratings !== undefined) {
      rating_div.append('<strong>Rating</strong>').append(': ' + venue_info.avg_rating + '/10 (rated by ' + venue_info.no_ratings + ' people)');
    }

    let glyphs = $('.glyph-icon');
    let text = 'This is the price rating';
    let tooltip_arrow = document.createElement('div');
    tooltip_arrow.className = 'arrow';

    //use a loop?
    if (venue_info.glyphs.price === undefined) {
      venue_info.glyphs.price = '';
    }
    let money = venue_info.glyphs.price.length;
    glyphs.eq(0).children('img').attr('src', './assets/venue_glyph/pound_glyph_' + money + '.svg');
    glyphs.eq(0).children('span').text(text);
    glyphs.eq(0).children('span').append(tooltip_arrow);

    let creditcard = (venue_info.glyphs.creditcard == "Yes") ? '_yes' : '';
    text = (creditcard.length > 0) ? 'Accepts creditcard' : 'Does not accept creditcard';
    glyphs.eq(1).children('img').attr('src', './assets/venue_glyph/credit_card_glyph' + creditcard + '.svg');
    glyphs.eq(1).children('span').text(text);
    glyphs.eq(1).children('span').append(tooltip_arrow);

    let wifi = (venue_info.glyphs.wifi == 'Free') ? '_yes' : '';
    text = (wifi.length > 0) ? 'Free wi-fi available' : 'No free wi-fi';
    glyphs.eq(2).children('img').attr('src', './assets/venue_glyph/wifi_glyph' + wifi + '.svg');
    glyphs.eq(2).children('span').text(text);
    glyphs.eq(2).children('span').append(tooltip_arrow);

    let outdoor = (venue_info.glyphs.outdoor == 'Yes') ? '_yes' : '';
    text = (outdoor.length > 0) ? 'There is outdoor seating available' : 'There is no outdoor seating available';
    glyphs.eq(3).children('img').attr('src', './assets/venue_glyph/outdoor_seating_glyph' + creditcard + '.svg');
    glyphs.eq(3).children('span').text(text);
    glyphs.eq(3).children('span').append(tooltip_arrow);

    let social_div = $('.social');

    if (venue_info.facebook !== undefined) {
      let facebook_link = 'https://www.facebook.com/' + venue_info.facebook;

      let a_tag = social_div.eq(0).children('a');
      a_tag.attr('href', facebook_link);
      let label = a_tag.children('span');
      label.contents().filter(function() {
        return (this.nodeType == 3);
      }).remove();
      label.append('/' + venue_info.facebook);
    } else {
      let a_tag = social_div.eq(0).children('a');
      a_tag.attr('href', '#')
      let label = a_tag.children('span');
      label.contents().filter(function() {
        return (this.nodeType == 3);
      }).remove();
      label.append(document.createTextNode(' N/A'));
    }

    if (venue_info.twitter !== undefined) {
      let twitter_link = 'https://www.twitter.com/' + venue_info.twitter;

      let a_tag = social_div.eq(1).children('a');
      a_tag.attr('href', twitter_link);
      let label = a_tag.children('span');
      label.contents().filter(function() {
        return (this.nodeType == 3);
      }).remove();
      label.append(document.createTextNode('/' + venue_info.twitter));
    } else {
      let a_tag = social_div.eq(1).children('a');
      a_tag.attr('href', '#')
      let label = a_tag.children('span');
      label.contents().filter(function() {
        return (this.nodeType == 3);
      }).remove();
      label.append(document.createTextNode(' N/A'));
    }
  }
}