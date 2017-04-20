'use strict';

const itinerary_container = document.getElementById('itinerary_container');
var JSON = {
  "venues": [
    {
      "id": "4beb25fca9900f47dc701740",
      "name": "O'Neills",
      "location": {
        "address": "4 Friar St",
        "lat": 51.45667438470146,
        "lng": -0.9703481197357178,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45667438470146,
            "lng": -0.9703481197357178
          }
        ],
        "postalCode": "RG1 1DB",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "4 Friar St",
          "Reading",
          "RG1 1DB",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "52e81612bcbc57f1066b7a06",
          "name": "Irish Pub",
          "pluralName": "Irish Pubs",
          "shortName": "Irish",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 1487,
        "usersCount": 622,
        "tipCount": 13
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "6",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556a3076a7c8957d73d459cc"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "502904735dd7750e9d63bbb9",
      "name": "Starbucks",
      "location": {
        "address": "21 Queen Victoria St",
        "lat": 51.45610868130249,
        "lng": -0.9721107263292701,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45610868130249,
            "lng": -0.9721107263292701
          }
        ],
        "postalCode": "RG1 1SX",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "21 Queen Victoria St",
          "Reading",
          "RG1 1SX",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 1842,
        "usersCount": 689,
        "tipCount": 12
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "12707",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556f676fbd6a75a99038d8ec"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "55df03a6498e619d1c6251e6",
      "name": "Itsu",
      "location": {
        "address": "31 Queen Victoria St",
        "lat": 51.455684,
        "lng": -0.972275,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.455684,
            "lng": -0.972275
          }
        ],
        "postalCode": "RG1 1SY",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "31 Queen Victoria St",
          "Reading",
          "RG1 1SY",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d142941735",
          "name": "Asian Restaurant",
          "pluralName": "Asian Restaurants",
          "shortName": "Asian",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/asian_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 338,
        "usersCount": 140,
        "tipCount": 6
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "5569fe17a7c8896abe7db287"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4b1288b2f964a520928a23e3",
      "name": "Starbucks",
      "location": {
        "address": "1 Butter Market & 6 King St",
        "lat": 51.455171860200345,
        "lng": -0.9698948264122009,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.455171860200345,
            "lng": -0.9698948264122009
          }
        ],
        "postalCode": "RG1 2BH",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "1 Butter Market & 6 King St",
          "Reading",
          "RG1 2BH",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 3945,
        "usersCount": 1010,
        "tipCount": 14
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "12887",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556f676fbd6a75a99038d8ec"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4b1cd272f964a520fb0924e3",
      "name": "The Oracle",
      "location": {
        "address": "Bridge St",
        "lat": 51.453572813030455,
        "lng": -0.9708227680212513,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.453572813030455,
            "lng": -0.9708227680212513
          }
        ],
        "postalCode": "RG1 2AG",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "Bridge St",
          "Reading",
          "RG1 2AG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1fd941735",
          "name": "Shopping Mall",
          "pluralName": "Shopping Malls",
          "shortName": "Mall",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 16788,
        "usersCount": 4544,
        "tipCount": 43
      },
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b6ec36ef964a5207dc92ce3",
      "name": "Pret A Manger",
      "location": {
        "address": "60 Broad St",
        "lat": 51.455554692964824,
        "lng": -0.9740356661693277,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.455554692964824,
            "lng": -0.9740356661693277
          }
        ],
        "postalCode": "RG1 2AF",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "60 Broad St",
          "Reading",
          "RG1 2AF",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1c5941735",
          "name": "Sandwich Place",
          "pluralName": "Sandwich Places",
          "shortName": "Sandwiches",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/deli_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 626,
        "usersCount": 300,
        "tipCount": 6
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "211",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556ca152a7c87f63786a4a22"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4bab875af964a5209eb03ae3",
      "name": "Broad Street Mall",
      "location": {
        "address": "Broad St",
        "crossStreet": "Cheapside",
        "lat": 51.45490049888001,
        "lng": -0.9758046600574584,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45490049888001,
            "lng": -0.9758046600574584
          }
        ],
        "postalCode": "RG1 7QE",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "Broad St (Cheapside)",
          "Reading",
          "Berkshire",
          "RG1 7QE",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1fd941735",
          "name": "Shopping Mall",
          "pluralName": "Shopping Malls",
          "shortName": "Mall",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 2612,
        "usersCount": 778,
        "tipCount": 16
      },
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4bd1bd3a5e0cce7281eaa184",
      "name": "Malmaison",
      "location": {
        "address": "18-20 Station Rd",
        "lat": 51.45772896357182,
        "lng": -0.9720191359519958,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45772896357182,
            "lng": -0.9720191359519958
          }
        ],
        "postalCode": "RG1 1JX",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "18-20 Station Rd",
          "Reading",
          "RG1 1JX",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1fa931735",
          "name": "Hotel",
          "pluralName": "Hotels",
          "shortName": "Hotel",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/hotel_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 2230,
        "usersCount": 841,
        "tipCount": 18
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b2d10b2f964a52079cd24e3",
      "name": "Pitcher & Piano",
      "location": {
        "address": "Friar St",
        "crossStreet": "Station Rd",
        "lat": 51.456691164716155,
        "lng": -0.9723423697820053,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.456691164716155,
            "lng": -0.9723423697820053
          }
        ],
        "postalCode": "RG1 1DB",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "Friar St (Station Rd)",
          "Reading",
          "RG1 1DB",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d116941735",
          "name": "Bar",
          "pluralName": "Bars",
          "shortName": "Bar",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 1362,
        "usersCount": 692,
        "tipCount": 11
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4bbf5ae030c99c74b3065511",
      "name": "McDonald's",
      "location": {
        "address": "142-143 Friar St",
        "lat": 51.45675315777535,
        "lng": -0.9735869351083962,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45675315777535,
            "lng": -0.9735869351083962
          }
        ],
        "postalCode": "RG1 1EX",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "142-143 Friar St",
          "Reading",
          "Berkshire",
          "RG1 1EX",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d16e941735",
          "name": "Fast Food Restaurant",
          "pluralName": "Fast Food Restaurants",
          "shortName": "Fast Food",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/fastfood_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 599,
        "usersCount": 332,
        "tipCount": 6
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556f7a12bd6a75a9903bddb2"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "58558626da54ae2d881f20b0",
      "name": "Revolucion De Cuba",
      "location": {
        "lat": 51.45688,
        "lng": -0.9729693,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45688,
            "lng": -0.9729693
          }
        ],
        "cc": "GB",
        "country": "United Kingdom",
        "formattedAddress": [
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1be941735",
          "name": "Latin American Restaurant",
          "pluralName": "Latin American Restaurants",
          "shortName": "Latin American",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/latinamerican_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 63,
        "usersCount": 53,
        "tipCount": 2
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b30b492f964a52009fb24e3",
      "name": "Mission Burrito",
      "location": {
        "address": "15a Riverside Level",
        "crossStreet": "The Oracle Shopping Centre",
        "lat": 51.45302077408171,
        "lng": -0.9708899259567261,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45302077408171,
            "lng": -0.9708899259567261
          }
        ],
        "postalCode": "RG1 2AG",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "15a Riverside Level (The Oracle Shopping Centre)",
          "Reading",
          "RG1 2AG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d153941735",
          "name": "Burrito Place",
          "pluralName": "Burrito Places",
          "shortName": "Burritos",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burrito_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 2523,
        "usersCount": 758,
        "tipCount": 39
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556e5b6fbd6a82902e295c4d"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4b9fd471f964a5208a4237e3",
      "name": "Starbucks",
      "location": {
        "address": "Kiosk Unit R19 Riverside Level",
        "crossStreet": "The Oracle Shopping Centre",
        "lat": 51.4531310886561,
        "lng": -0.9699726104736328,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.4531310886561,
            "lng": -0.9699726104736328
          }
        ],
        "postalCode": "RG1 2AG",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "Kiosk Unit R19 Riverside Level (The Oracle Shopping Centre)",
          "Reading",
          "RG1 2AG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 3839,
        "usersCount": 1026,
        "tipCount": 19
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "12422",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556f676fbd6a75a99038d8ec"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4bea919eb3352d7fa24555d2",
      "name": "Workhouse Coffee",
      "location": {
        "address": "10-12 King St",
        "lat": 51.454962940196424,
        "lng": -0.9700369834899902,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.454962940196424,
            "lng": -0.9700369834899902
          }
        ],
        "postalCode": "RG1 2HF",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "10-12 King St",
          "Reading",
          "RG1 2HF",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 2922,
        "usersCount": 549,
        "tipCount": 80
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "535249a5498eb7454d1d6e03",
      "name": "Tamp Culture Coffee",
      "location": {
        "address": "Gun St",
        "crossStreet": "at Minster St",
        "lat": 51.45425929058995,
        "lng": -0.9725287556648254,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45425929058995,
            "lng": -0.9725287556648254
          }
        ],
        "postalCode": "RG1 2AG",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "Gun St (at Minster St)",
          "Reading",
          "Berkshire",
          "RG1 2AG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 659,
        "usersCount": 74,
        "tipCount": 18
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4d4d54f9a7f86ea8af5e35de",
      "name": "Tutti Frutti",
      "location": {
        "address": "Unit 9 Brunel Arcade",
        "crossStreet": "Reading Railway Station",
        "lat": 51.45845296334874,
        "lng": -0.9715685279051128,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45845296334874,
            "lng": -0.9715685279051128
          }
        ],
        "postalCode": "RG1 1LT",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "Unit 9 Brunel Arcade (Reading Railway Station)",
          "Reading",
          "RG1 1LT",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1c9941735",
          "name": "Ice Cream Shop",
          "pluralName": "Ice Cream Shops",
          "shortName": "Ice Cream",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/icecream_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 898,
        "usersCount": 219,
        "tipCount": 32
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4e4386ffd4c02cf15f56f91c",
      "name": "Caffè Nero",
      "location": {
        "address": "75-76 Broad St",
        "lat": 51.45536406575946,
        "lng": -0.9750258922576904,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45536406575946,
            "lng": -0.9750258922576904
          }
        ],
        "postalCode": "RG1 2AP",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "75-76 Broad St",
          "Reading",
          "Berkshire",
          "RG1 2AP",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 1406,
        "usersCount": 480,
        "tipCount": 13
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "55693a3aacea5b47744bc044"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "55647b84498ead5689aaa7cd",
      "name": "CAU",
      "location": {
        "address": "The Oracle Shopping Centre",
        "crossStreet": "Holybrook Walk",
        "lat": 51.4541797908241,
        "lng": -0.9721552466863791,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.4541797908241,
            "lng": -0.9721552466863791
          }
        ],
        "postalCode": "RG1 2AQ",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "The Oracle Shopping Centre (Holybrook Walk)",
          "Reading",
          "Berkshire",
          "RG1 2AQ",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d107941735",
          "name": "Argentinian Restaurant",
          "pluralName": "Argentinian Restaurants",
          "shortName": "Argentinian",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/argentinian_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 225,
        "usersCount": 151,
        "tipCount": 11
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4afeda97f964a520eb3022e3",
      "name": "The Oakford Social Club",
      "location": {
        "address": "53 Blagrave St",
        "lat": 51.457832544481114,
        "lng": -0.9714874499296665,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.457832544481114,
            "lng": -0.9714874499296665
          }
        ],
        "postalCode": "RG1 1PZ",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "53 Blagrave St",
          "Reading",
          "RG1 1PZ",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d116941735",
          "name": "Bar",
          "pluralName": "Bars",
          "shortName": "Bar",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 3697,
        "usersCount": 1068,
        "tipCount": 24
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "543553f6498e8231d68716f1",
      "name": "Creams",
      "location": {
        "address": "14-16 Oxford Rd",
        "lat": 51.455440768736366,
        "lng": -0.9762659017845629,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.455440768736366,
            "lng": -0.9762659017845629
          }
        ],
        "postalCode": "RG1 7LA",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "14-16 Oxford Rd",
          "Reading",
          "Berkshire",
          "RG1 7LA",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1d0941735",
          "name": "Dessert Shop",
          "pluralName": "Dessert Shops",
          "shortName": "Desserts",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/dessert_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 205,
        "usersCount": 130,
        "tipCount": 5
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "52d69e37498e5944c1b1c4a4",
      "name": "Lincoln Coffee House",
      "location": {
        "address": "60 Kings Rd",
        "lat": 51.45491388654754,
        "lng": -0.9658547727637441,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45491388654754,
            "lng": -0.9658547727637441
          }
        ],
        "postalCode": "RG1 3AA",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "60 Kings Rd",
          "Reading",
          "RG1 3AA",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 204,
        "usersCount": 47,
        "tipCount": 7
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4be5b1cf2468c928b1630043",
      "name": "wagamama",
      "location": {
        "address": "Riverside Level",
        "lat": 51.45277674392463,
        "lng": -0.9714746475219727,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45277674392463,
            "lng": -0.9714746475219727
          }
        ],
        "postalCode": "RG1 2AG",
        "cc": "GB",
        "neighborhood": "wagamama_uk",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "Riverside Level",
          "Reading",
          "Berkshire",
          "RG1 2AG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d142941735",
          "name": "Asian Restaurant",
          "pluralName": "Asian Restaurants",
          "shortName": "Asian",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/asian_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 2509,
        "usersCount": 1110,
        "tipCount": 31
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556e5cbabd6a82902e2983be"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4c702f939375a093213d0637",
      "name": "Bill's Restaurant",
      "location": {
        "address": "St Mary's Church House",
        "crossStreet": "Chain St",
        "lat": 51.45475680631779,
        "lng": -0.9731836880242132,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45475680631779,
            "lng": -0.9731836880242132
          }
        ],
        "postalCode": "RG1 2HX",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "St Mary's Church House (Chain St)",
          "Reading",
          "Berkshire",
          "RG1 2HX",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d143941735",
          "name": "Breakfast Spot",
          "pluralName": "Breakfast Spots",
          "shortName": "Breakfast",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 2367,
        "usersCount": 1080,
        "tipCount": 72
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "5569fcb1a7c8896abe7d8cf3"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4fe603b6e4b0af2e674a2abc",
      "name": "Cosmo",
      "location": {
        "address": "35-38 Friar St",
        "lat": 51.4567716405764,
        "lng": -0.9737113257385849,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.4567716405764,
            "lng": -0.9737113257385849
          }
        ],
        "postalCode": "RG1 1DX",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "35-38 Friar St",
          "Reading",
          "RG1 1DX",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d142941735",
          "name": "Asian Restaurant",
          "pluralName": "Asian Restaurants",
          "shortName": "Asian",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/asian_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 1079,
        "usersCount": 639,
        "tipCount": 39
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "58f12453826444761c7cd818",
      "name": "Benny's",
      "location": {
        "crossStreet": "Oxford Rd",
        "lat": 51.455332,
        "lng": -0.977409,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.455332,
            "lng": -0.977409
          }
        ],
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "Oxford Rd",
          "Reading",
          "Berkshire",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d14e941735",
          "name": "American Restaurant",
          "pluralName": "American Restaurants",
          "shortName": "American",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 3,
        "usersCount": 3,
        "tipCount": 2
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b7ee470f964a520610730e3",
      "name": "The Hope Tap (Wetherspoon)",
      "location": {
        "address": "99-105 Friar St",
        "lat": 51.45637909275357,
        "lng": -0.9754559848233707,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45637909275357,
            "lng": -0.9754559848233707
          }
        ],
        "postalCode": "RG1 1EP",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "99-105 Friar St",
          "Reading",
          "RG1 1EP",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d11b941735",
          "name": "Pub",
          "pluralName": "Pubs",
          "shortName": "Pub",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 1755,
        "usersCount": 768,
        "tipCount": 26
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556d110aaceaff43eb08f06e"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "55ed7ded498ebb2cdcc57e51",
      "name": "C.U.P. Speciality Coffee & Tea",
      "location": {
        "address": "53 St Mary's Butts",
        "lat": 51.45462268004862,
        "lng": -0.973711467853319,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45462268004862,
            "lng": -0.973711467853319
          }
        ],
        "postalCode": "RG1 2LG",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "53 St Mary's Butts",
          "Reading",
          "Berkshire",
          "RG1 2LG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 503,
        "usersCount": 130,
        "tipCount": 13
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "54954e0a498ed521a29a7b1d",
      "name": "Artigiano",
      "location": {
        "address": "81 Broad St",
        "lat": 51.455507245542414,
        "lng": -0.9747496560593417,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.455507245542414,
            "lng": -0.9747496560593417
          }
        ],
        "postalCode": "RG1 2AP",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "81 Broad St",
          "Reading",
          "RG1 2AP",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1e0931735",
          "name": "Coffee Shop",
          "pluralName": "Coffee Shops",
          "shortName": "Coffee Shop",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 642,
        "usersCount": 193,
        "tipCount": 13
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b2421ccf964a520d76124e3",
      "name": "Vue Cinema",
      "location": {
        "address": "The Oracle Centre",
        "crossStreet": "Off Mill Lane North",
        "lat": 51.453329666423016,
        "lng": -0.9700553563173436,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.453329666423016,
            "lng": -0.9700553563173436
          }
        ],
        "postalCode": "RG1 2AG",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "The Oracle Centre (Off Mill Lane North)",
          "Reading",
          "RG1 2AG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d180941735",
          "name": "Multiplex",
          "pluralName": "Multiplexes",
          "shortName": "Cineplex",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/movietheater_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 5816,
        "usersCount": 1760,
        "tipCount": 29
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "events": {
        "count": 19,
        "summary": "19 movies"
      },
      "storeId": "38",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556a289fa7c8957d73d366f8"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "57eeb55d498ea73596bcbeb5",
      "name": "Public",
      "location": {
        "lat": 51.45319,
        "lng": -0.97527635,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45319,
            "lng": -0.97527635
          }
        ],
        "postalCode": "RG1 7SB",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "Reading",
          "Berkshire",
          "RG1 7SB",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d116941735",
          "name": "Bar",
          "pluralName": "Bars",
          "shortName": "Bar",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 31,
        "usersCount": 22,
        "tipCount": 0
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "58eb775b0319b80a6506eb9f",
      "name": "Thirsty Bear",
      "location": {
        "address": "King's Road",
        "lat": 51.45475238132489,
        "lng": -0.9633199811014493,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45475238132489,
            "lng": -0.9633199811014493
          }
        ],
        "postalCode": "RG1 3BY",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "King's Road",
          "Reading",
          "Berkshire",
          "RG1 3BY",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1ca941735",
          "name": "Pizza Place",
          "pluralName": "Pizza Places",
          "shortName": "Pizza",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/pizza_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 8,
        "usersCount": 7,
        "tipCount": 0
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4babf0e2f964a52078d73ae3",
      "name": "Thai Corner",
      "location": {
        "address": "47 West St",
        "lat": 51.45648051335135,
        "lng": -0.9763187170028687,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45648051335135,
            "lng": -0.9763187170028687
          }
        ],
        "postalCode": "RG1 1TZ",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "47 West St",
          "Reading",
          "RG1 1TZ",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d149941735",
          "name": "Thai Restaurant",
          "pluralName": "Thai Restaurants",
          "shortName": "Thai",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/thai_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 808,
        "usersCount": 408,
        "tipCount": 23
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b5b4282f964a52033ef28e3",
      "name": "Nando's",
      "location": {
        "address": "4 The Riverside",
        "lat": 51.45317449597631,
        "lng": -0.9704421296090795,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45317449597631,
            "lng": -0.9704421296090795
          }
        ],
        "postalCode": "RG1 2AG",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "4 The Riverside",
          "Reading",
          "RG1 2AG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4def73e84765ae376e57713a",
          "name": "Portuguese Restaurant",
          "pluralName": "Portuguese Restaurants",
          "shortName": "Portuguese",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/portuguese_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 2676,
        "usersCount": 1231,
        "tipCount": 21
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "N020",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556ca462a7c87f63786aa4e2"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "520cc18d11d2dc53130a0593",
      "name": "Five Guys",
      "location": {
        "address": "The Oracle Shopping Centre, Unit U1 - Upper Level (4)",
        "lat": 51.4536437988281,
        "lng": -0.971316576004028,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.4536437988281,
            "lng": -0.971316576004028
          }
        ],
        "postalCode": "RG1 2AG",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "The Oracle Shopping Centre, Unit U1 - Upper Level (4)",
          "Reading",
          "RG1 2AG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d16c941735",
          "name": "Burger Joint",
          "pluralName": "Burger Joints",
          "shortName": "Burgers",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burger_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 1625,
        "usersCount": 723,
        "tipCount": 44
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "702",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556df7e1a7c82e6b724d8230"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "55ca3037498e2f80754e01be",
      "name": "Bakery House",
      "location": {
        "address": "82 London St",
        "lat": 51.451692255149645,
        "lng": -0.9678880458885069,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.451692255149645,
            "lng": -0.9678880458885069
          }
        ],
        "postalCode": "RG1 4SJ",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "82 London St",
          "Reading",
          "Berkshire",
          "RG1 4SJ",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "52e81612bcbc57f1066b79ff",
          "name": "Halal Restaurant",
          "pluralName": "Halal Restaurants",
          "shortName": "Halal",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/halal_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 158,
        "usersCount": 64,
        "tipCount": 5
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "57924099498ef657a95904f8",
      "name": "Fisherman's Cottage",
      "location": {
        "lat": 51.455738,
        "lng": -0.95502365,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.455738,
            "lng": -0.95502365
          }
        ],
        "postalCode": "RG1 3HG",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "Reading",
          "Berkshire",
          "RG1 3HG",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d11b941735",
          "name": "Pub",
          "pluralName": "Pubs",
          "shortName": "Pub",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 112,
        "usersCount": 29,
        "tipCount": 1
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4c177520c2dfc928b9ffa769",
      "name": "The Outlook",
      "location": {
        "address": "76-78a Kings Rd",
        "lat": 51.4546704505846,
        "lng": -0.9652934968471527,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.4546704505846,
            "lng": -0.9652934968471527
          }
        ],
        "postalCode": "RG1 3BJ",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "76-78a Kings Rd",
          "Reading",
          "RG1 3BJ",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d11b941735",
          "name": "Pub",
          "pluralName": "Pubs",
          "shortName": "Pub",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 1513,
        "usersCount": 378,
        "tipCount": 18
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "venuePage": {
        "id": "47570814"
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b54c792f964a5201ccc27e3",
      "name": "Zerodegrees",
      "location": {
        "address": "9 Bridge St",
        "lat": 51.4535924012608,
        "lng": -0.9732985496520996,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.4535924012608,
            "lng": -0.9732985496520996
          }
        ],
        "postalCode": "RG1 2LR",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "9 Bridge St",
          "Reading",
          "Berkshire",
          "RG1 2LR",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "50327c8591d4c4b30a586d5d",
          "name": "Brewery",
          "pluralName": "Breweries",
          "shortName": "Brewery",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/brewery_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 1526,
        "usersCount": 825,
        "tipCount": 27
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "storeId": "",
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556e5cc9bd6a82902e2985da"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "53653c10498e58bd4e7380af",
      "name": "Coconut Bar & Kitchen",
      "location": {
        "address": "62-63 St Mary's Butts",
        "crossStreet": "Broad Street",
        "lat": 51.45491432983279,
        "lng": -0.9746781388486304,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45491432983279,
            "lng": -0.9746781388486304
          }
        ],
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "62-63 St Mary's Butts (Broad Street)",
          "Reading",
          "Berkshire",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d142941735",
          "name": "Asian Restaurant",
          "pluralName": "Asian Restaurants",
          "shortName": "Asian",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/asian_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 403,
        "usersCount": 220,
        "tipCount": 13
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b8ee996f964a520473e33e3",
      "name": "Pavlov's Dog",
      "location": {
        "address": "31 St Mary's Butts",
        "lat": 51.454340092914585,
        "lng": -0.9745337849203847,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.454340092914585,
            "lng": -0.9745337849203847
          }
        ],
        "postalCode": "RG1 2LN",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "31 St Mary's Butts",
          "Reading",
          "RG1 2LN",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d11b941735",
          "name": "Pub",
          "pluralName": "Pubs",
          "shortName": "Pub",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 1271,
        "usersCount": 526,
        "tipCount": 17
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4ba55d3df964a52079ff38e3",
      "name": "RISC Global Cafe",
      "location": {
        "address": "35-39 London St.",
        "lat": 51.4528799,
        "lng": -0.9682911000000001,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.4528799,
            "lng": -0.9682911000000001
          }
        ],
        "postalCode": "RG1 4PS",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "35-39 London St.",
          "Reading",
          "RG1 4PS",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d116941735",
          "name": "Bar",
          "pluralName": "Bars",
          "shortName": "Bar",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 575,
        "usersCount": 222,
        "tipCount": 5
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4ae3711cf964a520269521e3",
      "name": "The Purple Turtle",
      "location": {
        "address": "9 Gun St",
        "lat": 51.45403365243374,
        "lng": -0.972864031791687,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45403365243374,
            "lng": -0.972864031791687
          }
        ],
        "postalCode": "RG1 2JR",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "9 Gun St",
          "Reading",
          "RG1 2JR",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d116941735",
          "name": "Bar",
          "pluralName": "Bars",
          "shortName": "Bar",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 1897,
        "usersCount": 877,
        "tipCount": 26
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "526c0e6d11d28baa38986a3c",
      "name": "SushiMania",
      "location": {
        "address": "9 Queens Walk",
        "lat": 51.45403800037828,
        "lng": -0.9774069817406839,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45403800037828,
            "lng": -0.9774069817406839
          }
        ],
        "postalCode": "RG1 7QF",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "9 Queens Walk",
          "Reading",
          "Berkshire",
          "RG1 7QF",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1d2941735",
          "name": "Sushi Restaurant",
          "pluralName": "Sushi Restaurants",
          "shortName": "Sushi",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/sushi_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 717,
        "usersCount": 275,
        "tipCount": 20
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4bb496d9531c95213829eaa8",
      "name": "Loch Fyne",
      "location": {
        "address": "The Maltings, Bear Wharf, Fobney St",
        "lat": 51.45165902401517,
        "lng": -0.9735858790806309,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45165902401517,
            "lng": -0.9735858790806309
          }
        ],
        "postalCode": "RG1 6BT",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "The Maltings, Bear Wharf, Fobney St",
          "Reading",
          "RG1 6BT",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1ce941735",
          "name": "Seafood Restaurant",
          "pluralName": "Seafood Restaurants",
          "shortName": "Seafood",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/seafood_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 526,
        "usersCount": 350,
        "tipCount": 16
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4bf7a5f25ec320a1865987d3",
      "name": "McDonald's",
      "location": {
        "address": "Forbury Retail Park",
        "crossStreet": "Kenavon Dr",
        "lat": 51.45752451131112,
        "lng": -0.9609809761203679,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45752451131112,
            "lng": -0.9609809761203679
          }
        ],
        "postalCode": "RG1 3HS",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "Forbury Retail Park (Kenavon Dr)",
          "Reading",
          "Berkshire",
          "RG1 3HS",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d16e941735",
          "name": "Fast Food Restaurant",
          "pluralName": "Fast Food Restaurants",
          "shortName": "Fast Food",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/fastfood_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 593,
        "usersCount": 342,
        "tipCount": 4
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556f7a12bd6a75a9903bddb2"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4bb8c252cf2fc9b669cf9f02",
      "name": "Bel and The Dragon",
      "location": {
        "address": "Blakes Lock, Gas Works Rd",
        "lat": 51.455763,
        "lng": -0.958374,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.455763,
            "lng": -0.958374
          }
        ],
        "postalCode": "RG1 3EQ",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "Blakes Lock, Gas Works Rd",
          "Reading",
          "RG1 3EQ",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d155941735",
          "name": "Gastropub",
          "pluralName": "Gastropubs",
          "shortName": "Gastropub",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/gastropub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 827,
        "usersCount": 540,
        "tipCount": 23
      },
      "hasMenu": true,
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4bb4f39ec29a95211200a835",
      "name": "The Crown On The Bridge",
      "location": {
        "address": "3 Bridge St",
        "lat": 51.466688,
        "lng": -0.976865,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.466688,
            "lng": -0.976865
          }
        ],
        "postalCode": "RG4 8AA",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "3 Bridge St",
          "Reading",
          "Berkshire",
          "RG4 8AA",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d11b941735",
          "name": "Pub",
          "pluralName": "Pubs",
          "shortName": "Pub",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 329,
        "usersCount": 116,
        "tipCount": 5
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "venuePage": {
        "id": "148323761"
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b5b1f68f964a520b2e428e3",
      "name": "The Hexagon",
      "location": {
        "address": "Queens Walk",
        "lat": 51.45389659760181,
        "lng": -0.9779012203216553,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45389659760181,
            "lng": -0.9779012203216553
          }
        ],
        "postalCode": "RG1 7UA",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "Queens Walk",
          "Reading",
          "Berkshire",
          "RG1 7UA",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d1f2931735",
          "name": "Performing Arts Venue",
          "pluralName": "Performing Arts Venues",
          "shortName": "Performing Arts",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/performingarts_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 1258,
        "usersCount": 705,
        "tipCount": 8
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    },
    {
      "id": "4b16bf9bf964a520e6bc23e3",
      "name": "The Back of Beyond (Wetherspoon)",
      "location": {
        "address": "104-108 Kings Rd",
        "lat": 51.45459228848191,
        "lng": -0.9631940591909518,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45459228848191,
            "lng": -0.9631940591909518
          }
        ],
        "postalCode": "RG1 3BY",
        "cc": "GB",
        "city": "Reading",
        "state": "Berkshire",
        "country": "United Kingdom",
        "formattedAddress": [
          "104-108 Kings Rd",
          "Reading",
          "Berkshire",
          "RG1 3BY",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d11b941735",
          "name": "Pub",
          "pluralName": "Pubs",
          "shortName": "Pub",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": true,
      "stats": {
        "checkinsCount": 3091,
        "usersCount": 585,
        "tipCount": 20
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [
        {
          "id": "556d110aaceaff43eb08f06e"
        }
      ],
      "hasPerk": false
    },
    {
      "id": "4addf273f964a520a26621e3",
      "name": "The Nag's Head",
      "location": {
        "address": "5 Russell St",
        "lat": 51.45457518213495,
        "lng": -0.9822919964790344,
        "labeledLatLngs": [
          {
            "label": "display",
            "lat": 51.45457518213495,
            "lng": -0.9822919964790344
          }
        ],
        "postalCode": "RG1 7XD",
        "cc": "GB",
        "city": "Reading",
        "country": "United Kingdom",
        "formattedAddress": [
          "5 Russell St",
          "Reading",
          "RG1 7XD",
          "United Kingdom"
        ]
      },
      "categories": [
        {
          "id": "4bf58dd8d48988d11b941735",
          "name": "Pub",
          "pluralName": "Pubs",
          "shortName": "Pub",
          "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
          },
          "primary": true
        }
      ],
      "verified": false,
      "stats": {
        "checkinsCount": 2133,
        "usersCount": 349,
        "tipCount": 19
      },
      "allowMenuUrlEdit": true,
      "beenHere": {
        "lastCheckinExpiredAt": 0
      },
      "specials": {
        "count": 0,
        "items": []
      },
      "hereNow": {
        "count": 0,
        "summary": "Nobody here",
        "groups": []
      },
      "referralId": "v-1492687431",
      "venueChains": [],
      "hasPerk": false
    }
  ],
  "confident": false,
  "geocode": {
    "what": "",
    "where": "reading united kingdom",
    "feature": {
      "cc": "GB",
      "name": "Reading",
      "displayName": "Reading, United Kingdom",
      "matchedName": "Reading, United Kingdom",
      "highlightedName": "<b>Reading</b>, <b>United Kingdom</b>",
      "woeType": 7,
      "slug": "reading-united-kingdom",
      "id": "geonameid:2639577",
      "longId": "72057594040567513",
      "geometry": {
        "center": {
          "lat": 51.45625,
          "lng": -0.97113
        },
        "bounds": {
          "ne": {
            "lat": 51.46877849999987,
            "lng": -0.8764080000000831
          },
          "sw": {
            "lat": 51.4115814999999,
            "lng": -0.9636500221884035
          }
        }
      }
    },
    "parents": []
  }
}

