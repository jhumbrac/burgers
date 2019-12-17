const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const handlebars = require('express-handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({}));
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controllers');

app.use(routes);

app.listen(PORT, ()=> console.log(`server listening on ${PORT}`));