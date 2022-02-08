
var express = require('express')
var router = express.Router();

var operatingSystem = require('os')

router.get('/', function(req,res,next){
    res.json(
        {
            hostname: operatingSystem.hostname(),
             type: operatingSystem.type(),
              platform: operatingSystem.platform()
        }
    )
})

router.get('/cpus', function(req,res,next){
    res.json(
        {
            os: operatingSystem.cpus()
        }
    )
})

router.get('/cpus/:id', function(req,res,next){
    res.json({
        os: operatingSystem.cpus() [req.params.id] 
    })
})

module.exports = router; 