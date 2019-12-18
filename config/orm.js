const connection = require('./connection.js');

const orm = {
    selectAll: function(cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, (err, result)=> {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(name, cb) {
        let queryString = `INSERT INTO burgers (burger_name) VALUES ("${name}")`;
        connection.query(queryString, (err, result)=> {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(condition, cb) {
        let queryString = `UPDATE burgers SET devoured = true WHERE id = ${condition}`;
        connection.query(queryString, (err, result)=>{
            if (err) throw err;
            cb(result);
        });
    }
}
module.exports = orm;