function build_itinerary() {
  if (JSON.length === 0) {
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
    let itinerary_items = JSON.venues.slice(0, 5);
    itinerary_items.forEach(function(element, index) {
      console.log(element.name + ' at index ' + index);
      //start component builder
    });
  }
}

function build_travel() {
  
}

function build_item_pill() {
  let new_item = document.createElement('div');
  {
    new_item.className = 'slot_box';
    new_item.dataset.travel = 'false';
    new_item.dataset.venue_id = JSON.venues[0].id;
    {
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
            div.appendChild(document.createTextNode(JSON.venues[0].name));
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
      new_item.appendChild(article);
      
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
      new_item.appendChild(travel);
      
      let travel_instructions = document.createElement('ul');
      {
        travel_instructions.className = 'travel__instructions';
        let instruction = document.createElement('li');
        {
          instruction.appendChild(document.createTextNode('no instructions set, yet'));
        }
        travel_instructions.appendChild(instruction);
      }
      new_item.appendChild(travel_instructions);
    }
  }
  itinerary_container.appendChild(new_item);
  
  add_event_listeners();
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
  //let my_url = 'http://localhost:3000/api/location?near=' + location;
  let my_url = 'http://localhost:3000/api/location';
  
  $.ajax({
    url: my_url,
    type: 'GET',
    data: {
      near: location
    },
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