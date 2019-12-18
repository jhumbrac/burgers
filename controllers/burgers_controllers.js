const express = require('express');
const router = express.Router();
const burger = require('../models/burger'); // create index.js inside models and require everything

router.get('/', (req, res)=>{
    burger.selectAll(data=>{ // might have to be req.data
        let handleBarsObj = {
            burgers: data
        };
        res.render('index', handleBarsObj);
    });
});
router.post('/api/burgers', (req, res)=> {
    console.log(req.body);
    burger.insertOne(req.body.name, result=>
        res.json(result))
});
router.put('/api/burgers/:id', (req, res)=>{
    let condition = req.params.id;
    burger.updateOne(condition, result => res.json(result))
});



module.exports = router;