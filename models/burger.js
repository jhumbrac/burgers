const orm = require('../config/orm');

const burger = {
    selectAll: function(cb) {
        orm.selectAll(res=> cb(res));
    },
    insertOne: function(name, cb) {
        orm.insertOne(name, res=> cb(res));
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, res => cb(res));
    }
};


module.exports = burger;