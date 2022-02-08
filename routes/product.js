var express = require('express')
var router = express.Router();
var listProduct = require('../database.json')


router.get('/', function(req,res,next){
    res.json(listProduct) 
})

router.get('/:id', function(req,res,next){
    res.json(listProduct[req.params.id]) 
})

router.get('/:id/:qt', function(req,res,next){
    res.json({
        id: req.params.id,
        qt: req.params.qt,
        unite_price: listProduct[req.params.id].price,
        totale_price: listProduct[req.params.id].price * req.params.qt
    }) 
})

router.get('/instock/:qt', function(req, res) {
    var qt = req.params.qt;
    var list = [];
    for(id in listProduct) {
        var product = listProduct[id];
        if(product.stock >= qt) {
          list.push(product);
        }
    }
    res.json(list);
  }); 

module.exports = router;