var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoppingCart', {useNewUrlParser: true } );

var products = [
    new Product({
    imagePath : 'https://images-na.ssl-images-amazon.com/images/I/61ig6Fo653L._SX373_BO1,204,203,200_.jpg',
    title: 'Warcraft Games',
    desc: 'Awesome Game and it is the best!!!',
    price: 10
}),
    new Product({
    imagePath : 'https://cdn.blizzardwatch.com/wp-content/uploads/2018/08/Hippogriffeightpointoh.jpg',
    title: 'War of thrones',
    desc: 'Awesome Game!!!',
    price: 20
}),
new Product({
    imagePath : 'https://images-na.ssl-images-amazon.com/images/I/71wvlqMB%2BuL._SX355_.jpg',
    title: 'War of Dragons',
    desc: 'Awesome Game!!!',
    price: 30
}), 
new Product({
    imagePath : 'http://images4.fanpop.com/image/photos/20700000/WAR-demons-and-devils-20795867-249-202.jpg',
    title: 'War of demons',
    desc: 'Awesome Game!!!',
    price: 40
}),
new Product({
    imagePath : 'https://images.lukiegames.com/t_300e2/assets/images/PS2/ps2_god_of_war_2-110214.jpg',
    title: 'God of war',
    desc: 'Awesome Game!!!',
    price: 50
})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}