const Restaurant = require('../restaurant')
const restList = require('./restaurant.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (i = 0; i < restList.results.length; i++) {
    Restaurant.create(restList.results[i]);
  }
  console.log('done')
})