# 吃貨女子の餐廳清單 v2
An update website to browse, search, create, update and delete restaurant, build with Node.js, Express and MongoDB.

![index-img](https://raw.githubusercontent.com/flora-28/restaurant-list-v2/master/public/photos/index-img.jpg)
![detail-img](https://raw.githubusercontent.com/flora-28/restaurant-list-v2/master/public/photos/detail-img.jpg)
![create-img](https://raw.githubusercontent.com/flora-28/restaurant-list-v2/master/public/photos/create-img.jpg)

## Features
1. Users can see all the restaurants and their simple information on the homepage:
   + Restaurant photo
   + Restaurant name
   + Restaurant category
   + Restaurant rating
2. Users can click in to see the detailed information of the restaurant:
   + Name
   + Category
   + Location
   + Phone
   + Description
   + Photo
3. Users can find the specific restaurant by searching the restaurant name or category 
4. (NEW) Users can create the new restaurant 
5. (NEW) Users can modify the restaurant information
6. (NEW) Users can delete the restaurant in the homepage and in the detailed page

## Getting Started
Clone repository to your local computer
```
$ git clone https://github.com/flora-28/restaurant-list-v2.git
```
Install by npm
```
$ npm install
```
Execute
```
$ npm run seed
$ npm run dev 
```
Terminal show the message
```
Express is listening on localhost:3000
```
Now you can browse the web application on
```
http://localhost:3000
```
## Build With
+ Node.js: v10.15.0
+ Express: v4.17.1
+ Express-Handlebars: v5.2.0
+ body-parser: v1.19.0
+ mongoose: v5.11.13

## Author
Flora Peng