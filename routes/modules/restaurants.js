const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const restaurantItem = req.body
  let rest = {
    name: restaurantItem.name,
    category: restaurantItem.category,
    image: restaurantItem.image,
    location: restaurantItem.location,
    phone: restaurantItem.phone,
    google_map: restaurantItem.google_map,
    rating: restaurantItem.rating,
    description: restaurantItem.description
  }

  let { name, category, image, location, phone, google_map, rating, description } = rest

  return Restaurant.create({
    name,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const restaurantItem = req.body
  let rest = {
    name: restaurantItem.name,
    category: restaurantItem.category,
    image: restaurantItem.image,
    location: restaurantItem.location,
    phone: restaurantItem.phone,
    google_map: restaurantItem.google_map,
    rating: restaurantItem.rating,
    description: restaurantItem.description
  }

  let { name, category, image, location, phone, google_map, rating, description } = rest

  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = name
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.google_map = google_map
      restaurant.rating = rating
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router