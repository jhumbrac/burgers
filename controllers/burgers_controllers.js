const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res)=>{
    burger.selectAll(data=>{
        let handleBarsObj = {
            burgers: data
        };
        res.render('index', handleBarsObj);
    });
});
router.post('/api/burgers', (req, res)=> {
    burger.insertOne()
});
router.put('/api/burgers/:id', (req, res)=>{
    let condition = req.params.id;
    burger.updateOne()
})



module.exports = router;