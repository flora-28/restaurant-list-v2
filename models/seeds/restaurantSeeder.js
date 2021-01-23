const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restList = require('./restaurant.json')

mongoose.connect('mongodb://localhost/restaurant-list-v2', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  for (i = 0; i < restList.results.length; i++) {
    Restaurant.create(restList.results[i]);
  }
})