const connection = require('./connection.js');

const orm = {
    selectAll: function(cb) {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err, result)=> {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(name, cb) {
        const queryString = `INSERT INTO burgers (burger_name) VALUES ("${name}")`;
        connection.query(queryString, (err, result)=> {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(condition, cb) {
        const queryString = `UPDATE burgers SET devoured WHERE id = ${condition}`;
        connection.query(queryString, (err, result)=>{
            if (err) throw err;
            cb(result);
        });
    }
}
module.exports = orm;