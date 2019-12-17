const orm = require('../config/orm');

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', res=> cb(res));
    },
    insertOne: function(name, cb) {
        orm.insertOne('burgers', name, res=> cb(res));
    },
    updateOne: function(id, cb) {
        orm.updateOne('burgers', id, res => cb(res));
    }
};


module.exports = burger;